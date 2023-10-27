import classNames from "classnames/bind";
import style from "./AddRoomPage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import AddRoomContainer from "../../components/AddRoomContainer";

const cx = classNames.bind(style);

function AddRoomPage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <AddRoomContainer />
            </div>
        </>
    );
}

export default AddRoomPage;