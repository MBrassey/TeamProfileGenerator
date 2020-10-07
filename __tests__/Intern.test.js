const Intern = require("../lib/Intern");

test("Sets School", () => {
  const test = "UAT";
  const i = new Intern("Matt", 1, "matt@brassey.io", test);
  expect(i.school).toBe(test);
});

test("getRole() Confirmed", () => {
  const test = "Intern";
  const i = new Intern("Matt", 1, "matt@brassey.io", "UAT");
  expect(i.getRole()).toBe(test);
});

test("getSchool() Confirmed", () => {
  const test = "UAT";
  const i = new Intern("Matt", 1, "matt@brassey.io", test);
  expect(i.getSchool()).toBe(test);
});
