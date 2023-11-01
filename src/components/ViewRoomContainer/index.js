import classNames from "classnames/bind";
import style from "./ViewRoomContainer.module.scss";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getRoomByCampusId } from "../../api/api";

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
        fetch(getRoomByCampusId(sessionData.campusId))
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    // xu ly search
    const handleSearch = (event) => {
        const query = event.target.value.trimStart();
        setSearchQuery(query);

        const filtered = data.filter(item => {
            const { roomName } = item;
            if (roomName != null)
                return roomName.toLowerCase().includes(query.toLowerCase())
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
                            <th className={cx('th5')}>Campus</th>
                            <th className={cx('th6')}>Update</th>
                            <th className={cx('th7')}>Delete</th>
                            <th className={cx('th8')}>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(room => (
                            <tr key={room.id} className={cx('tr')}>
                                <td className={cx('td1')}>{room.id}</td>
                                <td className={cx('td2')}>{room.roomName}</td>
                                <td className={cx('td3')}>{room.roomTypeName}</td>
                                <td className={cx('td4')}>{room.floorName}</td>
                                <td className={cx('td5')}>{room.campusName}</td>
                                <td className={cx('td6')}>
                                    <Link to={`/admin/update-room/${room.id}`}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faPenToSquare} />
                                    </Link>
                                </td>
                                <td className={cx('td7')}>
                                    <Link to={`/admin/delete-room/${room.id}`}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faTrashCan} />
                                    </Link>
                                </td>
                                <td className={cx('td8')}>
                                    <Link to={`/admin/view-detail/room/${room.id}`}>
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
