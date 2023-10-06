import style from './StaffHeader.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignIn, faSignOut, faUserGear, faWrench } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';


const cx = classNames.bind(style);

function StaffHeader() {

    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/')
    }

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('home')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faUserGear} />Staff Page
                </div>
                <p className={cx('title')}><FontAwesomeIcon className={cx('icon')} icon={faWrench}></FontAwesomeIcon>Facility Feedback Application</p>
                <button className={cx('logout')} onClick={handleLogOut}>Log out <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon></button>
            </header>
        </div>
    );
}

export default StaffHeader;