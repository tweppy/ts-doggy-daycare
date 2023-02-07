import { Dog } from "./modules/interfaces.js";

getData();

async function getData() {
    const BASE_URL: string = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/doggy-daycare-api/dogs';
    const response = await fetch(BASE_URL);
    const data = await response.json();
    handleData(data);
}

function handleData(data: any[]): void {
    let dogs: {}[] = data.map(id => ({
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
    } as Dog));
    console.log('dog interface array', dogs);

    createElem(dogs);
}

function createElem(dogs: any[]): void {
    for (let i = 0; i < dogs.length; i++) {
        const wrapper = document.querySelector('.wrapper') as HTMLElement;
        const card = document.createElement('article') as HTMLElement;
        const doggyName = document.createElement('h2') as HTMLElement;
        const doggyInfo = document.createElement('ul') as HTMLElement;
        const doggyOwner = document.createElement('p') as HTMLElement;
        const doggyImg = document.createElement('img') as HTMLElement;
        const contactBtn = document.createElement('button') as HTMLElement;

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
            <li><span>chip #: </span>${dogs[i].chipNumber}</li>`
        doggyOwner.innerHTML = dogs[i].owner.name + ' ' + dogs[i].owner.lastName + ': ' + dogs[i].owner.phoneNumber;

        dogs[i].present === false ? card.classList.add('not-here') : null;

        sortDogs(card, contactBtn, doggyOwner);
    }
}

function sortDogs(card: HTMLElement, contactBtn: HTMLElement, doggyOwner: HTMLElement): void {
    const presentBtn = document.querySelector('.show-present') as HTMLElement;
    const allBtn = document.querySelector('.show-all') as HTMLElement;

    presentBtn.addEventListener('click', () => {
        if(card.classList.contains('not-here')) {
            card.style.display = "none"
        }
    })

    allBtn.addEventListener('click', () => {
        card.style.display = "block"
    })

    contactBtn.addEventListener('click', () => {
        doggyOwner.classList.toggle('show-owner');
    })
}

