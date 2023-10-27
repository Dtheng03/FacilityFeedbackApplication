import classNames from "classnames/bind";
import style from "./AddFacilityPage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import AddFacilityContainer from "../../components/AddFacilityContainer";

const cx = classNames.bind(style);

function AddRoomPage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <AddFacilityContainer />
            </div>
        </>
    );
}

export default AddRoomPage;