window.onload = function () {
  //new Console();
};

class Console {
  constructor() {
    fetch("../data/consoleMessages.json")
      .then((response) => response.json())
      .then((data) => {
        this.messages = data.consoleMessages;
        this.repeatOutput();
      })
      .catch((error) => {
        console.error(error);
      });
    this.previousMessage = "";
  }

  startOutput() {}

  repeatOutput() {
    let messageIndex = Math.floor(Math.random() * this.messages.length);
    let messageText = this.messages[messageIndex];

    while (messageText === this.previousMessage) {
      messageIndex = Math.floor(Math.random() * this.messages.length);
      messageText = this.messages[messageIndex];
    }

    this.previousMessage = messageText;
    const messageElement = document.getElementById("message");

    const delay = 250;
    const cursorChar = String.fromCharCode(9608);
    let cursorAfterBlinks = 10;
    let currentIndex = 0;
    let isCursorVisible = true;

    let messageInterval = setInterval(() => {
      isCursorVisible = !isCursorVisible;

      let messageString = messageText.slice(0, currentIndex);
      if (isCursorVisible) {
        messageString += cursorChar;
      }

      messageElement.textContent = messageString;
      currentIndex++;

      if (currentIndex > messageText.length) {
        clearInterval(messageInterval);
        let postMessageInterval = setInterval(() => {
          if (cursorAfterBlinks) {
            isCursorVisible = !isCursorVisible;

            let messageString = messageText;
            if (isCursorVisible) {
              messageString += cursorChar;
            }

            cursorAfterBlinks--;
            messageElement.textContent = messageString;
          } else {
            clearInterval(postMessageInterval);
            this.repeatOutput();
          }
        }, delay);
      }
    }, delay);
  }
}
