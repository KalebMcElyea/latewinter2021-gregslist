import Job from "../Models/Job.js"
import {ProxyState} from "../AppState.js"


class JobService{
    constructor(){
        console.log("Hello Job Service");
    }


    createJob(rawJob) {
        let temp = ProxyState.job
        temp.push(new Job(rawJob))
        ProxyState.job = temp
    
      }

      bid(id) {
          let temp = ProxyState.job
          let job = temp.find(j=> j.id === id)
          job.rate += 40
          ProxyState.job = temp
        }

  deleteJob(id) {
      let temp = ProxyState.job
      let jobIndex = temp.findIndex(job =>  job.id == id)
      temp.splice(jobIndex, 1)
      ProxyState.job = temp
    }
}

export const jobService = new JobService()
