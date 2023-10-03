import classNames from "classnames/bind";
import styles from './HomeHeader.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function HomeHeader() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('home')}>
                    <Link className={cx('link')} to='/'><FontAwesomeIcon className={cx('icon')} icon={faHome} />Home</Link>
                </div>
                <p className={cx('title')}>Facility Feedback Application</p>
                <Link to='/login' className={cx('login')}>Login <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon> </Link>
            </header>
        </div>
    );
}

export default HomeHeader;