
// class Nodes {
//     value ;
//     left: null | Nodes;
//     right: null | Nodes;
//     root: null | Nodes;
//   constructor(value: number){
//       this.value = value;
//       this.left = null;
//       this.right = null;
//       this.root = null;
//   }

//   insertValue(value: number){
//       let newNode = new Nodes(value);
//       if (!this.root){
//           this.root = newNode;

//       }else{
//           this.insertNewNode(this.root, newNode);

//       }
//   }
//   insertNewNode(node: Nodes , newNode: Nodes){
//       if(newNode.value < node.value){
//           if(node.left === null){
//               node.left = newNode;
//           }else{
//               this.insertNewNode(node.left, newNode);
//           }
//       }else{
//           if(node.right === null){
//               node.right = newNode;
//           }else{
//               this.insertNewNode(node.right, newNode);
//           }
//       }
//   }

//   searchValue(node: (Nodes | null), value: number): (Nodes | null) {
//       if(node === null){
//           return null;
//       }else if(value < node.value){
//           return this.searchValue(node.left, value);
//       }else if(value > node.value){
//           return this.searchValue(node.right, value);
//       }else{
//           console.log(node);
//           return node;
//       }
//   }

//   minNode(node: Nodes): Nodes{
//       if(node.left === null){
//           return node;
//       }else{
//           return this.minNode(node.left);
//       }

//   }

//   remove(value: number){
//   this.root = this.removeNode(this.root, value);
//   }

//   removeNode(node: (Nodes | null), value: number){

//       if(node === null){
//           return null;
//       }else if(value < node.value){
//           node.left = this.removeNode(node.left, value);
//           return node;
//       }else if(value > node.value){
//           node.right = this.removeNode(node.right, value);
//           return node;
//       }else if(node.left === null && node.right === null){
//           node = null;
//           return node;
//       }else{
//           if(node.left === null){
//               node = node.right;
//               return node;
//           }else if(node.right === null){
//               node = node.left;
//               return node;
//           }

//           let newNode = this.minNode(node.right);
//           node.value = newNode.value;
//           node.right = this.removeNode(node.right, newNode.value);
//           return node;

//       }
//   }
// }
// const myFirstTree = new Nodes();

// myFirstTree.insertValue(8);
// myFirstTree.insertValue(7);
// myFirstTree.insertValue(9);
// myFirstTree.insertValue(20);
// myFirstTree.insertValue(5);
// myFirstTree.insertValue(11);
// myFirstTree.insertValue(2);
// myFirstTree.insertValue(4);
// myFirstTree.insertValue(17);
// myFirstTree.insertValue(13);