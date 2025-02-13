import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import KLlogo1 from './KLlogo1.jpeg';

const Login = () => {
  return (
    <div className='container'>
      <div className='menu'><Link to='/'><img src={KLlogo1} alt='KL University Logo' /></Link>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>About Us</li>
        </ul>
      </div>
      
      <div className='login-container'>
        <h2>Login Page</h2>
        <table border={1} className='login-form'>
          <tbody>
            <tr>
              <td>Name:</td>
              <td><input type='text' className='form-control' id='un' /></td>
            </tr>
            <tr>
              <td>Password:</td>
              <td><input type='password' className='form-control' id='pw' /></td>
            </tr>
            <tr>
              <td>Role:</td>
              <td>
                <select className='form-control' id='sell'>
                  <option value='1'>Admin</option>
                  <option value='2'>User</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className='center'>
                <button>Submit</button>
              </td>
            </tr>
            <tr>
              <td>
                <Link to = '/Register'>
                <button>
                Sign in
                </button></Link>
              </td>
              <td><button>Forgot Password</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Login;