import { SiKotlin, SiFirebase, SiFastlane, SiGmail } from 'react-icons/si';
import { FaReact, FaJs, FaGitAlt, FaAndroid, FaJava, FaLinkedin, FaStackOverflow, FaMedium, FaGithub, FaLaravel,FaPhp } from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { FiMail } from "react-icons/fi";

const menuLinks = [
    {name: "Home", route: "/"},
    { name: "About Me", route: "/about" },
    // { name: "Experience", route: "/experience" },
    // { name: "Projects", route: "/projects" },
    { name: 'Github', route: '/github' },
    // { name: 'Articles', route: '/article' },
    // { name: "Contact", route: "/contact" },
]

const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Hendra Afrizal M.K.. All Rights Reserved.`,
    author: {
        name: "Hendra Afrizal M.K.",
        accounts: [
            {
                url: "https://github.com/hendra-86",
                icon: <FaGithub />,
                name: "Github",
                type: "gray"
            },
            {
                url: "https://www.linkedin.com/in/hendra-afrizal-muhamad-khoharudin-552023241/",
                icon: <FaLinkedin />,
                name: "Linkedin",
                type: "linkedin"
            },
            // {
            //     url: "https://stackoverflow.com/users/12261890/teo",
            //     icon: <FaStackOverflow />,
            //     name: "StackOverflow",
            //     type: "orange"
            // },
            // {
            //     url: "https://skynight1996.medium.com/",
            //     icon: <FaMedium />,
            //     name: "Medium",
            //     type: "gray"
            // },
            {
                url: "mailto:hendra.amk12@gmail.com",
                icon: <SiGmail />,
                name: "Gmail",
                type: "red"
            }
        ]
    }
}

const resume = {
    url: "https://drive.google.com/file/d/1KKVBejHxAr2PKhSCFufgnvdQTMUWt-u7/view?usp=sharing",
    icon: <CgAlbum />,
    name: "Resume"
}

const techStacks = [
    {
        name: "Laravel",
        icon: <FaLaravel fontSize="20px" />,
        url: "https://reactnative.dev/",
    },
    {
        name: "Next.JS",
        icon: <FaReact fontSize="20px" />,
        url: "https://kotlinlang.org/",
    },
    {
        name: "PHP",
        icon: <FaPhp fontSize="20px" />,
        url: "https://www.java.com/en/",
    },
    {
        name: "Javascript",
        icon: <FaJs fontSize="20px" />,
        url: "https://www.javascript.com/",
    },
    // {
    //     name: "Firebase",
    //     icon: <SiFirebase fontSize="20px" />,
    //     url: "https://firebase.google.com/",
    // },
    {
        name: "Git",
        icon: <FaGitAlt fontSize="20px" />,
        url: "https://www.git.com/",
    },
    // {
    //     name: "CI/CD - Fastlane",
    //     icon: <SiFastlane fontSize="20px" />,
    //     url: "https://fastlane.tools/",
    // },
    // {
    //     name: "Android",
    //     icon: <FaAndroid fontSize="20px" />,
    //     url: "https://www.android.com/",
    // }
]

const companies = [
    {
        title: "Sagara Tecnology",
        alt: "qumon image",
        url: 'https://www.qumonintelligence.com/',
        role: "Frontend Developer Intern",
        skills: ["Javascript", "Chakra-UI", "Framer Motion", "Ether.js", "Next.js"],
        period: "Aug 2022 - Nov 2022",
        logo: '/sagara.jpeg'
    },
    {
        title: "Institut Teknologi PLN",
        alt: "timetec image",
        url: "https://www.timeteccloud.com/",
        role: "Computer Lab Assistant",
        skills: ["Java", "Python", "Ms. Office", "Design", "PHP","Javascript","HTML","CSS", "SPSS"],
        period: "Sep 2020 - Jan 2023",
        logo: '/itpln.jpg'
    }
]

const educations = [
    {
        title: "Institut Teknologi PLN",
        alt: "utm image",
        url: 'https://www.itpln.ac.id/',
        role: "Bachelor's Degree in Computer Science (Informatics Engineering)",
        skills: ["CGPA - 3.79", "Microsoft Office Specialist", "Microsoft Azure AI Fundamentals"],
        period: "Sept 2019 - Aug 2023",
        logo: '/itpln.jpg'
    },
    // {
    //     title: "SMK Mentakab",
    //     alt: "smk image",
    //     url: 'https://www.facebook.com/pages/category/College---university/Sekolah-Menengah-Kebangsaan-Mentakab-224802077565350/',
    //     role: "STPM - Science Stream (Physics)",
    //     skills: ["CGPA - 3.33", "Math T", "Physics", "Chemistry"],
    //     period: "Jan 2015 - Jun 2016",
    //     logo: '/smk.png'
    // },
]

const liveProjects = [
    {
        name: 'SpeedGear',
        imageUrl: '/logo.png',
        alt: 'SpeedGear',
        summary: 'Penjualan Aset NFT',
        playstore: 'https://play.google.com/store/apps/details?id=io.chativo.chat',
        appstore: 'https://apps.apple.com/us/app/chativo/id1545295884',
        link:'https://speedgear.io/'
    },
    {
        name: 'StoQu',
        imageUrl: '/stoqu.png',
        alt: 'StoQu',
        summary: 'Web Forecasting Stock',
        playstore: 'https://play.google.com/store/apps/details?id=io.chativo.visitor',
        appstore: 'https://apps.apple.com/us/app/chativov/id1595519177',
        link:'https://stoqu.hendraamk.my.id/'
    },
    {
        name: 'Kalkulator Konversi',
        imageUrl: '/screen.png',
        alt: 'Kalkulatar Konversi',
        summary: 'Kalkulator Konversi',
        playstore: 'https://play.google.com/store/apps/details?id=io.chativo.visitor',
        appstore: 'https://apps.apple.com/us/app/chativov/id1595519177',
        link:'https://kalkulatorbiner.hendraamk.my.id/'
    }
]



export { menuLinks, techStacks, siteConfig, resume, companies, educations, liveProjects }