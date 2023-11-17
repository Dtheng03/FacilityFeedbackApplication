import style from './AdminHeader.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, faUserGear, faWrench } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(style);

function AdminHeader() {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const openModel = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        // xu ly logic log out
        sessionStorage.removeItem('sessionToken');
        window.history.replaceState(null, '', '/login');
        navigate('/');
    }

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('home')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faUserGear} />
                    <span className={cx('span')}>Manager Page</span>
                </div>
                <p className={cx('title')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faWrench}></FontAwesomeIcon>
                    Facility Feedback <span className={cx('span')}>Application</span>
                </p>
                <button className={cx('logout')} onClick={openModel}>
                    <span className={cx('span')}>Log out</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faSignOut}></FontAwesomeIcon>
                </button>
            </header>
            <div>
                {isOpen && (
                    <div className={cx('modal')}>
                        <div className={cx('modal-content')}>
                            <h2 className={cx('modal-title')}>Do you really want to log out?</h2>
                            <button className={cx('yes')} onClick={handleLogout}>Yes</button>
                            <button className={cx('no')} onClick={closeModal}>No</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminHeader;