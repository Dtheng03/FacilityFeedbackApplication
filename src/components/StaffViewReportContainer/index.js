import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames/bind';
import style from './StaffViewReportContainer.module.scss';
import './datepicker.css';
import moment from 'moment/moment';
import { countFeedBack, countFeedBackFalse, countFeedBackTrue } from '../../api/api';

const cx = classNames.bind(style);

function Report() {

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

    const [countFB, setCountFB] = useState();
    const [countFBTrue, setCountFBTrue] = useState();
    const [countFBFalse, setCountFBFalse] = useState();

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
        // console.log('Start Date:', startDate.toLocaleDateString('en-GB'));
        // console.log('End Date:', endDate.toLocaleDateString('en-GB'));
        fetch(countFeedBack(moment(startDate).format('DD-MM-YYYY'), moment(endDate).format('DD-MM-YYYY')))
            .then(res => res.json())
            .then(data => {
                setCountFB(data)
            })
            .catch(error => console.log(error))
        fetch(countFeedBackTrue(moment(startDate).format('DD-MM-YYYY'), moment(endDate).format('DD-MM-YYYY')))
            .then(res => res.json())
            .then(data => {
                setCountFBTrue(data)
            })
            .catch(error => console.log(error))
        fetch(countFeedBackFalse(moment(startDate).format('DD-MM-YYYY'), moment(endDate).format('DD-MM-YYYY')))
            .then(res => res.json())
            .then(data => {
                setCountFBFalse(data)
            })
            .catch(error => console.log(error))
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
                            required
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
                            required
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

                {countFB ? (
                    <div className={cx('report')}>
                        <table className={cx('table')}>
                            <thead>
                                <tr className={cx('tr')}>
                                    <th className={cx('th')}></th>
                                    <th className={cx('th')}>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={cx('tr')}>
                                    <th className={cx('th1')}>Total feedback</th>
                                    <td className={cx('td')}>{countFB}</td>
                                </tr>
                                <tr className={cx('tr')}>
                                    <th className={cx('th1')}>Completed Feedback</th>
                                    <td className={cx('td')}>{countFBTrue}</td>
                                </tr>
                                <tr className={cx('tr')}>
                                    <th className={cx('th1')}>Incomplete Feedbacks</th>
                                    <td className={cx('td')}>{countFBFalse}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : <p className={cx('message')}>Please choose date</p>}
            </div>
        </div>
    );
}

export default Report;
