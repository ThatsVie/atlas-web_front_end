const stock = {
    macbook: 2,
    iphone: 4
};

function processPayment(itemName) {
    stock[itemName.toLowerCase()] -= 1;
    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log('Payment is not being processed');
}

function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);
    itemName = itemName.toLowerCase();
    if (stock[itemName] !== undefined) {
        if (stock[itemName] > 0) {
            callbackPayment(itemName);
        } else {
            callbackError(itemName);
        }
    } else {
        console.log(`Item ${itemName} is not available in our stock`);
    }
}

const item = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");

processOrder(item, processPayment, processError);