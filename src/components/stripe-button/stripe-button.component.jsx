import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hod9dDMfYWvLGIeuYQbu6G6IfTIVWft3yDPcjWoB5WBpg5OuuE3tDn28hGoQ3rsBCIyShB6bJxO1BGrcErzB1VC000faqyJwR';
    const onToken = token => {
        console.log(token);
        alert('PAYMENT SUCCESSFUL');
    }

    return (
        <StripCheckout 
            label='PAY NOW'
            name='CRWN CLOTHING LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='PAY NOW'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripCheckoutButton;