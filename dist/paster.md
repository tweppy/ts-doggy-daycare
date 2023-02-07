//doggy daycare


const BASE_URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/doggy-daycare-api/dogs';
getData();


async function getData() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    // console.log('data from api', data);
    handleData(data);
}

function handleData(data) {
    console.log('data', data);


    // data.forEach(element => {
        
    // let custa: Customer =  {
    //     name7: data.map(x => x.owner.name),
    //     lastName: data.map(x => x.owner.lastName),
    //     phoneNumber: data.map(x => x.owner.phoneNumber)
    // }
    // });

    // let full = data.map(x => x.owner);
    // console.log('full', full);
    
    // let custo: Customer =  {
    //     name7: data.map(x => x.owner.name),
    //     lastName: data.map(x => x.owner.lastName),
    //     phoneNumber: data.map(x => x.owner.phoneNumber)
    // }

    // data.map(x => x.owner);
    // console.log('custo',custo);
    for(let i = 0; i < data.length; i++) {
        let cust: Customer = {
            name7: data[i].owner.name,
            lastName: data[i].owner.lastName,
            phoneNumber: data[i].owner.phoneNumber
        }
        // console.log(cust);
        

        let fname = data[i].owner.name;
        let lname = data[i].owner.lastName;
        let num = data[i].owner.phoneNumber;

        const clist: Customer[] = []

        // clist.push({name7: fname, lastName: lname, phoneNumber: num})
        // console.log(clist)

        // clist.push(cust)
        // console.log('mylist',clist)
    }


    //customer array
    let full = data.map(x => x.owner);
    console.log('full', full);

    // let la: Customer = {
    //     name7: full.name,
    //     lastName: full.lastName,
    //     phoneNumber: full.phoneNumber
    // }

    // console.log(la)

    let newman = full.map(xx => {

        return <Customer>
        {
            name7: xx.name,
            lastName: xx.lastName,
            phoneNumber: xx.phoneNumber,
        };
    
    });

    console.log('*', newman)
}




interface Dog {
    name: string;
    age: number;
    sex: string;
    breed: string;
    chipNumber: string;
    present: boolean;
    img: string; //check scrimba project for how to do this
    owner: Customer;
}

// interface Customer extends Array<data>{}
interface Customer {
    name7: string;
    lastName: string;
    phoneNumber: string;
}



// let dealers : [ 
//     {
//         "name" : "BMW Dealer",
//         "country" : "Belgium",
//         "code" : "123"
//     },
//         {
//         "name" : "Audi Dealer",
//         "country" : "France",
//         "code" : "124"
//     },
//         {
//         "name" : "VW Dealer",
//         "country" : "Germany",
//         "code" : "125"
//     }
// ]


// interface IDealer {
//     dealerName: string;
//     dealerCode: string;
//     dealerCountry: string
// }

// let countryDealers: IDealer;



// let newman = dealers.map(xx => {

//     return <IDealer>
//     {
//          dealerName : xx.name,
//          dealerCode : xx.code,
//          dealerCountry : xx.country
//     };

//   });

//   console.log(newman)