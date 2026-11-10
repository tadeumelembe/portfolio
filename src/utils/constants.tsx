export const SITE_URL = 'https://tadeu.netlify.app'

export type Project = {
    name: string
    // Optional: cards without an image get a simple typographic cover.
    image?: string
    imageAlt?: string
    platform: string
    // TODO(content): one-sentence summary of what the product is / who it is for.
    // Left empty where we don't have it yet — the card simply hides the line.
    summary?: string
    highlights: string[]
    tools: string[]
    link: string
    linkLabel: string
    secondaryLink?: { href: string; label: string }
}

export const userData = {
    first_name: 'Tadeu',
    last_name: 'Melembe',
    role: 'Software Engineer',
    focus: 'React Native & full-stack',
    headline: 'I build mobile and web solutions that solve real-life problems.',
    small_bio: "I'm a Software Engineer focused on building mobile and web solutions that solve real life problems.",
    bio: `Sometimes I feel like a "superhero", and my skills are my "superpower". I can use them to create solutions that impact society and change people's lives, making them better and easier.`,

    // TODO(content): availability line for the hero, e.g. "Open to freelance projects and full-time roles".
    // Hidden while empty.
    availability: '',

    // Career start year used for "N years of experience".
    // TODO(content): About text says you started in 2020, but this has always counted from 2021 — confirm.
    career_start_year: 2021,

    email: 'tadeumelembe@gmail.com',
    phone: '+258 820 896 638',
    // TODO(content): Calendly / Cal.com link. The "Book a call" button is hidden while empty.
    booking_url: '',
    github: 'https://github.com/tadeumelembe',
    linkedin: 'https://www.linkedin.com/in/tadeumelembe',

    experience: [
        {
            company: 'Freelance',
            position: 'Software Developer',
            start_date: '2022',
            end_date: 'Present',
            description: 'Working closely with clients to understand their requirements and translate them into well-designed, functional mobile and web applications.',
        },
        {
            company: 'Viva Pro Human',
            position: 'React Native Developer',
            start_date: 'Aug 2023',
            end_date: 'Present',
            description: 'Develop new features and fix bugs, ensuring a smooth user experience and optimal performance.',
        },
        {
            company: 'Gurgel Tech',
            position: 'React Native Developer',
            start_date: 'Jan 2023',
            end_date: 'May 2023',
            description: 'Resolved bugs and issues in a React Native mobile application, ensuring a smooth user experience and optimal performance. Undertook backend (Node.js) development to support the app operations.',
        },
        {
            company: 'Paytech, SA',
            position: 'Full-Stack Web Developer',
            start_date: 'May 2020',
            end_date: 'Aug 2021',
            description: 'Developed a user-friendly and feature-rich Sport Member mobile app using React Native, and created an API for seamless app-server communication using PHP & Doctrine.',
        },
    ],

    // Newest first.
    projects: [
        {
            name: 'Go Girls MOVE',
            image: '/work/go-girls.jpg',
            imageAlt: 'Go Girls MOVE app screens: welcome, home with daily distance, Circle the world progress and logging a walk',
            platform: 'iOS app',
            summary: 'Fitness-tracking app for Go Girls MOVE, a global movement challenge raising funds for the Go Girls Foundation, which supports women at risk.',
            // Features as listed on the App Store.
            // TODO(content): confirm these are what you built, and add anything else you did (backend, web, etc.).
            highlights: [
                'Personal distance goals with progress tracking',
                'Join a team, workplace or store with a six-digit code',
                'Team leaderboard throughout the month',
                'Shareable challenge pages',
                'In-app donations to the Go Girls Foundation',
            ],
            // TODO(content): tech stack used.
            tools: [],
            link: 'https://apps.apple.com/us/app/go-girls/id6810083153',
            linkLabel: 'View on the App Store',
            secondaryLink: { href: 'https://www.gogirlsmove.org.au/', label: 'gogirlsmove.org.au' },
        },
        {
            name: 'StartBrusa',
            image: '/work/startbrusa.png',
            imageAlt: 'StartBrusa promotional banner showing three screens of the mobile app',
            platform: 'iOS & Android app',
            highlights: [
                'Built with React Native, Expo and Supabase',
                'Subscription-based content with in-app purchases (RevenueCat)',
                'Stripe integration',
                'Google Auth and Apple Sign-In',
                'Location-based features',
            ],
            tools: ['React Native', 'TypeScript', 'Expo', 'Supabase', 'RevenueCat', 'Stripe'],
            link: 'https://apps.apple.com/us/app/startbrusa/id6754345738?l=pt-BR',
            linkLabel: 'View on the App Store',
        },
        {
            name: 'Haras Pro',
            image: '/work/haras-pro.png',
            imageAlt: 'Haras Peregrina app screens: home, onboarding and profile',
            platform: 'iOS & Android app',
            highlights: [
                'Pixel-perfect UI built from Figma prototypes',
                'CI/CD pipelines with Azure',
            ],
            tools: ['React Native', 'TypeScript', 'Expo', 'Figma', 'Azure'],
            link: 'https://play.google.com/store/apps/details?id=com.haraspro.mvperegrina&hl=pt',
            linkLabel: 'View on Google Play',
        },
        {
            name: 'Help Car',
            image: '/work/helpcar.jpg',
            imageAlt: 'Help Car promotional banner with the app map screen and a tow truck',
            platform: 'iOS & Android app',
            highlights: [
                'Pixel-perfect UI built from Figma prototypes',
                'Worked on both the app and its backend (Node.js, Express, MongoDB)',
                'Stripe payments and Stripe split payments',
                'Google Maps and location-based features',
                'Google Auth and Apple Sign-In',
            ],
            tools: ['React Native', 'TypeScript', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
            link: 'https://www.helpcar.me/',
            linkLabel: 'Visit helpcar.me',
        },
    ] as Project[],

    skills: ['JavaScript', 'TypeScript', 'React Native', 'React', 'Node.js', 'PHP / Laravel'],
}

export const fullName = `${userData.first_name} ${userData.last_name}`
export const yearsOfExperience = new Date().getFullYear() - userData.career_start_year
export const mailto = `mailto:${userData.email}?subject=${encodeURIComponent('Hello Tadeu — project / role enquiry')}`
