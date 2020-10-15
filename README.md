# stock-dividends-tracker
The project aims to make a simple, yet useful, dashboard to easily track the performance of a dividends generating stock portfolio.
This project is in a very early stage and it is developed in my free time as an hobby, feel free to create issues to contribute, share ideas or just give some feedback, it will surely be very appreciated.

## Project setup
1. Run
```
npm install
```
2. Create a file config.js in the main directory with the API Key generated at https://www.alphavantage.co/support/#api-key. 
   This API is used to fetch the stock market data, it's free!
```javascript
//config.js

export default {
    alphaKey: '<API KEY>'
}
```
3. Create a file data.js in the main directory to store your stocks data in an object array using the following template:
```javascript
{
    sym: "BOH",         //Ticker symbol
    price: 53.86,       //Entry price
    shares: 9,          //Number of shares
    date: "2020-09-10"  //Entry date
}
```
```javascript
//data.js

export default [
    {
        sym: "BOH",
        price: 53.86,
        shares: 9,
        date: "2020-09-10"
    },
    {
        sym: "CVS",
        price: 56.66,
        shares: 8,
        date: "2020-09-03"
    }
]
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
