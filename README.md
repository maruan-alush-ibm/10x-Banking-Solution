# 10x Banking Solution

My solution to the tech problem given by 10x Banking.

## How to run the website locally

1.  Use `cd` to get into the 10x-banking folder
2.  Run `npm i` to install all necessary node_modules
3.  Run `npm run start` to start up the website locally

## Testing

I have created both unit tests (react-testing-library) and e2e tests (cypress). This allows for a well versed and balanced set of tests that cover almost all of the website and its features.

To run the unit test you can use:

- `npm run test` to simply run the unit tests
- `npm run test:coverage` to see coverage of the unit tests
- `npm run test:cypress` to run the cypress test suite (NOTE: You will need to have the website running locally for the cypress tests)

As of submitting this repo, all unit & cypress tests pass!

## Technologies used

I have used the following technologies in this repo:

- Typescript
- CRA for creating the base of the app
- MaterialUI for the CCS framework and styled-components for CSS-in-JS
- React hooks
- React-router-dom for navigation around the website
- Formik for making forms more easily
- Yup for schema validation when submitting forms
- Axios for API calls to the mock BE (reqres)
- Atomic design structure for my component library

## Mobile responsiveness

This website was build to be mobile responsive and rearrange itself when being viewed on a mobile phone. You can test this by going into the Chrome dev tools and selecting the small mobile phone icon on the top right.

All of the content will be shifted in a column pattern to fit the device's screen.

## Any issues

If you have any issues running this repo, please contact me at 21maruan@gmail.com and I will be more than happy to help!

## Thank you

Thank you for taking the time out to go through my code and tests and I hope it is to the standard that you are looking for.
