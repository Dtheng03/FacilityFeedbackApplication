import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import TaskContainer from "../../components/TaskContainer";
import classNames from "classnames/bind";
import style from "./AdminTaskPage.module.scss";

const cx = classNames.bind(style);

function AdminTaskPage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <TaskContainer />
            </div>
        </>
    );
}

export default AdminTaskPage;