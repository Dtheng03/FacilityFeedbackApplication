import classNames from "classnames/bind";
import styles from "./StatisticPage.module.scss";
import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import StatisticContainer from "../../components/StatisticContainer";

const cx = classNames.bind(styles);

function StatisticPage() {
    return (
        <>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <StatisticContainer />
            </div>
        </>
    );
}

export default StatisticPage;