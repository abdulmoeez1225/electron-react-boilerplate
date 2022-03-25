import Dexie, { Table } from 'dexie';

export interface Students {
  id?: number;
  name: string;
  class: string;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  students!: Table<Students>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      students: '++id, name, class', // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
