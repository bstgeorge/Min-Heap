class MinHeap {
  constructor(value) {
    this.queue = [value];
    this.length = 1;
  }

  add = (value) => {
    this.queue[this.length] = value;
    console.log(`\n`)
    console.log('adding: ', this.queue[this.length]);
    this.heapifyUp(this.length);
    this.length++;
  }

  remove = (value) => {
    let idx = this.queue.indexOf(value);
    this.queue[idx] = this.queue[this.length - 1]
    this.queue.pop();
    this.length--;
    this.heapifyDown(idx);
  }

  heapifyUp = (childIdx) => {
    // base case
    if (childIdx <= 0) {
      console.log(`base case met \n`)
      return;
    }
    let parentIdx = Math.floor((childIdx - 1) / 2)
    console.log('parent: ', this.queue[parentIdx]);
    if (this.queue[childIdx] < this.queue[parentIdx]) {
      // swap them
      console.log(`swapping ${this.queue[parentIdx]} with ${this.queue[childIdx]}`);
      let temp = this.queue[parentIdx];
      this.queue[parentIdx] = this.queue[childIdx];
      this.queue[childIdx] = temp;
      this.heapifyUp(parentIdx);
    } else {
      console.log(`no swap needed \n`)
    }
    return;
  }

  heapifyDown = (parentIdx) => {
    let parent = this.queue[parentIdx]
    let child1Idx = 2 * parentIdx + 1
    let child2Idx = child1Idx + 1
    let child1 = this.queue[child1Idx]
    let child2 = this.queue[child2Idx]
    // base case
    if ((parent < child1) && (parent < child2)) {
      return;
    }
    if (child1 < child2) {
      this.queue[parentIdx] = child1;
      this.queue[child1Idx] = parent;
      this.heapifyDown(child1Idx);
    }
    if (child2 <= child1) {
      this.queue[parentIdx] = child2;
      this.queue[child2Idx] = parent;
      this.heapifyDown(child2Idx);
    }
    return;
  }
}

let heap = new MinHeap(Math.floor(100 * Math.random()));
let adds = [];
for (let i = 0; i < 50; i++) {
  adds.push(Math.floor(100 * Math.random()));
}
for (let element of adds) {
  heap.add(element);
}
console.log(heap.queue);
console.log(heap.length);
heap.add(-2);
console.log(heap.queue);
console.log(heap.length);
heap.remove(-2);
console.log(heap.queue);
console.log(heap.length);
