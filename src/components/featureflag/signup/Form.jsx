
import { useVariant, useUnleashContext } from '@unleash/proxy-client-react';
import { useState, useEffect } from 'react';
 
export default function Form({userId, brand}) {
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const updateContext = useUnleashContext();

  useEffect(() => {
    // context is updated with userId
    updateContext({ 'userId':userId })
    updateContext({ 'brand': brand })
  }, []);

  var variant = useVariant('signup-form-toggle');
  console.log('signup-form-toggle payload=>', variant);
  const obj = JSON.parse(variant.payload.value);
  var submitButtonClass = obj['submitButtonClass'];
  var uniqueIdLabel = obj['uniqueIdLabel'];
  
  
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="gap">
      <form className="col-lg-6 offset-lg-3">
        <div className="gap border justify-content-center">
          {/* <input type="text" placeholder="Example input"/>

          <span class="input-group-btn">
            <button class="btn btn-primary">Download</button>
          </span> */}
            <div className="form-group row">
                <label for="firstName3" className="col-sm-4 col-form-label">First Name</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="firstName3" placeholder="First Name"/>
                </div>
            </div>
            <div className="form-group row">
                <label for="lastName3" className="col-sm-4 col-form-label">Last Name</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="lastName3" placeholder="Last Name"/>
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
              <label for="customerUniqueId3" className="col-sm-4 col-form-label">{uniqueIdLabel}</label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="customerUniqueId3" placeholder="Customer Unique Id"/>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className={submitButtonClass}>Sign up</button>
              </div>
            </div>
        </div>
      </form>
    </div>
  );
}