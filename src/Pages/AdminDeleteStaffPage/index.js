import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar';
import DeleteStaffContainer from '../../components/DeleteStaffContainer';

import classNames from "classnames/bind";
import style from "./AdminDeleteStaffPage.module.scss";

const cx = classNames.bind(style);

function AdminDeleteStaffPage() {
    return (
        <div>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <DeleteStaffContainer />
            </div>
        </div>
    );
}

export default AdminDeleteStaffPage;