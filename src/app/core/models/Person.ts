import { DataModel } from "./DataModel";

// IPerson interface is used to control the input params for calling new Person
export interface IPerson {
  [prop: string]: any;
  id?: string;
  title?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;

  firstname?: string;
  lastname?: string;
  age?: number;
}

// Person is called with 'new Person(data?)' and can be called with or without params.
export class Person implements DataModel {
  [prop: string]: any;
  id?: string;
  title?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;

  firstname?: string;
  lastname?: string;
  age?: number;

  // Instantiating new Person *can* take data. If data exists, it must follow IPerson interface.
  constructor(data?: IPerson) {
    if (data) {
      // If data exists, assign it to the Person
      Object.assign(this, data);
    } else {
      // If no data exists, then use the create function to create initial data
      Object.assign(this, this.create());
    }
  }

  // Simply log this Person as it is
  logMe() {
    console.log('logMe: ', this);
  }

  // Create function can:
  // - instantiate initial values when creating new Person from scratch
  // - return converted database ready object from existing Person values
  create() {
    return {
      id: this.id ? this.id : null,
      title: this.title ? this.title : '',
      description: this.description ? this.description : '',
      createdAt: this.createdAt ? this.createdAt : new Date(),
      updatedAt: new Date(),
      firstname: this.firstname ? this.firstname : 'No firstname',
      lastname: this.lastname ? this.lastname : '',
      age: this.age ? this.age : null
    };
  }


}
