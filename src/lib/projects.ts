import * as widgets from "@/components/widgets/index";

export type ProjectType = {
  title: string;
  description: string;
  verboseDesc: string;
  github: string;
  projectWidgets?: any[];
  website?: string;
  picture?: string;
  videoSource?: string;
};

export const rateADog: ProjectType = {
  title: "Rate A Dog",
  description:
    "Powered by Dog.ceo, allowing for seemless browsing of mans best frien, complete with a login, rating system and filtering options!",
  verboseDesc: `The project incorporates several innovative features to enhance user experience:

  Infinite Scrolling Carousel: Users can seamlessly navigate through the content by either dragging with a mouse or using touch screen gestures. This interactive carousel provides a dynamic and engaging browsing experience.

  Custom Lazy Loading with Intersection Observer: To optimize performance and minimize external API requests, I've implemented a custom lazy loading strategy. The Intersection Observer API efficiently loads images as they come into view, reducing the initial load time.

  Dynamic Backend Data Loading: Given the substantial volume of data, I've designed a dynamic loading system on the backend. As users navigate the carousel, image data is loaded and unloaded dynamically, ensuring a lighter load on the user's browser and enhancing overall performance.

  Filtering and Sorting: Enhancing usability, I've integrated a variety of filters and sorting methods. These features empower users to effortlessly explore the collection. MongoDB's aggregation pipeline was utilized to implement this functionality.

  `,
  github: "https://github.com/willco123/Rate-A-Dog-UI",
  projectWidgets: [
    widgets.ReactWidget,
    widgets.NodejsWidget,
    widgets.RTLWidget,
    widgets.PostmanWidget,
    widgets.PlaywrightWidget,
    widgets.Css3Widget,
    widgets.ExpressWidget,
    widgets.JestWidget,
    widgets.TypescriptWidget,
    widgets.MongodbWidget,
    widgets.SassWidget,
    widgets.WebpackWidget,
  ],
  picture: "/rateadog.jpg",
  website: "https://rateadog.netlify.app/",
  videoSource: "/rateadog.webm",
};
export const youtubeSearchAPI: ProjectType = {
  title: "Youtube Search API",
  description:
    "A simple API that hooks into youtube's data API, allows for searching the database for videos or channels",
  verboseDesc: `My first Typescript project, experimenting with the Youtube-data API. Implemented with MySQL and Express.\n 
  It simply allows a user to search the Youtube database for a given channel/video name, for use with Postman.\n
  Fully tested with Jest/Supertest.`,
  github: "https://github.com/willco123/Search-Youtube-TS",
  projectWidgets: [
    widgets.TypescriptWidget,
    widgets.PostmanWidget,
    widgets.MysqlWidget,
    widgets.JestWidget,
    widgets.NodejsWidget,
    widgets.ExpressWidget,
  ],
};
export const portfolioUI: ProjectType = {
  title: "Portfolio UI",
  description:
    "It's the website you're currently on! Powered by NextJS App router, using React's bleeding edge SSR with other techniques like parallel and intercepting routes",
  verboseDesc: `Built using NextJS 13 app-router, a meta-framework for the React library, along with Tailwind CSS.\n
  Utilising bleeding-edge features such as server-side rendered components for better SEO and parallel/intercepting routes for modals.\n 
  Responsive design was a core challenge of this project, with custom animations using Key Frames and themes defined in Tailwind's config. Additionally, to ensure a seamless user experience, I utilized script injection techniques to prevent the occurrence of the 'Flash of Unstyled Content' (FOUC).\n 
  Finally I experimented with OBS/FFmpeg for generating GIFS and thumbnails, along with GIMP and Inkscape for designing custom decals.\n
  Deployed on Vercel. 
`,
  github: "https://github.com/willco123/portfolio-ui",
  projectWidgets: [
    widgets.Css3Widget,
    widgets.NextjsWidget,
    widgets.ReactWidget,
    widgets.TailwindCssWidget,
    widgets.GimpWidget,
    widgets.InkscapeWidget,
    widgets.TypescriptWidget,
    widgets.FfmpegWidget,
  ],
  website: "portfolio-ui-ruby.vercel.app ",
  picture: "/portfolio.jpg",
  videoSource: "/portfolio.webm",
};
export const programmableStopwatch: ProjectType = {
  title: "Programmable Stopwatch",
  description:
    "An Angular stopwatch allowing for user defined config, coming soon!",
  verboseDesc: "hey",
  github: "",
};
