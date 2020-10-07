const Manager = require("../lib/Manager");

test("Sets Office Number", () => {
  const test = 7;
  const i = new Manager("matt", 1, "matt@brassey.io", test);
  expect(i.officeNumber).toBe(test);
});

test("getRole() Confirmed", () => {
  const test = "Manager";
  const i = new Manager("matt", 1, "matt@brassey.io", 7);
  expect(i.getRole()).toBe(test);
});

test("getOffice() Confirmed", () => {
  const test = 7;
  const i = new Manager("Matt", 1, "matt@brassey.io", test);
  expect(i.getOfficeNumber()).toBe(test);
});
