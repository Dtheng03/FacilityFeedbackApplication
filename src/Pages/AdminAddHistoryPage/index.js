import StaffHeader from '../../components/StaffHeader';
import AdminSidebar from '../../components/AdminSidebar';
import StaffAddHistoryContainer from '../../components/StaffAddHistoryContainer';

import classNames from 'classnames/bind';
import style from './AdminAddHistoryPage.module.scss';

const cx = classNames.bind(style);

function AdminAddHistoryPage() {
    return (
        <div>
            <StaffHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <StaffAddHistoryContainer />
            </div>
        </div>
    );
}

export default AdminAddHistoryPage;