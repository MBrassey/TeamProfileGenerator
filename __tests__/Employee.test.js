const Employee = require("../lib/Employee");

test("Creates new Employee", () => {
  const i = new Employee();
  expect(typeof i).toBe("object");
});

test("Sets Employee Name", () => {
  const name = "Matt";
  const i = new Employee(name);
  expect(i.name).toBe(name);
});

test("Sets Employee Id", () => {
  const testValue = 7;
  const i = new Employee("Matt", testValue);
  expect(i.id).toBe(testValue);
});

test("Sets Employee Email", () => {
  const testValue = "matt@brassey.io";
  const i = new Employee("Matt", 1, testValue);
  expect(i.email).toBe(testValue);
});

test("getName() Confirmed", () => {
  const testValue = "Matt";
  const i = new Employee(testValue);
  expect(i.getName()).toBe(testValue);
});

test("getId() Confirmed", () => {
  const testValue = 7;
  const i = new Employee("Matt", testValue);
  expect(i.getId()).toBe(testValue);
});

test("getEmail() Confirmed", () => {
  const testValue = "matt@brassey.io";
  const i = new Employee("Matt", 1, testValue);
  expect(i.getEmail()).toBe(testValue);
});

test('getRole() Returns "Employee"', () => {
  const testValue = "Employee";
  const i = new Employee("Matt", 1, "matt@brassey.io");
  expect(i.getRole()).toBe(testValue);
});
