# QUIZZES
Welcome to the project! This README file provides detailed information about the project, its features, installation instructions, and other relevant details.

## Introduction

This project is a **quiz application** built using 
- React, 
- Redux,(Redux-Toolkit), 
- Axios, 
- react-router-dom, 
- Sass and other additional libs

The application allows users to play quizzes, view their quiz results, and provides a responsive design that supports  mobile, tablet and desktop devices. The project is deployed on Vercel.

## Features

The application includes the following features:

### Page Navigation
The application consists of three pages:

- Home: This page displays a list of quizzes available to play. Each quiz item shows the quiz name, the number of questions in the quiz, and a play button.

- Play: When a user selects a quiz from the Home page, they are taken to the Play page. On this page, the user can answer the questions of the selected quiz.

- Finish: After answering the last question, the user is navigated to the Finish page. This page displays the user's quiz statistics, including the number of points obtained, the number of correct answers, and the time it took to complete the quiz. Additional statistical options are also available.

### Dynamic Quiz Generation
On application initialization, 10 quizzes are dynamically formed. 

**"I'm Lucky"** Button
- The Home page features a button labeled "I'm lucky." By pressing this button, the user can select a random quiz to play, adding an element of surprise and variety to the quiz experience.

### Quiz Interaction
While playing a quiz, the following interactions are supported:

- Cancel Quiz: Users can cancel a quiz and return to the Home page at any time while playing a quiz.

- Answer Validation: Users are not allowed to proceed to the next question until they choose an answer for the current question.

## Installation
To install the project and its dependencies, follow these steps:

- Clone the repository:

~~~ 
git clone <repository-url>
~~~

- Navigate to the project directory:
~~~
cd <project-directory>
~~~

- Install the dependencies:

~~~
npm install
~~~
### Usage
To start the development server and run the application, use the following command:

~~~
npm run dev
~~~


## Live website

You can view the live website at the following [LINK](https://quizzes-beryl.vercel.app/).

Please note that the website is deployed on the Vercel platform and may take a few moments to load initially. 




