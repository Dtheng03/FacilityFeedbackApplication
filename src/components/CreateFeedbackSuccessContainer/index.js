import classNames from "classnames/bind";
import styles from './CreateFeedbackSuccessContainer.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CreateFeedbackSuccessContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <h3 className={cx('header')}>Send Feedback Successfully</h3>
                <div>
                    <Link to="/create-feedback"><button className={cx('create')}>Create new feedback</button></Link>
                </div>
                <div>
                    <Link to="/view-feedback"><button className={cx('view')}>View feedback</button></Link>
                </div>
                <div>
                    <Link to='/'><button className={cx('home')}>Back to home</button></Link>
                </div>
            </div>
        </div>
    );
}

export default CreateFeedbackSuccessContainer;