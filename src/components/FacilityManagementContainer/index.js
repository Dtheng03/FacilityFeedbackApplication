import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./FacilityManagementContainer.module.scss";

const cx = classNames.bind(style);

function FacilityManagementContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Facility Management</h2>
                <Link to={'/admin/view-facility'} className={cx('link')}>Facility</Link>
                <Link to={'/admin/view-facility-type'} className={cx('link')}>Facility Type</Link>
                <Link to={'/admin/view-facility-problem'} className={cx('link')}>Facility Problem</Link>
            </div>
        </div>
    );
}

export default FacilityManagementContainer;