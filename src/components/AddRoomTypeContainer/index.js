import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import style from "./AddRoomTypeContainer.module.scss";
import { addRoomType } from "../../api/api";
import { useState } from "react";

const cx = classNames.bind(style);

function AddRoomTypeContainer() {

    const [name, setName] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        fetch(addRoomType, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": name
            })
        })
            .then(res => res.json())
            .then(data => setIsSuccess(true))
            .catch(error => console.log(error.message))
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>New Room Type</h2>
                <form onSubmit={handleSubmit}>
                    <div className={cx('label')}>
                        <label className={cx('field')}>1.Room Type:</label>
                        <input className={cx('input')} type="text" required value={name} onChange={(e) => { setName(e.target.value) }}></input>
                    </div>
                    <div className={cx('label')}>
                        <button className={cx('btn')} onClick={() => { window.history.back() }}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </button>
                        <button className={cx('btn')}>
                            <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
                        </button>
                    </div>
                </form>

                {/* Add success */}
                <div>
                    {isSuccess && (
                        <div className={cx('modal')}>
                            <div className={cx('modal-content')}>
                                <h2 className={cx('modal-title')}>Add Successfully!</h2>
                                <button className={cx('close')} onClick={() => { setIsSuccess(false) }}>Ok</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddRoomTypeContainer;