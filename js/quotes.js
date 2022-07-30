const quotes = [
  {
    quote: "프로그래밍은 공부가 아닙니다. 연습입니다.",
    author: "-unknown-",
  },
  {
    quote: "좋은 프로그래머는 사람이 이해할 수 있는 코드를 짠다.",
    author: "-Martin Fowler-",
  },
  {
    quote: "기회는 일어나는 것이 아니라 만들어내는 것이다.",
    author: "-크리스 그로서-",
  },
  {
    quote: "성공은 매일 반복한 작은 노력들의 합이다.",
    author: "-로버트 콜리어-",
  },
  {
    quote: "마치지 않고 죽어도 되는 일만 내일로 미뤄라.",
    author: "-파블로 피카소-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
