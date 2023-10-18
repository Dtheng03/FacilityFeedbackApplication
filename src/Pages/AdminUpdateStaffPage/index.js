import classNames from "classnames/bind";
import style from "./AdminUpdateStaffPage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import UpdateStaffContainer from "../../components/UpdateStaffContainer";

const cx = classNames.bind(style);

function AdminUpdateStaffPage() {
    return (
        <div>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <UpdateStaffContainer />
            </div>
        </div>
    );
}

export default AdminUpdateStaffPage;