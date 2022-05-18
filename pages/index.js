import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import ContactSection from "../components/ContactSection";
import ProjectSection from "../components/ProjectSection";
import FadeHeader from "../components/FadeHeader";

export default function Home({articles, categories, homepage}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jesse Schoonveld portfolio</title>
        <meta name="description" content="I'm currently studying web development and doing and internship as a front-end developer. This is my portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <FadeHeader/>

        <div className="container-fluid px-0">
          <NavBar />
        </div>

        <AboutSection />
        <ProjectSection/>
        <ContactSection />

      </main>

     <Footer />
    </div>
  )
}
