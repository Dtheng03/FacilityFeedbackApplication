import classNames from "classnames/bind";
import style from './AdminViewStaffContainer.module.scss';
import React, { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function AdminViewStaffContainer() {

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
            const { fullName } = item;
            return fullName.toLowerCase().includes(query.toLowerCase())
        });

        setFilteredData(filtered);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>View Staff</h2>

                <input
                    className={cx('search')}
                    type="text"
                    placeholder="Search Staff By Full Name"
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
                            <th className={cx('th5')}>IsManager</th>
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
                                <td className={cx('td5')}>{staff.isManager}</td>
                                <td className={cx('td6')}>{staff.campusId}</td>
                                <td className={cx('td7')}></td>
                                <td className={cx('td8')}></td>
                                <td className={cx('td9')}></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminViewStaffContainer;