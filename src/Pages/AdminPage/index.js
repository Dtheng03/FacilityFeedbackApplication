import StaffHeader from "../../components/StaffHeader";
import AdminSidebar from "../../components/AdminSidebar";
import StaffContainer from "../../components/StaffContainer";
import { Route, Routes } from "react-router-dom";

import classNames from "classnames/bind";
import style from './AdminPage.module.scss';

const cx = classNames.bind(style);

function AdminPage() {
    return (
        <div>
            <StaffHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <Routes>
                    <Route path="" element={<StaffContainer />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default AdminPage;