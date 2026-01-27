'use client';

import { useState } from 'react';
import Link from 'next/link';
import { courseService } from '@/lib/courseProgress';

export default function Lesson4() {
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
      courseService.completeLesson('etiquette-school', 'lesson-4');
      alert('🎉 Excellent! You scored ' + score + '%\n\nLesson 4 complete. Continue to Lesson 5!');
    } else {
      alert('📚 You scored ' + score + '%. Review and try again.');
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <div className="mb-8">
        <Link href="/blueprint/etiquette-school" className="text-wett-gold hover:underline">
          ← Back to Etiquette School
        </Link>
      </div>

      <h1 className="text-5xl font-bold text-wett-gold mb-4">Lesson 4: Conversation & Listening</h1>
      <p className="text-2xl text-gray-300 mb-8">The Art of Being Heard & Hearing Others</p>

      {/* Introduction */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Why This Matters (WETT Style)</h2>
        <p className="text-lg text-gray-300 mb-4">
          People don't remember what you said—they remember how you made them feel. Good conversation isn't about waiting for your turn to talk. It's about <strong>active listening</strong>, making others feel valued, and reading the room.
        </p>
        <div className="bg-black/50 p-6 rounded-lg">
          <p className="text-wett-gold text-xl font-bold mb-2">The WETT Connection:</p>
          <p className="text-gray-300">
            <strong>"We Thrive Together"</strong> requires communication. You can't build an empire if nobody understands you—or if you don't listen to what the collective needs. Master conversation, and you master relationships.
          </p>
        </div>
      </div>

      {/* Active Listening */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">The L.A.R.A. Method: Active Listening</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">L - Listen (Actually Listen)</h3>
            <p className="text-gray-300 mb-3">
              Stop planning your response. Stop checking your phone. <strong>Focus on what they're saying.</strong>
            </p>
            <div className="bg-gray-800 p-4 rounded">
              <p className="text-wett-gold font-bold mb-2">How to Listen:</p>
              <ul className="text-gray-300 space-y-2">
                <li>• Maintain eye contact (don't stare, but don't look away constantly)</li>
                <li>• Lean in slightly (shows you're engaged)</li>
                <li>• Nod occasionally (signals understanding)</li>
                <li>• Don't interrupt (let them finish their thought)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">A - Acknowledge (Show You Heard Them)</h3>
            <p className="text-gray-300 mb-3">
              Repeat back key points or emotions to show understanding.
            </p>
            <div className="bg-gray-800 p-4 rounded">
              <p className="text-white mb-2">Examples:</p>
              <ul className="text-gray-300 space-y-2">
                <li>• "So what you're saying is..."</li>
                <li>• "That sounds frustrating/exciting/challenging..."</li>
                <li>• "I hear you on that..."</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">R - Respond (Add Value)</h3>
            <p className="text-gray-300 mb-3">
              Share your perspective, but don't one-up them or make it about you.
            </p>
            <div className="bg-gray-800 p-4 rounded">
              <p className="text-wett-gold font-bold mb-2">❌ One-Upping:</p>
              <p className="text-gray-300 mb-3 italic">"You think that's bad? Let me tell you what happened to me..."</p>
              <p className="text-wett-gold font-bold mb-2">✅ Value-Adding:</p>
              <p className="text-gray-300 italic">"I've had similar challenges. What helped me was [insight]. Have you tried that approach?"</p>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">A - Ask (Keep It Going)</h3>
            <p className="text-gray-300 mb-3">
              Ask follow-up questions that show genuine interest.
            </p>
            <div className="bg-gray-800 p-4 rounded">
              <p className="text-white mb-2">Good Questions:</p>
              <ul className="text-gray-300 space-y-2">
                <li>• "How did that make you feel?"</li>
                <li>• "What happened next?"</li>
                <li>• "What did you learn from that?"</li>
                <li>• "How are you planning to move forward?"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Conversational Courtesies */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Conversational Courtesies</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded">
            <p className="text-wett-gold font-bold mb-2">✓ Don't Interrupt</p>
            <p className="text-gray-300">Let people finish their thoughts. If you must interject, say "Can I add something?" and wait for permission.</p>
          </div>

          <div className="bg-gray-700 p-4 rounded">
            <p className="text-wett-gold font-bold mb-2">✓ Don't Monopolize</p>
            <p className="text-gray-300">Conversation is a two-way street. If you've been talking for 5+ minutes straight, ask them a question.</p>
          </div>

          <div className="bg-gray-700 p-4 rounded">
            <p className="text-wett-gold font-bold mb-2">✓ Don't One-Up</p>
            <p className="text-gray-300">Their story isn't a competition. Resist the urge to "top" their experience.</p>
          </div>

          <div className="bg-gray-700 p-4 rounded">
            <p className="text-wett-gold font-bold mb-2">✓ Match Energy</p>
            <p className="text-gray-300">If they're excited, be enthusiastic. If they're sharing something heavy, be empathetic. Read the vibe.</p>
          </div>

          <div className="bg-gray-700 p-4 rounded">
            <p className="text-wett-gold font-bold mb-2">✓ Use Their Name</p>
            <p className="text-gray-300">Saying someone's name makes them feel seen. Use it occasionally (not every sentence—that's weird).</p>
          </div>
        </div>
      </div>

      {/* Vibe Killers */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Vibe Killers: Topics to Avoid (In Most Settings)</h2>
        
        <div className="bg-gray-700 p-6 rounded-lg mb-4">
          <p className="text-white font-bold mb-3">The Rule: Avoid P.R.I.M.E. in casual/professional settings</p>
          <div className="space-y-3 text-gray-300">
            <p><strong>P - Politics:</strong> Unless you know their stance and it aligns, stay away. Too divisive.</p>
            <p><strong>R - Religion:</strong> Deeply personal. Don't assume or preach.</p>
            <p><strong>I - Income/Money:</strong> "How much do you make?" is rude. Don't ask salaries, prices, or wealth status.</p>
            <p><strong>M - Medical Issues:</strong> Don't ask about someone's health unless they bring it up.</p>
            <p><strong>E - Exes/Relationship Drama:</strong> Keep it light. Nobody wants the full breakup saga at a networking event.</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Real Scenario: The Party</h3>
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white mb-3"><strong>Situation:</strong></p>
            <p className="text-gray-300 mb-4">
              You're at a casual gathering. Someone starts talking politics aggressively.
            </p>
            
            <p className="text-white mb-3"><strong>❌ Engage the Chaos:</strong></p>
            <p className="text-gray-300 mb-4 italic">
              "Actually, that's completely wrong. Let me tell you why..." [Argument ensues, party gets awkward]
            </p>
            
            <p className="text-white mb-3"><strong>✅ WETT Move (Graceful Exit):</strong></p>
            <p className="text-gray-300 mb-4 italic">
              "That's an interesting perspective. I'm gonna grab another drink—anyone need anything?" [Change subject or physically exit]
            </p>
            
            <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
            <p className="text-gray-300">
              You didn't engage. You didn't judge. You exited gracefully. The vibe stays intact, and you protected your peace.
            </p>
          </div>
        </div>
      </div>

      {/* Reading the Room */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Reading the Room</h2>
        
        <div className="space-y-4">
          <p className="text-gray-300">
            <strong>Reading the room</strong> means paying attention to body language, energy, and context. It's knowing when to speak up, when to listen, and when to leave.
          </p>

          <div className="bg-gray-700 p-4 rounded">
            <p className="text-wett-gold font-bold mb-2">Signs Someone's Done with the Conversation:</p>
            <ul className="text-gray-300 space-y-2">
              <li>• Looking around the room instead of at you</li>
              <li>• Checking their phone</li>
              <li>• Short, one-word answers</li>
              <li>• Backing away or angling their body toward the exit</li>
              <li>• Saying "Well, I should probably..."</li>
            </ul>
            <p className="text-wett-gold font-bold mt-3">What to Do:</p>
            <p className="text-gray-300">Let them go. "It was great talking to you. Let's connect soon!" End on a high note.</p>
          </div>

          <div className="bg-gray-700 p-4 rounded">
            <p className="text-wett-gold font-bold mb-2">Signs Someone's Into the Conversation:</p>
            <ul className="text-gray-300 space-y-2">
              <li>• Leaning in</li>
              <li>• Asking follow-up questions</li>
              <li>• Smiling, nodding, making eye contact</li>
              <li>• Sharing personal stories in return</li>
            </ul>
            <p className="text-wett-gold font-bold mt-3">What to Do:</p>
            <p className="text-gray-300">Keep it going. This is where connections deepen.</p>
          </div>
        </div>
      </div>

      {/* Homework */}
      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">📝 Homework: The 10-Minute Listening Audit</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 1: Practice L.A.R.A. (Next Conversation)</h3>
            <p className="text-gray-300 mb-4">
              In your next conversation with a friend, family member, or colleague, practice the L.A.R.A. method:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <ul className="text-gray-300 space-y-2">
                <li>• L - Listen without planning your response</li>
                <li>• A - Acknowledge what they said</li>
                <li>• R - Respond with value (not one-upping)</li>
                <li>• A - Ask a follow-up question</li>
              </ul>
            </div>
            <p className="text-wett-gold font-bold mt-4">After: How did it feel? Did the conversation go deeper?</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 2: Avoid the Vibe Killers (This Week)</h3>
            <p className="text-gray-300 mb-4">
              For one week, consciously avoid P.R.I.M.E. topics in casual settings. Track it:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <ul className="text-gray-300 space-y-2">
                <li>• Did I bring up politics? (Y/N)</li>
                <li>• Did I ask about money/income? (Y/N)</li>
                <li>• Did I keep conversations light and positive? (Y/N)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 3: Read the Room Practice</h3>
            <p className="text-gray-300 mb-4">
              At your next social event, spend 10 minutes just observing:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <ul className="text-gray-300 space-y-2">
                <li>• Who's engaged in conversations? (body language clues)</li>
                <li>• Who looks like they want to leave? (exit signals)</li>
                <li>• What's the overall energy? (high, low, tense, relaxed)</li>
              </ul>
            </div>
            <p className="text-wett-gold font-bold mt-4">Write down what you noticed. This builds awareness.</p>
          </div>
        </div>
      </div>

      {/* Quiz */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">📊 Lesson 4 Quiz</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">1. What does the L.A.R.A. method stand for?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>a) Look, Act, React, Answer</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>b) Listen, Acknowledge, Respond, Ask</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>c) Laugh, Agree, Reply, Ask</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">2. What's an example of "one-upping" someone?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>a) Asking a follow-up question about their story</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>b) Nodding and saying "that sounds challenging"</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>c) Saying "You think that's bad? Let me tell you what happened to me..."</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">3. What does P.R.I.M.E. stand for in terms of vibe killers?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>a) Politics, Religion, Income, Medical, Exes</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>b) People, Relationships, Ideas, Money, Events</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>c) Problems, Rants, Insults, Meanness, Ego</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">4. What's a sign someone is done with the conversation?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>a) They're leaning in and making eye contact</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>b) They're looking around the room and giving short answers</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>c) They're asking follow-up questions</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">5. According to WETT philosophy, why does conversation matter?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>a) To dominate social settings</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>b) To show off knowledge</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>c) Communication is essential for building the collective ("We Thrive Together")</span>
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
              {quizScore >= 90 ? '🎉 Excellent!' : '📚 Keep Studying'}
            </p>
            <p className="text-white mt-2">
              You scored {quizScore}%. {quizScore >= 90 ? 'Lesson 4 complete!' : 'Review and try again.'}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link href="/blueprint/etiquette-school/lesson-3" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition">
          ← Lesson 3
        </Link>
        <Link href="/blueprint/etiquette-school/lesson-5" className="bg-wett-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
          Continue to Lesson 5 →
        </Link>
      </div>
    </div>
  );
}
