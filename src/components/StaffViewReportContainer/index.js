import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames/bind';
import style from './StaffViewReportContainer.module.scss';
import './datepicker.css';

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

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
        if (endDate && date > endDate) {
            setEndDate(date);
        }
    };

    const handleEndDateChange = (date) => {
        if (startDate && date < startDate) {
            setStartDate(date);
        }
        setEndDate(date);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Start Date:', startDate.toLocaleDateString('en-GB'));
        console.log('End Date:', endDate.toLocaleDateString('en-GB'));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Report</h2>

                <form className={cx('form-container')} onSubmit={handleSubmit}>
                    <div className={cx('form-group')}>
                        <label className={cx('label')} htmlFor="start-date">Start Date:</label>
                        <DatePicker
                            id="start-date"
                            className={cx('form-control')}
                            selected={startDate}
                            onChange={handleStartDateChange}
                            dateFormat="dd/MM/yyyy"
                            isClearable
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <label className={cx('label')} htmlFor="end-date">End Date:</label>
                        <DatePicker
                            id="end-date"
                            className={cx('form-control')}
                            selected={endDate}
                            onChange={handleEndDateChange}
                            dateFormat="dd/MM/yyyy"
                            isClearable
                            minDate={startDate}
                        />
                    </div>
                    <button className={cx('button')} type="submit">Submit</button>
                </form>

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