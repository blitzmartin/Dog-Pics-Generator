const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');

fetch(BREEDS_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);


        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    })

select.addEventListener("change", function (event) {
    const breedName = event.target.value;
    let url = `https://dog.ceo/api/breed/${breedName}/images/random`
    getDoggo(url);
    const breedCapitalized = breedName.charAt(0).toUpperCase() + breedName.slice(1);
    document.querySelector('.breed-name').innerText = "This dog is a specimen of " + breedCapitalized + ".";
});



const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

function getDoggo(url) {
    spinner.classList.add("show");
    img.classList.remove("show");
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            img.src = data.message;
            spinner.classList.remove("show");
            img.classList.add("show");
        })
}