var button = document.querySelector("#btn")
var textInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output");

var ServerURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(inputtext) {
    return ServerURL + "?" + "text=" + inputtext;
}

function errorHandler(error) {
    console.log("Error Occurred: ", error)
    alert("Something went wrong! Please try again in some time.");
}
button.addEventListener("click", function clickEventHandler() {
    var InputText = textInput.value;

    if(InputText=="")
    {
        alert("Please insert some English text first");
    }

    fetch(getTranslationURL(InputText))
       .then(response => response.json())
       .then(json => {
            var translatedtxt = json.contents.translated;
            outputDiv.innerText = translatedtxt;
    })
    .catch(errorHandler);
});