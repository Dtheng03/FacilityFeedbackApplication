import classNames from "classnames/bind";
import style from "./UpdateFacilityContainer.module.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findRoomById, getRoomType, updateRoom, updateStaffById } from "../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faFilePen } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function UpdateFacilityContainer() {

    const param = useParams();
    const navigate = useNavigate();

    // state chua info
    const [info, setInfo] = useState([]);

    // state roomtype
    const [roomTypes, setRoomTypes] = useState([]);

    // state update
    const [updateData, setUpdateData] = useState({
        roomName: "",
        roomTypeId: 0
    })

    // state thanh cong
    const [isSuccess, setIsSuccess] = useState(false);

    // state that bai
    const [isFail, setIsFail] = useState(false);

    useEffect(() => {
        fetch(findRoomById(param.id))
            .then(response => response.json())
            .then(data => {
                setInfo(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
        fetch(getRoomType)
            .then(response => response.json())
            .then(data => {
                setRoomTypes(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])

    // xu ly nhap lieu
    const handleChange = (event) => {
        setUpdateData({
            ...updateData,
            [event.target.name]: event.target.value
        })
    }

    // xu ly update
    const handleUpdate = async (event) => {
        try {
            const response = await fetch(updateRoom(param.id), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    'roomName': updateData.roomName,
                    'roomTypeId': updateData.roomTypeId
                })
            });

            if (response.ok) {
                setIsSuccess(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // xu ly huy 
    const handleCancle = () => {
        window.history.back();
    }

    // dong modal thanh cong
    const closeSuccesModal = () => {
        setIsSuccess(false);
        window.history.back();
    }

    // dong modal that bai
    const closeFailModal = () => {
        setIsFail(false);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Update Facility</h2>
                {info.map(room => (
                    <div key={room.id}>
                        <div className={cx('label')}>
                            <label className={cx('field')}>1. Id:</label>
                            <p className={cx('input')}>{room.id}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>2. Name:</label>
                            <input className={cx('input')} name="roomName" defaultValue={room.roomName} onChange={handleChange}></input>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>3. Quantity:</label>
                            <input className={cx('input')}></input>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>4. Facility Type:</label>
                            <p className={cx('input')}>{room.floorName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>5. Room Type:</label>
                            <p className={cx('input')}>{room.campusName}</p>
                        </div>
                        <div className={cx('label')}>
                            <button className={cx('btn')} onClick={handleCancle}>
                                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                            </button>
                            <button className={cx('btn')} onClick={handleUpdate}>
                                <FontAwesomeIcon icon={faFilePen}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show message when update successed */}
            <div>
                {isSuccess && (
                    <div className={cx('modal')}>
                        <div className={cx('modal-content')}>
                            <h2 className={cx('modal-title')}>Update Successfully!</h2>
                            <p className={cx('modal-info')}>Click the "OK" button to return to View-Staff.</p>
                            <button className={cx('close')} onClick={closeSuccesModal}>OK</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Show message when update failed */}
            <div>
                {isFail && (
                    <div className={cx('modal')}>
                        <div className={cx('modal-content')}>
                            <h2 className={cx('modal-title')}>Update Failed!</h2>
                            <p className={cx('modal-info')}>An error may occur during the update process.</p>
                            <p className={cx('modal-info')}>Please try again.</p>
                            <button className={cx('close')} onClick={closeFailModal}>OK</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UpdateFacilityContainer;