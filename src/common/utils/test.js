export class Test {
  constructor() {
    this.state = 1
    this.params = {}
  }

  show() {
    console.log('hello test')
  }
}

export class Child extends Test {
  constructor() {
    super()
    this.child = 2
  }

  show() {
    console.log('hello child')
  }
}

