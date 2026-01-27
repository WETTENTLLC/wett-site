'use client';

import { useState } from 'react';
import Link from 'next/link';
import { courseService } from '@/lib/courseProgress';

export default function Lesson1() {
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const handleQuizSubmit = () => {
    const correctAnswers = {
      q1: 'b',
      q2: 'c',
      q3: 'a',
      q4: 'b',
      q5: 'c'
    };
    
    let score = 0;
    Object.keys(correctAnswers).forEach(key => {
      if (quizAnswers[key] === correctAnswers[key as keyof typeof correctAnswers]) {
        score += 20;
      }
    });
    
    setQuizScore(score);
    
    if (score >= 90) {
      courseService.completeLesson('etiquette-school', 'lesson-1');
      alert('🎉 Excellent work! You passed with ' + score + '%\n\nLesson 1 marked complete. Continue to Lesson 2!');
    } else {
      alert('📚 You scored ' + score + '%. Review the material and try again. You need 90% to pass.');
    }
  };

  const markComplete = () => {
    courseService.completeLesson('etiquette-school', 'lesson-1');
    alert('✅ Lesson 1 Complete!\n\nGreat work! Continue to Lesson 2.');
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <div className="mb-8">
        <Link href="/blueprint/etiquette-school" className="text-wett-gold hover:underline">
          ← Back to Etiquette School
        </Link>
      </div>

      <h1 className="text-5xl font-bold text-wett-gold mb-4">Lesson 1: The Three Pillars</h1>
      <p className="text-2xl text-gray-300 mb-8">The Foundation of All Etiquette</p>

      {/* Introduction */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Why This Matters (WETT Style)</h2>
        <p className="text-lg text-gray-300 mb-4">
          Before you learn any rules, you need to understand the <strong>why</strong>. These three pillars—<strong>Consideration</strong>, <strong>Respect</strong>, and <strong>Authenticity</strong>—are the foundation of everything. 
        </p>
        <p className="text-lg text-gray-300 mb-4">
          In the WETT philosophy, we build together. That means understanding how your actions affect the collective. Etiquette isn't about being fake—it's about being thoughtful while staying real. It's how we move from the block to the boardroom without losing ourselves.
        </p>
        <div className="bg-black/50 p-6 rounded-lg">
          <p className="text-wett-gold text-xl font-bold mb-2">The WETT Connection:</p>
          <p className="text-gray-300">
            <strong>"We Thrive Together"</strong> means respecting everyone's time, energy, and presence. When you master these three pillars, you create space for others to win—and when others win, we all eat.
          </p>
        </div>
      </div>

      {/* Pillar 1: Consideration */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Pillar 1: Consideration</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">What It Is</h3>
            <p className="text-gray-300 mb-4">
              <strong>Consideration</strong> means thinking about how your actions impact others. It's awareness + action. You notice what people need and adjust accordingly.
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-white font-bold mb-2">The WETT Way:</p>
              <p className="text-gray-300">
                In a collective, consideration keeps the peace and builds trust. It's the difference between "every man for himself" and "we all eat when we think ahead."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">What It Looks Like</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Holding the door</strong> when someone's hands are full</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Not checking your phone</strong> while someone's talking to you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Asking "What time works for you?"</strong> instead of dictating the schedule</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Keeping your voice down</strong> in shared spaces</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Replying to messages</strong> within 24 hours (even if it's "I'll get back to you")</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Real Scenario #1: The Group Chat</h3>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-white mb-3"><strong>Situation:</strong></p>
              <p className="text-gray-300 mb-4">
                You're in a group chat planning a family meetup. People are throwing out dates, but nobody's locking it in. You want it to happen ASAP, but you notice two people haven't responded yet.
              </p>
              
              <p className="text-white mb-3"><strong>❌ Inconsiderate Response:</strong></p>
              <p className="text-gray-300 mb-4 italic">
                "Saturday at 7pm. That's what works for me. If you can't make it, catch us next time."
              </p>
              
              <p className="text-white mb-3"><strong>✅ Considerate Response:</strong></p>
              <p className="text-gray-300 mb-4 italic">
                "I'm free Saturday 7pm or Sunday 3pm. Waiting to hear from [names] before we lock it in. What works for y'all?"
              </p>
              
              <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
              <p className="text-gray-300">
                You acknowledged others' schedules and gave flexibility. You built consensus instead of forcing a decision. That's how the collective stays strong.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Real Scenario #2: The Elevator</h3>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-white mb-3"><strong>Situation:</strong></p>
              <p className="text-gray-300 mb-4">
                You're rushing to catch an elevator. Someone's already inside, and the doors are closing. You yell "Hold it!" and they press the button to reopen.
              </p>
              
              <p className="text-white mb-3"><strong>❌ Inconsiderate:</strong></p>
              <p className="text-gray-300 mb-4 italic">
                You rush in, stand in front of the buttons, and don't say a word. You check your phone the whole ride.
              </p>
              
              <p className="text-white mb-3"><strong>✅ Considerate:</strong></p>
              <p className="text-gray-300 mb-4 italic">
                "Thank you for holding it! What floor?" You press their floor first, then yours. You nod or make brief eye contact to acknowledge them.
              </p>
              
              <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
              <p className="text-gray-300">
                Small moments matter. You showed gratitude and helped them. They'll remember that—and you built goodwill in 10 seconds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar 2: Respect */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Pillar 2: Respect</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">What It Is</h3>
            <p className="text-gray-300 mb-4">
              <strong>Respect</strong> is recognizing that every person has value, boundaries, and agency. You don't have to agree with someone to respect them. You just have to acknowledge their right to exist, speak, and be treated with dignity.
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-white font-bold mb-2">The WETT Way:</p>
              <p className="text-gray-300">
                <strong>"Loyalty is Royalty."</strong> Respect builds loyalty. When people feel valued, they stick around. Disrespect destroys trust—and trust is the foundation of group economics.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">What It Looks Like</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Using someone's name</strong> (and pronouncing it correctly)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Not interrupting</strong> when someone's speaking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Honoring commitments</strong> ("I said I'd be there, so I'm there")</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Asking before touching</strong> someone's belongings or person</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Not making assumptions</strong> about people's stories or struggles</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Real Scenario #3: The Meeting</h3>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-white mb-3"><strong>Situation:</strong></p>
              <p className="text-gray-300 mb-4">
                You're in a team meeting. Someone shares an idea you think is terrible. You know a better way.
              </p>
              
              <p className="text-white mb-3"><strong>❌ Disrespectful:</strong></p>
              <p className="text-gray-300 mb-4 italic">
                "Nah, that won't work. Here's what we should actually do..." [You cut them off and pitch your idea]
              </p>
              
              <p className="text-white mb-3"><strong>✅ Respectful:</strong></p>
              <p className="text-gray-300 mb-4 italic">
                "I hear what you're saying. I see the vision. What if we also considered [your idea]? How would that fit with what you're proposing?"
              </p>
              
              <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
              <p className="text-gray-300">
                You didn't dismiss them. You built on their idea. Even if yours is better, you showed respect for their contribution. Now they're more likely to support your idea—because you valued theirs first.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Real Scenario #4: The Name Game</h3>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-white mb-3"><strong>Situation:</strong></p>
              <p className="text-gray-300 mb-4">
                You meet someone with a name you've never heard before. It's spelled in a way you're not sure how to pronounce.
              </p>
              
              <p className="text-white mb-3"><strong>❌ Disrespectful:</strong></p>
              <p className="text-gray-300 mb-4 italic">
                You either avoid saying their name entirely, or you guess and butcher it without asking. "Hey, you!"
              </p>
              
              <p className="text-white mb-3"><strong>✅ Respectful:</strong></p>
              <p className="text-gray-300 mb-4 italic">
                "I want to make sure I say your name right. Can you tell me how you pronounce it?" [Listen. Repeat it. Get it right.]
              </p>
              
              <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
              <p className="text-gray-300">
                A person's name is their identity. Getting it right shows you see them. Mispronouncing it after they've corrected you shows you don't care. Respect is in the details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar 3: Authenticity */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Pillar 3: Authenticity</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">What It Is</h3>
            <p className="text-gray-300 mb-4">
              <strong>Authenticity</strong> means being real while being respectful. It's the balance. You don't code-switch to the point where you lose yourself, but you also don't use "keeping it real" as an excuse to be rude.
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-white font-bold mb-2">The WETT Way:</p>
              <p className="text-gray-300">
                From "We Trap Together" to "We Thrive Together"—we evolve, but we don't erase where we came from. Authenticity is owning your story while adapting to the room. It's how you move from the block to the boardroom without becoming someone you're not.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">What It Looks Like</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Speaking your truth</strong> without being cruel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Saying "I don't know"</strong> instead of faking expertise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Adapting your language</strong> to the room without losing your voice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Admitting when you're wrong</strong> and apologizing sincerely</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold font-bold">✓</span>
                <span><strong>Setting boundaries</strong> without being aggressive</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Real Scenario #5: The Code-Switch</h3>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-white mb-3"><strong>Situation:</strong></p>
              <p className="text-gray-300 mb-4">
                You're at a business lunch with potential investors. They're all corporate types. You're from the streets. You want to be yourself, but you also want the bag.
              </p>
              
              <p className="text-white mb-3"><strong>❌ Inauthentic (Too Far):</strong></p>
              <p className="text-gray-300 mb-4 italic">
                You pretend you went to Harvard, adopt a fake accent, and lie about your background. You erase your story to fit in.
              </p>
              
              <p className="text-white mb-3"><strong>✅ Authentic (Balanced):</strong></p>
              <p className="text-gray-300 mb-4 italic">
                "I come from Oakland. Built my first business with $500 and a hustle mentality. That taught me group economics and loyalty—principles I bring to every venture. Here's how we scale..."
              </p>
              
              <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
              <p className="text-gray-300">
                You owned your story. You translated it into their language (business speak) without erasing yourself. Investors respect real. Authenticity is your edge—not your liability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Homework */}
      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">📝 Homework: The 3-Day Observation Challenge</h2>
        
        <p className="text-gray-300 mb-6">
          For the next 3 days, you're going to observe yourself and others through the lens of the Three Pillars.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Day 1: Consideration</h3>
            <p className="text-gray-300 mb-4">
              Track every time you do something considerate. Write it down. Also track when you miss an opportunity to be considerate (no judgment—just awareness).
            </p>
            <p className="text-wett-gold font-bold mb-2">Examples to Log:</p>
            <ul className="text-gray-300 space-y-2">
              <li>• Held the door for someone</li>
              <li>• Asked "What works for you?" instead of dictating</li>
              <li>• Kept my voice down in a shared space</li>
              <li>• Missed: Checked phone while friend was talking</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Day 2: Respect</h3>
            <p className="text-gray-300 mb-4">
              Pay attention to how you show (or don't show) respect. Did you interrupt someone? Did you honor a commitment? Did you use someone's name correctly?
            </p>
            <p className="text-wett-gold font-bold mb-2">Examples to Log:</p>
            <ul className="text-gray-300 space-y-2">
              <li>• Let someone finish their thought without interrupting</li>
              <li>• Asked how to pronounce a name correctly</li>
              <li>• Showed up on time (respect for their time)</li>
              <li>• Missed: Made an assumption about someone's story</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Day 3: Authenticity</h3>
            <p className="text-gray-300 mb-4">
              Notice when you're being real vs. when you're faking. Did you pretend to know something you didn't? Did you code-switch so hard you lost yourself? Or did you balance authenticity with respect?
            </p>
            <p className="text-wett-gold font-bold mb-2">Examples to Log:</p>
            <ul className="text-gray-300 space-y-2">
              <li>• Said "I don't know" instead of faking it</li>
              <li>• Adapted my language without losing my voice</li>
              <li>• Admitted I was wrong and apologized</li>
              <li>• Missed: Pretended to agree when I really disagreed</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">End of Day 3: Reflect</h3>
            <p className="text-gray-300 mb-4">Write 3-5 sentences answering:</p>
            <ul className="text-gray-300 space-y-2">
              <li>1. Which pillar came naturally to me?</li>
              <li>2. Which one do I need to work on most?</li>
              <li>3. How did focusing on these pillars change my interactions?</li>
              <li>4. What's one thing I'll commit to doing differently?</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-wett-gold/20 p-4 rounded-lg">
          <p className="text-wett-gold font-bold">
            ✅ Complete this homework before moving to Lesson 2. The practice makes it stick.
          </p>
        </div>
      </div>

      {/* Quiz */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">📊 Lesson 1 Quiz</h2>
        <p className="text-gray-300 mb-6">Answer all questions to test your understanding. You need 90% to pass.</p>

        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">1. What does Consideration mean in the context of etiquette?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>a) Always putting yourself first</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>b) Thinking about how your actions impact others and adjusting accordingly</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>c) Being overly polite even when it's inconvenient</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">2. In the group chat scenario, what made the response considerate?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>a) Making the decision quickly</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>b) Choosing the date that worked best for you</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>c) Acknowledging others' schedules and giving flexibility</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">3. According to the WETT philosophy, why is respect important?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>a) Respect builds loyalty and trust, which are foundations of group economics</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>b) It makes people like you more</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>c) It's what society expects</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">4. What is the balanced approach to authenticity?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>a) Always say exactly what you think, no filter</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>b) Adapt your language to the room without losing your voice or story</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>c) Completely change who you are to fit in</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">5. In the investor meeting scenario, what made the response authentic?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>a) Using big corporate words to impress them</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>b) Pretending to have a different background</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>c) Owning your story and translating it into business language</span>
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
              {quizScore >= 90 ? '🎉 Congratulations!' : '📚 Keep Studying'}
            </p>
            <p className="text-white mt-2">
              You scored {quizScore}%. {quizScore >= 90 ? 'You passed! Lesson 1 is complete.' : 'Review the material and try again. You need 90% to pass.'}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link href="/blueprint/etiquette-school" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition">
          ← Back to Course
        </Link>
        <button
          onClick={markComplete}
          className="bg-wett-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
        >
          Mark Complete & Continue →
        </button>
      </div>
    </div>
  );
}
