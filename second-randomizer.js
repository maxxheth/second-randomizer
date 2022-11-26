"use strict";
const secondRandomizer = (second) => {
    if (second < 1000) {
        second = second * 1000;
    }
    const randomize = (array) => Math.floor(array.length * Math.random());
    const randomNumber = Math.random();
    const nudgeVals = [100, 1000, 50, 500, 25, 250, 75, 750];
    const trueFalse = [true, false];
    const flipACoin = (sides) => sides[randomize(sides)];
    const chooseNudgeVal = (nudgeVals) => nudgeVals[randomize(nudgeVals)];
    const randomizeByNudgeVal = (nudgeVals) => Math.random() * chooseNudgeVal(nudgeVals);
    const newRandomNumber = flipACoin(trueFalse)
        ? randomizeByNudgeVal(nudgeVals)
        : -randomizeByNudgeVal(nudgeVals);
    console.log({ second, newRandomNumber });
    return flipACoin(trueFalse)
        ? second + newRandomNumber
        : second - newRandomNumber;
};
const seconds = secondRandomizer(3000);
const createRandomizedSeconds = (qty) => {
    const secondsArray = [];
    for (let x = 1; x < qty + 1; x++) {
        const decision = x * 1000;
        secondsArray.push(decision);
    }
    return secondsArray.map((second) => secondRandomizer(second));
};
const result = createRandomizedSeconds(20);
console.log({ result });
const getRandomizedSecond = (qty) => {
    const randomizedSeconds = createRandomizedSeconds(qty);
    return randomizedSeconds[Math.floor(randomizedSeconds.length * Math.random())];
};
const randomSecond = getRandomizedSecond(20);
console.log({ randomSecond });
