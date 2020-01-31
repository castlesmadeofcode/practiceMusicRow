
const createFunkArtist = (name, genre, age) => ({
    "name": name,
    "genre": genre,
    "age": age
});


const createRapArtist = (name, genre, age) => ({
    "name": name,
    "genre": genre,
    "age": age
});


const createCountryArtist = (name, genre, age) => ({
    "name": name,
    "genre": genre,
    "age": age
});


const createBlueGrassArtist = (name, genre, age) => ({
    "name": name,
    "genre": genre,
    "age": age
});

const createPopArtist = (name, genre, age) => ({
    "name": name,
    "genre": genre,
    "age": age
});

jumpStopRecordsFunkAndRap = [
    createFunkArtist("Dre Funkz", "Funk", 25),
    createRapArtist("Dusta Grimes", "Rap", 21),
    createRapArtist("Loyoncé Branis", "Rap", 27)
];


chattenRecordsCountryAndBlueGrass = [
    createCountryArtist("Bruce Atikins", "Country", 23),  
    createCountryArtist("Bartholomew Danielson", "Bluegrass", 23),
    createCountryArtist("Avilee Dallas", "Country", 29)
];


polarRecordsPop = [
    createPopArtist("Jensen Brown", "Pop", 20),
    createPopArtist("Austin Kinkaid", "Pop", 22)
];

console.log(jumpStopRecordsFunkAndRap);
console.log(chattenRecordsCountryAndBlueGrass);
console.log(polarRecordsPop);
