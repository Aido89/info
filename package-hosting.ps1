# Builds hosting-upload folder for static hosting. Run: powershell -ExecutionPolicy Bypass -File .\package-hosting.ps1

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Dest = Join-Path $Root "hosting-upload"

Write-Host "Target: $Dest"
if (Test-Path $Dest) {
    Remove-Item $Dest -Recurse -Force
}
New-Item -ItemType Directory -Path $Dest -Force | Out-Null

function Copy-ToDeploy {
    param([string]$RelativePath)
    $src = Join-Path $Root $RelativePath
    if (-not (Test-Path $src)) {
        Write-Warning "Skip (missing): $RelativePath"
        return
    }
    $destPath = Join-Path $Dest $RelativePath
    $parent = Split-Path -Parent $destPath
    if (-not (Test-Path $parent)) {
        New-Item -ItemType Directory -Path $parent -Force | Out-Null
    }
    Copy-Item -Path $src -Destination $destPath -Recurse -Force
}

$rootFiles = @(
    "index.html",
    "services.html",
    "skills.html",
    "cases.html",
    "formats.html",
    "directions.html",
    "training.html",
    "myinfo.html",
    "it-infrastructure.html",
    "live-streaming.html",
    "web-development.html",
    "it-training.html",
    "it-repair.html",
    "styles.css",
    "script.js",
    "README.md",
    "SETUP.md"
)
foreach ($f in $rootFiles) {
    Copy-ToDeploy $f
}

Copy-ToDeploy "images"
Copy-ToDeploy "blog"
Copy-ToDeploy "Portfolio redesign\build"
Copy-ToDeploy "assets"

$deployReadme = @'
Static site bundle. Upload ALL files and folders inside hosting-upload
to your web root (e.g. public_html), preserving structure.

Entry point: index.html

Required in the same folder as index.html: styles.css (and script.js).
If styles.css is missing, the site loses layout/colors; open
https://yoursite/styles.css in a browser — it must return 200, not 404.

Regenerate this folder with: package-hosting.ps1
'@
Set-Content -Path (Join-Path $Dest "HOSTING-README.txt") -Value $deployReadme -Encoding UTF8

$bytes = (Get-ChildItem $Dest -Recurse -File | Measure-Object -Property Length -Sum).Sum
$mb = [math]::Round($bytes / 1MB, 2)
Write-Host "Done. Size: $mb MB"
