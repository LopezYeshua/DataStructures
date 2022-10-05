
// list node contains the data and pointer
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// linked list contains the the entire listNode object or null
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    
    // find size of linked list
    size() {
        let count = 0
        let node = this.head
        while (node) {
            count++
            node = node.next
        }
        return count
    }

    clear() {
        this.head = null
    }

    getLast() {
        let lastNode = this.head
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head
    }
}

// create linked lists and connect node 1 to node 2
let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

// add node1 to the head of a linked list
let list = new LinkedList(node1)

console.log(list.head.next.data)




console.log(list.size())