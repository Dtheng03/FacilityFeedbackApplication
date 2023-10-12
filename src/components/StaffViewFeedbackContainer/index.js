import classNames from "classnames/bind";
import style from './StaffViewFeedbackContainer.module.scss';
import React, { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function StaffViewFeedbackContainer() {

    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Fetch data from API
        // fetch('https://api.example.com/data')
        //     .then(response => response.json())
        //     .then(data => {
        //         setData(data);
        //         setFilteredData(data);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filtered = data.filter(item => {
            const { id, campusId, roomId, facilityId, facilityProblemId, createDate } = item;
            return id.toLowerCase().includes(query.toLowerCase())
                || campusId.toLowerCase().includes(query.toLowerCase())
                || roomId.toLowerCase().includes(query.toLowerCase())
                || facilityId.toLowerCase().includes(query.toLowerCase())
                || facilityProblemId.toLowerCase().includes(query.toLowerCase())
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
                    placeholder="Search Feedback By Id, CampusId, RoomId, Facility, Problem, CreateDate"
                    value={searchQuery}
                    onChange={handleSearch}
                />

                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('tr')}>
                            <th className={cx('th1')}>ID</th>
                            <th className={cx('th2')}>Campus</th>
                            <th className={cx('th3')}>Room</th>
                            <th className={cx('th4')}>Facility</th>
                            <th className={cx('th5')}>Problem</th>
                            <th className={cx('th6')}>CreateDate</th>
                            <th className={cx('th7')}>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(feedback => (
                            <tr key={feedback.id} className={cx('tr')}>
                                <td className={cx('td1')}>{feedback.id}</td>
                                <td className={cx('td2')}>{feedback.campusId}</td>
                                <td className={cx('td3')}>{feedback.roomId}</td>
                                <td className={cx('td4')}>{feedback.facilityId}</td>
                                <td className={cx('td5')}>{feedback.facilityProblemId}</td>
                                <td className={cx('td6')}>{feedback.createDate}</td>
                                <td className={cx('td7')}></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StaffViewFeedbackContainer;