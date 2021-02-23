import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";

class JobService{

 
  constructor(){
    console.log("house service");
    this.getJob()
  }

  async getJob() {
    try {
      const res = await api.get('jobs')
      ProxyState.jobs = res.data.map(rawJobData => new Job(rawJobData))
      console.log(ProxyState.jobs)
    } catch (error) {
      console.error(error)
    }
  }

  async createJob(rawJob) {
    try {
      const res = await api.post('jobs', rawJob)
      ProxyState.jobs = [ ...ProxyState.jobs, new Job(res.data)]
    } catch (error) {
      console.error(error)
    }
    

  }

  async bid(id) {
    let jobs = ProxyState.jobs.find(j=> j.id === id)
    jobs.price += 100
    try {
      const res = await api.put('jobs/' + id, jobs)
      console.log(res.data)
      // NOTE this is another opportunity to go and fetch the data and make sure it is the most up to date with our database
      ProxyState.jobs = ProxyState.jobs
    } catch (error) {
      
    }
  }

  async deleteJob(id) {
    try {
      
      const res = await api.delete(`jobs/` +id,)
    
      this.getJob()
    } catch (error) {
      console.error(error)
    }
  }
}

export const jobService = new JobService()
