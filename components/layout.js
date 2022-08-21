
import styles from '../styles/layout.module.css'
import Navbar from './navbar.js'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>


      <footer className={styles.footer}>
          <h4>DPEasy, All Rights Reserved ©2022 </h4>
          <div>
            <div>
                <a href="tel:8578297049">Call Us</a>
            </div>
            <div>
                <a href="mailto:grayson@flyhdg360.com">Email: grayson@flyhdg360.com</a>
            </div>

          </div>
          
      </footer>
    </>
  )
}