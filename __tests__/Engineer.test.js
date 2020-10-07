const Engineer = require("../lib/Engineer");

test("Sets GitHub", () => {
  const test = "gitHub";
  const i = new Engineer("Matt", 1, "matt@brassey.io", test);
  expect(i.github).toBe(test);
});

test("getRole() Confirmed", () => {
  const test = "Engineer";
  const i = new Engineer("Matt", 1, "matt@brassey.io", "gitHub");
  expect(i.getRole()).toBe(test);
});

test("getGithub() Confirmed", () => {
  const test = "gitHub";
  const i = new Engineer("Matt", 1, "matt@brassey.io", test);
  expect(i.getGithub()).toBe(test);
});
