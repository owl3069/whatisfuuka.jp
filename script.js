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

// 初回の質問を表示
document.addEventListener("DOMContentLoaded", () => {
    displayNextQuestion();
});

function displayNextQuestion() {
    if (questionIndex < questions.length) {
        document.getElementById("question-text").innerText = questions[questionIndex];
        document.getElementById("current-question").innerText = `${questionIndex + 1} / ${questions.length}`;
    } else {
        showHSPResult();
    }
}

function answerHSP(score) {
    hspScore += score;
    questionIndex++;

    if (questionIndex < questions.length) {
        displayNextQuestion();
    } else {
        showHSPResult();
    }
}

function showHSPResult() {
    document.getElementById("question-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";

    document.getElementById("hsp-score").innerText = `あなたの「はい」は ${hspScore} 個でした。`;

    let hspComment = "";
    let recommendedAroma = "";
    let productURL = "";

    if (hspScore >= 12) {
        hspComment = "あなたはHSPの気質があるようです。";
        
        // ランダムにHSP向けのアロマを選択
        const aromaKeys = Object.keys(aromaRecommendations);
        const randomIndex = Math.floor(Math.random() * aromaKeys.length);
        recommendedAroma = aromaKeys[randomIndex];
        productURL = aromaRecommendations[recommendedAroma];
    } else {
        hspComment = "あなたはHSP気質ではないかもしれませんが、毎日たまるストレスをクリアに。";
        recommendedAroma = "オランダ人気No.1 Clean Energy（クリーンエナジー）";
        productURL = "https://whatisfuuka.jp/products/er1";
    }

    document.getElementById("hsp-comment").innerText = hspComment;
    document.getElementById("recommended-aroma").innerText = recommendedAroma;
    document.getElementById("product-link").href = productURL;
}
