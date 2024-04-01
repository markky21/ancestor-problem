import {IWithAncestors} from "./IWithAncestors";

export interface IPerson extends IWithAncestors {
  id: number;

  hasCommonAncestor(person: IPerson): boolean;

  listAncestors(): IPerson[];
}
