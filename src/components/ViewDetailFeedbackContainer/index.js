import classNames from "classnames/bind";
import style from "./ViewDetailFeedbackContainer.module.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const cx = classNames.bind(style);

function ViewDetailFeedbackContainer() {

    const param = useParams();

    const [data, setData] = useState();

    useEffect(() => {
        // fetch(`http://localhost:8080/api/feedback/getAll/${param.id}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         setData(data);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
    }, [])

    const handleBack = () => {
        window.history.back();
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h3>View Detail Feedback</h3>
                <div>
                    <label>1.Id:</label>
                    <p></p>
                </div>
                <div>
                    <label>2.Campus:</label>
                    <p></p>
                </div>
                <div>
                    <label>3.Floor:</label>
                    <p></p>
                </div>
                <div>
                    <label>4.Room:</label>
                    <p></p>
                </div>
                <div>
                    <label>5.Facility:</label>
                    <p></p>
                </div>
                <div>
                    <label>6.Problem:</label>
                    <p></p>
                </div>
                <div>
                    <label>7.Description:</label>
                    <p></p>
                </div>
                <div>
                    <label>8.Image:</label>
                    <p></p>
                </div>
                <div>
                    <button onClick={handleBack}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default ViewDetailFeedbackContainer;