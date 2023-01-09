function distanceFromHqInBlocks(someValue) {
    const calculatedDistance = Math.abs(someValue - 42);
    return calculatedDistance;
}

function distanceFromHqInFeet(someValue) {
    const calculatedBlocks = distanceFromHqInBlocks(someValue);

    const calculatedFeet = calculatedBlocks * 264;

    return calculatedFeet;
}

function distanceTravelledInFeet(start, destination) {
    const calculatedFeet = Math.abs((destination - start) * 264);

    return calculatedFeet;
}

function calculatesFarePrice(start, destination) {
    const calculatedFeet = distanceTravelledInFeet(start, destination);

    let calculatedFarePrice;

    if (calculatedFeet <= 400) {
        calculatedFarePrice = 0;
    } else if (calculatedFeet > 400 && calculatedFeet < 2000) {
        calculatedFarePrice = (calculatedFeet - 400) * .02;
    } else if (calculatedFeet > 2000 && calculatedFeet < 2501) {
        calculatedFarePrice = 25;
    } else if (calculatedFeet > 2500) {
        calculatedFarePrice = 'cannot travel that far';
    }

    return calculatedFarePrice;
}