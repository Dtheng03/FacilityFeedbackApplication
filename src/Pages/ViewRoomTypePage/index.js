import classNames from "classnames/bind";
import style from "./ViewRoomTypePage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import ViewRoomTypeContainer from "../../components/ViewRoomTypeContainer";

const cx = classNames.bind(style);

function ViewRoomTypePage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <ViewRoomTypeContainer />
            </div>
        </>
    );
}

export default ViewRoomTypePage;