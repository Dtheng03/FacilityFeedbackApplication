import classNames from "classnames/bind";
import style from './StatisticContainer.module.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { getStaffByCampusId, viewFBbyStaffIdFalse, viewFBbyStaffIdTrue } from "../../api/api";

const cx = classNames.bind(style);

function StatisticContainer() {

    const [listStaff, setListStaff] = useState([]);
    const [listProcessed, setListProcessed] = useState([]);
    const [listProcessing, setListProcessing] = useState([]);

    // lay Token va chuyen thanh data
    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    // call api lay data
    useEffect(() => {
        // Fetch data from API
        fetch(getStaffByCampusId(sessionData.campusId))
            .then(response => response.json())
            .then(data => {
                setListStaff(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }, []);

    // xu ly search theo problem
    const handleSearch = (event) => {
        const query = event.target.value;

        fetch(viewFBbyStaffIdFalse(query))
            .then(response => response.json())
            .then(data => {
                setListProcessing(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        fetch(viewFBbyStaffIdTrue(query))
            .then(response => response.json())
            .then(data => {
                setListProcessed(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Statistics</h2>

                <select
                    className={cx('search')}
                    onChange={handleSearch}
                >
                    <option value={0}>Choose staff</option>
                    {listStaff.map(staff => (
                        <option key={staff.id} value={staff.id}>{staff.fullName}</option>
                    ))}
                </select>

                {listProcessing.length > 0 ? (<>
                    <h3 className={cx('title')}>Processing Tasks</h3>
                    <table className={cx('table')}>
                        <thead>
                            <tr className={cx('tr')}>
                                <th className={cx('th1')}>ID</th>
                                <th className={cx('th2')}>Room</th>
                                <th className={cx('th3')}>Problem</th>
                                <th className={cx('th4')}>CreateDate</th>
                                <th className={cx('th5')}>Status</th>
                                <th className={cx('th6')}>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listProcessing.map(feedback => (
                                <tr key={feedback.id} className={cx('tr')}>
                                    <td className={cx('td1')}>{feedback.id}</td>
                                    <td className={cx('td2')}>{feedback.roomName}</td>
                                    <td className={cx('td3')}>{feedback.facilityProblemName}</td>
                                    <td className={cx('td4')}>{feedback.createDate}</td>
                                    <td className={cx('td5')}>{feedback.status ? "Processed" : "Processing"}</td>
                                    <td className={cx('td6')}>
                                        <Link to={`/view-detail/feedback/${feedback.id}`}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faEye}></FontAwesomeIcon>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>) : ""}

                {listProcessed.length > 0 ? (<>
                    <h3 className={cx('title')}>Processed Tasks</h3>
                    <table className={cx('table')}>
                        <thead>
                            <tr className={cx('tr')}>
                                <th className={cx('th1')}>ID</th>
                                <th className={cx('th2')}>Room</th>
                                <th className={cx('th3')}>Problem</th>
                                <th className={cx('th4')}>CreateDate</th>
                                <th className={cx('th5')}>Status</th>
                                <th className={cx('th6')}>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listProcessed.map(feedback => (
                                <tr key={feedback.id} className={cx('tr')}>
                                    <td className={cx('td1')}>{feedback.id}</td>
                                    <td className={cx('td2')}>{feedback.roomName}</td>
                                    <td className={cx('td3')}>{feedback.facilityProblemName}</td>
                                    <td className={cx('td4')}>{feedback.createDate}</td>
                                    <td className={cx('td5')}>{feedback.status ? "Processed" : "Processing"}</td>
                                    <td className={cx('td6')}>
                                        <Link to={`/view-detail/feedback/${feedback.id}`}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faEye}></FontAwesomeIcon>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>) : ""}
            </div>
        </div>
    );
}

export default StatisticContainer;