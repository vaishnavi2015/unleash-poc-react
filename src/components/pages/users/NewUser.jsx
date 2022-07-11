import "./newUser.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserService from "./UserService";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function NewUser() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const navigate = useNavigate();
  const params = useParams();
  
  const validate=(values) => {
    let errors = {}
    return errors
}
  const onSubmit=(values) => {
    console.log('onCreate=>', values)
    let user = {
        username: values.username,
        password: values.password,
        fullName: values.fullName,
        phone: values.phone,
        email: values.email,
        address: values.address
    }
    UserService.createUser(user)
                .then(() => navigate(`/loggedin/${params.username}/users/`))
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <Formik
            initialValues={{ username, password, fullName, phone, email, address }}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={validate}
            enableReinitialize={true}
        >
          {
            (props) => (
              <Form className="newUserForm">
                <fieldset className="newUserItem">
                  <label>Username</label>
                  <Field type="text" placeholder="john" name="username" />
                </fieldset>
                <fieldset className="newUserItem">
                  <label>Full Name</label>
                  <Field type="text" placeholder="John Smith" name='fullName'/>
                </fieldset>
                <fieldset className="newUserItem">
                  <label>Email</label>
                  <Field type="email" placeholder="john@gmail.com" name='email'/>
                </fieldset>
                <fieldset className="newUserItem">
                  <label>Password</label>
                  <Field type="password" placeholder="password" name='password'/>
                </fieldset>
                <fieldset className="newUserItem">
                  <label>Phone</label>
                  <Field type="text" placeholder="+1 123 456 78" name='phone'/>
                </fieldset>
                <fieldset className="newUserItem">
                  <label>Address</label>
                  <Field type="text" placeholder="New York | USA" name='address'/>
                </fieldset>
                <div className="newUserItem">
                  <label>Gender</label>
                  <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other" />
                    <label for="other">Other</label>
                  </div>
                </div>
                <div className="newUserItem">
                  <label>Active</label>
                  <select className="newUserSelect" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <button className="newUserButton" type='submit'>Create</button>
              </Form>
          )
        }
      </Formik>
    </div>
  );
}