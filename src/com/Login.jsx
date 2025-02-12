import React from 'react';
import './Home.css';

const Login = () => {
  return (
    <div className='container'>
      <table border={1} className='login-form'>
        <tbody>
          <tr>
            <td colSpan={2}>Login Page</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" className='form-control' id='un' />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input type='password' className='form-control' id='pw' />
            </td>
          </tr>
          <tr>
            <td>Role:</td>
            <td>
              <select className='form-control' id='sell'>
                <option value="1">Admin</option>
                <option value="2">User</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button>Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Login;
