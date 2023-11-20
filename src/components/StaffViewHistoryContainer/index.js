import classNames from "classnames/bind";
import style from './StaffViewHistoryContainer.module.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { getAllRepairHistoryByCampusId, getStaffByCampusId } from "../../api/api"

const cx = classNames.bind(style);

function StaffViewHistoryContainer() {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [listStaff, setListStaff] = useState([]);

    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    useEffect(() => {
        // Fetch data from API
        fetch(getAllRepairHistoryByCampusId(sessionData.campusId))
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        fetch(getStaffByCampusId(sessionData.campusId))
            .then(response => response.json())
            .then(data => {
                setListStaff(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value;

        const filtered = data.filter(item => {
            const { staffName } = item;
            if (query == 0) {
                return data;
            } else {
                return staffName == query
            }
        });

        setFilteredData(filtered);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Repair History</h2>

                <select
                    className={cx('search')}
                    onChange={handleSearch}
                >
                    <option value={0}>View All</option>
                    {listStaff.map(staff => (
                        <option key={staff.id} value={staff.fullName}>{staff.fullName}</option>
                    ))}
                </select>

                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('tr')}>
                            <th className={cx('th1')}>ID</th>
                            <th className={cx('th2')}>FeedbackId</th>
                            <th className={cx('th3')}>Staff</th>
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
                                <td className={cx('td3')}>{history.staffName}</td>
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