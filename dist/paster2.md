
    let dogs = data.map(dog => {
        return <Dog>
        {
            name: dog.name,
            age: dog.age,
            sex: dog.sex,
            breed: dog.breed,
            chipNumber: dog.chipNumber,
            present: dog.present,
            img: dog.img,
            owner: dog.age
        };
    });

    console.log('dog interface array', dogs);




        //turning ownerList into customerS = interface array
    let customers = ownerList.map(owner => {
        return <Customer>
        {
            name7: owner.name,
            lastName: owner.lastName,
            phoneNumber: owner.phoneNumber,
        };
    });

    console.log('customer interface array', customers);










let ownerList = data.map(dog => dog.owner);

        //turning ownerList into customerS = interface array
    // let customers: {}[] = ownerList.map(owner => ({
    //         name7: owner.name,
    //         lastName: owner.lastName,
    //         phoneNumber: owner.phoneNumber,
    //     } as Customer));

    // console.log('customer interface array', customers);











         <li><span>owner: </span>${dogs[i].owner.name7 + ' ' + dogs[i].owner.lastName}<p><span>phone: </span>${dogs[i].owner.phoneNumber}</p></li>`;

         let ownerName = dogs[i].owner.name7 + ' ' + dogs[i].owner.lastName;

         doggyOwner.innerHTML = `<span id="cli">contact:</span>` + ownerName;

         
        
         toggle showing phone number when click owner name
         
         doggyOwner.addEventListener('click', () => {
             if(doggyOwner.innerHTML.includes(ownerName)) {
                 doggyOwner.innerHTML = `<span id="cli">contact:</span>` + dogs[i].owner.phoneNumber
             } else {
                 doggyOwner.innerHTML = `<span id="cli">contact:</span>` + ownerName;
             }
         })