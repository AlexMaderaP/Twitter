const userView = require("./../../app/views/userView");

describe("Unit Test for UserView Class", () => {
  test("Return an error object when try to create a new user with a new payload ", () => {
    const payload = null;
    const result = userView.createUser(payload);

    expect(result.error).toMatch(/payload no existe/);
  });

  test("Return an error object when try to create a new user with a payload with invalid properties ", () => {
    const payload = {username: null, name: 12, id: "id"};
    const result = userView.createUser(payload);

    expect(result.error).toMatch(/necesitan tener un valor valido/);
  });

  test("Return an error object when try to create a new user with a payload with missing properties ", () => {
    const payload = {username: null};
    const result = userView.createUser(payload);

    expect(result.error).toMatch(/necesitan tener un valor valido/);
  });

  test("Create a user by a given valid payload ", () => {
    const payload = {username: "username", name: "name", id: 1};
    const result = userView.createUser(payload);

    expect(result.name).toBe("name")
    expect(result.username).toBe("username")
    expect(result.id).toBe(1)
  });
});
