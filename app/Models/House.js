import { generateId } from "../Utils/GenerateId.js"



export default class House{
    constructor({bedrooms, bathrooms,levels,imgUrl, year, price, description, _id, id}){
        this.bedrooms= bedrooms
        this.bathrooms = bathrooms
        this.levels = levels
        this.price = price 
        this.description = description
        this.imgUrl = imgUrl
        this.year = year
        this.id = _id || id
        
    }



    get Template(){
        return /*html*/`<div class="card col-2 m-4">
        <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer m-1" onclick="app.houseController.deleteHouse('${this.id}')" aria-hidden="true"></i>
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.bedrooms} Rooms </h4>
            <hr>
            <h4>${this.bathrooms} Bathrooms</h4>
            <hr>
            <p class="card-text">${this.levels} Level  ${this.description}</p>
            <hr>
            <p>Year: ${this.year}</p>
            <hr>
            <p>Price: ${this.price} </p>
            <button class="btn btn-success" onclick="app.houseController.bid('${this.id}')">Bid</button>
        </div>
      </div>`
      }
}