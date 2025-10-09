'use client'

import { useState } from 'react'

export default function PayWhatYouWantBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="bg-gradient-to-r from-wett-gold to-yellow-500 text-black py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <span className="font-bold">💛 Pay What You Want Philosophy:</span>
          <span className="ml-2">All courses, classes, and memberships use pay-what-you-want pricing. Those who pay more help those who pay less. We Thrive Together.</span>
        </div>
        <button onClick={() => setDismissed(true)} className="ml-4 hover:opacity-70">✕</button>
      </div>
    </div>
  )
}
