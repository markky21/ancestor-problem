export interface IPerson {
  hasCommonAncestor(person: IPerson): boolean;

  setParent(graphElement: IPerson): void;

  listAncestors(): IPerson[];
}
