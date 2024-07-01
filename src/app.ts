console.log("Hello World");

function println(msg: string | number): void {
  console.log(msg);
}

function add(a: number, b: number): number {
  return a + b;
}

function sumary(a: number, b: number, cb: (result: number) => void) {
  cb(add(a, b));
}

sumary(1, 2, println);
