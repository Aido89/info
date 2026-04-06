import { useState } from 'react';
import { content, Language } from './lib/data';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { 
  Github, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ExternalLink,
  Activity,
  GraduationCap,
  Server, 
  Video, 
  Mic, 
  BookOpen, 
  Wifi,
  Briefcase,
  User,
  Cpu,
  Award,
  Layers,
  Download,
  Heart,
  MessageSquare
} from 'lucide-react';
import aidynPhoto from 'figma:asset/b061ec548e08f94a0a8904cc644327de901b5dcf.png';
import instagramQr from 'figma:asset/7a140d019c83589188e43940f93b3b98a0b450cf.png';
import youtubeQr from 'figma:asset/666ba225d7f60c740f29acca4f1ee6a8ea8f1207.png';
import whatsappQr from 'figma:asset/e84aaa0c24e3442b5890e810437cdcbf283ed4a0.png';
import tiktokQr from 'figma:asset/fafda684526ea26cb2bacfe91d42a4942d372ed4.png';
import telegramQr from 'figma:asset/dee633ea8e0e23d6102c0781aa5d1b0f01144413.png';

export default function App() {
  const [lang, setLang] = useState<Language>('RU');
  const t = content;

  const toggleLang = (l: Language) => setLang(l);

  return (
    <div className="portfolio-surface font-sans text-slate-600 pb-16 antialiased">
      {/* Header */}
      <header className="portfolio-hero text-white overflow-hidden relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_20%_-10%,rgba(45,212,191,0.18),transparent_50%)]" aria-hidden />
        <div className="pointer-events-none absolute top-0 right-0 w-[min(100%,520px)] h-[min(100%,520px)] bg-indigo-500/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" aria-hidden />

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 pt-6 pb-14 md:pb-20 relative z-10">
          <div className="flex justify-end mb-6">
            <div
              className="inline-flex rounded-full bg-black/25 p-1 backdrop-blur-md border border-white/15 shadow-lg"
              role="group"
              aria-label="Language"
            >
              {(['KZ', 'RU', 'EN'] as Language[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => toggleLang(l)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    lang === l
                      ? 'bg-white text-slate-900 shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12">
            <div className="relative shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full ring-4 ring-white/25 shadow-2xl overflow-hidden bg-slate-800">
                <img src={aidynPhoto} alt={t.header.name} className="w-full h-full object-cover" />
              </div>
              <div
                className="absolute bottom-2 right-2 w-9 h-9 bg-emerald-500 border-4 border-slate-900 rounded-full flex items-center justify-center text-white shadow-lg"
                title="Open to work"
              >
                <Briefcase className="w-4 h-4" />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left space-y-4 min-w-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-sm">
                {t.header.fullName[lang]}
              </h1>
              <p className="text-teal-100/95 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto lg:mx-0 leading-snug">
                {t.header.titles[lang]}
              </p>
              <p className="text-sm md:text-base text-slate-300/95 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t.header.tagline[lang]}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
                <span className="inline-flex items-center rounded-full border border-teal-400/35 bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-50">
                  IT Architect
                </span>
                <span className="inline-flex items-center rounded-full border border-teal-400/35 bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-50">
                  DevOps
                </span>
                <span className="inline-flex items-center rounded-full border border-teal-400/35 bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-50">
                  Streaming
                </span>
              </div>
            </div>

            <div className="w-full lg:w-[min(100%,340px)] shrink-0">
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 space-y-4 text-sm shadow-2xl ring-1 ring-white/10">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15 group-hover:bg-white/15 transition-colors">
                    <MapPin className="w-5 h-5 text-teal-200" />
                  </div>
                  <span className="text-white/95 font-medium leading-snug">{t.header.location[lang]}</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15 group-hover:bg-white/15 transition-colors">
                    <Mail className="w-5 h-5 text-teal-200" />
                  </div>
                  <a
                    href={`mailto:${t.footer.email}`}
                    className="text-white font-medium hover:text-teal-200 transition-colors break-all"
                  >
                    {t.footer.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15 group-hover:bg-white/15 transition-colors">
                    <Phone className="w-5 h-5 text-teal-200" />
                  </div>
                  <a href={`tel:${t.footer.phone}`} className="text-white font-medium hover:text-teal-200 transition-colors">
                    {t.footer.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15 group-hover:bg-white/15 transition-colors">
                    <Globe className="w-5 h-5 text-teal-200" />
                  </div>
                  <a
                    href="https://speedsoft.kz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-teal-200 transition-colors"
                  >
                    speedsoft.kz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <main className="container mx-auto max-w-6xl px-4 sm:px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN (Sidebar) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* PROFILE / ABOUT CARD */}
            <SectionCard 
              icon={<User className="text-blue-600" />} 
              title={t.about.title[lang]} 
              colorClass="bg-blue-100"
              titleColor="text-blue-700"
            >
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed text-sm">
                  {t.about.description[lang]}
                </p>

                {/* What We Do */}
                <div className="space-y-3">
                  {t.about.whatWeDo.map((item, i) => (
                    <div key={i} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-2 mb-1.5">
                        {i === 0 && <Server className="w-3 h-3 text-blue-600" />}
                        {i === 1 && <Video className="w-3 h-3 text-blue-600" />}
                        {i === 2 && <GraduationCap className="w-3 h-3 text-blue-600" />}
                        <h4 className="text-xs font-bold text-blue-700 uppercase">{item.category[lang]}</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc[lang]}</p>
                    </div>
                  ))}
                </div>

                {/* Personal */}
                <div>
                   <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2">
                     <Heart className="w-4 h-4 text-pink-500" />
                     {t.about.personal.title[lang]}
                   </h4>
                   <p className="text-xs text-slate-600 leading-relaxed bg-pink-50 p-3 rounded-lg border border-pink-100">
                     {t.about.personal.text[lang]}
                   </p>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2">
                     <MessageSquare className="w-4 h-4 text-emerald-500" />
                     {t.about.languages.title[lang]}
                   </h4>
                   <div className="flex flex-wrap gap-2">
                     {t.about.languages.items.map((langItem, i) => (
                       <Badge key={i} variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-100 font-normal">
                         <span className="font-semibold mr-1">{langItem.name[lang]}:</span> {langItem.level[lang]}
                       </Badge>
                     ))}
                   </div>
                </div>

              </div>
            </SectionCard>

            {/* SKILLS CARD */}
            <SectionCard 
              icon={<Cpu className="text-purple-600" />} 
              title={t.skills.title[lang]} 
              colorClass="bg-purple-100"
               titleColor="text-purple-700"
            >
               <div className="space-y-6">
                 {t.skills.categories.map((cat, i) => (
                   <div key={i} className="space-y-2">
                      <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-2">
                        {i === 0 && <Server className="w-3 h-3" />}
                        {i === 1 && <Video className="w-3 h-3" />}
                        {i === 2 && <Activity className="w-3 h-3" />}
                        {cat.name[lang]}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-slate-50 text-slate-700 text-xs font-medium rounded-full border border-slate-200/90 shadow-sm hover:border-teal-200 hover:bg-teal-50/50 hover:text-teal-900 transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                   </div>
                 ))}
               </div>
            </SectionCard>

          </div>

          {/* RIGHT COLUMN (Main Content) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* EXPERIENCE */}
            <SectionCard
              icon={<Briefcase className="text-blue-600" />}
              title={t.experience.title[lang]}
              colorClass="bg-blue-100"
              titleColor="text-blue-800"
            >
              <div className="relative pl-1">
                <div
                  className="absolute left-[15px] top-2 bottom-6 w-px bg-gradient-to-b from-blue-400 via-indigo-300 to-slate-200"
                  aria-hidden
                />
                <div className="space-y-8">
                  {t.experience.roles.map((role, i) => {
                    const period = ['2025 — Present', '2013 — 2025', '2010 — 2013', '2006 — 2010'][i] ?? '—';
                    return (
                    <div key={i} className="relative pl-10 pb-1 last:pb-0">
                      <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-[3px] border-blue-600 shadow-md z-10" />
                      <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pr-2">
                            {role.title[lang]}
                          </h3>
                          <Badge
                            variant="outline"
                            className="w-fit shrink-0 bg-white/90 text-slate-600 border-slate-200 font-medium text-xs rounded-full px-3 py-1"
                          >
                            {period}
                          </Badge>
                        </div>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{role.desc[lang]}</p>
                        {role.icons && (
                          <div className="flex flex-wrap gap-2">
                            {role.icons.map((tag) => (
                              <span
                                key={tag}
                                className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            </SectionCard>
            
            {/* EDUCATION & CERTIFICATES */}
            <SectionCard
              icon={<GraduationCap className="text-emerald-600" />}
              title={t.education.title[lang]}
              colorClass="bg-emerald-100"
              titleColor="text-emerald-800"
            >
              <div className="grid gap-3">
                {t.education.items.slice(0, 3).map((edu, i) => (
                  <div
                    key={i}
                    className="bg-emerald-50/80 border border-emerald-100/90 p-4 rounded-2xl flex items-start gap-4 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-slate-800 text-sm leading-snug">{edu}</h4>
                      <p className="text-xs text-emerald-700/90 mt-1 font-medium">
                        {i === 0 ? "Bachelor's Degree" : i === 1 ? "College Diploma" : "Specialization"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-4">
                  <Award className="w-4 h-4 text-emerald-600" />
                  {lang === 'RU' ? 'Сертификаты' : lang === 'KZ' ? 'Сертификаттар' : 'Certifications'}
                </h3>
                <ul className="space-y-2.5">
                  {t.education.items.slice(3).map((cert, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-600 bg-slate-50/80 rounded-xl px-3 py-2 border border-slate-100"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="leading-relaxed">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionCard>

            {/* PROJECTS / SERVICES */}
            <SectionCard 
              icon={<Layers className="text-orange-600" />} 
              title={t.services.title[lang]} 
              colorClass="bg-orange-100"
               titleColor="text-orange-800"
            >
               <div className="grid sm:grid-cols-2 gap-4">
                 {t.services.items.map((item, i) => (
                   <div key={i} className="group p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-orange-200/80 hover:bg-white hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                           <ServiceIcon name={item.icon} />
                        </div>
                        <h3 className="font-bold text-slate-700 text-sm leading-tight">{item.title[lang]}</h3>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3 h-12 overflow-hidden">
                        {item.desc[lang]}
                      </p>
                      <button className="text-[10px] font-bold text-orange-600 flex items-center gap-1 hover:gap-2 transition-all">
                        {t.services.button[lang]} <ExternalLink className="w-3 h-3" />
                      </button>
                   </div>
                 ))}
               </div>
            </SectionCard>

            <SectionCard
              icon={<Globe className="text-teal-600" />}
              title={t.connect.title[lang]}
              colorClass="bg-teal-100"
              titleColor="text-teal-800"
            >
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">{t.connect.subtitle[lang]}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <SocialLink
                  icon={<Linkedin className="w-4 h-4" />}
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/aidyn-kakanov-00597577/"
                  colorClass="bg-blue-600 text-white"
                />
                <SocialLink
                  icon={<Github className="w-4 h-4" />}
                  label="GitHub"
                  href="https://github.com/Aido89"
                  colorClass="bg-slate-800 text-white"
                />
                <SocialLink
                  icon={
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white flex items-center justify-center text-[10px] font-bold">
                      In
                    </div>
                  }
                  label="Instagram"
                  qr={instagramQr}
                />
                <SocialLink
                  icon={
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                      <span className="text-[10px] font-bold">Tk</span>
                    </div>
                  }
                  label="TikTok"
                  qr={tiktokQr}
                />
                <SocialLink
                  icon={
                    <div className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center">
                      <span className="text-[10px] font-bold">Tg</span>
                    </div>
                  }
                  label="Telegram"
                  qr={telegramQr}
                />
                <SocialLink
                  icon={
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center">
                      <Youtube className="w-3 h-3" />
                    </div>
                  }
                  label="YouTube"
                  qr={youtubeQr}
                />
                <SocialLink
                  icon={
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center">
                      <Phone className="w-3 h-3" />
                    </div>
                  }
                  label="WhatsApp"
                  qr={whatsappQr}
                />
              </div>
            </SectionCard>

          </div>
        </div>
      </main>

      <footer className="text-center text-slate-400 text-sm py-10 border-t border-slate-200/80 bg-slate-100/50">
        <p>
          &copy; {new Date().getFullYear()} {t.footer.brand}.{' '}
          <span className="text-slate-400/90">speedsoft.kz</span>
        </p>
      </footer>
    </div>
  );
}

// --- SUBCOMPONENTS ---

function SectionCard({ icon, title, children, colorClass, titleColor }: { icon: React.ReactNode, title: string, children: React.ReactNode, colorClass: string, titleColor: string }) {
  return (
    <div className="group/card relative bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.12)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.14)]">
      <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-blue-600 to-indigo-700 opacity-90" aria-hidden />
      <div className="p-6 sm:p-7">
        <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
          <div className={`w-11 h-11 rounded-2xl ${colorClass} flex items-center justify-center shadow-sm ring-1 ring-black/5`}>
            {icon}
          </div>
          <h2 className={`text-lg font-bold tracking-tight ${titleColor}`}>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}

function SocialLink({ icon, label, qr, href, colorClass }: { icon: React.ReactNode, label: string, qr?: string, href?: string, colorClass?: string }) {
  const content = (
    <div className="group relative flex flex-col items-center p-3 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-teal-200/80 transition-all cursor-pointer h-full">
       <div className={`mb-2 transition-transform group-hover:scale-110 ${!colorClass && 'text-slate-900'} ${colorClass ? `w-6 h-6 rounded-full flex items-center justify-center ${colorClass}` : ''}`}>
         {colorClass ? icon : icon}
       </div>
       <span className="text-xs font-medium text-slate-600 mb-2">{label}</span>
       
       {/* Hover QR Reveal */}
       {qr && (
         <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 border border-teal-100 shadow-xl p-2">
           <img src={qr} alt={label} className="w-full h-full object-contain rounded-md" />
         </div>
       )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return content;
}

function ServiceIcon({ name }: { name: string }) {
  const iconMap: Record<string, any> = {
    Server: Server,
    Video: Video,
    Mic: Mic,
    BookOpen: BookOpen,
    Wifi: Wifi,
    Activity: Activity
  };
  
  const IconComponent = iconMap[name] || Activity;
  return <IconComponent className="w-4 h-4" />;
}
