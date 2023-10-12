import classNames from "classnames/bind";
import style from './StaffViewHistoryContainer.module.scss';
import React, { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function StaffViewHistoryContainer() {

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
            const { id, facilityFeedbackId, time, staffId, status } = item;
            return id.toLowerCase().includes(query.toLowerCase())
                || facilityFeedbackId.toLowerCase().includes(query.toLowerCase())
                || time.toLowerCase().includes(query.toLowerCase())
                || staffId.toLowerCase().includes(query.toLowerCase())
                || status.toLowerCase().includes(query.toLowerCase())
        });

        setFilteredData(filtered);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>View Repair History</h2>

                <input
                    className={cx('search')}
                    type="text"
                    placeholder="Search Repair History By Id, FeedbackId, RepairDate, StaffId, Status"
                    value={searchQuery}
                    onChange={handleSearch}
                />

                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('tr')}>
                            <th className={cx('th1')}>ID</th>
                            <th className={cx('th2')}>FeedbackId</th>
                            <th className={cx('th3')}>RepairDate</th>
                            <th className={cx('th4')}>StaffId</th>
                            <th className={cx('th5')}>Status</th>
                            <th className={cx('th6')}>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(history => (
                            <tr key={history.id} className={cx('tr')}>
                                <td className={cx('td1')}>{history.id}</td>
                                <td className={cx('td2')}>{history.facilityFeedbackId}</td>
                                <td className={cx('td3')}>{history.time}</td>
                                <td className={cx('td4')}>{history.staffId}</td>
                                <td className={cx('td5')}>{history.status}</td>
                                <td className={cx('td6')}></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StaffViewHistoryContainer;