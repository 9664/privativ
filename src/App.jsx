import React, { useState } from 'react';
import './App.css';
import { Shield, Clock, Globe, Star, CheckCircle, AlertTriangle, Construction, Check } from 'lucide-react';

// Componente de Faixa de Construção
const ConstructionBanner = () => (
  <div className="fixed top-0 left-0 w-full bg-yellow-400 text-black text-center py-1 z-50 flex items-center justify-center space-x-2 animate-pulse">
    <Construction className="w-5 h-5" />
    <span className="font-bold text-sm md:text-base">ÁREA RESTRITA - ACESSO AUTORIZADO APENAS</span>
    <Construction className="w-5 h-5" />
  </div>
);

// Componente de Seletor de Idioma
const LanguageSelector = ({ currentLang, onLanguageChange }) => {
  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    console.log('Changing language to:', newLang);
    onLanguageChange(newLang);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <select 
        value={currentLang} 
        onChange={handleLanguageChange}
        className="bg-black/80 text-yellow-400 border border-yellow-400 rounded px-3 py-1 text-sm"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

// Dados de tradução
const translations = {
  pt: {
    mainTitle: "Privativ",
    subTitle: "Sua Fortaleza Digital. Comunicação Inviolável.",
    description: "No submundo digital, onde a privacidade é uma lenda, o Privativ emerge como seu santuário. Mensagens criptografadas de ponta a ponta que se dissolvem em 24 horas, chamadas de vídeo e áudio efêmeras. Uma fortaleza russa, construída para a máxima segurança. Entre na rede, se atrever.",
    callToAction: "Entrar no Sistema",
    learnMore: "Decifrar Código",
    featuresTitle: "Protocolos de Operação",
    features: [
      { title: "Sistema de Autenticação com Chave de Assinatura", description: "Acesso restrito e verificado para sua segurança." },
      { title: "Sistema de Convites/Afiliados", description: "Expanda sua rede com acesso controlado." },
      { title: "Chat em Tempo Real com Múltiplas Conversas", description: "Comunicação fluida e segura em diversos canais." },
      { title: "Criação de Grupos", description: "Forme células de comunicação seguras." },
      { title: "Sistema de Temas (Escuro/Claro)", description: "Adapte sua interface ao ambiente." },
      { title: "Multilíngue (PT, EN, ES, RU, ZH)", description: "Comunique-se sem barreiras, em qualquer idioma." },
      { title: "Menu Contextual Avançado", description: "Controle total na ponta dos seus dedos." },
      { title: "Sistema de Fixar Conversas", description: "Mantenha seus alvos prioritários sempre visíveis." },
      { title: "QR Code para Contatos", description: "Conexões rápidas e seguras." },
      { title: "Configurações de Perfil", description: "Gerencie sua identidade digital." },
      { title: "Sistema de Vouchers/Cupons", description: "Acesso privilegiado e recompensas." },
      { title: "Página de Administração", description: "Controle centralizado da sua operação." },
      { title: "Configurações de Privacidade", description: "Seu anonimato é nossa prioridade." }
    ],
    pricingTitle: "Acesso ao Núcleo",
    monthlyPlan: {
      title: "Acesso Tático",
      price: "29.90",
      features: ["Comunicação Criptografada", "Mensagens Efêmeras", "Suporte Básico"]
    },
    annualPlan: {
      title: "Acesso Phantom",
      price: "199.00",
      features: ["Todos os recursos do Acesso Tático", "Prioridade na Rede", "Atualizações Exclusivas"]
    },
    currency: {
      symbol: "R$",
      monthlySuffix: "/mês",
      annualSuffix: "/ano"
    },
    bestValue: "MELHOR VALOR",
    affiliateProgram: "Programa de Afiliados: 10% de comissão por cada agente recrutado.",
    securityTitle: "Pilares da Inviolabilidade",
    e2eEncryption: {
      title: "Criptografia E2E",
      description: "Suas mensagens são protegidas com criptografia ponta a ponta, impenetrável."
    },
    ephemeralMessages: {
      title: "Mensagens Efêmeras",
      description: "Todas as comunicações se apagam automaticamente em 24h, sem rastros."
    },
    russianOrigin: {
      title: "Origem Russa",
      description: "Desenvolvido com os mais altos padrões de segurança e engenharia russa."
    },
    termsOfService: "Termos de Serviço",
    privacyPolicy: "Política de Privacidade"
  },
  en: {
    mainTitle: "Privativ",
    subTitle: "Your Digital Fortress. Inviolable Communication.",
    description: "In the digital underworld, where privacy is a legend, Privativ emerges as your sanctuary. End-to-end encrypted messages that dissolve in 24 hours, ephemeral video and audio calls. A Russian fortress, built for maximum security. Enter the network, if you dare.",
    callToAction: "Enter System",
    learnMore: "Decipher Code",
    featuresTitle: "Operation Protocols",
    features: [
      { title: "Authentication System with Signature Key", description: "Restricted and verified access for your security." },
      { title: "Invite/Affiliate System", description: "Expand your network with controlled access." },
      { title: "Real-time Chat with Multiple Conversations", description: "Fluid and secure communication across various channels." },
      { title: "Group Creation", description: "Form secure communication cells." },
      { title: "Theme System (Dark/Light)", description: "Adapt your interface to the environment." },
      { title: "Multilingual (PT, EN, ES, RU, ZH)", description: "Communicate without barriers, in any language." },
      { title: "Advanced Contextual Menu", description: "Total control at your fingertips." },
      { title: "Pin Conversations System", description: "Keep your priority targets always visible." },
      { title: "QR Code for Contacts", description: "Fast and secure connections." },
      { title: "Profile Settings", description: "Manage your digital identity." },
      { title: "Voucher/Coupon System", description: "Privileged access and rewards." },
      { title: "Administration Page", description: "Centralized control of your operation." },
      { title: "Privacy Settings", description: "Your anonymity is our priority." }
    ],
    pricingTitle: "Core Access",
    monthlyPlan: {
      title: "Tactical Access",
      price: "29.90",
      features: ["Encrypted Communication", "Ephemeral Messages", "Basic Support"]
    },
    annualPlan: {
      title: "Phantom Access",
      price: "199.00",
      features: ["All Tactical Access features", "Network Priority", "Exclusive Updates"]
    },
    currency: {
      symbol: "$",
      monthlySuffix: "/month",
      annualSuffix: "/year"
    },
    bestValue: "BEST VALUE",
    affiliateProgram: "Affiliate Program: 10% commission for each recruited agent.",
    securityTitle: "Pillars of Inviolability",
    e2eEncryption: {
      title: "E2E Encryption",
      description: "Your messages are protected with impenetrable end-to-end encryption."
    },
    ephemeralMessages: {
      title: "Ephemeral Messages",
      description: "All communications automatically disappear in 24h, leaving no trace."
    },
    russianOrigin: {
      title: "Russian Origin",
      description: "Developed with the highest standards of security and Russian engineering."
    },
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy"
  },
  es: {
    mainTitle: "Privativ",
    subTitle: "Tu Fortaleza Digital. Comunicación Inviolable.",
    description: "En el submundo digital, donde la privacidad es una leyenda, Privativ emerge como tu santuario. Mensajes cifrados de extremo a extremo que se disuelven en 24 horas, llamadas de video y audio efímeras. Una fortaleza rusa, construida para la máxima seguridad. Entra en la red, si te atreves.",
    callToAction: "Entrar al Sistema",
    learnMore: "Descifrar Código",
    featuresTitle: "Protocolos de Operación",
    features: [
      { title: "Sistema de Autenticación con Clave de Firma", description: "Acceso restringido y verificado para tu seguridad." },
      { title: "Sistema de Invitaciones/Afiliados", description: "Expande tu red con acceso controlado." },
      { title: "Chat en Tiempo Real con Múltiples Conversaciones", description: "Comunicación fluida y segura en diversos canales." },
      { title: "Creación de Grupos", description: "Forma células de comunicación seguras." },
      { title: "Sistema de Temas (Oscuro/Claro)", description: "Adapta tu interfaz al entorno." },
      { title: "Multiidioma (PT, EN, ES, RU, ZH)", description: "Comunícate sin barreras, en cualquier idioma." },
      { title: "Menú Contextual Avanzado", description: "Control total al alcance de tu mano." },
      { title: "Sistema de Fijar Conversaciones", description: "Mantén tus objetivos prioritarios siempre visibles." },
      { title: "Código QR para Contactos", description: "Conexiones rápidas y seguras." },
      { title: "Configuraciones de Perfil", description: "Gestiona tu identidad digital." },
      { title: "Sistema de Cupones/Vales", description: "Acceso privilegiado y recompensas." },
      { title: "Página de Administración", description: "Control centralizado de tu operación." },
      { title: "Configuraciones de Privacidad", description: "Tu anonimato es nuestra prioridad." }
    ],
    pricingTitle: "Acceso al Núcleo",
    monthlyPlan: {
      title: "Acceso Táctico",
      price: "29.90",
      features: ["Comunicación Cifrada", "Mensajes Efímeros", "Soporte Básico"]
    },
    annualPlan: {
      title: "Acceso Phantom",
      price: "199.00",
      features: ["Todas las características de Acceso Táctico", "Prioridad en la Red", "Actualizaciones Exclusivas"]
    },
    currency: {
      symbol: "$",
      monthlySuffix: "/mes",
      annualSuffix: "/año"
    },
    bestValue: "MEJOR VALOR",
    affiliateProgram: "Programa de Afiliados: 10% de comisión por cada agente reclutado.",
    securityTitle: "Pilares de la Inviolabilidad",
    e2eEncryption: {
      title: "Cifrado E2E",
      description: "Tus mensajes están protegidos con cifrado de extremo a extremo, impenetrable."
    },
    ephemeralMessages: {
      title: "Mensajes Efímeros",
      description: "Todas las comunicaciones desaparecen automáticamente en 24h, sin dejar rastro."
    },
    russianOrigin: {
      title: "Origen Ruso",
      description: "Desarrollado con los más altos estándares de seguridad e ingeniería rusa."
    },
    termsOfService: "Términos de Servicio",
    privacyPolicy: "Política de Privacidad"
  },
  ru: {
    mainTitle: "Privativ",
    subTitle: "Ваша Цифровая Крепость. Неприкосновенная Связь.",
    description: "В цифровом подполье, где конфиденциальность — это легенда, Privativ становится вашим убежищем. Сквозное шифрование сообщений, которые исчезают через 24 часа, эфемерные видео- и аудиозвонки. Русская крепость, построенная для максимальной безопасности. Войдите в сеть, если осмелитесь.",
    callToAction: "Войти в Систему",
    learnMore: "Расшифровать Код",
    featuresTitle: "Протоколы Операции",
    features: [
      { title: "Система Аутентификации с Ключом Подписи", description: "Ограниченный и проверенный доступ для вашей безопасности." },
      { title: "Система Приглашений/Партнеров", description: "Расширьте свою сеть с контролируемым доступом." },
      { title: "Чат в Реальном Времени с Множественными Беседами", description: "Плавная и безопасная связь по различным каналам." },
      { title: "Создание Групп", description: "Формируйте безопасные коммуникационные ячейки." },
      { title: "Система Тем (Темная/Светлая)", description: "Адаптируйте свой интерфейс к окружающей среде." },
      { title: "Многоязычность (PT, EN, ES, RU, ZH)", description: "Общайтесь без барьеров, на любом языке." },
      { title: "Расширенное Контекстное Меню", description: "Полный контроль у вас под рукой." },
      { title: "Система Закрепления Бесед", description: "Держите свои приоритетные цели всегда на виду." },
      { title: "QR-код для Контактов", description: "Быстрые и безопасные соединения." },
      { title: "Настройки Профиля", description: "Управляйте своей цифровой личностью." },
      { title: "Система Ваучеров/Купонов", description: "Привилегированный доступ и вознаграждения." },
      { title: "Страница Администрирования", description: "Централизованный контроль вашей операции." },
      { title: "Настройки Конфиденциальности", description: "Ваша анонимность - наш приоритет." }
    ],
    pricingTitle: "Доступ к Ядру",
    monthlyPlan: {
      title: "Тактический Доступ",
      price: "29.90",
      features: ["Шифрованная Связь", "Эфемерные Сообщения", "Базовая Поддержка"]
    },
    annualPlan: {
      title: "Фантомный Доступ",
      price: "199.00",
      features: ["Все функции Тактического Доступа", "Приоритет в Сети", "Эксклюзивные Обновления"]
    },
    currency: {
      symbol: "₽",
      monthlySuffix: "/месяц",
      annualSuffix: "/год"
    },
    bestValue: "ЛУЧШАЯ ЦЕНА",
    affiliateProgram: "Партнерская программа: 10% комиссии за каждого набранного агента.",
    securityTitle: "Столпы Неприкосновенности",
    e2eEncryption: {
      title: "Сквозное Шифрование",
      description: "Ваши сообщения защищены непроницаемым сквозным шифрованием."
    },
    ephemeralMessages: {
      title: "Эфемерные Сообщения",
      description: "Все сообщения автоматически исчезают через 24 часа, не оставляя следов."
    },
    russianOrigin: {
      title: "Российское Происхождение",
      description: "Разработано по высочайшим стандартам безопасности и российской инженерии."
    },
    termsOfService: "Условия Обслуживания",
    privacyPolicy: "Политика Конфиденциальности"
  },
  zh: {
    mainTitle: "Privativ",
    subTitle: "您的数字堡垒。不可侵犯的通信。",
    description: "在数字地下世界，隐私是一个传说，Privativ 作为您的避难所而出现。端到端加密消息在24小时内消失，短暂的视频和音频通话。一个俄罗斯堡垒，为最大安全而建。敢于进入网络。",
    callToAction: "进入系统",
    learnMore: "解密代码",
    featuresTitle: "操作协议",
    features: [
      { title: "带签名密钥的认证系统", description: "受限且经过验证的访问，确保您的安全。" },
      { title: "邀请/联盟系统", description: "通过受控访问扩展您的网络。" },
      { title: "多对话实时聊天", description: "跨各种渠道的流畅安全通信。" },
      { title: "群组创建", description: "形成安全的通信单元。" },
      { title: "主题系统（深色/浅色）", description: "根据环境调整您的界面。" },
      { title: "多语言（PT, EN, ES, RU, ZH）", description: "无障碍沟通，支持任何语言。" },
      { title: "高级上下文菜单", description: "触手可及的完全控制。" },
      { title: "固定对话系统", description: "始终保持您的优先目标可见。" },
      { title: "联系人二维码", description: "快速安全的连接。" },
      { title: "个人资料设置", description: "管理您的数字身份。" },
      { title: "优惠券/代金券系统", description: "特权访问和奖励。" },
      { title: "管理页面", description: "集中控制您的操作。" },
      { title: "隐私设置", description: "您的匿名性是我们的首要任务。" }
    ],
    pricingTitle: "核心访问",
    monthlyPlan: {
      title: "战术访问",
      price: "29.90",
      features: ["加密通信", "短暂消息", "基本支持"]
    },
    annualPlan: {
      title: "幻影访问",
      price: "199.00",
      features: ["所有战术访问功能", "网络优先级", "独家更新"]
    },
    currency: {
      symbol: "¥",
      monthlySuffix: "/月",
      annualSuffix: "/年"
    },
    bestValue: "最佳价值",
    affiliateProgram: "联盟计划：每招募一名代理可获得10%佣金。",
    securityTitle: "不可侵犯的支柱",
    e2eEncryption: {
      title: "端到端加密",
      description: "您的消息受到不可穿透的端到端加密保护。"
    },
    ephemeralMessages: {
      title: "短暂消息",
      description: "所有通信在24小时内自动消失，不留痕迹。"
    },
    russianOrigin: {
      title: "俄罗斯起源",
      description: "按照最高安全标准和俄罗斯工程开发。"
    },
    termsOfService: "服务条款",
    privacyPolicy: "隐私政策"
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState('ru');
  const [isLoading, setIsLoading] = useState(false);
  const t = translations[currentLang];

  const handleLanguageChange = (newLang) => {
    setIsLoading(true);
    setCurrentLang(newLang);
    // Força uma re-renderização após um pequeno delay
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center">
        <div className="text-yellow-400 text-xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-mono">
      {/* Efeito de Scanline */}
      <div className="scanline-overlay"></div>

      {/* Faixa de Construção */}
      <ConstructionBanner />
      
      {/* Seletor de Idioma */}
      <LanguageSelector currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      
      {/* Padrão de Fundo com Faixas de Construção */}
      <div className="absolute inset-0 opacity-10 matrix-background"></div>

      <main className="relative z-10 p-4 md:p-8 max-w-6xl mx-auto">
        {/* Seção Principal - Hero */}
        <section className="text-center py-16 md:py-24 relative">
          <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-black border-2 border-yellow-400 animate-pulse-slow">
            <div className="font-bold text-4xl "><span className="text-white">Priv</span><span className="text-yellow-400">ativ</span></div>
          </div>

          <p className="text-lg md:text-xl mb-6 text-accent">{t.subTitle}</p>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-400">{t.description}</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-primary text-background px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary/80 transition-colors duration-300 shadow-lg animate-fade-in-up">
              {t.callToAction}
            </button>
            <button className="bg-transparent border border-primary text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary/20 transition-colors duration-300 shadow-lg animate-fade-in-up delay-200">
              {t.learnMore}
            </button>
          </div>
        </section>

        {/* Seção de Funcionalidades */}
        <section className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary glitch-text">{t.featuresTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-md hover:shadow-primary/30 transition-shadow duration-300 flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Assinatura */}
        <section className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary glitch-text">{t.pricingTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Mensal */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-md flex flex-col items-center text-center hover:shadow-primary/30 transition-shadow duration-300 animate-fade-in-up">
              <h3 className="text-3xl font-bold mb-4 text-foreground">{t.monthlyPlan.title}</h3>
              <p className="text-5xl font-bold text-primary mb-6">{t.currency.symbol}{t.monthlyPlan.price}{t.currency.monthlySuffix}</p>
              <ul className="text-gray-400 mb-8 space-y-2">
                {t.monthlyPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center justify-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-secondary text-background px-8 py-3 rounded-lg font-bold text-lg hover:bg-secondary/80 transition-colors duration-300 w-full shadow-lg">
                {t.monthlyPlan.button}
              </button>
            </div>

            {/* Plano Anual */}
            <div className="bg-card border-2 border-primary rounded-lg p-8 shadow-xl flex flex-col items-center text-center relative overflow-hidden animate-fade-in-up delay-200">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-b-lg">{t.bestValue}</div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">{t.annualPlan.title}</h3>
              <p className="text-5xl font-bold text-primary mb-6">{t.currency.symbol}{t.annualPlan.price}{t.currency.annualSuffix}</p>
              <ul className="text-gray-400 mb-8 space-y-2">
                {t.annualPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center justify-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-background px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary/80 transition-colors duration-300 w-full shadow-lg">
                {t.annualPlan.button}
              </button>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400">
            <Star className="inline-block w-5 h-5 text-primary mr-2" />
            <span>{t.affiliateProgram}</span>
          </div>
        </section>

        {/* Seção de Segurança */}
        <section className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary glitch-text">{t.securityTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 shadow-md flex flex-col items-center text-center hover:shadow-primary/30 transition-shadow duration-300 animate-fade-in-up">
              <Shield className="text-destructive w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{t.e2eEncryption.title}</h3>
              <p className="text-gray-400">{t.e2eEncryption.description}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-md flex flex-col items-center text-center hover:shadow-primary/30 transition-shadow duration-300 animate-fade-in-up delay-100">
              <Clock className="text-secondary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{t.ephemeralMessages.title}</h3>
              <p className="text-gray-400">{t.ephemeralMessages.description}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-md flex flex-col items-center text-center hover:shadow-primary/30 transition-shadow duration-300 animate-fade-in-up delay-200">
              <Globe className="text-accent w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{t.russianOrigin.title}</h3>
              <p className="text-gray-400">{t.russianOrigin.description}</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border mt-16 text-gray-500 text-sm">
          <p>&copy; 2025 Privativ - Intelig Cloud</p>
          <p>CNPJ: 57.346.394/0001-51</p>
          <p>Contato: contato@intelig.cloud</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-primary hover:underline glitch-text-small">{t.termsOfService}</a>
            <a href="#" className="text-primary hover:underline glitch-text-small">{t.privacyPolicy}</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;


