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
        console.log('Creating order:', { amount, description })
        return actions.order.create({
          intent: 'CAPTURE',
          purchase_units: [{
            amount: { value: amount, currency_code: 'USD' },
            description: description
          }]
        })
      }}
      onApprove={async (data, actions) => {
        try {
          if (actions.order) {
            const details = await actions.order.capture()
            console.log('Payment successful:', {
              orderId: data.orderID,
              payerId: data.payerID,
              amount: amount,
              description: description,
              details: details
            })
            onSuccess?.()
          }
        } catch (error) {
          console.error('Payment capture error:', error)
          alert('Payment processing failed. Please try again or contact support.')
        }
      }}
      onError={(err) => {
        console.error('PayPal error:', err)
        alert('Payment error occurred. Please try again.')
      }}
      onCancel={() => {
        console.log('Payment cancelled by user')
      }}
      style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal' }}
    />
  )
}
