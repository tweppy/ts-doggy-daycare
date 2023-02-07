var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
getData();
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const BASE_URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/doggy-daycare-api/dogs';
        const response = yield fetch(BASE_URL);
        const data = yield response.json();
        handleData(data);
    });
}
function handleData(data) {
    let dogs = data.map(id => ({
        name: id.name,
        age: id.age,
        sex: id.sex,
        breed: id.breed,
        chipNumber: id.chipNumber,
        present: id.present,
        img: id.img,
        owner: {
            name: id.owner.name,
            lastName: id.owner.lastName,
            phoneNumber: id.owner.phoneNumber
        }
    }));
    console.log('dog interface array', dogs);
    createElem(dogs);
}
function createElem(dogs) {
    for (let i = 0; i < dogs.length; i++) {
        const wrapper = document.querySelector('.wrapper');
        const card = document.createElement('article');
        const doggyName = document.createElement('h2');
        const doggyInfo = document.createElement('ul');
        const doggyOwner = document.createElement('p');
        const doggyImg = document.createElement('img');
        const contactBtn = document.createElement('button');
        wrapper.appendChild(card);
        card.appendChild(doggyImg);
        card.appendChild(doggyName);
        card.appendChild(doggyInfo);
        card.appendChild(contactBtn);
        card.appendChild(doggyOwner);
        doggyOwner.id = 'owner-text';
        contactBtn.innerText = 'Contact';
        doggyImg.setAttribute('src', dogs[i].img);
        doggyOwner.classList.add('show-owner');
        doggyName.innerText = dogs[i].name;
        doggyInfo.innerHTML =
            `<li><span>age: </span> ${dogs[i].age}</li>
            <li><span>sex: </span>${dogs[i].sex}</li>
            <li><span>breed: </span>${dogs[i].breed}</li>
            <li><span>chip #: </span>${dogs[i].chipNumber}</li>`;
        doggyOwner.innerHTML = dogs[i].owner.name + ' ' + dogs[i].owner.lastName + ': ' + dogs[i].owner.phoneNumber;
        dogs[i].present === false ? card.classList.add('not-here') : null;
        sortDogs(card, contactBtn, doggyOwner);
    }
}
function sortDogs(card, contactBtn, doggyOwner) {
    const presentBtn = document.querySelector('.show-present');
    const allBtn = document.querySelector('.show-all');
    presentBtn.addEventListener('click', () => {
        if (card.classList.contains('not-here')) {
            card.style.display = "none";
        }
    });
    allBtn.addEventListener('click', () => {
        card.style.display = "block";
    });
    contactBtn.addEventListener('click', () => {
        doggyOwner.classList.toggle('show-owner');
    });
}
export {};
