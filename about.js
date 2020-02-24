setTimeout(replaceWords, 4000);

function replaceWords() {
    let text = document.querySelector(".content")
    text.innerHTML = text.innerHTML.replace(/ the /g, " replaced ");
    text.innerHTML = text.innerHTML.replace(/The /g, "Replaced ");
};