

export default class Job{
    constructor({company, jobtitle, hours, imgUrl, rate, description,_id,id}){
        this.company= company
        this.jobtitle = jobtitle
        this.hours = hours
        this.rate = rate
        this.description = description
        // this.imgUrl = imgUrl
        this.id = _id || id
    }



    get Template(){
        return /*html*/`<div class="card col-2">
        <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.jobsController.deleteJob('${this.id}')" aria-hidden="true"></i>
       
        <div class="card-body">
            <h4 class="card-title">${this.company} ${this.jobtitle} - ${this.description}</h4>
            <p>Hourly Rate: ${this.rate}</p>
            <p>Hours: ${this.hours}</p>
            <button class="btn btn-success" onclick="app.jobsController.bid('${this.id}')">Bid</button>
        </div>
      </div>`
      }
}