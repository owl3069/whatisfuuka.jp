let hspScore = 0;
let questionIndex = 0;

const questions = [
    "人混みが苦手ですか？",
    "大きな音や明るい光が気になりますか？",
    "人の気持ちを敏感に察しますか？"
];

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
