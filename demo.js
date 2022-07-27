// {
//   data: 'whatever',
//   next: 'next item'
// }

//creating our template for our items in our list
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

//creating our template for our lists
class LinkedList {
  constructor(head = null){
    this.head = head
  }

  size() {
    let count = 0
    let node = this.head

    while(node){
      count++
      // console.log(node)
      node = node.next
    }

    // for(let i = 0; node; node = node.next){
    //   count++
    //   console.log(node)
    // }

    return count
  }

  getLast()  {
    let lastNode = this.head

    while(lastNode.next){
      lastNode = lastNode.next
    }

    return lastNode
  }
}

//instantiating two items
let nodeA = new Node('A')
let nodeB = new Node('B')
nodeA.next = nodeB

//instantiating a list, setting nodeA as the first item
let list = new LinkedList(nodeA)

// console.log(list.head.next.data)

let nodeD = new Node('D')
nodeB.next = nodeD

let nodeC = new Node('C')
nodeB.next = nodeC
nodeC.next = nodeD

// console.log(list.head.next.next.data)

console.log(list.getLast())