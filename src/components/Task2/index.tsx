import "./index.css";

interface AnalizeResultInterface {
  taskName: string | null;
  taskId: number;
  doTask: (param: string) => string;
}

export const Task2 = () => {
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
  return <div className="conteinertypescript-task1">dsdsdsd</div>;
};
