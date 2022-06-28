import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Preview from "../components/Preview";
import Projects from "../components/Projects";
import { useSpring, animated } from "react-spring";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS

require("dotenv").config();

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  preview: Preview,
  projects: Projects,
};

import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.STORYBLOK_KEY,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
