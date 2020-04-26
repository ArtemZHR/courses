console.log("1");
function first() {
    let language = prompt("Select the language english or ukrainian");

}

function Second(lenght, widht) {
    this.lenght = lenght;
    this.widht = widht;

    this.Chess = function () {
        let a = "";
        let b = "";
        let alpabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = lenght; i < this.lenght / 2; i++) {
            b += "#@";
        }
        if (this.lenght % 2 !== 0) {
            a += "#";
        }

        for (let i = 0; i < this.widht; i++) {
            a += this.widht - i + b + "\n\r";
            b = reverseString(b);
        }

        a = " " + alpabet.substring(0, this.lenght);
        console.log(a);
    }

    function reverseString(b) {
        return b.split("").reverse().join("");
    }
}

Chess();