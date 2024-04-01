import { AncestorGraph } from "./lib/ancestorGraph";

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

test("return FALSE if two persons don't have a common ancestor", () => {
  const accessorGraph = new AncestorGraph(parentChildPairs1);
  const person14 = accessorGraph.getPersonById(14);
  const person13 = accessorGraph.getPersonById(13);

  expect(person14.hasCommonAncestor(person13)).toEqual(false);
});

test("return TRUE if two persons have a common ancestor", () => {
  const accessorGraph = new AncestorGraph(parentChildPairs1);
    const person6 = accessorGraph.getPersonById(6);
    const person8 = accessorGraph.getPersonById(8);

  expect(person6.hasCommonAncestor(person8)).toEqual(true);
});
