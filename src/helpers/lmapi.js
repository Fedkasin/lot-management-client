import superagent from 'superagent';
import { AsyncStorage } from 'react-native';
import getEnvVars from '../constants/environment';

class LMapi {
  constructor(jobs) {
    this.jobs = jobs;
  }

  async getCurrentUserJobs() {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.get(`${getEnvVars.apiUrl}/v1/users/jobs`);
      req.timeout({ response: parseInt(getEnvVars.respTime, 10) });
      req.set('Authorization', token);
      const res = await req;
      const { body } = res || { body: { message: [] } };
      if (body.message.length) {
        return res.body;
      }
      return null;
    } catch (err) {
      console.log('[LMAPI getCurrentUserJobs] ERROR');
      throw err;
    }
  }

  async stopAllCurrentUserJobs() {
    try {
      const req = await this.getCurrentUserJobs();
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const jobs = [...req.message];
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
      console.log('[LMAPI stopAllCurrentUserJobs] ERROR');
      throw err;
    }
  }

  async pauseAllCurrentUserJobs() {
    try {
      const req = await this.getCurrentUserJobs();
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const jobs = [...req.message];
      if (jobs) {
        const requests = [];
        for (let i = 0; i < jobs.length; i += 1) {
          const request = superagent.post(`${getEnvVars.apiUrl}/v1/users/watch/${jobs[i].jobId}/pause`);
          request.set('Authorization', token);
          requests.push(request);
        }
        await Promise.all(requests);
      }
    } catch (err) {
      console.log('[LMAPI pauseAllCurrentUserJobs] ERROR');
      throw err;
    }
  }

  async resumeAllCurrentUserJobs() {
    try {
      const req = await this.getCurrentUserJobs();
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const jobs = [...req.message];
      if (jobs) {
        const requests = [];
        for (let i = 0; i < jobs.length; i += 1) {
          const request = superagent.post(`${getEnvVars.apiUrl}/v1/users/watch/${jobs[i].jobId}/resume`);
          request.set('Authorization', token);
          requests.push(request);
        }
        await Promise.all(requests);
      }
    } catch (err) {
      console.log('[LMAPI resumeAllCurrentUserJobs] ERROR');
      throw err;
    }
  }

  async startCurrentUserJob(params) {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.post(`${getEnvVars.apiUrl}/v1/users/watch`, params);
      req.timeout({ response: parseInt(getEnvVars.respTime, 10) });
      req.set('Authorization', token);
      await req;
    } catch (err) {
      console.log('[LMAPI startCurrentUserJob] ERROR');
      throw err;
    }
  }

  async removeCurrentUserJob(jobId) {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.delete(`${getEnvVars.apiUrl}/v1/users/watch/${jobId}`);
      req.timeout({ response: parseInt(getEnvVars.respTime, 10) });
      req.set('Authorization', token);
      await req;
    } catch (err) {
      console.log('[LMAPI removeCurrentUserJob] ERROR');
      throw err;
    }
  }

  async pauseCurrentUserJob(jobId) {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.post(`${getEnvVars.apiUrl}/v1/users/watch/${jobId}/pause`);
      req.timeout({ response: parseInt(getEnvVars.respTime, 10) });
      req.set('Authorization', token);
      await req;
    } catch (err) {
      console.log('[LMAPI pauseCurrentUserJob] ERROR');
      throw err;
    }
  }

  async resumeCurrentUserJob(jobId) {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.post(`${getEnvVars.apiUrl}/v1/users/watch/${jobId}/resume`);
      req.timeout({ response: parseInt(getEnvVars.respTime, 10) });
      req.set('Authorization', token);
      await req;
    } catch (err) {
      console.log('[LMAPI resumeCurrentUserJob] ERROR');
      throw err;
    }
  }

  async logIn(prop) {
    try {
      console.log('((try to login))');
      const req = superagent.post(`${getEnvVars.apiUrl}/v1/users`, prop);
      req.timeout({ response: parseInt(getEnvVars.respTime, 10) });
      const res = await req;
      const { body } = res || { body: { status: [] } };
      if (body.status === 'success') {
        console.log('((login success stored))', res.body.message.bearerToken);
        await AsyncStorage.setItem('@UserStore:API_TOKEN', res.body.message.bearerToken);
      }
    } catch (err) {
      console.log('[LMAPI logIn] ERROR');
      throw err;
    }
  }

  async logOut() {
    try {
      console.log('lm logout');
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      if (!token) return;
      const req = superagent.delete(`${getEnvVars.apiUrl}/v1/users/logout`);
      req.timeout({ response: parseInt(getEnvVars.respTime, 10) });
      req.set('Authorization', token);
      const res = await req;
      const { body } = res || { body: { status: [] } };
      if (body.status === 'success') {
        await AsyncStorage.removeItem('@UserStore:API_TOKEN');
      }
    } catch (err) {
      console.log('[LMAPI logOut] ERROR');
      throw err;
    }
  }

  async getHouses(query) {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.get(`${getEnvVars.apiUrl}/v1/onliner?${query}`);
      req.timeout({ response: parseInt(getEnvVars.respTime, 10) });
      req.set('Authorization', token);
      const res = await req;
      const { body } = res || { body: { status: [] } };
      if (body.status === 'success') {
        return res.body;
      }
      return null;
    } catch (err) {
      console.log('[LMAPI getHouses] ERROR');
      throw err;
    }
  }

  async getHousesWatch(jobId) {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.get(`${getEnvVars.apiUrl}/v1/users/watch/${jobId}`);
      req.timeout({ response: parseInt(getEnvVars.respTime, 10) });
      req.set('Authorization', token);
      const res = await req;
      const { body } = res || { body: { status: [] } };
      if (body.status === 'success') {
        return res.body;
      }
      return null;
    } catch (err) {
      console.log('[LMAPI getHousesWatch] ERROR');
      throw err;
    }
  }

  async getCars(start, limit) {
    try {
      const token = await AsyncStorage.getItem('@UserStore:API_TOKEN');
      const req = superagent.get(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`);
      req.timeout({ response: parseInt(getEnvVars.respTime, 10) });
      req.set('Authorization', token);
      const res = await req;
      const { status = null } = res;
      if (status === 200) {
        return res.body;
      }
      return null;
    } catch (err) {
      console.log('[LMAPI getCars] ERROR');
      throw err;
    }
  }
}

export default new LMapi();
