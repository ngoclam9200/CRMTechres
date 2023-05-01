import axios from 'axios';
import { HOST_API_NODE } from '@env';
const BASE_URL = `${HOST_API_NODE}`;

export const callApiTemplate = async (url, method, data, params) => {
  const config = {
    method: method,
    url: `${BASE_URL}${url}`,
    data: {
      user_name: data.username,
      password: data.password,
      device_id: "10"
    },
    params: params,
    headers: {
      'Accept' :'application/json',
      'Content-Type' : 'application/json',
    }
    
  };
  console.log(config);
  try {
    const response = await axios(config)
    // console.log(response);
    return response;
  } catch (error) {
    console.error(`Lỗi rồi`+ error);
    throw error;
  }
};