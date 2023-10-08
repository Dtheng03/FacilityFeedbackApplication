import classNames from "classnames/bind";
import style from './StaffAddHistoryContainer.module.scss';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function StaffAddHistoryContainer() {

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
                <h2 className={cx('title')}>Add Repair History</h2>
                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div className={cx('label')} >
                        <label className={cx('field')}>FeedbackId</label>
                        <input className={cx('input')} type="text" name="facilityFeedbackId" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>Time</label>
                        <input className={cx('input')} type="text" name="time" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>StaffId</label>
                        <input className={cx('input')} type="text" name="staffId" value={formData.position} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>Status</label>
                        <input className={cx('input')} type="text" name="status" value={formData.position} onChange={handleInputChange} />
                    </div>
                    <button className={cx('btn')} type="submit">
                        Add
                        <FontAwesomeIcon className={cx('icon')} icon={faSquarePlus}></FontAwesomeIcon>
                    </button>
                </form>

                <div>
                    {isOpen && (
                        <div className={cx('modal')}>
                            <div className={cx('modal-content')}>
                                <h2>Add Repair History Successfully!</h2>
                                <button className={cx('close')} onClick={closeModal}>Ok</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StaffAddHistoryContainer;