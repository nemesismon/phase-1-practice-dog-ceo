document.addEventListener('DOMEventLoaded', function () {

});

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => {
        // console.log(data.message);
        renderDogs(data);        
    });

function renderDogs(dogs) {
    // console.log(dogs.message.length);
    for (i = 0; i < dogs.message.length; i++) {
        let p = document.createElement('img');
        p.src = `${dogs.message[i]}`;
        document.querySelector('div').appendChild(p);
    };
}

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(breedData => {
        // console.log(data);
        dogBreeds(breedData);
    });

function dogBreeds(breeds) {
    // console.log(Object.keys(breeds.message));
    Object.keys(breeds.message).forEach(breed => {
        // console.log(breed);
        li = document.createElement('li');
        li.innerText = `${breed}`;
        // li.classList.add(`${breed}`);
        // li.setAttribute('type', button);
        li.type = 'button';
        li.setAttribute('id', `${breed}`);
        const tempArr = breed.split('');

        li.setAttribute('tag', tempArr[0]);
        li.addEventListener('click', (e) => {
                e.target.style.color = 'red';          
        });
        
        document.querySelector('ul').appendChild(li);

        breedFilter(breed);
    });
};

function breedFilter(breed) {
    // console.log(breed);
    let dogBreeds = document.getElementById(breed);
    let dogTag = dogBreeds.getAttribute('tag');
    
    let dropDown = document.querySelectorAll('option');
    // console.log(dropDown[0].value);
    dropDown.forEach.value(element => {
    
    console.log(element);
    if (dogTag !== element) {
        
                let options = document.createElement('option');
                options.value = dogTag;
                options.innerText = dogTag;
                document.querySelector('select').appendChild(options);
    };
    })
};