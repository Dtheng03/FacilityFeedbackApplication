import classNames from "classnames/bind";
import style from './TaskContainer.module.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { getFeedbackByCampusId } from "../../api/api";

const cx = classNames.bind(style);

function TaskContainer() {

    const [listProcessing, setListProcessing] = useState([]);
    const [listProcessed, setListProcessed] = useState([]);

    useEffect(() => {
        // fetch()
        //     .then()
        //     .then()
        //     .catch()
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Tasks</h2>

                <h3 className={cx('title')}>Processing</h3>
                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('tr')}>
                            <th className={cx('th1')}>ID</th>
                            <th className={cx('th2')}>Room</th>
                            <th className={cx('th3')}>Problem</th>
                            <th className={cx('th4')}>CreateDate</th>
                            <th className={cx('th5')}>Status</th>
                            <th className={cx('th6')}>Staff</th>
                            <th className={cx('th7')}>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {listProcessing.map(feedback => (
                            <tr key={feedback.id} className={cx('tr')}>
                                <td className={cx('td1')}>{feedback.id}</td>
                                <td className={cx('td2')}>{feedback.roomName}</td>
                                <td className={cx('td3')}>{feedback.facilityProblemName}</td>
                                <td className={cx('td4')}>{feedback.createDate}</td>
                                <td className={cx('td5')}>{feedback.status ? "Processed" : "Processing"}</td>
                                <td className={cx('td6')}></td>
                                <td className={cx('td7')}>
                                    <Link to={`/view-detail/feedback/${feedback.id}`}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faEye}></FontAwesomeIcon>
                                    </Link>
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>

                <h3 className={cx('title')}>Processed</h3>
                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('tr')}>
                            <th className={cx('th1')}>ID</th>
                            <th className={cx('th2')}>Room</th>
                            <th className={cx('th3')}>Problem</th>
                            <th className={cx('th4')}>CreateDate</th>
                            <th className={cx('th5')}>Status</th>
                            <th className={cx('th6')}>Staff</th>
                            <th className={cx('th7')}>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {listProcessed.map(feedback => (
                            <tr key={feedback.id} className={cx('tr')}>
                                <td className={cx('td1')}>{feedback.id}</td>
                                <td className={cx('td2')}>{feedback.roomName}</td>
                                <td className={cx('td3')}>{feedback.facilityProblemName}</td>
                                <td className={cx('td4')}>{feedback.createDate}</td>
                                <td className={cx('td5')}>{feedback.status ? "Processed" : "Processing"}</td>
                                <td className={cx('td6')}></td>
                                <td className={cx('td7')}>
                                    <Link to={`/view-detail/feedback/${feedback.id}`}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faEye}></FontAwesomeIcon>
                                    </Link>
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TaskContainer;