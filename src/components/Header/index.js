import classNames from "classnames/bind";
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('home')}>
                    <a className={cx('link')} href="#"><FontAwesomeIcon className={cx('icon')} icon={faHome} />Home</a>
                </div>
                <p className={cx('title')}>Facility Feedback Management</p>
                <button className={cx('login')}>Login</button>
            </header>
        </div>
    );
}

export default Header;