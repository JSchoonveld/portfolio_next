import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { useSpring, animated } from 'react-spring'
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS


function MyApp({Component, pageProps}) {
    return <div>
        <Component {...pageProps} />
    </div>

}


export default MyApp
