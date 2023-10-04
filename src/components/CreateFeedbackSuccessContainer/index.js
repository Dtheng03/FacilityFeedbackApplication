import classNames from "classnames/bind";
import styles from './CreateFeedbackSuccessContainer.module.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHome, faPlus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function CreateFeedbackSuccessContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <h3 className={cx('header')}>Send Feedback Successfully</h3>
                <div>
                    <Link to="/create-feedback" className={cx('create')}>
                        <span className={cx('icon')}><FontAwesomeIcon icon={faSquarePlus}></FontAwesomeIcon></span>
                        New feedback
                    </Link>
                </div>
                <div>
                    <Link to="/view-feedback" className={cx('view')}>
                        <span className={cx('icon')}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></span>
                        View feedback
                    </Link>
                </div>
                <div>
                    <Link to='/' className={cx('home')}>
                        <span className={cx('icon')}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></span>
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CreateFeedbackSuccessContainer;