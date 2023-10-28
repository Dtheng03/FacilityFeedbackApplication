import classNames from "classnames/bind";
import style from "./AddFacilityProblemContainer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function AddFacilityProblemContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>New Facility Problem</h2>
                <div className={cx('label')}>
                    <label className={cx('field')}>1.Name:</label>
                    <input className={cx('input')} type="text"></input>
                </div>
                <div className={cx('label')}>
                    <label className={cx('field')}>2.Facility Type:</label>
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

export default AddFacilityProblemContainer;