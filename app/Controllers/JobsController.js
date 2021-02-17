import { ProxyState } from "../AppState.js"
import {jobService} from"../Services/JobService.js"


function _draw(){
    let job = ProxyState.job
    let template = ""
    job.forEach(job=> template += job.Template)
    // console.log(template)
    document.getElementById('job').innerHTML = template
    console.log(ProxyState.job)
}


export default class JobController{
      constructor(){
        console.log("job controller working")
        console.log(ProxyState.job)
        _draw()
        ProxyState.on("job", _draw)
      }


      createJobs(event){
        event.preventDefault();
        console.log('creating job')
        let form = event.target
        console.log(form)
        let rawJob = {
          company: form.company.value,
          jobtitle: form.jobtitle.value,
          hours: form.hours.value,
          rate: parseFloat(form.rate.value),
          imgUrl: form.imgUrl.value,
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