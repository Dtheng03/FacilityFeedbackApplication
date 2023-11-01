import classNames from "classnames/bind";
import style from "./UpdateFacilityContainer.module.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findFacilityById, findRoomById, getRoomType, updateFacility, updateRoom, updateStaffById } from "../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faFilePen } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function UpdateFacilityContainer() {

    const param = useParams();
    const navigate = useNavigate();

    // state chua info
    const [info, setInfo] = useState({});

    // state thanh cong
    const [isSuccess, setIsSuccess] = useState(false);

    // state that bai
    const [isFail, setIsFail] = useState(false);

    const [errName, setErrName] = useState(false);
    const [errQuantity, setErrQuantity] = useState(false);

    useEffect(() => {
        fetch(findFacilityById(param.id))
            .then(response => response.json())
            .then(data => {
                setInfo(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])

    // xu ly nhap lieu
    const handleChangeName = (event) => {
        if (event.target.value.length >= 2 && event.target.value[0] != " ") {
            setInfo({
                ...info,
                [event.target.name]: event.target.value.trimStart()
            })
            setErrName(false)
        } else {
            setErrName(true)
        }
    }

    const handleChangeQuantity = (event) => {
        if (event.target.value > 0) {
            setInfo({
                ...info,
                [event.target.name]: Number(event.target.value)
            })
            setErrQuantity(false)
        } else if (event.target.value <= 0) {
            setErrQuantity(true)
        }
    }

    // xu ly update
    const handleUpdate = async (event) => {
        event.preventDefault();
        if (errName == false && errQuantity == false)
            try {
                const response = await fetch(updateFacility(param.id), {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        'name': info.name,
                        'quantity': info.quantity
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
                <form onSubmit={handleUpdate}>
                    <div className={cx('label')}>
                        <label className={cx('field')}>1. Id:</label>
                        <p className={cx('input')}>{info.id}</p>
                    </div>
                    <div className={cx('label')}>
                        <label className={cx('field')}>2. Name:</label>
                        <input
                            className={cx('input')}
                            type="text"
                            name="name"
                            maxLength={50}
                            placeholder="max 50 characters"
                            defaultValue={info.name}
                            onChange={handleChangeName}
                        />
                    </div>
                    {errName ? <p className={cx('error')}>Must at least 2 characters and not begin with space</p> : ""}

                    <div className={cx('label')}>
                        <label className={cx('field')}>3. Quantity:</label>
                        <input
                            className={cx('input')}
                            type="number"
                            name="quantity"
                            defaultValue={info.quantity}
                            onChange={handleChangeQuantity}
                        />
                    </div>
                    {errQuantity ? <p className={cx('error')}>Quantity must have at least 1</p> : ""}

                    <div className={cx('label')}>
                        <button className={cx('btn')} onClick={handleCancle} type="reset">
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </button>
                        <button className={cx('btn')} type="submit">
                            <FontAwesomeIcon icon={faFilePen}></FontAwesomeIcon>
                        </button>
                    </div>
                </form>
            </div>

            {/* Show message when update successed */}
            <div>
                {isSuccess && (
                    <div className={cx('modal')}>
                        <div className={cx('modal-content')}>
                            <h2 className={cx('modal-title')}>Update Successfully!</h2>
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