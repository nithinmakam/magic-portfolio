import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Nithin',
    lastName:  'Makam',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Developer',
    avatar:    '/images/avatar.jpeg',
    location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Telugu']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about development, technology, and share thoughts on the latest technologies.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/nithinmakam',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/nithinmakam/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:nithinmakam2409@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Developer</>,
    subline: <>I'm Nithin, a software engineer at <InlineCode>Cognizant</InlineCode>, where I develop<br/> user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from INDIA/Hyderabad`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I am a software developer with 5.5 years of experience specializing in backend and full-stack development. Proficient in Java, Spring Boot, and microservices architecture, with a strong track record of delivering scalable solutions and leading key projects.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Cognizant',
                timeframe: "Aug,2022 - Present",
                role: "Software Developer",
                achievements: [
                    <>Developing and implementing requirements for Distribute application, ensuring timely and efficient delivery.</>,
                    <>Quickly grasped the Packager application and delivered critical features within tight deadlines, taking full ownership of the application alongside a colleague.</>,
                    <>Upgraded all our project java services from Java 11 to 17 and Springboot 2.1 to 2.5.14</>,
                    <>Best Performer Award in 2023.</>,
                    <>Received volunteering award for teaching Computers to grade 8 students.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Achala IT Solutions',
                timeframe: 'Sep,2021 - Jul,2022',
                role: 'Software Developer',
                achievements: [
                    <>Developed and Completed Attendace application for EMRI client for various services</>,
                    <>Developed and Completed Onboarding application for EMRI client and linked with Attendace application</>
                ],
                images: [ ]
            },
            {
                company: 'Spoors Technology',
                timeframe: 'Jun,2019 - Aug,2021',
                role: 'Software Developer',
                achievements: [
                    <>Migrated client LNT codebase into a central application, enhancing performance and maintainability.</>,
                    <>Implemented new features and added new Bureau for Mahindra client loan applications.</>,
                    <>Contributed to a team that secured 2nd prize in a company-wide competition.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'IIIT Bangalore',
                description: <>PG Diploma in Software Development.</>,
            },
            {
                name: 'VNR VJIET',
                description: <>B.Tech in ECE.</>,
            },
            {
                name: 'Sri Chaitanya Jr College',
                description: <>Intermediate(M.P.C).</>,
            },
            {
                name: 'Triveni Talent School',
                description: <>SSC.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Programming Languages',
                description: <>Java, Python, SQL, jQuery.</>,
                images: []
            },
            {
                title: 'Databases',
                description: <>MySQL, PostgreSQL, MongoDB.</>,
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'Frameworks',
                description: <>Spring Boot, Spring MVC.</>,
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'Cloud',
                description: <>AWS, Azure, GCP.</>,
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'Tools/Technologies',
                description: <>Microservices, Git, Github, Gitlab.</>,
                // optional: leave the array empty if you don't want to display images
                images: []
            }
        ]
    },
    certification: {
        display: true, // set to false to hide this section
        title: 'Certifications',
        skills: [
            {
                title: 'AWS',
                description: <>AWS Cloud Practitioner.</>,
                images: []
            },
            {
                title: 'Azure',
                description: <>Azure Fundamentals(AZ-900), Azure Developer Associate(AZ-204).</>,
                // optional: leave the array empty if you don't want to display images
                images: []
            },
            {
                title: 'GCP',
                description: <>Google Cloud Digital Leader.</>,
                // optional: leave the array empty if you don't want to display images
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };