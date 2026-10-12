const clickSound = document.getElementById("clickSound");

document.addEventListener("click", function () {
    clickSound.currentTime = 0;
    clickSound.volume = 1.0;
    clickSound.play();
});

const songs = [
    { title: "If I Were A Cat", file: "songs/Crystal Tea - If I Were A Cat.mp3", cover: "images/CT1.jpg" },
    { title: "It", file: "songs/Yves - It.mp3", cover: "images/Y1.jpg" },
    { title: "There There", file: "songs/Crystal Tea - There There.mp3", cover: "images/CT2.jpeg" },
    { title: "birth", file: "songs/Yves - birth.mp3", cover: "images/Y2.jpg" },
    { title: "Twinkle Twinkle Little Scar", file: "songs/Crystal Tea - Twinkle Twinkle Little Scar.mp3", cover: "images/CT3.jpg" }
];

let currentSong = 0;
let audio = document.getElementById("audio");

let isPlaying = false;

function appAppears() {
    const fish = document.getElementById("aliveFish");

    fish.style.display = "block";
    moveIcon("aliveFish");

    fish.classList.remove("pop");

    void fish.offsetWidth; // forces browser to restart animation

    fish.classList.add("pop");
}

function openApp(windowId) {
    document.getElementById(windowId).style.display = "block";

    if (windowId === "minesweeperWindow") {
        minesweeperBoard();
    }
}

function closeApp(windowId) {
    document.getElementById(windowId).style.display = "none";
}

function loadSong(index) {
    currentSong = index;

    document.getElementById("title").innerText = songs[index].title;
    document.getElementById("cover").src = songs[index].cover;

    audio.src = songs[index].file;

    highlightPlaylist();
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        isPlaying = true;
    } else {
        audio.pause();
        isPlaying = false;
    }
}

function nextSong() {
    currentSong++;
    if (currentSong >= songs.length) currentSong = 0;

    loadSong(currentSong);
    audio.play();
}

function prevSong() {
    currentSong--;
    if (currentSong < 0) currentSong = songs.length - 1;

    loadSong(currentSong);
    audio.play();
}

audio.addEventListener("ended", nextSong);

function buildPlaylist() {
    const list = document.getElementById("playlist");
    list.innerHTML = "";

    songs.forEach((song, index) => {
        const div = document.createElement("div");
        div.classList.add("song");
        div.innerText = song.title;

        div.onclick = function () {
            loadSong(index);
            audio.play();
        };
        list.appendChild(div);
    });
}

function highlightPlaylist() {
    const items = document.querySelectorAll(".song");
    items.forEach((item, i) => {
        item.classList.toggle("active", i === currentSong);
    });
}

buildPlaylist();
loadSong(0);

function checkPassword() {
    const password = document.getElementById("passwordToCheck").value;
    if (password === "1217") {
        openApp("document2Window");
        closeApp("secretPassword");
    } else {
        document.getElementById("error").textContent = "Incorrect password!";
    }
}

function openNotes(notesId) {
    document.getElementById(notesId).style.display = "block";
    document.getElementById('collageWindow').style.display = "none";
}

function closeNotes(notesId) {
    document.getElementById(notesId).style.display = "none";
    document.getElementById('collageWindow').style.display = "block";
}

const accounts = {
    Rin: {
        password: "123",
        buddies: ["Kelly"]
    },

    Kel: {
        password: "123",
        buddies: ["Rat-rin", "xxxxism"]
    }
};

const conversations = {
    Rin: {
        Kelly: [
            {
                sender: "Kelly",
                text: "HAPPY 20TH TO YOU RINNERY!!! HOOORAY"
            },
            {
                sender: "Rin",
                text: "WOOOHOO THANK YOU"
            },
            {
                sender: "Kelly",
                text: "hope you are enjoying your gift so far."
            },
            {
                sender: "Kelly",
                text: "this was quite a pain to make."
            },
            {
                sender: "Kelly",
                text: "also- bro, guess what."
            },
            {
                sender: "Rin",
                text: "what happened bro.."
            },
            {
                sender: "Kelly",
                text: "I literally forgot my password for my account into an app the other day."
            },
            {
                sender: "Kelly",
                text: "I'm so freaking pissed at myself oh my goodness bro."
            },
            {
                sender: "Rin",
                text: "HEEEELPPP???? Wow someone's old age is kicking in again.."
            },
            {
                sender: "Kelly",
                text: "Bro. YOU watch your BACK."
            },
            {
                sender: "Rin",
                text: "wow... threatening me lad.."
            },
            {
                sender: "Rin",
                text: "surely you recall a little bit of it bro!"
            },
            {
                sender: "Kelly",
                text: "bro I don't even KNOW how I forgot it."
            },
            {
                sender: "Kelly",
                text: "I use the same password for all my accounts — something to do with my favourite gemstone."
            },
            {
                sender: "Rin",
                text: "LMAOOOO???? did you type it in wrong or something when you made it..."
            },
            {
                sender: "Kelly",
                text: "man. maybe I did."
            },
            {
                sender: "Kelly",
                text: "anyways, aren't you excited for the actual present bro!"
            },
            {
                sender: "Rin",
                text: "wow!! what is it bro tonguemoji"
            },
            {
                sender: "Kelly",
                text: "heh... let me get the key and you can open it."
            },
            {
                sender: "Kelly",
                text: "err hold on, someone's spamming me rq"
            },

        ]
    },
    Kel: {
        'Rat-rin': [
            {
                sender: "Kel",
                text: "HAPPY 20TH TO YOU RINNERY!!! HOOORAY"
            },
            {
                sender: "Rin",
                text: "WOOOHOO THANK YOU"
            },
            {
                sender: "Kel",
                text: "hope you are enjoying your gift so far."
            },
            {
                sender: "Kel",
                text: "this was quite a pain to make."
            },
            {
                sender: "Kel",
                text: "also- bro, guess what."
            },
            {
                sender: "Rin",
                text: "what happened bro.."
            },
            {
                sender: "Kel",
                text: "I literally forgot my password for my account into an app the other day."
            },
            {
                sender: "Kel",
                text: "I'm so freaking pissed at myself oh my goodness bro."
            },
            {
                sender: "Rin",
                text: "HEEEELPPP???? Wow someone's old age is kicking in again!"
            },
            {
                sender: "Kel",
                text: "Dude. YOU watch your BACK BRO."
            },
            {
                sender: "Rin",
                text: "wow... threatening me lad.."
            },
            {
                sender: "Rin",
                text: "don't you even recall a little bit of it bro."
            },
            {
                sender: "Kel",
                text: "bro I don't even KNOW how I forgot it."
            },
            {
                sender: "Kel",
                text: "I use the same password for all my accounts — something to do with my favourite gemstone."
            },
            {
                sender: "Rin",
                text: "LMAOOOO???? did you type it in wrong or something when you made it..."
            },
            {
                sender: "Kel",
                text: "man. maybe I did."
            },
            {
                sender: "Kel",
                text: "anyways, aren't you excited for the actual present bro!"
            },
            {
                sender: "Rin",
                text: "wow!! what is it bro tonguemoji"
            },
            {
                sender: "Kel",
                text: "heh... let me get the key and you can open it."
            },
            {
                sender: "Kel",
                text: "err hold on, someone's spamming me rq"
            },

        ],
        xxxxism: [
            {
                sender: "xxxxism",
                text: "DUDE"
            },
            {
                sender: "xxxxism",
                text: "DUDE"
            },
            {
                sender: "xxxxism",
                text: "DUDE GET IN PLS"
            },
            {
                sender: "Kel",
                text: "what do you want bro stop spamming me plz."
            },
            {
                sender: "xxxxism",
                text: "Uhh so you know how I was supposed to go get the key like ten minutes ago for your friend."
            },
            {
                sender: "Kel",
                text: "yeas... did something happen??"
            },
            {
                sender: "xxxxism",
                text: "So, hypothetically, what would happen if the key were to be lost..."
            },
            {
                sender: "Kel",
                text: "LOL??? SORRY WHAT LMAOOO WDYM LOST"
            },
            {
                sender: "xxxxism",
                text: "Okay bro, it's gone dude the key is gone missing it has disappeared into thin air."
            },
            {
                sender: "Kel",
                text: "anyone tell you not to pick standup comedy for a job?"
            },
            {
                sender: "xxxxism",
                text: "I'm not joking around. It's really missing."
            },
            {
                sender: "Kel",
                text: "dude I'm gonna shove a stick up your ass."
            },
            {
                sender: "Kel",
                text: "how the hell is it missing when we tested it just fine an hour ago???"
            },
            {
                sender: "xxxxism",
                text: "I don't know, but I swear it wasn't by my hands."
            },
            {
                sender: "Kel",
                text: "Yeah, okay. So what am I supposed to do now with her on the other end waiting for the key I mentioned?"
            },
            {
                sender: "xxxxism",
                text: "Well, I suppose you can quickly construct a new key...??"
            },
            {
                sender: "Kel",
                text: "Okay genius, instructions or am I going to have to find it on my own?"
            },
        ]
    }
};

let currentUser = "";

function checkMessagePassword() {
    const username = document.getElementById("messageAccount").value;
    const password = document.getElementById("messagePassword").value;
    if (
        accounts[username] &&
        accounts[username].password === password
    ) {
        currentUser = username;
        openApp("buddyWindow");
        closeApp("loginWindow");
        loadBuddies(currentUser);
    } else {
        document.getElementById("errorMessage").textContent =
            "Wow.. Can't recall your password? Try looking around";
    }
}

function loadBuddies(currentUser) {
    console.log(currentUser);
    console.log(accounts[currentUser]);
    const buddyList = document.getElementById("buddyList");
    buddyList.innerHTML = "";

    const userBuddies = accounts[currentUser].buddies;
    userBuddies.forEach(buddy => {
        const div = document.createElement("div");
        div.classList.add("conversations");
        div.innerText = buddy;
        div.addEventListener("click", function () {
            openConversation(buddy);
        });
        buddyList.appendChild(div);
    })
}

function openConversation(buddy) {
    const convo = document.getElementById("chatMessages");
    convo.innerHTML = "";

    const buddyConvo = conversations[currentUser][buddy];
    buddyConvo.forEach(speech => {
        const div = document.createElement("div");

        const sender = document.createElement("span");
        sender.innerText = speech.sender + ": ";

        const message = document.createElement("span");
        message.innerText = speech.text;
        if (speech.sender == currentUser) {
            sender.classList.add("myMessage");
        } else {
            sender.classList.add("theirMessage");
        }
        div.appendChild(sender);
        div.appendChild(message);
        convo.appendChild(div);
    })
}


const icons = document.querySelectorAll(".icon");
const topBars = document.querySelectorAll(".topbar, .topbardoc");
const windows = document.querySelectorAll(".window");
const GRID_SIZE = 120;

let dragging = null;
let activeWindow = null;
let resizeWindow = null;
let offsetX = 0;
let offsetY = 0;
let startRow = 0;
let startCol = 0;
let mouseStartX = 0;
let mouseStartY = 0;
let startWidth = 0;
let startHeight = 0;
let deltaX = 0;
let deltaY = 0;

const apps = {
    musicApp: { row: 2, col: 0 },
    document_1: { row: 1, col: 0 },
    document_2: { row: 1, col: 1 },
    aliveFish: { row: 3, col: 4 },
    recycleBin: { row: 0, col: 0 },
    picture_1: { row: 1, col: 2 },
    keys: { row: null, col: null },
    messages: { row: 2, col: 1 },
    starfish: { row: 3, col: 0 },
    collage: { row: 2, col: 2 },
    whiteCat: { row: 3, col: 1 },
    minesweeper: { row: 3, col: 2 }
};

windows.forEach(win => {

    win.addEventListener("mousedown", function (event) {

        const rect = this.getBoundingClientRect();

        const nearRight = event.clientX >= rect.right - 16;
        const nearBottom = event.clientY >= rect.bottom - 16;

        if (!(nearRight && nearBottom)) return;

        event.preventDefault();

        resizeWindow = this;

        startMouseX = event.clientX;
        startMouseY = event.clientY;

        startWidth = this.offsetWidth;
        startHeight = this.offsetHeight;

    });

});

document.addEventListener("mousemove", function (event) {

    if (!resizeWindow) return;

    resizeWindow.style.width =
        startWidth + (event.clientX - startMouseX) + "px";

    resizeWindow.style.height =
        startHeight + (event.clientY - startMouseY) + "px";

});

document.addEventListener("mouseup", function () {

    resizeWindow = null;

});


topBars.forEach(bar => {
    bar.addEventListener("mousedown", function (event) {
        event.preventDefault();
        activeWindow = this.parentElement;
        console.log(activeWindow.id);
        const rect = activeWindow.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;
    });
});

document.addEventListener("mousemove", function (event) {
    if (activeWindow == null) return;

    activeWindow.style.left = (event.clientX - offsetX) + "px";
    activeWindow.style.top = (event.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", function (event) {
    if (activeWindow == null) return;

    activeWindow.style.left = (event.clientX - offsetX) + "px";
    activeWindow.style.top = (event.clientY - offsetY) + "px";

    console.log("finished");

    activeWindow = null;
})

function moveIcon(iconId) {
    const icon = document.getElementById(iconId);

    icon.style.left = apps[iconId].col * GRID_SIZE + "px";
    icon.style.top = apps[iconId].row * GRID_SIZE + "px";
};

for (const appName of Object.keys(apps)) {
    moveIcon(appName);
};

icons.forEach(icon => {
    icon.addEventListener("mousedown", function (event) {
        event.preventDefault();
        dragging = icon;
        const rect = icon.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;
        startRow = apps[dragging.id].row;
        startCol = apps[dragging.id].col;
    });
});

document.addEventListener("mousemove", function (event) {
    if (dragging == null) return;

    dragging.style.left = (event.clientX - offsetX) + "px";
    dragging.style.top = (event.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", function (event) {
    console.log("mouseup");
    if (dragging == null) return;
    const snapX = Math.round((event.clientX - offsetX) / GRID_SIZE) * GRID_SIZE;
    const snapY = Math.round((event.clientY - offsetY) / GRID_SIZE) * GRID_SIZE;

    const newRow = snapY / GRID_SIZE;
    const newCol = snapX / GRID_SIZE;

    let occupied = false;

    for (const appName of Object.keys(apps)) {

        if (appName == dragging.id) continue;
        if (
            apps[appName].row == newRow && apps[appName].col == newCol
        ) {
            occupied = true;
            break;
        }
    }
    if (occupied) {
        apps[dragging.id].row = startRow;
        apps[dragging.id].col = startCol;
    } else {
        apps[dragging.id].row = newRow;
        apps[dragging.id].col = newCol;
    }

    dragging.style.left = apps[dragging.id].col * GRID_SIZE + "px";
    dragging.style.top = apps[dragging.id].row * GRID_SIZE + "px";

    if (dragging.id == "aliveFish" && newCol == apps.whiteCat.col && newRow == apps.whiteCat.row) {
        console.log("fish found cat");

        let kitty;
        let fishy;

        kitty = document.getElementById("whiteCat");
        fishy = document.getElementById("aliveFish");

        kitty.remove();
        fishy.remove();

        delete apps.whiteCat;
        delete apps.aliveFish;

        newKeys = document.getElementById("keys");
        newKeys.style.display = "block";

        apps.keys.row = newRow;
        apps.keys.col = newCol;
        moveIcon("keys");

        keys.classList.remove("pop");

        void keys.offsetWidth;

        keys.classList.add("pop");
    };

    if (dragging.id == "whiteCat" && newCol == apps.aliveFish.col && newRow == apps.aliveFish.row) {
        console.log("cat found fish");

        let kitty;
        let fishy;

        kitty = document.getElementById("whiteCat");
        fishy = document.getElementById("aliveFish");

        kitty.remove();
        fishy.remove();

        delete apps.whiteCat;
        delete apps.aliveFish;

        newKeys = document.getElementById("keys");
        newKeys.style.display = "block";

        apps.keys.row = newRow;
        apps.keys.col = newCol;
        moveIcon("keys");

        keys.classList.remove("pop");

        void keys.offsetWidth;

        keys.classList.add("pop");
    };

    console.log("finished");

    dragging = null;
});

const mineROWS = 16;
const mineCOLS = 16;
let actualBombs = 0;
let board = [];

function revealZeros(row, col, tiles) {

    if (row < 0 || row >= mineROWS || col < 0 || col >= mineCOLS) {
        return 0;
    }

    const index = row * mineCOLS + col;
    const tile = tiles[index];

    // Already revealed
    if (tile.style.backgroundColor === "pink") {
        return 0;
    }

    // Bomb
    if (board[row][col] === -1) {
        return 0;
    }

    // Reveal tile
    tile.style.backgroundColor = "pink";
    tile.textContent = board[row][col];

    let revealed = 1;

    // Stop if this is a numbered tile
    if (board[row][col] !== 0) {
        return revealed;
    }

    // Spread to all neighbours
    for (let r = -1; r <= 1; r++) {
        for (let c = -1; c <= 1; c++) {

            if (r === 0 && c === 0) {
                continue;
            }

            revealed += revealZeros(
                row + r,
                col + c,
                tiles
            );
        }
    }

    return revealed;
};

function minesweeperBoard() {
    console.log("Building Minesweeper...");

    let gameStatus = true;
    let tilesRevealed = 0;

    board = [];
    actualBombs = 0;

    const list = document.getElementById("minesweeperContainer");

    list.innerHTML = "";

    for (let row = 0; row < mineROWS; row++) {
        let newRow = [];
        for (let col = 0; col < mineCOLS; col++) {
            newRow.push(0);

            let data_row = row;
            let data_col = col;

            const div = document.createElement("div");

            div.classList.add("minecell");

            div.addEventListener("click", function () {

                if (gameStatus === false) {
                    return;
                };

                console.log("its row is: " + data_row + " and its column is: " + data_col);
                console.log("The value of this tile is: " + (board[data_row][data_col]));

                if ((board[data_row][data_col]) === -1) {
                    console.log("BOOM!");
                    div.style.backgroundColor = 'red';
                    gameStatus = false;
                }
                else {
                    if (board[data_row][data_col] === 0) {

                        tilesRevealed += revealZeros(
                            data_row,
                            data_col,
                            tiles
                        );

                    } else {

                        if (div.style.backgroundColor !== 'pink') {
                            div.style.backgroundColor = 'pink';
                            div.textContent = board[data_row][data_col];

                            tilesRevealed++;
                        }
                    }

                    if (tilesRevealed === (mineROWS * mineCOLS - actualBombs)) {
                        gameStatus = false;
                        console.log("YOU WIN!");
                    }

                };
            });

            list.appendChild(div);
        }

        board.push(newRow);
    };

    const tiles = document.querySelectorAll(".minecell");

    const bombCount = 40;
    actualBombs = 0;

    while (actualBombs < bombCount) {

        let randomRow = Math.floor(Math.random() * 16);
        let randomCol = Math.floor(Math.random() * 16);

        if (board[randomRow][randomCol] === -1) {
            continue;
        }

        board[randomRow][randomCol] = -1;
        actualBombs++;
    };

    for (let row = 0; row < mineROWS; row++) {
        for (let col = 0; col < mineCOLS; col++) {
            let bombsFound = 0;
            if ((board[row][col]) === -1) {
                continue;
            } else {
                let neighbourRow = 0;
                let neighbourCol = 0;

                for (let r = -1; r <= 1; r++) {
                    for (let c = -1; c <= 1; c++) {
                        neighbourRow = row + r;
                        neighbourCol = col + c;

                        if (neighbourRow >= 0 && neighbourRow < 16 && neighbourCol >= 0 && neighbourCol < 16) {
                            if ((board[neighbourRow][neighbourCol]) === -1) {
                                bombsFound++;
                            };
                        };
                    }
                }
                (board[row][col]) = bombsFound;
            }
        }
    };

    console.log(board);
    console.log(actualBombs);
    console.log(tilesRevealed);
};


