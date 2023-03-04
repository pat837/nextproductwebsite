import css from './navbar.module.css';
import Link from 'next/link'
import Logo from './Logo';

const Navbar = () => {
    return (
        <nav className={css.nav} >
            <ul className={css.ul}>
                <li className={css.logo}>
                    <Logo className={css.logo} />
                </li>
                <li>
                    <Link href="/events"  >
                        Events
                    </Link>
                </li>
                <li>
                    <Link href="/careers" >Careers</Link>
                </li>
                <li>
                    <Link href="/gallery" >Gallery</Link>
                </li>
                <li>
                    <Link href="/blog" >Blog</Link>
                </li>
                <li className="sign-in-btn">
                    <Link href="/">Sign in</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar;