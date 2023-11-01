import classNames from "classnames/bind";
import style from "./AddFacilityTypeContainer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import { addFacilityType, getRoomType } from "../../api/api";

const cx = classNames.bind(style);

function AddFacilityTypeContainer() {

    const [roomType, setRoomType] = useState([]);

    // state de control success/fail
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFail, setIsFail] = useState(false);

    // state error
    const [error, setError] = useState(false);

    const [info, setInfo] = useState({
        name: "",
        roomTypeId: 1
    })

    const handleChangeName = (e) => {
        if (e.target.value.length < 6) {
            setError(true);
        } else {
            setError(false);
        }
        setInfo({
            ...info,
            [e.target.name]: e.target.value.trimStart()
        })
    }

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value.trimStart()
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (error == false)
            fetch(addFacilityType, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": info.name,
                    "roomTypeId": info.roomTypeId
                })
            })
                .then(res => {
                    if (res.ok) {
                        setIsSuccess(true)
                    }
                    else {
                        setIsFail(true)
                    }
                }
                )
                .catch(error => setIsFail(true))
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [response1] = await Promise.all([
                    fetch(getRoomType),
                ]);

                const jsonData1 = await response1.json();;

                setRoomType(jsonData1);

            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>New Facility Type</h2>
                <form onSubmit={handleSubmit}>
                    <div className={cx('label')}>
                        <label className={cx('field')}>1.Name:</label>
                        <input
                            className={cx('input')}
                            type="text"
                            name="name"
                            value={info.name}
                            onChange={handleChangeName}
                            required
                            maxLength={50}
                            autoFocus
                        />
                    </div>
                    {error ? <p className={cx('error')}>Must at least 6 characters</p> : ""}
                    <div className={cx('label')}>
                        <label className={cx('field')}>2.Room Type:</label>
                        <select className={cx('input')} type="text" name="roomTypeId" onChange={handleChange}>
                            {roomType.map(rt => (
                                <option key={rt.id} value={rt.id}>{rt.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('label')}>
                        <button className={cx('btn')} type="reset" onClick={() => { window.history.back() }}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </button>
                        <button className={cx('btn')} type="submit">
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
                                <p className={cx('modal-info')}>Please try again.</p>
                                <button className={cx('close')} onClick={() => { setIsFail(false) }}>OK</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddFacilityTypeContainer;