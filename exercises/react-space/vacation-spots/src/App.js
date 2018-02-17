import React from 'react';
import VacaTile from './VacaTile';

const vacationSpots = [{
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring",
    imgUrl: "https://images.unsplash.com/photo-1464086419240-388de55da36e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6fbc623d2b50f1b488b2c7535f34b1e&auto=format&fit=crop&w=1398&q=80"
}, {
    place: "Cancun",
    price: 900,
    timeToGo: "Winter",
    imgUrl: "https://images.unsplash.com/photo-1517070176314-60760a0f2d5e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88c63775e48a459889a5c1881eb01a88&auto=format&fit=crop&w=1351&q=80"
}, {
    place: "China",
    price: 1200,
    timeToGo: "Fall",
    imgUrl: "https://images.unsplash.com/photo-1517586783515-463aa9571631?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8cdbb35e8f6b2f69fa0fbc566dd79be&auto=format&fit=crop&w=634&q=80"
}, {
    place: "Russia",
    price: 1100,
    timeToGo: "Summer",
    imgUrl: "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4f1da55b3f9a230cd9af28b62fbd785&auto=format&fit=crop&w=634&q=80"
}, {
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring",
    imgUrl: "https://trvl.com/responsive-images/destination-images/r7DTgRIA6Iz3okMtg01UGVCwBOKQt4OlJuwMAn10.jpeg?w=&h="
}]

function App() {
    const mappedVacaSpots = vacationSpots.map((spot) => {
        let backColor = "";
        if (spot.timeToGo === "Spring") {
            backColor = 'lightgreen';
        } else if (spot.timeToGo === "Summer") {
            backColor = 'yellow';
        } else if (spot.timeToGo === "Winter") {
            backColor = 'lightblue';
        } else if (spot.timeToGo === "Fall") {
            backColor = 'orange';
        }

        let dollar = "";

        if (spot.price < 500) {
            dollar = "$";
        } else if (spot.price < 1000) {
            dollar = "$$";
        } else {
            dollar = "$$$";
        }

        return <VacaTile background={spot.imgUrl} backgroundColor={backColor} place={spot.place} price={dollar} timeToGo={spot.timeToGo}/>
    })
    return mappedVacaSpots;
}

export default App;
