import classNames from "classnames/bind";
import styles from "./AssignPage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import AssignContainer from "../../components/AssignContainer";

const cx = classNames.bind(styles);

function AssignPage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <AssignContainer />
            </div>
        </>
    );
}

export default AssignPage;