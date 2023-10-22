import classNames from "classnames/bind";
import style from "./DeleteStaffContainer.module.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteStaffById } from "../../api/api";

const cx = classNames.bind(style);

function DeleteStaffContainer() {
    // lay param 
    const { id } = useParams();

    // tao navigate de dieu huong
    const navigate = useNavigate();

    // tao state de hien modal
    const [successDelete, setSuccessDelete] = useState(false);
    const [failDelete, setFailDelete] = useState(false);

    // xu ly delete
    const handleDelete = async () => {
        const ID = id;
        //  goi api xu ly delete
        try {
            const response = await fetch(deleteStaffById(ID), {
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
        navigate('/admin/view-staff');
    }

    // xu ly modal fail
    const handleFailDelete = () => {
        setFailDelete(false);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Delete Staff</h2>
                <h3 className={cx('sub-title')}>Do you really want to delete staff with id <span className={cx('id')}>{id}</span> ?</h3>
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

export default DeleteStaffContainer;