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

enum Color {
  red,
  Green,
  Blue,
}
let color1: Color = Color.Green;

enum ColorWithRef {
  Red = 10,
  Green = 20,
  Blue = 30,
}
let color2: ColorWithRef = ColorWithRef.Blue;

const appDiv1: HTMLElement = document.getElementById('app');
appDiv1.innerHTML = `
<h1>Enumerated types</h1>
<h2>Cor 1: ${color1}</h2>
<h2>Cor 2: ${color2}</h2>
`;

let notSure: any = 0;
notSure = 'Maybe I as a string';
notSure = false; // okay, definitely a boolean

const appDiv2: HTMLElement = document.getElementById('app');
appDiv2.innerHTML = `
<h1> Any variable</h1>
<h2> ${notSure}</h2>
`;
