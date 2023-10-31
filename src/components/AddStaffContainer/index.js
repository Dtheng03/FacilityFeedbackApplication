import classNames from "classnames/bind";
import style from './AddStaffContainer.module.scss';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { addStaff } from "../../api/api";

const cx = classNames.bind(style);

function AddStaffContainer() {

    // lay Token va chuyen thanh data
    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    // tao form chua info
    const [formData, setFormData] = useState({
        fullName: '',
        loginName: '',
        passWord: '',
        isManager: false,
        campusId: sessionData.campusId
    });

    // tao state validate
    const error = {
        fullName: "FullName must have at least 6 characters",
        loginName: "LoginName must have at least 5 characters",
        passWord: "Password must have at least 6 characters"
    };

    // state de check manager
    const [isChecked, setIsChecked] = useState(false);

    // state de control success/fail
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFail, setIsFail] = useState(false);

    // xu ly nhap info
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value.trimStart()
        });
    };

    const handleInputChangeLogin = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value.trim()
        });
    };

    // xu ly check manager
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        setFormData({
            ...formData,
            [event.target.name]: event.target.checked
        });
    };

    // xu ly add staff
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Call API to create new staff member using formData
        if (formData.fullName.length >= 6
            && formData.loginName.length >= 5
            && formData.passWord.length >= 6) {
            try {
                const response = await fetch(addStaff, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "fullName": formData.fullName,
                        "loginName": formData.loginName,
                        "password": formData.passWord,
                        "campusId": formData.campusId,
                        "manager": formData.isManager
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
                setFormData({
                    ...formData,
                    fullName: '',
                    loginName: '',
                    passWord: '',
                    isManager: false
                });
                setIsChecked(false);
            } catch (error) {
                // if fail
                setIsFail(true);
            }
        }
    };

    // xu ly dong modal success
    const closeSuccessModal = () => {
        setIsSuccess(false);
    };

    // xu ly dong modal fail
    const closeFailModal = () => {
        setIsFail(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>New Staff</h2>

                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div className={cx('label')} >
                        <label className={cx('field')}>1. FullName *</label>
                        <input
                            className={cx('input')}
                            type="text"
                            required
                            maxLength={50}
                            placeholder="Max 50 characters"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange} />
                    </div>
                    {(formData.fullName.length < 6 && formData.fullName != "") ? <p className={cx('error')}>{error.fullName}</p> : ""}

                    <div className={cx('label')} >
                        <label className={cx('field')}>2. LoginName *</label>
                        <input
                            className={cx('input')}
                            type="text"
                            required
                            maxLength={25}
                            placeholder="Max 25 characters"
                            name="loginName"
                            value={formData.loginName}
                            onChange={handleInputChangeLogin} />
                    </div>
                    {(formData.loginName.length < 5 && formData.loginName != "") ? <p className={cx('error')}>{error.loginName}</p> : ""}

                    <div className={cx('label')} >
                        <label className={cx('field')}>3. Password *</label>
                        <input
                            className={cx('input')}
                            type="text"
                            required
                            maxLength={25}
                            placeholder="Max 25 characters"
                            name="passWord"
                            value={formData.passWord}
                            onChange={handleInputChangeLogin} />
                    </div>
                    {(formData.passWord.length < 6 && formData.passWord != "") ? <p className={cx('error')}>{error.passWord}</p> : ""}

                    <div className={cx('label')} >
                        <label className={cx('field')}>4. Campus *</label>
                        <select className={cx('input')} type="text" required name="campusId" value={formData.campusId} disabled>
                            <option value={1} >Hà Nội</option>
                            <option value={2} >Hồ Chí Minh</option>
                            <option value={3} >Đà Nẵng</option>
                            <option value={4} >Quy Nhơn</option>
                            <option value={5} >Cần Thơ</option>
                        </select>
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>5. Manager</label>
                        <input className={cx('checkbox')}
                            type="checkbox"
                            name="isManager"
                            checked={isChecked}
                            onChange={handleCheckboxChange} />
                    </div>
                    <div className={cx('btn-group')}>
                        <button className={cx('btn')} onClick={() => { window.history.back() }}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </button>
                        <button className={cx('btn')} type="submit">
                            <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                        </button>
                    </div>
                </form>

                {/* Add success */}
                <div>
                    {isSuccess && (
                        <div className={cx('modal')}>
                            <div className={cx('modal-content')}>
                                <h2 className={cx('modal-title')}>Add Successfully!</h2>
                                <p className={cx('modal-info')}>You can see all staff in the "Staff" section.</p>
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
                                <h2 className={cx('modal-title')}>Add Failed!</h2>
                                <p className={cx('modal-info')}>The LoginName may already exist.</p>
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

export default AddStaffContainer;