import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Input = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    url: '',
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data.url);
    //let history = useHistory();
    if (data.url !== null) {
      navigate(`/fetch?Url=${data.url}&`);
    } else {
      alert('Enter Url');
    }
  };
  return (
    <div>
      <center>
        <form
          onSubmit={submitHandler}
          style={{
            margin: '5% 25%',
            padding: '50px',
            border: '5px double white',
            borderRadius: '10%',
          }}
        >
          <h1 style={{ marginBottom: '35px' }}>Login Page</h1>

          <div className="input-group mb-3">
            <span className="input-group-text">URL : </span>
            <input
              type="text"
              className="form-control "
              name="url"
              placeholder="Enter your url"
              onChange={changeHandler}
            />
          </div>

          <button
            type="submit"
            className="btn btn-success btn-lg"
            value="submit"
          >
            Submit
          </button>
        </form>
      </center>
    </div>
  );
};

export default Input;
