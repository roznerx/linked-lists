class Node {
  constructor (value, next) {
    this.value = value;
    this.next = next;
  }
};

class LinkedList {
  constructor (listHead, listTail) {
    this.listHead = null;
    this.listTail = null;
    this.length = 0;
  }

  append(value) {
    let node = new Node(value, null);
    
    if (this.listTail != null) {
      this.listTail.next = node;
      this.listTail = node;
    } else {
      this.listHead = node;
      this.listTail = node;
    };

    this.length++;
  };

  prepend(value) {
    let node = new Node(value, null);

    if (this.listHead !== null) {
      node.next = this.listHead;
    };

    this.listHead = node;

    if (this.listTail === null) {
      this.listTail = node;
    };

    this.length++;
  };
  
  
  size() {
    return this.length;
  }
  
  head() {
    return this.listHead;
  }

  tail() {
    return this.listTail;
  }

  at(index) {
    if (index < 0 || index >= this.length) {
      return null;
    };

    let result = this.listHead;

    for (let i = 0; i < index; i++) {
      result = result.next;
    };

    return result;
  };

};

let linkedList = new LinkedList();
linkedList.prepend(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList.at(0));
