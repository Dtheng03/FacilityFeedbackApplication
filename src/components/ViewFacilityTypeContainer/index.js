import classNames from "classnames/bind";
import style from "./ViewFacilityTypeContainer.module.scss";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function ViewFacilityTypeContainer() {

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
                    <h2 className={cx('title')}>Facility Type</h2>
                    <Link to={'/admin/add-facility-type'} className={cx('add')}>
                        <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
                    </Link>
                </div>

                <input
                    className={cx('search')}
                    type="text"
                    placeholder="Search by type name"
                    value={searchQuery}
                    onChange={handleSearch}
                />

                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('tr')}>
                            <th className={cx('th1')}>ID</th>
                            <th className={cx('th2')}>Type Name</th>
                            <th className={cx('th3')}>Room Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(staff => (
                            <tr key={staff.id} className={cx('tr')}>
                                <td className={cx('td1')}>{staff.id}</td>
                                <td className={cx('td2')}>{staff.fullName}</td>
                                <td className={cx('td3')}>{staff.loginName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewFacilityTypeContainer;