import classNames from "classnames/bind";
import style from "./ViewRoomPage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import ViewRoomContainer from "../../components/ViewRoomContainer";

const cx = classNames.bind(style);

function ViewRoomPage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <ViewRoomContainer />
            </div>
        </>
    );
}

export default ViewRoomPage;