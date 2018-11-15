export interface IPerson {
    id?: number;
    name?: string;
    age?: number;
}

export class Person implements IPerson {
    constructor(public id?: number, public name?: string, public age?: number) {}
}
