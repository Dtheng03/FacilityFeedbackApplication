import StaffHeader from '../../components/StaffHeader';
import AdminSidebar from '../../components/AdminSidebar';
import StaffViewHistoryContainer from '../../components/StaffViewHistoryContainer';

import classNames from 'classnames/bind';
import style from './AdminViewHistoryPage.module.scss';

const cx = classNames.bind(style);

function AdminViewHistoryPage() {
    return (
        <div>
            <StaffHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <StaffViewHistoryContainer />
            </div>
        </div>
    );
}

export default AdminViewHistoryPage;