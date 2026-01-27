'use client';

import { useState } from 'react';
import Link from 'next/link';
import { courseService } from '@/lib/courseProgress';

export default function Lesson3() {
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const handleQuizSubmit = () => {
    const correctAnswers = { q1: 'b', q2: 'c', q3: 'a', q4: 'b', q5: 'c' };
    
    let score = 0;
    Object.keys(correctAnswers).forEach(key => {
      if (quizAnswers[key] === correctAnswers[key as keyof typeof correctAnswers]) {
        score += 20;
      }
    });
    
    setQuizScore(score);
    
    if (score >= 90) {
      courseService.completeLesson('etiquette-school', 'lesson-3');
      alert('🎉 Perfect! You scored ' + score + '%\n\nLesson 3 complete. Continue to Lesson 4!');
    } else {
      alert('📚 You scored ' + score + '%. Review and try again. You need 90% to pass.');
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <div className="mb-8">
        <Link href="/blueprint/etiquette-school" className="text-wett-gold hover:underline">
          ← Back to Etiquette School
        </Link>
      </div>

      <h1 className="text-5xl font-bold text-wett-gold mb-4">Lesson 3: Making Introductions</h1>
      <p className="text-2xl text-gray-300 mb-8">How to Connect People & Make Lasting Impressions</p>

      {/* Introduction */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Why This Matters (WETT Style)</h2>
        <p className="text-lg text-gray-300 mb-4">
          Introductions are where relationships start. Whether you're connecting two people or introducing yourself, this is where trust begins. A good introduction can open doors, create partnerships, and build the network that gets you to the bag.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          In the WETT world, <strong>your network is your net worth</strong>. The people you know—and how you connect them—determines what opportunities come your way.
        </p>
        <div className="bg-black/50 p-6 rounded-lg">
          <p className="text-wett-gold text-xl font-bold mb-2">The WETT Connection:</p>
          <p className="text-gray-300">
            <strong>"The Village Approach."</strong> It takes a village to build an empire. Introductions expand the village. When you connect people strategically, you create value for everyone—and the collective gets stronger.
          </p>
        </div>
      </div>

      {/* The Status Rule */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">The Status Rule: Who Gets Introduced to Whom?</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">The Rule</h3>
            <p className="text-gray-300 mb-4 text-xl">
              <strong>Introduce the less important person TO the more important person.</strong>
            </p>
            <p className="text-gray-300 mb-4">
              Status hierarchy: <strong>Client/VIP → Senior/Elder → Younger/Junior</strong>
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">Examples:</h3>
            <div className="space-y-4">
              <div>
                <p className="text-wett-gold font-bold">Your friend + Your boss:</p>
                <p className="text-white">"Mr. Johnson, I'd like you to meet my friend Marcus. Marcus, this is Mr. Johnson, my supervisor at the firm."</p>
              </div>
              <div>
                <p className="text-wett-gold font-bold">Younger person + Older person:</p>
                <p className="text-white">"Ms. Williams, this is my cousin Trey. Trey, this is Ms. Williams, our family friend for 20 years."</p>
              </div>
              <div>
                <p className="text-wett-gold font-bold">Your peer + A client:</p>
                <p className="text-white">"Sarah, I'd like you to meet my colleague James. James, this is Sarah, one of our key partners."</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Real Scenario: The Networking Event</h3>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-white mb-3"><strong>Situation:</strong></p>
              <p className="text-gray-300 mb-4">
                You're at a business event with your mentor. You run into a friend who's looking for opportunities.
              </p>
              
              <p className="text-white mb-3"><strong>❌ Wrong Way:</strong></p>
              <p className="text-gray-300 mb-4 italic">
                "Yo, this is my friend Mike. Mike, this is... I don't know, some guy I work with."
              </p>
              
              <p className="text-white mb-3"><strong>✅ WETT Way:</strong></p>
              <p className="text-gray-300 mb-4 italic">
                "Mr. Davis, I'd like you to meet Mike Thompson. Mike's been building his marketing agency for the past year. Mike, this is Anthony Davis, my mentor and founder of Davis Consulting."
              </p>
              
              <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
              <p className="text-gray-300">
                You gave context. You showed respect to the senior person. You helped Mike by highlighting what he does. That's how you build the village—by connecting people with intention.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Perfect Handshake */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">The Perfect Handshake</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">The Formula</h3>
            <div className="bg-gray-700 p-6 rounded-lg">
              <ol className="space-y-3 text-gray-300 text-lg">
                <li><strong>1. Stand up</strong> (if you're sitting)</li>
                <li><strong>2. Make eye contact</strong> before extending your hand</li>
                <li><strong>3. Firm grip</strong> (not crushing, not limp—confident)</li>
                <li><strong>4. 2-3 pumps</strong> (up and down, don't hold forever)</li>
                <li><strong>5. Smile</strong> (genuine, not forced)</li>
                <li><strong>6. Say their name</strong> ("Nice to meet you, Sarah")</li>
                <li><strong>7. Release</strong> (don't linger)</li>
              </ol>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Common Handshake Mistakes</h3>
            <div className="space-y-3">
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">❌ The Dead Fish</p>
                <p className="text-gray-300">Limp, weak grip. Signals insecurity or disinterest.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">❌ The Bone Crusher</p>
                <p className="text-gray-300">Trying too hard to prove dominance. Comes off aggressive.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">❌ The Pump-n-Hold</p>
                <p className="text-gray-300">Shaking forever. Awkward and uncomfortable.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">❌ The No-Eye-Contact</p>
                <p className="text-gray-300">Looking away while shaking. Shows you're not present.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Self-Introduction */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Introducing Yourself: The 30-Second Pitch</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">The Formula</h3>
            <p className="text-gray-300 mb-4">
              <strong>Name + What You Do + Value Prop + Connection Point</strong>
            </p>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-white font-bold mb-3">Example (Professional Setting):</p>
              <p className="text-gray-300 italic mb-4">
                "I'm Jordan Smith. I run a digital marketing agency that helps small businesses scale their online presence. We've helped over 50 local companies double their revenue through targeted social media campaigns. I heard you're in the restaurant business—we've worked with several in the area."
              </p>
              <p className="text-wett-gold font-bold mb-2">Breakdown:</p>
              <ul className="text-gray-300 space-y-1">
                <li>• Name: Jordan Smith</li>
                <li>• What you do: Run a digital marketing agency</li>
                <li>• Value: Helped 50+ businesses double revenue</li>
                <li>• Connection: You work with restaurants, they're in that industry</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Real Scenario: The Elevator</h3>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-white mb-3"><strong>Situation:</strong></p>
              <p className="text-gray-300 mb-4">
                You step into an elevator with someone wearing a company badge from a business you want to work with. You have 30 seconds.
              </p>
              
              <p className="text-white mb-3"><strong>❌ Wasted Opportunity:</strong></p>
              <p className="text-gray-300 mb-4 italic">
                You say nothing. You check your phone. The doors open. They leave. You never see them again.
              </p>
              
              <p className="text-white mb-3"><strong>✅ WETT Move:</strong></p>
              <p className="text-gray-300 mb-4 italic">
                "Hey, I noticed your badge—you work at TechCorp? I'm Alex, I do software development. I've been following your company's AI projects. Actually just finished a similar project for a local startup. Mind if I send you my info?"
              </p>
              
              <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
              <p className="text-gray-300">
                You were confident, not desperate. You showed genuine interest in their work. You made it easy for them to say yes. That's 30 seconds that could change your career.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Homework */}
      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">📝 Homework: The Introduction Challenge</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 1: Practice 5 Introductions (This Week)</h3>
            <p className="text-gray-300 mb-4">
              Introduce yourself to 5 new people this week using the 30-second formula. Track it:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-white font-bold mb-2">Template:</p>
              <ul className="text-gray-300 space-y-2">
                <li>Person 1: [Name] - [Where you met] - [How it went]</li>
                <li>Person 2: [Name] - [Where you met] - [How it went]</li>
                <li>etc.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 2: Handshake Drill (Practice with 3 People)</h3>
            <p className="text-gray-300 mb-4">
              Practice the perfect handshake with friends/family. Ask for honest feedback:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <ul className="text-gray-300 space-y-2">
                <li>• Was my grip too firm or too weak?</li>
                <li>• Did I maintain eye contact?</li>
                <li>• Did I pump 2-3 times or hold too long?</li>
                <li>• Did it feel confident and natural?</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 3: Write Your 30-Second Pitch</h3>
            <p className="text-gray-300 mb-4">
              Write out your personal 30-second introduction. Include:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <ul className="text-gray-300 space-y-2">
                <li>1. Your name</li>
                <li>2. What you do (or studying/working toward)</li>
                <li>3. Your value proposition (what makes you valuable)</li>
                <li>4. A flexible connection point</li>
              </ul>
            </div>
            <p className="text-wett-gold font-bold mt-4">Practice saying it out loud until it feels natural.</p>
          </div>
        </div>
      </div>

      {/* Quiz */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">📊 Lesson 3 Quiz</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">1. According to the Status Rule, how should you make introductions?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>a) Introduce the more important person to the less important person</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>b) Introduce the less important person TO the more important person</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>c) It doesn't matter which order</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">2. How many times should you pump during a handshake?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>a) 1 time</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>b) 5-6 times</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>c) 2-3 times</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">3. What's the formula for a 30-second self-introduction?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>a) Name + What You Do + Value Prop + Connection Point</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>b) Name + Age + Hometown</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>c) Just your name and job title</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">4. What should you do before extending your hand for a handshake?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>a) Look at their hand</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>b) Make eye contact and stand up if sitting</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>c) Say their name loudly</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">5. According to WETT philosophy, why are introductions important?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>a) To show off your connections</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>b) To follow social norms</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>c) They expand your village and create value for the collective ("The Village Approach")</span>
              </label>
            </div>
          </div>
        </div>

        <button 
          onClick={handleQuizSubmit}
          className="mt-8 bg-wett-gold text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition text-lg"
        >
          Submit Quiz
        </button>

        {quizScore !== null && (
          <div className={`mt-6 p-6 rounded-lg ${quizScore >= 90 ? 'bg-green-600' : 'bg-red-600'}`}>
            <p className="text-white text-xl font-bold">
              {quizScore >= 90 ? '🎉 Perfect!' : '📚 Keep Studying'}
            </p>
            <p className="text-white mt-2">
              You scored {quizScore}%. {quizScore >= 90 ? 'Lesson 3 complete!' : 'Review and try again.'}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link href="/blueprint/etiquette-school/lesson-2" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition">
          ← Lesson 2
        </Link>
        <Link href="/blueprint/etiquette-school/lesson-4" className="bg-wett-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
          Continue to Lesson 4 →
        </Link>
      </div>
    </div>
  );
}
