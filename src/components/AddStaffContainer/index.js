import classNames from "classnames/bind";
import style from './AddStaffContainer.module.scss';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
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

    // state de check manager
    const [isChecked, setIsChecked] = useState(false);

    // state de control success/fail
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFail, setIsFail] = useState(false);

    // xu ly nhap info
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
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
                <h2 className={cx('title')}>Add New Staff</h2>
                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div className={cx('label')} >
                        <label className={cx('field')}>1. FullName *</label>
                        <input className={cx('input')} type="text" required name="fullName" value={formData.fullName} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>2. LoginName *</label>
                        <input className={cx('input')} type="text" required name="loginName" value={formData.loginName} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>3. Password *</label>
                        <input className={cx('input')} type="text" required name="passWord" value={formData.passWord} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>4. Campus *</label>
                        <select className={cx('input')} type="text" required name="campusId" value={formData.campusId} disabled>
                            <option value={0}>Choose Campus</option>
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
                    <button className={cx('btn')} type="submit">
                        Add
                        <FontAwesomeIcon className={cx('icon')} icon={faUserPlus}></FontAwesomeIcon>
                    </button>
                </form>

                {/* Add success */}
                <div>
                    {isSuccess && (
                        <div className={cx('modal')}>
                            <div className={cx('modal-content')}>
                                <h2 className={cx('modal-title')}>Add Staff Successfully!</h2>
                                <p className={cx('modal-info')}>You can see the list of staff in the "View Staff" section.</p>
                                <button className={cx('close')} onClick={closeSuccessModal}>Ok</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Add fail */}
                <div>
                    {isFail && (
                        <div className={cx('modal')}>
                            <div className={cx('modal-content')}>
                                <h2 className={cx('modal-title')}>Add Staff Failed!</h2>
                                <p className={cx('modal-info')}>The information may not be satisfied or may already exist.</p>
                                <p className={cx('modal-info')}>Please check all information again.</p>
                                <button className={cx('close')} onClick={closeFailModal}>Ok</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddStaffContainer;