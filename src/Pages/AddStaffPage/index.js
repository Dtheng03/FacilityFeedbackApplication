import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import AddStaffContainer from "../../components/AddStaffContainer";

import classNames from "classnames/bind";
import style from './AddStaffPage.module.scss';

const cx = classNames.bind(style);

function AddStaffPage() {
    return (
        <div>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <AddStaffContainer />
            </div>
        </div>
    );
}

export default AddStaffPage;