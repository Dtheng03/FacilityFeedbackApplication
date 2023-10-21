import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import AdminViewDetailStaffContainer from "../../components/AdminViewDetailStaffContainer";

import classNames from "classnames/bind";
import style from "./AdminViewDetailStaffPage.module.scss";

const cx = classNames.bind(style);

function AdminViewDetailStaffPage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <AdminViewDetailStaffContainer />
            </div>
        </>
    );
}

export default AdminViewDetailStaffPage;