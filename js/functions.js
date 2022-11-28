/* define your functions here */
let shipThreshold = 0;
let taxRate = 0;
let sub = 0;


function outputCartRow(item, total) {
    let output = 
    `
    <tr>
        <td><img src="${"images/" + item.filename}"></td>
        <td>${item.title}</td>
        <td>${(total/item.price)}</td>
        <td>\$${item.price.toFixed(2)}</td>
        <td>\$${total.toFixed(2)}</td>
    </tr>
    `;
    document.write(output);
}

function calculateTotal(quantity, price) {
    return quantity*price;
}

function outputCartRows() {
    sub = 0;
    for(x =0;x<cart.length;x++){
        total = calculateTotal(parseInt(cart[x].quantity), cart[x].product.price);
        outputCartRow(cart[x].product, calculateTotal(parseInt(cart[x].quantity), cart[x].product.price));
        sub += total;
    }
    console.log(sub);
}

function printTotals(){
    let ship = sub>=shipThreshold ? 0:40;
    let tax = (sub*taxRate/100);
    console.log(ship);
    let totals = 
    `
    <tr class="totals">
        <td colspan="4" class="focus">Subtotal</td>
        <td class="focus">$${sub.toFixed(2)}</td>
    </tr>
    <tr class="totals">
        <td colspan="4" class="focus">Tax</td>
        <td class="focus">$${tax.toFixed(2)}</td>
    </tr>
        <tr class="totals">
        <td colspan="4" class="focus">Shipping</td>
        <td class="focus">$${ship.toFixed(2)}</td>
    </tr>
    <tr class="totals">
        <td colspan="4" class="focus">Grand Total</td>
        <td class="focus">$${(sub + tax + ship).toFixed(2)}</td>
    </tr>
    `;
    document.write(totals);
}






        
