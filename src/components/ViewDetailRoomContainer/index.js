import classNames from "classnames/bind";
import style from "./ViewDetailRoomContainer.module.scss";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { findRoomById } from "../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faFilePen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function ViewDetailRoomContainer() {

    const param = useParams();
    const [room, setRoom] = useState([]);

    useEffect((() => {
        fetch(findRoomById(param.id))
            .then(response => response.json())
            .then(data => setRoom(data))
            .catch(error => { console.log(error); })
    }), [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Detail Room</h2>
                {room.map(r => (
                    <div key={r.id}>
                        <div className={cx('label')}>
                            <label className={cx('field')}>1. Id:</label>
                            <p className={cx('input')}>{r.id}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>2. Room:</label>
                            <p className={cx('input')}>{r.roomName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>3. Room Type:</label>
                            <p className={cx('input')}>{r.roomTypeName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>4. Floor:</label>
                            <p className={cx('input')}>{r.floorName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>5. Campus:</label>
                            <p className={cx('input')}>{r.campusName}</p>
                        </div>
                        <div className={cx('label')}>
                            <button className={cx('btn')} onClick={() => { window.history.back(); }}>
                                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                            </button>
                            <button className={cx('btn')}>
                                <Link className={cx('link')} to={`/admin/update-room/${r.id}`}>
                                    <FontAwesomeIcon icon={faFilePen}></FontAwesomeIcon>
                                </Link>
                            </button>
                            <button className={cx('btn')}>
                                <Link className={cx('link')} to={`/admin/delete-room/${r.id}`}>
                                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                                </Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewDetailRoomContainer;