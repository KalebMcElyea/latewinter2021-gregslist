import { ProxyState } from "../AppState.js"
import { jobService } from "../Services/jobService.js"

  function _draw(){
    let jobs = ProxyState.jobs
    let template = ""
    jobs.forEach(job=> template += job.Template)
    document.getElementById('jobs').innerHTML = template
    console.log(ProxyState.jobs)
  }

export default class JobsController{
  constructor(){
    console.log("jobs controller working")
    console.log(ProxyState.jobs)
    _draw()
    ProxyState.on("jobs", _draw)
  }

  createJob(event){
    event.preventDefault();
    let form = event.target
    console.log(form)
    let rawJob = {
      jobTitle: form.jobTitle.value,
      company: form.company.value,
      rate: form.rate.value,
      hours: parseFloat(form.hours.value),
      description: form.description.value,
      
    }
    console.log(rawJob)
    jobService.createJob(rawJob)
  }

  bid(id){
    console.log('bidding ' + id)
    jobService.bid(id)
  }

  deleteJob(id){
    console.log(id)
    jobService.deleteJob(id)
  }

}