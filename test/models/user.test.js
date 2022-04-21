const User = require("./../../app/models/user");

describe("Unit Test for User Class", () => {
  test("Case 1 Create an User Object", () => {
    const alex = new User(
      1,
      "AlexMadera",
      "Alejandro Madera",
      "Bio",
      "2/02/2022",
      "4/20/2022"
    );
    expect(alex.id).toBe(1);
    expect(alex.username).toBe("AlexMadera");
    expect(alex.name).toBe("Alejandro Madera");
    expect(alex.bio).toBe("Bio");
    expect(alex.dateCreated).toBe("2/02/2022");
    expect(alex.lastUpdated).toBe("4/20/2022");
  })
})
