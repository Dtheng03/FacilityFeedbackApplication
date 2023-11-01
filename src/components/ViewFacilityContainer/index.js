import classNames from "classnames/bind";
import style from "./ViewFacilityContainer.module.scss";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { viewFacility } from "../../api/api";

const cx = classNames.bind(style);

function ViewFacilityContainer() {

    // goi api lay ra toan bo du lieu can
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // lay token ra va chuyen thanh data
    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    useEffect(() => {
        // Fetch data from API
        fetch(viewFacility)
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
            const { facilityName } = item;
            if (facilityName)
                return facilityName.toLowerCase().includes(query.toLowerCase())
        });

        setFilteredData(filtered);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Facility</h2>
                    <Link to={'/admin/add-facility'} className={cx('add')}>
                        <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
                    </Link>
                </div>

                <input
                    className={cx('search')}
                    type="text"
                    maxLength={50}
                    placeholder="Search by facility name"
                    value={searchQuery}
                    onChange={handleSearch}
                />

                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('tr')}>
                            <th className={cx('th1')}>ID</th>
                            <th className={cx('th2')}>Name</th>
                            <th className={cx('th3')}>Quantity</th>
                            <th className={cx('th4')}>Facility Type</th>
                            <th className={cx('th5')}>Room Type</th>
                            <th className={cx('th6')}>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(fac => (
                            <tr key={fac.id} className={cx('tr')}>
                                <td className={cx('td1')}>{fac.id}</td>
                                <td className={cx('td2')}>{fac.facilityName}</td>
                                <td className={cx('td3')}>{fac.quantity}</td>
                                <td className={cx('td4')}>{fac.facilityTypeName}</td>
                                <td className={cx('td5')}>{fac.roomTypeName}</td>
                                <td className={cx('td6')}>
                                    <Link to={`/admin/update-facility/${fac.id}`}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faPenToSquare} />
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

export default ViewFacilityContainer;