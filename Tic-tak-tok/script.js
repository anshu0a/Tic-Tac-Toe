let cells = document.querySelectorAll(".cell");
let users = document.querySelectorAll(".usr");
let msg = document.querySelector(".msg");
let turn = 0;


let inp = 'X'
function reload() {
    window.location.reload()
}
function clicked(id) {

    if (cells[id - 1].innerHTML == '') {
        cells[id - 1].innerHTML = inp;
        turn++;

        if (inp == 'X') {
            cells[id - 1].setAttribute("class", "cell cell2");
            users[0].setAttribute("class", "usr");
            users[1].setAttribute("class", "usr usr1");

            inp = 'O'
        }
        else {
            inp = 'X'
            users[1].setAttribute("class", "usr");
            users[0].setAttribute("class", "usr usr1");
        }
        if (check()) {
            users[1].setAttribute("class", "usr");
            users[0].setAttribute("class", "usr");

            if (inp == 'O') msg.children[0].innerHTML = "winner is player 1"
            else msg.children[0].innerHTML = "winner is player 2"
            msg.style.display = "flex";

        } else if (turn == 9) {
            users[1].setAttribute("class", "usr");
            users[0].setAttribute("class", "usr");

            msg.children[0].innerHTML = "Game draw"
            msg.style.display = "flex";
        }

    }

}
function check() {
    if (((cells[0].innerHTML == cells[1].innerHTML) && (cells[1].innerHTML == cells[2].innerHTML) && (cells[2].innerHTML != '')) ||
        ((cells[3].innerHTML == cells[4].innerHTML) && (cells[4].innerHTML == cells[5].innerHTML) && (cells[5].innerHTML != '')) ||
        ((cells[6].innerHTML == cells[7].innerHTML) && (cells[7].innerHTML == cells[8].innerHTML) && (cells[8].innerHTML != '')) ||

        ((cells[0].innerHTML == cells[3].innerHTML) && (cells[3].innerHTML == cells[6].innerHTML) && (cells[6].innerHTML != '')) ||
        ((cells[1].innerHTML == cells[4].innerHTML) && (cells[4].innerHTML == cells[7].innerHTML) && (cells[7].innerHTML != '')) ||
        ((cells[2].innerHTML == cells[5].innerHTML) && (cells[5].innerHTML == cells[8].innerHTML) && (cells[8].innerHTML != '')) ||

        ((cells[0].innerHTML == cells[4].innerHTML) && (cells[4].innerHTML == cells[8].innerHTML) && (cells[8].innerHTML != '')) ||
        ((cells[2].innerHTML == cells[4].innerHTML) && (cells[4].innerHTML == cells[6].innerHTML) && (cells[6].innerHTML != ''))) {

        return true;

    }
    return false

}