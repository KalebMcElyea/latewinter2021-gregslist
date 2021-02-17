 import { ProxyState } from "../AppState.js"
import {houseService} from"../Services/HouseService.js"


function _draw(){
    let house = ProxyState.house
    let template = ""
    house.forEach(house=> template += house.Template)
    // console.log(template)
    document.getElementById('house').innerHTML = template
    console.log(ProxyState.house)
}


export default class HouseController{
      constructor(){
        console.log("house controller working")
        console.log(ProxyState.house)
        _draw()
        ProxyState.on("house", _draw)
      }
    
      createHouses(event){
        event.preventDefault();
        console.log('creating House')
        let form = event.target
        console.log(form)
        let rawHouse = {
          bedrooms: form.bedrooms.value,
          bathrooms: form.bathrooms.value,
          floorplan: form.floorplan.value,
          price: parseFloat(form.price.value),
          imgUrl: form.imgUrl.value,
          description: form.description.value,
          years: form.year.value
        }
        console.log(rawHouse)
        houseService.createHouse(rawHouse)
      }
    
      bid(id){
        console.log('bidding ' + id)
        houseService.bid(id)
      }
    
      deleteHouse(id){
        console.log(id)
        houseService.deleteHouse(id)
      }
}