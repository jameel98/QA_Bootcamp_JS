class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeDuplicates() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      let runner = current;
      while (runner.next) {
        if (runner.next.val === current.val) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(4);

console.log("Original Linked List:");
linkedList.display();

linkedList.removeDuplicates();

console.log("Linked List after removing duplicates:");
linkedList.display();
