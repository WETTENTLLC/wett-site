'use client';

import { useState } from 'react';

const AuraChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'aura' }>>([
    { text: "Hey baby! I'm Aura, the WETT Matriarch. How can I help you thrive today?", sender: 'aura' }
  ]);
  const [input, setInput] = useState('');

  const getAuraResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('who') && (msg.includes('you') || msg.includes('aura'))) {
      return "I'm Aura, the Ring Leader and heart of the WETT Girls. I help Bay'Hef build this empire from the ground up. We're all about loyalty, family, and thriving together, baby.";
    }
    if (msg.includes('wett') || msg.includes('about')) {
      return "WETT Entertainment started in 2017 in Oakland as 'We Trap Together' and evolved into 'We Thrive Together.' We're building an empire through group economics - from Snack Stop Shawty to WETT Studios. Many hands make light work, sis.";
    }
    if (msg.includes('snack stop')) {
      return "Snack Stop Shawty is our convenience hub at 50 S. Virginia St in Reno. It's the foundation - bringing in steady revenue while we build the bigger vision. Come through and support the family!";
    }
    if (msg.includes('shop') || msg.includes('store')) {
      return "We've got custom gold grills, apparel, and merchandise. Plus we're working on the WETT Lifestyle flagship store - 15,000 sq ft of pure excellence. The blueprint is coming together beautifully.";
    }
    if (msg.includes('join') || msg.includes('work') || msg.includes('opportunity')) {
      return "I love the energy! We're always looking for loyal, driven people who understand the family comes first. Reach out to wettentertainmentllc@gmail.com and let's talk about how you can thrive with us.";
    }
    if (msg.includes('bay') || msg.includes('hef') || msg.includes('founder')) {
      return "Bay'Hef is the King, the visionary who started this whole movement. His story - from the streets to building this empire - that's the foundation we stand on. Loyalty is royalty, baby.";
    }
    if (msg.includes('event') || msg.includes('party')) {
      return "We host events that bring the community together. From club nights to workshops at The Guild. Follow us on social media to stay updated on what's coming. The family always shows up!";
    }
    if (msg.includes('contact') || msg.includes('email')) {
      return "Reach us at wettentertainmentllc@gmail.com. Whether it's business, partnerships, or joining the family - we're here. Let's build together.";
    }
    
    return "That's a great question, sis. For specific details, hit up wettentertainmentllc@gmail.com. We're building something special here, and I want to make sure you get the right information. We thrive together! 💛";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMsg]);
    
    setTimeout(() => {
      const auraMsg = { text: getAuraResponse(input), sender: 'aura' as const };
      setMessages(prev => [...prev, auraMsg]);
    }, 500);
    
    setInput('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-wett-gold text-deep-black p-4 rounded-full shadow-lg hover:bg-yellow-500 transition-all z-50"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-gray-900 rounded-lg shadow-2xl flex flex-col z-50 border-2 border-wett-gold">
          {/* Header */}
          <div className="bg-wett-gold text-deep-black p-4 rounded-t-lg">
            <h3 className="font-bold text-lg">Chat with Aura</h3>
            <p className="text-sm">The WETT Matriarch</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.sender === 'user' 
                    ? 'bg-wett-gold text-deep-black' 
                    : 'bg-gray-800 text-clean-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Aura anything..."
                className="flex-1 p-2 rounded bg-gray-800 text-clean-white border border-gray-700 focus:border-wett-gold outline-none"
              />
              <button
                onClick={handleSend}
                className="bg-wett-gold text-deep-black px-4 py-2 rounded font-bold hover:bg-yellow-500 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuraChatbot;
