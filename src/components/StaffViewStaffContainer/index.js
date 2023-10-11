import classNames from "classnames/bind";
import style from './StaffViewStaffContainer.module.scss';
import React, { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function StaffViewStaffContainer() {
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
                            <th className={cx('th')}>ID</th>
                            <th className={cx('th')}>FullName</th>
                            <th className={cx('th')}>IsManager</th>
                            <th className={cx('th')}>Campus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(staff => (
                            <tr key={staff.id} className={cx('tr')}>
                                <td className={cx('td')}>{staff.id}</td>
                                <td className={cx('td')}>{staff.fullName}</td>
                                <td className={cx('td')}>{staff.isManager}</td>
                                <td className={cx('td')}>{staff.campusId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StaffViewStaffContainer;