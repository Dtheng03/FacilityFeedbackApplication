import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar';
import DeleteRoomContainer from '../../components/DeleteRoomContainer';

import classNames from "classnames/bind";
import style from "./DeleteRoomPage.module.scss";

const cx = classNames.bind(style);

function DeleteRoomPage() {
    return (
        <div>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <DeleteRoomContainer />
            </div>
        </div>
    );
}

export default DeleteRoomPage;