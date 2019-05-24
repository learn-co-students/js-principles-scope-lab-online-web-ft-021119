// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(string) {
  bestCustomer = string;
}

const leastFavoriteCustomer = "pat";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "sam";
}
