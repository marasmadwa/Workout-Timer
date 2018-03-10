# Workout-Timer

My version of Workout Timer for Cross training. Includes: The Benchmark Girls WOD's.

## Getting Started
Project use local data from db.json.

## Prerequisites
If you want to run my project all you have to do is install *webpack* and *jsonserver*. Webpack configuration is already included in my project (take a look to *webpack.config.js*). 

Installing Webpack:

`npm install --save-dev webpack`

`npm i`

then use my webpack.config.js and from the command line, to run webpack use the following command:

`npm run dev`

Installing json server:

`$ npm install -g json-server`

when it is installed, from the command line, run the following command:

`$ json-server --watch db.json`

now if you go to: http://localhost:3000/workouts you'll get workouts array. For example:

`{
    "id": 1,
    "name": "Angie",
    "exercises": [
      "100 Pull-ups",
      "100 Push-ups",
      "100 Sit-ups",
      "100 Squats"
    ],
    "descritpion": "For time: Complete all reps of each exercise before moving to the next."
  },`

Now you are ready to go and test my app :)

###Try by yourself !

[WorkoutTimer](http://52.214.72.216:3001/)

### Project preview:

![alt text](https://raw.githubusercontent.com/marasmadwa/Workout-Timer/master/images/WorkoutTimerLayout.jpg)
