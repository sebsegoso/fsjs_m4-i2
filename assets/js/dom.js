const codeElement = document.getElementById("console");
export const consoleLog = (message, ...rest) => {
  const element = document.createElement("p");
  element.innerText = `${message} ${rest}`;
  codeElement.appendChild(element);
};
