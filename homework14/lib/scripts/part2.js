"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Student = void 0;
exports.getMyTaxes = getMyTaxes;
exports.getSubjects = getSubjects;
exports.ukraine = exports.studentsObj = exports.ostap = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var studentsObj = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];
exports.studentsObj = studentsObj;
function getSubjects(student) {
  var result = [];
  for (var key in student.subjects) {
    var redactedWords = key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase();
    result.push(redactedWords.replace('_', ' ')) + "    ";
  }
  return result;
}
var ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476
};
exports.ukraine = ukraine;
function getMyTaxes(salary) {
  return this.tax * salary;
}
var Student = /*#__PURE__*/function () {
  function Student(university, course, fullName, marks) {
    _classCallCheck(this, Student);
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.dismiss = false;
  }
  _createClass(Student, [{
    key: "getInfo",
    value: function getInfo() {
      return "\u0421\u0442\u0443\u0434\u0435\u043D\u0442 ".concat(this.course, "\u0433\u043E \u043A\u0443\u0440\u0441\u0443, ").concat(this.university, ", ").concat(this.fullName, " ");
    }
  }]);
  return Student;
}();
exports.Student = Student;
var ostap = new Student("Вища школа психотерапії м.Одеса", "1", "Остап Бендер", [5, 4, 4, 5]);
exports.ostap = ostap;