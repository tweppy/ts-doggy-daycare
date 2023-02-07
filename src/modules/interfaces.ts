interface Customer {
    owner: {
        name: string;
        lastName: string;
        phoneNumber: string;
    }
}

//extends Customer/owner props to it
interface Dog extends Customer {
    name: string;
    age: number;
    sex: string;
    breed: string;
    chipNumber: string;
    present: boolean;
    img: string;
}

export { Dog }