import classNames from "classnames/bind";
import style from "./AssignContainer.module.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getStaffByCampusId, assign } from "../../api/api";

const cx = classNames.bind(style);

function AssignContainer() {
    const navigate = useNavigate();

    // lay token va chuyen thanh data
    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    // lay feedbackId dc luu trong local neu co
    const feedbackId = sessionStorage.getItem('feedbackId');

    // tao state hien thi thanh cong || that bai
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFail, setIsFail] = useState(false);

    // tao state chua du lieu
    const [staffId, setStaffId] = useState(0);

    const [listStaff, setListStaff] = useState([]);

    // xu ly nhap du lieu
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setStaffId(Number(event.target.value));
    };

    // xu ly tao repair history
    const handleSubmit = async (event) => {
        event.preventDefault();

        fetch(assign(feedbackId), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "staffId": staffId
            })
        })
            .then(response => {
                // Handle the response
                setIsSuccess(true);

            })
            .catch(error => {
                // Handle any errors
                setIsFail(true);
            });
    };

    // xu ly dong modal success
    const closeSuccessModal = () => {
        setIsSuccess(false);
        navigate(`/admin/view-feedback`);
    };

    // xu ly dong modal fail
    const closeFailModal = () => {
        setIsFail(false);
    };

    useEffect(() => {
        fetch(getStaffByCampusId(sessionData.campusId))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle the JSON data
                setListStaff(data);
            })
            .catch(error => {
                // Handle any errors
                console.log(error.message);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Assign to Staff</h2>
                <form className={cx('form')} onSubmit={handleSubmit}>

                    {/* nhap feedbackId */}
                    <div className={cx('label')} >
                        <label className={cx('field')}>1. FeedbackId *</label>
                        <input className={cx('input')} type="number" required name="feedbackId" value={feedbackId} disabled />
                    </div>

                    {/* hien thi staff id */}
                    <div className={cx('label')} >
                        <label className={cx('field')}>2. Staff *</label>
                        <select className={cx('input')} type="text" required onChange={handleInputChange}>
                            <option value={0}>Choose Staff</option>
                            {listStaff.map(staff => (
                                <option key={staff.id} value={staff.id}>{staff.fullName}</option>
                            ))}
                        </select>
                    </div>

                    {/* nut submit */}
                    <button className={cx('btn')} type="submit">
                        ASSIGN
                        <FontAwesomeIcon className={cx('icon')} icon={faThumbTack}></FontAwesomeIcon>
                    </button>
                </form>

                {/* Add success */}
                <div>
                    {isSuccess && (
                        <div className={cx('modal')}>
                            <div className={cx('modal-content')}>
                                <h2 className={cx('modal-title')}>Assign Successfully!</h2>
                                <button className={cx('close')} onClick={closeSuccessModal}>OK</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Add fail */}
                <div>
                    {isFail && (
                        <div className={cx('modal')}>
                            <div className={cx('modal-content')}>
                                <h2 className={cx('modal-title')}>Assign Failed!</h2>
                                <p className={cx('modal-info')}>Please check again.</p>
                                <button className={cx('close')} onClick={closeFailModal}>OK</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AssignContainer;