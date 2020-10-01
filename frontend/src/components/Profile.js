import React from 'react'
import { Table, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from './Profile.css'

export default function Dashboard({user}) {
    console.log(user)
    return (
        <div className="profile-page">
        <h3>Your profile</h3>
            <div className='table-responsive'>
            <table className="table" width='300'>
            <tbody>
            <tr>
            <th scope='col'>Profile Picture</th>
            <td></td>
            </tr>
            <tr>
            <th scope='col'>Name</th>
            <td>{user.username}</td>
            </tr>
            <tr>
            <th scope='col'>Email</th>
            <td>{user.email}</td>
            </tr>
            <tr>
            <th scope='col'>Password</th>
            <td>********</td>
            </tr>
            <tr>
            <th scope='col'>Birthdate</th>
            <td></td>
            </tr>
            <tr>
            <th scope='col'>Phone</th>
            <td></td>
            </tr>
            <tr>
            <th scope='col'>Experience</th>
            <td></td>
            </tr>
            </tbody>
            </table>
            </div>
            <button>Edit your Profile</button>
        </div>
    )
}
