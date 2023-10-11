import classNames from "classnames/bind";
import style from './StaffSidebar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faChartColumn, faClipboardUser, faMessage, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function StaffSidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <div className={cx('category')}>
                    <h3 className={cx('title')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faClipboardUser}></FontAwesomeIcon>
                        Staff
                    </h3>
                    <Link to={'/staff/view-staff'} className={cx('function')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCaretRight}></FontAwesomeIcon>
                        View Staff
                    </Link>
                </div>
                <div className={cx('category')}>
                    <h3 className={cx('title')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faMessage}></FontAwesomeIcon>
                        Feedback
                    </h3>
                    <Link to={'/staff/view-feedback'} className={cx('function')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCaretRight}></FontAwesomeIcon>
                        View Feedback
                    </Link>
                </div>
                <div className={cx('category')}>
                    <h3 className={cx('title')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faScrewdriverWrench}></FontAwesomeIcon>
                        Repair
                    </h3>
                    <Link to={'/staff/add-history'} className={cx('function')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCaretRight}></FontAwesomeIcon>
                        Add History
                    </Link>
                    <Link to={'/staff/view-history'} className={cx('function')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCaretRight}></FontAwesomeIcon>
                        View History
                    </Link>
                </div>
                <div className={cx('category')}>
                    <h3 className={cx('title')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faChartColumn}></FontAwesomeIcon>
                        Report
                    </h3>
                    <Link to={'/staff/view-report'} className={cx('function')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCaretRight}></FontAwesomeIcon>
                        View Report
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default StaffSidebar;