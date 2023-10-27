import classNames from "classnames/bind";
import style from "./AddFacilityTypePage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import AddFacilityTypeContainer from "../../components/AddFacilityTypeContainer";

const cx = classNames.bind(style);

function AddFacilityTypePage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <AddFacilityTypeContainer />
            </div>
        </>
    );
}

export default AddFacilityTypePage;