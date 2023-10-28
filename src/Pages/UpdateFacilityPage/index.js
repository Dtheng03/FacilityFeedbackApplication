import classNames from "classnames/bind";
import style from "./UpdateFacilityPage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import UpdateFacilityContainer from "../../components/UpdateFacilityContainer";

const cx = classNames.bind(style);

function UpdateFacilityPage() {
    return (
        <div>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <UpdateFacilityContainer />
            </div>
        </div>
    );
}

export default UpdateFacilityPage;