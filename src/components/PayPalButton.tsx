'use client'

import { PayPalButtons } from '@paypal/react-paypal-js'

interface PayPalButtonProps {
  amount: string
  description: string
  onSuccess?: () => void
}

export default function PayPalButton({ amount, description, onSuccess }: PayPalButtonProps) {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          intent: 'CAPTURE',
          purchase_units: [{
            amount: { value: amount, currency_code: 'USD' },
            description: description
          }]
        })
      }}
      onApprove={async (data, actions) => {
        if (actions.order) {
          await actions.order.capture()
          onSuccess?.()
        }
      }}
      style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal' }}
    />
  )
}
