import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames/bind';
import style from './StaffViewReportContainer.module.scss';
import './datepicker.css';
import moment from 'moment/moment';
import { countFeedBack, countFeedBackFalse, countFeedBackTrue, report } from '../../api/api';

const cx = classNames.bind(style);

function Report() {

    // lay session
    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // const [countFB, setCountFB] = useState();
    // const [countFBTrue, setCountFBTrue] = useState();
    // const [countFBFalse, setCountFBFalse] = useState();
    const [reports, setReports] = useState([]);

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

        // fetch(countFeedBack(moment(startDate).format('DD-MM-YYYY'), moment(endDate).format('DD-MM-YYYY')))
        //     .then(res => res.json())
        //     .then(data => {
        //         setCountFB(data)
        //     })
        //     .catch(error => console.log(error))
        // fetch(countFeedBackTrue(moment(startDate).format('DD-MM-YYYY'), moment(endDate).format('DD-MM-YYYY')))
        //     .then(res => res.json())
        //     .then(data => {
        //         setCountFBTrue(data)
        //     })
        //     .catch(error => console.log(error))
        // fetch(countFeedBackFalse(moment(startDate).format('DD-MM-YYYY'), moment(endDate).format('DD-MM-YYYY')))
        //     .then(res => res.json())
        //     .then(data => {
        //         setCountFBFalse(data)
        //     })
        //     .catch(error => console.log(error))
        fetch(report(moment(startDate).format('YYYY/MM/DD'), moment(endDate).format('YYYY/MM/DD')))
            .then(res => res.json())
            .then(data => {
                setReports(data)
            })
            .catch(error => console.log(error))
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Report</h2>

                <form className={cx('form-container')} onSubmit={handleSubmit}>
                    <div className={cx('form-group')}>
                        <label className={cx('label')} htmlFor="start-date">Start:</label>
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
                        <label className={cx('label')} htmlFor="end-date">End:</label>
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

                {reports.length > 0 ? reports.map((report, index) => (
                    <div key={index} className={cx('report')}>
                        <table className={cx('table')}>
                            <thead>
                                <tr className={cx('tr')}>
                                    <th className={cx('th')}></th>
                                    <th className={cx('th')}>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={cx('tr')}>
                                    <th className={cx('th1')}>Total feedbacks</th>
                                    <td className={cx('td')}>{report.totalFeedback}</td>
                                </tr>
                                <tr className={cx('tr')}>
                                    <th className={cx('th1')}>Completed</th>
                                    <td className={cx('td')}>{report.trueStatusFeedback}</td>
                                </tr>
                                <tr className={cx('tr')}>
                                    <th className={cx('th1')}>Incomplete</th>
                                    <td className={cx('td')}>{report.falseStatusFeedback}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))
                    : <p className={cx('message')}>No report found</p>}
            </div>
        </div>
    );
}

export default Report;
