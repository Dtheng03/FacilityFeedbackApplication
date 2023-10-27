import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import style from "./AddRoomTypeContainer.module.scss";

const cx = classNames.bind(style);

function AddRoomTypeContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>New Room Type</h2>
                <div className={cx('label')}>
                    <label className={cx('field')}>1.Room Type:</label>
                    <input className={cx('input')} type="text"></input>
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

export default AddRoomTypeContainer;