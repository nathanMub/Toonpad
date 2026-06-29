import React, { useEffect, useRef } from 'react';

export default function PayPalButton({ price, productName }) {
  const paypal = useRef();

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{ description: productName, amount: { value: price } }]
        });
      },
      onApprove: async (data, actions) => {
        await actions.order.capture();
        alert('Transaction successful!');
      }
    }).render(paypal.current);
  }, [price, productName]);

  return <div ref={paypal} className="mt-4"></div>;
}
