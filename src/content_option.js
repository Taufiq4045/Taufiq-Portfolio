import student from "./assets/images/assignmentSubmission.png"
import car from "./assets/images/driveWell.png"
import insta from "./assets/images/instaClone.png"
import poetry from "./assets/images/ryanPoetry.png"
// import shortner from "./assets/images/urlshortner.png"
// import weather from "./assets/images/weather.png"
// import editor from "./assets/images/videoEditor.png"
// import library from "./assets/images/library.png"
// import game from "./assets/images/spaceInvader.png"

const logotext = "MT";
const meta = {
    title: "Mohd Taufiq",
    description: "I’m Taufiq data scientist _ Full stack devloper,currently working in Bangalore",
};

const introdata = {
    title: "I’m Taufiq",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop desktop and mobile apps",
    },
    description: "Believe there is always a better approach, take the next step in exploring your potential",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "An enthusiastic full-stack developer with impressive knowledge and proficiency in JavaScript, HTML, CSS and mobile responsive web development, as well as strong skills and ability in writing clean and efficient code.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Javascript",
        value: 90,
    },
    {
        name: "NodeJs",
        value: 85,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "MongoDB & MySql",
        value: 80,
    },
    {
        name: "AWS",
        value: 60,
    },
    {
        name: "Bootstrap",
        value: 85,
    },
    {
        name: "HTML",
        value: 90,
    },
    {
        name: "CSS",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: student,
        heading: "Student Task Submission Portal",
        desctiption: "A portal to get and submit the completed task provided between admin and students built using ReactJs,NodeJs and MongoDB.",
        link1: "https://student-task-submission.herokuapp.com/",
        link2: "https://github.com/Taufiq4045/student-task-submission.git",
        link3: "https://github.com/Taufiq4045/student-task-server.git"
    },
    {
        img: poetry,
        heading: "Jack Ryan Poetry",
        desctiption: "An e-commerce site for buying heartfelt poetry built using ReactJs,NodeJs and MongoDB.",
        link1: "https://ecommerce-poetry.netlify.app/",
        link2: "https://github.com/Taufiq4045/ecommerce-poetry.git",
        link3: "https://github.com/Taufiq4045/ecommerce-server"
    },
    {
        img: car,
        heading: "DriveWell",
        desctiption: "A social site for lending and renting cars at easy way built using ReactJs,NodeJs and MongoDB.",
        link1: "https://drive-well.netlify.app/",
        link2: "https://github.com/Taufiq4045/rental-app.git",
        link3: "https://github.com/Taufiq4045/rentalcar-server"
    },
    {
        img: insta,
        heading: "Instagram Clone",
        desctiption: "A social app instagram clone for connecting people built using ReactJs,NodeJs and MongoDB.",
        link1: "https://ig-clone-app.netlify.app/",
        link2: "https://github.com/Taufiq4045/insta-clone.git",
        link3: "https://github.com/Taufiq4045/insta-server"
    },
];

const contactConfig = {
    YOUR_EMAIL: "taufiq4045@gmail.com",
    YOUR_FONE: "(903)679-4897",
    head: "Having an Idea/Project in mind?",
    description: "Feel free to drop a message.",
    YOUR_SERVICE_ID: "service_30ll70d",
    YOUR_TEMPLATE_ID: "template_vq6lgdc",
    YOUR_USER_ID: "user_dTsPV7w13P7DiZ5YHpx9v",
};

const socialprofils = {
    github: "https://github.com/Taufiq4045",
    facebook: "https://www.facebook.com/taufiq.mohd3",
    linkedin: "https://www.linkedin.com/in/taufiq-b1929213a",
    twitter: "https://twitter.com/TaufiqMohd5",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};