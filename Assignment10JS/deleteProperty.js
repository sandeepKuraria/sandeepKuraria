//creating an object student
const student = {
  firstName: "sandeep",
  lastName: "kuraria",
  rollNo: 101,
  email: "sandeep.kuraria@gmail.com",
  address: "Jabalpur",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

//creating function to display all data
function displayStudent() {
  const displayStudentObject =
    "firstName: " +
    student.firstName +
    " " +
    ", lastName: " +
    student.lastName +
    " " +
    ", rollNo: " +
    student.rollNo +
    " " +
    ", email: " +
    student.email +
    " " +
    ", address: " +
    student.address +
    " " +
    ", fullName: " +
    student.fullName();
  console.log(displayStudentObject);
}

//calling function displayStudent() and printing it inside console before deletion of rollNo property
console.log(displayStudent());

delete student.rollNo;

//calling function displayStudent() and printing it inside console after deletion of rollNo property
console.log(displayStudent());
