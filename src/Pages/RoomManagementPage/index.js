import classNames from "classnames/bind";
import style from "./RoomManagementPage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import RoomManagementContainer from "../../components/RoomManagementContainer";

const cx = classNames.bind(style);

function RoomManagementPage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <RoomManagementContainer />
            </div>
        </>
    );
}

export default RoomManagementPage;