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
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsOpen(true);

        // Call API to create new staff member using formData
        // ...
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Add New Staff</h2>
                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div className={cx('label')} >
                        <label className={cx('field')}>1. FullName:</label>
                        <input className={cx('input')} type="text" name="fullName" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>2. LoginName:</label>
                        <input className={cx('input')} type="text" name="loginName" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>3. Password:</label>
                        <input className={cx('input')} type="text" name="passWord" value={formData.position} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>4. Campus:</label>
                        <select className={cx('input')} type="text" name="campusId" value={formData.position} onChange={handleInputChange}>
                            <option value={'0'} >- Choose your campus -</option>
                            <option value={'1'} >Hà Nội</option>
                            <option value={'2'} >Hồ Chí Minh</option>
                            <option value={'3'} >Đà Nẵng</option>
                            <option value={'4'} >Quy Nhơn</option>
                            <option value={'5'} >Cần Thơ</option>
                        </select>
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>5. Manager:</label>
                        <input className={cx('checkbox')} type="checkbox" name="isManager" value={formData.position} onChange={handleInputChange} />
                    </div>
                    <button className={cx('btn')} type="submit">
                        Add
                        <FontAwesomeIcon className={cx('icon')} icon={faUserPlus}></FontAwesomeIcon>
                    </button>
                </form>

                <div>
                    {isOpen && (
                        <div className={cx('modal')}>
                            <div className={cx('modal-content')}>
                                <h2>Add Staff Successfully!</h2>
                                <button className={cx('close')} onClick={closeModal}>Ok</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddStaffContainer;