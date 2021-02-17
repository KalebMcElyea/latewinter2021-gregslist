import { generateId } from "../Utils/GenerateId.js"

export default class Job{
    constructor({company, jobtitle, hours, imgUrl, rate, description}){
        this.company= company
        this.jobtitle = jobtitle
        this.hours = hours
        this.imgUrl = imgUrl
        this.rate = rate
        this.description = description
        this.id = generateId()
    }



    get Template(){
        return /*html*/`<div class="card col-2">
        <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.jobController.deleteJob('${this}')" aria-hidden="true"></i>
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.company} ${this.jobtitle} - ${this.description}</h4>
            <p>Hourly Rate: ${this.rate}</p>
            <p>Hours: ${this.hours}</p>
            <button class="btn btn-success" onclick="app.jobController.bid('${this.id}')">Bid</button>
        </div>
      </div>`
      }
}