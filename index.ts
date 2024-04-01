import { AncestorGraph } from "./lib/ancestorGraph";

const parentChildPairs = [
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

const accessorGraph = new AncestorGraph(parentChildPairs);
const person5 = accessorGraph.getPersonById(5);
const person8 = accessorGraph.getPersonById(8);

console.log(person5.hasCommonAncestor(person8));
