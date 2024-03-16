import axios from 'axios';

const instance = axios.create({});

const Api = {
  Get: (url: string) => {
    return instance({
      method: 'get',
      url,
    });
  },
};

export { Api };
