import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import AdminViewStaffContainer from "../../components/AdminViewStaffContainer";

import classNames from "classnames/bind";
import style from './AdminViewStaffPage.module.scss';

const cx = classNames.bind(style);

function AdminViewStaffPage() {
    return (
        <div>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <AdminViewStaffContainer />
            </div>
        </div>
    );
}

export default AdminViewStaffPage;
