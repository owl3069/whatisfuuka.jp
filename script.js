let hspScore = 0;
let questionIndex = 0;

const questions = [
    "自分をとりまく環境の微妙な変化によく気づくほうだ",
    "他人の気分に左右される",
    "痛みにとても敏感である",
    "忙しい日々が続くと、ベッドや暗い部屋などプライバシーが得られ、刺激から逃れられる場所にひきこもりたくなる",
    "カフェインに敏感に反応する",
    "明るい光や、強い匂い、ざらざらした布地、サイレンの音などに圧倒されやすい",
    "豊かな想像力を持ち、空想に耽りやすい",
    "騒音に悩まされやすい",
    "美術や音楽に深く心動かされる",
    "とても良心的である",
    "すぐにびっくりする（仰天する）",
    "短期間にたくさんのことをしなければならない時、混乱してしまう",
    "人が何かで不快な思いをしている時、どうすれば快適になるかすぐに気づく",
    "一度にたくさんのことを頼まれるのがイヤだ",
    "ミスをしたり物を忘れたりしないよういつも気をつけている",
    "暴力的な映画やテレビ番組は見ないようにしている",
    "あまりにもたくさんのことが自分の周りで起こっていると、不快になり神経が高ぶる",
    "空腹になると、集中できないとか気分が悪くなるといった強い反応が起こる",
    "生活に変化があると混乱する",
    "デリケートな香りや味、音、音楽などを好む",
    "動揺するような状況を避けることを、普段の生活で最優先している",
    "仕事をする時、競争させられたり、観察されていると、緊張し、いつもの実力を発揮できなくなる",
    "子供のころ、親や教師は自分のことを「敏感だ」とか「内気だ」と思っていた"
];

let hspScore = 0;
let questionIndex = 0;

function answerHSP(score) {
    hspScore += score;
    questionIndex++;

    if (questionIndex < questions.length) {
        document.getElementById("current-question").innerText = questionIndex + 1;
        document.getElementById("question-text").innerText = questions[questionIndex];
    } else {
        showHSPResult();
    }
}

function showHSPResult() {
    document.getElementById("question-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";

    document.getElementById("hsp-score").innerText = `チェックした数: ${hspScore} / 23`;

    let hspComment = "";
    let recommendedAroma = "";
    let productURL = "";

    if (hspScore >= 12) {
        hspComment = "あなたはHSP傾向が強いようです。繊細な感覚を大切にしてください。";
        recommendedAroma = "Grounding（土台）";
        productURL = "https://whatisfuuka.jp/products/hs3";
    } else {
        hspComment = "HSP気質はそれほど強くないかもしれません。ただし、敏感な部分もあるかもしれません。";
        recommendedAroma = "Cleansing（浄化）";
        productURL = "https://whatisfuuka.jp/products/hs1";
    }

    document.getElementById("hsp-comment").innerText = hspComment;
    document.getElementById("recommended-aroma").innerText = recommendedAroma;
    document.getElementById("product-link").href = productURL;
}


function answerHSP(score) {
    hspScore += score;
    questionIndex++;

    if (questionIndex < questions.length) {
        document.getElementById("hsp-diagnosis").innerHTML = `
            <p>質問${questionIndex + 1}: ${questions[questionIndex]}</p>
            <button onclick="answerHSP(1)">はい</button>
            <button onclick="answerHSP(0)">いいえ</button>
        `;
    } else {
        showAromaRecommendation();
    }
}

function showAromaRecommendation() {
    document.getElementById("hsp-diagnosis").style.display = "none";
    document.getElementById("aroma-result").style.display = "block";

    let aroma = "";
    let productURL = "";

    if (hspScore <= 1) {
        aroma = "Protection（防御）";
        productURL = "https://whatisfuuka.jp/products/hs2";
    } else if (hspScore == 2) {
        aroma = "Cleansing（浄化）";
        productURL = "https://whatisfuuka.jp/products/hs1";
    } else {
        aroma = "Grounding（土台）";
        productURL = "https://whatisfuuka.jp/products/hs3";
    }

    document.getElementById("result-text").innerText = `あなたにおすすめのアロマ: ${aroma}`;
    document.getElementById("product-link").href = productURL;
}
