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

        document.querySelector('ul').appendChild(li);
    })
}

