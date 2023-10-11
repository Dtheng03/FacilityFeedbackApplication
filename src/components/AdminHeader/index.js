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
        navigate('/')
    }

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('home')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faUserGear} />
                    Admin Page
                </div>
                <p className={cx('title')}><FontAwesomeIcon className={cx('icon')} icon={faWrench}></FontAwesomeIcon>Facility Feedback Application</p>
                <button className={cx('logout')} onClick={openModel}>Log out <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon></button>
            </header>
            <div>
                {isOpen && (
                    <div className={cx('modal')}>
                        <div className={cx('modal-content')}>
                            <h2>Do you really want to log out?</h2>
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