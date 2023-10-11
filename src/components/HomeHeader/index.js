import classNames from "classnames/bind";
import styles from './HomeHeader.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignIn, faWrench } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function HomeHeader() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('home')}>
                    <Link className={cx('link')} to='/'>
                        <FontAwesomeIcon className={cx('icon')} icon={faHome} />
                        <span className={cx('span')}>Home</span>
                    </Link>
                </div>
                <p className={cx('title')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faWrench}></FontAwesomeIcon>
                    Facility Feedback <span className={cx('span')}>Application</span>
                </p>
                <Link to='/login' className={cx('login')}>
                    <span className={cx('span')}>Log in</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faSignIn}></FontAwesomeIcon>
                </Link>
            </header>
        </div>
    );
}

export default HomeHeader;