class Teacher extends Person {
  // name;
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(`Hi, My name is ${this.name}. I teach ${this.teaches}`);
  }

  giveHomework() {
    console.log('Giving homework');
  }
}
