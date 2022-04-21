const userService = require("./../../app/models/userService");

describe("Unit Test for UserService Class", () => {
  test("Case 1 Create an UserService Object", () => {
    const user = userService.create(1, "AlexM", "Alejandro Madera");

    expect(user.id).toBe(1);
    expect(user.username).toBe("AlexM");
    expect(user.name).toBe("Alejandro Madera");
    expect(user.bio).not.toBeUndefined();
  });

  test("Case 2 Get all user data in a list", () => {
    const user = userService.create(1, "AlexM", "Alejandro Madera");
    const userData = userService.getInfo(user);

    expect(userData[0]).toBe(1);
    expect(userData[1]).toBe("AlexM");
    expect(userData[2]).toBe("Alejandro Madera");
    expect(userData[3]).not.toBeUndefined();
  });
});
