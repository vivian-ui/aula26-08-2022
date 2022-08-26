// Import stylesheets
import './style.css';

// Write TypeScript code!
let title: string = 'My App';
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${title}</h1>
<hr>
<p>paragrafo</p>
`;
console.log('Ola mundo');
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
document.getElementById('app.title').innerHTML = title;
let counter: number = 0;

let list: number[] = [1, 2, 3];
let otherList: Array<number> = [1, 2, 3];
const addDiv: HTMLElement = document.getElementById('app');
addDiv.innerHTML = `
<H1>Array declaration</h1>
<h2> list: ${list}</h2>
<h2>other list: ${otherList}</h2>
`;
