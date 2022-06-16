import React from 'react';
import UseFetch from './UseFetch';
import { useLocation, useParams } from 'react-router-dom';

const Fetch = () => {
  let params = useParams();
  let { search } = useLocation();
  let param = new URLSearchParams(search);
  let url = param.get('Url');
  const [data] = UseFetch(url);
  return (
    <div>
      <center>
        {!data && <h2>Loading...</h2>}
        {data &&
          data.map((item) => {
            return (
              <div
                style={{
                  margin: '20px',
                  border: '1px solid black',
                  padding: '10px',
                  backgroundColor: '#c2c2d6',
                  width: '50%',
                }}
                key={item.id}
              >
                <p>Name : {item.name}</p>
                <p>Email : {item.email}</p>
              </div>
            );
          })}
      </center>
    </div>
  );
};

export default Fetch;
