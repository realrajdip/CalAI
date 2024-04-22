import React, { useRef, useEffect } from "react";

export default function PayPal() {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Nike Shoe",
                amount: {
                  currency_code: "CAD",
                  value: 1.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div className="h-full w-full flex justify-center align-center py-10">
      <div  ref={paypal}></div>
    </div>
  );
}