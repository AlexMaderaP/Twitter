const userView = require("./../../app/models/userView");

describe("Unit Test for UserView Class", () => {
  test("Return an error object when try to create a new user with a new payload ", () => {
    const payload = null;
    const result = userView.createUser(payload);

    expect(result.error).toMatch(/payload no existe/)

  });
});
