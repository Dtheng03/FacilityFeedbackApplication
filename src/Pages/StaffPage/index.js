import StaffHeader from '../../components/StaffHeader';
import StaffSidebar from '../../components/StaffSidebar';
import StaffContainer from '../../components/StaffContainer';

import classNames from 'classnames/bind';
import style from './StaffPage.module.scss';

const cx = classNames.bind(style);

function StaffPage() {
    return (
        <div>
            <StaffHeader />
            <div className={cx('container')}>
                <StaffSidebar />
                <StaffContainer />
            </div>
        </div>
    );
}

export default StaffPage;