import classNames from "classnames/bind";
import style from "./AddFacilityProblemPage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import AddFacilityProblemContainer from "../../components/AddFacilityProblemContainer";

const cx = classNames.bind(style);

function AddFacilityProblemPage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <AddFacilityProblemContainer />
            </div>
        </>
    );
}

export default AddFacilityProblemPage;