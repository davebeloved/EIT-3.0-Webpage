import {
  FaShieldAlt,
  FaMobileAlt,
  FaCode,
  FaPython,
  FaBrain,
  FaChartBar,
  FaPencilRuler,
  FaPalette,
  FaHeadset,
} from "react-icons/fa";

export const navLinks = [
  {
    label: "Emblic Technologies",
    path: "https://emblictech.com/",
  },
  {
    label: "Training",
    path: "https://www.eit.emblictech.com/",
  },
];

export const EitFaqData = [
  {
    question: "Can I get a training extension?",
    answer:
      "No, the training ends concurrently for all participants. There will be no extensions or make-up sessions under the same package once the training concludes.",
  },
  {
    question:
      "Will there be payment refunds if I can’t attend or complete the training?",
    answer:
      "No, all payments are non-refundable. Once payment is made, it cannot be refunded or transferred to another person or future training session.",
  },
  {
    question: "Is the training online?",
    answer:
      "No, the training is NOT online. It is a fully physical training that will take place at: 181 Dr. Peter Odili Road, Port Harcourt, Rivers State, Nigeria.",
  },
  {
    question: "Will participants receive certificates after the training?",
    answer:
      "Yes, participants who complete the training successfully will receive a professional certificate of completion.",
  },
  {
    question: "Can I switch to another course after registration?",
    answer:
      "No, once you have registered and confirmed your payment, switching courses is not allowed. Exceptions will only be made if you upgrade your payment to cover the required course.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "No, payment must be made in full before the training begins to secure your slot. This is because the training fees are discounted.",
  },
  {
    question: "Who do I contact for more information?",
    answer:
      "You can reach us via: WhatsApp/Call: +234 (0) 813 718 9820, Email: eit@emblictech.com.",
  },
];

// faculties array
export const faculties = [
  {
    id: "beginner_class",
    title: "Beginners  Class",
    description:
      "Our beginners class is designed for newbies (starters) and those new to the tech field.  It's the perfect starting point for those looking to build a solid foundation before advancing to specialized tech disciplines. This faculty provides a strong base in computer science and IT fundamentals, covering essential topics like: ",
    details: [
      {
        title: "Foundation Class",
        topics: [
          "Introduction to Information Technology",
          "Introduction to Operating System",
          "Introduction to Information Security",
          "Networking Fundamentals",
          "CMD",
          "Linux",
        ],
      },
      {
        title: "Microsoft Office Suites/Packages",
        topics: [
          "Microsoft Word",
          "Microsoft Excel",
          "Microsoft PowerPoint",
          "Microsoft Access",
          "Microsoft Outlook",
        ],
      },
    ],
  },
  {
    id: "software_engineering",
    title: "Faculty of Software Engineering",
    description:
      "The Faculty of Software Engineering at Emblic Institute of Technology focuses on the art and science of software development. Our hands-on approach and industry-aligned curriculum ensure that graduates are ready to tackle real-world software challenges. Offering comprehensive courses in:",
    details: [
      {
        title: "Front-End Engineering",
        topics: [
          "Basic graphic techniques using CorelDraw and Photoshop",
          "HTML 5",
          "CSS 3",
          "Tailwind CSS",
          "Vanilla Javascript",
          "JQuery",
          "Angular JS",
          "React JS",
          "Bootstrap 5",
          "Version Control",
          "Node Package Manager(npm)",
        ],
      },
      {
        title: "Back-End Development",
        topics: [
          "PHP",
          "PHP OOP",
          "Laravel",
          "Codeigniter",
          "REST API’s",
          "MySQL RDB",
          "Version Control",
        ],
      },
      {
        title: "Web/App Development I (Front End + Back End) Full Stack",
        topics: [
          "Basic graphic technique using CorelDraw and Photoshop",
          "Vanilla JavaScript, AJAX, JQuery, Angular JS, and React JS",
          "Cascading Style Sheet (CSS) and HTML 5",
          "Bootstrap 5",
          "Tailwind CSS",
          "Node Package Manager(npm)",
          "Backend development using PHP",
          "Creating a relational database using MySQL",
          "Laravel",
          "Codeigniter",
          "Building and Managing REST APIs",
          "Version Control(GIT)",
          "How to manage CPanel and Domain name registration",
        ],
      },
      {
        title: "Web/App Development II (Front End + Back End) MERN Stack",
        topics: [
          "Basic graphic techniques using CorelDraw and Photoshop",
          "JavaScript, AJAX, JQuery, and React JS",
          "Cascading Style Sheet (CSS) and HTML 5",
          "Bootstrap 5",
          "Tailwind CSS",
          "Node Package Manager(npm)",
          "Backend development using Node JS and Express JS",
          "Creating a non-relational database using MongoDB",
          "Building and Managing REST APIs",
          "Version Control",
          "How to manage CPanel and Domain name registration",
        ],
      },
      {
        title: "Web/App Development III (Font End + Back End) Python",
        topics: [
          "Basic graphic technique using CorelDraw and Photoshop",
          "Vanilla JavaScript, AJAX, JQuery, Angular JS, and React JS",
          "Cascading Style Sheet (CSS 3) and HTML 5",
          "Bootstrap 5",
          "Backend development using Python",
          "Flask",
          "Django",
          "Creating a Relational Database using MySQL",
          "Version Control",
          "SQLAlchemy(ORM-Object Relational Mapping)",
          "Building and Managing REST APIs",
          "How to manage CPanel and Domain name registration",
        ],
      },

      {
        title: "Mobile Application Development (Android and IOS)",
        topics: {
          "Cross Platform Development": [
            "Mobile Architecture Components",
            "Android Studio Setup",
            "Xcode Set up",
            "Advanced Vanilla Javascript & React JS",
            "React Native",
            "Dart",
            "Flutter",
            "SQLite",
            "Basic Concepts Of Material Design, Intents, Layouts, and Views",
            "Data Storage and Persistence",
            "Networking and APIs",
            "Version Control",
          ],
          "Android Application Development": [
            "Working with Android Components",
            "Firebase Integration",
            "Object Oriented Programming(JAVA)",
            "Kotlin for Android Development",
            "Object-Oriented Programming (OOP) using Java",
            "User Interface Design with XML and Jetpack Compose",
            "Network Calls Using Retrofit",
            "Android Architecture Components",
            "Jetpack Libraries and Components",
            "Threads",
            "Database Creation with SQLite.",
            "Application Testing and Quality Assurance",
          ],
          "IOS Application Development": [
            "Introduction to Swift Programming",
            "Object-Oriented Programming in Swift",
            "Swift Advanced Features",
            "Data Handling and Persistence",
            "Building User Interfaces with SwiftUI",
            "Integrating UIKit with Swift",
            "Networking and API Integration",
            "Handling Data and Core Data",
            "Swift Concurrency and Async/Await",
            "Creating and Managing RESTful APIs",
            "Testing and Debugging Swift Applications",
            "Advanced Swift Programming Techniques",
            "Working with Combine Framework",
            "Animations and Gestures in Swift",
            "Integrating with the Apple Ecosystem",
            "Security and Privacy in Swift Apps",
            "Cloud Integration with Swift",
            "App Distribution and the App Store",
            "Accessibility and Internationalization",
            "Performance and Optimization in Swift",
          ],
        },
      },
      {
        title: "Software Development (Scratch)",
        topics: [
          "Introduction to Scratch Programming",
          "Basic Programming Concepts with Scratch",
          "Introduction to Object-Oriented Programming Concepts",
          "Basic Game Development Fundamentals",
          "Creating Interactive Animations",
          "Introduction to Basic Principles of Programming",
          "Understanding and Implementing User Inputs",
          "Advanced Sprite Manipulation",
          "Introduction to Variables and Data Handling",
          "Exploring Sound and Music in Scratch",
          "Building Multi-Level Games",
          "Understanding and Using My Blocks",
          "Collaborative Projects with Scratch",
        ],
      },
      {
        title: "Software Development (Java)",
        topics: [
          "Introduction to Java Programming",
          "Java Programming Languages and Structure",
          "Data Structure and Algorithms",
          "Logic Building and Effective ways of solving problems",
          "Developing GUIs",
          "Object Oriented Analysis and Design",
          "Creating relational databases using MySQL and SQLite",
          "Windows application Development using Java",
          "Web Component Development using Servlets and JSP",
          "Database Application Development using JDBC",
          "Secured Application Development using Java",
          "Application Testing and Quality Assurance",
        ],
      },
      {
        title: "Software Development (.NET)",
        topics: [
          "Introduction to .NET and .NET Core",
          "Business Logic, and Software Development Life Cycle",
          "Object Oriented Analysis and Design",
          "C# Fundamentals",
          "Building Web Applications with ASP.NET Core",
          "RESTful API Development with ASP.NET Core",
          "Relational Database Design, Querying, Managing and Administering Database Using MS SQL SERVER",
          "Entity Framework Core for Data Access",
          "Distributed Application Development using XML",
          "Front-end Integration with Blazor",
          "Windows Application Development using .NET Framework",
          "Database Application Development using ADO.NET",
          "Microservices Architecture with .NET Core",
          "Secured Application Development using .NET Framework",
          "Application Testing and Quality Assurance",
          "Cloud-Based .NET Development with Azure",
          "NET Application Performance Optimization",
        ],
      },
    ],
  },
  {
    id: "data-sciences",
    title: "Faculty of Data Science Management",
    description:
      "Our Faculty of Data and Social Science integrates data science with social science methodologies to provide a unique interdisciplinary perspective. This faculty equips students to make data-driven decisions and analyze complex problems across various sectors. Students learn about:",
    details: [
      {
        title: "Data Science",
        topics: [
          "Introduction to Data Science/Analysis",
          "Data Science Project Lifecycle",
          "Google Form for Data Gathering",
          "Google Sheet for Inspecting and Transforming Data",
          "Microsoft Excel for Inspecting and Transforming Data",
          "Importing Data from User Files to Microsoft/Oracle Database",
          "SQL Fundamentals",
          "Exporting Data from Microsoft/Oracle Database to Microsoft Excel",
          "Programming using R",
          "Programming using Python",
          "Manipulating Data using Python",
          "RapidMiner for Data Mining",
          "Microsoft Power BI",
          "Data Visualization using Excel",
          "Power BI for Data Visualization",
          "Tableau for Data Visualization",
          "Machine Learning Introduction",
          "Practical Data Science Exercise",
        ],
      },
      {
        title: "Data Analytics",
        topics: [
          "Introduction to Data Analytics",
          " Google Forms for Data Gathering",
          " Google Sheets for Inspecting and Transforming Data",
          "Microsoft Excel for Inspecting and Transforming Data",
          "Power BI for Data Visualization",
          "Tableau for Data Visualization",
          "Descriptive and Inferential Statistics",
          " Data Interpretation and Reporting",
          "SQL for Data Analysis",
          "Google Data Studio",
          "Exploratory Data Analysis (EDA)",
          "KPI and Dashboard Creation",
          "Data Governance and Compliance",
          "Data Cleaning and Data Wrangling",
        ],
      },
      // {
      //   title: "Digital Marketing",
      //   topics: ["Social Media Management", "Social Media Marketing"],
      // },
    ],
  },
  {
    id: "information_security",
    title: "Faculty of Information Security",
    description:
      "The Faculty of Information Security is dedicated to training experts in the critical field of cyber security. Our curriculum is designed to teach students how to protect digital assets and secure information systems from cyber threats, preparing them to become leaders in the cybersecurity landscape. Students gain in-depth knowledge in:",
    details: [
      {
        title: "Ethical Hacking/ Penetration Testing",
        topics: [
          "Ethics and Legality",
          "Footprinting and Reconnaissance",
          "Scanning and Enumeration",
          "Vulnerability Analysis",
          "System Hacking",
          "Malware Threats (Trojans, Viruses, Worms)",
          "Sniffing and Evasion",
          "Denial of Service",
          "Social Engineering",
          "Session Hijacking",
          "Web Server Attacks",
          "Web Application Exploitation",
          "Password Attacks",
          "SQL Injection",
          "Wireless Network Exploitation",
          "Physical Security Breaches",
          "Linux System Exploitation",
          "Bypassing Security Measures (IDS, Firewalls, Honeypots)",
          "Buffer Overflow Exploits",
          "Cryptography Attacks",
          "Cloud Security",
          "IoT Hacking",
          "Penetration Testing Methodologies",
        ],
      },
      {
        title: "Computer/ Hacking Forensics",
        topics: [
          "Investigation Processes",
          "Digital Evidence",
          "Incidence/First Response",
          "Computer Forensics Labs",
          "Searching and Seizing",
          "Hard Disk and File Systems",
          "Data Acquisition and Duplication",
          "Image Files",
          "Recovering and Deleting Files",
          "Application Password Checkers",
          "Log Capturing",
          "Windows Forensics",
          "Linux and Mac Forensics",
          "Network Forensics",
          "Email and Social Media Forensics",
          "Mobile Forensics",
          "IOT Forensics",
          "Cloud Forensics",
          "Malware Forensics",
          "Investigating Web Attacks",
          "Dark Web Forensics",
          "Modern Forensics",
          "Steganography",
          "Defeating Anti-Forensics Techniques",
          "Access Data",
        ],
      },
      {
        title: "Information/ Cyber Security",
        topics: [
          "Coding for Security",
          "Vulnerability Assessments",
          "Penetration Testing",
          "Ethical Hacking",
          "Network Security",
          "Cloud Security",
          "Operating System Security",
          "Mobile Security",
          "Wireless Security",
          "Database Security",
          "Application Security",
          "Identity and Access Management",
          "Threat Intelligence and Monitoring",
          "Cybersecurity Governance and Risk Management",
          "Endpoint Security",
        ],
      },
      {
        title: "Corporate Information/ Cyber Security",
        topics: [
          "Learn the latest cyber attacks and how to defend yourself",
          "Know about different malware, Viruses, spyware, exploits, backdoors, and their missions",
          "How to analyze your computer and emails",
          "Learn the technique and tool to detect and eliminate viruses without anti-virus",
          "How to securely surf the Internet",
          "Know about firmware that is in your devices like Laptops, Phones, CCTV Cameras, and (IoT)Internet of Things like Card, Car, TVs, etc",
          "Know more about Bluetooth, GPRS, Webcam, general text messages, Images, Videos, and Audio",
        ],
      },
    ],
  },
  {
    id: "media_creation",
    title: "Faculty of Media Creation and Assistance",
    description:
      "This faculty provides creative training in graphic design, digital marketing, and virtual assistance. It empowers individuals to express their creativity, promote brands, and support businesses in the digital landscape.",
    details: [
      {
        title: "Graphic Designs",
        topics: [
          "Introduction to Graphic Design",
          "Software",
          "Design Principles",
          "Visual Elements",
          "Introduction to 2 Major Design",
        ],
      },
      {
        title: "Digital Marketing",
        topics: {
          "Social Media Management": [
            "Content creation",
            "Brand establishment",
            "Social Media Marketing (SMM)",
            "Advertising",
            "Creation of social media calendars",
          ],
          "Social Media Marketing": [
            "Introduction To Digital Marketing",
            "Social media advertising",
            "Email Marketing",
            "SMS Marketing",
            "Search Engine Optimization (SEO)",
            "Search Engine Marketing (SEM)",
          ],
        },
      },
      {
        title: "Virtual Assistance",
        topics: {
          "Technical Virtual Assistance": [
            "Managing websites",
            "Handling data entry",
            "Setting up automation",
            "Managing CRM systems",
            "Troubleshooting technical issues",
            "Handling online tools like Google Workspace and Microsoft 365",
          ],
          "Administrative Virtual Assistance": [
            "Managing emails",
            "Scheduling appointments",
            "Conducting market research",
            "Preparing reports",
            "Managing customer relations",
            "Handling calendar and task management",
          ],
          "Creative Virtual Assistance": [
            "Content creation",
            "Social media management",
            "Graphic design",
            "Email marketing",
            "Brand strategy",
          ],
        },
      },
    ],
  },
];

export const coursesOffered = [
  {
    name: "Ethical Hacking",
    desc: "Protect systems and networks from cyber threats.",
    bgcol: "#E5EEF9", // Very light tint of #0F3C9E
    icon: <FaShieldAlt color="#0F3C9E" />,
    path: "https://eit-registration-form-5bn7s6zgg-davebeloveds-projects.vercel.app/",
  },
  {
    name: "Mobile App Development",
    desc: "Build powerful apps for iOS and Android.",
    bgcol: "#D0E2F7", // Light tint
    icon: <FaMobileAlt color="#0F3C9E" />,
    path: "https://eit-registration-form-5bn7s6zgg-davebeloveds-projects.vercel.app/",
  },
  {
    name: "Software Engineering",
    desc: "Master the foundations of software development.",
    bgcol: "#BBD6F5", // Light-medium tint
    icon: <FaCode color="#0F3C9E" />,
    path: "https://eit-registration-form-5bn7s6zgg-davebeloveds-projects.vercel.app/",
  },
  {
    name: "Python Programming",
    desc: "Code your way to success.",
    bgcol: "#A6CAEF", // Medium tint
    icon: <FaPython color="#0F3C9E" />,
    path: "https://eit-registration-form-5bn7s6zgg-davebeloveds-projects.vercel.app/",
  },
  {
    name: "Artificial Inteligence (AI)",
    desc: "Get smarter with AI.",
    bgcol: "#91BEEB", // Slightly darker medium tint
    icon: <FaBrain color="#0F3C9E" />,
    path: "https://eit-registration-form-5bn7s6zgg-davebeloveds-projects.vercel.app/",
  },
  {
    name: "Data Analytics",
    desc: "Analyze information successfully.",
    bgcol: "#7CB2E7", // Medium-dark tint
    icon: <FaChartBar color="#0F3C9E" />,
    path: "https://eit-registration-form-5bn7s6zgg-davebeloveds-projects.vercel.app/",
  },
  {
    name: "UI/UX Design",
    desc: "Develop user-friendly digital experiences.",
    bgcol: "#67A6E3", // Darker tint
    icon: <FaPencilRuler color="#0F3C9E" />,
    path: "https://eit-registration-form-5bn7s6zgg-davebeloveds-projects.vercel.app/",
  },
  {
    name: "Graphic Design",
    desc: "Create stunning visuals.",
    bgcol: "#529AE0", // Dark tint
    icon: <FaPalette color="#0F3C9E" />,
    path: "https://eit-registration-form-5bn7s6zgg-davebeloveds-projects.vercel.app/",
  },
  {
    name: "Virtual Assistance",
    desc: "Manage business tasks remotely.",
    bgcol: "#3D8EDC", // Darkest tint in the series
    icon: <FaHeadset color="#0F3C9E" />,
    path: "https://eit-registration-form-5bn7s6zgg-davebeloveds-projects.vercel.app/",
  },
];
