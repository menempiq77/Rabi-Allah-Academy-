import {
  BookOpen,
  Mic,
  Brain,
  GraduationCap,
  Heart,
} from 'lucide-react'

export const courses = [
  {
    slug: 'quran-recitation',
    title: 'Quran Recitation & Tajweed',
    price: 'From $20 / month',
    icon: Mic,
    image: '/images/course-recitation.jpg',
    summary:
      'Improve fluency, beauty, and correct pronunciation in recitation with guided correction and structured Tajweed.',
    features: [
      'Fluency & rhythm development',
      'Tajweed rules: Makharij, Sifaat & Madd',
      'Guided daily correction',
      'Practical recitation application',
    ],
    paid: true,
    description:
      'Quran Recitation & Tajweed combines the art of fluent, beautiful recitation with the science of correct pronunciation. Students develop rhythm and confidence while learning the rules of Makharij, Sifaat, and Madd through live practice and gentle correction.',
    whatYouWillLearn: [
      'Smooth and confident recitation of Quranic verses',
      'Makharij: correct pronunciation points for every Arabic letter',
      'Sifaat and Madd rules for accurate recitation',
      'Building a daily recitation and review habit',
    ],
    whoIsItFor: [
      'Students who can read Arabic and want to recite correctly and beautifully',
      'Those preparing for prayers, public recitation, or Ijazah',
      'Anyone seeking fluency and confidence in Quran recitation',
    ],
    format: 'Live one-to-one sessions with focused recitation, Tajweed theory, feedback, and revision.',
    ar: {
      title: 'تلاوة القرآن والتجويد',
      summary:
        'حسّن طلاقة تلاوتك وجمالها وصحة نطقك من خلال التصحيح الموجّه ودراسة أحكام التجويد بطريقة منظّمة.',
      features: [
        'تنمية الطلاقة والإيقاع',
        'أحكام التجويد: المخارج والصفات والمدود',
        'تصحيح يومي موجّه',
        'تطبيق عملي على التلاوة',
      ],
      description:
        'تجمع دورة تلاوة القرآن والتجويد بين فن التلاوة السلسة الجميلة وعلم النطق الصحيح. يطوّر الطلاب الإيقاع والثقة أثناء تعلّم أحكام المخارج والصفات والمدود من خلال التدريب المباشر والتصحيح الرفيق.',
      whatYouWillLearn: [
        'تلاوة سلسة وواثقة لآيات القرآن',
        'المخارج: مواضع النطق الصحيحة لكل حرف عربي',
        'أحكام الصفات والمدود للتلاوة الصحيحة',
        'بناء عادة يومية للتلاوة والمراجعة',
      ],
      whoIsItFor: [
        'الطلاب القادرون على قراءة العربية والراغبون في التلاوة الصحيحة الجميلة',
        'من يستعدون للصلاة أو التلاوة أمام الناس أو الإجازة',
        'كل من يطلب الطلاقة والثقة في تلاوة القرآن',
      ],
      format:
        'جلسات مباشرة فردية تركز على التلاوة وأحكام التجويد والتغذية الراجعة والمراجعة.',
    },
  },
  {
    slug: 'quran-memorization',
    title: 'Quran Memorization',
    price: 'From $20 / month',
    icon: Brain,
    image: '/images/course-memorization.jpg',
    summary:
      'Personalized hifz plans with revision cycles to maintain long-term retention.',
    features: [
      'Personalized memorization plan',
      'Daily revision cycles',
      'Tajweed correction',
      'Progress tracking',
    ],
    paid: true,
    description:
      'Quran Memorization provides personalized hifz plans designed around each student’s pace and goals. With regular revision cycles and Tajweed correction, students build strong memorization habits and long-term retention.',
    whatYouWillLearn: [
      'Effective memorization techniques for all ages',
      'Structured revision cycles to retain what you memorize',
      'Correct Tajweed while memorizing',
      'Goal setting and progress tracking',
    ],
    whoIsItFor: [
      'Students who want to start or continue hifz',
      'Children, youth, and adults with consistent schedules',
      'Anyone seeking a supportive teacher for memorization',
    ],
    format: 'One-to-one online sessions with daily targets, listening, and revision.',
    ar: {
      title: 'تحفيظ القرآن',
      summary: 'خطط حفظ مخصصة مع دورات مراجعة تساعد على تثبيت الحفظ على المدى الطويل.',
      features: ['خطة حفظ مخصصة', 'دورات مراجعة يومية', 'تصحيح التجويد', 'متابعة التقدم'],
      description:
        'يوفّر تحفيظ القرآن خطط حفظ مخصصة تُبنى وفق سرعة كل طالب وأهدافه. ومن خلال دورات المراجعة المنتظمة وتصحيح التجويد، يكتسب الطلاب عادات قوية في الحفظ وثباتًا طويل الأمد.',
      whatYouWillLearn: [
        'أساليب فعالة لحفظ القرآن لجميع الأعمار',
        'دورات مراجعة منظّمة لتثبيت المحفوظ',
        'تطبيق التجويد الصحيح أثناء الحفظ',
        'تحديد الأهداف ومتابعة التقدم',
      ],
      whoIsItFor: [
        'الطلاب الراغبون في بدء الحفظ أو مواصلته',
        'الأطفال والشباب والكبار ذوو الجداول المنتظمة',
        'كل من يبحث عن معلّم داعم في رحلة الحفظ',
      ],
      format: 'جلسات فردية عبر الإنترنت مع أهداف يومية وتسميع ومراجعة.',
    },
  },
  {
    slug: 'arabic-through-quran',
    title: 'Arabic through Qur’an',
    price: 'From $20 / month',
    icon: BookOpen,
    image: '/images/course-arabic.jpg',
    summary:
      'Learn Classical Arabic directly through the Book of Allah, connecting vocabulary and grammar to real Quranic verses.',
    features: [
      'Quranic vocabulary focus',
      'Grammar through verses',
      'Direct meaning connection',
      'Spiritual & academic growth',
    ],
    paid: true,
    description:
      'Arabic through the Quran offers a unique approach to mastering Classical Arabic by learning directly from the Book of Allah. Students study vocabulary, grammar, and sentence structure through Quranic verses, making every lesson spiritually meaningful.',
    whatYouWillLearn: [
      'High-frequency Quranic vocabulary',
      'Core grammar through real Quranic examples',
      'How to understand short Surahs independently',
      'The connection between Arabic structure and meaning',
    ],
    whoIsItFor: [
      'Students who want to understand the Quran in Arabic',
      'Those seeking a spiritually connected Arabic curriculum',
      'Learners with basic reading ability who want deeper comprehension',
    ],
    format: 'One-to-one online classes with verse analysis, grammar, and guided review.',
    ar: {
      title: 'العربية من خلال القرآن',
      summary:
        'تعلّم العربية الفصحى مباشرة من كتاب الله، واربط بين المفردات والقواعد والآيات القرآنية الحقيقية.',
      features: [
        'التركيز على المفردات القرآنية',
        'تعلّم القواعد من خلال الآيات',
        'الربط المباشر بين اللفظ والمعنى',
        'نمو روحي وأكاديمي',
      ],
      description:
        'تقدّم دورة العربية من خلال القرآن منهجًا مميزًا لإتقان العربية الفصحى بالتعلّم المباشر من كتاب الله. يدرس الطلاب المفردات والقواعد وبنية الجملة من خلال الآيات القرآنية، مما يجعل كل درس ذا معنى روحي.',
      whatYouWillLearn: [
        'المفردات القرآنية كثيرة التكرار',
        'أصول القواعد من خلال أمثلة قرآنية حقيقية',
        'كيفية فهم السور القصيرة باستقلالية',
        'الصلة بين بنية العربية والمعنى',
      ],
      whoIsItFor: [
        'الطلاب الراغبون في فهم القرآن باللغة العربية',
        'من يطلبون منهجًا عربيًا مرتبطًا بالجانب الروحي',
        'المتعلمون ذوو القدرة الأساسية على القراءة والراغبون في فهم أعمق',
      ],
      format: 'دروس فردية عبر الإنترنت مع تحليل الآيات والقواعد والمراجعة الموجّهة.',
    },
  },
  {
    slug: 'islamic-studies',
    title: 'Islamic Studies',
    price: 'From $20 / month',
    icon: GraduationCap,
    image: '/images/course-islamic-studies.jpg',
    summary:
      'A comprehensive study of Aqeedah, Fiqh, Seerah, Tafsir, and Hadith for all ages.',
    features: [
      'Aqeedah & Tawheed',
      'Fiqh of worship & daily life',
      'Seerah of the Prophet ﷺ',
      'Tafsir & authentic Hadith',
    ],
    paid: true,
    description:
      'Islamic Studies provides a well-rounded foundation in the essential sciences of Islam. Students study Aqeedah, Fiqh, Seerah, Tafsir, and Hadith in an age-appropriate and engaging way, building strong faith, character, and understanding.',
    whatYouWillLearn: [
      'Foundations of Islamic belief (Aqeedah) and Tawheed',
      'Practical fiqh of worship and daily life',
      'The life and example of Prophet Muhammad ﷺ',
      'Key Quranic explanations and authentic Hadith',
    ],
    whoIsItFor: [
      'Children, youth, and adults seeking structured Islamic knowledge',
      'Families who want a comprehensive Islamic curriculum',
      'Students preparing for Islamic school, community programs, or personal growth',
    ],
    format: 'Live online classes with discussions, reflection, quizzes, and age-tailored content.',
    ar: {
      title: 'الدراسات الإسلامية',
      summary: 'دراسة شاملة للعقيدة والفقه والسيرة والتفسير والحديث لجميع الأعمار.',
      features: [
        'العقيدة والتوحيد',
        'فقه العبادات والحياة اليومية',
        'سيرة النبي ﷺ',
        'التفسير والحديث الصحيح',
      ],
      description:
        'تقدّم الدراسات الإسلامية أساسًا متكاملًا في العلوم الإسلامية الضرورية. يدرس الطلاب العقيدة والفقه والسيرة والتفسير والحديث بطريقة مناسبة لأعمارهم ومشوقة، ويبنون إيمانًا وشخصية وفهمًا راسخًا.',
      whatYouWillLearn: [
        'أسس الاعتقاد الإسلامي والتوحيد',
        'الفقه العملي للعبادات والحياة اليومية',
        'حياة النبي محمد ﷺ وقدوته',
        'أهم التفسيرات القرآنية والأحاديث الصحيحة',
      ],
      whoIsItFor: [
        'الأطفال والشباب والكبار الراغبون في علم إسلامي منظّم',
        'العائلات التي تريد منهجًا إسلاميًا شاملًا',
        'الطلاب المستعدون للمدرسة الإسلامية أو برامج المجتمع أو النمو الشخصي',
      ],
      format: 'دروس مباشرة عبر الإنترنت مع نقاش وتأمل واختبارات ومحتوى مناسب للعمر.',
    },
  },
  {
    slug: 'islam-for-new-muslims',
    title: 'Islam for New Muslims',
    price: 'Free',
    icon: Heart,
    image: '/images/course-new-muslims.jpg',
    summary:
      'A welcoming introduction to the beliefs, practices, and ethos of Islam—designed for new Muslims and those considering reverting.',
    features: [
      'Basic beliefs & practices',
      'Step-by-step introduction',
      'Supportive environment',
      'Guidance through the journey',
    ],
    paid: false,
    description:
      'Islam for New Muslims is a free, supportive course designed for new Muslims and those considering reverting. It provides a clear introduction to the beliefs, practices, and community of Islam at a comfortable pace.',
    whatYouWillLearn: [
      'The core beliefs of Islam (Six Articles of Faith)',
      'The Five Pillars of Islam in practice',
      'Introduction to Quran and Hadith',
      'Daily worship, prayer, and purification',
    ],
    whoIsItFor: [
      'New Muslims and recent reverts',
      'Anyone sincerely exploring Islam',
      'Friends and family supporting someone new to Islam',
    ],
    format: 'Free supportive online sessions with time for questions and personal guidance.',
    ar: {
      title: 'الإسلام للمسلمين الجدد',
      summary:
        'مقدمة ترحيبية إلى عقائد الإسلام وممارساته وأخلاقه، مخصصة للمسلمين الجدد ولمن يفكرون بصدق في اعتناقه.',
      features: [
        'أساسيات العقيدة والعبادات',
        'مقدمة خطوة بخطوة',
        'بيئة داعمة',
        'إرشاد خلال الرحلة',
      ],
      description:
        'الإسلام للمسلمين الجدد دورة مجانية وداعمة صُممت للمسلمين الجدد ولمن يفكرون بصدق في اعتناق الإسلام. وتقدّم مقدمة واضحة إلى عقائد الإسلام وممارساته ومجتمعه بوتيرة مريحة.',
      whatYouWillLearn: [
        'أصول الإسلام، وهي أركان الإيمان الستة',
        'أركان الإسلام الخمسة وتطبيقها',
        'مقدمة إلى القرآن والحديث',
        'العبادات اليومية والصلاة والطهارة',
      ],
      whoIsItFor: [
        'المسلمون الجدد ومن اعتنقوا الإسلام حديثًا',
        'كل من يستكشف الإسلام بصدق',
        'الأصدقاء وأفراد الأسرة الذين يدعمون شخصًا جديدًا في الإسلام',
      ],
      format: 'جلسات مجانية داعمة عبر الإنترنت مع وقت للأسئلة والتوجيه الشخصي.',
    },
  },
]

export const pricingTiers = [
  {
    duration: '30 Minutes',
    description: 'Short lessons for younger students and steady weekly progress.',
    plans: [
      { classesPerWeek: 1, monthlyClasses: 4, priceUSD: 20, priceGBP: 16 },
      { classesPerWeek: 2, monthlyClasses: 8, priceUSD: 36, priceGBP: 27 },
      { classesPerWeek: 3, monthlyClasses: 12, priceUSD: 53, priceGBP: 40 },
      { classesPerWeek: 4, monthlyClasses: 16, priceUSD: 72, priceGBP: 53 },
      { classesPerWeek: 5, monthlyClasses: 20, priceUSD: 85, priceGBP: 65 },
    ],
  },
  {
    duration: '45 Minutes',
    description: 'A balanced session length with more time for guided practice and revision.',
    plans: [
      { classesPerWeek: 1, monthlyClasses: 4, priceUSD: 27, priceGBP: 20 },
      { classesPerWeek: 2, monthlyClasses: 8, priceUSD: 54, priceGBP: 40 },
      { classesPerWeek: 3, monthlyClasses: 12, priceUSD: 78, priceGBP: 60 },
      { classesPerWeek: 4, monthlyClasses: 16, priceUSD: 96, priceGBP: 72 },
      { classesPerWeek: 5, monthlyClasses: 20, priceUSD: 120, priceGBP: 89 },
    ],
  },
  {
    duration: '1 Hour',
    description: 'Extended classes for deeper focus, memorization, and advanced learning goals.',
    plans: [
      { classesPerWeek: 1, monthlyClasses: 4, priceUSD: 36, priceGBP: 27 },
      { classesPerWeek: 2, monthlyClasses: 8, priceUSD: 70, priceGBP: 53 },
      { classesPerWeek: 3, monthlyClasses: 12, priceUSD: 102, priceGBP: 71 },
      { classesPerWeek: 4, monthlyClasses: 16, priceUSD: 128, priceGBP: 95 },
      { classesPerWeek: 5, monthlyClasses: 20, priceUSD: 160, priceGBP: 119 },
    ],
  },
]
