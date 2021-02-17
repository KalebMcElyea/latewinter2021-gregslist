import { generateId } from "../Utils/GenerateId.js"



export default class House{
    constructor({bedrooms, bathrooms, floorplan, imgUrl, year, price, description}){
        this.bedrooms= bedrooms
        this.bathrooms = bathrooms
        this.floorplan = floorplan
        this.imgUrl = imgUrl
        this.year = year
        this.price = price 
        this.description = description
        this.id = generateId()
    }



    get Template(){
        return /*html*/`<div class="card col-2">
        <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.houseController.deleteHouse('${this}')" aria-hidden="true"></i>
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.bedrooms} ${this.bathrooms} - ${this.floorplan}</h4>
            <p class="card-text">${this.description}</p>
            <p>Year: ${this.year}</p>
            <p>Price: ${this.price}</p>
            <button class="btn btn-success" onclick="app.houseController.bid('${this.id}')">Bid</button>
        </div>
      </div>`
      }
}