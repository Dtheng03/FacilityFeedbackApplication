import styles from './HomeContainer.module.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function HomeContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('button-group')}>
                <Link to='/create-feedback' className={cx('create')} >Create feedback</Link>
                <Link to='/view-feedback' className={cx('view')}>View feedback</Link>
            </div>
        </div>
    );
}

export default HomeContainer;