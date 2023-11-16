const bot = new Bot("6652931725:AAHb5wB3amj5JfGYqDSHhRsPmj5D2D-qM8M", "5090243433");
 
// bot.getUpdates()
//   .then(res => {
//     console.log(res.result);
//   })
document.getElementById("form")
.addEventListener("submit", e => {
  e.preventDefault();
 
  const text = document.getElementById("textInput").value;
 
  bot.sendFile("#fileInput", text)
  .then(res => {
    console.log(res);
  })
})
