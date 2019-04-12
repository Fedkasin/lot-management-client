import superagent from 'superagent';
import { AsyncStorage } from 'react-native';
import getEnvVars from '../constants/environment';

class LMapi {
  constructor(jobs) {
    this.jobs = jobs;
  }

  getCurrentUserJobs = async () => {
    const userId = await AsyncStorage.getItem('@UserStore:USER_ID');
    const jobs = [];
    const req = superagent.get(`${getEnvVars.apiUrl}/v1/users/${userId}/jobs`);
    req.timeout({ response: 3500 });
    const res = await req;
    if (res.body.message.length !== 0) {
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
    if (jobs) {
      const requests = [];
      for (let i = 0; i < jobs.length; i += 1) {
        const req = superagent.delete(`${getEnvVars.apiUrl}/v1/watch/${jobs[i]}`);
        requests.push(req);
      }
      await Promise.all(requests).then(values => {
        for (let i = 0; i < values.length; i += 1) {
          console.log(values[i].body.message.jobId, 'has stopped');
        }
      });
    } else {
      console.log('[null] There\'s notning to stop');
    }
  };

  startCurrentUserJob = async (params) => {
    const userId = await AsyncStorage.getItem('@UserStore:USER_ID');
    const data = { userId, params };
    const req = superagent.post(`${getEnvVars.apiUrl}/v1/watch`, data);
    req.timeout({ response: 2500 });
    req.set('Authorization', 'Bearer 0x4815162342');
    const res = await req;
    console.log(res.body.message.jobId, 'just started!');
  }
}

export default new LMapi();
