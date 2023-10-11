import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './LoginContainer.module.scss'
import classNames from 'classnames/bind';
import { faLock, faLockOpen, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles)

function LoginContainer() {

    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordIcon, setPasswordIcon] = useState(true);

    const [isFail, setIsFail] = useState(false);


    const togglePassword = () => {
        setPasswordIcon(!passwordIcon)
        setPasswordShown(!passwordShown)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // perform logic

        // if success
        navigate('/admin');

        // if fail
        // setIsFail(true);
    };

    const closeFailModal = () => {
        setIsFail(false);
    };

    return <div className={cx('wrapper')}>
        <form className={cx('form')} onSubmit={handleSubmit}>
            <div>
                <p>Login For Staff</p>
            </div>
            <div className={cx('loginname')}>
                <FontAwesomeIcon className={cx('user')} icon={faUser}></FontAwesomeIcon>
                <input className={cx('loginname-input')} required type='text' placeholder='LoginName'></input>
            </div>
            <div className={cx('password')}>
                <FontAwesomeIcon className={cx('pass')} icon={passwordIcon ? faLock : faLockOpen} onClick={togglePassword}></FontAwesomeIcon>
                <input className={cx('password-input')} required type={passwordShown ? "text" : "password"} placeholder='Password'></input>
            </div>
            <div>
                <button className={cx('button')} type='submit'>
                    Log in
                    <FontAwesomeIcon className={cx('icon')} icon={faSignIn}></FontAwesomeIcon>
                </button>
            </div>
        </form>
        <div>
            {isFail && (
                <div className={cx('modal')}>
                    <div className={cx('modal-content')}>
                        <h2 className={cx('modal-title')}>Login Failed!</h2>
                        <p className={cx('modal-info')}>LoginName or Password is incorrect or does not exist.</p>
                        <p className={cx('modal-info')}>Please try again.</p>
                        <button className={cx('close')} onClick={closeFailModal}>Ok</button>
                    </div>
                </div>
            )}
        </div>
    </div>;
}

export default LoginContainer;