import Head from 'next/head'

import NavBar from '../components/NavBar'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import ContactSection from "../components/ContactSection";
import FadeHeader from "../components/FadeHeader";
import {useSpring} from 'react-spring'

import {
    useStoryblokState,
    getStoryblokApi,
    StoryblokComponent,
} from "@storyblok/react";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home(props) {

    const story = props.story

    const styles = useSpring({
        loop: true,
        from: { opacity: 0, bottom: '-100px' },
        to: { opacity: 1, bottom: '0' },
    })

    return (
        <div className={styles.container}>
            <Head>
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NWLRDST');</script>
<!-- End Google Tag Manager -->
                <title>Jesse Schoonveld portfolio</title>
                <meta name="description"
                      content="I'm currently studying web development and doing and internship as a front-end developer. This is my portfolio."/>
                <link rel="icon" href="favicon.ico"/>
            </Head>
            
            <main className={styles.main}>
                <FadeHeader/>


                <NavBar/>

                <AboutSection/>

                <div className="container">
                    <div className="row">
                        <StoryblokComponent blok={story.content} />
                    </div>
                </div>


                {/*<ProjectSection/>*/}

                <ContactSection/>

            </main>

            <Footer/>
        </div>
    )
}

export async function getStaticProps() {
    // home is the default slug for the homepage in Storyblok
    let slug = "home";

    // load the draft version
    let sbParams = {
        version: "draft", // or 'published'
    };

    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

    return {
        props: {
            story: data ? data.story : false,
            key: data ? data.story.id : false,
        },
        revalidate: 3600, // revalidate every hour
    };
}
