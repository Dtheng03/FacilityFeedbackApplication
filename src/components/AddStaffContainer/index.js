import classNames from "classnames/bind";
import style from './AddStaffContainer.module.scss';

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function AddStaffContainer() {

    const [formData, setFormData] = useState({
        fullName: '',
        loginName: '',
        passWord: '',
        isManager: false,
        campusId: ''
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [isFail, setIsFail] = useState(false);

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Call API to create new staff member using formData
        // ...

        // if success
        setIsSuccess(true);

        // if fail
        // setIsFail(true);
    };

    const closeSuccessModal = () => {
        setIsSuccess(false);
    };

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
                        <input className={cx('input')} type="text" required name="fullName" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>2. LoginName *</label>
                        <input className={cx('input')} type="text" required name="loginName" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>3. Password *</label>
                        <input className={cx('input')} type="text" required name="passWord" value={formData.passWord} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>4. Campus *</label>
                        <select className={cx('input')} type="text" required name="campusId" value={formData.campusId} onChange={handleInputChange}>
                            <option value={''}>Choose Campus</option>
                            <option value={'1'} >Hà Nội</option>
                            <option value={'2'} >Hồ Chí Minh</option>
                            <option value={'3'} >Đà Nẵng</option>
                            <option value={'4'} >Quy Nhơn</option>
                            <option value={'5'} >Cần Thơ</option>
                        </select>
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>5. Manager</label>
                        <input className={cx('checkbox')} type="checkbox" name="isManager" value={formData.position} onChange={handleInputChange} />
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