import classNames from "classnames/bind";
import style from "./DeleteRoomContainer.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { deleteRoom } from "../../api/api";

const cx = classNames.bind(style);

function DeleteRoomContainer() {

    // navigate
    const navigate = useNavigate();

    // lay param 
    const { id } = useParams();

    // tao state de hien modal
    const [successDelete, setSuccessDelete] = useState(false);
    const [failDelete, setFailDelete] = useState(false);

    // xu ly delete
    const handleDelete = async () => {
        const ID = id;
        //  goi api xu ly delete
        try {
            const response = await fetch(deleteRoom(ID), {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const responseBody = await response.json();

            if (response.ok) {
                if (responseBody) {
                    setSuccessDelete(true);
                }
            } else {
                setFailDelete(true);
            }
        } catch (error) {
            setFailDelete(true);
        }
    }

    // xu ly modal success
    const handleSuccesDelete = () => {
        setSuccessDelete(false);
        navigate("/admin/view-room")
    }

    // xu ly modal fail
    const handleFailDelete = () => {
        setFailDelete(false);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Delete Room</h2>
                <h3 className={cx('sub-title')}>Do you really want to delete room with id <span className={cx('id')}>{id}</span> ?</h3>
                <p className={cx('note')}>Note that this action will directly affect the data.</p>
                <div className={cx('button-group')}>
                    <button className={cx('btn')} onClick={handleDelete}>Yes</button>
                    <button className={cx('btn')} onClick={() => { window.history.back(); }}>
                        No
                    </button>
                </div>
            </div>

            {/* modal success delete */}
            <div>
                {successDelete && (
                    <div className={cx('modal')}>
                        <div className={cx('modal-content')}>
                            <h2 className={cx('modal-title')}>Delete Succesfully!</h2>
                            <button className={cx('close')} onClick={handleSuccesDelete}>Ok</button>
                        </div>
                    </div>
                )}
            </div>

            {/* modal fail delete */}
            <div>
                {failDelete && (
                    <div className={cx('modal')}>
                        <div className={cx('modal-content')}>
                            <h2 className={cx('modal-title')}>Delete Failed!</h2>
                            <button className={cx('close')} onClick={handleFailDelete}>Ok</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DeleteRoomContainer;