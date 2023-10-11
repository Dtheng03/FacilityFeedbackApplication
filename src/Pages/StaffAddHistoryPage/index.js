import StaffHeader from '../../components/StaffHeader';
import StaffSidebar from '../../components/StaffSidebar';
import StaffAddHistoryContainer from '../../components/StaffAddHistoryContainer';

import classNames from 'classnames/bind';
import style from './StaffAddHistoryPage.module.scss'

const cx = classNames.bind(style);

function StaffAddHistoryPage() {
    return (
        <div>
            <StaffHeader />
            <div className={cx('container')}>
                <StaffSidebar />
                <StaffAddHistoryContainer />
            </div>
        </div>
    );
}

export default StaffAddHistoryPage;