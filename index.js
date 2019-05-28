var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = 'sid';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'taco girl'
}