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

function warnUser(): void {
  console.log('This is sy warning message');
}

let myFunction: void = undefined;
unusable = null;

myFunction;

const appDiv4: HTMLElement = document.getElementById('app');
appDiv4.innerHTML = `

<h1> Void</h1>
<h2>unusable: ${unusable}</h2>
<h2> myFunctio: ${myFunction}</h2>
`;

//declare function create(o: object | null); void;
//create({prop: 0}; // ok
//create(null); // okl
//create(42); //Erro
//create ("string"); //Erro
//create(false); //Erro
//create(undefined); // ok

//const appDiv5: HTMLElement = document.getElementById('app')
//appDiv5.innerHTML = `
//<h1>Objetct</h1>
//`;

function sun(n1: number, n2: number): number {
  return n1 + n2;
}

function fullName(pessoa: { name: string; lastname: string }): string {
  return pessoa.name + '' + pessoa.lastname;
}
const appDiv7: HTMLElement = document.getElementById('app');
appDiv7.innerHTML = `
<h1> Function</h1>
<h2> Soma de 2 e 3: ${sun(2, 3)}</h2>
<h2> Soma de 11 e 329: ${sun(2, 3)}</h2>
<h2> Meu nome completo: ${fullName({lastname: 'Larguesa', name: ????????????S})}
</h2>
`;


let title: string = "Ola, mundo!";
let paragraph: string = "bla";

let counter = 0

let intervalId =  setInterval(() => {
  counter = counter + 1;
  const appP: HTMLElement = document. getElementById('app');
  appP.innerHTML = "Contador: "+counter;
}, 1000)

const btn = document.getElementById('app.btn');


class Greeter {
  greeting: string;
  constructor(message: string){
    this.greeting = message;
  }
  greet (){
    return 'hello, ' + this.greeting;
  }
}

const appDiv8: HTMLElement = document.getElementById