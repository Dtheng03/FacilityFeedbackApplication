import classNames from "classnames/bind";
import style from './StaffAddHistoryContainer.module.scss';
import { useState, useEffect } from "react";
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
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFail, setIsFail] = useState(false);

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const [showImg, setShowImg] = useState(false);

    useEffect(() => {
        return () => {
            selectedImage && URL.revokeObjectURL(selectedImage)
        }
    }, [selectedImage])

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
    };

    const handleModalOpen = () => {
        setShowImg(true);
    };

    const handleModalClose = () => {
        setShowImg(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Call API to create new staff member using formData
        // ...

        // If success
        setIsSuccess(true);

        // If fail
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
                <h2 className={cx('title')}>Add Repair History</h2>
                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div className={cx('label')} >
                        <label className={cx('field')}>1. FeedbackId *</label>
                        <input className={cx('input')} type="text" required name="facilityFeedbackId" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>2. StaffId *</label>
                        <input className={cx('input')} type="text" required name="staffId" value={formData.position} onChange={handleInputChange} />
                    </div>
                    <div className={cx('label')} >
                        <label className={cx('field')}>3. Status *</label>
                        <select className={cx('input')} type="text" required name="status" value={formData.position} onChange={handleInputChange}>
                            <option value={''}>- Choose status -</option>
                            <option value={'0'}>Not Finished</option>
                            <option value={'1'}>Finished</option>
                        </select>
                    </div>
                    <div className={cx('label')}>
                        <label className={cx('field')}>4. Description</label>
                        <textarea className={cx('description')} rows="3" placeholder="Please describe the condition (optional)."></textarea>
                    </div>
                    <div className={cx('img')}>
                        <label className={cx('img-label')}>5. Image</label>
                        <input className={cx('img-input')} type="file" accept="image/*" onChange={handleImageChange} />
                        {selectedImage && (
                            <div className={cx('img-hold')}>
                                <img className={cx('image')} src={selectedImage} onClick={handleModalOpen} alt="Selected" />
                                <button className={cx('remove')} onClick={handleRemoveImage}>&times;</button>
                            </div>
                        )}
                    </div>
                    <button className={cx('btn')} type="submit">
                        Add
                        <FontAwesomeIcon className={cx('icon')} icon={faSquarePlus}></FontAwesomeIcon>
                    </button>
                </form>

                {/* Show full image */}
                <div>
                    {showImg && (
                        <div className={cx('modal')}>
                            <div className={cx('modal-content')}>
                                <img className={cx('modal-img')} src={selectedImage} alt="Selected" />
                                <button className={cx('modal-close')} onClick={handleModalClose}>
                                    &times;
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Add success */}
                <div>
                    {isSuccess && (
                        <div className={cx('modal')}>
                            <div className={cx('modal-content')}>
                                <h2 className={cx('modal-title')}>Add Repair History Successfully!</h2>
                                <p className={cx('modal-info')}>You can see the list of repair history in the "View History" section.</p>
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
                                <h2 className={cx('modal-title')}>Add Repair History Failed!</h2>
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

export default StaffAddHistoryContainer;