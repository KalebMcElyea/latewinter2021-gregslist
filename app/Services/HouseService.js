import House from "../Models/House.js";
import {ProxyState} from "../AppState.js"
import HouseController from "../Controllers/HouseController.js"

class HouseService{

    constructor(){
        console.log("House Service");
    }

    createHouse(rawHouse) {
          let temp = ProxyState.house
          temp.push(new House(rawHouse))
          ProxyState.house = temp
      
        }

        bid(id) {
            let temp = ProxyState.house
            let house = temp.find(h=> h.id === id)
            house.price += 100
            ProxyState.house = temp
          }

    deleteHouse(id) {
        let temp = ProxyState.house
        let houseIndex = temp.findIndex(house =>  house.id == id)
        temp.splice(houseIndex, 1)
        ProxyState.house = temp
      }
}

export const houseService = new HouseService()