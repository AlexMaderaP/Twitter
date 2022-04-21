const userService = require("./../../app/models/userService");

describe("Unit Test for UserService Class", () => {
  test("Case 1 Create an UserService Object", () => {
    const user = userService.create(1,"AlexM","Alejandro Madera")

    expect(user.id).toBe(1);
    expect(user.username).toBe("AlexM");
    expect(user.name).toBe("Alejandro Madera");
    expect(user.bio).not.toBeUndefined();
    
  })

})