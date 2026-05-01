/**
 * English translations
 * Instituto Dr. Rafael Fraile Pérez-Cuadrado
 * All keys must match the structure defined in es.ts
 */
import type { TranslationKeys } from './es';

export const en: TranslationKeys = {
  // Meta / SEO
  meta: {
    siteName: 'Instituto Dr. Rafael Fraile Pérez-Cuadrado',
    siteDescription: 'Gynecology, obstetrics and regenerative gynecology in Alicante. Over 25 years caring for women\'s health. Thorough assessment, clear diagnosis and a personalized plan.',
    locale: 'en_US',
  },

  // Navigation
  nav: {
    home: 'Home',
    regenerativeGynecology: 'Regenerative Gynecology',
    obstetrics: 'Obstetrics',
    gynecology: 'Gynecology',
    team: 'Team',
    patientCare: 'Patient care',
    diagnostics: 'Diagnostics',
    appointment: 'Book appointment',
    languageSelector: 'Select language',
  },

  // Dropdown treatments
  treatments: {
    laserCo2: 'CO2 Laser',
    rf: 'Radiofrequency',
    emsella: 'EMSella',
    prp: 'Intimate PRP',
    bioidenticalHt: 'Bioidentical HT',
    magnetotherapy: 'Magnetotherapy',
  },

  // Home page
  home: {
    title: 'Instituto Dr. Rafael Fraile Pérez-Cuadrado',
    description: 'Gynecology, obstetrics and regenerative gynecology in Alicante. Over 25 years caring for women\'s health.',

    // Hero section
    hero: {
      eyebrow: 'INSTITUTO DR. RAFAEL FRAILE PÉREZ-CUADRADO',
      title: 'Medical excellence for every stage of your life',
      subtitle: 'Comprehensive women\'s health with thorough assessment, clear diagnosis and a personalized plan.',
      note: 'Over 25 years supporting women in our practice.',
      cta: 'Request your appointment',
      ctaWhatsapp: 'Chat on WhatsApp',
      ctaSecondary: 'Explore treatments',
      callUsLabel: 'Or call us:',
      imageDescription: 'Clinic or medical team',
      imageAlt: 'Dr. Rafael Fraile during a consultation',
    },

    // Services block (Bloque 2)
    services: {
      eyebrow: 'Our specialties',
      title: 'Solutions to care for you at every stage of life',
      cards: {
        obstetrics: {
          title: 'Obstetrics and maternity',
          description: 'Clinical support to experience pregnancy with peace of mind and well-informed decisions.',
          tags: ['Pregnancy', 'Birth', 'Postpartum'],
        },
        intimateHealth: {
          title: 'Advanced intimate health',
          subtitle: 'Regenerative and functional gynecology',
          description: 'Advanced options when indicated to improve symptoms and quality of life, especially during menopause and postpartum. Laser · Radiofrequency · Emsella · PRP',
          tags: ['Regenerative', 'Laser', 'Pelvic floor'],
        },
        gynecology: {
          title: 'Comprehensive gynecology',
          description: 'Screening, prevention and management of gynecological conditions with a holistic approach.',
          tags: ['Check-ups', 'Diagnosis', 'Prevention'],
        },
      },
      viewMore: 'Learn more',
      note: 'Not sure where to start? Tell us about your case and we\'ll guide you',
    },

    // Process block (Bloque 3)
    process: {
      eyebrow: 'How we work',
      title: 'Clarity from the very first visit',
      note: 'Treatment decisions are made following a medical assessment.',
      steps: [
        {
          number: '1',
          title: 'Assessment and listening',
          description: 'We take the time to understand your situation, history and goals.',
        },
        {
          number: '2',
          title: 'Clear diagnosis',
          description: 'We explain what is happening and which options make sense for your case.',
        },
        {
          number: '3',
          title: 'Plan and follow-up',
          description: 'We define the next step and support you through your progress.',
        },
      ],
    },

    // What is regenerative section
    whatIs: {
      eyebrow: 'Regenerative medicine',
      title: 'What is regenerative gynecology?',
      description: 'Regenerative gynecology is a medical specialty that uses advanced technologies and non-invasive treatments to restore, regenerate and improve the function and health of the female reproductive system.',
      paragraph1: 'Through techniques such as radiofrequency, fractional CO2 laser, magnetic stimulation and bioidentical hormone therapy, we achieve exceptional results in treating various gynecological conditions.',
      paragraph2: 'Our approach focuses on minimally invasive treatments that stimulate the body\'s natural regeneration processes, offering effective alternatives to traditional surgical procedures.',
      imageDescription: 'Advanced medical technology or treatment',
      keyPoints: [
        'Non-invasive treatments',
        'Cutting-edge technology',
        'Natural results',
        'Personalized care',
      ],
    },

    // Doctor section
    doctor: {
      eyebrow: 'Specialist',
      title: 'Dr. Rafael Fraile Pérez-Cuadrado',
      subtitle: 'Over 25 years of experience in gynecology and obstetrics',
      bio: 'With over 25 years of experience in gynecology and obstetrics, Dr. Fraile combines clinical judgment, ongoing training and a personable approach to provide each patient with the care they need. His practice is grounded in listening, rigorous diagnosis and proposing solutions tailored to each case and life stage.',
      credentialsHeading: 'Education and credentials',
      imageAlt: 'Dr. Rafael Fraile - Specialist in Regenerative Gynecology',
      experienceLabel: 'years of\nexperience',
      credentials: [
        'Specialist in Gynecology and Obstetrics',
        'Expert in regenerative and functional gynecology',
        'Over 25 years of professional practice',
        'Ongoing training and continuous professional development',
      ],
    },

    // Treatments grid
    treatmentsSection: {
      eyebrow: 'Regenerative gynecology',
      title: 'Advanced technology for your wellbeing',
      description: 'Advanced options when indicated, with thorough medical assessment and a personalized plan.',
      viewMore: 'Learn more',
      cards: {
        laserCo2: {
          title: 'Fractional CO2 Laser',
          description: 'Controlled microablation and thermal effect to promote neoepithelization and collagen stimulation.',
        },
        rf: {
          title: 'Radiofrequency',
          description: 'Controlled deep-tissue heating to stimulate collagen and elastin, improving vascularization and lubrication.',
        },
        emsella: {
          title: 'EMSella HIFEM',
          description: 'High-intensity electromagnetic field for supramaximal pelvic floor contractions.',
        },
        prp: {
          title: 'Intimate PRP',
          description: 'Platelet-rich plasma to support tissue regeneration as a complement to laser or radiofrequency.',
        },
        bioidenticalHt: {
          title: 'Bioidentical Hormone Therapy',
          description: 'Hormones with a structure equivalent to those produced by the body. Appropriate indication, adjusted dosage and follow-up.',
        },
        magnetotherapy: {
          title: 'Magnetotherapy',
          description: 'Low-frequency pulsed electromagnetic fields to support recovery and tissue repair processes.',
        },
      },
    },

    // Team section
    team: {
      eyebrow: 'Clinical team',
      title: 'Professionals committed to your health',
      description: 'Our team combines medical expertise with a personable and individualized approach. We have one clear goal in mind: that you leave with an understandable diagnosis and a plan tailored to you.',
      members: [
        {
          slug: 'rafael-fraile',
          name: 'Dr. Rafael Fraile Pérez-Cuadrado',
          role: 'Medical Director · Gynecologist and obstetrician',
          bio: 'Over 25 years of clinical experience, with an approach grounded in rigor, clarity and follow-up.',
        },
        {
          slug: 'natalia-golubtsova',
          name: 'Dr. Natalia Golubtsova',
          role: 'Obstetrician-gynecologist',
          bio: 'Hormonal perspective, ultrasound-based diagnostic support and training in functional and regenerative gynecology.',
        },
        {
          slug: 'lucia-mascia',
          name: 'Dr. Lucía Mascia',
          role: 'Gynecologist-obstetrician',
          bio: 'Close support in gynecology and obstetrics, with experience and a practical approach.',
        },
      ],
      cta: 'Meet the team',
    },

    // Trust block (Bloque 5)
    trust: {
      eyebrow: 'Why choose us',
      title: 'The peace of mind of being in the best hands',
      subtitle: 'When you choose a team with experience and sound judgment, you gain confidence, clarity and continuity.',
      points: [
        {
          title: 'Clinical judgment',
          description: 'We look for the cause and the right approach — no one-size-fits-all solutions.',
        },
        {
          title: 'Clear explanations',
          description: 'You leave knowing what is happening and what your options are.',
        },
        {
          title: 'Confidence in every decision',
          description: 'We prioritize what is right for your case and your life stage.',
        },
        {
          title: 'Experience at your service',
          description: 'A well-established career and ongoing professional development.',
        },
        {
          title: 'Genuine support',
          description: 'Follow-up and continuity of care.',
        },
      ],
      ctaDoctor: 'Meet the doctor',
      ctaAppointment: 'Book your appointment',
    },

    // Testimonials block (Bloque 6)
    testimonials: {
      eyebrow: 'Verified reviews',
      title: 'Our best endorsement: our patients',
      subtitle: 'Verified reviews (Google/Doctoralia).',
      placeholders: [
        {
          name: 'Maria G.',
          text: 'Excellent professional. He explained everything very clearly and the care was very compassionate. Highly recommended.',
          rating: 5,
        },
        {
          name: 'Laura P.',
          text: 'After years searching for a solution, Dr. Fraile offered me a treatment that changed my quality of life.',
          rating: 5,
        },
        {
          name: 'Carmen S.',
          text: 'The best gynecologist I\'ve ever visited. Personalized care and incredible results with the regenerative treatments.',
          rating: 5,
        },
      ],
      cta: 'See more reviews',
    },

    // Easy process block
    easyProcess: {
      eyebrow: 'Booking is easy',
      title: 'We make it simple',
      note: 'We typically respond within 24 business hours.',
      steps: [
        {
          number: '1',
          title: 'Write to us',
          description: 'Fill out the form or send us a WhatsApp message.',
        },
        {
          number: '2',
          title: 'We call you',
          description: 'We\'ll call to confirm the reason for your visit, answer questions and schedule your appointment.',
        },
        {
          number: '3',
          title: 'Call us directly',
          description: 'If you prefer, you can call us directly.',
        },
      ],
    },

    // FAQs
    faqs: {
      eyebrow: 'Frequently asked questions',
      title: 'We answer your questions',
      items: [
        {
          question: 'How does the appointment request process work?',
          answer: 'You can contact us via WhatsApp or by filling out the form on our website. With the information you provide, we\'ll call you to confirm the reason for your visit, answer any questions and suggest a date and time.',
        },
        {
          question: 'How soon will you get back to me?',
          answer: 'We typically respond within 24 business hours. During periods of high demand it may vary slightly, but we will always get back to you.',
        },
        {
          question: 'Do you see private patients and those with insurance?',
          answer: 'Yes. We see private patients and also work with some insurance providers. If you let us know which one you have, we can quickly confirm whether it\'s accepted.',
        },
        {
          question: 'What do I need if I\'m coming through insurance?',
          answer: 'It depends on the insurance company and the type of consultation. In some cases a referral or authorization is required, and there may be a co-pay. When you contact us, we\'ll tell you exactly what you need based on your insurance and reason for the visit.',
        },
        {
          question: 'What can I expect at the first visit?',
          answer: 'We carry out a thorough clinical assessment: we listen to your case, review your medical history and, where appropriate, evaluate any previous test results. We clearly explain what is happening, which options make sense for your situation and what the next steps would be.',
        },
        {
          question: 'Do I need to bring anything to the appointment?',
          answer: 'If you have previous reports, blood tests, ultrasounds, recent test results or a list of your current medications, please bring them (printed or on your phone). If you don\'t have any records, that\'s perfectly fine — we\'ll let you know what information may be useful for your case.',
        },
        {
          question: 'Do you handle emergencies?',
          answer: 'If you are experiencing an emergency (severe pain, heavy bleeding, worrying pregnancy symptoms or any situation that cannot wait), we recommend going to an emergency department. If it is not an immediate emergency but you are concerned, call us or send a WhatsApp message and we\'ll advise you on the next step.',
        },
        {
          question: 'Do you offer second opinions?',
          answer: 'Yes. If you come with a previous diagnosis or treatment proposal, we\'ll review it with you and clearly explain the alternatives so you can make a decision with confidence.',
        },
        {
          question: 'How much does a consultation or treatment cost?',
          answer: 'It depends on the reason for the visit and the assessment. After the first appointment, we\'ll transparently inform you of the options and provide an estimate if applicable. If you are covered by insurance, we\'ll let you know what your policy covers and whether there is a co-pay.',
        },
        {
          question: 'Can I reschedule or cancel my appointment?',
          answer: 'Yes. If you need to reschedule or cancel, we ask that you let us know as far in advance as possible so we can reorganize our schedule and offer that slot to another patient.',
        },
      ],
      whatsappNote: 'Have more questions? Send us a WhatsApp message and we\'ll be happy to help.',
    },

    // CTA section (Bloque 7)
    cta: {
      title: 'Request your appointment',
      description: 'Briefly tell us the reason and we\'ll call you to schedule a date and time.',
      button: 'Request your appointment',
      note: 'We typically respond within 24 business hours.',
    },
  },

  // Regenerative Gynecology page
  regenerative: {
    title: 'Regenerative and Functional Gynecology',
    description: 'Thorough medical assessment, clear diagnosis and a personalized plan. Solutions to improve and restore your quality of life safely.',

    hero: {
      eyebrow: 'Advanced intimate health',
      title: 'Regenerative and functional gynecology',
      subtitle: 'Thorough medical assessment, clear diagnosis and a personalized plan. Solutions to improve and restore your quality of life safely.',
    },

    sections: {
      rf: {
        title: 'Radiofrequency (RF)',
        description: 'Gynecological radiofrequency uses electromagnetic waves to generate controlled heat in the tissues, stimulating collagen and elastin production. It is applied when vaginal laxity, dryness or discomfort affecting quality of life are present.',
        benefits: [
          'Improves tissue elasticity and hydration',
          'Non-invasive treatment with no recovery time',
          'Progressive and natural results',
          'Indicated following an individualized medical assessment',
        ],
        content: 'Radiofrequency generates controlled heat that activates the natural production of collagen in the vaginal mucosa. This improves the elasticity, hydration and function of the tissues. It is especially indicated for women with genital atrophy symptoms associated with menopause, postpartum or certain treatments. The indication is always established after a thorough medical assessment.',
      },
      laserCo2: {
        title: 'Fractional CO2 Laser',
        description: 'The fractional CO2 laser enables vaginal tissue regeneration through controlled microablation. It stimulates cell renewal and improves the hydration, elasticity and trophism of the mucosa.',
        benefits: [
          'Deep tissue regeneration',
          'Treatment of vaginal atrophy and dryness',
          'Improved natural lubrication',
          'Outpatient procedure, no general anesthesia required',
        ],
        content: 'The fractional CO2 laser acts on the vaginal mucosa by stimulating the formation of new collagen and tissue revascularization. It is an effective option for women experiencing dryness, discomfort during intercourse or atrophy symptoms associated with menopause. It is performed in the office, does not require general anesthesia and recovery is quick. Its indication is decided on an individual basis following a clinical assessment.',
      },
      emsella: {
        title: 'EMSella',
        description: 'EMSella uses high-intensity focused electromagnetic (HIFEM) technology to stimulate and strengthen the pelvic floor muscles non-invasively.',
        benefits: [
          'Treatment of mild to moderate urinary incontinence',
          'Pelvic floor strengthening',
          '28-minute sessions, no undressing required',
          'Compatible with other treatment options',
        ],
        content: 'EMSella generates supramaximal contractions of the pelvic floor muscles, equivalent to thousands of Kegel exercises in a single session. It is indicated for women with mild to moderate stress urinary incontinence, postpartum pelvic floor weakness or as a complement in rehabilitation programs. The treatment is performed while seated, fully clothed, with no recovery time. The indication is established following a medical assessment.',
      },
      prp: {
        title: 'Intimate PRP',
        description: 'PRP uses platelet-rich plasma obtained from the patient herself, providing autologous growth factors to support tissue regeneration.',
        benefits: [
          'Supports plans aimed at improving tissue comfort and quality',
          'Integrated with other unit options when indicated',
        ],
        content: 'It is considered as a complement to laser or radiofrequency when it adds value to the personalized plan, according to clinical indication. We confirm indication on a case-by-case basis and review medical history before proposing it. Specific precautions, such as coagulation disorders, are considered before deciding.',
      },
      magnetotherapy: {
        title: 'Magnetotherapy',
        description: 'Magnetotherapy applies magnetic fields to promote tissue regeneration, improve circulation and reduce inflammation in the gynecological setting.',
        benefits: [
          'Improves local blood circulation',
          'Reduces pain and inflammation',
          'Promotes tissue regeneration',
          'Non-invasive and painless treatment',
        ],
        content: 'Magnetotherapy uses pulsed magnetic fields that enhance microcirculation and tissue repair processes. It is used as a complementary treatment for certain gynecological conditions, always following an individualized medical assessment.',
      },
      bioidenticalHt: {
        title: 'Bioidentical Hormone Therapy',
        description: 'Bioidentical hormones are molecules identical to those naturally produced by the human body, used for personalized hormone treatment.',
        benefits: [
          'Personalized hormone treatment',
          'Hormones identical to the body\'s own',
          'Improvement of menopause and perimenopause symptoms',
          'Continuous medical monitoring and dose adjustment',
        ],
        content: 'Bioidentical hormone therapy uses hormones with a molecular structure identical to those produced by the body. It is prescribed on an individualized basis following a comprehensive hormonal evaluation and is adjusted according to each patient\'s clinical and laboratory response. It is indicated for women with hormone deficiency symptoms associated with menopause or other clinical situations, always under close medical supervision.',
      },
    },

    whenToConsult: {
      eyebrow: 'Indications',
      title: 'When to request an assessment',
      items: [
        'Dryness or intimate discomfort',
        'Pain during intercourse',
        'Urinary changes or mild leakage',
        'Intimate postpartum recovery',
        'Menopause: intimate wellbeing',
        'Sensation of laxity or lack of tone',
      ],
    },

    faqs: {
      eyebrow: 'Frequently asked questions',
      title: 'We answer your questions',
      whatsappNote: 'Have more questions? Send us a WhatsApp message and we\'ll be happy to help.',
      items: [
        {
          question: 'What does regenerative and functional gynecology involve?',
          answer: 'It integrates principles of regenerative medicine, gynecology and endocrinology to relieve symptoms and improve quality of life with realistic expectations and clinical follow-up.',
        },
        {
          question: 'How do I know if I am a candidate?',
          answer: 'It is typically considered for women with mild to moderate symptoms such as dryness, discomfort, mild leakage or laxity, especially postpartum or during (peri)menopause. At the assessment we will clearly tell you whether it is appropriate for you and which options fit your case best.',
        },
        {
          question: 'Does it hurt?',
          answer: 'These are non-surgical procedures. We explain the sensations to expect and, if needed, local analgesia can be used.',
        },
        {
          question: 'How many sessions are usually recommended?',
          answer: 'It depends on the indication and the condition of the tissue. As a general guide, many protocols involve 2 or 3 sessions with progressive improvement.',
        },
        {
          question: 'When will I notice changes?',
          answer: 'It varies from case to case. Some patients notice changes from the first sessions and others after completing the full plan and follow-up.',
        },
        {
          question: 'Can treatments or approaches be combined?',
          answer: 'Yes, when indicated. Combining with pelvic floor physiotherapy can enhance functional outcomes in some cases.',
        },
        {
          question: 'Are there contraindications or precautions?',
          answer: 'Yes. Everything is reviewed at the assessment to make decisions safely.',
        },
        {
          question: 'How is the most appropriate treatment decided?',
          answer: 'Gynecological assessment, personalized plan, outpatient sessions and follow-up, adjusting the plan according to progress.',
        },
      ],
    },
  },

  // Obstetrics page
  obstetrics: {
    title: 'Obstetrics and pregnancy in Alicante',
    description: 'Pregnancy monitoring, prenatal diagnosis and clinical support at every stage. Close, rigorous follow-up so you can experience pregnancy with peace of mind.',

    hero: {
      eyebrow: 'Obstetrics',
      title: 'Pregnancy monitoring, prenatal diagnosis and support at every stage',
      subtitle: 'Close, rigorous follow-up so you can experience pregnancy with peace of mind.',
    },

    intro: 'Pregnancy monitoring is important both at the beginning and at the end. As a general guide, we recommend one visit per month and, in the last 4 weeks, weekly follow-up. We adapt the plan to your progress and clinical situation.',

    services: [
      {
        id: 'seguimiento',
        title: 'Pregnancy follow-up',
        description: 'Clinical review and answering your questions, monitoring progress, planning tests and coordinating with other professionals when needed.',
        items: [
          'Clinical review and answering your questions',
          'Monitoring pregnancy progress',
          'Planning tests and next steps',
          'Coordinating with other professionals when needed',
        ],
      },
      {
        id: 'diagnostico-prenatal',
        title: 'Prenatal diagnosis and fetal medicine',
        description: 'An approach focused on timely detection, clear explanation and confident decision-making. In the consultation we review your case and define the tests and follow-up that add value.',
        items: [],
      },
      {
        id: 'ecografia-4d',
        title: 'Emotional 4D/5D ultrasound',
        description: 'Advanced ultrasound technology with 4D HD Live (5D) imaging to clearly see your baby\'s features and movements, at a particularly special moment. We guide you on the best time to have it done.',
        items: [],
      },
      {
        id: 'parto',
        title: 'Birth assistance',
        description: 'Birth support with a coordinated approach, a multidisciplinary team and clear communication at every decision.',
        items: [
          'Planning and support',
          'Clinical coordination',
          'Clear communication and informed decisions',
        ],
      },
    ],

    faqs: {
      eyebrow: 'Frequently asked questions',
      title: 'We answer your questions',
      whatsappNote: 'Have more questions? Send us a WhatsApp message and we\'ll be happy to help.',
      items: [
        {
          question: 'How often are check-ups recommended during pregnancy?',
          answer: 'As a general guide, one visit per month and, in the last 4 weeks, weekly check-ups. This is adjusted according to your progress.',
        },
        {
          question: 'What does the first obstetrics visit include?',
          answer: 'Medical history, initial assessment and a clear plan for follow-up and tests.',
        },
        {
          question: 'Do you carry out prenatal diagnosis?',
          answer: 'Yes. We work on prenatal diagnosis and fetal medicine with a rigorous approach and clear explanations.',
        },
        {
          question: 'Can I have a 4D/5D ultrasound?',
          answer: 'Yes. We guide you on the best time and what to expect in your case.',
        },
        {
          question: 'Do you offer second opinions?',
          answer: 'We assess each case. If you need a second opinion, we review it with you in the consultation.',
        },
        {
          question: 'How do I book an appointment?',
          answer: 'You can write to us via the form or WhatsApp and we will call you to assign a date and time.',
        },
        {
          question: 'Do you see private patients and those with insurance?',
          answer: 'We see private patients and work with some insurance providers. We confirm coverage when you request the appointment.',
        },
        {
          question: 'Do you handle emergencies?',
          answer: 'If you have an emergency, contact us by phone and we will advise you on the best course of action for your situation.',
        },
      ],
    },
  },

  // Gynecology page
  gynecology: {
    title: 'Gynecology in Alicante',
    description: 'Check-ups, prevention and diagnosis with a comprehensive view of women\'s health. Clarity from the first visit, with a personalized plan when you need it.',

    hero: {
      eyebrow: 'Gynecology',
      title: 'Check-ups, prevention and diagnosis with a comprehensive view of women\'s health',
      subtitle: 'Clarity from the first visit, with a personalized plan when you need it.',
    },

    services: [
      {
        id: 'revisiones',
        title: 'Gynecological check-ups',
        description: 'Regular check-ups are a key foundation for caring for women\'s health and supporting prevention and early diagnosis.',
        items: [
          'Clinical assessment and examination where appropriate',
          'Test recommendations based on age, history and symptoms',
          'Answering questions and a clear follow-up plan',
        ],
      },
      {
        id: 'anticoncepcion',
        title: 'Contraception',
        description: 'Every woman and every stage is different. We study your case and advise you on choosing the most appropriate contraceptive method, prioritizing safety, comfort and your goals.',
        items: [],
      },
      {
        id: 'menopausia',
        title: 'Menopause',
        description: 'Menopause can be accompanied by physical and emotional symptoms. Treatment options exist, including hormone therapy when indicated, always after assessment and with follow-up.',
        items: [],
        relatedLink: { text: 'Bioidentical Hormone Therapy', key: 'regenerative' },
      },
      {
        id: 'patologia-cervical',
        title: 'Cervical pathology unit',
        description: 'Unit focused on the diagnosis and treatment of cervical pathologies, with a follow-up approach and clarity at every step.',
        items: [],
      },
      {
        id: 'patologia-mamaria',
        title: 'Breast pathology',
        description: 'At the Breast Pathology Unit of Instituto Ginecológico de Alicante we combine every service in a warm, efficient environment that supports and guides each patient, with the aim of achieving excellence in the diagnosis and treatment of breast conditions.',
        items: [],
      },
      {
        id: 'salud-intima',
        title: 'Advanced intimate health',
        description: 'If your concern relates to intimate wellbeing, mild urinary changes, postpartum recovery or menopause affecting quality of life, you can access the Regenerative Gynecology Unit.',
        items: [],
        relatedLink: { text: 'Regenerative Gynecology Unit', key: 'regenerative' },
      },
    ],

    faqs: {
      eyebrow: 'Frequently asked questions',
      title: 'We answer your questions',
      whatsappNote: 'Have more questions? Send us a WhatsApp message and we\'ll be happy to help.',
      items: [
        {
          question: 'How often is a gynecological check-up recommended?',
          answer: 'It depends on your age, history and symptoms. In the consultation we will tell you the appropriate frequency for you.',
        },
        {
          question: 'Can you help me choose contraception?',
          answer: 'Yes. We study your situation and advise you on choosing the most appropriate method.',
        },
        {
          question: 'Do you treat menopause symptoms?',
          answer: 'Yes. We assess symptoms and options, including hormone therapy when indicated, with follow-up.',
        },
        {
          question: 'Do you see cervical pathology?',
          answer: 'Yes. We have a cervical pathology unit for diagnosis and treatment.',
        },
        {
          question: 'Do you see private patients and those with insurance?',
          answer: 'We see private patients and work with some insurance providers. We confirm coverage when you request the appointment.',
        },
        {
          question: 'Do you handle emergencies?',
          answer: 'If you have an emergency, contact us by phone and we will advise you on the best course of action for your situation.',
        },
      ],
    },
  },

  // Patient Care page
  patientCare: {
    title: 'Patient care',
    description: 'Everything you need to prepare for your visit and answer practical questions before you come. We attend to you with clarity, warmth and clinical coordination from the very first contact.',

    hero: {
      eyebrow: 'Patient care',
      title: 'Everything you need to prepare for your visit',
      subtitle: 'We attend to you with clarity, warmth and clinical coordination from the very first contact.',
    },

    howItWorks: {
      eyebrow: 'How it works',
      title: 'Booking an appointment',
      intro: 'Choose the option that suits you best. Our team will confirm the date and time by phone.',
      steps: [
        'Tell us the reason for your consultation (gynecology, obstetrics, check-up, menopause, intimate health, etc.).',
        'We call you to suggest available times and confirm the appointment.',
        'If you are coming through insurance, we review coverage and the required documentation with you.',
        'Before you come, if you have previous reports or test results, you can send them via WhatsApp or bring them on the day of the visit.',
      ],
    },

    firstVisit: {
      eyebrow: 'First visit',
      title: 'Prepare for your first visit',
      intro: 'We want your first visit to be clear and relaxed. If this is your first time with us, this will help you prepare.',
      bringTitle: 'What to bring (if you have it)',
      bringItems: [
        'ID or identification document',
        'Relevant previous medical reports (gynecology/obstetrics)',
        'Recent blood tests, ultrasounds or test results',
        'List of regular medications and allergies',
        'If coming through insurance: card and/or authorizations (if applicable)',
      ],
      tip: 'Practical tip: arrive 10 minutes early to make the process smoother.',
      expectTitle: 'What to expect',
      expectItems: [
        'Listening and clinical assessment: tell us your situation, history and goals.',
        'Examination and in-office tests, only if necessary and with your consent.',
        'A clear plan: we explain options, next steps and follow-up.',
      ],
    },

    insurance: {
      eyebrow: 'Insurance',
      title: 'Insurance providers and private patients',
      intro: 'We see private patients and work with some insurance providers. To avoid surprises, we confirm this with you when you request the appointment.',
      note: 'If you have any questions, let us know your insurance provider\'s name and we\'ll guide you through the process.',
      checkItems: [
        'Whether your policy covers the service or procedure you need',
        'Whether prior authorization is required',
        'What documentation to bring on the day of the consultation',
      ],
    },

    emergencies: {
      eyebrow: 'Emergencies',
      title: 'Emergencies',
      intro: 'If you have an emergency, the most important thing is that you receive care as soon as possible.',
      items: [
        'Call us by phone and we will advise you on the best course of action for your situation.',
        'If it is a serious situation or you cannot reach us, go to the emergency department or call 112.',
      ],
    },

    cancellations: {
      title: 'Appointment changes and cancellations',
      intro: 'If you need to change or cancel your appointment, please let us know as soon as possible so we can offer that slot to another patient.',
      note: 'If possible, please give us 24–48 hours notice.',
    },

    location: {
      eyebrow: 'Location',
      title: 'Location and hours',
      address: 'HLA Vistahermosa — Avda. Denia, 103 — 03015 Alicante',
      hoursNote: 'We see patients by appointment. Check availability by phone or WhatsApp.',
    },

    faqs: {
      eyebrow: 'Frequently asked questions',
      title: 'We answer your questions',
      whatsappNote: 'Have more questions? Send us a WhatsApp message and we\'ll be happy to help.',
      items: [
        {
          question: 'How can I book an appointment?',
          answer: 'By phone, WhatsApp or the web form. If you write to us, we will call you to assign a date and time.',
        },
        {
          question: 'How soon will you call me after I submit the form?',
          answer: 'We usually call as soon as possible during working hours. If it is urgent, it is better to call us directly by phone.',
        },
        {
          question: 'Can I be seen via WhatsApp?',
          answer: 'You can write to us on WhatsApp to request an appointment and send information. The final confirmation is usually done by phone call.',
        },
        {
          question: 'What should I bring to the first visit?',
          answer: 'ID, relevant reports or test results and, if coming through insurance, your card and authorizations if applicable.',
        },
        {
          question: 'Can I send reports before the consultation?',
          answer: 'Yes. You can send them via WhatsApp or bring them on the day of the visit.',
        },
        {
          question: 'Do you see private patients and those with insurance?',
          answer: 'Yes. We see private patients and work with some insurance providers. We confirm coverage when you request the appointment.',
        },
        {
          question: 'Do I need authorization from my insurance provider?',
          answer: 'It depends on your policy. We guide you when you book the appointment.',
        },
        {
          question: 'Do you handle emergencies?',
          answer: 'If it is an emergency, call us by phone. If it is serious or you cannot reach us, go to the emergency department or call 112.',
        },
        {
          question: 'Can I bring someone with me?',
          answer: 'Yes, unless the centre\'s logistics require limiting occupancy at some point. If in doubt, ask us.',
        },
        {
          question: 'Is a remote consultation possible?',
          answer: 'It depends on the reason and the case. Ask us and we will let you know if it is possible.',
        },
        {
          question: 'How can I change or cancel an appointment?',
          answer: 'By phone or WhatsApp, letting us know as soon as possible.',
        },
        {
          question: 'How do you handle my personal data?',
          answer: 'We comply with data protection regulations (LOPD-GDD and GDPR). We use your data only to manage your care and respond to your request.',
        },
      ],
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
      intro: 'At Instituto Dr. Rafael Fraile Pérez-Cuadrado we have the most advanced equipment for accurate and reliable diagnostics.',
      list: [
        {
          title: 'Gynecological ultrasound',
          description: 'Comprehensive evaluation using high-resolution ultrasound for the diagnosis of various gynecological conditions.',
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
    title: 'Request your appointment',
    description: 'Briefly tell us the reason and we\'ll call you to schedule a date and time.',

    hero: {
      eyebrow: 'Contact',
      title: 'Request your appointment',
      subtitle: 'Briefly tell us the reason and we\'ll call you to schedule a date and time.',
    },

    form: {
      name: 'Full name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      phone: 'Phone',
      phonePlaceholder: '+34 600 000 000',
      service: 'Reason for consultation',
      servicePlaceholder: 'Select a reason',
      serviceOptions: [
        'Gynecological check-up',
        'Pregnancy/obstetrics',
        'Menopause/intimate wellness',
        'Postpartum/pelvic floor',
        'Other inquiry',
      ],
      message: 'Message',
      messagePlaceholder: 'Briefly tell us about your case...',
      submit: 'Send request',
      privacy: 'By submitting this form, you accept our privacy policy.',
      confirmation: 'Thank you. We have received your request. We will get in touch with you as soon as possible.',
    },

    contact: {
      title: 'Contact information',
      address: 'HLA Vistahermosa - Avda. Denia, 103 - 03015 Alicante',
      phone: '+34 965 248 558',
      whatsapp: '+34 652 582 768',
      email: 'info@institutomaternoinfantil.es',
      hours: 'Monday to Friday: 9:00 AM - 8:00 PM',
      whatsappCta: 'Contact via WhatsApp',
    },
  },

  // Contact info (global)
  contact: {
    phone: '+34 965 248 558',
    whatsapp: '+34 652 582 768',
    address: 'HLA Vistahermosa - Avda. Denia, 103 - 03015 Alicante',
    email: 'info@institutomaternoinfantil.es',
  },

  // Footer
  footer: {
    description: 'Instituto Dr. Rafael Fraile Pérez-Cuadrado. Gynecology, obstetrics and regenerative gynecology in Alicante. Over 25 years caring for women\'s health.',
    quickLinks: 'Quick links',
    specialties: 'Specialties',
    about: 'About us',
    contact: 'Contact',
    legal: 'Legal',
    privacy: 'Privacy policy',
    terms: 'Legal notice',
    cookies: 'Cookie policy',
    copyright: '© {year} Instituto Dr. Rafael Fraile Pérez-Cuadrado. All rights reserved.',
    whatsappNote: 'Have a quick question? Send us a WhatsApp message and we\'ll point you in the right direction.',
  },

  // Treatment: Fractional CO2 Laser
  treatmentLaserCo2: {
    title: 'Fractional CO2 Laser',
    description: 'Thorough medical assessment, clear diagnosis and a personalized plan. Solutions to improve your quality of life.',
    hero: {
      eyebrow: 'Regenerative gynecology',
      title: 'Fractional CO2 Laser',
      subtitle: 'Thorough medical assessment, clear diagnosis and a personalized plan. Solutions to improve your quality of life.',
    },
    whenToConsult: {
      title: 'When it can help you',
      items: [
        'Vaginal atrophy or dryness',
        'Genitourinary syndrome',
        'Moderate laxity sensation',
        'Discomfort affecting intimate well-being',
      ],
    },
    whatIs: {
      title: 'What it involves',
      content: 'The fractional CO2 laser generates a controlled microablation and thermal effect on the mucosa, promoting neoepithelization and collagen stimulation.\n\nIt is considered for vaginal atrophy, genitourinary syndrome and moderate laxity. During the first visit, we confirm whether the tissue condition makes it suitable for you and define the plan.',
    },
    process: {
      title: 'What you can expect from the process',
      steps: [
        { number: '1', title: 'Assessment and listening', description: 'We understand your situation, medical history and goals.' },
        { number: '2', title: 'Clear diagnosis', description: 'We explain what is happening and which options make sense in your case.' },
        { number: '3', title: 'Personalized plan', description: 'We define the next step and support your progress.' },
      ],
    },
    safety: {
      title: 'Safety and care',
      items: [
        'Before recommending the laser, we confirm that the tissue condition makes it suitable for your case.',
        'We review your medical history and possible precautions before starting.',
        'We clearly explain expected sensations and aftercare.',
        'If it is not the most suitable approach, we guide you on alternatives.',
      ],
    },
    faqs: {
      title: 'Frequently asked questions',
      items: [
        { question: 'How do I know if it is right for me?', answer: 'During the assessment, we confirm whether the tissue and your situation make it advisable, and we propose the most suitable plan.' },
        { question: 'Is it painful?', answer: 'It is a non-surgical procedure. We explain what sensations are typical, and if needed, local analgesia can be used.' },
        { question: 'How many sessions are usually recommended?', answer: 'It depends on the case and tissue condition. We confirm this during the consultation with realistic expectations.' },
        { question: 'When are changes noticeable?', answer: 'It varies by case. Some patients report changes from the first sessions, others after completing the plan and follow-up.' },
        { question: 'Are there contraindications or precautions?', answer: 'Yes. These are reviewed during the consultation before starting.' },
        { question: 'Can it be combined with other approaches?', answer: 'In selected cases, it can be combined with other complementary treatments if it adds value to the plan.' },
        { question: 'What is the first visit like?', answer: 'Medical history, examination and a treatment plan proposal if appropriate.' },
        { question: 'Can I consider it during menopause?', answer: 'Yes, it is frequently considered when there is dryness or genitourinary syndrome impacting quality of life.' },
      ],
    },
  },

  // Treatment: Vaginal and Vulvar Radiofrequency
  treatmentRf: {
    title: 'Vaginal and Vulvar Radiofrequency',
    description: 'Individualized diagnosis and tailored treatment to improve intimate function, comfort and quality of life.',
    hero: {
      eyebrow: 'Regenerative gynecology',
      title: 'Vaginal and Vulvar Radiofrequency',
      subtitle: 'Individualized diagnosis and tailored treatment to improve intimate function, comfort and quality of life.',
    },
    whenToConsult: {
      title: 'When it can help you',
      items: [
        'Mild or moderate vaginal laxity sensation',
        'Dryness or intimate discomfort',
        'Mild urine leakage',
        'Discomfort impacting intimate life or daily well-being',
      ],
    },
    whatIs: {
      title: 'What it involves',
      content: 'Vaginal and vulvar radiofrequency produces controlled heating in deep layers to stimulate collagen and elastin, improve vascularization and promote lubrication.\n\nIt is especially considered for mild or moderate laxity, dryness and mild incontinence. The plan is defined after the assessment.',
    },
    process: {
      title: 'What you can expect from the process',
      steps: [
        { number: '1', title: 'Assessment and listening', description: 'We understand your situation, medical history and goals.' },
        { number: '2', title: 'Clear diagnosis', description: 'We explain what is happening and which options make sense in your case.' },
        { number: '3', title: 'Personalized plan', description: 'We define the next step and support your progress.' },
      ],
    },
    safety: {
      title: 'Safety and care',
      items: [
        'The indication is decided after clinical assessment: not all patients benefit from the same approach.',
        'We explain expected sensations, aftercare and realistic expectations before starting.',
        'We review medical history and relevant precautions to decide safely.',
      ],
    },
    faqs: {
      title: 'Frequently asked questions',
      items: [
        { question: 'How do I know if it is right for me?', answer: 'During the assessment, we will clearly tell you if it is suitable for your case and which options fit best.' },
        { question: 'Is it painful?', answer: 'It is a non-surgical procedure. We explain what you may notice, and if needed, local analgesia can be used.' },
        { question: 'How many sessions are usually recommended?', answer: 'It depends on the tissue and indication. As a general guide, it is usually planned in 2 or 3 sessions with progressive improvement.' },
        { question: 'When are changes noticeable?', answer: 'Results are usually progressive. We discuss specifics with you based on goals and follow-up.' },
        { question: 'Are there contraindications or precautions?', answer: 'Yes. These are reviewed during the consultation before starting to ensure safety.' },
        { question: 'Can it be combined with other approaches?', answer: 'Yes, when indicated, it can be integrated into a combined plan with follow-up.' },
        { question: 'What is the first visit like?', answer: 'Gynecological assessment, examination and plan definition if appropriate.' },
        { question: 'Can I consider it during menopause or postpartum?', answer: 'Yes, it is frequently considered during these stages when quality of life is affected.' },
      ],
    },
  },

  // Treatment: Emsella HIFEM
  treatmentEmsella: {
    title: 'Emsella HIFEM',
    description: 'Individualized diagnosis and non-invasive treatment to strengthen the pelvic floor and improve your daily life.',
    hero: {
      eyebrow: 'Regenerative gynecology',
      title: 'Emsella HIFEM',
      subtitle: 'Individualized diagnosis and non-invasive treatment to strengthen the pelvic floor and improve your daily life.',
    },
    whenToConsult: {
      title: 'When it can help you',
      items: [
        'Mild or moderate stress urinary incontinence',
        'Mild or moderate mixed incontinence',
        'Pelvic floor weakness postpartum',
      ],
    },
    whatIs: {
      title: 'What it involves',
      content: 'Emsella uses a high-intensity electromagnetic field to induce supramaximal contractions of the pelvic floor, helping to strengthen the muscles related to control and support.\n\nIt is a non-surgical option that is integrated into a personalized plan according to symptoms and goals.',
    },
    process: {
      title: 'What you can expect from the process',
      steps: [
        { number: '1', title: 'Assessment and listening', description: 'We understand your situation, medical history and goals.' },
        { number: '2', title: 'Clear diagnosis', description: 'We explain what is happening and which options make sense in your case.' },
        { number: '3', title: 'Personalized plan', description: 'We define the next step and support your progress.' },
      ],
    },
    safety: {
      title: 'Safety and care',
      items: [
        'Before starting, we review medical history and possible precautions, especially if implanted devices exist.',
        'We explain what sensations are typical during the session and how we will evaluate progress.',
        'If it is not the best approach for you, we guide you on alternatives and complementary exercises.',
      ],
    },
    faqs: {
      title: 'Frequently asked questions',
      items: [
        { question: 'How do I know if it is right for me?', answer: 'During the assessment, we confirm the type of symptom and whether this approach fits your case.' },
        { question: 'Is it painful?', answer: 'It is not a surgical procedure. We explain what you may notice during the session before starting.' },
        { question: 'How long does each session last?', answer: 'Approximately 28 minutes, fully clothed and with no recovery time.' },
        { question: 'How many sessions are usually recommended?', answer: 'It depends on the case and goal. We confirm this during the consultation and adjust according to progress.' },
        { question: 'When are changes noticeable?', answer: 'It varies by patient. We define realistic expectations and follow-up.' },
        { question: 'Are there contraindications or precautions?', answer: 'Yes. These are reviewed during the consultation, especially if implanted devices are present.' },
        { question: 'Can it be combined with pelvic floor physiotherapy?', answer: 'Yes, when indicated, it can enhance functional results.' },
        { question: 'Is it useful postpartum?', answer: 'It is frequently considered when there is pelvic floor weakness after delivery and it affects quality of life.' },
      ],
    },
  },

  // Treatment: Intimate PRP
  treatmentPrp: {
    title: 'Intimate PRP',
    description: 'Specialized care and a personalized plan to support intimate-area regeneration and improve your wellbeing.',
    hero: {
      eyebrow: 'Regenerative gynecology',
      title: 'Intimate PRP',
      subtitle: 'Specialized care and a personalized plan to support intimate-area regeneration and improve your wellbeing.',
    },
    whenToConsult: {
      title: 'When it can help you',
      items: [
        'As support in plans aimed at improving tissue comfort and quality',
        'Integrated with other options from the unit when indicated',
      ],
    },
    whatIs: {
      title: 'What it involves',
      content: 'PRP uses platelet-rich plasma obtained from the patient herself, providing autologous growth factors to support tissue regeneration.\n\nIt is considered as a complement to laser or radiofrequency when it adds value to the personalized plan, according to clinical indication.',
    },
    process: {
      title: 'What you can expect from the process',
      steps: [
        { number: '1', title: 'Assessment and listening', description: 'We understand your situation, medical history and goals.' },
        { number: '2', title: 'Clear diagnosis', description: 'We explain what is happening and which options make sense in your case.' },
        { number: '3', title: 'Personalized plan', description: 'We define the next step and support your progress.' },
      ],
    },
    safety: {
      title: 'Safety and care',
      items: [
        'We confirm the indication on a case-by-case basis and review medical history before proposing it.',
        'Specific precautions are considered, such as coagulation disorders, before deciding.',
        'If it is not the most suitable option, we propose alternatives with the same well-being goal.',
      ],
    },
    faqs: {
      title: 'Frequently asked questions',
      items: [
        { question: 'How do I know if PRP is right for me?', answer: 'It is decided after assessment. It is often proposed as a complement when it adds value to the plan.' },
        { question: 'Is PRP used alone or combined?', answer: 'In many cases, it is considered as a complement to laser or radiofrequency, according to indication.' },
        { question: 'Is it painful?', answer: 'It is a non-surgical procedure. We explain what sensations to expect and how to manage discomfort if necessary.' },
        { question: 'How many sessions are usually recommended?', answer: 'It depends on the goal and the overall plan. We define it with you during the consultation.' },
        { question: 'When are changes noticeable?', answer: 'It varies by case and the combined plan. We adjust expectations and follow-up.' },
        { question: 'Are there contraindications or precautions?', answer: 'Yes. We review medical history and conditions that may influence the decision.' },
        { question: 'Can it be combined with pelvic floor physiotherapy?', answer: 'If indicated, it can be integrated into a coordinated plan.' },
        { question: 'What is the first visit like?', answer: 'Gynecological assessment, examination and personalized plan if appropriate.' },
      ],
    },
  },

  // Treatment: Bioidentical Hormone Therapy
  treatmentBioidenticalHt: {
    title: 'Bioidentical Hormone Therapy',
    description: 'Personalized medical assessment to help you regain balance, wellbeing and quality of life at every hormonal stage.',
    hero: {
      eyebrow: 'Regenerative gynecology',
      title: 'Bioidentical Hormone Therapy',
      subtitle: 'Personalized medical assessment to help you regain balance, wellbeing and quality of life at every hormonal stage.',
    },
    whenToConsult: {
      title: 'When it can help you',
      items: [
        'Vasomotor symptoms interfering with quality of life, such as hot flashes or sweating',
        'Disrupted sleep and rest, impacting energy and daily performance',
        'Emotional changes or irritability associated with this stage',
        'Changes in sexual desire or general well-being',
        'Progressive physical changes when a relevant hormonal component is assessed',
      ],
      note: 'During the assessment, we will clearly tell you if it is suitable for you and which alternatives fit best in your case.',
    },
    whatIs: {
      title: 'What it involves',
      content: 'Hormone therapy is a medical treatment used, in selected cases, to relieve symptoms associated with hormonal decline that can occur during stages such as menopause.\n\nWhen we talk about bioidentical hormones, we refer to hormones with a structure equivalent to those the body produces. Beyond the name, what matters is the clinical approach: appropriate indication, choice of route and adjusted dosage, and responsible follow-up.\n\nAt Instituto Dr. Rafael Fraile Pérez-Cuadrado, we clearly explain whether this approach fits your case and what alternatives exist, so you can decide with peace of mind.',
    },
    process: {
      title: 'What you can expect from the process',
      steps: [
        { number: '1', title: 'Assessment and listening', description: 'We understand your situation, medical history and goals.' },
        { number: '2', title: 'Clear diagnosis', description: 'We explain what is happening and which options make sense in your case.' },
        { number: '3', title: 'Personalized plan', description: 'We define the next step and support your progress.' },
      ],
    },
    safety: {
      title: 'Safety and care',
      items: [
        'Before recommending it, we perform a complete assessment of medical history, background and goals.',
        'We explain expected benefits and possible risks in an understandable way.',
        'We choose the most suitable route of administration and follow-up plan for you.',
        'We adjust the approach according to progress and tolerance.',
        'If it is not the best option, we will tell you clearly and propose alternatives.',
      ],
    },
    faqs: {
      title: 'Frequently asked questions',
      items: [
        { question: 'How do I know if this therapy is right for me?', answer: 'After the assessment, we will clearly tell you if it is suitable in your case and which alternatives make sense for your symptoms and goals.' },
        { question: 'What symptoms can it help improve?', answer: 'In selected cases, it can relieve symptoms such as hot flashes, sweating, sleep disturbances or changes in general well-being. We discuss specifics with you during the consultation.' },
        { question: 'What does bioidentical exactly mean?', answer: 'It refers to hormones with a structure equivalent to those the body produces. What matters is that the indication, route and follow-up are defined in a medical and personalized manner.' },
        { question: 'What route of administration is appropriate?', answer: 'There is no single valid option for everyone. It depends on medical history, symptoms and medical criteria, and is decided during the assessment.' },
        { question: 'When are changes usually noticeable?', answer: 'It depends on the symptom and the individual. During the consultation, we provide realistic expectations and how we will monitor progress.' },
        { question: 'Does it have risks or contraindications?', answer: 'Like any medical treatment, it can. That is why it is only indicated when it adds value and after reviewing medical history and safety conditions.' },
        { question: 'How long is the treatment maintained?', answer: 'It is reviewed periodically. Duration depends on goals, progress and tolerance, and is adjusted when necessary.' },
        { question: 'Can it be combined with other approaches from the unit?', answer: 'In some cases, yes. If it adds value, we include it in a coordinated plan with follow-up.' },
      ],
    },
  },

  // Treatment: Magnetotherapy
  treatmentMagnetotherapy: {
    title: 'Magnetotherapy',
    description: 'Individualized diagnosis and personalized treatment to relieve discomfort and improve your quality of life.',
    hero: {
      eyebrow: 'Regenerative gynecology',
      title: 'Magnetotherapy',
      subtitle: 'Individualized diagnosis and personalized treatment to relieve discomfort and improve your quality of life.',
    },
    whenToConsult: {
      title: 'When it can help you',
      items: [
        'Chronic musculoskeletal pain',
        'Lower back and pelvic discomfort',
        'Functional recovery after gynecological procedures or interventions, when appropriate',
        'Pelvic floor disorders as a complement to physiotherapy',
        'Mild inflammatory processes',
        'Support for recovery and functional well-being',
      ],
    },
    whatIs: {
      title: 'What it involves',
      content: 'Magnetotherapy is a non-invasive therapeutic technique that uses low-frequency pulsed electromagnetic fields to support natural biological processes related to recovery and tissue repair.\n\nAt Instituto Dr. Rafael Fraile Pérez-Cuadrado, we use it as added value within a comprehensive medical approach, always as complementary support and based on clinical assessment.',
    },
    process: {
      title: 'What you can expect from the process',
      steps: [
        { number: '1', title: 'Assessment and listening', description: 'We understand your situation, medical history and goals.' },
        { number: '2', title: 'Clear diagnosis', description: 'We explain what is happening and which options make sense in your case.' },
        { number: '3', title: 'Personalized plan', description: 'We define the next step and support your progress.' },
      ],
    },
    safety: {
      title: 'Safety and care',
      items: [
        'Before starting treatment, we review medical history and possible contraindications.',
        'It is important to inform us of: pregnancy, pacemakers or other implantable electronic devices, active oncological pathology or acute infections.',
        'We explain what you can expect after each session, and if it is not the right approach, we guide you on alternatives.',
      ],
    },
    faqs: {
      title: 'Frequently asked questions',
      items: [
        { question: 'Does magnetotherapy replace a medical treatment?', answer: 'No. It is used as complementary therapy, integrated into a medical plan when it adds value.' },
        { question: 'Is it painful?', answer: 'It is a painless treatment and generally well tolerated.' },
        { question: 'How many sessions do I need?', answer: 'It depends on each case. After the assessment, we propose an indicative plan and adjust it according to progress.' },
        { question: 'When can I notice improvement?', answer: 'It is usually a progressive effect. During the consultation, we provide realistic expectations based on your situation.' },
        { question: 'Can it be combined with pelvic floor physiotherapy?', answer: 'Yes, when indicated. In some cases, it can be a useful complement within the plan.' },
        { question: 'Does it have contraindications?', answer: 'Yes. That is why we review medical history and conditions before starting and decide safely.' },
        { question: 'Does it require rest afterwards?', answer: 'Usually not. You can resume your normal activity unless your case requires a different indication.' },
        { question: 'Is it suitable postpartum?', answer: 'It can be considered depending on your situation and goals. We guide you after the assessment.' },
      ],
    },
  },

  // Team page
  team: {
    title: 'Team',
    description: 'A medical team that brings you clarity and peace of mind at every visit. Meet the professionals at Instituto Dr. Rafael Fraile Pérez-Cuadrado.',
    hero: {
      eyebrow: 'Our team',
      title: 'A medical team that brings you clarity and peace of mind',
      subtitle: 'At Instituto Dr. Rafael Fraile Pérez-Cuadrado you are cared for by a team with a very specific way of working: listening, assessing with rigor, explaining clearly and supporting you throughout the process with a personalized plan.',
      imageAlt: 'Medical team of Instituto Dr. Rafael Fraile Pérez-Cuadrado',
    },
    director: {
      eyebrow: 'Medical leadership',
      name: 'Dr. Rafael Fraile Pérez-Cuadrado',
      role: 'Gynecologist and obstetrician · Medical Director',
      imageAlt: 'Dr. Rafael Fraile Pérez-Cuadrado, Medical Director',
      bio: 'Dr. Fraile leads the Institute with a focus on what patients value most: clinical judgment, well-explained decisions and follow-up. His experience and training translate into greater confidence in diagnosis, clearer decision-making and a plan tailored to your case and life stage.',
      highlights: [
        '<strong>Over 25 years of clinical practice</strong>, with a solid foundation as a Doctor in Medicine and Surgery (Cum Laude) and specialist trained via the MIR pathway.',
        '<strong>Rigorous pregnancy follow-up:</strong> FMF accreditation (2006–present) for first-trimester prenatal screening, reinforced by training in obstetric and gynecological ultrasound (SESEGO).',
        '<strong>Advanced intimate health with a medical approach:</strong> specific training in regenerative and functional gynecology and laser (SEGO Phase I and II), to choose current options when they are truly indicated.',
        '<strong>A holistic view and clinical prudence:</strong> advanced training in areas that help assess with broader perspective and safety, such as breast pathology/senology and gynecologic oncology.',
        '<strong>Professional recognition:</strong> throughout his career, Dr. Rafael Fraile has received awards for his dedication and contribution to women\'s health, including the <strong>Gold Medal of the Catholic Monarchs for professional career</strong>, the <strong>Gold Medal of the Ilustre Academia de Ciencias de la Salud Ramón y Cajal for humanitarian career</strong> and the <strong>Alfil Honorific Award (2019)</strong>. He has also been internationally recognized by professional associations in the obstetric-gynecological field.',
      ],
      cta: 'Book your appointment',
    },
    clinicalTeam: {
      eyebrow: 'Clinical team',
      title: 'Doctors who carry the same standard',
      members: [
        {
          slug: 'natalia-golubtsova',
          name: 'Dr. Natalia Golubtsova',
          role: 'Obstetrician-gynecologist',
          imageAlt: 'Dr. Natalia Golubtsova',
          bio: 'Dr. Natalia brings a profile that combines a hormonal perspective, ultrasound-based diagnostic support and specific training in functional and regenerative gynecology. Her experience in hospital settings and private practice translates into safe, methodical and warm care.',
          highlights: [
            '<strong>Understanding the hormonal component:</strong> training in gynecological endocrinology, useful when symptoms call for a more functional view (cycle, menopause, general wellbeing).',
            '<strong>Diagnostic clarity:</strong> specialty in ultrasound diagnosis, for more precise assessment and calmer decision-making.',
            '<strong>Advanced intimate health:</strong> training in aesthetic, functional and regenerative gynecology, integrated within a medical and personalized approach.',
            '<strong>Prevention and cervical pathology:</strong> training in colposcopy and cervical pathology, for more complete follow-up when needed.',
            '<strong>Languages:</strong> Spanish · Russian · English.',
          ],
        },
        {
          slug: 'lucia-mascia',
          name: 'Dr. Lucía Mascia',
          role: 'Gynecologist-obstetrician',
          imageAlt: 'Dr. Lucía Mascia',
          bio: 'Dr. Lucía stands out for her blend of clinical experience, warm bedside manner and care focused on supporting you step by step in both gynecology and obstetrics.',
          highlights: [
            '<strong>Solid clinical experience:</strong> over 13 years of professional practice, translating into confidence and the ability to resolve issues in the consulting room.',
            '<strong>Comprehensive follow-up:</strong> gynecological and obstetric care supported by gynecological and obstetric ultrasound.',
            '<strong>Wellbeing and sexual health:</strong> specific training in sexual health, addressing symptoms with naturalness, rigor and a practical approach.',
            '<strong>Languages:</strong> Spanish · English · Italian.',
          ],
        },
      ],
      cta: 'Book your appointment',
    },
    process: {
      eyebrow: 'How we work',
      title: 'Clarity from the very first visit',
      note: 'Treatment decisions are made following a medical assessment.',
      steps: [
        { number: '1', title: 'Assessment and listening', description: 'We take the time to understand your situation, history and goals.' },
        { number: '2', title: 'Clear diagnosis', description: 'We explain what is happening and which options make sense for your case.' },
        { number: '3', title: 'Plan and follow-up', description: 'We define the next step and support you through your progress.' },
      ],
    },
    faqs: {
      eyebrow: 'Frequently asked questions',
      title: 'We answer your questions',
      items: [
        {
          question: 'How is the doctor who will see me assigned?',
          answer: 'Based on your reason for consultation and our schedule, we assign the most suitable doctor. The team works with the same standard and clinical coordination, and if your case calls for it, it is reviewed directly with Dr. Fraile.',
        },
        {
          question: 'What sets the Institute\'s team apart from other clinics?',
          answer: 'The combination of medical leadership, experience and consistency: a coordinated team that prioritizes clinical judgment and clarity, with a comprehensive approach to support you at every stage without compromising on rigor.',
        },
        {
          question: 'Can I request a second opinion?',
          answer: 'Yes. We review your case and clearly explain options and next steps.',
        },
        {
          question: 'Do you offer care in other languages?',
          answer: 'Yes. In addition to Spanish, the team can attend in English, Italian and Russian depending on availability.',
        },
        {
          question: 'How is the appointment managed?',
          answer: 'You can write to us via the form or WhatsApp and we will call you to schedule a day and time.',
        },
      ],
    },
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
    benefits: 'Benefits',
    moreInfo: 'More information',
    seeMore: 'See more',
    imagePlaceholder: '[Image: {name}]',
    imageProcedureLabel: 'procedure',
    whatsappAriaLabel: 'Contact via WhatsApp',
  },

  // 404 Not Found page
  notFound: {
    title: 'Page not found',
    description: 'The page you are looking for does not exist or has been moved.',
    heading: 'This page does not exist',
    message: 'The link may be broken or the page may have moved. Go back to the homepage or contact us if you need help.',
    cta: 'Back to home',
    ctaContact: 'Contact us',
  },
};
