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
            const { id, roomId, facilityId, facilityProblemId, description } = item;
            return id.toLowerCase().includes(query.toLowerCase())
                || roomId.toLowerCase().includes(query.toLowerCase())
                || facilityId.toLowerCase().includes(query.toLowerCase())
                || facilityProblemId.toLowerCase().includes(query.toLowerCase())
                || description.toLowerCase().includes(query.toLowerCase())
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
                    placeholder="Search Feedback By Id, RoomId, Facility, Problem, Description"
                    value={searchQuery}
                    onChange={handleSearch}
                />

                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('tr')}>
                            <th className={cx('th')}>ID</th>
                            <th className={cx('th')}>RoomId</th>
                            <th className={cx('th')}>Facility</th>
                            <th className={cx('th')}>Problem</th>
                            <th className={cx('th')}>Description</th>
                            <th className={cx('th')}>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(feedback => (
                            <tr key={feedback.id} className={cx('tr')}>
                                <td className={cx('td')}>{feedback.id}</td>
                                <td className={cx('td')}>{feedback.roomId}</td>
                                <td className={cx('td')}>{feedback.facilityId}</td>
                                <td className={cx('td')}>{feedback.facilityProblemId}</td>
                                <td className={cx('td')}>{feedback.description}</td>
                                <td className={cx('td')}></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StaffViewFeedbackContainer;