import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'





export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DPEasy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      
        <h1 className={styles.title}>
          DPE Manager
        </h1>
        <h3 className={styles.code}>The <em>headache-free</em> DPE scheduling and aquisition platform!</h3>


        <div className={styles.landing}></div>
        <p className={styles.description}>
          Get started by browsing our services below.
          
        </p>

        <div className={styles.grid}>
          <Link href='/calendar'>
            <a className={styles.card}>
              <h2>Calendar + Scheduling &rarr;</h2>
              <p>Learn about what we can set up for your schedule.</p>
            </a>
          </Link>

          <Link href='/payments'>
            <a href="#billing" className={styles.card}>
              <h2>Billing &rarr;</h2>
              <p>Want to collect deposits? Enforce 24 hour cancellations? Learn more.</p>
            </a>
          </Link>

          <a href="" className={styles.card}>
            <h2>Pricing &rarr;</h2>
            <p>Lets get started working to simplify your life.</p>
          </a>

        </div>


        

        

        <div className={styles.largeText} style={{marginTop:"5vh"}} id="pricing">
          <h1 style={{textAlign: "center"}} className={styles.title}>Pricing</h1>
          <p>Simple, transparent pricing.</p>


          
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
