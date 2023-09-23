import Car from "./car";

export default class Wishlist {
  constructor() {
    this.list = [];
    this.nextId = 0;
  }

  add(make, model, year) {
    this.list.push(new Car(++this.nextId, make, model, year));
  }

  remove(carId) {
    this.list = this.list.filter((value) => value.id !== carId);
  }
}
