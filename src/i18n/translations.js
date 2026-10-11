export const translations = {
  en: {
    nav: {
      solutions: 'Solutions',
      performance: 'Performance',
      about: 'About',
      contact: 'Contact',
      cta: 'Talk to Engineering',
    },
    hero: {
      badge: 'High-Octane Engineering',
      headlineLine1: 'Engineering performance',
      headlinePrefix: 'at the speed of',
      headlineAccent: 'octane',
      subtitle:
        "We architect high-throughput systems, tune infrastructure down to the kernel, and ship observability-first software for teams that can't afford to slow down.",
      ctaPrimary: 'Start a Project',
      ctaSecondary: 'Explore Solutions',
    },
    features: {
      eyebrow: 'Solutions',
      title: 'Everything your platform needs to run at full throttle',
      items: [
        {
          title: 'High-Performance Architecture',
          desc: 'Systems designed around real bottlenecks — not assumptions. Low-latency services built to hold up under production load.',
        },
        {
          title: 'Infrastructure Optimization',
          desc: 'We profile, tune, and rightsize your stack so you pay for the compute you actually need, not the headroom you hope for.',
        },
        {
          title: 'Real-Time Observability',
          desc: 'Metrics, traces, and logs wired together from day one, so incidents are diagnosed in minutes, not war rooms.',
        },
        {
          title: 'Elastic Cloud Scaling',
          desc: 'Autoscaling policies and load-aware deployments that absorb traffic spikes without paging anyone at 3am.',
        },
        {
          title: 'Zero-Downtime Delivery',
          desc: 'Progressive rollouts, feature flags, and automated rollback baked into every pipeline we ship.',
        },
        {
          title: 'Security-First Engineering',
          desc: 'Hardened by default — least-privilege access, encrypted transport, and audits built into the release cycle.',
        },
      ],
    },
    metrics: {
      eyebrow: 'Engineering Targets',
      title: 'What we design every system to hit',
      items: [
        { target: 99.99, suffix: '%', decimals: 2, label: 'Uptime SLA Target' },
        { target: 10, prefix: '<', suffix: 'ms', label: 'Latency Target' },
        { target: 30, suffix: '%+', label: 'Target Cloud Cost Reduction' },
        { target: 15, prefix: '<', suffix: 'min', label: 'Target Incident Detection' },
      ],
    },
    about: {
      eyebrow: 'About',
      headline: 'Precision Cloud Engineering. Zero Black Boxes.',
      story: [
        'Octane was born from a conviction forged in the trenches of infrastructure: the cloud isn’t magic, it’s engineering — and like any engineering discipline, it can be designed, measured, and refined.',
        'After years leading the construction of resilient architectures, automating infrastructure as code, and operating high-throughput CI/CD pipelines for mission-critical workloads, a pattern became impossible to ignore: organization after organization was adopting the cloud — or artificial intelligence — faster than they could control it. Unaudited clusters. Bills that grew without explanation. Systems with no real observability, where an incident surfaced through a customer complaint before an alert ever fired.',
        'That diagnosis became a purpose. What started as a drive to apply rigorous cloud engineering practices and self-service platforms (Internal Developer Platforms) to real projects evolved into Octane: a firm built specifically to give modern infrastructure what it needs most — control, predictability, and a healthy relationship between what you invest and what you get back.',
      ],
      principlesTitle: 'What Drives Us',
      principles: [
        {
          title: 'DevOps as culture, not tooling.',
          desc: 'Collaboration between development and operations is designed into the architecture, not patched on afterward with process.',
        },
        {
          title: 'GitOps as the source of truth.',
          desc: 'If it isn’t versioned, declared, and auditable, it isn’t in production. Every infrastructure change is traceable, reproducible, and reversible.',
        },
        {
          title: 'FinOps as a discipline, not a quarterly audit.',
          desc: 'Cloud cost is managed in real time, at the same priority level as performance and security — not discovered at month’s end.',
        },
      ],
      principlesClosing:
        'The cloud shouldn’t be an expensive black box. It should be a predictable engine: one you can open, understand, and tune.',
      pillarsTitle: 'Pillar Matrix',
      pillars: [
        {
          title: 'Cloud Engineering & Kubernetes',
          desc: 'Design, audit, and scaling of clusters across resilient multicloud environments, built to carry real load without manual intervention.',
        },
        {
          title: 'FinOps & Cost Optimization',
          desc: 'Systematic elimination of cloud waste, with guaranteed return on every resource invested and full spend visibility.',
        },
        {
          title: 'Security & Observability',
          desc: 'Real-time monitoring with OpenTelemetry, Grafana, metrics, logs, and SIEM, on top of infrastructure hardened from day one.',
        },
        {
          title: 'AI-Integrated Solutions',
          desc: 'Architectures ready for AI inference, modern data pipelines, and end-to-end process automation.',
        },
      ],
      differentiatorsTitle: 'Why Octane?',
      differentiators: [
        {
          title: 'Pure engineering focus.',
          desc: 'We don’t sell generic consulting hours: we design, implement, and operate systems with our own hands.',
        },
        {
          title: 'Radical cost transparency.',
          desc: 'Every architecture decision is weighed by its financial impact too — no surprises on the invoice.',
        },
        {
          title: 'Automation as the standard, not a luxury.',
          desc: 'If a process repeats, it gets automated. Manual intervention is the last resort, not the first.',
        },
        {
          title: 'Expert partnership, from the Colombian Caribbean to the world.',
          desc: 'We operate to global engineering standards, with the closeness and commitment of a team that understands what it means for a system to fail in production.',
        },
      ],
      quote: 'We don’t outsource trust — we build it, one line of code at a time.',
      quoteAttribution: 'Founder & Lead Cloud/DevOps Engineer at Octane',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Tell us about the system you're building",
      subtitle:
        "A few details now saves a round trip later — we'll come back with real questions, not a sales script.",
      labelName: 'Name',
      labelEmail: 'Email',
      labelCompany: 'Company',
      labelCompanyOptional: '(optional)',
      labelMessage: "What are you building?",
      placeholderName: 'Ada Lovelace',
      placeholderEmail: 'ada@yourcompany.com',
      placeholderCompany: 'Analytical Engines Inc.',
      placeholderMessage: "Current stack, the bottleneck you're hitting, and what 'done' looks like.",
      errorName: "Tell us who you are.",
      errorEmail: 'We need an email to reply to.',
      errorEmailInvalid: 'That email doesn’t look right.',
      errorMessage: 'Give us a few words about the project.',
      errorNotConfigured: 'Contact form isn’t configured yet (missing Splitforms access key).',
      errorGeneric: 'Something went wrong sending your message.',
      submitIdle: 'Send message',
      submitSending: 'Sending…',
      successTitle: 'Message sent',
      successBody: "Thanks — we read every message and reply within one business day.",
      successAgain: 'Send another message',
      subjectPrefix: 'New project inquiry from',
    },
    footer: {
      tagline:
        'High-performance software engineering, infrastructure optimization, and observability for teams that run at scale.',
      companyHeader: 'Company',
      links: {
        solutions: 'Solutions',
        performance: 'Performance',
        about: 'About',
        contact: 'Contact',
      },
      rights: 'All rights reserved.',
      bottomLine: 'Building systems that cannot afford to slow down.',
      privacy: 'Privacy Policy',
    },
    privacy: {
      title: 'Privacy Policy',
      intro:
        "This page explains, plainly, what octane.technology collects when you use it and what we do with it. We'd rather keep this short and accurate than long and generic.",
      sections: [
        {
          heading: 'What we collect',
          body: "The contact form asks for your name, email, company (optional), and the message you write. We don't collect anything else — there's no account system, no checkout, and no tracking pixels on this site.",
        },
        {
          heading: 'How your message is handled',
          body: 'Contact form submissions are sent to Splitforms (splitforms.com), a third-party form backend we use to receive, spam-filter, and store messages, and to notify us by email. We don’t operate our own database of submissions — Splitforms is the processor. Review their own policy at splitforms.com for how they handle that data on their end.',
        },
        {
          heading: 'Cookies & local storage',
          body: 'The only thing this site stores in your browser is your EN/ES language preference, saved locally so we don’t ask again on your next visit. It never leaves your browser and contains no personal information. We don’t use advertising or tracking cookies, and we haven’t installed any analytics ourselves.',
        },
        {
          heading: 'Third-party requests your browser may make',
          body: 'This site is served through Cloudflare, which may attempt to load its own aggregate traffic-analytics script at the network edge; our content security policy blocks it by default. Fonts are loaded from Google Fonts (fonts.googleapis.com / fonts.gstatic.com), which sees a standard font-request connection from your browser like any site using Google Fonts.',
        },
        {
          heading: 'Your data, your call',
          body: 'If you want a message you sent us deleted, or want to know exactly what we have on file, just say so through the contact form — we read every submission ourselves and will act on it directly, since there’s no larger organization or support queue in between.',
        },
        {
          heading: 'Changes to this page',
          body: 'If what this site collects or how it’s handled changes, this page gets updated to match — not the other way around.',
        },
      ],
      lastUpdatedLabel: 'Last updated',
      backHome: '← Back to home',
    },
  },
  es: {
    nav: {
      solutions: 'Soluciones',
      performance: 'Rendimiento',
      about: 'Nosotros',
      contact: 'Contacto',
      cta: 'Hablemos de Ingeniería',
    },
    hero: {
      badge: 'Ingeniería de Alto Octanaje',
      headlineLine1: 'Rendimiento de ingeniería',
      headlinePrefix: 'a la velocidad del',
      headlineAccent: 'octano',
      subtitle:
        'Diseñamos sistemas de alto throughput, afinamos la infraestructura hasta el kernel, y entregamos software con observabilidad desde el día uno — para equipos que no se pueden dar el lujo de ir lento.',
      ctaPrimary: 'Iniciar un Proyecto',
      ctaSecondary: 'Ver Soluciones',
    },
    features: {
      eyebrow: 'Soluciones',
      title: 'Todo lo que tu plataforma necesita para correr a toda máquina',
      items: [
        {
          title: 'Arquitectura de Alto Rendimiento',
          desc: 'Sistemas diseñados en torno a cuellos de botella reales, no suposiciones. Servicios de baja latencia construidos para resistir carga de producción.',
        },
        {
          title: 'Optimización de Infraestructura',
          desc: 'Perfilamos, afinamos y dimensionamos tu stack para que pagues por el cómputo que realmente necesitás, no por el margen que esperás necesitar.',
        },
        {
          title: 'Observabilidad en Tiempo Real',
          desc: 'Métricas, trazas y logs conectados desde el día uno, para diagnosticar incidentes en minutos, no en salas de guerra.',
        },
        {
          title: 'Escalado Elástico en la Nube',
          desc: 'Políticas de autoescalado y despliegues conscientes de carga que absorben picos de tráfico sin despertar a nadie a las 3am.',
        },
        {
          title: 'Entregas Sin Downtime',
          desc: 'Rollouts progresivos, feature flags y rollback automatizado integrados en cada pipeline que entregamos.',
        },
        {
          title: 'Ingeniería con Seguridad desde el Diseño',
          desc: 'Endurecido por defecto — acceso de mínimo privilegio, transporte cifrado y auditorías integradas al ciclo de release.',
        },
      ],
    },
    metrics: {
      eyebrow: 'Objetivos de Ingeniería',
      title: 'Lo que diseñamos para que cada sistema cumpla',
      items: [
        { target: 99.99, suffix: '%', decimals: 2, label: 'SLA de Disponibilidad Objetivo' },
        { target: 10, prefix: '<', suffix: 'ms', label: 'Latencia Objetivo' },
        { target: 30, suffix: '%+', label: 'Reducción de Costos Objetivo' },
        { target: 15, prefix: '<', suffix: 'min', label: 'Detección de Incidentes Objetivo' },
      ],
    },
    about: {
      eyebrow: 'Nosotros',
      headline: 'Ingeniería Cloud de Precisión. Cero Cajas Negras.',
      story: [
        'Octane nace de una convicción forjada en las trincheras de la infraestructura: la nube no es magia, es ingeniería — y como toda ingeniería, puede diseñarse, medirse y perfeccionarse.',
        'Después de años liderando la construcción de arquitecturas resilientes, automatizando infraestructura como código y operando pipelines CI/CD de alto rendimiento para cargas de trabajo críticas, surgió un patrón imposible de ignorar: organización tras organización migraba a la nube — o adoptaba inteligencia artificial — a una velocidad que superaba su capacidad de controlarla. Clusters sin auditar. Facturas que crecían sin explicación. Sistemas sin observabilidad real, donde un incidente se detectaba por el reclamo de un cliente antes que por una alerta.',
        'Ese diagnóstico se convirtió en propósito. Lo que comenzó como la búsqueda de aplicar con rigor las mejores prácticas de ingeniería cloud y las plataformas de autoservicio (Internal Developer Platforms) a proyectos reales, evolucionó hasta convertirse en Octane: una firma construida específicamente para devolverle a la infraestructura moderna lo que más necesita — control, previsibilidad y una relación sana entre lo que se invierte y lo que se obtiene.',
      ],
      principlesTitle: 'Lo Que Nos Mueve',
      principles: [
        {
          title: 'DevOps como cultura, no como herramienta.',
          desc: 'La colaboración entre desarrollo y operaciones se diseña en la arquitectura, no se parcha después con procesos.',
        },
        {
          title: 'GitOps como fuente de verdad.',
          desc: 'Si no está versionado, declarado y auditable, no está en producción. Cada cambio de infraestructura es trazable, reproducible y reversible.',
        },
        {
          title: 'FinOps como disciplina, no como auditoría trimestral.',
          desc: 'El costo de la nube se gestiona en tiempo real, al mismo nivel de prioridad que el rendimiento y la seguridad — no se descubre al final de mes.',
        },
      ],
      principlesClosing:
        'La nube no debería ser una caja negra costosa. Debería ser un motor predecible: uno que se puede abrir, entender y afinar.',
      pillarsTitle: 'Matriz de Pilares',
      pillars: [
        {
          title: 'Ingeniería Cloud & Kubernetes',
          desc: 'Diseño, auditoría y escalado de clusters en entornos multicloud resilientes, construidos para soportar carga real sin intervención manual.',
        },
        {
          title: 'FinOps & Optimización de Costos',
          desc: 'Eliminación sistemática de desperdicio en la nube, con rentabilidad garantizada por cada recurso invertido y visibilidad total del gasto.',
        },
        {
          title: 'Seguridad & Observabilidad',
          desc: 'Monitoreo en tiempo real con OpenTelemetry, Grafana, métricas, logs y SIEM, sobre una base de infraestructura endurecida (hardening) de origen.',
        },
        {
          title: 'Soluciones Integradas con IA',
          desc: 'Arquitecturas preparadas para inferencia de IA, pipelines de datos modernos y automatización de procesos de punta a punta.',
        },
      ],
      differentiatorsTitle: '¿Por Qué Octane?',
      differentiators: [
        {
          title: 'Enfoque de ingeniería pura.',
          desc: 'No vendemos horas de consultoría genérica: diseñamos, implementamos y operamos sistemas con nuestras propias manos.',
        },
        {
          title: 'Transparencia radical en costos.',
          desc: 'Cada decisión de arquitectura se evalúa también por su impacto financiero — sin sorpresas en la factura.',
        },
        {
          title: 'Automatización como estándar, no como lujo.',
          desc: 'Si un proceso se repite, se automatiza. La intervención manual es el último recurso, no el primero.',
        },
        {
          title: 'Acompañamiento experto, desde el Caribe colombiano para el mundo.',
          desc: 'Operamos con estándares globales de ingeniería, con la cercanía y el compromiso de un equipo que entiende lo que significa que un sistema falle en producción.',
        },
      ],
      quote: 'No tercerizamos la confianza: la construimos, línea de código por línea de código.',
      quoteAttribution: 'Fundador & Lead Cloud/DevOps Engineer en Octane',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Contanos qué sistema estás construyendo',
      subtitle:
        'Unos minutos ahora nos ahorran una vuelta después — volvemos con preguntas reales, no con un guión de ventas.',
      labelName: 'Nombre',
      labelEmail: 'Email',
      labelCompany: 'Empresa',
      labelCompanyOptional: '(opcional)',
      labelMessage: '¿Qué estás construyendo?',
      placeholderName: 'Ada Lovelace',
      placeholderEmail: 'ada@tuempresa.com',
      placeholderCompany: 'Máquinas Analíticas S.A.',
      placeholderMessage: 'Stack actual, el cuello de botella que estás enfrentando, y cómo se ve "listo".',
      errorName: 'Contanos quién sos.',
      errorEmail: 'Necesitamos un email para responderte.',
      errorEmailInvalid: 'Ese email no parece válido.',
      errorMessage: 'Contanos brevemente sobre el proyecto.',
      errorNotConfigured: 'El formulario de contacto todavía no está configurado (falta la clave de acceso de Splitforms).',
      errorGeneric: 'Algo falló al enviar tu mensaje.',
      submitIdle: 'Enviar mensaje',
      submitSending: 'Enviando…',
      successTitle: 'Mensaje enviado',
      successBody: 'Gracias — leemos cada mensaje y respondemos dentro de un día hábil.',
      successAgain: 'Enviar otro mensaje',
      subjectPrefix: 'Nueva consulta de proyecto de',
    },
    footer: {
      tagline:
        'Ingeniería de software de alto rendimiento, optimización de infraestructura y observabilidad para equipos que operan a escala.',
      companyHeader: 'Empresa',
      links: {
        solutions: 'Soluciones',
        performance: 'Rendimiento',
        about: 'Nosotros',
        contact: 'Contacto',
      },
      rights: 'Todos los derechos reservados.',
      bottomLine: 'Construyendo sistemas que no se pueden dar el lujo de ir lento.',
      privacy: 'Política de Privacidad',
    },
    privacy: {
      title: 'Política de Privacidad',
      intro:
        'Esta página explica, en criollo, qué recolecta octane.technology cuando usás el sitio y qué hacemos con eso. Preferimos que sea corta y precisa, no larga y genérica.',
      sections: [
        {
          heading: 'Qué recolectamos',
          body: 'El formulario de contacto pide tu nombre, email, empresa (opcional) y el mensaje que escribís. No recolectamos nada más — no hay sistema de cuentas, no hay checkout, y no hay píxeles de rastreo en este sitio.',
        },
        {
          heading: 'Cómo manejamos tu mensaje',
          body: 'Los envíos del formulario de contacto se mandan a Splitforms (splitforms.com), un backend de formularios de terceros que usamos para recibir, filtrar spam, almacenar mensajes y notificarnos por email. No operamos nuestra propia base de datos de envíos — Splitforms es el procesador. Revisá su propia política en splitforms.com para saber cómo manejan esos datos de su lado.',
        },
        {
          heading: 'Cookies y almacenamiento local',
          body: 'Lo único que este sitio guarda en tu navegador es tu preferencia de idioma (EN/ES), guardada localmente para no preguntarte de nuevo en tu próxima visita. Nunca sale de tu navegador y no contiene información personal. No usamos cookies de publicidad ni de rastreo, y no instalamos ningún analytics propio.',
        },
        {
          heading: 'Solicitudes de terceros que puede hacer tu navegador',
          body: 'Este sitio se sirve a través de Cloudflare, que puede intentar cargar su propio script de analytics agregado a nivel de borde de red; nuestra política de seguridad de contenido lo bloquea por defecto. Las tipografías se cargan desde Google Fonts (fonts.googleapis.com / fonts.gstatic.com), que ve una conexión estándar de solicitud de fuente desde tu navegador, como cualquier sitio que use Google Fonts.',
        },
        {
          heading: 'Tus datos, tu decisión',
          body: 'Si querés que borremos un mensaje que nos enviaste, o querés saber exactamente qué tenemos registrado, decílo a través del formulario de contacto — leemos cada envío nosotros mismos y actuamos directamente, ya que no hay una organización grande ni una cola de soporte en el medio.',
        },
        {
          heading: 'Cambios a esta página',
          body: 'Si cambia lo que este sitio recolecta o cómo lo manejamos, esta página se actualiza para reflejarlo — no al revés.',
        },
      ],
      lastUpdatedLabel: 'Última actualización',
      backHome: '← Volver al inicio',
    },
  },
}
