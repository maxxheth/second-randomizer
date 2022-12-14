export const randomizeSecond = (second: number) => {
  if (second < 1000) {
    second = second * 1000;
  }

  const randomize = (array: Array<unknown>) =>
    Math.floor(array.length * Math.random());

  const nudgeVals = [100, 1000, 50, 500, 25, 250, 75, 750];

  const trueFalse = [true, false];

  const flipACoin = (sides: boolean[]) => sides[randomize(sides)];

  const chooseNudgeVal = (nudgeVals: number[]) =>
    nudgeVals[randomize(nudgeVals)];

  const randomizeByNudgeVal = (nudgeVals: number[]) =>
    Math.random() * chooseNudgeVal(nudgeVals);

  const newRandomNumber = flipACoin(trueFalse)
    ? randomizeByNudgeVal(nudgeVals)
    : -randomizeByNudgeVal(nudgeVals);

  return flipACoin(trueFalse)
    ? second + newRandomNumber
    : second - newRandomNumber;
};

export const getRandomizedSeconds = (qty: number) => {
  const secondsArray: number[] = [];

  for (let x = 1; x < qty + 1; x++) {
    const second = x * 1000;

    secondsArray.push(second);
  }

  return secondsArray.map((second) => randomizeSecond(second));
};

export const getRandomizedSecond = (qty: number) => {
  const randomizedSeconds = getRandomizedSeconds(qty);

  return randomizedSeconds[
    Math.floor(randomizedSeconds.length * Math.random())
  ];
};
