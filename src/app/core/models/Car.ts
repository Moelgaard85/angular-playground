export class Car {
  model: string;
  wheels: number;
  age: number;

  constructor(data?) {
    if (data) {
      Object.assign(this, data);
    }
  }

  logMe() {
    console.log('logMe: ', this);
  }
};