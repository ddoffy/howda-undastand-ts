// inject lib dom
/// <reference lib="dom" />;

const button = document.getElementById("result");
const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const output = document.getElementById("output")! as HTMLInputElement;

function add(a: number, b: number): number {
  return a + b;
}

button &&
  button.addEventListener("click", () => {
    const result = add(Number(num1.value), Number(num2.value));
    output.innerText = result.toString();
    console.log(result);
  });
