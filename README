# Second Randomizer

---

This package contains a few utility functions that allow you to take a second and humanize it a bit.

For example:

`import { randomizeSecond } from "./second-randomizer.js";`

`const randomizedSecond = randomizeSecond(1);`

`console.log({ randomizedSecond });`

`// { randomizedSecond: 975.730082482701 });`

So, in essence, randomizeSecond simply takes 1 second or 10 seconds and either shaves a few milliseconds or nanoseconds off the top or tops it off.

If you want to take things a step further, then you might find getRandomizedSeconds useful.

`const randomizedSeconds = getRandomizedSeconds(20);`

`console.log({ randomizedSeconds });`

`{`
`   randomizedSeconds: [`
`   674.9023335706249, 1739.8147307171562,`
`   2966.3398933132066,  3931.638644553672,`
`   4927.24486384487,  6000.514162584786,`
`   6974.802265200363,  8039.973875741117,`
`   8991.489275703583,  9976.640062397237,`
`   10985.187679168035, 12490.107286345026,`
`   13093.68498379735, 13644.737910288986,`
`   15058.262001511224, 16003.260647495856,`
`   16993.810075548383, 18021.916929155155,`
`   18584.34425820884,  19925.51333804717`
`]`
`}`

As you can observe, you simply enter the number of seconds that you want to randomize, and getRandomizeSeconds will iterate from 1 to said number of seconds and randomize each second.

In a similar fashion to randomizeSecond, getRandomizedSecond will pluck a second at random from an array of seconds generated and randomized by getRandomizedSeconds.

`const randomlyChosenSecond = getRandomizedSecond(20);`

`console.log({ randomlyChosenSecond });`

`{ randomlyChosenSecond: 11067.731749511813 };`

## Installation

NPM: `npm install second-randomizer`

Yarn: `yarn add second-randomizer`

---

Enjoy! If you have any suggestions or changes, just submit an issue or a pull request!
