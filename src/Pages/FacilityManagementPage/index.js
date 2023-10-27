import classNames from "classnames/bind";
import style from "./FacilityManagementPage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import FacilityManagementContainer from "../../components/FacilityManagementContainer";

const cx = classNames.bind(style);

function FacilityManagementPage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <FacilityManagementContainer />
            </div>
        </>
    );
}

export default FacilityManagementPage;