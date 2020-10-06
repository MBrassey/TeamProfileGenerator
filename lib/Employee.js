class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role || "Employee";
    this.getName = function () {
      return this.name;
    };
    this.getId = function () {
      return this.id;
    };
    this.getEmail = function () {
      return this.email;
    };
    this.getRole = function () {
      return this.role;
    };
  }
}

module.exports = Employee;
