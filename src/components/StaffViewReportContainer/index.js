import classNames from 'classnames/bind';
import style from './StaffViewReportContainer.module.scss';

import React, { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function Report() {
    const [reportData, setReportData] = useState([]);

    useEffect(() => {
        // // Fetch report data from API
        // fetch('https://api.example.com/report')
        //     .then(response => response.json())
        //     .then(data => {
        //         setReportData(data);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Report</h2>
                {reportData.length > 0 ? (
                    <table className={cx('table')}>
                        <thead>
                            <tr className={cx('tr')}>
                                <th className={cx('th')}>Column 1</th>
                                <th className={cx('th')}>Column 2</th>
                                {/* Add more table headers as needed */}
                            </tr> className={cx('th')}
                        </thead>
                        <tbody>
                            {reportData.map((row, index) => (
                                <tr className={cx('tr')} key={index}>
                                    <td className={cx('td')}>{row.column1}</td>
                                    <td className={cx('td')}>{row.column2}</td>
                                    {/* Add more table cells as needed */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className={cx('content')}>Loading report data...</p>
                )}
            </div>
        </div>
    );
}

export default Report;