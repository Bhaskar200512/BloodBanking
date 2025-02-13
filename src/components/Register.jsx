import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import KLlogo1 from './KLlogo1.jpeg';

const Register = () => {
  return (
    <div className='container'>
      <div className='menu'>
        <Link to='/'><img src={KLlogo1} alt='KL University Logo' /></Link>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>About Us</li>
        </ul>
      </div>

      <div className='register-container'>
        <h2>Register Page</h2>
        <table border={1} className='register-form'>
          <tbody>
            <tr>
              <td>Username:</td>
              <td><input type='text' className='form-control' id='username' /></td>
            </tr>
            <tr>
              <td>Email:</td>
              <td><input type='email' className='form-control' id='email' /></td>
            </tr>
            <tr>
              <td>Password:</td>
              <td><input type='password' className='form-control' id='password' /></td>
            </tr>
            <tr>
              <td>Confirm Password:</td>
              <td><input type='password' className='form-control' id='confirmPassword' /></td>
            </tr>
            <tr>
              <td colSpan={2} className='center'>
                <button>Register</button>
              </td>
            </tr>
            <tr>
              <td  colSpan={2} className='center'>
                <Link to='/login'><button>Back to Login</button></Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Register;
