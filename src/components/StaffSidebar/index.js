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
                        <span className={cx('span')}>Staff</span>
                    </h3>
                    <Link to={'/staff/view-staff'} className={cx('function')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCaretRight}></FontAwesomeIcon>
                        View <span className={cx('span')}>Staff</span>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <h3 className={cx('title')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faMessage}></FontAwesomeIcon>
                        <span className={cx('span')}>Feedback</span>
                    </h3>
                    <Link to={'/staff/view-feedback'} className={cx('function')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCaretRight}></FontAwesomeIcon>
                        View <span className={cx('span')}>Feedback</span>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <h3 className={cx('title')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faScrewdriverWrench}></FontAwesomeIcon>
                        <span className={cx('span')}>Repair</span>
                    </h3>
                    <Link to={'/staff/add-history'} className={cx('function')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCaretRight}></FontAwesomeIcon>
                        Add <span className={cx('span')}>History</span>
                    </Link>
                    <Link to={'/staff/view-history'} className={cx('function')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCaretRight}></FontAwesomeIcon>
                        View <span className={cx('span')}>History</span>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <h3 className={cx('title')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faChartColumn}></FontAwesomeIcon>
                        <span className={cx('span')}>Report</span>
                    </h3>
                    <Link to={'/staff/view-report'} className={cx('function')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCaretRight}></FontAwesomeIcon>
                        View <span className={cx('span')}>Report</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default StaffSidebar;