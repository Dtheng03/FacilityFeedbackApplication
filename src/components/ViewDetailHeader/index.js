import classNames from "classnames/bind";
import style from "./ViewDetailHeader.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(style);

function ViewDetailHeader() {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p className={cx('title')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faWrench}></FontAwesomeIcon>
                    Facility Feedback <span className={cx('span')}>Application</span>
                </p>
                <div className={cx('home')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faEye} />
                    <span className={cx('span')}>View Detail Page</span>
                </div>
            </div>
        </div>
    );
}

export default ViewDetailHeader;