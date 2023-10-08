import StaffHeader from '../../components/StaffHeader';
import AdminSidebar from '../../components/AdminSidebar';
import StaffViewFeedbackContainer from '../../components/StaffViewFeedbackContainer';

import classNames from 'classnames/bind';
import style from './AdminViewFeedbackPage.module.scss';

const cx = classNames.bind(style);

function AdminViewFeedbackPage() {
    return (
        <div>
            <StaffHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <StaffViewFeedbackContainer />
            </div>
        </div>
    );
}

export default AdminViewFeedbackPage;