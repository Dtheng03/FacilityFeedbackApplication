import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './ViewFeedbackContainer.module.scss'
import classNames from 'classnames/bind';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function ViewFeedbackContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p>View feedback</p>
                <div className={cx('search')}>
                    <label className={cx('label')}>For campus:</label>
                    <select id="campus" className={cx('select')} >
                        <option value={'0'} >- Choose your campus -</option>
                        <option value={'1'} >Hà Nội</option>
                        <option value={'2'} >Hồ Chí Minh</option>
                        <option value={'3'} >Đà Nẵng</option>
                        <option value={'4'} >Quy Nhơn</option>
                        <option value={'5'} >Cần Thơ</option>
                    </select>
                    <button className={cx('btn')}><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
}

export default ViewFeedbackContainer;