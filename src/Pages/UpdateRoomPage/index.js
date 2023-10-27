import classNames from "classnames/bind";
import style from "./UpdateRoomPage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import UpdateRoomContainer from "../../components/UpdateRoomContainer";

const cx = classNames.bind(style);

function UpdateRoomPage() {
    return (
        <div>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <UpdateRoomContainer />
            </div>
        </div>
    );
}

export default UpdateRoomPage;