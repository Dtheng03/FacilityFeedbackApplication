import styles from './LoginContainer.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function LoginContainer() {
    return <div className={cx('wrapper')}>
        <div className={cx('form')}>
            <div>
                <p>Login for staff</p>
            </div>
            <div className={cx('loginname')}>
                <label className={cx('loginname-label')}>Login Name</label>
                <input className={cx('loginname-input')} type='text'></input>
            </div>
            <div className={cx('password')}>
                <label className={cx('password-label')}>Password</label>
                <input className={cx('password-input')} type='password'></input>
            </div>
            <div>
                <button className={cx('button')} type='submit'>Login</button>
            </div>
        </div>
    </div>;
}

export default LoginContainer;