import classNames from "classnames/bind";
import style from "./AdminViewDetailStaffContainer.module.scss";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const cx = classNames.bind(style);

function AdminViewDetailStaffContainer() {

    const param = useParams();
    const [staff, setStaff] = useState([]);

    useEffect((() => {
        fetch(`http://localhost:8080/api/staff/find/${param.id}`)
            .then(response => response.json())
            .then(data => setStaff(data))
            .catch(error => { console.log(error); })
    }), [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>View Detail Staff</h2>
                {staff.map(st => (
                    <div key={st.id}>
                        <div className={cx('label')}>
                            <label className={cx('field')}>1. Id:</label>
                            <p className={cx('input')}>{st.id}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>2. FullName:</label>
                            <p className={cx('input')}>{st.fullName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>3. LoginName:</label>
                            <p className={cx('input')}>{st.loginName}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>4. Password:</label>
                            <p className={cx('input')}>{st.password}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>5. Manager:</label>
                            <p className={cx('input')}>{st.manager ? "True" : "False"}</p>
                        </div>
                        <div className={cx('label')}>
                            <label className={cx('field')}>6. Campus:</label>
                            <p className={cx('input')}>{st.campusName}</p>
                        </div>
                        <div className={cx('label')}>
                            <button className={cx('btn')}>
                                <Link className={cx('link')} to={`/admin/update-staff/${st.id}`}>
                                    Update
                                </Link>
                            </button>
                            <button className={cx('btn')}>
                                <Link className={cx('link')} to={`/admin/delete-staff/${st.id}`}>
                                    Delete
                                </Link>
                            </button>
                            <button className={cx('btn')} onClick={() => { window.history.back(); }}>
                                Back
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminViewDetailStaffContainer;