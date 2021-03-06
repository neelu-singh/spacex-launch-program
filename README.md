# Spacex Launch Program

A front-end application which would help users list and browse all launches by SpaceX program.

[App Link](https://spacex-launch-2021.herokuapp.com/)

## About Spacex Launch Program

Application is using spacex public API to pull its data.

Following libraries are used: 

- react
- react-dom
- redux
- react-router

Following libraries are used by the node.js server:
- express
- babel

Unit test cases are writen by using following libraries:
- jest
- enzyme

The application is deployed on **Heroku**

**Lighthouse Score**

![alt text](https://github.com/neelu-singh/spacex-launch-program/blob/main/light_house_score.jpg?raw=true)

## Note

- Fully responsive to covers all range of device
- Uses lazy loading to defer loading off-screen images which results in reduced initial page load time
- Uses infinite scrolling approach to render the launch list in multiple steps, resulting in reduced dom elements on initial page load
- Used best practises and performation optimizations, resulting in a high lighthouse score


To run the project on local machine use following commands:

### `npm run build`
### `npm start`


Use [http://localhost:5001](http://localhost:5001) to run the application in the localhost.
