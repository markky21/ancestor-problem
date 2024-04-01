import { AncestorGraph } from "./ancestorGraph";

describe(AncestorGraph.name, () => {
  describe("getPersonById", () => {
    it("should return the person with the given id if it exists in the graph", () => {
      const graph = new AncestorGraph([[1, 2]]);
      expect(graph.getPersonById(1).id).toEqual(1);
    });

    it("should return undefined if the person with the given id does not exist in the graph", () => {
      const graph = new AncestorGraph([[1, 2]]);
      expect(graph.getPersonById(3)).toBeUndefined();
    });
  });

  describe("constructor", () => {
    it("should correctly construct the graph from the given parent-child pairs", () => {
      const graph = new AncestorGraph([[1, 2], [2, 3]]);
      expect(graph.getPersonById(1).listAncestors()).toEqual([]);
      expect(graph.getPersonById(2).listAncestors()).toEqual([graph.getPersonById(1)]);
    });

    it("should handle multiple parents for a single child", () => {
      const graph = new AncestorGraph([[1, 2], [3, 2]]);
      expect(graph.getPersonById(2).listAncestors()).toEqual([graph.getPersonById(1), graph.getPersonById(3)]);
    });

    it("should handle multiple children for a single parent", () => {
      const graph = new AncestorGraph([[1, 2], [1, 3]]);
      expect(graph.getPersonById(2).listAncestors()).toEqual([graph.getPersonById(1)]);
      expect(graph.getPersonById(3).listAncestors()).toEqual([graph.getPersonById(1)]);
    });

    it("should handle an empty list of parent-child pairs", () => {
      const graph = new AncestorGraph([]);
      expect(graph.getPersonById(1)).toBeUndefined();
    });
  });
});
