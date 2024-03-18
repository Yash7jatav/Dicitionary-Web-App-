let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const btn = document.querySelector(".searchBtn");
const result = document.querySelector("#result");
const sound = document.querySelector(".sound");


const soundPlay = () => {
    sound.play();
}

const getMeaning = async () => {

        try{

        let inpWord = document.querySelector(".searchInput").value;

        let response = await fetch(`${url}${inpWord}`);
    
        let data = await response.json();
    
        result.innerHTML = ` 
    
        <div class="word">   
        <h3>${inpWord}</h3>
        <button class="soundBtn" onclick = "soundPlay()">
        <i class="fa-solid fa-volume-high"></i>
        </button>
        </div>
    
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>/${data[0].phonetic}/</p>
        </div>
    
        <p class="wordMeaning">
            ${data[0].meanings[0].definitions[0].definition}
        </p>
    
        <p class="wordEg">
            ${data[0].meanings[0].definitions[0].example || ""}
        </p> `
    
        sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
    
        }catch(err){
            result.innerHTML = `<h3 class="error">Could not find the word</h3>`
        }
}

btn.addEventListener("click", getMeaning);
    
