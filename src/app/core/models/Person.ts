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
      // If data exists, assign it to the Person using create function with data
      Object.assign(this, this.create(data));
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
  // - instantiate initial values when creating new Person from scratch with or without data
  create(data?) {
    return {
      id: data && data.id ? data.id : null,
      title: data && data.title ? data.title : '',
      description: data && data.description ? data.description : '',
      createdAt: data && data.createdAt ? data.createdAt : new Date(),
      updatedAt: new Date(),
      firstname: data && data.firstname ? data.firstname : 'No firstname',
      lastname: data && data.lastname ? data.lastname : '',
      age: data && data.age ? data.age : null
    };
  }

  // What to do when converting to database object, it needs UTC time etc. This should only happen when converting to database

  // What to do with convert function to use in application, such as making Date times to moment times etc.


}
