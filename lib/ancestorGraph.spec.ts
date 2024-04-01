import { AncestorGraph } from "./ancestorGraph";

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

  expect(accessorGraph.hasCommonAncestor(14, 13)).toEqual(false);
});

test("return TRUE if two persons have a common ancestor", () => {
  const accessorGraph = new AncestorGraph(parentChildPairs1);

  expect(accessorGraph.hasCommonAncestor(6, 8)).toEqual(true);
});
