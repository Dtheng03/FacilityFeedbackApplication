import classNames from "classnames/bind";
import style from './StaffViewFeedbackContainer.module.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { getFeedbackByCampusId } from "../../api/api";

const cx = classNames.bind(style);

function StaffViewFeedbackContainer() {

    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // lay Token va chuyen thanh data
    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    // call api lay data
    useEffect(() => {
        // Fetch data from API
        fetch(getFeedbackByCampusId(sessionData.campusId))
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    // xu ly search theo problem
    const handleSearch = (event) => {
        const query = event.target.value.trimStart();
        setSearchQuery(query);

        const filtered = data.filter(item => {
            const { facilityProblemName } = item;
            return facilityProblemName.toLowerCase().includes(query.toLowerCase())
        });

        setFilteredData(filtered);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Feedback</h2>

                <input
                    className={cx('search')}
                    type="text"
                    placeholder="Search by problem"
                    value={searchQuery}
                    maxLength={50}
                    onChange={handleSearch}
                />

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
                        {filteredData.map(feedback => (
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
            </div>
        </div>
    );
}

export default StaffViewFeedbackContainer;