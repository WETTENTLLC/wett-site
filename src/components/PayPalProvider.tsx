'use client'

import { PayPalScriptProvider } from '@paypal/react-paypal-js'

export default function PayPalProvider({ children }: { children: React.ReactNode }) {
  const clientId = 'AZ2bMj6Xao7XIjnX3e6DiVCRsZDduPleJQRNExQFoaxIO8S_8b3K0oAbii7O61rCm-tllymY72A1kTDg'

  return (
    <PayPalScriptProvider options={{ clientId, currency: 'USD' }}>
      {children}
    </PayPalScriptProvider>
  )
}
