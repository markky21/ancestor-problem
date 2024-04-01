import { IPerson } from "./IPerson";
import { Parents } from "./parents";

export class Person implements IPerson {
  private parents: Parents = new Parents();

  constructor(public readonly id: number) {}

  listAncestors(): IPerson[] {
    return [...this.parents];
  }

  setParent(parent: IPerson): void {
    this.parents.setParent(parent);
  }

  hasCommonAncestor(otherPerson: IPerson): boolean {
    return this.listAncestors().some((ancestor) =>
      otherPerson.listAncestors().includes(ancestor),
    );
  }
}
