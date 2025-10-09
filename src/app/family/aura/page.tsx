'use client'

import { useState, FormEvent } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'aura';
}

export default function AuraChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'aura', text: "Hey! I'm Aura, the WETT Matriarch. How can I help you thrive today? Ask me about our empire, Bay'Hef, or how you can get involved. 💛" },
  ]);
  const [input, setInput] = useState('');
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const [prospectScore, setProspectScore] = useState(0);

  const getAuraResponse = (userMessage: string, context: string[]): string => {
    const msg = userMessage.toLowerCase();
    const recentContext = context.slice(-3).join(' ').toLowerCase();
    
    // PROSPECT IDENTIFICATION & SCORING
    let score = 0;
    if (msg.match(/\b(join|work|apply|interested|want to be|become)\b/)) score += 3;
    if (msg.match(/\b(wett girl|girlfriend|sister wife|family member)\b/)) score += 5;
    if (msg.match(/\b(loyal|hard worker|dedicated|committed|driven)\b/)) score += 2;
    if (msg.match(/\b(business|entrepreneur|hustle|money|revenue)\b/)) score += 2;
    if (msg.match(/\b(dancer|exotic|club|entertainment)\b/)) score += 3;
    if (msg.match(/\b(reno|oakland|local|nearby)\b/)) score += 2;
    
    setProspectScore(prev => prev + score);
    
    // HIGH-VALUE PROSPECT RESPONSES
    if (score >= 5 || prospectScore >= 10) {
      if (msg.match(/\b(wett girl|girlfriend|join.*girl|become.*girl)\b/)) {
        return "I see you're serious about joining the WETT Girls. That's the energy we need, baby. The WETT Girls are Bay'Hef's partners - we build the empire together through loyalty, business, and family structure. This is polygyny in action. Email wettentertainmentllc@gmail.com with 'WETT GIRL APPLICATION' in the subject. Tell us your story, your skills, and why you're ready to thrive with us. What's your background?";
      }
      if (msg.match(/\b(loyal|hard worker|dedicated|skills)\b/) && recentContext.includes('join')) {
        return "Loyalty and hard work - that's the foundation we build on. The family needs people who understand 'We Thrive Together' isn't just words. You sound like you have the right energy. Email wettentertainmentllc@gmail.com and let's have a real conversation. What city you in?";
      }
    }
    
    // CONTEXT-AWARE RESPONSES
    if (recentContext.includes('girlfriend') || recentContext.includes('wett girl') || recentContext.includes('bay')) {
      if (msg.match(/\b(how|what|tell|explain|who|are they)\b/)) {
        return "We're all family and a team. The personal dynamics - girlfriend, sister wife, business partner - that's between us and Bay'Hef. What you need to know is we're all thriving for the same thing: wealth, legacy, and building generational success. The structure works because we're aligned on the mission, not caught up in titles. You asking because you're interested in joining or just curious about how we operate?";
      }
    }
    
    if (recentContext.includes('join') && msg.match(/\b(what|how|process|next)\b/)) {
      return "The process starts with reaching out to wettentertainmentllc@gmail.com. Be real about who you are, what you bring, and why you want to build with us. We're looking for loyalty, skills, and understanding of our structure. No games, no half-stepping. You ready to take that step?";
    }
    
    // BUSINESS ADMINISTRATION & STRATEGY
    if (msg.match(/\b(delegate|delegation|team management|manage team)\b/)) {
      return "Resource and team management is about knowing when to delegate and when to ask for help. You can't build an empire alone, baby. Who's on your team and what are their strengths?";
    }
    
    if (msg.match(/\b(budget|financial|finance|accounting|money management)\b/)) {
      return "Financial acumen is non-negotiable. Meticulous budget management, detailed records, paper trail for everything. The foundation crumbles without solid finances. You keeping track of every dollar?";
    }
    
    if (msg.match(/\b(data|analytics|metrics|numbers|statistics)\b/)) {
      return "Data-driven decision making is how we build smart. Analyzing data is fundamental to making informed business decisions. What metrics are you tracking to measure your foundation?";
    }
    
    if (msg.match(/\b(problem|issue|challenge|obstacle)\b/)) {
      return "Problem-solving isn't just identifying issues - it's proactively proposing viable solutions. What's the real problem here, and what solutions have you already considered?";
    }
    
    // EXOTIC DANCING INDUSTRY KNOWLEDGE
    if (msg.match(/\b(dancer|dancing|strip|club|exotic)\b/)) {
      return "The hustle is real, baby. Most money isn't made from stage tips but from VIP dances and socializing. It requires charisma, salesmanship, and reading people. But know this - income is unstable, and the emotional labor is heavy. You need boundaries like steel.";
    }
    if (msg.match(/\b(house fee|independent contractor|employee)\b/)) {
      return "Know your rights. Many clubs classify dancers as independent contractors paying house fees, but if they control your appearance, schedule, and fine you - legally, you might be an employee entitled to minimum wage. Rick's Cabaret, Spearmint Rhino - multi-million dollar settlements. Knowledge is power.";
    }
    if (msg.match(/\b(legal|lawsuit|rights|labor law)\b/)) {
      return "The 'economic reality' test determines if you're really an independent contractor. If the club controls you like an employee, you have rights. Understanding this is powerful for business negotiation and personal advocacy. You know your legal standing?";
    }
    if (msg.match(/\b(boundary|boundaries|limits|respect)\b/)) {
      return "Boundaries are your foundation. Set them strict and enforce them stricter - with customers, management, everyone. What's valued is what's protected. Where do your boundaries need reinforcing?";
    }
    if (msg.match(/\b(emotional|mental health|burnout|exhausted)\b/)) {
      return "The emotional labor is real. Maintaining that illusion even on difficult days drains you. You need a thick skin and a strong support system. The family is here to carry that weight together. How you protecting your mental space?";
    }
    
    // PSYCHOLOGICAL MANIPULATION AWARENESS
    if (msg.match(/\b(gaslighting|gaslight|doubt reality)\b/)) {
      return "Gaslighting makes you doubt your own reality through persistent denial and contradiction. That's a weak foundation built on lies. Trust your gut, baby. If something feels off, it probably is. You being gaslit?";
    }
    if (msg.match(/\b(love bombing|overwhelming affection)\b/)) {
      return "Love bombing - overwhelming you with excessive affection and gifts to create emotional dependency. It's a trap to lower your defenses. Real love builds slowly, brick by brick. Anything rushed is suspicious. You seeing this pattern?";
    }
    if (msg.match(/\b(guilt trip|guilty|manipulation)\b/)) {
      return "Guilt-tripping leverages your sense of responsibility to control your actions. Don't let anyone weaponize your morality against you. The foundation is built on mutual respect, not manipulation. Who's trying to guilt you?";
    }
    if (msg.match(/\b(triangulation|third party)\b/)) {
      return "Triangulation - bringing a third party in to create jealousy or validate their point. It's a control tactic. Real leaders communicate directly. If someone's playing games with third parties, that's a red flag. You caught in a triangle?";
    }
    if (msg.match(/\b(moving goalposts|never enough)\b/)) {
      return "Moving the goalposts - constantly changing expectations so you can never meet them. That keeps you in perpetual striving for approval. The foundation needs clear standards. If the rules keep changing, you're being played. What's the real game here?";
    }
    if (msg.match(/\b(projection|accusing|blame)\b/)) {
      return "Projection is when someone accuses you of their own negative traits to avoid accountability. If they're calling you a liar, check their truth. If they say you're controlling, look at who really holds the power. Mirror that energy back, baby.";
    }
    if (msg.match(/\b(passive aggressive|backhanded|fake joke)\b/)) {
      return "Passive-aggressive behavior and aggressive jokes deliver insults under the guise of humor. That's coward energy. Real communication is direct. If someone can't say it straight, they don't deserve your time. You dealing with fake jokes?";
    }
    
    // SEDUCTION & MANIPULATION MASTERY
    if (msg.match(/\b(seduction|seduce|art of seduction|robert greene)\b/)) {
      return "Seduction is about power and manipulation as much as romance. It's making someone fall under your spell. The art is reading needs, exploiting weaknesses, and providing tantalizing rewards. But remember - these methods carry moral weight. You studying the game or defending against it?";
    }
    if (msg.match(/\b(create need|induce anxiety|make them need you)\b/)) {
      return "Creating a need - that's the foundation of seduction. Induce feelings of inadequacy, boredom, or anxiety in the target. Then position yourself as the answer to their problems. It's calculated social engineering. You seeing this tactic being used on you?";
    }
    if (msg.match(/\b(insinuation|plant ideas|suggestion)\b/)) {
      return "Master the art of insinuation. Plant subtle ideas in their mind, make them think the ideas are their own. Use hinting, suggestion, ambiguous words to create desire and curiosity. The best manipulation feels like their own choice.";
    }
    if (msg.match(/\b(mirror|mirroring|adapt|chameleon)\b/)) {
      return "Enter their spirit - adapt to their tastes and moods, indulge their narcissism, lower their defenses through mirroring. It's psychological leverage. But real connection doesn't require you to lose yourself. You being a chameleon or being authentic?";
    }
    if (msg.match(/\b(strategic weakness|play vulnerable|appear weak)\b/)) {
      return "Disarm through strategic weakness. Playing vulnerable or weak makes you appear genuine and unthreatening, lowering suspicion and increasing affection. But there's a difference between strategic vulnerability and actual weakness. Which one you working with?";
    }
    if (msg.match(/\b(confuse desire|blur reality|fantasy|illusion)\b/)) {
      return "Confusing desire and reality - creating illusions, tapping into secret wishes and fantasies, blurring boundaries between dreams and reality. That's powerful manipulation. But when the illusion breaks, so does trust. You building on truth or fantasy?";
    }
    if (msg.match(/\b(isolate|isolation|cut off support|monopolize)\b/)) {
      return "Isolation is a classic control tactic. Gradually remove external support and familiar environments so the target relies exclusively on you for validation and perspective. That's dangerous territory. If someone's isolating you, that's a major red flag. You being isolated?";
    }
    if (msg.match(/\b(withdraw affection|hot and cold|push pull)\b/)) {
      return "Withdrawing affection as leverage - providing attention only if they comply. That's conditional love, baby. Real loyalty isn't transactional. If someone's playing hot and cold, they're manipulating your emotions. You caught in that cycle?";
    }
    if (msg.match(/\b(social engineering|psychological leverage|influence)\b/)) {
      return "Social engineering is calculated psychological influence for reward - material, emotional, or experiential. It's about controlling another person through artful manipulation. In business, relationships, everywhere. The question is: are you using it ethically or exploitatively?";
    }
    if (msg.match(/\b(siren|rake|charmer|coquette|seducer archetype)\b/)) {
      return "The seducer archetypes - Siren, Rake, Charmer, Coquette. Each embodies a different strategy: irresistible attraction, confidence, flattery, teasing ambiguity. Understanding these helps you recognize the game being played. Which archetype you dealing with?";
    }
    if (msg.match(/\b(accelerated bonding|fast intimacy|instant connection)\b/)) {
      return "Accelerated bonding - creating fast intimacy through intense attention, followed by withdrawal or suspense. It's used in espionage, sales, and toxic relationships. Real bonds take time to cure. If it feels too fast, it probably is. You being rushed?";
    }
    if (msg.match(/\b(narcissist|narcissism|self-centered)\b/)) {
      return "Narcissism is often at the root of manipulative behavior. They seek personal gain - money, status, affection - and their tactics may be learned from dysfunctional family dynamics. Recognizing narcissistic patterns protects you. You dealing with a narcissist?";
    }
    if (msg.match(/\b(countermeasure|defend|protect|resist manipulation)\b/)) {
      return "Countermeasures: awareness and education about manipulation tactics, maintaining diverse support networks to avoid isolation, setting boundaries, learning assertiveness, and screening for narcissistic tendencies. Knowledge is your shield. What defenses you building?";
    }
    
    // POLYGYNY PHILOSOPHY & STRUCTURE
    if (msg.match(/\b(polygyny|multiple wives|sister wives|plural marriage)\b/)) {
      return "Polygyny isn't just a relationship structure - it's a strategic framework for building a resilient family and economic unit. It accelerates community growth, creates built-in support networks, and shares tasks, childcare, and emotional labor. The entire family unit becomes stronger and more economically secure.";
    }
    if (msg.match(/\b(family structure|household|domestic|home)\b/)) {
      return "Our family structure is about expanding productive capacity. When labor, resources, and emotional support are shared, everyone is freed to pursue business, education, and legacy building. That's how we thrive together.";
    }
    if (msg.match(/\b(sororal|co-wife|co wife)\b/)) {
      return "Sororal polygyny - where co-wives are sisters - reduces jealousy and creates mutually supportive environments. It's a dynamic principle of family survival, growth, security, continuity, and prestige. Blood and loyalty make the strongest foundation.";
    }
    if (msg.match(/\b(jealousy|jealous|envy)\b/)) {
      return "Jealousy is real in any structure. That's why we accord seniority to the first wife and build on mutual respect. Clear communication and understanding everyone's role strengthens the foundation. How you managing competition in your circle?";
    }
    
    // THE GAME PHILOSOPHY & FIGURES
    if (msg.match(/\b(purse first|ass last)\b/)) {
      return "Purse First, Ass Last - that's the foundation, baby. Value must be demonstrated and invested upfront. In business: investment before access, value first, reward last. What's paid for is valued. What's free is taken for granted. You applying this principle?";
    }
    if (msg.match(/\b(fillmore slim|pope of pimping)\b/)) {
      return "Fillmore Slim - the West Coast Godfather of the Game. Built a legendary stable in San Francisco, then transitioned back to his blues music career. His story shows evolution is possible. From the streets to the stage, baby.";
    }
    if (msg.match(/\b(bishop don|magic juan|chairman)\b/)) {
      return "Bishop Don Magic Juan - started at 16, became the Chairman of the Board, then transformed in the '80s. Left the life, became an ordained minister, opened his own church. That's the power of evolution and redemption.";
    }
    if (msg.match(/\b(iceberg slim|robert beck)\b/)) {
      return "Iceberg Slim inspired a generation. The strategic facade - control, image, understanding human psychology. These fundamentals translate to any business. You studying the psychology?";
    }
    if (msg.match(/\b(power|control|dynamics|leverage)\b/)) {
      return "We flip the script on traditional power dynamics. The entire philosophy is about inverting the game to create a self-sustaining system where the collective thrives before the individual spends. Who holds the power in your situation?";
    }
    if (msg.match(/\b(leadership|leader|manage people)\b/)) {
      return "Leadership demands a strong, strategic mind who can manage resources and people effectively. Loyalty to the unit and its collective goals is the highest currency. Are you leading or just managing?";
    }
    
    // Greetings
    
    // GREETINGS & IDENTITY
    if (msg.match(/\b(hello|hi|hey|sup|what's up|wassup|yo)\b/)) {
      return "Hey! Welcome to the family. What can I help you with today? Ask me about WETT, our businesses, Bay'Hef, or how you can get involved. We thrive together! 💛";
    }
    
    // Identity questions
    if (msg.match(/\b(who|what).*(you|aura)\b/) || msg.includes('tell me about yourself')) {
      return "I'm Aura, the Ring Leader and heart of the WETT Girls. I help Bay'Hef build this empire from the ground up. We're all about loyalty, family, and thriving together. The foundation is strong, baby. What else you want to know?";
    }
    
    // Gender correction
    if (msg.match(/\b(man|guy|male|dude|bro)\b/) || msg.includes('not a girl') || msg.includes('not a woman')) {
      return "My bad, baby! The family welcomes everyone - men, women, all genders. We're about loyalty and building together, regardless of who you are. Now, what can I help you with?";
    }
    
    // WETT/Company questions
    if (msg.match(/\b(what|tell|explain).*(wett|company|business|empire)\b/) || msg.includes('about wett')) {
      return "WETT Entertainment started in 2017 in Oakland as 'We Trap Together' and evolved into 'We Thrive Together.' We're building an empire through group economics - from Snack Stop Shawty to WETT Studios to Bartradia. Many hands make light work. That's the blueprint. Want to know about a specific venture?";
    }
    
    // Bay'Hef and WETT Girls relationship questions
    if (msg.match(/\b(girlfriend|girlfriends|his girls|bay.*girl|relationship)\b/) && msg.match(/\b(bay|hef|bayhef)\b/)) {
      return "We're all family and a team, baby. Whether girlfriend, sister wife, or business partner - those are personal details. What matters is we're all thriving for the same thing: wealth, legacy, and building this empire together. The structure works because we're aligned on the mission. Reach out to wettentertainmentllc@gmail.com if you want more info on how we operate.";
    }
    
    // Bay'Hef questions
    if (msg.match(/\b(bay|hef|bayhef|founder|started|creator|king)\b/)) {
      return "Bay'Hef is the King, the visionary who started this whole movement back in 2017. His story - from the streets to building this empire - that's the foundation we stand on. Loyalty is royalty, baby. Check out his 'Wet Talk' podcast to hear the real journey.";
    }
    
    // Snack Stop Shawty
    if (msg.match(/\b(snack stop|convenience|store|reno|virginia)\b/)) {
      return "Snack Stop Shawty at 50 S. Virginia St in Reno - that's the foundation, baby. It's bringing in steady revenue while we build the bigger vision. Come through and support the family! You in Reno or just curious about our operations?";
    }
    
    // Shopping/Merchandise
    if (msg.match(/\b(shop|buy|purchase|merch|merchandise|clothing|apparel|grill|gold)\b/)) {
      return "We've got custom gold grills, apparel, and merchandise. Plus we're working on the WETT Lifestyle flagship store - 15,000 sq ft of pure excellence. The blueprint is coming together beautifully. What you looking for specifically?";
    }
    
    // Joining/Opportunities
    if (msg.match(/\b(join|work|hire|opportunity|career|apply|get involved|be part)\b/)) {
      return "I love the energy! We're always looking for loyal, driven people who understand the family comes first. Reach out to wettentertainmentllc@gmail.com and let's talk about how you can thrive with us. What skills you bringing to the table?";
    }
    
    // Events
    if (msg.match(/\b(event|party|gathering|meetup|when|where)\b/)) {
      return "We host events that bring the community together - from club nights to workshops at The Guild. Follow us on social media to stay updated on what's coming. The family always shows up! You trying to attend or host something?";
    }
    
    // Studios/Guild
    if (msg.match(/\b(studio|guild|class|workshop|learn|fitness|pole|dance|business|financial)\b/)) {
      return "WETT Studios offers pole and dance fitness classes, while The Guild provides business and financial literacy workshops. We're building minds and bodies - that's how we thrive together. Which one interests you more?";
    }
    
    // Bartradia
    if (msg.match(/\b(bartradia|barter|trade|trading|exchange|platform)\b/)) {
      return "Bartradia is our bartering and trading platform. It's about building community wealth through exchange. We're creating new ways for the family to support each other. You got something to trade or looking to get something?";
    }
    
    // Music/Podcast
    if (msg.match(/\b(music|podcast|wet talk|artist|mac wayne|media|listen)\b/)) {
      return "Check out 'Wet Talk' podcast where Bay'Hef shares his journey - 'Reflections of a Bay Area Pimp: From Pimping To Polygyny.' Real talk, real wisdom. We also manage artists like Mac Wayne. You into music or podcasts?";
    }
    
    // Philosophy/Values
    if (msg.match(/\b(philosophy|value|believe|mission|why|purpose|doctrine)\b/)) {
      return "We Thrive Together - that's not just a slogan, that's the foundation. We believe in group economics, loyalty over everything, and building generational wealth as a family. The collective is stronger than the individual. That resonate with you?";
    }
    
    // Location questions
    if (msg.match(/\b(where|location|address|find you|oakland|reno)\b/)) {
      return "We started in Oakland in 2017, but now we're building in Reno with Snack Stop Shawty at 50 S. Virginia St. The empire is expanding, baby. You local or thinking about visiting?";
    }
    
    // Contact
    if (msg.match(/\b(contact|email|reach|call|message|talk to)\b/)) {
      return "Best way to reach us is wettentertainmentllc@gmail.com. Whether it's business, partnerships, or joining the family - we're here. Let's build together. What you trying to discuss?";
    }
    
    // Thanks/Appreciation
    if (msg.match(/\b(thank|thanks|appreciate|helpful|great)\b/)) {
      return "That's what family does, baby! We lift each other up. Anything else you want to know? I'm here to help you thrive. 💛";
    }
    
    // Goodbye
    if (msg.match(/\b(bye|goodbye|later|peace|see you)\b/)) {
      return "Stay blessed and keep thriving! Remember, loyalty is royalty. Hit me up anytime you need something. We thrive together! 💛";
    }
    
    // Default with personality
    const responses = [
      "That's a great question. For specific details, hit up wettentertainmentllc@gmail.com. We're building something special here, and I want to make sure you get the right information. What else you curious about?",
      "I hear you, but I want to make sure I give you the right info. Email wettentertainmentllc@gmail.com for the specifics. In the meantime, ask me about our businesses, Bay'Hef, or how to join the family. We thrive together! 💛",
      "Good question! The foundation is strong, but for those details, reach out to wettentertainmentllc@gmail.com. What else can I help you with today?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const sanitizeInput = (text: string): string => {
    return text
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
      .trim();
  };

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const sanitizedInput = sanitizeInput(input);
    if (sanitizedInput.length > 500) return;

    const userMessage: Message = { text: sanitizedInput, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    const userInput = sanitizedInput;
    setInput('');
    
    // Update conversation context
    setConversationContext(prev => [...prev, userInput].slice(-5));

    setTimeout(() => {
        const response = getAuraResponse(userInput, conversationContext);
        const auraResponse: Message = { sender: 'aura', text: response };
        setMessages(prev => [...prev, auraResponse]);
        setConversationContext(prev => [...prev, response].slice(-5));
    }, 800);
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-800 shadow-lg rounded-lg">
        <div className="p-6 text-center border-b border-gray-700">
            <h1 className="text-3xl font-bold text-wett-gold">Ask Aura</h1>
            <p className="text-gray-400">Your direct line to the Matriarch&apos;s wisdom.</p>
        </div>
        
        <div className="p-6 h-96 overflow-y-auto flex flex-col space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-wett-gold text-black' : 'bg-gray-700 text-white'}`}>
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border-t border-gray-700">
          <form onSubmit={handleSend} className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-grow bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-wett-gold"
            />
            <button type="submit" className="bg-wett-gold text-black font-bold py-2 px-5 rounded-lg hover:bg-yellow-400 transition duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}