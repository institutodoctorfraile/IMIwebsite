/**
 * English translations
 */
import type { TranslationKeys } from './es';

export const en: TranslationKeys = {
  // Meta / SEO
  meta: {
    siteName: 'Alicante Gynecological Institute',
    siteDescription: 'Specialized center in regenerative gynecology in Alicante. Advanced treatments with RF, CO2 Laser, EMSella and more. Personalized care.',
    locale: 'en_US',
  },

  // Navigation
  nav: {
    home: 'Home',
    regenerativeGynecology: 'Regenerative Gynecology',
    diagnostics: 'Diagnostics',
    appointment: 'Book appointment',
    languageSelector: 'Select language',
  },

  // Dropdown treatments
  treatments: {
    rf: 'Radiofrequency',
    laserCo2: 'CO2 Laser',
    emsella: 'EMSella',
    photobiomodulation: 'Photobiomodulation',
    magnetotherapy: 'Magnetotherapy',
    bioidenticalHt: 'Bioidentical HT',
  },

  // Home page
  home: {
    title: 'Regenerative Gynecology in Alicante',
    description: 'Specialized center in regenerative gynecology. Advanced and personalized treatments for women\'s wellbeing.',

    // Hero section
    hero: {
      eyebrow: 'Alicante Gynecological Institute',
      title: 'Cutting-edge regenerative gynecology',
      subtitle: 'Advanced and personalized treatments for women\'s integral wellbeing, combining the latest technology with specialized medical care.',
      cta: 'Request consultation',
      ctaSecondary: 'Explore treatments',
    },

    // What is regenerative section
    whatIs: {
      eyebrow: 'Regenerative medicine',
      title: 'What is regenerative gynecology?',
      description: 'Regenerative gynecology is a medical specialty that uses advanced technologies and non-invasive treatments to restore, regenerate and improve the function and health of the female reproductive system.',
      paragraph1: 'Through techniques such as radiofrequency, fractional CO2 laser, magnetic stimulation and bioidentical hormone therapy, we achieve exceptional results in treating various gynecological conditions.',
      paragraph2: 'Our approach focuses on minimally invasive treatments that stimulate the body\'s natural regeneration processes, offering effective alternatives to traditional surgical procedures.',
    },

    // Doctor section
    doctor: {
      eyebrow: 'Specialist',
      title: 'Dr. [Doctor Name]',
      subtitle: 'Specialist in Regenerative Gynecology',
      bio: 'With over [X] years of experience in gynecology and obstetrics, Dr. [Name] has dedicated his career to researching and applying regenerative treatments. Trained at Spain\'s leading medical institutions with international specialization in regenerative medicine.',
      credentials: [
        'Medical Degree from [Name] University',
        'Specialist in Gynecology and Obstetrics',
        'Master\'s in Regenerative Medicine',
        'Member of the Spanish Society of Gynecology',
      ],
    },

    // Treatments grid
    treatmentsSection: {
      eyebrow: 'Our treatments',
      title: 'Cutting-edge technology for your wellbeing',
      description: 'We offer a complete range of regenerative treatments using the most advanced technology available.',
      viewMore: 'Learn more',
      cards: {
        rf: {
          title: 'Radiofrequency',
          description: 'Non-invasive treatment that stimulates collagen production and improves tissue elasticity through controlled radiofrequency energy.',
        },
        laserCo2: {
          title: 'Fractional CO2 Laser',
          description: 'Latest generation laser technology for tissue regeneration, vaginal atrophy treatment and quality of life improvement.',
        },
        emsella: {
          title: 'EMSella',
          description: 'Revolutionary treatment for urinary incontinence through high-intensity electromagnetic stimulation of the pelvic floor.',
        },
        photobiomodulation: {
          title: 'Photobiomodulation',
          description: 'Low-intensity light therapy that stimulates cellular regeneration and accelerates natural healing processes.',
        },
        magnetotherapy: {
          title: 'Magnetotherapy',
          description: 'Application of magnetic fields to improve circulation, reduce inflammation and promote tissue regeneration.',
        },
        bioidenticalHt: {
          title: 'Bioidentical HT',
          description: 'Hormone therapy with bioidentical hormones, identical to those naturally produced by the body, for personalized treatment.',
        },
      },
    },

    // Team section
    team: {
      eyebrow: 'Our team',
      title: 'Professionals committed to your health',
      description: 'Our multidisciplinary team combines medical expertise with personalized care.',
      members: [
        {
          name: 'Dr. [Name]',
          role: 'Gynecologist',
          bio: 'Gynecology specialist with extensive experience in regenerative treatments.',
        },
        {
          name: '[Name]',
          role: 'Specialized nurse',
          bio: 'Professional dedicated to the care and wellbeing of our patients.',
        },
        {
          name: '[Name]',
          role: 'Patient coordinator',
          bio: 'Ensuring an exceptional experience at every visit.',
        },
      ],
    },

    // CTA section
    cta: {
      title: 'Take the first step towards your wellbeing',
      description: 'Schedule a personalized consultation and discover how our treatments can help you. We\'re here to listen and offer you the best solutions.',
      button: 'Book my consultation',
      note: 'Initial consultation with no commitment',
    },
  },

  // Regenerative Gynecology page
  regenerative: {
    title: 'Regenerative Gynecology',
    description: 'Discover our regenerative gynecology treatments: RF, CO2 Laser, EMSella, Photobiomodulation, Magnetotherapy and Bioidentical HT.',
    
    hero: {
      eyebrow: 'Specialized treatments',
      title: 'Regenerative Gynecology',
      subtitle: 'Cutting-edge technology for comprehensive women\'s health care.',
    },

    sections: {
      rf: {
        title: 'Radiofrequency (RF)',
        description: 'Radiofrequency is a technology that uses electromagnetic waves to generate controlled heat in tissues, stimulating collagen and elastin production.',
        benefits: [
          'Improves vaginal elasticity',
          'Non-invasive treatment',
          'No recovery time',
          'Progressive and natural results',
        ],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      laserCo2: {
        title: 'Fractional CO2 Laser',
        description: 'Fractional CO2 laser is an advanced technology that allows vaginal tissue regeneration through controlled microablation.',
        benefits: [
          'Deep tissue regeneration',
          'Vaginal atrophy treatment',
          'Improved natural lubrication',
          'Outpatient procedure',
        ],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      emsella: {
        title: 'EMSella',
        description: 'EMSella uses high-intensity focused electromagnetic (HIFEM) technology to stimulate pelvic floor muscles.',
        benefits: [
          'Urinary incontinence treatment',
          'Pelvic floor strengthening',
          '28-minute sessions',
          'No undressing required',
        ],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      photobiomodulation: {
        title: 'Photobiomodulation',
        description: 'Photobiomodulation uses low-intensity light to stimulate healing and cellular regeneration processes.',
        benefits: [
          'Stimulates cellular regeneration',
          'Reduces inflammation',
          'Accelerates healing',
          'Painless treatment',
        ],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      },
      magnetotherapy: {
        title: 'Magnetotherapy',
        description: 'Magnetotherapy applies magnetic fields to promote tissue regeneration and improve circulation.',
        benefits: [
          'Improves blood circulation',
          'Reduces pain and inflammation',
          'Promotes tissue regeneration',
          'Non-invasive treatment',
        ],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      bioidenticalHt: {
        title: 'Bioidentical Hormone Therapy',
        description: 'Bioidentical hormones are molecules identical to those naturally produced by the human body.',
        benefits: [
          'Personalized treatment',
          'Identical to natural hormones',
          'Menopausal symptom improvement',
          'Continuous medical monitoring',
        ],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    },
  },

  // Diagnostics page
  diagnostics: {
    title: 'Diagnostics',
    description: 'Advanced gynecological diagnostic services. Ultrasounds, cytology, hormonal studies and more.',
    
    hero: {
      eyebrow: 'Diagnostic services',
      title: 'Gynecological Diagnostics',
      subtitle: 'State-of-the-art diagnostic technology for preventive care and early detection.',
    },

    services: {
      intro: 'At the Alicante Gynecological Institute we have the most advanced equipment for accurate and reliable diagnostics.',
      list: [
        {
          title: 'Gynecological ultrasound',
          description: 'Complete evaluation using high-resolution ultrasound for diagnosis of various gynecological conditions.',
        },
        {
          title: 'Cervical cytology',
          description: 'Screening test to identify abnormal cell changes in the cervix.',
        },
        {
          title: 'Hormonal studies',
          description: 'Complete hormonal profile analysis for diagnosis and treatment monitoring.',
        },
        {
          title: 'Colposcopy',
          description: 'Detailed examination of the cervix to detect lesions or abnormalities.',
        },
      ],
    },
  },

  // Appointment page
  appointment: {
    title: 'Book appointment',
    description: 'Request a consultation at the Alicante Gynecological Institute. We will assist you personally.',
    
    hero: {
      eyebrow: 'Contact',
      title: 'Book your consultation',
      subtitle: 'We\'re here to help. Fill out the form or contact us directly.',
    },

    form: {
      name: 'Full name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      phone: 'Phone',
      phonePlaceholder: '+34 600 000 000',
      service: 'Service of interest',
      servicePlaceholder: 'Select a service',
      message: 'Message',
      messagePlaceholder: 'Tell us how we can help you...',
      submit: 'Send request',
      privacy: 'By submitting this form, you accept our privacy policy.',
    },

    contact: {
      title: 'Contact information',
      address: '[Street Name], [Number], 03001 Alicante, Spain',
      phone: '+34 XXX XXX XXX',
      email: 'info@institutoginecologicoalicante.com',
      hours: 'Monday to Friday: 9:00 AM - 8:00 PM',
      whatsapp: 'Contact via WhatsApp',
    },
  },

  // Footer
  footer: {
    description: 'Specialized center in regenerative gynecology in Alicante. Advanced treatments and personalized care for women\'s wellbeing.',
    quickLinks: 'Quick links',
    contact: 'Contact',
    legal: 'Legal',
    privacy: 'Privacy policy',
    terms: 'Terms of service',
    cookies: 'Cookie policy',
    copyright: '© {year} Alicante Gynecological Institute. All rights reserved.',
  },

  // Common
  common: {
    learnMore: 'Learn more',
    readMore: 'Read more',
    back: 'Back',
    loading: 'Loading...',
    error: 'An error occurred',
    close: 'Close',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
} as const;
