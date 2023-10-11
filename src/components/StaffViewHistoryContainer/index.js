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
                            <th className={cx('th')}>ID</th>
                            <th className={cx('th')}>FeedbackId</th>
                            <th className={cx('th')}>RepairDate</th>
                            <th className={cx('th')}>StaffId</th>
                            <th className={cx('th')}>Status</th>
                            <th className={cx('th')}>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(history => (
                            <tr key={history.id} className={cx('tr')}>
                                <td className={cx('td')}>{history.id}</td>
                                <td className={cx('td')}>{history.facilityFeedbackId}</td>
                                <td className={cx('td')}>{history.time}</td>
                                <td className={cx('td')}>{history.staffId}</td>
                                <td className={cx('td')}>{history.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StaffViewHistoryContainer;