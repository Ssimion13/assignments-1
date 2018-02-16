import React from 'react';
import VacaTile from './VacaTile';

const vacationSpots = [{
    place: "Meridian, Idaho",
    price: "$40",
    timeToGo: "Spring",
    imgUrl: ""
}, {
    place: "Cancun",
    price: "$900",
    timeToGo: "Winter",
    imgUrl: ""
}, {
    place: "China",
    price: "$1200",
    timeToGo: "Fall",
    imgUrl: ""
}, {
    place: "Russia",
    price: "$1100",
    timeToGo: "Summer",
    imgUrl: ""
}, {
    place: "Lebanon",
    price: "$400",
    timeToGo: "Spring",
    imgUrl: ""
}]

function App() {
    const mappedVacaSpots = vacationSpots.map((spot) => {
        return <VacaTile image={spot.imgUrl} place={spot.place} price={spot.price} timeToGo={spot.timeToGo}/>
    })
    return mappedVacaSpots;
}

export default App;
