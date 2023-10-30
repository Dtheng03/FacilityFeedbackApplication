import classNames from "classnames/bind";
import styles from "./CreateFeedbackContainer.module.scss";
import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { createFeedback, getAllCampus, getAllFacility, getAllFacilityProblem, getAllFloor, getAllRoom } from "../../api/api";

const cx = classNames.bind(styles);

function CreateFeedbackContainer() {

    // tao state luu thong tin feedback
    const [feedback, setFeedback] = useState({
        campusId: 0,
        floorId: 0,
        roomId: 0,
        facilityId: 0,
        facilityProblemId: 0,
        image: null,
        description: "",
    });

    // tao bien de dieu huong
    const navigate = useNavigate();

    // List chứa toàn bộ dữ liệu
    const [listCampuss, setListCampus] = useState([]);
    const [listFloors, setListFloor] = useState([]);
    const [listRooms, setListRoom] = useState([]);
    const [listFacilitys, setListFacility] = useState([]);
    const [listFacilityProblems, setListFacilityProblem] = useState([]);

    // List chứa dữ liệu để hiện thị lên form
    const [floors, setFloor] = useState([]);
    const [rooms, setRoom] = useState([]);
    const [facilitys, setFacility] = useState([]);
    const [facilityProblems, setFacilityProblem] = useState([]);

    // Hiển thị phần thêm hình ảnh
    const [showImg, setShowImg] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    // tao state xu ly gui feedback
    const [feedbackFail, setFeedbackFail] = useState(false);

    // Call api để lấy toàn bộ dữ liệu
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [response1, response2, response3, response4, response5] = await Promise.all([
                    fetch(getAllCampus),
                    fetch(getAllFloor),
                    fetch(getAllRoom),
                    fetch(getAllFacility),
                    fetch(getAllFacilityProblem)
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

    // Xử lý phần chọn campus
    const handleSetCampus = (e) => {
        const fl = listFloors.filter(x => x.campusId === Number(e.target.value));
        setFloor(fl);
        setFeedback({
            ...feedback,
            [e.target.name]: e.target.value
        })
    }

    // Xử lý phần chọn floor
    const handleSetFloor = (e) => {
        const rm = listRooms.filter(x => x.floorId === Number(e.target.value));
        setRoom(rm);
        setFeedback({
            ...feedback,
            [e.target.name]: e.target.value
        })
    }

    // Xử lý phần chọn room
    const handleSetRoom = (e) => {
        const rt = listRooms.find(x => x.id === Number(e.target.value));
        const fc = listFacilitys.filter(x => x.roomTypeId === Number(rt.roomTypeId));
        setFacility(fc);
        setFeedback({
            ...feedback,
            [e.target.name]: e.target.value
        })
    }

    // Xử lý phần chọn facility
    const handleSetFacility = (e) => {
        const ft = listFacilitys.find(x => x.id === Number(e.target.value));
        const fp = listFacilityProblems.filter(x => x.facilityTypeId === Number(ft.facilityTypeId));
        setFacilityProblem(fp);
        setFeedback({
            ...feedback,
            [e.target.name]: e.target.value
        })
    }

    // xu ly phan chon facilityProblem
    const handleSetProblem = (e) => {
        setFeedback({
            ...feedback,
            [e.target.name]: e.target.value
        })
    }

    // Xử lý phần thêm hình ảnh
    const handleImageUpload = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = () => {
            const imageUrl = reader.result;
            setUploadedImage(imageUrl);

        };
        reader.readAsDataURL(file);

        setFeedback({
            ...feedback,
            image: file
        })
    }

    // Xử lý khi ấn xóa ảnh
    const handleRemoveImage = () => {
        setUploadedImage(null);
        setFeedback({
            ...feedback,
            image: null
        });
    };

    // Xử lý khi ấn vào ảnh
    const handleModalOpen = () => {
        setShowImg(true);
    };

    // Xử lý khi đóng ảnh
    const handleModalClose = () => {
        setShowImg(false);
    };

    // xu ly set description
    const handleSetDescription = (e) => {
        setFeedback({
            ...feedback,
            [e.target.name]: e.target.value
        });
    }

    // Xử lý khi gửi feedback thất bại
    const handleFeedbackFail = () => {
        setFeedbackFail(false);
    }

    // Xử lý logic khi gửi feedback
    const handleSubmit = async (event) => {
        event.preventDefault();

        // call api
        try {
            const formData = new FormData();
            formData.append("campusId", Number(feedback.campusId));
            formData.append("floorId", Number(feedback.floorId));
            formData.append("roomId", Number(feedback.roomId));
            formData.append("facilityId", Number(feedback.facilityId));
            formData.append("facilityProblemId", Number(feedback.facilityProblemId));
            formData.append("description", feedback.description);
            formData.append("image", feedback.image);

            const response = await axios.post(createFeedback, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })

            if (response) {
                // if success
                navigate('success')
            } else {
                // if fail
                setFeedbackFail(true)
            }

            // reset data
            setFeedback({
                campusId: 0,
                floorId: 0,
                roomId: 0,
                facilityId: 0,
                facilityProblemId: 0,
                image: null,
                description: "",
            });
        } catch (error) {
            setFeedbackFail(true)
        }
    }

    return <div className={cx('wrapper')}>

        <form className={cx('form')} onSubmit={handleSubmit}>

            <h3 className={cx('title')}>Feedback</h3>

            {/* Chọn campus */}
            <div className={cx('campus')}>
                <label className={cx('campus-label')}>Campus *</label>
                <select name="campusId" required className={cx('campus-select')} onChange={(e) => handleSetCampus(e)}>
                    <option value={0}>- Choose your campus -</option>
                    {listCampuss.map((campus, index) => (
                        <option key={index} value={campus.id}>{campus.name}</option>
                    ))}
                </select>
            </div>

            {/* Chọn floor */}
            <div className={cx('floor')}>
                <label className={cx('floor-label')}>Floor *</label>
                <select name="floorId" required className={cx('floor-select')} onChange={(e) => handleSetFloor(e)}>
                    <option value={0}>- Choose your floor -</option>
                    {floors.map((floor, index) => (
                        <option key={index} value={floor.id}>{floor.name}</option>
                    ))}
                </select>
            </div>

            {/* Chọn room */}
            <div className={cx('room')}>
                <label className={cx('room-label')}>Room *</label>
                <select name="roomId" required className={cx('room-select')} onChange={(e) => handleSetRoom(e)}>
                    <option value={0}>- Choose your room -</option>
                    {rooms.map((room, index) => (
                        <option key={index} value={room.id}>{room.name}</option>
                    ))}
                </select>
            </div>

            {/* Chọn facility */}
            <div className={cx('facility')}>
                <label className={cx('facility-label')}>Facility *</label>
                <select name="facilityId" required className={cx('facility-select')} onChange={(e) => { handleSetFacility(e) }} >
                    <option value={0}>- Choose your facility -</option>
                    {facilitys.map((facility, index) => (
                        <option key={index} value={facility.id}>{facility.name}</option>
                    ))}
                </select>
            </div>

            {/* Chọn problem */}
            <div className={cx('problem')}>
                <label className={cx('problem-label')}>Problem *</label>
                <select name="facilityProblemId" required className={cx('problem-select')} onChange={(e) => { handleSetProblem(e) }}>
                    <option value={0}>- Choose your problem -</option>
                    {facilityProblems.map((problem, index) => (
                        <option key={index} value={problem.id}>{problem.problemName}</option>
                    ))}
                </select>
            </div>

            {/* Thêm ảnh */}
            <div className={cx('img')}>
                <label className={cx('img-label')}>Image *</label>
                <Dropzone onDrop={handleImageUpload}>
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()} className={cx('img-input')}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop an image here, or click to select an image</p>
                        </div>
                    )}
                </Dropzone>
            </div>

            {/* Hiện ảnh khi có ảnh tải lên */}
            {uploadedImage && (
                <div className={cx('img-hold')}>
                    <img className={cx('image')} src={uploadedImage} onClick={handleModalOpen} alt="Uploaded" />
                    <button className={cx('remove')} onClick={handleRemoveImage}>&times;</button>
                </div>
            )}

            {/* Thêm mô tả */}
            <div className={cx('description')}>
                <label className={cx('description-label')}>Description</label>
                <textarea
                    className={cx('description-text')}
                    name="description"
                    rows="3"
                    maxLength={50}
                    placeholder="Please describe the condition 
                (Maximum 50 characters)."
                    onChange={(e) => handleSetDescription(e)}></textarea>
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
                        <img className={cx('modal-img')} src={uploadedImage} alt="Uploaded" />
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
                        <button className={cx('modal-close')} onClick={handleFeedbackFail}>OK</button>
                    </div>
                </div>
            )}
        </div>
    </div>;
}

export default CreateFeedbackContainer;
