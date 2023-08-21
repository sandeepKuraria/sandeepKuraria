//creating cylinder object
const cylinder = {
  radius: 2,
  height: 3,
  //declaring volume function which is key for cylinder object and returning cylinderVolume with toFixed method to print result upto 4 decimal.
  volume: function () {
    const cylinderVolume =
      Math.PI * (Math.pow(cylinder.radius, 2) * cylinder.height);
    return cylinderVolume.toFixed(4);
  },
};

//printing data in console.
console.log(
  `cylindrical volume is : ${cylinder.volume()} for radius : ${
    cylinder.radius
  } and height : ${cylinder.height}`
);
