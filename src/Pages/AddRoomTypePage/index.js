import classNames from "classnames/bind";
import style from "./AddRoomTypePage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import AddRoomTypeContainer from "../../components/AddRoomTypeContainer";

const cx = classNames.bind(style);

function AddRoomTypePage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <AddRoomTypeContainer />
            </div>
        </>
    );
}

export default AddRoomTypePage;