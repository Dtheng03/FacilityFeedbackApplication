import classNames from "classnames/bind";
import style from "./ViewFacilityTypePage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import ViewFacilityTypeContainer from "../../components/ViewFacilityTypeContainer"

const cx = classNames.bind(style);

function ViewFacilityTypePage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <ViewFacilityTypeContainer />
            </div>
        </>
    );
}

export default ViewFacilityTypePage;