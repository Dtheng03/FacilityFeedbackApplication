import classNames from "classnames/bind";
import style from './StaffAddHistoryContainer.module.scss';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { addRepairHistory } from "../../api/api";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style);

function StaffAddHistoryContainer() {

    const navigate = useNavigate();

    // lay token va chuyen thanh data
    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    let role = "admin";
    if (sessionData.isManager == false) {
        role = "staff";
    }

    // lay feedbackId dc luu trong local neu co
    const feedbackId = sessionStorage.getItem('feedbackId');

    // tao state upload & hien thi anh
    const [showImg, setShowImg] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    // tao state hien thi thanh cong || that bai
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFail, setIsFail] = useState(false);

    // tao state chua du lieu
    const [history, setHistory] = useState({
        feedbackId: feedbackId ? feedbackId : 0,
        staffId: sessionData.id,
        status: false,
        description: '',
        image: null
    });

    // xu ly nhap du lieu
    const handleInputChange = (event) => {
        setHistory({
            ...history,
            [event.target.name]: event.target.value
        });
    };

    // Xử lý phần thêm hình ảnh
    const handleImageUpload = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = () => {
            const imageUrl = reader.result;
            setUploadedImage(imageUrl);

        };
        reader.readAsDataURL(file);

        setHistory({
            ...history,
            image: file
        })
    }

    // Xử lý khi ấn xóa ảnh
    const handleRemoveImage = () => {
        setUploadedImage(null);
        setHistory({
            ...history,
            image: null
        });
    };

    // xu ly show hinh anh
    const handleModalOpen = () => {
        setShowImg(true);
    };

    // xu ly dong hinh anh
    const handleModalClose = () => {
        setShowImg(false);
    };

    // xu ly tao repair history
    const handleSubmit = async (event) => {
        event.preventDefault();

        // call api
        try {
            const formData = new FormData();
            formData.append("facilityFeedbackId", Number(history.feedbackId));
            formData.append("staffId", Number(history.staffId));
            formData.append("image", history.image,);
            formData.append("description", history.description,);
            formData.append("status", history.status,);

            const response = await axios.post(addRepairHistory, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

            if (response) {
                // if success
                setIsSuccess(true);
            } else {
                // if fail
                setIsFail(true);
            }

            // reset data
            setHistory({
                ...history,
                feedbackId: 0,
                image: null,
                description: '',
                status: false
            });

            // xoa local storage de tranh bi thua du lieu
            localStorage.removeItem('feedbackId')

        } catch (error) {
            setIsFail(true);
        }
    };

    // xu ly dong modal success
    const closeSuccessModal = () => {
        setIsSuccess(false);
        navigate(`/${role}/view-history`);
    };

    // xu ly dong modal fail
    const closeFailModal = () => {
        setIsFail(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>New Repair</h2>
                <form className={cx('form')} onSubmit={handleSubmit}>

                    {/* nhap feedbackId */}
                    <div className={cx('label')} >
                        <label className={cx('field')}>1. FeedbackId *</label>
                        <input className={cx('input')} type="number" required name="feedbackId" value={history.feedbackId} disabled onChange={handleInputChange} />
                    </div>

                    {/* hien thi staff id */}
                    <div className={cx('label')} >
                        <label className={cx('field')}>2. Staff *</label>
                        <input className={cx('input')} type="text" required value={sessionData.fullName} disabled />
                    </div>

                    {/* chon status */}
                    <div className={cx('label')} >
                        <label className={cx('field')}>3. Status *</label>
                        <select className={cx('input')} required type="text" name="status" value={history.status} onChange={handleInputChange}>
                            <option value={false}>Not Finished</option>
                            <option value={true}>Finished</option>
                        </select>
                    </div>

                    {/* them mo ta */}
                    <div className={cx('label')}>
                        <label className={cx('field')}>4. Description</label>
                        <textarea name='description' className={cx('description')} rows="3" placeholder="Please describe the condition (optional)." value={history.description} onChange={handleInputChange}></textarea>
                    </div>

                    {/* Thêm ảnh */}
                    <div className={cx('img')}>
                        <label className={cx('img-label')}>5. Image *</label>
                        <Dropzone onDrop={handleImageUpload}>
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()} className={cx('img-input')}>
                                    <input {...getInputProps()} />
                                    <p>Click here to select an image</p>
                                </div>
                            )}
                        </Dropzone>
                    </div>

                    {/* Hiện ảnh khi có ảnh tải lên */}
                    {history.image && (
                        <div className={cx('img-hold')}>
                            <img className={cx('image')} src={uploadedImage} onClick={handleModalOpen} alt="Uploaded" />
                            <button className={cx('remove')} onClick={handleRemoveImage}>&times;</button>
                        </div>
                    )}

                    {/* nut submit */}
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
                                <img className={cx('modal-img')} src={uploadedImage} alt="Selected" />
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
                                <h2 className={cx('modal-title')}>Add Successfully!</h2>
                                <p className={cx('modal-info')}>You can see the list of repair history in repair section.</p>
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
                                <p className={cx('modal-info')}>The information may not be satisfied or may already exist.</p>
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

export default StaffAddHistoryContainer;