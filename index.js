var button = document.getElementById("result");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var output = document.getElementById("output");
function add(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    var result = add(Number(num1.value), Number(num2.value));
    output.innerText = result.toString();
    console.log(result);
});
