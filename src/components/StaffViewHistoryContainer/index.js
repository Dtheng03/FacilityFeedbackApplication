import classNames from "classnames/bind";
import style from './StaffViewHistoryContainer.module.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { getAllRepairHistory } from "../../api/api"

const cx = classNames.bind(style);

function StaffViewHistoryContainer() {

    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Fetch data from API
        fetch(getAllRepairHistory)
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
            const { facilityFeedbackId } = item;
            if (query == "") {
                return data;
            } else {
                return facilityFeedbackId == query
            }
        });

        setFilteredData(filtered);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>View Repair History</h2>

                <input
                    className={cx('search')}
                    type="number"
                    placeholder="Search by feedback Id"
                    value={searchQuery}
                    onChange={handleSearch}
                />

                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('tr')}>
                            <th className={cx('th1')}>ID</th>
                            <th className={cx('th2')}>FeedbackId</th>
                            <th className={cx('th3')}>StaffId</th>
                            <th className={cx('th4')}>RepairDate</th>
                            <th className={cx('th5')}>Status</th>
                            <th className={cx('th6')}>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(history => (
                            <tr key={history.id} className={cx('tr')}>
                                <td className={cx('td1')}>{history.id}</td>
                                <td className={cx('td2')}>{history.facilityFeedbackId}</td>
                                <td className={cx('td3')}>{history.staffId}</td>
                                <td className={cx('td4')}>{history.repairDate}</td>
                                <td className={cx('td5')}>{history.status ? "Finished" : "Not finished"}</td>
                                <td className={cx('td6')}>
                                    <Link to={`/view-detail/history/${history.id}`}>
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

export default StaffViewHistoryContainer;