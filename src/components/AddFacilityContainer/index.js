import classNames from "classnames/bind";
import style from "./AddFacilityContainer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { addFacility, getAllFacilityType, getRoomType } from "../../api/api";
import { useState } from "react";

const cx = classNames.bind(style);

function AddFacilityContainer() {

    const [facilityType, setFaciltyType] = useState([]);
    const [roomType, setRoomType] = useState([]);
    const [listFT, setListFT] = useState([]);

    // state de control success/fail
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFail, setIsFail] = useState(false);

    // state error
    const [error, setError] = useState(false);

    const [info, setInfo] = useState({
        name: "",
        quantity: 1,
        facilityTypeId: 0,
        roomTypeId: 0
    });

    const handleName = (e) => {
        setInfo({
            ...info,
            name: e.target.value.trimStart()
        })
        if (e.target.value.length >= 2) {
            setError(false)
        } else {
            setError(true)
        }
    }

    const handleQuantity = (e) => {
        if (e.target.value > 0)
            setInfo({
                ...info,
                quantity: e.target.value
            })
    }

    const handleRoomType = (e) => {
        setInfo({
            ...info,
            roomTypeId: Number(e.target.value)
        })
        const ls = facilityType.filter(x => x.roomTypeId == e.target.value);
        setListFT(ls);
    }

    const handleFacilityType = (e) => {
        setInfo({
            ...info,
            facilityTypeId: Number(e.target.value)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(addFacility, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": info.name,
                "quantity": Number(info.quantity),
                "facilityTypeId": Number(info.facilityTypeId),
                "roomTypeId": Number(info.roomTypeId)
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data == true) {
                    setIsSuccess(true)
                } else {
                    setIsFail(true)
                }
            })
            .catch(error => setIsFail(true))
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [response1, response2] = await Promise.all([
                    fetch(getAllFacilityType),
                    fetch(getRoomType),
                ]);

                const jsonData1 = await response1.json();;
                const jsonData2 = await response2.json();;

                setFaciltyType(jsonData1);
                setRoomType(jsonData2);

            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>New Facility</h2>
                <form onSubmit={handleSubmit}>
                    <div className={cx('label')}>
                        <label className={cx('field')}>1.Name:</label>
                        <input
                            className={cx('input')}
                            type="text"
                            name='name'
                            value={info.name}
                            onChange={handleName}
                            required
                            maxLength={50}
                            autoFocus
                            placeholder="max 50 characters"
                        />
                    </div>
                    {error ? <p className={cx('error')}>Must at least 2 characters</p> : ""}
                    <div className={cx('label')}>
                        <label className={cx('field')}>2.Quantity:</label>
                        <input className={cx('input')} type="number" name="quantity" value={info.quantity} onChange={handleQuantity} required></input>
                    </div>
                    <div className={cx('label')}>
                        <label className={cx('field')}>3.Room Type:</label>
                        <select className={cx('input')} name="roomTypeId" required onChange={(e) => handleRoomType(e)} >
                            <option>-Choose room type-</option>
                            {roomType.map(rt => (
                                <option key={rt.id} value={rt.id}>{rt.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('label')}>
                        <label className={cx('field')}>4.Facility Type:</label>
                        <select className={cx('input')} name="facilityTypeId" required onChange={(e) => handleFacilityType(e)} >
                            <option>-Choose facility type-</option>
                            {listFT.map(ft => (
                                <option key={ft.id} value={ft.id} >{ft.name}</option>
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

export default AddFacilityContainer;