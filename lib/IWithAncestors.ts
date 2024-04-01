import {IPerson} from "./IPerson";

export interface IWithAncestors {
  setParent(graphElement: IPerson): void;
}
