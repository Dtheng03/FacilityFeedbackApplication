import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames/bind';
import style from './StaffViewReportContainer.module.scss';
import './datepicker.css';
import moment from 'moment/moment';
import { report, reportProblem, reportRepair } from '../../api/api';

const cx = classNames.bind(style);

function Report() {

    // lay session
    const sessionToken = sessionStorage.getItem('sessionToken');
    const sessionData = JSON.parse(sessionToken);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [reports, setReports] = useState([]);
    const [problems, setProblems] = useState([]);
    const [repairs, setRepairs] = useState([]);

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
        const start = moment(startDate).format('YYYY/MM/DD');
        const end = moment(endDate).format('YYYY/MM/DD');

        e.preventDefault();
        fetch(report(start, end, sessionData.campusId))
            .then(res => res.json())
            .then(data => {
                setReports(data)
            })
            .catch(error => console.log(error))

        fetch(reportProblem(start, end, sessionData.campusId))
            .then(res => res.json())
            .then(data => {
                setProblems(data)
            })
            .catch(error => console.log(error))

        fetch(reportRepair(start, end, sessionData.campusId))
            .then(res => res.json())
            .then(data => {
                setRepairs(data)
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

                {reports.length > 0 && problems.length > 0 ?
                    (
                        reports.map((report, index) => (
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

                                <table className={cx('table')}>
                                    <thead>
                                        <tr className={cx('tr')}>
                                            <th className={cx('th')}>Problem</th>
                                            <th className={cx('th')}>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {problems.map((problem, index) => (
                                            <tr key={index} className={cx('tr')}>
                                                <td className={cx('td1')}>{problem.problemName}</td>
                                                <td className={cx('td')}>{problem.feedbackCount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <table className={cx('table')}>
                                    <thead>
                                        <tr className={cx('tr')}>
                                            <th className={cx('h1')}>ID</th>
                                            <th className={cx('h2')}>FeedbackId</th>
                                            <th className={cx('h3')}>Staff</th>
                                            <th className={cx('h4')}>RepairDate</th>
                                            <th className={cx('h5')}>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {repairs.map(repair => (
                                            <tr key={repair.id} className={cx('tr')}>
                                                <td className={cx('d1')}>{repair.id}</td>
                                                <td className={cx('d2')}>{repair.facilityFeedbackId}</td>
                                                <td className={cx('d3')}>{repair.staffName}</td>
                                                <td className={cx('d4')}>{repair.repairDate}</td>
                                                <td className={cx('d5')}>{repair.status ? "Finished" : "Not finished"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))
                    )
                    : <p className={cx('message')}>No report found</p>}
            </div>
        </div>
    );
}

export default Report;
