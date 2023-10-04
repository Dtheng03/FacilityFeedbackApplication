import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './LoginContainer.module.scss'
import classNames from 'classnames/bind';
import { faEyeSlash, faLock, faLockOpen, faSignIn, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles)

function LoginContainer() {

    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordIcon, setPasswordIcon] = useState(true)

    const togglePassword = () => {
        setPasswordIcon(!passwordIcon)
        setPasswordShown(!passwordShown)
    };

    return <div className={cx('wrapper')}>
        <div className={cx('form')}>
            <div>
                <p>Login for staff</p>
            </div>
            <div className={cx('loginname')}>
                <FontAwesomeIcon className={cx('icon')} icon={faUser}></FontAwesomeIcon>
                <input className={cx('loginname-input')} type='text' placeholder='LoginName'></input>
            </div>
            <div className={cx('password')}>
                <FontAwesomeIcon className={cx('icon')} icon={passwordIcon ? faLock : faLockOpen} onClick={togglePassword}></FontAwesomeIcon>
                <input className={cx('password-input')} type={passwordShown ? "text" : "password"} placeholder='Password'></input>
            </div>
            <div>
                <button className={cx('button')} type='submit'>
                    Login
                    <FontAwesomeIcon className={cx('icon')} icon={faSignIn}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    </div>;
}

export default LoginContainer;