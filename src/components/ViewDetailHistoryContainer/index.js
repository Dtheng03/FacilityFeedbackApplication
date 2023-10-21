import classNames from "classnames/bind";
import style from "./ViewDetailHistoryContainer.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const cx = classNames.bind(style);

function ViewDetailHistoryContainer() {
    const param = useParams();

    const [history, setHistory] = useState([]);

    useEffect(() => {
        // fetch(`http://localhost:8080/api/feedback/get-feedback/${param.id}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         setFeedback(data);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
    }, [])

    const [showImg, setShowImg] = useState(false);

    const handleShowImg = () => {
        setShowImg(true);
    }

    const handleModalClose = () => {
        setShowImg(false);
    }

    const handleBack = () => {
        window.history.back();
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h3 className={cx('title')}>View Detail History</h3>
                {history.map(hs => (
                    <div key={hs.id} className={cx('info')}>
                        <div className={cx('label')}>
                            <label className={cx('field')}>1.Id:</label>
                            <p className={cx('input')}>{hs.id}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>2.FeedbackId:</label>
                            <p className={cx('input')}>{hs.floorName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>3.StaffId:</label>
                            <p className={cx('input')}>{hs.roomName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>4.RepairDate:</label>
                            <p className={cx('input')}>{hs.facilityName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>5.Status:</label>
                            <p className={cx('input')}>{hs.facilityProblemName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>6.Description:</label>
                            <p className={cx('input')}>{hs.description}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>7.Image:</label>
                            <img
                                className={cx('input')}
                                src={`data:image/jpeg;base64,${hs.image}`}
                                alt='img'
                                width="100"
                                onClick={handleShowImg}
                            />
                        </div>
                        <div className={cx('label')}>
                            <button className={cx('btn')} onClick={handleBack}>Back</button>
                        </div>

                        {/* Show full image */}
                        <div>
                            {showImg && (
                                <div className={cx('modal')}>
                                    <div className={cx('modal-content')}>
                                        <img
                                            className={cx('modal-img')}
                                            src={`data:image/jpeg;base64,${hs.image}`}
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

export default ViewDetailHistoryContainer;