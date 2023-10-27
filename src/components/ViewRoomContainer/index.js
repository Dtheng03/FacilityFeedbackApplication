import classNames from "classnames/bind";
import style from "./ViewRoomContainer.module.scss";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function ViewRoomContainer() {

    // goi api lay ra toan bo du lieu can
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // lay token ra va chuyen thanh data
    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    useEffect(() => {
        // Fetch data from API
        // fetch(getStaffByCampusId(sessionData.campusId))
        //     .then(response => response.json())
        //     .then(data => {
        //         setData(data);
        //         setFilteredData(data);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });

    }, []);

    // xu ly search
    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filtered = data.filter(item => {
            const { fullName } = item;
            return fullName.toLowerCase().includes(query.toLowerCase())
        });

        setFilteredData(filtered);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Room</h2>
                    <Link to={'/admin/add-room'} className={cx('add')}>
                        <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
                    </Link>
                </div>

                <input
                    className={cx('search')}
                    type="text"
                    placeholder="Search by room name"
                    value={searchQuery}
                    onChange={handleSearch}
                />

                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('tr')}>
                            <th className={cx('th1')}>ID</th>
                            <th className={cx('th2')}>Room</th>
                            <th className={cx('th3')}>Room Type</th>
                            <th className={cx('th4')}>Floor</th>
                            <th className={cx('th6')}>Campus</th>
                            <th className={cx('th7')}>Update</th>
                            <th className={cx('th8')}>Delete</th>
                            <th className={cx('th9')}>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(staff => (
                            <tr key={staff.id} className={cx('tr')}>
                                <td className={cx('td1')}>{staff.id}</td>
                                <td className={cx('td2')}>{staff.fullName}</td>
                                <td className={cx('td3')}>{staff.loginName}</td>
                                <td className={cx('td4')}>{staff.password}</td>
                                <td className={cx('td6')}>{staff.campusName}</td>
                                <td className={cx('td7')}>
                                    <Link to={`/admin/update-staff/${staff.id}`}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faPenToSquare} />
                                    </Link>
                                </td>
                                <td className={cx('td8')}>
                                    <Link to={`/admin/delete-staff/${staff.id}`}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faTrashCan} />
                                    </Link>
                                </td>
                                <td className={cx('td9')}>
                                    <Link to={`/admin/view-detail/staff/${staff.id}`}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faEye} />
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

export default ViewRoomContainer;
