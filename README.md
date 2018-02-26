# Workout-Timer

My version of Workout Timer for Cross trening. Icludes: The Benchmark Girls WOD's.

## Getting Started
Project use local database from db.json.

## Prerequisites
If you want to run my project all you have to do is install *webpack* and *jsonserver*. Webpack configuration is already included in my project (take a look to *webpack.config.js*). 

Installing Webpack:

`npm install --save-dev webpack`

then use my webpack.config.js and from the command line, run the following command:

`webpack-dev-server`

Installing json server:

`$ npm install -g json-server`

when it is installed, from the command line, run the following command:

`$ json-server --watch db.json`

now if you go to: http://localhost:3000/workouts you'll get workouts array. For exaple:

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

### Project preview:

![alt text](https://raw.githubusercontent.com/marasmadwa/Workout-Timer/master/images/WorkoutTimerLayout.jpg)
