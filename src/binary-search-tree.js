const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.data = null
    this.left = null
    this.right = null
  }
  root() {
    return this.data ? this : null
  }

  add(data) {
    const newNode = {
      data,
      left: null,
      right: null,
    }
    const check = (x) => {
      if (!x.data) {
        x.data = data;
        return
      }

      if (data > x.data) {
        if (!x.right) {
          x.right = newNode
        } else {
          x = x.right
          check(x)
        }
      } else if (data < x.data) {
        if (!x.left) {
          x.left = newNode
        } else {
          x = x.left
          check(x)
        }
      }
    }
    check(this)
  }

  has(data) {
    const check = (x) => {
      if (x.data === data) {
        return true
      } else if (data > x.data) {
        if (!x.right) {
          return false;
        } else {
          x = x.right
          return check(x)
        }
      } else if (data < x.data) {
        if (!x.left) {
          return false;
        } else {
          x = x.left
          return check(x)
        }
      }
    }
    return check(this)
  }

  find(data) {
    const check = (x) => {
      if (x.data === data) {
        return x
      } else if (data > x.data) {
        if (!x.right) {
          return null;
        } else {
          x = x.right
          return check(x)
        }
      } else if (data < x.data) {
        if (!x.left) {
          return null;
        } else {
          x = x.left
          return check(x)
        }
      }
    }
    return check(this)
  }

  remove(data) {
    const check = (x) => {
      if (x.data === data) {
        x = null
      } else if (data < x.data) {
        if (!x.right) {
          x = null
        } else {
          x = x.right
          check(x)
        }
      } else if (data > x.data) {
        if (!x.left) {
          x = null
        } else {
          x = x.left
          check(x)
        }
      }
    }
    check(this)

  }

  min() {
    if (!this.data) {
      return null
    }
    if (!this.left) {
      return this.data
    } else if (this.left) {
      const minData = (x) => {
        if (!x.left) {
          return x.data
        } else {
          x = x.left
          return minData(x)
        }
      }
      return minData(this.left)
    }
  }

  max() {
    if (!this.data) {
      return null
    }
    if (!this.right) {
      return this.data
    } else if (this.right) {
      const maxData = (x) => {
        if (!x.right) {
          return x.data
        } else {
          x = x.right
          return maxData(x)
        }
      }
      return maxData(this.right)
    }
  }
}

module.exports = {
  BinarySearchTree
};