import classNames from "classnames/bind";
import style from './AdminSidebar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn, faClipboardUser, faHouse, faLightbulb, faListCheck, faMessage, faScrewdriverWrench, faSignal } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function AdminSidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <div className={cx('category')}>
                    <Link to={'/admin/view-staff'} className={cx('function')}>
                        <p className={cx('title')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faClipboardUser}></FontAwesomeIcon>
                            <span className={cx('span')}>Staff</span>
                        </p>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <Link to={'/admin/room-management'} className={cx('function')}>
                        <p className={cx('title')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faHouse}></FontAwesomeIcon>
                            <span className={cx('span')}>Room</span>
                        </p>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <Link to={'/admin/facility-management'} className={cx('function')}>
                        <p className={cx('title')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faLightbulb}></FontAwesomeIcon>
                            <span className={cx('span')}>Facility</span>
                        </p>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <Link to={'/admin/view-feedback'} className={cx('function')}>
                        <p className={cx('title')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faMessage}></FontAwesomeIcon>
                            <span className={cx('span')}>Feedback</span>
                        </p>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <Link to={'/admin/tasks'} className={cx('function')}>
                        <p className={cx('title')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faListCheck}></FontAwesomeIcon>
                            <span className={cx('span')}>Tasks</span>
                        </p>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <Link to={'/admin/statistics'} className={cx('function')}>
                        <p className={cx('title')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faSignal}></FontAwesomeIcon>
                            <span className={cx('span')}>Statistics</span>
                        </p>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <Link to={'/admin/view-history'} className={cx('function')}>
                        <p className={cx('title')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faScrewdriverWrench}></FontAwesomeIcon>
                            <span className={cx('span')}>Repair</span>
                        </p>
                    </Link>
                </div>
                <div className={cx('category')}>
                    <Link to={'/admin/view-report'} className={cx('function')}>
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

export default AdminSidebar;