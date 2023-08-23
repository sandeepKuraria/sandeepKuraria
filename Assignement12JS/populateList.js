function populateList() {
  document.getElementById("licontainer").innerHTML = "";
  data.forEach((list) => {
    const li = document.createElement("li");
    li.textContent = list;
    document.getElementById("licontainer").appendChild(li);
  });
}
const data = ["list1", "list2", "list3", "list4"];
populateList();
