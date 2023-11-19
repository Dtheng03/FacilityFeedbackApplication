import StaffHeader from "../../components/StaffHeader";
import StaffSidebar from "../../components/StaffSidebar";
import TaskContainer from "../../components/TaskContainer";
import classNames from "classnames/bind";
import style from "./StaffTaskPage.module.scss";

const cx = classNames.bind(style);

function StaffTaskPage() {
    return (
        <>
            <StaffHeader />
            <div className={cx('container')}>
                <StaffSidebar />
                <TaskContainer />
            </div>
        </>
    );
}

export default StaffTaskPage;