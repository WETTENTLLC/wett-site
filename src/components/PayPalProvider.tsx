'use client'

import { PayPalScriptProvider } from '@paypal/react-paypal-js'

export default function PayPalProvider({ children }: { children: React.ReactNode }) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ''

  return (
    <PayPalScriptProvider options={{ clientId, currency: 'USD' }}>
      {children}
    </PayPalScriptProvider>
  )
}
