import toDoAppImages from "../assets/images/to-do-app";
import writeItImages from "../assets/images/write-it";

const projects = [
  {
    images: toDoAppImages,
    title: "To-Do App",
    description:
      "Full Stack Web Application built using React with Chakra UI library on the frontend and NestJS on the backend. On this application you can create an account and login using your credentials, you can create tasks, mark them as completed, update their status and name and delete them. ",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Chakra UI",
      "Node",
      "NestJS",
      "Passport",
      "JWT",
      "PostgreSQL",
      "Docker",
    ],
    links: [
      {
        host: "github",
        stack: "Frontend",
        isDisabled: false,
        url: "https://github.com/salvadorperezm/to-do-app",
      },
      {
        host: "github",
        stack: "Backend",
        isDisabled: false,
        url: "https://github.com/salvadorperezm/todo-api",
      },
      {
        host: "demo",
        isDisabled: true,
        url: "",
      },
    ],
  },
  {
    images: writeItImages,
    title: "Write It (Twitter Clone)",
    description:
      "Full stack Web Application built using Vue on the frontend and Ruby on Rails on the  backend. This application is currently under development.",
    tags: ["HTML", "CSS", "JavaScript", "Vue", "Ruby", "Ruby on Rails"],
    links: [
      {
        host: "github",
        stack: "Frontend",
        isDisabled: true,
        url: "",
      },
      {
        host: "github",
        stack: "Backend",
        isDisabled: true,
        url: "",
      },
      {
        host: "demo",
        isDisabled: true,
        url: "",
      },
    ],
  },
];

export default projects;
