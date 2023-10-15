import classNames from "classnames/bind";
import styles from "./CreateFeedbackContainer.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function CreateFeedbackContainer() {

    const navigate = useNavigate();

    // List chứa toàn bộ dữ liệu
    let [listCampuss, setListCampus] = useState([]);
    let [listFloors, setListFloor] = useState([]);
    let [listRooms, setListRoom] = useState([]);
    let [listFacilitys, setListFacility] = useState([]);
    let [listFacilityProblems, setListFacilityProblem] = useState([]);

    // List chứa dữ liệu để hiện thị lên form
    const [floors, setFloor] = useState([]);
    const [rooms, setRoom] = useState([]);
    const [facilitys, setFacility] = useState([]);
    const [facilityProblems, setFacilityProblem] = useState([]);

    // Lưu thời gian tạo feedback
    const [submitDateTime, setSubmitDateTime] = useState('');

    // Hiển thị phần thêm hình ảnh
    const [selectedImage, setSelectedImage] = useState(null);
    const [showImg, setShowImg] = useState(false);

    // Xử lý phần chọn campus
    const handleSetCampus = (id) => {
        const fl = listFloors.filter(x => x.campusId === Number(id));
        setFloor(fl);
    }

    // Xử lý phần chọn floor
    const handleSetFloor = (id) => {
        const rm = listRooms.filter(x => x.floorId === Number(id));
        setRoom(rm);
    }

    // Xử lý phần chọn room
    const handleSetRoom = (id) => {
        const fc = listFacilitys.filter(x => x.roomTypeId === Number(id));
        setFacility(fc);
    }

    // Xử lý phần chọn facility
    const handleSetFacility = (id) => {
        const fp = listFacilityProblems.filter(x => x.facilityTypeId === Number(id));
        setFacilityProblem(fp);
    }

    // Call api để lấy toàn bộ dữ liệu
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [response1, response2, response3, response4, response5] = await Promise.all([
                    fetch('http://localhost:8080/api/campus'),
                    fetch('http://localhost:8080/api/floor'),
                    fetch('http://localhost:8080/api/room'),
                    fetch('http://localhost:8080/api/facility'),
                    fetch('http://localhost:8080/api/facilityProblem')
                ]);

                const jsonData1 = await response1.json();;
                const jsonData2 = await response2.json();;
                const jsonData3 = await response3.json();;
                const jsonData4 = await response4.json();;
                const jsonData5 = await response5.json();;

                setListCampus(jsonData1);
                setListFloor(jsonData2);
                setListRoom(jsonData3);
                setListFacility(jsonData4);
                setListFacilityProblem(jsonData5);

            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, [])

    // Xử lý khi xóa hình ảnh, tránh rò ri bộ nhớ
    useEffect(() => {
        return () => {
            selectedImage && URL.revokeObjectURL(selectedImage)
        }
    }, [selectedImage])

    // Xử lý phần thêm hình ảnh
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    // Xử lý khi ấn xóa ảnh
    const handleRemoveImage = () => {
        setSelectedImage(null);
    };

    // Xử lý khi ấn vào ảnh
    const handleModalOpen = () => {
        setShowImg(true);
    };

    // Xử lý khi đóng ảnh
    const handleModalClose = () => {
        setShowImg(false);
    };

    // Xử lý khi gửi feedback thất bại
    const [feedbackFail, setFeedbackFail] = useState(false);

    const handleFeedbackFail = () => {
        setFeedbackFail(false);
    }

    // Xử lý logic khi gửi feedback
    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform additional form submission logic here
        // const currentDateTime = new Date().toLocaleString();
        // setSubmitDateTime(currentDateTime);

        // if success
        navigate('success')

        // if fail
        // setFeedbackFail(true)
    }

    return <div className={cx('wrapper')}>

        <form className={cx('form')} onSubmit={handleSubmit}>

            <h3 className={cx('title')}>Feedback</h3>

            {/* Chọn campus */}
            <div className={cx('campus')}>
                <label className={cx('campus-label')}>Campus *</label>
                <select id="campus" required className={cx('campus-select')} onChange={(e) => handleSetCampus(e.target.value)}>
                    <option value={''}>- Choose your campus -</option>
                    {listCampuss.map((campus, index) => (
                        <option key={index} value={campus.id}>{campus.name}</option>
                    ))}
                </select>
            </div>

            {/* Chọn floor */}
            <div className={cx('floor')}>
                <label className={cx('floor-label')}>Floor *</label>
                <select id="floor" required className={cx('floor-select')} onChange={(e) => handleSetFloor(e.target.value)}>
                    <option value={''}>- Choose your floor -</option>
                    {floors.map((floor, index) => (
                        <option key={index} value={floor.id}>{floor.name}</option>
                    ))}
                </select>
            </div>

            {/* Chọn room */}
            <div className={cx('room')}>
                <label className={cx('room-label')}>Room *</label>
                <select id="room" required className={cx('room-select')} onChange={(e) => handleSetRoom(e.target.value)}>
                    <option value={''}>- Choose your room -</option>
                    {rooms.map((room, index) => (
                        <option key={index} value={room.roomTypeId}>{room.name}</option>
                    ))}
                </select>
            </div>

            {/* Chọn facility */}
            <div className={cx('facility')}>
                <label className={cx('facility-label')}>Facility *</label>
                <select id="facility" required className={cx('facility-select')} onChange={(e) => { handleSetFacility(e.target.value) }} >
                    <option value={''}>- Choose your facility -</option>
                    {facilitys.map((facility, index) => (
                        <option key={index} value={facility.facilityTypeId}>{facility.name}</option>
                    ))}
                </select>
            </div>

            {/* Chọn problem */}
            <div className={cx('problem')}>
                <label className={cx('problem-label')}>Problem *</label>
                <select id="problem" required className={cx('problem-select')}>
                    <option value={''}>- Choose your problem -</option>
                    {facilityProblems.map((problem, index) => (
                        <option key={index} value={problem.id}>{problem.problemName}</option>
                    ))}
                </select>
            </div>

            {/* Thêm ảnh */}
            <div className={cx('img')}>
                <label className={cx('img-label')}>Image</label>
                <input className={cx('img-input')} type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            {/* Hiện ảnh khi có ảnh dc chọn */}
            {selectedImage && (
                <div className={cx('img-hold')}>
                    <img className={cx('image')} src={selectedImage} onClick={handleModalOpen} alt="Selected" />
                    <button className={cx('remove')} onClick={handleRemoveImage}>&times;</button>
                </div>
            )}

            {/* Thêm mô tả */}
            <div className={cx('description')}>
                <label className={cx('description-label')}>Description</label>
                <textarea className={cx('description-text')} rows="3" placeholder="Please describe the condition (optional)."></textarea>
            </div>

            {/* Nút gửi */}
            <div>
                <button className={cx('submit')} type="submit">
                    Send feedback
                    <FontAwesomeIcon className={cx('icon')} icon={faPaperPlane}></FontAwesomeIcon>
                </button>
            </div>
        </form>

        {/* Show full image */}
        <div>
            {showImg && (
                <div className={cx('modal')}>
                    <div className={cx('modal-content')}>
                        <img className={cx('modal-img')} src={selectedImage} alt="Selected" />
                        <button className={cx('modal-close')} onClick={handleModalClose}>
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>

        {/* Submit feedback fail */}
        <div>
            {feedbackFail && (
                <div className={cx('modal')}>
                    <div className={cx('modal-content')}>
                        <h2 className={cx('modal-title')}>Send Feedback Failed</h2>
                        <p className={cx('modal-info')}>Please check all information again!</p>
                        <button className={cx('modal-close')} onClick={handleFeedbackFail}>Ok</button>
                    </div>
                </div>
            )}
        </div>
    </div>;
}

export default CreateFeedbackContainer;
