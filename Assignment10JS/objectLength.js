//creating student object
const student = {
  firstName: "sandeep",
  lastName: "kuraria",
  rollNo: 101,
  email: "sandeep.kuraria@gmail.com",
  address: "Jabalpur",
  fullName: function () {
    return student.firstName + " " + student.lastName;
  },
};

//initialised a variable objectLength
let objectLength = 0;
//iterating over student object's keys
for (const key in student) {
  objectLength++;
}
//number counted and stored into objectLength variable to know available keys inside student object
console.log("object length is : " + objectLength);
