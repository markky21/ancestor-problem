import { IPerson } from "./IPerson";
import { Person } from "./person";

export class AncestorGraph {
  private readonly graph: Record<number, IPerson> = {};
  constructor(parentChildPairs: number[][]) {
    this.constructGraph(parentChildPairs);
  }

  public getPersonById(personId: number): IPerson {
    return this.graph[personId];
  }

  private constructGraph(parentChildPairs: number[][]) {
    parentChildPairs.forEach(([parent, child]) => {
      if (!this.graph[child]) this.graph[child] = new Person(child);
      if (!this.graph[parent]) this.graph[parent] = new Person(parent);
      this.graph[child].setParent(this.graph[parent]);
    });
  }
}
