const players = [];
const RENDER_EVENT = 'render-player';

document.addEventListener(RENDER_EVENT, function () {
    const table_list = document.querySelector("#player-list");
    table_list.innerHTML = '';
    for (const player of players) {
        element = `<div class="box">
        <div><span id="playerNameSpan">${player.player}</span></div>
        <div class="counter">
            <div class="counter-details">
                <button class="dec button" onclick="decrement(${player.id})"> - </button>
                <span id="totalShuttlecock">${player.total}</span>
                <button class="inc button" onclick="increment(${player.id})"> + </button>
            </div>
        </div>
    </div>`
        table_list.innerHTML += element;
    };
});

document.addEventListener('DOMContentLoaded', function () {
    const formPlayer = document.getElementById('form-player');
    formPlayer.addEventListener('submit', function (e) {
        e.preventDefault();
        addPlayer();
    });
});

let id = 0;
function addPlayer() {
    const playerName = document.getElementById("playerName").value;
    players.push({ id: id, player: playerName, total: 0, totalPrice: 0 });
    id += 1;
    document.dispatchEvent(new Event(RENDER_EVENT))
    document.getElementById("playerName").value = "";
};

function increment(data) {
    new_total = players[data].total + 1;
    players[data].total = new_total;
    document.querySelectorAll("[id='totalShuttlecock']")[data].innerHTML = new_total;
}

function decrement(data) {
    new_total = players[data].total - 1;
    if (new_total !== -1) {
        players[data].total = new_total;
        document.querySelectorAll("[id='totalShuttlecock']")[data].innerHTML = new_total;
    } else {
        alert("shuttlecock tidak boleh kurang dari 0")
    }
}

document.addEventListener('render_klasemen', function () {
    const table_player = document.querySelector("#table-player");
    table_player.style.display = "block";
    table_player.innerHTML = `<h1>Klasemen Urunan</h1>`;
    for (const player of players) {
        element = `<div class="box">
        <div><span id="playerNameSpan">${player.player}</span></div>
        <div class="counter">
            <div class="counter-details">
                <span id="totalPays">${player.totalPrice}</span>
            </div>
        </div>
    </div>`
        table_player.innerHTML += element;
    };
});

const calculate_urunan = document.getElementById("calculate");
calculate_urunan.addEventListener('click', function (e) {
    const priceShuttlecock = document.getElementById('oneShuttlecock').value;
    const courtPrice = document.getElementById('courtPrice').value;
    if (priceShuttlecock && courtPrice) {
        const courtPriceIndividu = Math.ceil((courtPrice / players.length) / 1000) * 1000;
        // double player it means that 4 peps play in 1 game
        const priceShuttlecockIndividu = Math.ceil((priceShuttlecock / 4) / 1000) * 1000;
        players.forEach(player => {
            player.totalPrice = (player.total * priceShuttlecockIndividu) + courtPriceIndividu;
        });
        document.dispatchEvent(new Event('render_klasemen'));
        e.preventDefault();
    } else {
        alert("Harga shuttlecock atau harga lapangan kosong");
    };
})

