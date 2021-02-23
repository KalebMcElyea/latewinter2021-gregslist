import { ProxyState } from "../AppState.js";
import House from "../Models/house.js";
import { api } from "./AxiosService.js";

class HouseService{

 
  constructor(){
    console.log("house service");
    this.getHouse()
  }

  async getHouse() {
    try {
      const res = await api.get('houses')
      ProxyState.houses = res.data.map(rawHouseData => new House(rawHouseData))
      console.log(ProxyState.houses)
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse(rawHouse) {
    try {
      const res = await api.post('houses', rawHouse)
      ProxyState.houses = [ ...ProxyState.houses, new House(res.data)]
    } catch (error) {
      console.error(error)
    }
    

  }

  async bid(id) {
    let houses = ProxyState.houses.find(h=> h.id === id)
    houses.price += 100
    try {
      const res = await api.put('houses/' + id, houses)
      console.log(res.data)
      // NOTE this is another opportunity to go and fetch the data and make sure it is the most up to date with our database
      ProxyState.houses = ProxyState.houses
    } catch (error) {
      
    }
  }

  async deleteHouse(id) {
    try {
      
      const res = await api.delete(`houses/` +id,)
    
      this.getHouse()
    } catch (error) {
      console.error(error)
    }
  }
}

export const houseService = new HouseService()