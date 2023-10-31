import styles from './LoginContainer.module.scss'
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
import { login } from '../../api/api';

const cx = classNames.bind(styles)

function LoginContainer() {

    const navigate = useNavigate();
    const [loginname, setLoginname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordIcon, setPasswordIcon] = useState(true);

    const [isFail, setIsFail] = useState(false);

    const togglePassword = () => {
        setPasswordIcon(!passwordIcon)
        setPasswordShown(!passwordShown)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // call api
        try {
            const response = await fetch(login, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "loginName": loginname,
                    "password": password
                })
            })

            // lay ra response body va set vao sessionToken
            const sessionToken = await response.json();
            const sessionData = JSON.stringify(sessionToken);

            // perform logic
            if (response.ok) {
                if (sessionToken.manager) {
                    // luu sessionToken vao localStorage
                    sessionStorage.setItem('sessionToken', sessionData);

                    // if success and role is admin
                    navigate('/admin');
                } else {
                    // luu sessionToken vao localStorage
                    sessionStorage.setItem('sessionToken', sessionData);

                    //if success and role is staff
                    navigate('/staff');
                }
            } else {
                // if fail
                setIsFail(true);
            }
        } catch (error) {
            // console.log(error);
            setIsFail(true);
        }
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
                <input
                    className={cx('loginname-input')}
                    required
                    autoFocus
                    maxLength={25}
                    type='text'
                    placeholder='LoginName'
                    value={loginname}
                    onChange={(e) => setLoginname(e.target.value.trim())}
                >
                </input>
            </div>
            <div className={cx('password')}>
                <FontAwesomeIcon className={cx('pass')} icon={passwordIcon ? faLock : faLockOpen} onClick={togglePassword}></FontAwesomeIcon>
                <input
                    className={cx('password-input')}
                    required
                    maxLength={25}
                    type={passwordShown ? "text" : "password"}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value.trim())}
                >
                </input>
            </div>
            <div>
                <button className={cx('button')} type='submit'>
                    Log in
                    <FontAwesomeIcon className={cx('icon')} icon={faSignIn}></FontAwesomeIcon>
                </button>
            </div>
        </form>

        {/* Show message when login failed */}
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