import Link from 'next/link';
import classes from './main-header.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>NextEvents</Link>
            </div>
            <nav className={classes.navigation}>
                <Link href='/events'>All Events</Link>
            </nav>
        </header>
    );
}
 
export default MainHeader;