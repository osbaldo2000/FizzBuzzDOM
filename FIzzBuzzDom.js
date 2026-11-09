function FB() {

    let ingresaNumero = document.getElementById("numero");
    let number = [];


    number = ingresaNumero.value;
    ingresaNumero.value = "";

    let totalFizz = 0;
    let totalBuzz = 0;
    let totalFizzBuzz = 0;
    let totalLoco = 0;


    const FizzBuzz = () => {

        if (number > 1000) {
            document.querySelector("p").innerHTML = "Error elije un numero menos de 1000";
            return;
        }

        else {
            document.querySelector("#resultado").innerHTML = "";
        }

        for (let i = 1; i <= number; i++) {

            if (i % 3 === 0 && i % 5 === 0) {
                let F1 = document.querySelector("p");
                F1.innerHTML += "<span class='cambio' style='color:blue'>FizzBuzz, </span>";
                totalFizzBuzz++;

            } else if (i % 7 === 0) {
                let F2 = document.querySelector("p");
                F2.innerHTML += "loco, ";
                totalLoco++;

            } else if (i % 5 === 0) {
                let F3 = document.querySelector("p");
                F3.innerHTML += "Buzz, ";
                totalBuzz++;

            } else if (i % 3 === 0) {
                let F4 = document.querySelector("p");
                F4.innerHTML += "Fizz, ";
                totalFizz++;

            } else {
                let F5 = document.querySelector("p");
                F5.innerHTML += i + ", ";
            }

        }

    }

    FizzBuzz();

    const FizzB = document.querySelector("#NFizzBuzz");
    FizzB.innerHTML = totalFizzBuzz;

    const Fizz = document.querySelector("#NFizz");
    Fizz.innerHTML = totalFizz;
}




function colorFizzBuzz() {
    const changeColor = document.querySelectorAll(".cambio");
    for (let i = 0; i < changeColor.length; i++) {
        changeColor[i].classList.toggle("text_negro");
    }

}
