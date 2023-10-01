import styles from './HomeContainer.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HomeContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('button-group')}>
                <button className={cx('create')} >Create feedback</button>
                <button className={cx('view')}>View feedback history</button>
            </div>
        </div>
    );
}

export default HomeContainer;