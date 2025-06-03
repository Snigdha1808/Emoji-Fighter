let players = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let ringEl = document.getElementById("ring")
let fightButton = document.getElementById("fight-btn")

fightButton.addEventListener("click", function() {
    let p1 = Math.floor( Math.random() * players.length )
    let p2 = Math.floor( Math.random() * players.length )
    ringEl.textContent = players[p1] + " vs " + players[p2] 
    setTimeout(function(){
        let winner = p1>p2? players[p1]:p2>p1?players[p2]:"Draw";
        ringEl.textContent = `🏆 Winner: ${winner}`;
    }, 5000);
})
