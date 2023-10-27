import classNames from "classnames/bind";
import style from "./ViewFacilityPage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import ViewFacilityContainer from "../../components/ViewFacilityContainer"

const cx = classNames.bind(style);

function ViewFacilityPage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <ViewFacilityContainer />
            </div>
        </>
    );
}

export default ViewFacilityPage;