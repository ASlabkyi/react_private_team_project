import axios from 'axios';

// axios.defaults.baseURL = process.env.REACT_APP_URL;

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userRefresh = async sid => {
  const { data } = await axios.post('auth/refresh', sid);
  return data;
};

export const userGetInfo = async () => {
  const { data } = await axios.get('/user');
  return data;
};

export const fetchDay = async dayToday => {
  const { data } = await axios.post('/day/info', dayToday);
  return data;
};

export const searchProduct = async value => {
  const res = await axios.get(`/product?search=${value}`);
  return res;
};

export const addProduct = async product => {
  const res = await axios.post('/day', product);
  return res;
};

export const deleteProduct = async product => {
  const { data } = await axios.delete('/day', { data: product });
  return data;
};
