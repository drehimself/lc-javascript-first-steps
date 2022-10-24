class Student extends Person {
  // name;
  year;

  constructor(name, year) {
    super(name);
    this.year = year;
  }

  introduceSelf() {
    console.log(`Hi, My name is ${this.name}. I am in year ${this.year}`);
  }

  doHomework() {
    console.log('Doing homework');
  }
}
