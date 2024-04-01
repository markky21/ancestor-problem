import { Person } from "./person";

describe(Person.name, () => {
  describe("listAncestors", () => {
    it("should return an empty array if the person has no parents", () => {
      const person = new Person(1);
      expect(person.listAncestors()).toEqual([]);
    });

    it("should return an array with the parents if the person has parents", () => {
      const person1 = new Person(1);
      const person2 = new Person(2);
      person1.setParent(person2);

      expect(person1.listAncestors()).toEqual([person2]);
    });

    it("should return an array with the parents' ancestors if the person has parents", () => {
      const person1 = new Person(1);
      const person2 = new Person(2);
      const person3 = new Person(3);
      person1.setParent(person2);
      person2.setParent(person3);

      expect(person1.listAncestors()).toEqual([person2, person3]);
    });

    it("should return an array with the all ancestors if the person has multiple parents", () => {
      const person1 = new Person(1);
      const person2 = new Person(2);
      const person3 = new Person(3);
      const person4 = new Person(4);
      person2.setParent(person4);
      person1.setParent(person2);
      person1.setParent(person3);

      expect(person1.listAncestors()).toEqual([person2,person4, person3]);
    });
  });

  describe("hasCommonAncestor", () => {
    it("should return FALSE if the person has no parents", () => {
      const person1 = new Person(1);
      const person2 = new Person(2);
      expect(person1.hasCommonAncestor(person2)).toBe(false);
    });

    it("should return TRUE if the person has a common ancestors", () => {
      const person1 = new Person(1);
      const person2 = new Person(2);
      const person3 = new Person(3);
      person1.setParent(person2);
      person3.setParent(person2);

      expect(person1.hasCommonAncestor(person3)).toBe(true);
    });
  })
});
