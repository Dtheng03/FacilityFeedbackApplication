import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import ViewDetailRoomContainer from "../../components/ViewDetailRoomContainer";

import classNames from "classnames/bind";
import style from "./ViewDetailRoomPage.module.scss";

const cx = classNames.bind(style);

function ViewDetailRoomPage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <ViewDetailRoomContainer />
            </div>
        </>
    );
}

export default ViewDetailRoomPage;