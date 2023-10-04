import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HomeContainer.module.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faEye, faSquarePlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HomeContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('button-group')}>
                <Link to='/create-feedback' className={cx('create')} >
                    <FontAwesomeIcon className={cx('icon')} icon={faSquarePlus}></FontAwesomeIcon>
                    New feedback
                </Link>
                <Link to='/view-feedback' className={cx('view')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faEye}></FontAwesomeIcon>
                    View feedback
                </Link>
            </div>
        </div>
    );
}

export default HomeContainer;