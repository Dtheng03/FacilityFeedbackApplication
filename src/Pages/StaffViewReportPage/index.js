import StaffHeader from '../../components/StaffHeader';
import StaffSidebar from '../../components/StaffSidebar';
import StaffViewReportContainer from '../../components/StaffViewReportContainer';

import classNames from 'classnames/bind';
import style from './StaffViewReportPage.module.scss';

const cx = classNames.bind(style);

function StaffViewReportPage() {
    return (
        <div>
            <StaffHeader />
            <div className={cx('container')}>
                <StaffSidebar />
                <StaffViewReportContainer />
            </div>
        </div>
    );
}

export default StaffViewReportPage;