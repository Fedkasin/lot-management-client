import superagent from 'superagent';
import { AsyncStorage } from 'react-native';
import getEnvVars from '../constants/environment';

const respTime = { response: 10000 };

class LMapi {
  constructor(jobs) {
    this.jobs = jobs;
  }

  getCurrentUserJobs = async () => {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.get(`${getEnvVars.apiUrl}/v1/users/jobs`);
      req.timeout(respTime);
      req.set('Authorization', token);
      const res = await req;
      const { body } = res || { body: { message: [] } };
      if (body.message.length !== 0) {
        return res.body;
      }
      return null;
    } catch (err) {
      throw err;
    }
  };

  stopAllCurrentUserJobs = async () => {
    try {
      const req = await this.getCurrentUserJobs();
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const jobs = req.message.slice();
      if (jobs) {
        const requests = [];
        for (let i = 0; i < jobs.length; i += 1) {
          const request = superagent.delete(`${getEnvVars.apiUrl}/v1/users/watch/${jobs[i].jobId}`);
          request.set('Authorization', token);
          requests.push(request);
        }
        await Promise.all(requests);
      }
    } catch (err) {
      throw err;
    }
  };

  startCurrentUserJob = async (params) => {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.post(`${getEnvVars.apiUrl}/v1/users/watch`, params);
      req.timeout(respTime);
      req.set('Authorization', token);
      await req;
    } catch (err) {
      throw err;
    }
  };

  removeCurrentUserJob = async (jobId) => {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.delete(`${getEnvVars.apiUrl}/v1/users/watch/${jobId}`);
      req.timeout(respTime);
      req.set('Authorization', token);
      await req;
    } catch (err) {
      throw err;
    }
  };

  pauseCurrentUserJob = async (jobId) => {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.post(`${getEnvVars.apiUrl}/v1/users/watch/${jobId}/pause`);
      req.timeout(respTime);
      req.set('Authorization', token);
      await req;
    } catch (err) {
      throw err;
    }
  };

  resumeCurrentUserJob = async (jobId) => {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.post(`${getEnvVars.apiUrl}/v1/users/watch/${jobId}/resume`);
      req.timeout(respTime);
      req.set('Authorization', token);
      await req;
    } catch (err) {
      throw err;
    }
  };

  logIn = async (prop) => {
    try {
      const req = superagent.post(`${getEnvVars.apiUrl}/v1/users`, prop);
      req.timeout(respTime);
      const res = await req;
      const { body } = res || { body: { status: [] } };
      if (body.status === 'success') {
        await AsyncStorage.setItem('@UserStore:API_TOKEN', res.body.message.bearerToken);
      }
    } catch (err) {
      throw err;
    }
  };

  logOut = async () => {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      if (!token) return;
      const req = superagent.delete(`${getEnvVars.apiUrl}/v1/users/logout`);
      req.timeout(respTime);
      req.set('Authorization', token);
      const res = await req;
      const { body } = res || { body: { status: [] } };
      if (body.status === 'success') {
        await AsyncStorage.removeItem('@UserStore:API_TOKEN');
      }
    } catch (err) {
      throw err;
    }
  };

  getHouses = async (query) => {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.get(`${getEnvVars.apiUrl}/v1/onliner?${query}`);
      req.timeout(respTime);
      req.set('Authorization', token);
      const res = await req;
      const { body } = res || { body: { status: [] } };
      if (body.status === 'success') {
        return res.body;
      }
      return null;
    } catch (err) {
      throw err;
    }
  };

  getHousesWatch = async (jobId) => {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.get(`${getEnvVars.apiUrl}/v1/users/watch/${jobId}`);
      req.timeout(respTime);
      req.set('Authorization', token);
      const res = await req;
      const { body } = res || { body: { status: [] } };
      if (body.status === 'success') {
        return res.body;
      }
      return null;
    } catch (err) {
      throw err;
    }
  };

  getCars = async (start, limit) => {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.get(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`);
      req.timeout(respTime);
      req.set('Authorization', token);
      const res = await req;
      const { status = null } = res;
      if (status === 200) {
        return res.body;
      }
      return null;
    } catch (err) {
      throw err;
    }
  }
}

export default new LMapi();
