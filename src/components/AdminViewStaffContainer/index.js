import classNames from "classnames/bind";
import style from './AdminViewStaffContainer.module.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEye, faPenToSquare, faTrashCan, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getStaffByCampusId } from "../../api/api";

const cx = classNames.bind(style);

function AdminViewStaffContainer() {

    // goi api lay ra toan bo du lieu can
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // lay token ra va chuyen thanh data
    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    // xu ly search
    const handleSearch = (event) => {
        const query = event.target.value.trimStart();
        setSearchQuery(query);

        const filtered = data.filter(item => {
            const { fullName } = item;
            return fullName.toLowerCase().includes(query.toLowerCase())
        });

        setFilteredData(filtered);
    };

    useEffect(() => {
        // Fetch data from API
        fetch(getStaffByCampusId(sessionData.campusId))
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Staff</h2>
                    <Link to={'/admin/add-staff'} className={cx('add')}>
                        <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                    </Link>
                </div>

                <input
                    className={cx('search')}
                    type="text"
                    maxLength={50}
                    placeholder="Search by fullname"
                    value={searchQuery}
                    onChange={handleSearch}
                />

                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('tr')}>
                            <th className={cx('th1')}>ID</th>
                            <th className={cx('th2')}>FullName</th>
                            <th className={cx('th3')}>LoginName</th>
                            <th className={cx('th4')}>Password</th>
                            <th className={cx('th5')}>Manager</th>
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
                                <td className={cx('td5')}>{staff.manager ? <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> : ''}</td>
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

export default AdminViewStaffContainer;