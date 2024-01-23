class Node {
  constructor (value, next) {
    this.value = value;
    this.next = next;
  };
};

class LinkedList {
  constructor (listHead, listTail) {
    this.listHead = null;
    this.listTail = null;
    this.length = 0;
  };

  append(value) {
    let node = new Node(value, null);
    
    if (this.listTail !== null) {
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
  };
  
  head() {
    return this.listHead;
  };

  tail() {
    return this.listTail;
  };

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

  pop() {
    if (this.length === 0) {
      return;
    };

    if (this.length === 1) {
      this.listHead = null;
      this.listTail = null;
      this.length--;
    };

    let tailIndex = this.length - 1;
    let previousNode = this.at(tailIndex - 1);

    this.listTail = previousNode;
    this.listTail.next = null;
    this.length--;
  };

  contains(value) {
    for (let i = 0; i < this.length; i++) {
      let nodeValue = this.at(i);

      if (value === nodeValue.value) {
        return true;
      };
    };

    return false;
  };

  find(value) {
    for (let i = 0; i < this.length; i++) {
      let nodeValue = this.at(i);

      if (value === nodeValue.value) {
        return i;
      };
    };

    return null;
  };

  toString() {
    let str = "";

    for (let i = 0; i < this.length; i++) {
      let nodeValue = this.at(i);
      str = str + `( ${ nodeValue.value} ) -> `;
    }

    return str + "null";
  };

  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      return "Invalid index";
    };

    let newNode = new Node(value, null);

    if (index === 0) {
      newNode.next = this.listHead;
      this.listHead = newNode;

      if (this.length === 0) {
        this.listTail = newNode;
      };
      
    } else {
      let currentNode = this.listHead;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      };

      newNode.next = currentNode.next;
      currentNode.next = newNode;

      if (index === this.length) {
        this.listTail = newNode;
      };

    };
  
    this.length++;
  };

  removeAt(index) {
    if (this.length === 0) {
      return "The list is empty";
    };

    if (index < 0 || index >= this.length) {
      return "Invalid index";
    };

    if (index === 0) {
      this.listHead = this.listHead.next;

      if (this.length === 1) {
        this.listTail = null;
      };
    } else {
      let currentNode = this.listHead;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      };

      currentNode.next = currentNode.next.next;

      if (index === this.length - 1) {
        this.listTail = currentNode;
      };
    };

    this.length--;
  };
};
