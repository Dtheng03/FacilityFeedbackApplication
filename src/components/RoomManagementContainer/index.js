import classNames from "classnames/bind";
import style from "./RoomManagementContainer.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function RoomManagementContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Room Management</h2>
                <Link to={'/admin/view-room'} className={cx('link')}>Room</Link>
                <Link to={'/admin/view-room-type'} className={cx('link')}>Room Type</Link>
            </div>
        </div>
    );
}

export default RoomManagementContainer;