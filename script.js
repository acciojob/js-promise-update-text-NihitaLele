// your JS code here. If required.

function greetAfterOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

greetAfterOneSecond().then((message) => {
  const outputElement = document.getElementById('output');
  if (outputElement) {
    outputElement.textContent = message;
  }
});
