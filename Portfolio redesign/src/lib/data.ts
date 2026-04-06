import { 
  Server, 
  Globe, 
  Cpu, 
  Video, 
  Mic, 
  GraduationCap, 
  BookOpen, 
  Shield, 
  Activity, 
  Wifi, 
  LayoutGrid, 
  Terminal, 
  Cloud, 
  Monitor, 
  Database, 
  Radio 
} from 'lucide-react';

export type Language = 'KZ' | 'RU' | 'EN';

export const content = {
  header: {
    name: "Aidyn Kakanov",
    fullName: {
      RU: "Каканов Айдын Серикболович",
      KZ: "Каканов Айдын Серікболұлы",
      EN: "Kakanov Aidyn Serikbolovych"
    },
    location: {
      RU: "Акмолинская обл., г. Косшы",
      KZ: "Ақмола обл., Қосшы қ.",
      EN: "Kosshy city, Akmola region"
    },
    titles: {
      RU: "IT-архитектор · DevOps инженер · Продюсер трансляций · Цифровой тренер",
      KZ: "IT-архитектор · DevOps инженер · Тікелей эфир продюсері · Цифрлық тренер",
      EN: "IT Architect · DevOps Engineer · Streaming Producer · Digital Trainer"
    },
    tagline: {
      RU: "Превращаю сложные технологии в простые и надежные решения.",
      KZ: "Күрделі технологияларды қарапайым әрі сенімді шешімдерге айналдырамын.",
      EN: "I turn complex technologies into simple and reliable solutions."
    },
    buttons: {
      contact: { RU: "Контакты", KZ: "Байланыс", EN: "Contact" },
      portfolio: { RU: "Портфолио", KZ: "Портфолио", EN: "Portfolio" },
      services: { RU: "Услуги", KZ: "Қызметтер", EN: "Services" }
    }
  },
  about: {
    title: { RU: "Обо мне", KZ: "Мен туралы", EN: "About Me" },
    description: {
      RU: "Наш путь начался с простого вопроса: как сделать так, чтобы технологии помогали, а не мешали? За 15 лет в IT, 10 лет в продакшене и стриминге и 5 лет в обучении мы научились собирать сложные вещи в понятные решения — без лишней теории и «магии».",
      KZ: "Біздің жолымыз қарапайым сұрақтан басталды: технологиялар кедергі емес, көмекші болуы үшін не істеу керек? IT саласында 15 жыл, продакшн мен стримингте 10 жыл және оқытуда 5 жыл ішінде біз күрделі дүниелерді түсінікті шешімдерге жинақтауды үйрендік — артық теориясыз және «сиқырсыз».",
      EN: "Our journey began with a simple question: how to make technology help rather than hinder? Over 15 years in IT, 10 years in production and streaming, and 5 years in training, we have learned to assemble complex things into understandable solutions — without unnecessary theory and 'magic'."
    },
    whatWeDo: [
      {
        category: { RU: "В IT", KZ: "IT саласында", EN: "In IT" },
        desc: {
          RU: "Гибридные среды (AD, Entra ID, Intune), автоматизация рутины через PowerShell, мониторинг (Grafana), базовая безопасность и порядок в инфраструктуре.",
          KZ: "Гибридті орталар (AD, Entra ID, Intune), PowerShell арқылы рутинаны автоматтандыру, мониторинг (Grafana), базалық қауіпсіздік және инфрақұрылымдағы тәртіп.",
          EN: "Hybrid environments (AD, Entra ID, Intune), routine automation via PowerShell, monitoring (Grafana), basic security, and infrastructure order."
        }
      },
      {
        category: { RU: "В медиа", KZ: "Медиада", EN: "In Media" },
        desc: {
          RU: "Прямые эфиры без сюрпризов — продумываем схему, резервирование, звук и картинку, чтобы всё прошло спокойно.",
          KZ: "Тосын сыйларсыз тікелей эфирлер — бәрі тыныш өтуі үшін схеманы, резервтеуді, дыбыс пен суретті ойластырамыз.",
          EN: "Live streams without surprises — we plan the scheme, redundancy, sound, and picture so that everything goes smoothly."
        }
      },
      {
        category: { RU: "В обучении", KZ: "Оқытуда", EN: "In Training" },
        desc: {
          RU: "Помогаем людям перестать бояться технологий и начать использовать их в работе.",
          KZ: "Адамдарға технологиялардан қорқуды қойып, оларды жұмыста қолдануды бастауға көмектесеміз.",
          EN: "We help people stop fearing technology and start using it in their work."
        }
      }
    ],
    personal: {
      title: { RU: "Немного личного", KZ: "Жеке ақпарат", EN: "Personal" },
      text: {
        RU: "Меня вдохновляет история тюркского мира, тактический спорт (Airsoft, Barys Airsoft Team) и автоматизация умного дома.",
        KZ: "Мені түркі әлемінің тарихы, тактикалық спорт (Airsoft, Barys Airsoft Team) және ақылды үйді автоматтандыру шабыттандырады.",
        EN: "I am inspired by the history of the Turkic world, tactical sports (Airsoft, Barys Airsoft Team), and smart home automation."
      }
    },
    languages: {
      title: { RU: "Языки", KZ: "Тілдер", EN: "Languages" },
      items: [
        { name: { RU: "Казахский", KZ: "Қазақ тілі", EN: "Kazakh" }, level: { RU: "родной", KZ: "ана тілі", EN: "native" } },
        { name: { RU: "Русский", KZ: "Орыс тілі", EN: "Russian" }, level: { RU: "свободно", KZ: "еркін", EN: "fluent" } },
        { name: { RU: "Английский", KZ: "Ағылшын тілі", EN: "English" }, level: { RU: "техдок + рабочее общение", KZ: "техникалық + жұмыс", EN: "tech docs + working" } }
      ]
    },
    online: {
      title: { RU: "В сети", KZ: "Желіде", EN: "Online" },
      handle: "SysAdminAstana"
    },
    highlights: [
      { RU: "15 лет в IT", KZ: "IT саласында 15 жыл", EN: "15 years in IT" },
      { RU: "10 лет в продакшене", KZ: "Продакшнда 10 жыл", EN: "10 years in production" },
      { RU: "5 лет в обучении", KZ: "Оқытуда 5 жыл", EN: "5 years in training" }
    ]
  },
  experience: {
    title: { RU: "Опыт работы", KZ: "Жұмыс тәжірибесі", EN: "Experience" },
    roles: [
      {
        title: {
          RU: "Системный администратор (АО «НЦПК «Өрлеу»)",
          KZ: "Жүйелік әкімші («Өрлеу» БАҰО» АҚ)",
          EN: "System Administrator (JSC 'NCPD \"Orleu\"')"
        },
        desc: {
          RU: "Администрирование Windows/Linux серверов, виртуализация (VMware, Hyper-V), Kubernetes, PostgreSQL, Active Directory и поддержка инфраструктуры.",
          KZ: "Windows/Linux серверлерін әкімшілендіру, виртуализация (VMware, Hyper-V), Kubernetes, PostgreSQL, Active Directory және инфрақұрылымды қолдау.",
          EN: "Administration of Windows/Linux servers, virtualization (VMware, Hyper-V), Kubernetes, PostgreSQL, Active Directory, and infrastructure support."
        },
        icons: ["Kubernetes", "VMware", "PostgreSQL", "Linux"]
      },
      {
        title: {
          RU: "Старший менеджер отдела IT (ЧУ «ЦПМ» АОО «НИШ»)",
          KZ: "IT бөлімінің аға менеджері («ПШО» ЖМ ДББҰ «НЗМ»)",
          EN: "Senior IT Manager (CPM AEO 'NIS')"
        },
        desc: {
          RU: "Администрирование серверной инфраструктуры, внедрение DevOps практик, управление командой, обеспечение безопасности.",
          KZ: "Серверлік инфрақұрылымды әкімшілендіру, DevOps тәжірибелерін енгізу, команданы басқару, қауіпсіздікті қамтамасыз ету.",
          EN: "Server infrastructure administration, implementing DevOps practices, team management, ensuring security."
        },
        icons: ["Server", "Shield", "Activity"]
      },
      {
        title: {
          RU: "Менеджер / Специалист по ПО (АОО «НИШ»)",
          KZ: "Менеджер / БҚ маманы (ДББҰ «НЗМ»)",
          EN: "Manager / Software Specialist (AEO 'NIS')"
        },
        desc: {
          RU: "Техническая поддержка, настройка ПО, администрирование школьной IT-инфраструктуры.",
          KZ: "Техникалық қолдау, БҚ баптау, мектептің IT-инфрақұрылымын әкімшілендіру.",
          EN: "Technical support, software configuration, administration of school IT infrastructure."
        },
        icons: ["Monitor", "Database", "Terminal"]
      },
      {
        title: {
          RU: "Инженер по оборудованию / Системный инженер",
          KZ: "Жабдықтар инженері / Жүйелік инженер",
          EN: "Equipment Engineer / System Engineer"
        },
        desc: {
          RU: "Обслуживание ПК и оргтехники, поддержка пользователей в госучреждениях и школах.",
          KZ: "ДК мен ұйымдастыру техникасына қызмет көрсету, мемлекеттік мекемелер мен мектептердегі пайдаланушыларды қолдау.",
          EN: "Maintenance of PCs and office equipment, user support in government institutions and schools."
        },
        icons: ["Cpu", "Wifi", "Radio"]
      }
    ]
  },
  skills: {
    title: { RU: "Навыки", KZ: "Дағдылар", EN: "Skills" },
    categories: [
      {
        name: { RU: "IT & DevOps", KZ: "IT & DevOps", EN: "IT & DevOps" },
        items: ["Windows Server", "Linux (Debian/CentOS)", "Active Directory", "Proxmox", "Docker", "Kubernetes", "Ansible", "Grafana", "Prometheus", "GitLab/GitHub", "PostgreSQL", "MariaDB"]
      },
      {
        name: { RU: "Медиа & Стриминг", KZ: "Медиа & Стриминг", EN: "Media & Streaming" },
        items: ["OBS Studio", "vMix", "SRT/RTMP/RTSP", "Adobe Premiere", "Adobe After Effects", "Live Streaming", "Video Production"]
      },
      {
        name: { RU: "Безопасность & Microsoft", KZ: "Қауіпсіздік & Microsoft", EN: "Security & Microsoft" },
        items: ["Kaspersky Security", "Microsoft Power Platform", "Office 365", "Network Security", "VLAN", "VPN"]
      }
    ]
  },
  services: {
    title: { RU: "Проекты и Услуги", KZ: "Жобалар мен Қызметтер", EN: "Projects & Services" },
    items: [
      {
        title: {
          RU: "IT-консалтинг и DevOps",
          KZ: "IT-консалтинг және DevOps",
          EN: "IT Infrastructure & DevOps Consulting"
        },
        desc: {
          RU: "Аудит и модернизация IT-инфраструктуры, настройка серверов (Linux/Windows) и автоматизация.",
          KZ: "IT-инфрақұрылымды аудит және жаңғырту, серверлерді (Linux/Windows) баптау және автоматтандыру.",
          EN: "Audit and modernization of IT infrastructure, server configuration (Linux/Windows) and automation."
        },
        icon: "Server"
      },
      {
        title: {
          RU: "Организация трансляций",
          KZ: "Трансляцияларды ұйымдастыру",
          EN: "Live Streaming & Event Production"
        },
        desc: {
          RU: "Техническое сопровождение прямых эфиров (vMix, OBS), телемостов и конференций.",
          KZ: "Тікелей эфирлерді (vMix, OBS), телекөпірлер мен конференцияларды техникалық сүйемелдеу.",
          EN: "Technical support for live streams (vMix, OBS), telebridges, and conferences."
        },
        icon: "Video"
      },
      {
        title: {
          RU: "Цифровое обучение",
          KZ: "Цифрлық оқыту",
          EN: "Digital Training"
        },
        desc: {
          RU: "Тренинги по кибербезопасности, Microsoft Office 365, видеомонтажу и IT-грамотности.",
          KZ: "Киберқауіпсіздік, Microsoft Office 365, бейнемонтаж және IT-сауаттылық бойынша тренингтер.",
          EN: "Training on cybersecurity, Microsoft Office 365, video editing, and IT literacy."
        },
        icon: "GraduationCap"
      },
      {
        title: {
          RU: "Студийная запись",
          KZ: "Студиялық жазба",
          EN: "Studio Recording"
        },
        desc: {
          RU: "Создание видеороликов, монтаж в Adobe Premiere/After Effects, работа со звуком.",
          KZ: "Бейнероликтер жасау, Adobe Premiere/After Effects-те монтаждау, дыбыспен жұмыс.",
          EN: "Creating videos, editing in Adobe Premiere/After Effects, sound engineering."
        },
        icon: "Mic"
      },
      {
        title: {
          RU: "Сетевая безопасность",
          KZ: "Желілік қауіпсіздік",
          EN: "Network Security"
        },
        desc: {
          RU: "Настройка Kaspersky Security, защита данных, VPN, VLAN и мониторинг сетей.",
          KZ: "Kaspersky Security баптау, деректерді қорғау, VPN, VLAN және желілерді мониторингілеу.",
          EN: "Configuring Kaspersky Security, data protection, VPN, VLAN, and network monitoring."
        },
        icon: "Shield"
      },
      {
        title: {
          RU: "Автоматизация и Power Platform",
          KZ: "Автоматтандыру және Power Platform",
          EN: "Automation & Power Platform"
        },
        desc: {
          RU: "Разработка решений на базе Microsoft Power Platform для автоматизации бизнес-процессов.",
          KZ: "Бизнес-процестерді автоматтандыру үшін Microsoft Power Platform негізінде шешімдер әзірлеу.",
          EN: "Developing solutions based on Microsoft Power Platform for business process automation."
        },
        icon: "Activity"
      }
    ],
    button: {
      RU: "Подробнее",
      KZ: "Толығырақ",
      EN: "View details"
    }
  },
  education: {
    title: { RU: "Образование и сертификаты", KZ: "Білім және сертификаттар", EN: "Education & Certifications" },
    items: [
      "ВКГТУ им. Д. Серикбаева: Вычислительная техника и ПО (2010-2013)",
      "Политехнический колледж г. Усть-Каменогорск (2006-2010)",
      "DevOps (Jusan Singularity, 2022-2023)",
      "Microsoft Power Platform Fundamentals / Functional Consultant",
      "Kubernetes для пользователей / Операционные системы",
      "Kaspersky: Основы кибербезопасности",
      "MIE Expert / Trainer (Microsoft Innovative Educator)",
      "Администратор 1С-Битрикс",
      "Adobe Premiere / After Effects (Video Design)"
    ]
  },
  footer: {
    contacts: { RU: "Контакты", KZ: "Байланыс", EN: "Contacts" },
    brand: "Aidyn Kakanov",
    email: "aidohan89@gmail.com",
    phone: "+7 702-40-131-40"
  },
  connect: {
    title: { RU: "Свяжитесь со мной", KZ: "Менімен байланысыңыз", EN: "Connect with me" },
    subtitle: { 
      RU: "Сканируйте QR-коды для быстрого доступа к моим соцсетям", 
      KZ: "Әлеуметтік желілеріме жылдам өту үшін QR-кодтарды сканерлеңіз", 
      EN: "Scan QR codes for quick access to my social media" 
    },
    items: [
      { name: "Instagram", id: "instagram" },
      { name: "TikTok", id: "tiktok" },
      { name: "Telegram", id: "telegram" },
      { name: "YouTube", id: "youtube" },
      { name: "WhatsApp", id: "whatsapp" }
    ]
  }
};