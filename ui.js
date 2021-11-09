export const clearQuote = () => {
  const quote = document.getElementById("advice");

  while (quote.firstChild) {
    quote.firstChild.remove();
  }
};

const createQuote = (advice) => {
  const quote = `"${advice}"`;

  const quoteEl = document.createElement("p");
  quoteEl.appendChild(document.createTextNode(quote));

  return quoteEl;
};

export const appendQuote = (advice) => {
  const quote = document.getElementById("advice");
  const item = createQuote(advice);
  quote.appendChild(item);
};
