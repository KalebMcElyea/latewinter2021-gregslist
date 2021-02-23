import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"

  function _draw(){
    let houses = ProxyState.houses
    let template = ""
    houses.forEach(houses=> template += houses.Template)
    document.getElementById('houses').innerHTML = template
  
    console.log(ProxyState.houses)
  }

export default class HouseController{
  constructor(){
    console.log("houses controller working")
    console.log(ProxyState.houses)
    _draw()
    ProxyState.on("houses", _draw)
  }

  createHouses(event){
    event.preventDefault();
    console.log('creating houses')
    let form = event.target
    console.log(form)
    let rawHouse = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
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