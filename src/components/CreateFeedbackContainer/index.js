import classNames from "classnames/bind";
import styles from "./CreateFeedbackContainer.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function CreateFeedbackContainer() {

    const listFloors = [
        { id: '1', campusId: '1', floorName: 'Tầng trệt - HN', },
        { id: '2', campusId: '1', floorName: 'Tầng 1 - HN', },
        { id: '3', campusId: '1', floorName: 'Tầng 2 - HN', },
        { id: '4', campusId: '1', floorName: 'Tầng 3 - HN', },
        { id: '5', campusId: '1', floorName: 'Tầng 4 - HN', },
        { id: '6', campusId: '1', floorName: 'Tầng 5 - HN', },
        { id: '7', campusId: '1', floorName: 'Tầng 6 - HN', },
        { id: '8', campusId: '2', floorName: 'Tầng trệt - HCM', },
        { id: '9', campusId: '2', floorName: 'Tầng 1 - HCM', },
        { id: '10', campusId: '2', floorName: 'Tầng 2 - HCM', },
        { id: '11', campusId: '2', floorName: 'Tầng 3 - HCM', },
        { id: '12', campusId: '2', floorName: 'Tầng 4 - HCM', },
        { id: '13', campusId: '2', floorName: 'Tầng 5 - HCM', },
        { id: '14', campusId: '2', floorName: 'Tầng 6 - HCM', },
        { id: '15', campusId: '3', floorName: 'Tầng trệt - DN', },
        { id: '16', campusId: '3', floorName: 'Tầng 1 - DN', },
        { id: '17', campusId: '3', floorName: 'Tầng 2 - DN', },
        { id: '18', campusId: '3', floorName: 'Tầng 3 - DN', },
        { id: '19', campusId: '3', floorName: 'Tầng 4 - DN', },
        { id: '20', campusId: '4', floorName: 'Tầng trệt - QN', },
        { id: '21', campusId: '4', floorName: 'Tầng 1 - QN', },
        { id: '22', campusId: '4', floorName: 'Tầng 2 - QN', },
        { id: '23', campusId: '4', floorName: 'Tầng 3 - QN', },
        { id: '24', campusId: '4', floorName: 'Tầng 4 - QN', },
        { id: '25', campusId: '5', floorName: 'Tầng trệt - CT', },
        { id: '26', campusId: '5', floorName: 'Tầng 1 - CT', },
        { id: '27', campusId: '5', floorName: 'Tầng 2 - CT', },
        { id: '28', campusId: '5', floorName: 'Tầng 3 - CT', },
    ];

    const listRooms = [
        { id: '1', floorId: '1', roomName: 'room 001' },
        { id: '2', floorId: '1', roomName: 'room 002' },
        { id: '3', floorId: '1', roomName: 'room 003' },
        { id: '4', floorId: '1', roomName: 'room 004' },
        { id: '5', floorId: '1', roomName: 'room 005' },

        { id: '6', floorId: '2', roomName: 'room 101' },
        { id: '7', floorId: '2', roomName: 'room 102' },
        { id: '8', floorId: '2', roomName: 'room 103' },
        { id: '9', floorId: '2', roomName: 'room 104' },
        { id: '10', floorId: '2', roomName: 'room 105' },
        { id: '11', floorId: '2', roomName: 'room 106' },

        { id: '12', floorId: '3', roomName: 'room 201' },
        { id: '13', floorId: '3', roomName: 'room 202' },
        { id: '14', floorId: '3', roomName: 'room 203' },
        { id: '15', floorId: '3', roomName: 'room 204' },
        { id: '16', floorId: '3', roomName: 'room 205' },

        { id: '17', floorId: '4', roomName: 'room 301' },
        { id: '18', floorId: '4', roomName: 'room 302' },
        { id: '19', floorId: '4', roomName: 'room 303' },
        { id: '20', floorId: '4', roomName: 'room 304' },
        { id: '21', floorId: '4', roomName: 'room 305' },
        { id: '22', floorId: '4', roomName: 'room 306' },

        { id: '23', floorId: '5', roomName: 'room 401' },
        { id: '24', floorId: '5', roomName: 'room 402' },
        { id: '25', floorId: '5', roomName: 'room 403' },
        { id: '26', floorId: '5', roomName: 'room 404' },
        { id: '27', floorId: '5', roomName: 'room 405' },

        { id: '28', floorId: '6', roomName: 'room 501' },
        { id: '29', floorId: '6', roomName: 'room 502' },
        { id: '30', floorId: '6', roomName: 'room 503' },
        { id: '31', floorId: '6', roomName: 'room 504' },
        { id: '32', floorId: '6', roomName: 'room 505' },
        { id: '33', floorId: '6', roomName: 'room 506' },

        { id: '34', floorId: '7', roomName: 'room 601' },
        { id: '35', floorId: '7', roomName: 'room 602' },
        { id: '36', floorId: '7', roomName: 'room 603' },
        { id: '37', floorId: '7', roomName: 'room 604' },
        { id: '38', floorId: '7', roomName: 'room 605' },

        { id: '39', floorId: '8', roomName: 'room 001' },
        { id: '40', floorId: '8', roomName: 'room 002' },
        { id: '41', floorId: '8', roomName: 'room 003' },
        { id: '42', floorId: '8', roomName: 'room 004' },
        { id: '43', floorId: '8', roomName: 'room 005' },

        { id: '44', floorId: '9', roomName: 'room 101' },
        { id: '45', floorId: '9', roomName: 'room 102' },
        { id: '46', floorId: '9', roomName: 'room 103' },
        { id: '47', floorId: '9', roomName: 'room 104' },
        { id: '48', floorId: '9', roomName: 'room 105' },
        { id: '49', floorId: '9', roomName: 'room 106' },

        { id: '50', floorId: '10', roomName: 'room 201' },
        { id: '51', floorId: '10', roomName: 'room 202' },
        { id: '52', floorId: '10', roomName: 'room 203' },
        { id: '53', floorId: '10', roomName: 'room 204' },
        { id: '54', floorId: '10', roomName: 'room 205' },

        { id: '55', floorId: '11', roomName: 'room 301' },
        { id: '56', floorId: '11', roomName: 'room 302' },
        { id: '57', floorId: '11', roomName: 'room 303' },
        { id: '58', floorId: '11', roomName: 'room 304' },
        { id: '59', floorId: '11', roomName: 'room 305' },
        { id: '60', floorId: '11', roomName: 'room 306' },

        { id: '61', floorId: '12', roomName: 'room 401' },
        { id: '62', floorId: '12', roomName: 'room 402' },
        { id: '63', floorId: '12', roomName: 'room 403' },
        { id: '64', floorId: '12', roomName: 'room 404' },
        { id: '65', floorId: '12', roomName: 'room 405' },

        { id: '66', floorId: '13', roomName: 'room 501' },
        { id: '67', floorId: '13', roomName: 'room 502' },
        { id: '68', floorId: '13', roomName: 'room 503' },
        { id: '69', floorId: '13', roomName: 'room 504' },
        { id: '70', floorId: '13', roomName: 'room 505' },
        { id: '71', floorId: '13', roomName: 'room 506' },

        { id: '72', floorId: '14', roomName: 'room 601' },
        { id: '73', floorId: '14', roomName: 'room 602' },
        { id: '74', floorId: '14', roomName: 'room 603' },
        { id: '75', floorId: '14', roomName: 'room 604' },
        { id: '76', floorId: '14', roomName: 'room 605' },
    ];

    const [floors, setFloor] = useState([]);
    const [rooms, setRoom] = useState([]);

    const handleSetCampus = (id) => {
        const fl = listFloors.filter(x => x.campusId === id);
        setFloor(fl);
    }

    const handleSetFloor = (id) => {
        const rm = listRooms.filter(x => x.floorId === id);
        setRoom(rm);

    }

    const handleSetRoom = (id) => {

    }

    return <div className={cx('wrapper')}>
        <form className={cx('form')}>
            <h3 className={cx('title')}>Feedback</h3>
            <div className={cx('campus')}>
                <label className={cx('campus-label')}>Campus *</label>
                <select id="campus" className={cx('campus-select')} onChange={(e) => handleSetCampus(e.target.value)} required>
                    <option value={'0'} >- Choose your campus -</option>
                    <option value={'1'} >Hà Nội</option>
                    <option value={'2'} >Hồ Chí Minh</option>
                    <option value={'3'} >Đà Nẵng</option>
                    <option value={'4'} >Quy Nhơn</option>
                    <option value={'5'} >Cần Thơ</option>
                </select>
            </div>
            <div className={cx('floor')}>
                <label className={cx('floor-label')}>Floor *</label>
                <select id="floor" className={cx('floor-select')} onChange={(e) => handleSetFloor(e.target.value)}>
                    <option value={'0'}>- Choose your floor -</option>
                    {floors.map((floor, index) => (
                        <option key={index} value={floor.id}>{floor.floorName}</option>
                    ))}
                </select>
            </div>
            <div className={cx('room')}>
                <label className={cx('room-label')}>Room *</label>
                <select id="room" className={cx('room-select')} onChange={(e) => handleSetRoom(e.target.value)}>
                    <option value={'0'}>- Choose your room -</option>
                    {rooms.map((room, index) => (
                        <option key={index} value={room.id}>{room.roomName}</option>
                    ))}
                </select>
            </div>
            <div className={cx('facility')}>
                <label className={cx('facility-label')}>Facility *</label>
                <select id="facility" className={cx('facility-select')} >
                    <option value={'0'}>- Choose your facility -</option>
                    {rooms.map((room, index) => (
                        <option key={index} value={room.id}>{room.roomName}</option>
                    ))}
                </select>
            </div>
            <div className={cx('problem')}>
                <label className={cx('problem-label')}>Problem *</label>
                <select id="problem" className={cx('problem-select')}>
                    <option value={'0'}>- Choose your problem -</option>
                    {rooms.map((room, index) => (
                        <option key={index} value={room.id}>{room.roomName}</option>
                    ))}
                </select>
            </div>
            <div className={cx('description')}>
                <label className={cx('description-label')}>Description</label>
                <textarea className={cx('description-text')} rows="3" placeholder="Brief description of the current situation (optional)"></textarea>
            </div>
            <div>
                <Link to={"success"} className={cx('btn')}>
                    <button className={cx('submit')} type="submit">
                        Send feedback
                        <FontAwesomeIcon className={cx('icon')} icon={faPaperPlane}></FontAwesomeIcon>
                    </button>
                </Link>
            </div>
        </form>
    </div>;

    const c = document.getElementById("campus");
    console.log(c);

}

export default CreateFeedbackContainer;
