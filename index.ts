let title = 'Typescript Introduction Part 2';
document.getElementById('title').innerHTML = title;

//Array
let list: number[] = [1, 2, 3];
let otherList: Array<number> = [1, 2, 3];

const array: HTMLElement = document.getElementById('array');
array.innerHTML = `<h2>Array declaration</h2>
                    <p>List: ${list}</p>
                    <p>Other List: ${otherList}</p>`;

//Tuple: elementos de tipos diferentes num mesmo array
let me: [string, number];
me = ['Ana Beatriz', 20];

const tuple: HTMLElement = document.getElementById('tuple');
tuple.innerHTML = `<h2>Tuple declaration</h2>
                  <p>Eu me chamo ${me[0]} e tenho ${me[1]} anos.</p>`;

//Enumerated
enum Color {
  Red,
  Green,
  Blue,
} //Color é como se fosse um tipo de dado. Por padrão, contém os numeros 1, 2, 3. O texto só é um identificador
let color1: Color = Color.Green;

enum ColorWithRef {
  Red = 10,
  Green = 20,
  Blue = 30,
}
let color2: ColorWithRef = ColorWithRef.Blue;

const enumerated: HTMLElement = document.getElementById('enumerated');
enumerated.innerHTML = `<h2>Enumerated declaration</h2>
                      <p>Color 1: ${color1}</p>
                      <p>Color 2: ${color2}</p>`;

//Any
let notSure: any = 4;
notSure = 'I think I can be a string';
notSure = false;

const any: HTMLElement = document.getElementById('any');
any.innerHTML = `<h2>Any variable</h2>
                <p>Now, this "any" is: ${notSure}</p>`;

//Void
function warnUser(): void {
  console.log('This is my warning message being used');
}

let functionExec: void = warnUser();

let unusable: void = undefined;
unusable = null;

functionExec;

const myVoid: HTMLElement = document.getElementById('void');
myVoid.innerHTML = `<h2>Void</h2>
                    <p>unusable: ${unusable}</p>
                    <p>functionExec: ${functionExec}</p>`;

//Object
declare function createObject(theObject: object | null): void;
/*
createObject({ chave: 'valor' }); //Ok
createObject(null); //Ok
createObject(undefined); //Ok
createObject(45); //Erro
createObject("string"); //Erro
createObject(false); //Erro
*/

//Type Assertions (conversão de tipos)
let someValue: any = 'This is a string';
let stringLenght: number = (<string>someValue).length;

let someValue2: any = 'This is a string';
let stringLenght2: number = (someValue2 as string).length;

const types: HTMLElement = document.getElementById('types');
types.innerHTML = `<h2>Type Assertions</h2>
                  <p>Variable: ${someValue}</p>
                  <p>Type: ${someValue}</p>`;

//Functions
function sum(n1: number, n2: number): number {
  return n1 + n2;
}

function fullName(pessoa: { name: string; lastName: string }): string {
  return pessoa.name + ' ' + pessoa.lastName;
}

const functions: HTMLElement = document.getElementById('function');
functions.innerHTML = `<h2>Functions</h2>
                      <p>Soma de 2 e 3: ${sum(2, 3)}</p>
                      <p>Nome completo: ${fullName({
                        lastName: 'Walker',
                        name: 'Ana Beatriz',
                      })}</p>`;

//Eventos
function alertMethod(this: HTMLElement, evento: Event) {
  alert('Alertando com Typescript');
}

const btn = document.getElementById('btn');
btn?.addEventListener('click', alertMethod);

const eventos: HTMLElement = document.getElementById('events');
eventos.innerHTML = `<h2>Events</h2>`;

//Classes
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('welcome to my Typescript Class');

const classes: HTMLElement = document.getElementById('class');
classes.innerHTML = `<h2>Class</h2>
                    <p>${greeter.greet()}</p>`;
