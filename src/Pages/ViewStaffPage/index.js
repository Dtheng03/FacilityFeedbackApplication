import StaffHeader from "../../components/StaffHeader";
import AdminSidebar from "../../components/AdminSidebar";
import ViewStaffContainer from "../../components/ViewStaffContainer";

import classNames from "classnames/bind";
import style from './ViewStaffPage.module.scss';

const cx = classNames.bind(style);

function ViewStafPage() {
    return (
        <div>
            <StaffHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <ViewStaffContainer />
            </div>
        </div>
    );
}

export default ViewStafPage;
