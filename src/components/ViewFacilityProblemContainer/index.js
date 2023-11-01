import classNames from "classnames/bind";
import style from "./ViewFacilityProblemContainer.module.scss";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { viewProblem } from "../../api/api";

const cx = classNames.bind(style);

function ViewFacilityProblemContainer() {

    // goi api lay ra toan bo du lieu can
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // lay token ra va chuyen thanh data
    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    useEffect(() => {
        // Fetch data from API
        fetch(viewProblem)
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
            const { facilityProblemName } = item;
            if (facilityProblemName)
                return facilityProblemName.toLowerCase().includes(query.toLowerCase())
        });

        setFilteredData(filtered);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Facility Problem</h2>
                    <Link to={'/admin/add-facility-problem'} className={cx('add')}>
                        <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
                    </Link>
                </div>

                <input
                    className={cx('search')}
                    type="text"
                    maxLength={50}
                    placeholder="Search by problem"
                    value={searchQuery}
                    onChange={handleSearch}
                />

                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('tr')}>
                            <th className={cx('th1')}>ID</th>
                            <th className={cx('th2')}>Problem Name</th>
                            <th className={cx('th3')}>Type Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(problem => (
                            <tr key={problem.id} className={cx('tr')}>
                                <td className={cx('td1')}>{problem.id}</td>
                                <td className={cx('td2')}>{problem.facilityProblemName}</td>
                                <td className={cx('td3')}>{problem.facilityTypeName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewFacilityProblemContainer;