import { FitnessClass, Trainer, MembershipPlan, Testimonial } from '../types';

export const TRAINERS: Trainer[] = [
  {
    id: 'marcus-stone',
    name: 'Marcus Stone',
    role: 'Head of Strength & Conditioning',
    certifications: ['CSCS (NSCA)', 'USA Weightlifting Level 2', 'EXOS Performance Specialist'],
    experienceYears: 12,
    specialties: ['Olympic Weightlifting', 'Barbell Periodization', 'Hypertrophy & Power'],
    bio: 'Former national weightlifting coach dedicated to biomechanically sound strength progression. Marcus builds resilient athletes through structured compound lifting and progressive overload.',
    quote: 'True strength is not accidental; it is engineered through disciplined mechanics and progressive effort.',
    accentColor: '#ea580c',
    initials: 'MS'
  },
  {
    id: 'elena-vance',
    name: 'Elena Vance',
    role: 'Director of Mobility & Restorative Movement',
    certifications: ['E-RYT 500', 'FRC (Functional Range Conditioning)', 'Kinetic Anatomist'],
    experienceYears: 9,
    specialties: ['Joint Longevity', 'Deep Vinyasa Flow', 'Myofascial Release', 'Athletic Recovery'],
    bio: 'Elena bridges the gap between high-output athletic exertion and restorative neuromuscular control. Her mobility frameworks keep members pain-free and performing at their peak.',
    quote: 'Mobility is your physical armor. Expand your usable ranges before adding heavy loads.',
    accentColor: '#0d9488',
    initials: 'EV'
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    role: 'Lead Combat & Conditioning Specialist',
    certifications: ['USA Boxing Coach Level 2', 'ACSM Exercise Physiologist', 'Precision Nutrition L1'],
    experienceYears: 8,
    specialties: ['High-Intensity Conditioning', 'Striking Mechanics', 'Rotational Power', 'Metabolic Testing'],
    bio: 'Decathlon competitor turned athletic performance trainer. David blends boxing ring footwork, explosive kettlebell complexes, and lactate-threshold conditioning.',
    quote: 'You do not rise to the occasion; you sink to the level of your baseline conditioning.',
    accentColor: '#2563eb',
    initials: 'DC'
  },
  {
    id: 'sofia-alvarez',
    name: 'Sofia Alvarez',
    role: 'Functional Hybrid & Core Architect',
    certifications: ['NASM-PES', 'CrossFit Level 2 Trainer', 'Functional Movement Screen (FMS)'],
    experienceYears: 7,
    specialties: ['HYROX Training', 'Speed & Agility', 'Kettlebell Flow', 'Post-Rehab Conditioning'],
    bio: 'Sofia designs dynamic high-energy sessions that challenge cardiovascular capacity and core stability while emphasizing flawless movement patterns and camaraderie.',
    quote: 'Consistency always defeats intensity. Show up, move with intention, and celebrate the small wins.',
    accentColor: '#d97706',
    initials: 'SA'
  }
];

export const CLASSES: FitnessClass[] = [
  // Monday
  {
    id: 'c-mon-1',
    name: 'Barbell Strength Protocol',
    category: 'strength',
    day: 'monday',
    time: '06:30 - 07:20',
    durationMinutes: 50,
    trainerId: 'marcus-stone',
    trainerName: 'Marcus Stone',
    trainerTitle: 'Head of Strength',
    intensityLevel: 5,
    capacity: 14,
    spotsLeft: 3,
    studioRoom: 'Main Strength Arena',
    description: 'Periodized barbell compound movements: deadlifts, back squats, and press variations paired with unilateral structural balance.',
    calorieBurnEstimate: '450 - 600 kcal'
  },
  {
    id: 'c-mon-2',
    name: 'Metabolic HIIT Ignition',
    category: 'hiit',
    day: 'monday',
    time: '08:00 - 08:45',
    durationMinutes: 45,
    trainerId: 'david-chen',
    trainerName: 'David Chen',
    trainerTitle: 'Conditioning Specialist',
    intensityLevel: 4,
    capacity: 18,
    spotsLeft: 5,
    studioRoom: 'High-Performance Turf',
    description: 'SkiErg sprints, assault bike intervals, and sandbag cleans designed for maximum lactate clearing and VO2 max development.',
    calorieBurnEstimate: '500 - 750 kcal'
  },
  {
    id: 'c-mon-3',
    name: 'Restorative Vinyasa & Fascial Release',
    category: 'mobility',
    day: 'monday',
    time: '18:00 - 18:55',
    durationMinutes: 55,
    trainerId: 'elena-vance',
    trainerName: 'Elena Vance',
    trainerTitle: 'Director of Mobility',
    intensityLevel: 2,
    capacity: 20,
    spotsLeft: 8,
    studioRoom: 'Zenith Studio',
    description: 'Long hold myofascial mobilization, thoracic opening, and parasympathetic breathwork designed to decompress from Monday stress.',
    calorieBurnEstimate: '200 - 300 kcal'
  },
  {
    id: 'c-mon-4',
    name: 'Combat Strike Conditioning',
    category: 'combat',
    day: 'monday',
    time: '19:15 - 20:05',
    durationMinutes: 50,
    trainerId: 'david-chen',
    trainerName: 'David Chen',
    trainerTitle: 'Combat Specialist',
    intensityLevel: 4,
    capacity: 16,
    spotsLeft: 2,
    studioRoom: 'Combat Zone',
    description: 'Heavy bag rounds, rotational medicine ball slams, evasive footwork drills, and core shielding combinations.',
    calorieBurnEstimate: '550 - 700 kcal'
  },

  // Tuesday
  {
    id: 'c-tue-1',
    name: 'Functional HYROX Circuit',
    category: 'conditioning',
    day: 'tuesday',
    time: '07:00 - 07:50',
    durationMinutes: 50,
    trainerId: 'sofia-alvarez',
    trainerName: 'Sofia Alvarez',
    trainerTitle: 'Functional Architect',
    intensityLevel: 4,
    capacity: 16,
    spotsLeft: 4,
    studioRoom: 'High-Performance Turf',
    description: 'Sled pushes, rowing ergs, burpee broad jumps, and farmers walks structured to simulate competitive functional fitness testing.',
    calorieBurnEstimate: '500 - 680 kcal'
  },
  {
    id: 'c-tue-2',
    name: 'Hypertrophy & Pull Mechanics',
    category: 'strength',
    day: 'tuesday',
    time: '12:15 - 13:00',
    durationMinutes: 45,
    trainerId: 'marcus-stone',
    trainerName: 'Marcus Stone',
    trainerTitle: 'Head of Strength',
    intensityLevel: 4,
    capacity: 12,
    spotsLeft: 1,
    studioRoom: 'Main Strength Arena',
    description: 'Upper back density, weighted pull-ups, posterior chain stability, and scapular health protocols.',
    calorieBurnEstimate: '400 - 550 kcal'
  },
  {
    id: 'c-tue-3',
    name: 'Hip & Spine Mobility Lab',
    category: 'mobility',
    day: 'tuesday',
    time: '17:30 - 18:20',
    durationMinutes: 50,
    trainerId: 'elena-vance',
    trainerName: 'Elena Vance',
    trainerTitle: 'Director of Mobility',
    intensityLevel: 2,
    capacity: 18,
    spotsLeft: 7,
    studioRoom: 'Zenith Studio',
    description: 'Targeted CARs (Controlled Articular Rotations) for tight hip capsules, SI joint alignment, and spinal extension.',
    calorieBurnEstimate: '180 - 260 kcal'
  },
  {
    id: 'c-tue-4',
    name: 'Tabata Burn & Core Matrix',
    category: 'hiit',
    day: 'tuesday',
    time: '18:45 - 19:30',
    durationMinutes: 45,
    trainerId: 'sofia-alvarez',
    trainerName: 'Sofia Alvarez',
    trainerTitle: 'Functional Architect',
    intensityLevel: 5,
    capacity: 20,
    spotsLeft: 6,
    studioRoom: 'High-Performance Turf',
    description: '20 seconds work, 10 seconds rest high-velocity bodyweight and kettlebell intervals with anti-rotational core finishers.',
    calorieBurnEstimate: '480 - 650 kcal'
  },

  // Wednesday
  {
    id: 'c-wed-1',
    name: 'Olympic Clean & Jerk Technique',
    category: 'strength',
    day: 'wednesday',
    time: '06:30 - 07:30',
    durationMinutes: 60,
    trainerId: 'marcus-stone',
    trainerName: 'Marcus Stone',
    trainerTitle: 'Head of Strength',
    intensityLevel: 4,
    capacity: 10,
    spotsLeft: 2,
    studioRoom: 'Main Strength Arena',
    description: 'Explosive triple extension, bar path precision, rack positioning, and split jerk footwork under expert supervision.',
    calorieBurnEstimate: '450 - 580 kcal'
  },
  {
    id: 'c-wed-2',
    name: 'Lactate Threshold Engine',
    category: 'conditioning',
    day: 'wednesday',
    time: '08:00 - 08:50',
    durationMinutes: 50,
    trainerId: 'david-chen',
    trainerName: 'David Chen',
    trainerTitle: 'Conditioning Specialist',
    intensityLevel: 5,
    capacity: 16,
    spotsLeft: 3,
    studioRoom: 'High-Performance Turf',
    description: 'Interval pacing protocols utilizing calibrated Concept2 Rowers and Echo Bikes with real-time watt pacing.',
    calorieBurnEstimate: '520 - 720 kcal'
  },
  {
    id: 'c-wed-3',
    name: 'Athletic Flow Yoga',
    category: 'mobility',
    day: 'wednesday',
    time: '18:15 - 19:10',
    durationMinutes: 55,
    trainerId: 'elena-vance',
    trainerName: 'Elena Vance',
    trainerTitle: 'Director of Mobility',
    intensityLevel: 3,
    capacity: 22,
    spotsLeft: 9,
    studioRoom: 'Zenith Studio',
    description: 'Dynamic power sequencing linking breath to posture, building balance and lengthening shortened muscle groups.',
    calorieBurnEstimate: '260 - 380 kcal'
  },

  // Thursday
  {
    id: 'c-thu-1',
    name: 'Lower Body Posterior Power',
    category: 'strength',
    day: 'thursday',
    time: '07:00 - 07:50',
    durationMinutes: 50,
    trainerId: 'marcus-stone',
    trainerName: 'Marcus Stone',
    trainerTitle: 'Head of Strength',
    intensityLevel: 5,
    capacity: 14,
    spotsLeft: 4,
    studioRoom: 'Main Strength Arena',
    description: 'Romanian deadlifts, Bulgarian split squats, glute-ham developers, and hamstring deceleration strength.',
    calorieBurnEstimate: '440 - 600 kcal'
  },
  {
    id: 'c-thu-2',
    name: 'Agility & Speed Ladders',
    category: 'conditioning',
    day: 'thursday',
    time: '12:15 - 13:00',
    durationMinutes: 45,
    trainerId: 'sofia-alvarez',
    trainerName: 'Sofia Alvarez',
    trainerTitle: 'Functional Architect',
    intensityLevel: 4,
    capacity: 16,
    spotsLeft: 5,
    studioRoom: 'High-Performance Turf',
    description: 'Multi-directional change-of-direction mechanics, deceleration braking, and reactive neural drills.',
    calorieBurnEstimate: '420 - 580 kcal'
  },
  {
    id: 'c-thu-3',
    name: 'Muay Thai Fundamentals',
    category: 'combat',
    day: 'thursday',
    time: '19:00 - 19:55',
    durationMinutes: 55,
    trainerId: 'david-chen',
    trainerName: 'David Chen',
    trainerTitle: 'Combat Specialist',
    intensityLevel: 4,
    capacity: 16,
    spotsLeft: 3,
    studioRoom: 'Combat Zone',
    description: 'Thai pad drills, clinch defense principles, roundhouse hip turnover, and core conditioning.',
    calorieBurnEstimate: '540 - 710 kcal'
  },

  // Friday
  {
    id: 'c-fri-1',
    name: 'Full-Body Kettlebell Flow',
    category: 'conditioning',
    day: 'friday',
    time: '07:00 - 07:50',
    durationMinutes: 50,
    trainerId: 'sofia-alvarez',
    trainerName: 'Sofia Alvarez',
    trainerTitle: 'Functional Architect',
    intensityLevel: 4,
    capacity: 16,
    spotsLeft: 6,
    studioRoom: 'High-Performance Turf',
    description: 'Continuous complex chain of snatches, clean-and-press, windmill rotations, and Turkish get-ups.',
    calorieBurnEstimate: '460 - 620 kcal'
  },
  {
    id: 'c-fri-2',
    name: 'Upper Body Armor Building',
    category: 'strength',
    day: 'friday',
    time: '12:15 - 13:00',
    durationMinutes: 45,
    trainerId: 'marcus-stone',
    trainerName: 'Marcus Stone',
    trainerTitle: 'Head of Strength',
    intensityLevel: 4,
    capacity: 14,
    spotsLeft: 2,
    studioRoom: 'Main Strength Arena',
    description: 'Incline bench presses, dips, landmine rotations, and rotator cuff integrity work.',
    calorieBurnEstimate: '380 - 520 kcal'
  },
  {
    id: 'c-fri-3',
    name: 'Friday Night Boxing Spar & Shred',
    category: 'combat',
    day: 'friday',
    time: '18:00 - 18:55',
    durationMinutes: 55,
    trainerId: 'david-chen',
    trainerName: 'David Chen',
    trainerTitle: 'Combat Specialist',
    intensityLevel: 5,
    capacity: 18,
    spotsLeft: 4,
    studioRoom: 'Combat Zone',
    description: 'High-tempo combinations, partner glove drills, burn-out burpee intervals, and mental grit building.',
    calorieBurnEstimate: '600 - 800 kcal'
  },

  // Saturday
  {
    id: 'c-sat-1',
    name: 'Weekend Warrior Team Challenge',
    category: 'hiit',
    day: 'saturday',
    time: '09:00 - 10:00',
    durationMinutes: 60,
    trainerId: 'sofia-alvarez',
    trainerName: 'Sofia Alvarez',
    trainerTitle: 'Functional Architect',
    intensityLevel: 5,
    capacity: 24,
    spotsLeft: 3,
    studioRoom: 'High-Performance Turf',
    description: 'Buddy workouts, tire flips, synchronised kettlebell swings, and endurance relays followed by community smoothies.',
    calorieBurnEstimate: '650 - 900 kcal'
  },
  {
    id: 'c-sat-2',
    name: 'Barbell Snatch & Squat Clinic',
    category: 'strength',
    day: 'saturday',
    time: '10:30 - 11:30',
    durationMinutes: 60,
    trainerId: 'marcus-stone',
    trainerName: 'Marcus Stone',
    trainerTitle: 'Head of Strength',
    intensityLevel: 4,
    capacity: 12,
    spotsLeft: 1,
    studioRoom: 'Main Strength Arena',
    description: 'Deep-dive coaching clinic focusing on video analysis, bar acceleration, and overhead stability.',
    calorieBurnEstimate: '420 - 560 kcal'
  },
  {
    id: 'c-sat-3',
    name: 'Breathwork & Contrast Hydrotherapy',
    category: 'mobility',
    day: 'saturday',
    time: '12:00 - 13:00',
    durationMinutes: 60,
    trainerId: 'elena-vance',
    trainerName: 'Elena Vance',
    trainerTitle: 'Director of Mobility',
    intensityLevel: 1,
    capacity: 14,
    spotsLeft: 2,
    studioRoom: 'Recovery Lounge & Plunge',
    description: 'Guided Wim Hof style pranayama breathing followed by 3 contrast rounds of infrared sauna (85°C) and cold plunge (4°C).',
    calorieBurnEstimate: '150 - 220 kcal'
  },

  // Sunday
  {
    id: 'c-sun-1',
    name: 'Active Longevity & Joint Health',
    category: 'mobility',
    day: 'sunday',
    time: '10:00 - 10:55',
    durationMinutes: 55,
    trainerId: 'elena-vance',
    trainerName: 'Elena Vance',
    trainerTitle: 'Director of Mobility',
    intensityLevel: 2,
    capacity: 20,
    spotsLeft: 8,
    studioRoom: 'Zenith Studio',
    description: 'Restorative sequence addressing ankle dorsiflexion, hip internal rotation, and postural spine decompression.',
    calorieBurnEstimate: '180 - 250 kcal'
  },
  {
    id: 'c-sun-2',
    name: 'Sunday Hybrid Engine Builder',
    category: 'conditioning',
    day: 'sunday',
    time: '11:15 - 12:15',
    durationMinutes: 60,
    trainerId: 'david-chen',
    trainerName: 'David Chen',
    trainerTitle: 'Conditioning Specialist',
    intensityLevel: 4,
    capacity: 18,
    spotsLeft: 5,
    studioRoom: 'High-Performance Turf',
    description: 'Zone 2 steady-state mixed modal endurance training to expand aerobic capacity and recovery efficiency.',
    calorieBurnEstimate: '500 - 680 kcal'
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'essential',
    name: 'Essential Pass',
    tagline: 'Ideal for independent lifters seeking world-class gym facilities.',
    monthlyPrice: 69,
    annualMonthlyPrice: 55,
    accessHours: 'Standard Hours (06:00 - 22:00)',
    features: [
      'Full access to Strength Arena & Cardio Turf',
      'Eleiko certified barbells & competition platforms',
      'Lockers, showers & sauna included',
      'Free KINETIX companion training app',
      '1 complimentary InBody 770 body composition scan'
    ]
  },
  {
    id: 'all-access',
    name: 'Athletic All-Access',
    tagline: 'Our signature tier: unlimited group classes, 24/7 club keycard, and recovery lounge.',
    monthlyPrice: 119,
    annualMonthlyPrice: 95,
    popular: true,
    highlightBadge: 'Most Popular',
    accessHours: '24/7 Unlimited Access',
    features: [
      '24/7 RFID keycard club access, 365 days a year',
      'Unlimited group fitness classes (HIIT, Strength, Yoga, Combat)',
      'Contrast therapy recovery lounge (Cold plunge & infrared sauna)',
      'Monthly InBody 770 biometric check-in',
      '2 guest day passes every month for friends',
      '15% discount on personal training packages'
    ]
  },
  {
    id: 'elite-vip',
    name: 'Performance Elite',
    tagline: 'The ultimate bespoke athletic experience with dedicated personal coaching.',
    monthlyPrice: 199,
    annualMonthlyPrice: 165,
    accessHours: '24/7 VIP Access',
    features: [
      'Everything in Athletic All-Access tier',
      '2 monthly 1-on-1 personal training sessions with a Master Coach',
      'Quarterly VO2 max & lactate threshold assessment',
      'Personalized nutrition & macronutrient periodization',
      'Dedicated executive locker & laundry service',
      'Priority class reservation window (7 days in advance)'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dr. Lucas Weber',
    role: 'Orthopedic Surgeon & Marathoner',
    membershipPlan: 'Athletic All-Access',
    duration: 'Member for 14 months',
    result: '-18 min off marathon PB & zero injury recurrence',
    rating: 5,
    content: 'As a surgeon, posture and spinal health are non-negotiable. Elena Vance’s mobility lab combined with the 4°C cold plunge tubs completely rebuilt my post-run recovery. I broke my marathon PR in Berlin without a single tendon flare-up.',
    avatarInitials: 'LW',
    avatarBg: '#ea580c'
  },
  {
    id: 't-2',
    name: 'Sarah Lindemann',
    role: 'Product Director & HYROX Athlete',
    membershipPlan: 'Performance Elite',
    duration: 'Member for 9 months',
    result: '+45kg on Barbell Deadlift & qualified for HYROX Pro',
    rating: 5,
    content: 'KINETIX is the antithesis of sterile commercial gym chains. The coaches actually coach: Marcus corrected my hip hinge within five minutes of my assessment. The community energy during Saturday morning team sessions is unmatched.',
    avatarInitials: 'SL',
    avatarBg: '#0d9488'
  },
  {
    id: 't-3',
    name: 'Maximilian Krause',
    role: 'Tech Founder & Former Rower',
    membershipPlan: 'Athletic All-Access',
    duration: 'Member for 2 years',
    result: 'Rebuilt functional aerobic base while maintaining 10% body fat',
    rating: 5,
    content: 'The 24/7 keyless access fits my erratic schedule, but what keeps me coming back is the equipment standard. Calibrated competition plates, rogue rigs, clean air filtration, and zero wait times for squat racks.',
    avatarInitials: 'MK',
    avatarBg: '#2563eb'
  }
];

export const CLUB_METRICS = [
  { value: '1,450+', label: 'Active Club Members', note: 'capped to ensure zero overcrowding' },
  { value: '54', label: 'Weekly Expert Classes', note: 'coached by certified specialists' },
  { value: '15', label: 'Master Coaches', note: 'minimum 6 years athletic experience' },
  { value: '98.8%', label: 'Member Retention Rate', note: 'verified through 24-month attendance' }
];

export const VALUE_PROPOSITIONS = [
  {
    id: 'prop-strength',
    title: 'Competition-Grade Strength Arena',
    description: 'Eight dedicated Eleiko Olympic platforms, custom Sorinex power cages, calibrated steel plates, and dumbells up to 60kg. Zero queues, pristine knurling.',
    badge: 'Hardware Precision',
    icon: 'bi-gem',
    stats: '8 Olympic Rigs · 60kg DBs'
  },
  {
    id: 'prop-recovery',
    title: 'Contrast Hydrotherapy Sanctuary',
    description: 'Accelerate systemic recovery in our twin 4°C commercial cold plunge tubs and 85°C Nordic cedar infrared saunas. Backed by sport science protocols.',
    badge: 'Neuromuscular Recovery',
    icon: 'bi-droplet-half',
    stats: '4°C Plunge · 85°C Sauna'
  },
  {
    id: 'prop-classes',
    title: 'Science-Grounded Class Formats',
    description: 'Capped at 16 athletes per session. Receive personalized biomechanical cueing rather than anonymous group exercise. Heart-rate zone tracking available.',
    badge: 'Small-Group Coached',
    icon: 'bi-activity',
    stats: 'Max 16 Athletes / Class'
  },
  {
    id: 'prop-biometrics',
    title: 'Clinical Biometric Diagnostics',
    description: 'InBody 770 multi-frequency impedance analysis, skeletal muscle mass mapping, and VO2 threshold benchmarking to objectively track adaptation.',
    badge: 'Data-Driven Coaching',
    icon: 'bi-graph-up-arrow',
    stats: 'InBody 770 Scans'
  },
  {
    id: 'prop-access',
    title: '24/7 Seamless Keyless Access',
    description: 'Encrypted mobile RFID access lets you train whenever inspiration strikes. High-security biometric lockers, Dyson grooming suites, and cold brew on tap.',
    badge: 'Member Convenience',
    icon: 'bi-shield-check',
    stats: '365 Days / 24 Hours'
  },
  {
    id: 'prop-community',
    title: 'Purpose-Driven Athletic Community',
    description: 'Train alongside founders, athletes, doctors, and fitness enthusiasts. Monthly intra-club lifting meets, mobility seminars, and outdoor trail runs.',
    badge: 'Atmosphere & Culture',
    icon: 'bi-people',
    stats: 'Monthly Club Events'
  }
];

export const FAQS = [
  {
    q: 'Can I try KINETIX before committing to a membership?',
    a: 'Absolutely. We offer a complimentary 1-Day All-Access Guest Pass for prospective members. You can test out the strength arena, drop into any scheduled class, and experience our cold plunge and sauna facilities.'
  },
  {
    q: 'Are classes suitable for beginners as well as experienced lifters?',
    a: 'Yes. Every session is led by a master trainer who prescribes regressions and progressions based on your individual movement screen. Class capacities are capped at 16 athletes to guarantee hands-on attention.'
  },
  {
    q: 'What is your cancellation or pause policy?',
    a: 'We believe in flexibility: monthly memberships can be paused or cancelled with 14 days written notice prior to the next billing cycle. Annual memberships include up to 60 days of complimentary travel freeze.'
  },
  {
    q: 'How does the 24/7 club access work?',
    a: 'All-Access and Elite members receive an encrypted mobile pass via Apple Wallet / Google Wallet as well as a physical RFID keycard for unassisted entry during non-staffed hours. Our facility is monitored with 24/7 security.'
  }
];
