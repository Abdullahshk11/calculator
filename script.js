let str = "";
let btns = document.querySelectorAll(".btn");
let input = document.querySelector("input");
Array.from(btns).forEach((btns) => {
    btns.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            str = eval(str);
            input.value = str;
        }
        else if (e.target.innerHTML == "C") {
            str = "";
            input.value = str;
        }
        else {
        str = str + e.target.innerHTML;
        input.value = str;
        }

    });
});