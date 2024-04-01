import { IPerson } from "./IPerson";

export class Person implements IPerson {
  private parents: IPerson[] = [];

  constructor(public readonly id: number) {}

  listAncestors(): IPerson[] {
    return this.parents.reduce((ancestors, parent) => {
      return ancestors.concat(parent, parent.listAncestors());
    }, [] as IPerson[]);
  }

  setParent(parent: IPerson): void {
    this.parents.push(parent);
  }

  hasCommonAncestor(otherPerson: IPerson): boolean {
    return this.listAncestors().some((ancestor) =>
      otherPerson.listAncestors().includes(ancestor),
    );
  }
}
