const User = require("./../../app/models/user");

describe("Unit Test for User Class", () => {
  test("Case 1 Create an User Object", () => {
    const alex = new User(
      1,
      "AlexMadera",
      "Alejandro Madera",
      "Bio",
    );
    expect(alex.id).toBe(1);
    expect(alex.username).toBe("AlexMadera");
    expect(alex.name).toBe("Alejandro Madera");
    expect(alex.bio).toBe("Bio");
    expect(alex.dateCreated).not.toBeUndefined();
    expect(alex.lastUpdated).not.toBeUndefined();
  })
  test("Case 2 Agregate getters", () => {
    const alex = new User(
      1,
      "AlexMadera",
      "Alejandro Madera",
      "Bio",
    );
    expect(alex.getUsername()).toBe("AlexMadera");
    expect(alex.getBio()).toBe("Bio");
    expect(alex.getDateCreated()).not.toBeUndefined();
    expect(alex.getLastUpdated()).not.toBeUndefined();
  })

  test("Case 3 Set setters", () => {
    const alex = new User(
      1,
      "AlexMadera",
      "Alejandro Madera",
      "Bio",
    );
    alex.setUsername("AlexMaderaP")
    alex.setBio("New bio")

    expect(alex.username).toBe("AlexMaderaP");
    expect(alex.bio).toBe("New bio");
  })

})
