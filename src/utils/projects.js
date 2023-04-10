import toDoAppImages from "../assets/images/to-do-app";
import vueWeatherAppImages from "../assets/images/vue-weather-app";

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
    images: vueWeatherAppImages,
    title: "Vue Weather App",
    description:
      "The app's user interface is straightforward, with easy-to-understand icons and buttons. I also used the OpenWeatherMap API to obtain weather data, ensuring that the app is always up-to-date with the latest weather information. When users first open the web app, they are prompted to either enter a location or allow the app to access their browser's built-in location function. Once the user's location is determined, the app displays a detailed weather report, including temperature, humidity, wind speed, and max visibility.The app also includes an options page, where users can choose their preferred unit of measurement for temperature, wind speed, and precipitation.",
    tags: ["HTML", "CSS", "JavaScript", "Vue", "Vue Router", "API"],
    links: [
      {
        host: "demo",
        stack: "Frontend",
        isDisabled: false,
        url: "https://salvadorperezm.github.io/weather-app-vue/",
      },
    ],
  },
];

export default projects;
