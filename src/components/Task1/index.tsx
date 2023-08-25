import { processStrin } from "../../utils/utils";
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
  function getString(str?: string): string | undefined {
    if (str) return str;
    return str;
  }

  function getPet(str: "dog" | "cat"): string {
    if (str) return str;
    return str;
  }
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
