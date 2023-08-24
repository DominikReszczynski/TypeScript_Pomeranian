import "./index.css";

//inferencja typu (dodawanie typu automatycznie)(explicity)
//adding type explicity

//adding type implicity
let age: number = 65;
const name: string = "Dominik";
let lovelOfJS: null = null;
let knowsReact: boolean = true;
let variableUnknown: unknown;
let variableUndefinde: undefined = undefined;
let variableWirhAny: any = "string";

interface Task1Interface {
  taskName: string | null;
  taskId: number;
  doTask: (param: string) => string;
}

export const Task1 = ({ taskName, taskId, doTask }: Task1Interface) => {
  function greet(nameParam: string): string {
    return `Hello ${nameParam} !`;
  }
  function greet2(): string {
    return `Hello ${name} !`;
  }
  const getSum = (param1: number, param2: number): number => param1 + param2;

  // Funkcja licząca ilość znaków w stringu
  function getCountCharacters(string: string): number {
    return string.length;
  }

  // Funkcja sprawdzająca czy liczba jest parzysta
  function getIsEven(number: number): boolean {
    return number % 2 === 0;
  }

  const getParityMessage = (isEvenParam: boolean): string =>
    isEvenParam ? "Ta liczba jest parzysta" : "Ta liczba jest nieparzysta";

  function processStrin(strParam?: string): string {
    if (!strParam) return "nie poprawny typ";

    const lenghtOfString = getCountCharacters(strParam);
    const isEvenNumber = getIsEven(lenghtOfString);
    const message = getParityMessage(isEvenNumber);

    return `${strParam} - Liczba znaków: ${lenghtOfString}. ${message}`;
  }

  function getString(str?: string): string | undefined {
    if (str) return str;
    return str;
  }

  function getPet(str: "dog" | "cat"): string {
    if (str) return str;
    return str;
  }
  //   To ćwiczenie ma na celu utrwalenie wiedzy związanej z typowaniem obiektów
  //   1. Zdefiniujmy typ/interfejs AnalyzeResult, który będzie zawierał:
  //   wartość wejściową jako string
  //   informację o ilości znaków w stringu jako number
  //   informację czy ilość znaków jest liczbą parzystą czy nie jako boolean
  //   2 .następnie bazując na funkcji processString z Ćwiczenia 5  powinnismy  rozbić ją na dwie
  //   osobne funkcje:
  //   analyzeString która zwraca obiekt AnalyzeResult | string
  //   printAnalyzeResult która przyjmuje AnalyzeResult | string jako argument i zwraca string
  //   zgodny z wcześniejszym działaniem
  //   3. string dla błędu należy po prostu zwrócić
  return (
    <div className="conteinertypescript-task1">
      <span>task name : {taskName}</span>
      <br />
      <span>taks id : {taskId}</span>
      <br />
      greet1: {greet("Maciej")}
      <br />
      greet2: {greet2()}
      <br />
      getSum: {getSum(4, 6)}
      <br />
      getCountCharacters: {getCountCharacters("dominik")}
      <br />
      isEven: {getIsEven(5).toString()}
      <br />
      getParityMessage: {getParityMessage(getIsEven(5))}
      <br />
      processStrin: {processStrin("dominik")}
      <br />
      getString: {getString()}
      <br />
      getTest: {getPet("dog")}
      <br />
      {doTask(name)}
    </div>
  );
};
