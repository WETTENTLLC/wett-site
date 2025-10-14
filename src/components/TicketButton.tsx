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
  const [quantity, setQuantity] = useState(1)

  const handleSuccess = () => {
    onSuccess?.()
    setShowPayment(false)
    setQuantity(1)
  }

  const totalPrice = price * quantity

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
            <span className="text-white font-bold">Quantity</span>
            <button onClick={() => setShowPayment(false)} className="text-gray-400 hover:text-white">✕</button>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))} 
              className="bg-gray-600 text-white px-4 py-2 rounded font-bold hover:bg-gray-500"
            >
              -
            </button>
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 bg-gray-600 text-white text-center p-2 rounded font-bold"
              min="1"
            />
            <button 
              onClick={() => setQuantity(quantity + 1)} 
              className="bg-gray-600 text-white px-4 py-2 rounded font-bold hover:bg-gray-500"
            >
              +
            </button>
            <span className="text-white font-bold ml-auto">${totalPrice}</span>
          </div>
          <PayPalButton 
            amount={totalPrice.toString()}
            description={`${description} (x${quantity})`}
            onSuccess={handleSuccess}
          />
        </div>
      )}
    </div>
  )
}
