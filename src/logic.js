export class HashMap {
  constructor(table = new Array(16)) {
    this.table = table;
    this.numItems = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.table.length;
    }
    return hashCode;
  }

  resize() {
    const newArray = this.table.concat(new Array(this.table.length));
    return newArray;
  }

  set(key, value) {
    const loadFactor = this.numItems / this.table.length;

    if (loadFactor > 0.75) {
      // resize
      this.table = this.resize();
    }
    let index = this.hash(key, this.table.length);

    if (!this.has(key)) {
      this.numItems++;
      this.table[index] = [[key, value]];
    } else {
      this.table[index].forEach((i) => {
        if (i[0] === key) {
          i[1] = value;
        } else {
          this.table[index].push([key, value]);
          this.numItems++;
        }
      });
    }
  }

  get(key) {
    if (this.has(key)) {
      return this.table[index].find((i) => i[0] === key)[1];
    } else return null;
  }

  has(key) {
    let index = this.hash(key);
    return this.table[index] ? true : false;
  }

  remove(key) {
    if (this.has(key)) {
      delete this.table[index];
      this.numItems--;
      return true;
    }
    return false;
  }

  length() {
    let count = 0;
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) count++;
    }
    return count;
  }

  clear() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) delete this.table[i];
    }
  }

  keys() {
    let el = [];
    this.table.forEach((i) => {
      if (i) {
        i.forEach((u) => {
          el.push(u[0]);
        });
      }
    });
    return el;
  }

  values() {
    let el = [];
    this.table.forEach((i) => {
      if (i) {
        i.forEach((u) => {
          el.push(u[1]);
        });
      }
    });
    return el;
  }

  entries() {
    let el = [];
    this.table.forEach((i) => {
      if (i) {
        i.forEach((u) => {
          el.push(u);
        });
      }
    });
    return el;
  }
}

class HashSet {
  constructor(table = new Array(16)) {
    this.table = table;
    this.numItems = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.table.length;
    }
    return hashCode;
  }

  resize() {
    const newArray = this.table.concat(new Array(this.table.length));
    return newArray;
  }

  set(key) {
    const loadFactor = this.numItems / this.table.length;

    if (loadFactor > 0.75) {
      // resize
      this.table = this.resize();
    }
    let index = this.hash(key);

    if (!this.table[index]) {
      this.numItems++;
      this.table[index] = [[key]];
    } else {
      this.table[index].push([key]);
      this.numItems++;
    }
  }

  get(key) {
    let index = this.hash(key, this.table.length);

    if (this.table[index]) {
      return this.table[index].find((i) => i[0] === key)[0];
    } else return null;
  }

  has(key) {
    let index = this.hash(key);
    return this.table[index] ? true : false;
  }

  remove(key) {
    if (this.has(key)) {
      delete this.table[index];
      this.numItems--;
      return true;
    }
    return false;
  }

  length() {
    let count = 0;
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) count++;
    }
    return count;
  }

  clear() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) delete this.table[i];
    }
  }

  keys() {
    let el = [];
    this.table.forEach((i) => {
      if (i) {
        i.forEach((u) => {
          el.push(u[0]);
        });
      }
    });
    return el;
  }

  entries() {
    let el = [];
    this.table.forEach((i) => {
      if (i) {
        i.forEach((u) => {
          el.push(u);
        });
      }
    });
    return el;
  }
}
