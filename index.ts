import { AncestorGraph } from "./lib/ancestorGraph";

console.log("Hello World!");

const parentChildPairs1 = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [9, 11],
  [14, 4],
  [13, 12],
  [12, 9],
];

const accessorGraph = new AncestorGraph(parentChildPairs1);
accessorGraph.hasCommonAncestor(6, 8); // true
