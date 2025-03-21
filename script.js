let score_p = document.getElementById("score_p")
let main_click_btn = document.getElementById("main_click_btn")
let main_click_level_up_btn = document.getElementById("main_click_level_up_btn")
let level_p = document.getElementById("level_p")
let price_level_up_p = document.getElementById("price_level_up_p")
let save_btn_h = document.getElementById("save_btn_h")
let load_save_btn_h = document.getElementById("load_save_btn_h")
let auto_clicker_btn_h = document.getElementById("auto_clicker_btn_h")
let auto_clicker_on_off_on = document.getElementById("auto_clicker_on_off_on")
let result_save = document.getElementById("result_save")
let level_auto_p = document.getElementById("level_auto_p")
let price_level_clicker_p = document.getElementById("price_level_clicker_p")

let game_state = {
    score: 0,
    auto_click_level: 1,
    main_click_level: 1,
    price: 100,
    auto_clicker: 1000,
    clicker_level: 1,
    price_level_clicker: 500
}


function main_click() {
    game_state.score += game_state.main_click_level

    score_p.innerText = "score:" + game_state.score
}
function level_up() {

    if (game_state.score > game_state.price) {
        alert("you buy level")
        game_state.score -= game_state.price;
        game_state.price += 100
        game_state.main_click_level++
        level_p.innerText = "level:" + game_state.main_click_level;
        price_level_up_p.innerText = "price level:" + game_state.price
        score_p.innerText = "score:" + game_state.score

    } else {
        alert("you can't buy  a level")
    }

}
function save_btn() {
    let json = JSON.stringify(game_state)
    result_save.innerText = (json)
}
function load_save_h() {
    let jsonString = prompt(`paste save`)
    game_state = JSON.parse(jsonString);
    pujhnjr()
    if (auto() != 1) {
        auto("#button", 1000 / game_state.auto_clicker)
    }

}
function pujhnjr() {
    level_p.innerText = "level:" + game_state.main_click_level;
    price_level_up_p.innerText = "price level:" + game_state.price
    score_p.innerText = "score:" + game_state.score
}
function auto() {

    if (game_state.auto_clicker < game_state.score) {
        setInterval(main_click, 1000);

    }
    else {
        alert("don`t buy")
    }

}
function level_btn_clicker() {
    if (game_state.score > game_state.price_level_clicker) {
        
        alert("you buy level")
        game_state.auto_clicker -= game_state.score;
        game_state.price_level_clicker += 500
        level_auto_p.innerText = "level clicker:" + game_state.clicker_level
        setInterval(main_click,10000)
    }
    else {
        alert("dont` buy level")
    }


}

save_btn_h.onclick = save_btn;
load_save_btn_h.onclick = load_save_h;
main_click_btn.onclick = main_click
main_click_level_up_btn.onclick = level_up