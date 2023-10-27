import classNames from "classnames/bind";
import style from "./AddRoomContainer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function AddRoomContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>New Room</h2>
                <div className={cx('label')}>
                    <label className={cx('field')}>1.Room:</label>
                    <input className={cx('input')} type="text"></input>
                </div>
                <div className={cx('label')}>
                    <label className={cx('field')}>2.Room Type:</label>
                    <select className={cx('input')} type="text"></select>
                </div>
                <div className={cx('label')}>
                    <label className={cx('field')}>3.Floor:</label>
                    <select className={cx('input')} type="text"></select>
                </div>
                <div className={cx('label')}>
                    <button className={cx('btn')} onClick={() => { window.history.back() }}>
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                    </button>
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddRoomContainer;