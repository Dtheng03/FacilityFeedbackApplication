import StaffHeader from '../../components/StaffHeader';
import StaffSidebar from '../../components/StaffSidebar'
import StaffViewHistoryContainer from '../../components/StaffViewHistoryContainer';

import classNames from 'classnames/bind';
import style from './StaffViewHistoryPage.module.scss';

const cx = classNames.bind(style);

function StaffViewHistoryPage() {
    return (
        <div>
            <StaffHeader />
            <div className={cx('container')}>
                <StaffSidebar />
                <StaffViewHistoryContainer />
            </div>
        </div>
    );
}

export default StaffViewHistoryPage;