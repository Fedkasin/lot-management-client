import superagent from 'superagent';
import { AsyncStorage } from 'react-native';
import getEnvVars from '../constants/environment';

const respTime = { response: 3500 };

class LMapi {
  constructor(jobs) {
    this.jobs = jobs;
  }

  getCurrentUserJobs = async () => {
    const userId = await AsyncStorage.getItem('@UserStore:USER_ID');
    // const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
    const jobs = [];
    const req = superagent.get(`${getEnvVars.apiUrl}/v1/users/${userId}/jobs`);
    req.timeout(respTime);
    // req.set('Authorization', token);
    const res = await req;
    if (res.body && res.body.message && res.body.message.length && res.body.message.length !== 0) {
      for (let i = 0; i < res.body.message.length; i += 1) {
        jobs.push(res.body.message[i].jobId);
      }
      return jobs;
    } else {
      return null;
    }
  };

  stopAllCurrentUserJobs = async () => {
    const jobs = await this.getCurrentUserJobs();
    // const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
    if (jobs) {
      const requests = [];
      for (let i = 0; i < jobs.length; i += 1) {
        const req = superagent.delete(`${getEnvVars.apiUrl}/v1/watch/${jobs[i]}`);
        // req.set('Authorization', token);
        requests.push(req);
      }
      await Promise.all(requests);
    }
  };

  startCurrentUserJob = async (params) => {
    const userId = await AsyncStorage.getItem('@UserStore:USER_ID');
    // const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
    const data = { userId, params };
    const req = superagent.post(`${getEnvVars.apiUrl}/v1/watch`, data);
    req.timeout(respTime);
    // req.set('Authorization', token);
    await req;
  }

  logIn = async (body) => {
    const req = superagent.post(`${getEnvVars.apiUrl}/v1/users`, body);
    req.timeout(respTime);
    const res = await req;
    if (res.body && res.body.status === 'success') {
      await AsyncStorage.setItem('@UserStore:USER_ID', res.body.message.userId);
      await AsyncStorage.setItem('@UserStore:API_TOKEN', res.body.message.token);
    }
  }

  getHouses = async (query) => {
    // const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
    const req = superagent.get(`${getEnvVars.apiUrl}/onliner?${query}`);
    req.timeout(respTime);
    // req.set('Authorization', token);
    const res = await req;
    if (res.body && res.body.status && res.body.status === 'success') {
      return res.body;
    } else {
      return null;
    }
  }

  getHousesWatch = async (jobId) => {
    // const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
    const req = superagent.get(`${getEnvVars.apiUrl}/watch/${jobId}`);
    req.timeout(respTime);
    // req.set('Authorization', token);
    const res = await req;
    if (res.body && res.body.status && res.body.status === 'success') {
      return res.body;
    } else {
      return null;
    }
  }

  getCars = async (start, limit) => {
    // const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
    const req = superagent.get(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`);
    req.timeout(respTime);
    // req.set('Authorization', token);
    const res = await req;
    if (res.status && res.status === 200) {
      return res.body;
    } else {
      return null;
    }
  }
}

export default new LMapi();
