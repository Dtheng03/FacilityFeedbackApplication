import classNames from "classnames/bind";
import style from "./UpdateStaffContainer.module.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const cx = classNames.bind(style);

function UpdateStaffContainer() {

    const param = useParams();
    const navigate = useNavigate();

    // state chua info
    const [staff, setStaff] = useState({
        id: 0,
        fullName: "",
        loginName: "",
        password: "",
        manager: false,
        campusId: 0
    })

    useEffect(() => {
        fetch(`http://localhost:8080/api/staff/find/${param.id}`)
            .then(response => response.json())
            .then(data => {
                setStaff(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])

    // xu ly nhap lieu
    const handleChange = (event) => {
        setStaff({
            ...staff,
            [event.target.name]: event.target.value
        })
    }

    // xu ly update
    const handleUpdate = async (event) => {
        try {
            const response = await fetch(`http://localhost:8080/api/staff/update/${staff.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password: staff.password,
                    campusId: staff.campusId,
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
        navigate('/admin/view-staff')
    }

    // state thanh cong
    const [isSuccess, setIsSuccess] = useState(false);

    // dong modal thanh cong
    const closeSuccesModal = () => {
        setIsSuccess(false);
        navigate('/admin/view-staff')
    }

    // state that bai
    const [isFail, setIsFail] = useState(false);

    // dong modal that bai
    const closeFailModal = () => {
        setIsFail(false);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Update Staff</h2>
                <div className={cx('form')}>
                    <div className={cx('label')}>
                        <label className={cx('field')}>1. Id:</label>
                        <p className={cx('input')}>{staff.id}</p>
                    </div>
                    <div className={cx('label')}>
                        <label className={cx('field')}>2. FullName:</label>
                        <p className={cx('input')}>{staff.fullName}</p>
                    </div>
                    <div className={cx('label')}>
                        <label className={cx('field')}>3. LoginName:</label>
                        <p className={cx('input')}>{staff.loginName}</p>
                    </div>
                    <div className={cx('label')}>
                        <label className={cx('field')}>4. Password:</label>
                        <input className={cx('input')} name="password" type="text" value={staff.password} onChange={(e) => handleChange(e)}></input>
                    </div>
                    <div className={cx('label')}>
                        <label className={cx('field')}>5. Manager:</label>
                        <input className={cx('input')} type="checkbox" checked={staff.manager} disabled></input>
                    </div>
                    <div className={cx('label')}>
                        <label className={cx('field')}>6. Campus:</label>
                        <select className={cx('input')} type="text" name="campusId" value={staff.campusId} onChange={(e) => handleChange(e)} >
                            <option value={0}>Choose Campus</option>
                            <option value={1} >Hà Nội</option>
                            <option value={2} >Hồ Chí Minh</option>
                            <option value={3} >Đà Nẵng</option>
                            <option value={4} >Quy Nhơn</option>
                            <option value={5} >Cần Thơ</option>
                        </select>
                    </div>
                    <div className={cx('label')}>
                        <button className={cx('btn')} onClick={handleUpdate}>Update</button>
                        <button className={cx('btn')} onClick={handleCancle}>Cancel</button>
                    </div>
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
        </div>
    );
}

export default UpdateStaffContainer;