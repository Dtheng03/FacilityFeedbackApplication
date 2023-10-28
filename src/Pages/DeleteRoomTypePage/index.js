import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar';
import DeleteRoomTypeContainer from '../../components/DeleteRoomTypeContainer';

import classNames from "classnames/bind";
import style from "./DeleteRoomTypePage.module.scss";

const cx = classNames.bind(style);

function DeleteRoomTypePage() {
    return (
        <div>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <DeleteRoomTypeContainer />
            </div>
        </div>
    );
}

export default DeleteRoomTypePage;