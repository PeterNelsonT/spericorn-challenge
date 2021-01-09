import styled from 'styled-components';
import NoImage from '../assets/images/ProfileIcon.png';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validateName(name) {
  const re = /^[a-zA-Z]+$/;
  return re.test(name);
}

function validatePhone(phone) {
  const re = /^[6-9]\d{9}$/;
  return re.test(phone);
}

function validateAge(age) {
  const re = /^[0-9]{1,3}$/;
  return re.test(age);
}

const StyledDetails = styled.div`
  margin: auto;
  max-width: 720px;
  border: 1px solid #f0f0f0;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 20px 0px;
  .userContainer {
    display: flex;
    flex-wrap: wrap;

    .userDetails {
      flex: 65%;
      margin: auto;
      label {
        display: flex;
        justify-content: space-between;
        max-width: 275px;
        height: 38px;
        color: #575757 !important;
        margin: auto;
        font-size: 14px;
      }
      input,
      select {
        max-height: 20px;
        min-height: 20px;
        margin-left: 5px;
        border: 1px solid;
        border-color: #d9d9d9;
        width: 170px;
      }
      .errorText {
        font-size: 10px;
        color: #ffb4b4 !important;
        margin-left: 5px;
        display: none;
      }
      .errorTextShow {
        display: block !important;
      }
      .invalid {
        border-color: #ffb4b4 !important;
      }
      select {
        max-height: 24px;
        width: 175px;
      }
      input:hover,
      select:hover {
        border-color: #40a9ff;
      }
    }
    .profilePic {
      flex: 35%;
      display: grid;
      text-align: center;
      gap: 10px;
      .imageContainer {
        max-width: 150px;
        max-height: 150px;
        position: relative;
        align-self: center;
        margin: auto;
        svg {
          position: absolute;
          top: 0px;
          right: 0px;
        }
        img {
          align-self: center;
          margin: auto;
        }
        .svg-inline--fa.fa-w-16 {
          width: 1em;
        }
        .svg-inline--fa {
          display: inline-block;
          font-size: inherit;
          height: 1em;
          overflow: visible;
          vertical-align: -0.125em;
        }
        .fa-window-close:hover {
          color: #ff5f5f;
          cursor: pointer;
        }
      }
      .fileInput {
        color: transparent;
        width: 150px;
        align-self: center;
        margin: auto;
        outline: none;
        height: 150px;
        cursor: pointer;
      }
      .fileInput::-webkit-file-upload-button {
        visibility: hidden;
      }
      .fileInput::file-selector-button {
        visibility: hidden;
      }
      .fileInput:active {
        outline: 0;
      }
    }
  }
  .actionButton {
    display: grid;
    text-align: center;
    input {
      cursor: pointer;
      width: 130px;
      align-self: center;
      margin: auto;
      color: black;
      background: white;
      border: 1px solid #d9d9d9;
      border-radius: 3px;
      min-height: 28px;
      font-weight: 700;
      font-size: 10pt;
    }
    input:hover {
      border-color: rgb(30, 215, 96);
      background-color: rgb(30, 215, 96);
      color: white;
    }
  }
  @media (max-width: 700px) {
    .userContainer {
      flex-direction: column;
    }
    .userDetails {
      margin-top: 25px !important;
      margin-bottom: 10px !important;
    }
  }
`;
function UserForm(props) {
  const history = useHistory();
  const firstName = useRef();
  const lastName = useRef();
  const age = useRef();
  const email = useRef();
  const phone = useRef();
  const firstNameError = useRef();
  const lastNameError = useRef();
  const ageError = useRef();
  const emailError = useRef();
  const phoneError = useRef();
  const activeError = useRef();
  const stateError = useRef();
  const countryError = useRef();
  const activeRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();

  const [file, setFile] = useState(props.user ? props.user.image : null);
  const [state, setState] = useState(props.user ? props.user.state : '');
  const [country, setCountry] = useState(props.user ? props.user.country : '');
  const [active, setActive] = useState(props.user ? props.user.active : '');
  const [isHovered, setHover] = useState(false);

  const handleChange = (event) => {
    if (event.target.value) setFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    let valid = true;
    if (!validateEmail(email.current.value)) {
      email.current.classList.add('invalid');
      emailError.current.classList.add('errorTextShow');
      valid = false;
    } else {
      email.current.classList.remove('invalid');
      emailError.current.classList.remove('errorTextShow');
    }
    if (!validateName(firstName.current.value)) {
      firstName.current.classList.add('invalid');
      firstNameError.current.classList.add('errorTextShow');
      valid = false;
    } else {
      firstName.current.classList.remove('invalid');
      firstNameError.current.classList.remove('errorTextShow');
    }
    if (!validateName(lastName.current.value)) {
      lastName.current.classList.add('invalid');
      lastNameError.current.classList.add('errorTextShow');
      valid = false;
    } else {
      lastName.current.classList.remove('invalid');
      lastNameError.current.classList.remove('errorTextShow');
    }
    if (!validatePhone(phone.current.value)) {
      phone.current.classList.add('invalid');
      phoneError.current.classList.add('errorTextShow');
      valid = false;
    } else {
      phone.current.classList.remove('invalid');
      phoneError.current.classList.remove('errorTextShow');
    }
    if (!validateAge(age.current.value)) {
      age.current.classList.add('invalid');
      ageError.current.classList.add('errorTextShow');
      valid = false;
    } else {
      age.current.classList.remove('invalid');
      ageError.current.classList.remove('errorTextShow');
    }
    if (state === '') {
      stateRef.current.classList.add('invalid');
      stateError.current.classList.add('errorTextShow');
      valid = false;
    } else {
      stateRef.current.classList.remove('invalid');
      stateError.current.classList.remove('errorTextShow');
    }
    if (active === '') {
      activeRef.current.classList.add('invalid');
      activeError.current.classList.add('errorTextShow');
      valid = false;
    } else {
      activeRef.current.classList.remove('invalid');
      activeError.current.classList.remove('errorTextShow');
    }
    if (country === '') {
      countryRef.current.classList.add('invalid');
      countryError.current.classList.add('errorTextShow');
      valid = false;
    } else {
      countryRef.current.classList.remove('invalid');
      countryError.current.classList.remove('errorTextShow');
    }
    if (valid) {
      if (props.user) {
        props.updateUser({
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          age: age.current.value,
          email: email.current.value,
          phone: phone.current.value,
          state: state,
          country: country,
          active:
            active === 'true' || active === true
              ? true
              : active === 'false' || active === false
              ? false
              : '',
          image: file,
          created: props.user.created,
        });
        event.preventDefault();
        history.push({
          pathname: '../home',
        });
      } else {
        props.addUser({
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          age: age.current.value,
          email: email.current.value,
          phone: phone.current.value,
          state: state,
          country: country,
          active: active === 'true' ? true : active === 'false' ? false : '',
          image: file,
          created: Date.now(),
        });
        event.preventDefault();
        firstName.current.value = '';
        lastName.current.value = '';
        age.current.value = '';
        email.current.value = '';
        phone.current.value = '';
        setState('');
        setFile(null);
        setActive('');
        setCountry('');
      }
    } else {
      event.preventDefault();
    }
  };

  const COUNTRY_OPTIONS = props.countries?.map((c) => (
    <option key={c.country} value={c.country}>
      {c.country}
    </option>
  ));

  const STATES_OPTIONS = props.countries
    ?.filter((c) => c.country === country)[0]
    ?.states?.map((c) => (
      <option key={c} value={c}>
        {c}
      </option>
    ));

  return (
    <StyledDetails>
      <form onSubmit={handleSubmit}>
        <div className="userContainer">
          <div className="profilePic">
            {file ? (
              <div
                className="imageContainer"
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <img src={file ? file : NoImage} width="150px" height="150px" />
                {isHovered && file && (
                  <svg
                    onClick={() => setFile(null)}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="window-close"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-window-close fa-w-16"
                  >
                    <path
                      fill="currentColor"
                      d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"
                      className=""
                    ></path>
                  </svg>
                )}
              </div>
            ) : (
              <input
                title="Choose an Image"
                style={{
                  backgroundImage: `url(${NoImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '150px 150px',
                }}
                accept="image/*"
                type="file"
                onChange={handleChange}
                className="fileInput"
                name="profilePic"
              />
            )}
          </div>
          <div className="userDetails">
            <label>
              First Name:
              <div>
                <div>
                  <input
                    defaultValue={props.user ? props.user.firstName : ''}
                    type="text"
                    name="firstName"
                    ref={firstName}
                  />
                </div>
                <div ref={firstNameError} className="errorText">
                  Please input a valid Name
                </div>
              </div>
            </label>
            <label>
              Last Name:
              <div>
                <div>
                  <input
                    defaultValue={props.user ? props.user.lastName : ''}
                    type="text"
                    name="lastName"
                    ref={lastName}
                  />
                </div>
                <div ref={lastNameError} className="errorText">
                  Please input a valid Name
                </div>
              </div>
            </label>
            <label>
              Age:
              <div>
                <div>
                  <input
                    defaultValue={props.user ? props.user.age : ''}
                    type="number"
                    name="age"
                    ref={age}
                  />
                </div>
                <div ref={ageError} className="errorText">
                  Please input a valid Age
                </div>
              </div>
            </label>
            <label>
              Email:
              <div>
                <div>
                  <input
                    defaultValue={props.user ? props.user.email : ''}
                    type="text"
                    name="email"
                    ref={email}
                  />
                </div>
                <div ref={emailError} className="errorText">
                  Please input a valid Email
                </div>
              </div>
            </label>
            <label>
              Active:
              <div>
                <div>
                  <select
                    ref={activeRef}
                    type="text"
                    name="active"
                    value={active}
                    onChange={(e) => setActive(e.target.value)}
                  >
                    <option hidden selected></option>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>
                </div>
                <div ref={activeError} className="errorText">
                  Active is required
                </div>
              </div>
            </label>
            <label>
              State:
              <div>
                <div>
                  <select
                    ref={stateRef}
                    disabled={STATES_OPTIONS ? false : true}
                    type="text"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option hidden selected></option>
                    {STATES_OPTIONS}
                  </select>
                </div>
                <div ref={stateError} className="errorText">
                  State is required
                </div>
              </div>
            </label>
            <label>
              Country:
              <div>
                <div>
                  <select
                    ref={countryRef}
                    type="text"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option hidden selected></option>
                    {COUNTRY_OPTIONS}
                  </select>
                </div>
                <div ref={countryError} className="errorText">
                  Country is required
                </div>
              </div>
            </label>
            <label>
              Telephone:
              <div>
                <div>
                  <input
                    defaultValue={props.user ? props.user.phone : ''}
                    type="number"
                    name="phone"
                    ref={phone}
                  />
                </div>
                <div ref={phoneError} className="errorText">
                  Please input a valid Phone
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="actionButton">
          <input type="submit" value={props.user ? 'Update' : 'Submit'} />
        </div>
      </form>
    </StyledDetails>
  );
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) =>
      dispatch({
        type: actionTypes.USER_ADD,
        user: user,
      }),
    updateUser: (user) =>
      dispatch({
        type: actionTypes.USER_UPDATE,
        user: user,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
