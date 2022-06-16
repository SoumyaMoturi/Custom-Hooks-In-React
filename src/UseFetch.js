import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';

//https://jsonplaceholder.typicode.com/users;

const UseFetch = (url) => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  function getData() {
    setTimeout(() => {
      //fetch(url).then((res) => res.json()).then((data) => setData(data)).then((load) => setLoad(!load))
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .then((load) => setLoad(!load))
        .catch((err) => console.log(err));
    }, 2000);
  }
  useEffect(() => {
    if (!load) {
      console.log('loading');
    }
    getData();
  }, [load]);

  return [data];
};

export default UseFetch;
