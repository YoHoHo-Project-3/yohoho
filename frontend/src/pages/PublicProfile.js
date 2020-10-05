import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './PublicProfile.css'
import Axios from 'axios';

export default function Profile(props) {
    const userId = props.match.params.id;
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const result = await Axios.get(`/api/profile/${userId}`);
            setUser(result.data);
        }
        fetchData();
    }, [userId]);

    if (!user) return (<p>Loading ...</p>);

    const birthdate = user.birthdate ? user.birthdate.slice(0, 10) : '';

    return (
        <div className="profile-page">
                <h3>{user.name} {user.lastName}</h3>
                 <div className='table-responsive'>
                        <table className="table" width='300'>
                            <tbody>
                                <tr>
                                    <th scope='col'>Profile Picture</th>
                                    <td><img src={user.picture} /></td>
                                </tr>
                                <tr>
                                    <th scope='col'>Birthdate</th>
                                    <td>{birthdate}</td>
                                </tr>
                                <tr>
                                    <th scope='col'>Experience</th>
                                    <td>{user.experience}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
    );
}