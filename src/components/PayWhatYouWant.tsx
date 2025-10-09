'use client'

import { useState } from 'react'
import PayPalButton from './PayPalButton'

interface PayWhatYouWantProps {
  title: string
  description: string
  suggestedAmounts: number[]
  minAmount?: number
  onSuccess?: () => void
}

export default function PayWhatYouWant({ 
  title, 
  description, 
  suggestedAmounts, 
  minAmount = 1,
  onSuccess 
}: PayWhatYouWantProps) {
  const [amount, setAmount] = useState('')
  const [showPayment, setShowPayment] = useState(false)

  const handleSuccess = () => {
    onSuccess?.()
    setShowPayment(false)
    setAmount('')
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg border-2 border-wett-gold">
      <h3 className="text-2xl font-bold text-wett-gold mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      
      {!showPayment ? (
        <button 
          onClick={() => setShowPayment(true)} 
          className="w-full bg-wett-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
        >
          Pay What You Want
        </button>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-bold">Choose Your Amount</span>
            <button onClick={() => setShowPayment(false)} className="text-gray-400 hover:text-white">✕</button>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            {suggestedAmounts.map(amt => (
              <button 
                key={amt}
                onClick={() => setAmount(amt.toString())} 
                className="bg-gray-700 hover:bg-gray-600 text-white py-3 rounded font-bold"
              >
                ${amt}
              </button>
            ))}
          </div>
          
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
            placeholder={`Min $${minAmount} or any amount`}
            className="w-full bg-gray-700 text-white p-3 rounded mb-4"
            min={minAmount}
          />
          
          {amount && parseFloat(amount) >= minAmount && (
            <PayPalButton 
              amount={amount}
              description={title}
              onSuccess={handleSuccess}
            />
          )}
        </div>
      )}
    </div>
  )
}
