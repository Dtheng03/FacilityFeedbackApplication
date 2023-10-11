import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar';
import StaffViewReportContainer from '../../components/StaffViewReportContainer';

import classNames from 'classnames/bind';
import style from './AdminViewReportPage.module.scss';

const cx = classNames.bind(style);

function AdminViewReportPage() {
    return (
        <div>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <StaffViewReportContainer />
            </div>
        </div>
    );
}

export default AdminViewReportPage;