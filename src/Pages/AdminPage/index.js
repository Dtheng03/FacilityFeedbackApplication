import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import AdminContainer from "../../components/AdminContainer";

import classNames from "classnames/bind";
import style from './AdminPage.module.scss';

const cx = classNames.bind(style);

function AdminPage() {
    return (
        <div>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <AdminContainer />
            </div>
        </div>
    );
}

export default AdminPage;