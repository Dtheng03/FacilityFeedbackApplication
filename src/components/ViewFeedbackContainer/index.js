import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './ViewFeedbackContainer.module.scss'
import classNames from 'classnames/bind';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { getFeedbackByCampusId } from '../../api/api';

const cx = classNames.bind(style);

function ViewFeedbackContainer() {

    const [campus, setCampus] = useState();
    const [data, setData] = useState([]);

    const handleSetCampus = (e) => {
        setCampus(e.target.value)
    }

    const handleSearch = async (event) => {
        event.preventDefault();
        // xu ly logic lay du lieu de render
        try {
            const response = await fetch(getFeedbackByCampusId(campus), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const responseBody = await response.json();

            if (response.ok) {
                setData(responseBody);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p className={cx('title')}>View feedback</p>
                <form className={cx('search')} onSubmit={handleSearch}>
                    <label className={cx('label')}>For campus:</label>
                    <select id="campus" className={cx('select')} onChange={handleSetCampus} >
                        <option>- Choose your campus -</option>
                        <option value={1} >Hà Nội</option>
                        <option value={2} >Hồ Chí Minh</option>
                        <option value={3} >Đà Nẵng</option>
                        <option value={4} >Quy Nhơn</option>
                        <option value={5} >Cần Thơ</option>
                    </select>
                    <button className={cx('btn')} type='Submit'><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
                </form>
            </div>
            {data.length > 0 ? (
                <div className={cx('container')}>
                    <table className={cx('table')}>
                        <thead>
                            <tr className={cx('tr')}>
                                <th className={cx('th1')}>Id</th>
                                <th className={cx('th2')}>Room</th>
                                <th className={cx('th3')}>Facility</th>
                                <th className={cx('th4')}>Problem</th>
                                <th className={cx('th5')}>Status</th>
                                <th className={cx('th6')}>CreateDate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((feedback, index) => (
                                <tr className={cx('tr')} key={index}>
                                    <td className={cx('td1')}>{feedback.id}</td>
                                    <td className={cx('td2')}>{feedback.roomName}</td>
                                    <td className={cx('td3')}>{feedback.facilityName}</td>
                                    <td className={cx('td4')}>{feedback.facilityProblemName}</td>
                                    <td className={cx('td5')}>{feedback.status ? "Processed" : "Processing"} </td>
                                    <td className={cx('td6')}>{feedback.createDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className={cx('text')}>No feedback found.</p>
            )}
        </div>
    );
}

export default ViewFeedbackContainer;