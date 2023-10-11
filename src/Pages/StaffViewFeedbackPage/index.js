import StaffHeader from '../../components/StaffHeader';
import StaffSidebar from '../../components/StaffSidebar';
import StaffViewFeedbackContainer from '../../components/StaffViewFeedbackContainer';

import classNames from 'classnames/bind';
import style from './StaffViewFeedbackPage.module.scss';

const cx = classNames.bind(style);

function StaffViewFeedbackPage() {
    return (
        <div>
            <StaffHeader />
            <div className={cx('container')}>
                <StaffSidebar />
                <StaffViewFeedbackContainer />
            </div>
        </div>
    );
}

export default StaffViewFeedbackPage;