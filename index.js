let myNotes = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
  const inputValue = inputEl.value
  myNotes.push(inputValue)
})

for(let i = 0; i < myNotes.length; i++) {
  ulEl.innerHTML +=  "<li>" + myNotes[i] + "</li>"
}