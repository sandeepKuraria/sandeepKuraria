//creating library array
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Sandy",
    title: "dharmo rakshati rakshitah",
    readingStatus: true,
  },
  {
    author: "luke",
    title: "god bless you!",
    readingStatus: false,
  },
];

//creating empty array trueLibrary
var trueLibrary = [];
//iterating over library array elements and fetching array objects using indexes to display data in readingStatusObject variable.
for (let i = 0; i < library.length; i++) {
  if (library[i].readingStatus === true) {
    //initialising readingStatusObject object with its keys and values
    var readingStatusObject = {
      author: library[i].author,
      title: library[i].title,
      readingStatus: library[i].readingStatus,
    };
    //pushing only these objects which have readingStatus is true not false in a newly created trueLibrary array.
    trueLibrary.push(readingStatusObject);
  }
}
//using JSON.stringify(value, replacer, space) to represent output in JSON format.
console.log(JSON.stringify(trueLibrary, null, 10));
