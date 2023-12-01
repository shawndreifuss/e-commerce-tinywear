import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("sk_test_51OCV4QCQg4jIgzVLmIXR1EHzyC683Sq3PFcYPir1dTubCZa9Gh72p07JztTuNc3RG4cFasNLBTQ9htQmXEXFbkD400VuGlJwX9");

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("{{EDUCATIVE_LIVE_VM_URL}}/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{}] }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}