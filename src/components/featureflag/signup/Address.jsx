
import { useState } from 'react';
 
export default function Address() {
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="gap">
      <form className="col-lg-6 offset-lg-3">
        <div className="gap border justify-content-center">
            <div className="form-group row">
                <label for="firstName3" className="col-sm-4 col-form-label">First Name</label>
                <div className="col-sm-7">
                  <input type="firstName3" className="form-control" id="firstName3" placeholder="First Name"/>
                </div>
            </div>
            <div className="form-group row">
                <label for="lastName3" className="col-sm-4 col-form-label">Last Name</label>
                <div className="col-sm-7">
                  <input type="lastName3" className="form-control" id="lastName3" placeholder="Last Name"/>
                </div>
            </div>
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-4 col-form-label">Email</label>
              <div className="col-sm-7">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-4 col-form-label">Password</label>
              <div className="col-sm-7">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-xl">Sign up</button>
              </div>
            </div>
        </div>
      </form>
    </div>
  );
}