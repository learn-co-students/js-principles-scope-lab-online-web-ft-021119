
var customerName = 'bob'

function customerName() {
  return customerName
}

function upperCaseCustomerName() {
  customerName =  customerName.toUpperCase()
  return customerName
}

function setBestCustomer() {
  bestCustomer = 'not bob'
  return bestCustomer
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'friend of bob'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'trump'
}
