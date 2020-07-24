class List {
  constructor() {
    this.data = []
  }

  add(data) {
    this.data.push(data)
    console.log(this.data)
  }
}

class TodoList extends List {
  constructor() {
    super()
    this.user = 'Mateus'
  }

  showUser() {
    console.log(this.user)
  }
}

const MyList = new TodoList()

document.getElementById('newTodo').onclick = function() {
  MyList.add('New todo')
}


//static method
class Math {
  static sum(a, b) {
    return a + b
  }
}

console.log(Math.sum(1, 2))