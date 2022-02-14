import React from "react";
import StripeCheckout from "react-stripe-checkout";
import './stripe-button.styles.scss'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KRzh2H9le7SqerKaDbk3O61wxSSlV9T1LGYXhKoMMHLTaGECocT6R4oLIfVxSDgVzh8BQv1w90Z3Uh9gD99hZ1H00Zw9SdQVE'

    const onToken = token => {
        console.log(token)
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd"
            billingAddress
            shippingAddress
            description={`Your Total Price is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;