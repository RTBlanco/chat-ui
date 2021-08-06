document.addEventListener("DOMContentLoaded", () =>{
  const formInput = document.getElementById('input-form');
  const userInput = []
  
  formInput.addEventListener('submit', (e) => {
    e.preventDefault();
    let formText = e.target[0].value
    userInput.push(formText)
    createToMessage(formText)
    // console.log(userInput)
  })

  
})

function createToMessage(text) {
  const messageArea = document.getElementById('messages');
  let content = `
    <div class="to-message">
      ${text}
    </div>
  `
  messageArea.innerHTML += content
}