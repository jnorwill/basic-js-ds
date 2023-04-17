const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.value = null
    this.next = null
  }

  getUnderlyingList() {
    return this
  }

  getLast = (element) => {
    if (!element.next) {
      return element
    } else {
      return this.getLast(element.next)
    }
  }

  enqueue(value) {
    if (!this.value) {
      return this.value = value
    }

    const last = this.getLast(this)

    last.next = {
      value,
      next: null,
    }
  }

  dequeue() {
    const lastValue = this.value

    this.value = this.next.value
    this.next = this.next.next

    return lastValue
  }
}

module.exports = {
  Queue
};
