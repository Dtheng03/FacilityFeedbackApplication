import StaffHeader from '../../components/StaffHeader';
import StaffSidebar from '../../components/StaffSidebar';
import StaffViewStaffContainer from '../../components/StaffViewStaffContainer';

import classNames from 'classnames/bind';
import style from './StaffViewStaffPage.module.scss';

const cx = classNames.bind(style);

function StaffViewStaffPage() {
    return (
        <div>
            <StaffHeader />
            <div className={cx('container')}>
                <StaffSidebar />
                <StaffViewStaffContainer />
            </div>
        </div>
    );
}

export default StaffViewStaffPage;