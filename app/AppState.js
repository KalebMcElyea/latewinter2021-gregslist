import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Job from "./Models/Job.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  //NOTE adding a type to your collections with jsdocs gives additional intellisense when referencing that collection.
  
  // cars = [new Car({make: "Jeep", model: "Wrangler", price: 20, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its nice", miles: 75000}), new Car({make: "Jeep", model: "Rango", price: 1500, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its very nice", miles: 5000})]
  cars=[]

  // house = [new House({bedrooms: "3 rooms", bathrooms:"2 bathrooms", floorplan:"open floor plan", imgUrl:"https://image.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-260nw-529108441.jpg", year: 2005, price: 209000, description:"It's very nice"})]
  houses=[]

  // job = [new Job({company:"Master Plumbers", jobtitle:"Plumbers", hours: 20, imgUrl: "https://www.anthonyphc.com/wp-content/uploads/Plumbing-Anthony-Plumbing-Heating-Cooling.jpg", rate: 40, description:"I unclog toilets"})]

  jobs=[]
}
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
