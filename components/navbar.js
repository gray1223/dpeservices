import styles from '../styles/navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <nav className={styles.globalNav}>
                <div>
                    <Link href="/"><h2 className={styles.title}>DPE Manager</h2></Link>
                </div>
                <div>
                    <Link className={styles.linkNav} href="/"><a>Home</a></Link>
                    <Link href="/calendar"><a>Calendar</a></Link>
                    <Link href="/payments"><a>Payments</a></Link>
                    <Link href="/demo"><a>Demo</a></Link>
                </div>
                
               
            
            </nav>
            
        </>

    )
}