import classNames from "classnames/bind";
import style from './StaffViewFeedbackContainer.module.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(style);

function StaffViewFeedbackContainer() {

    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // lay Token va chuyen thanh data
    const sessionToken = localStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    useEffect(() => {
        // Fetch data from API
        fetch(`http://localhost:8080/api/feedback/getAll/${sessionData.campusId}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filtered = data.filter(item => {
            const { id, campusId, roomId, facilityId, facilityProblemId, createDate } = item;
            return id.toLowerCase().includes(query.toLowerCase())
                || campusId.toLowerCase().includes(query.toLowerCase())
                || createDate.toLowerCase().includes(query.toLowerCase())
        });

        setFilteredData(filtered);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>View Feedback</h2>

                <input
                    className={cx('search')}
                    type="text"
                    placeholder="Search by campusId, createDate"
                    value={searchQuery}
                    onChange={handleSearch}
                />

                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('tr')}>
                            <th className={cx('th1')}>ID</th>
                            <th className={cx('th2')}>Campus</th>
                            <th className={cx('th3')}>Room</th>
                            <th className={cx('th4')}>Problem</th>
                            <th className={cx('th5')}>CreateDate</th>
                            <th className={cx('th6')}>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(feedback => (
                            <tr key={feedback.id} className={cx('tr')}>
                                <td className={cx('td1')}>{feedback.id}</td>
                                <td className={cx('td2')}>{feedback.campusName}</td>
                                <td className={cx('td3')}>{feedback.roomName}</td>
                                <td className={cx('td4')}>{feedback.facilityProblemName}</td>
                                <td className={cx('td5')}>{feedback.createDate}</td>
                                <td className={cx('td6')}><FontAwesomeIcon className={cx('icon')} icon={faEye}></FontAwesomeIcon></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StaffViewFeedbackContainer;