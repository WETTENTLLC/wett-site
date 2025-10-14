'use client'

import { useState } from 'react'
import PayPalButton from './PayPalButton'

interface TicketButtonProps {
  price: number
  title: string
  description: string
  onSuccess?: () => void
}

export default function TicketButton({ price, title, description, onSuccess }: TicketButtonProps) {
  const [showPayment, setShowPayment] = useState(false)

  const handleSuccess = () => {
    onSuccess?.()
    setShowPayment(false)
  }

  return (
    <div>
      {!showPayment ? (
        <button 
          onClick={() => setShowPayment(true)} 
          className="w-full bg-wett-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
        >
          Buy Ticket - ${price}
        </button>
      ) : (
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-bold">${price}</span>
            <button onClick={() => setShowPayment(false)} className="text-gray-400 hover:text-white">✕</button>
          </div>
          <PayPalButton 
            amount={price.toString()}
            description={description}
            onSuccess={handleSuccess}
          />
        </div>
      )}
    </div>
  )
}
