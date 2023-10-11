import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar';
import StaffViewHistoryContainer from '../../components/StaffViewHistoryContainer';

import classNames from 'classnames/bind';
import style from './AdminViewHistoryPage.module.scss';

const cx = classNames.bind(style);

function AdminViewHistoryPage() {
    return (
        <div>
            <AdminHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <StaffViewHistoryContainer />
            </div>
        </div>
    );
}

export default AdminViewHistoryPage;