import classNames from "classnames/bind";
import style from './StaffSidebar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn, faClipboardUser, faListCheck, faMessage, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function StaffSidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <div className={cx('category')}>
                    <Link to={'/staff/view-staff'} className={cx('function')}>
                        <p className={cx('title')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faClipboardUser}></FontAwesomeIcon>
                            <span className={cx('span')}>Staff</span>
                        </p>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <Link to={'/staff/view-feedback'} className={cx('function')}>
                        <p className={cx('title')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faMessage}></FontAwesomeIcon>
                            <span className={cx('span')}>Feedback</span>
                        </p>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <Link to={'/staff/tasks'} className={cx('function')}>
                        <p className={cx('title')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faListCheck}></FontAwesomeIcon>
                            <span className={cx('span')}>Tasks</span>
                        </p>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <Link to={'/staff/view-history'} className={cx('function')}>
                        <p className={cx('title')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faScrewdriverWrench}></FontAwesomeIcon>
                            <span className={cx('span')}>Repair</span>
                        </p>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <Link to={'/staff/view-report'} className={cx('function')}>
                        <p className={cx('title')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faChartColumn}></FontAwesomeIcon>
                            <span className={cx('span')}>Report</span>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default StaffSidebar;