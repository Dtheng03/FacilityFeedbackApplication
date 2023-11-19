import classNames from "classnames/bind";
import style from "./ViewDetailFeedbackContainer.module.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFeedbackById } from "../../api/api";

const cx = classNames.bind(style);

function ViewDetailFeedbackContainer() {

    // lay param
    const param = useParams();

    // tao state chua data
    const [feedback, setFeedback] = useState([]);

    // tao state hien thi het anh
    const [showImg, setShowImg] = useState(false);

    // huy feedbackId trong local va tao moi
    sessionStorage.removeItem('feedbackId');
    sessionStorage.setItem('feedbackId', param.id);

    // lay Token va chuyen thanh data
    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    // tra ve role de dieu huong
    let role = "";
    if (sessionData.manager) {
        role = "admin";
    } else {
        role = "staff";
    }

    // call api
    useEffect(() => {
        fetch(getFeedbackById(param.id))
            .then(response => response.json())
            .then(data => {
                setFeedback(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])

    // show anh
    const handleShowImg = () => {
        setShowImg(true);
    }

    // dong modal
    const handleModalClose = () => {
        setShowImg(false);
    }

    // xu ly tro ve
    const handleBack = () => {
        sessionStorage.removeItem('feedbackId')
        window.history.back();
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h3 className={cx('title')}>Detail Feedback</h3>
                {feedback.map(fb => (
                    <div key={fb.id} className={cx('info')}>
                        <div className={cx('label')}>
                            <label className={cx('field')}>1.Id:</label>
                            <p className={cx('input')}>{fb.id}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>2.Campus:</label>
                            <p className={cx('input')}>{fb.campusName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>3.Floor:</label>
                            <p className={cx('input')}>{fb.floorName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>4.Room:</label>
                            <p className={cx('input')}>{fb.roomName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>5.Facility:</label>
                            <p className={cx('input')}>{fb.facilityName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>6.Problem:</label>
                            <p className={cx('input')}>{fb.facilityProblemName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>7.Description:</label>
                            <p className={cx('input')}>{fb.description}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>8.Status:</label>
                            <p className={cx('input')}>{fb.status ? "Processed" : "Processing"}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>9.Staff:</label>
                            <p className={cx('input')}>{fb.staffName ? fb.staffName : "Not yet assigned."}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>9.Image:</label>
                            <img
                                className={cx('input')}
                                src={`data:image/jpeg;base64,${fb.image}`}
                                alt='img'
                                width="100"
                                onClick={handleShowImg}
                            />
                        </div>
                        <div className={cx('label')}>
                            {fb.status == false && fb.staffName == sessionData.fullName ? (
                                <Link to={`/${role}/add-history`} className={cx('link')}>
                                    <button className={cx('btn')}>
                                        REPAIR
                                    </button>
                                </Link>
                            ) : ""}
                            {fb.status == false && sessionData.manager == true ? (
                                <Link to={'/admin/assign'} className={cx('link')}>
                                    <button className={cx('btn')}>ASSIGN</button>
                                </Link>
                            ) : ""
                            }
                            <button className={cx('btn')} onClick={handleBack}>BACK</button>
                        </div>

                        {/* Show full image */}
                        <div>
                            {showImg && (
                                <div className={cx('modal')}>
                                    <div className={cx('modal-content')}>
                                        <img
                                            className={cx('modal-img')}
                                            src={`data:image/jpeg;base64,${fb.image}`}
                                            alt="Uploaded" />
                                        <button className={cx('modal-close')} onClick={handleModalClose}>
                                            &times;
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewDetailFeedbackContainer;