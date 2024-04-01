import { IPerson } from "./IPerson";

export class Parents implements Iterable<IPerson> {
  private parents: IPerson[] = [];

  *listAncestors(): Generator<IPerson, void, undefined> {
    for (const parent of this.parents) {
      yield parent;
    }
    for (const parent of this.parents) {
      yield* parent.listAncestors();
    }
  }

  setParent(parent: IPerson): void {
    if (this.parents.includes(parent)) return;
    if (this.parents.length > 1)
      throw new Error("Person can only have 2 parents");
    this.parents.push(parent);
  }

  [Symbol.iterator](): Iterator<IPerson> {
    return this.listAncestors();
  }
}
