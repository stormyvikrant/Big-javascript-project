function selected(val){
    console.log(val)
    if(val==="UPI")
    {
        return `<div id="UPI">
            <form action="">
                <div>
                    <h4>UPI ID</h4>
                </div>
                <div>
                    <input type="text" placeholder="VPA/UPI Id (eg 9441689428@upi)" required>
                </div>
                <div>
                    <input type="submit" value="Pay Now" id="submit">
                </div>
            </form>
        </div> `;
    }
    else if (val == "Google Pay")
    {
        return ` <div id="googlePay">
            <form action="">
                <div>
                    <h4>Google Pay</h4>
                </div>
                <div>
                    <input type="text" placeholder="Enter Mobile Number/Gpay Id" required>
                </div>
                <div>
                    <input type="submit" value="Pay Now" id="submit">
                </div>
            </form>
        </div>`;


    }
    else if (val == "Credit/Debit Card") {
      return `<div id="credit">
          <form action="">
            <div>
              <h4>Credit/Debit Card</h4>
            </div>
            <div>
              <input type="text" placeholder="Enter Card Number" required/>
            </div>
            <div>
              <input type="date" placeholder="Expiry" />
            </div>
            <div>
              <input type="checkbox" style="width: 20px; height: 20px" /> save
              this card details
            </div>
            <div>
              <input type="submit" name="" value="Pay Now" id="submit" />
            </div>
          </form>
        </div>`;
    }
    else if(val=="Cash On Delivery")
    {
        return `<div id="cod">
            <form action="">
                <div>
                    <h4>Cash On Delivery</h4>
                </div>
                
                <div>
                    <input type="submit" value="Confirm Your Order" id="submit">
                </div>
            </form>
        </div>`;
    }
    else if(val=="Net Banking")
    {
        return `<div id="banks">
            <form action="">
                <div>
                    <h4>Net Banking</h4>
                </div>
                <div id="bank">
                  <div>
                    <img src="https://www.nykaaman.com/assets/mobile/icons/checkout/axis.png"></img>
                    <p>AXIS</p>

                  </div>
                  <div>
                     <img src="https://www.nykaaman.com/assets/mobile/icons/checkout/hdfc.png" alt="">
                     <p>HDFC</p>

                  </div>
                  <div>
                     <img src="https://www.nykaaman.com/assets/mobile/icons/checkout/icici.png" alt="">
                     <p>ICICI</p>

                  </div>
                  <div>
                     <img src="https://www.nykaaman.com/assets/mobile/icons/checkout/kotak.png" alt="">
                     <p>KOTAK</p>

                  </div>
                  <div>
                     <img src="https://www.nykaaman.com/assets/mobile/icons/checkout/sbi.png" alt="">
                     <p>SBI</p>

                  </div>
                  <div>
                     <img src="https://www.nykaaman.com/assets/mobile/icons/checkout/yes.png" alt="">
                     <p>YES</p>

                  </div>
                </div>
                <div>
                    <input  type="submit" value="Pay Now" id="submit">
                </div>
            </form>
        </div> `;
    }
      
}
export {selected}