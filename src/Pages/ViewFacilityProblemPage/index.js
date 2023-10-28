import classNames from "classnames/bind";
import style from "./ViewFacilityProblemPage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import ViewFacilityProblemContainer from "../../components/ViewFacilityProblemContainer"

const cx = classNames.bind(style);

function ViewFacilityProblemPage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <ViewFacilityProblemContainer />
            </div>
        </>
    );
}

export default ViewFacilityProblemPage;