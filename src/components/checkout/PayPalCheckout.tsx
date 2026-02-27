"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface PayPalCheckoutProps {
  packageId: string;
  onSuccess: (orderId: string) => void;
  onError: (error: unknown) => void;
}

export default function PayPalCheckout({
  packageId,
  onSuccess,
  onError,
}: PayPalCheckoutProps) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!clientId || clientId === "your_paypal_client_id_here") {
    return (
      <div className="rounded-2xl border border-border bg-card-alt p-6 text-center">
        <p className="text-muted">
          PayPal checkout will be available once configured. Please call us to
          purchase packages.
        </p>
      </div>
    );
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId,
        currency: "USD",
        intent: "capture",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical", shape: "pill", color: "gold" }}
        createOrder={async () => {
          const res = await fetch("/api/paypal/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ packageId }),
          });
          const data = await res.json();
          if (data.error) throw new Error(data.error);
          return data.id;
        }}
        onApprove={async (data) => {
          const res = await fetch("/api/paypal/capture-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderID: data.orderID }),
          });
          const details = await res.json();
          if (details.error) throw new Error(details.error);
          onSuccess(details.id);
        }}
        onError={(err) => onError(err)}
      />
    </PayPalScriptProvider>
  );
}
