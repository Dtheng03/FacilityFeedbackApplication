import classNames from "classnames/bind";
import style from "./AddRoomContainer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { addRoom, getFloorByCampusId, getRoomType } from "../../api/api";
import { useState } from "react";

const cx = classNames.bind(style);

function AddRoomContainer() {

    // lay Token va chuyen thanh data
    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    // state chua data
    const [roomTypes, setRoomType] = useState([]);
    const [floors, setFloors] = useState([]);

    // state chua info
    const [info, setInfo] = useState({
        name: "",
        roomTypeId: 1,
        floorId: 1,
        campusId: sessionData.campusId
    });

    // state de control success/fail
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFail, setIsFail] = useState(false);

    // nhap du lieu
    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: [e.target.value.trimStart()]
        })
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(addRoom, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": String(info.name),
                    "roomTypeId": Number(info.roomTypeId),
                    "floorId": Number(info.floorId),
                    "campusId": Number(info.campusId)
                })
            })

            // lay ra response body
            const responseBody = await response.json();

            // perform logic
            if (response.ok) {
                if (responseBody) {
                    // if success
                    setIsSuccess(true);
                } else {
                    // if fail
                    setIsFail(true);
                }
            } else {
                // if fail
                setIsFail(true);
            }

            // reset data
            setInfo({
                name: "",
                roomTypeId: 1,
                floorId: 1,
                campusId: sessionData.campusId
            });
        } catch (error) {
            // if fail
            setIsFail(true);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [response1, response2] = await Promise.all([
                    fetch(getRoomType),
                    fetch(getFloorByCampusId(sessionData.campusId)),
                ]);

                const jsonData1 = await response1.json();;
                const jsonData2 = await response2.json();;

                setRoomType(jsonData1);
                setFloors(jsonData2);

            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>New Room</h2>

                <form onSubmit={handleAdd}>
                    <div className={cx('label')}>
                        <label className={cx('field')}>1.Room:</label>
                        <input
                            className={cx('input')}
                            type="text"
                            name='name'
                            value={info.name}
                            onChange={handleChange}
                            required
                            autoFocus
                            maxLength={10}
                            placeholder="max 10 characters"
                        />
                    </div>
                    <div className={cx('label')}>
                        <label className={cx('field')}>2.Room Type:</label>
                        <select className={cx('input')} type="text" name="roomTypeId" value={info.roomTypeId} onChange={handleChange} required>
                            {roomTypes.map(roomType => (
                                <option key={roomType.id} value={roomType.id}>{roomType.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('label')}>
                        <label className={cx('field')}>3.Floor:</label>
                        <select className={cx('input')} type="text" name="floorId" value={info.floorId} onChange={handleChange} required>
                            {floors.map(floor => (
                                <option key={floor.id} value={floor.id}>{floor.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('label')}>
                        <button className={cx('btn')} onClick={() => { window.history.back() }}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </button>
                        <button className={cx('btn')} >
                            <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
                        </button>
                    </div>
                </form>

                {/* Add success */}
                <div>
                    {isSuccess && (
                        <div className={cx('modal')}>
                            <div className={cx('modal-content')}>
                                <h2 className={cx('modal-title')}>Add Successfully!</h2>
                                <button className={cx('close')} onClick={() => { setIsSuccess(false) }}>OK</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Add fail */}
                <div>
                    {isFail && (
                        <div className={cx('modal')}>
                            <div className={cx('modal-content')}>
                                <h2 className={cx('modal-title')}>Add Failed!</h2>
                                <p className={cx('modal-info')}>The information may not be satisfied or may already exist.</p>
                                <p className={cx('modal-info')}>Please check all information again.</p>
                                <button className={cx('close')} onClick={() => { setIsFail(false) }}>OK</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddRoomContainer;