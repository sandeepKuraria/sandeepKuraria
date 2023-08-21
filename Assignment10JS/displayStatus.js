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
];

//iterating over library array elements and fetching array objects using indexes to display data in displayReadingStatus variable.
for (let i = 0; i < library.length; i++) {
  const displayReadingStatus =
    library[i].author +
    ", " +
    library[i].title +
    ", " +
    library[i].readingStatus +
    ".    ";
  console.log(displayReadingStatus);
}
