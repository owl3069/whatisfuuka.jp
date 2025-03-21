let hspScore = 0;
let questionIndex = 0;
let selectedAromas = [];

const questions = [
    { text: "自分をとりまく環境の微妙な変化によく気づくほうだ", aroma: "Grounding（土台）", url: "https://whatisfuuka.jp/products/hs3" },
    { text: "他人の気分に左右される", aroma: "Protection（防御）", url: "https://whatisfuuka.jp/products/hs2" },
    { text: "痛みにとても敏感である", aroma: "Pull in（避難所）", url: "https://whatisfuuka.jp/products/hs7" },
    { text: "忙しい日々が続くと、プライバシーが得られる場所にひきこもりたくなる", aroma: "Pull in（避難所）", url: "https://whatisfuuka.jp/products/hs7" },
    { text: "カフェインに敏感に反応する", aroma: "Clean Energy（クリーンエナジー）", url: "https://whatisfuuka.jp/products/ce1" },
    { text: "明るい光や強い匂い、ざらざらした布地、サイレンの音などに圧倒されやすい", aroma: "Closure（解放）", url: "https://whatisfuuka.jp/products/hs9" },
    { text: "豊かな想像力を持ち、空想に耽りやすい", aroma: "Me I am（自分自身）", url: "https://whatisfuuka.jp/products/hs6" },
    { text: "騒音に悩まされやすい", aroma: "Pull in（避難所）", url: "https://whatisfuuka.jp/products/hs7" },
    { text: "美術や音楽に深く心動かされる", aroma: "Self Love（自愛）", url: "https://whatisfuuka.jp/products/hs4" },
    { text: "とても良心的である", aroma: "Self Love（自愛）", url: "https://whatisfuuka.jp/products/hs4" },
    { text: "すぐにびっくりする（仰天する）", aroma: "Pull in（避難所）", url: "https://whatisfuuka.jp/products/hs7" },
    { text: "短期間にたくさんのことをしなければならない時、混乱してしまう", aroma: "Mission（ミッション）", url: "https://whatisfuuka.jp/products/hs8" },
    { text: "人が何かで不快な思いをしている時、どうすれば快適になるかすぐに気づく", aroma: "Speak（言葉を紡ぎ出す）", url: "https://whatisfuuka.jp/products/hs5" },
    { text: "一度にたくさんのことを頼まれるのがイヤだ", aroma: "Me I am（自分自身）", url: "https://whatisfuuka.jp/products/hs6" },
    { text: "ミスをしたり物を忘れたりしないよういつも気をつけている", aroma: "Mission（ミッション）", url: "https://whatisfuuka.jp/products/hs8" },
    { text: "暴力的な映画やテレビ番組は見ないようにしている", aroma: "Protection（防御）", url: "https://whatisfuuka.jp/products/hs2" },
    { text: "あまりにもたくさんのことが自分の周りで起こっていると、不快になり神経が高ぶる", aroma: "Grounding（土台）", url: "https://whatisfuuka.jp/products/hs3" },
    { text: "空腹になると、集中できないとか気分が悪くなるといった強い反応が起こる", aroma: "Clean Energy（クリーンエナジー）", url: "https://whatisfuuka.jp/products/ce1" },
    { text: "生活に変化があると混乱する", aroma: "Grounding（土台）", url: "https://whatisfuuka.jp/products/hs3" },
    { text: "デリケートな香りや味、音、音楽などを好む", aroma: "Self Love（自愛）", url: "https://whatisfuuka.jp/products/hs4" },
    { text: "動揺するような状況を避けることを、普段の生活で最優先している", aroma: "Pull in（避難所）", url: "https://whatisfuuka.jp/products/hs7" },
    { text: "仕事をする時、競争させられたり、観察されていると、緊張し、いつもの実力を発揮できなくなる", aroma: "Mission（ミッション）", url: "https://whatisfuuka.jp/products/hs8" },
    { text: "子供のころ、親や教師は自分のことを「敏感だ」とか「内気だ」と思っていた", aroma: "Self Love（自愛）", url: "https://whatisfuuka.jp/products/hs4" }
];

// 初回の質問表示
function displayNextQuestion() {
    if (questionIndex < questions.length) {
        document.getElementById("current-question").innerText = questionIndex + 1;
        document.getElementById("question-text").innerText = questions[questionIndex].text;
    }
}

function answerHSP(score) {
    if (score === 1) {
        selectedAromas.push(questions[questionIndex]);
    }
    hspScore += score;
    questionIndex++;

    if (questionIndex < questions.length) {
        displayNextQuestion();
    } else {
        showAromaRecommendation();
    }
}

function showAromaRecommendation() {
    document.getElementById("question-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";

    let resultMessage = `あなたの「はい」の数は **${hspScore} 個** でした。`;
    let hspComment = hspScore >= 12 
        ? "エレイン・N・アーロン博士によると、あなたはHSPの気質があるようです。" 
        : "HSP気質はそれほど強くないかもしれません。";

    let recommendedAroma = "Relaxation（リラックス）";
    let productURL = "https://whatisfuuka.jp/products/er1";

    if (hspScore >= 12 && selectedAromas.length > 0) {
        let randomAroma = selectedAromas[Math.floor(Math.random() * selectedAromas.length)];
        recommendedAroma = randomAroma.aroma;
        productURL = randomAroma.url;
    }

    document.getElementById("hsp-score").innerText = resultMessage;
    document.getElementById("hsp-comment").innerText = hspComment;
    document.getElementById("recommended-aroma").innerText = recommendedAroma;
    document.getElementById("product-link").href = productURL;
}

// **ページ読み込み時に最初の質問を表示**
document.addEventListener("DOMContentLoaded", displayNextQuestion);
