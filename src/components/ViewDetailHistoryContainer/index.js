import classNames from "classnames/bind";
import style from "./ViewDetailHistoryContainer.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRepairHistoryById } from "../../api/api";

const cx = classNames.bind(style);

function ViewDetailHistoryContainer() {

    const param = useParams();

    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch(getRepairHistoryById(param.id))
            .then(response => response.json())
            .then(data => {
                setHistory(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
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
                <h3 className={cx('title')}>Detail Repair</h3>
                {history.map(his => (
                    <div key={his.id} className={cx('info')}>
                        <div className={cx('label')}>
                            <label className={cx('field')}>1.Id:</label>
                            <p className={cx('input')}>{his.id}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>2.FeedbackId:</label>
                            <p className={cx('input')}>{his.facilityFeedbackId}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>3.Staff:</label>
                            <p className={cx('input')}>{his.staffName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>4.RepairDate:</label>
                            <p className={cx('input')}>{his.repairDate}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>5.Status:</label>
                            <p className={cx('input')}>{his.status ? "Finished" : "Not finish"}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>6.Description:</label>
                            <p className={cx('input')}>{his.description}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>7.Image:</label>
                            <img
                                className={cx('input')}
                                src={`data:image/jpeg;base64,${his.image}`}
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
                                            src={`data:image/jpeg;base64,${his.image}`}
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