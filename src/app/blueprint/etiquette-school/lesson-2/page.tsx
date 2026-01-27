'use client';

import { useState } from 'react';
import Link from 'next/link';
import { courseService } from '@/lib/courseProgress';

export default function Lesson2() {
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
      courseService.completeLesson('etiquette-school', 'lesson-2');
      alert('🎉 Excellent! You scored ' + score + '%\n\nLesson 2 complete. Continue to Lesson 3!');
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

      <h1 className="text-5xl font-bold text-wett-gold mb-4">Lesson 2: The Non-Negotiables</h1>
      <p className="text-2xl text-gray-300 mb-8">The Rules You Can't Skip</p>

      {/* Introduction */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Why These Matter (WETT Style)</h2>
        <p className="text-lg text-gray-300 mb-4">
          These three things—<strong>Punctuality</strong>, <strong>Personal Presence</strong>, and <strong>The Digital Pause</strong>—are non-negotiable because they determine whether people trust you with their time, money, and opportunities.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          In the streets, if you're late, you miss the play. In business, if you're late, you miss the bag. Your appearance tells people whether to take you seriously. And your digital habits show whether you're present or just taking up space.
        </p>
        <div className="bg-black/50 p-6 rounded-lg">
          <p className="text-wett-gold text-xl font-bold mb-2">The WETT Connection:</p>
          <p className="text-gray-300">
            <strong>"Purse First, Ass Last."</strong> Value must be demonstrated upfront. These non-negotiables prove you value yourself—and when you value yourself, others will too.
          </p>
        </div>
      </div>

      {/* Non-Negotiable 1: Punctuality */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Non-Negotiable #1: Punctuality</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">The Rule</h3>
            <p className="text-gray-300 mb-4 text-xl">
              <strong>Be on time. Period.</strong>
            </p>
            <p className="text-gray-300 mb-4">
              "On time" means 5-10 minutes early for professional settings. Exactly on time for social. Never late unless it's an emergency—and if it is, you communicate ASAP.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">Why It Matters</h3>
            <p className="text-gray-300 mb-4">
              When you're late, you're saying: <em>"My time is more valuable than yours."</em> That's disrespect disguised as poor planning. In the WETT world, time is the most valuable currency. You can't get it back—and neither can the person you kept waiting.
            </p>
            <p className="text-wett-gold font-bold">Translation:</p>
            <p className="text-gray-300">
              Late = Unreliable. Unreliable = No bag. Simple.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">The Breakdown</h3>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">Professional Meetings (Job Interview, Client Meeting, Business Pitch)</p>
                <p className="text-white">Arrive: <strong>10-15 minutes early</strong></p>
                <p className="text-gray-300 text-sm">This gives you time to compose yourself, review notes, and not walk in sweating or flustered.</p>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">Social Events (Dinner, Party, Family Gathering)</p>
                <p className="text-white">Arrive: <strong>On time to 10 minutes late</strong></p>
                <p className="text-gray-300 text-sm">Being exactly on time to a dinner party can stress the host (they might still be prepping). 5-10 minutes late is polite. More than 15? Text ahead.</p>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">Virtual Meetings (Zoom, Google Meet)</p>
                <p className="text-white">Join: <strong>2-3 minutes early</strong></p>
                <p className="text-gray-300 text-sm">This accounts for tech issues. Showing up right at start time means you're scrambling with settings while everyone waits.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Real Scenario #1: The Interview</h3>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-white mb-3"><strong>Situation:</strong></p>
              <p className="text-gray-300 mb-4">
                You have a 2pm interview. Traffic is unpredictable in your city.
              </p>
              
              <p className="text-white mb-3"><strong>❌ Bad Move:</strong></p>
              <p className="text-gray-300 mb-4">
                You leave at 1:30pm thinking "it's only 20 minutes away." You hit traffic, arrive at 2:05pm, walk in flustered and apologizing.
              </p>
              
              <p className="text-white mb-3"><strong>✅ WETT Move:</strong></p>
              <p className="text-gray-300 mb-4">
                You leave at 1:15pm. You arrive at 1:50pm. You sit in your car, review your notes, breathe, and walk in at 1:55pm calm and collected.
              </p>
              
              <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
              <p className="text-gray-300">
                You respected their time. You showed you can plan. First impressions start before you open your mouth—and you just passed the unspoken test.
              </p>
            </div>
          </div>

          <div className="bg-black/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-wett-gold mb-3">Emergency Protocol: When You Can't Avoid Being Late</h3>
            <ol className="space-y-3 text-gray-300">
              <li><strong>1. Text/Call ASAP</strong> - As soon as you know you'll be late, communicate. Don't wait until you're supposed to arrive.</li>
              <li><strong>2. Give a Time Estimate</strong> - "I'll be there in 15 minutes" is better than "I'm running late."</li>
              <li><strong>3. Apologize Once, Briefly</strong> - "Sorry for the delay, I appreciate your patience." Then move on. Don't make excuses.</li>
              <li><strong>4. Make it Right</strong> - Offer to reschedule if it's significantly late, or bring coffee/offer value to make up for it.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Non-Negotiable 2: Personal Presence */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Non-Negotiable #2: Personal Presence (How You Show Up)</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">The Rule</h3>
            <p className="text-gray-300 mb-4">
              <strong>Look like you give a damn.</strong> Your appearance is the first thing people see. It tells them whether to take you seriously.
            </p>
            <p className="text-gray-300">
              This doesn't mean designer everything. It means <strong>clean</strong>, <strong>intentional</strong>, and <strong>appropriate for the setting</strong>.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">The WETT Standard</h3>
            <div className="space-y-3 text-gray-300">
              <p><strong>Grooming:</strong></p>
              <ul className="ml-6 space-y-2">
                <li>✓ Hair clean, styled (or neatly pulled back)</li>
                <li>✓ Nails trimmed, clean (polish optional but no chipped nails)</li>
                <li>✓ Teeth brushed, breath fresh (mints/gum on deck)</li>
                <li>✓ Deodorant applied (always. No exceptions.)</li>
                <li>✓ Clothes clean, ironed/steamed (wrinkles = sloppy)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Dress Code Decoder</h3>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">Business Formal (Interview, Board Meeting, Court)</p>
                <p className="text-white mb-2">Women: Suit, dress, or blazer + slacks. Closed-toe shoes. Minimal jewelry.</p>
                <p className="text-white mb-2">Men: Suit + tie. Dress shoes. Watch optional.</p>
                <p className="text-gray-300 text-sm italic">This is "respect the institution" attire. You're showing you understand the gravity of the setting.</p>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">Business Casual (Client Lunch, Networking Event)</p>
                <p className="text-white mb-2">Women: Blouse + slacks/skirt, or a nice dress. Flats or heels.</p>
                <p className="text-white mb-2">Men: Button-down + slacks (no tie needed). Loafers or dress shoes.</p>
                <p className="text-gray-300 text-sm italic">Polished but approachable. You're professional without being stuffy.</p>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">Smart Casual (Creative Industry, Casual Friday)</p>
                <p className="text-white mb-2">Women: Nice jeans + blazer, or a casual dress. Sneakers okay if clean.</p>
                <p className="text-white mb-2">Men: Dark jeans + collared shirt or polo. Clean sneakers or loafers.</p>
                <p className="text-gray-300 text-sm italic">Relaxed but intentional. Still looks like you tried.</p>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">Casual (Weekend, Informal Gathering)</p>
                <p className="text-white mb-2">Anything goes—but still clean and put together. No stains, rips (unless intentional fashion), or looking like you rolled out of bed.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Real Scenario #2: The Pitch</h3>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-white mb-3"><strong>Situation:</strong></p>
              <p className="text-gray-300 mb-4">
                You're pitching your business to investors. You're from the streets, but you're trying to get corporate money.
              </p>
              
              <p className="text-white mb-3"><strong>❌ Wrong Read:</strong></p>
              <p className="text-gray-300 mb-4">
                You show up in a full designer tracksuit, chains, flashy watch—thinking "I gotta look like I already got money."
              </p>
              
              <p className="text-white mb-3"><strong>✅ WETT Read:</strong></p>
              <p className="text-gray-300 mb-4">
                You wear a tailored suit (doesn't have to be designer), clean shoes, one subtle piece of jewelry (watch or chain, not both), and a fresh haircut. You look like you respect the room—but you didn't erase your swag.
              </p>
              
              <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
              <p className="text-gray-300">
                Investors don't want to see flash before results. They want to see discipline and focus. You dressed like someone who can execute—not someone trying to prove they already made it.
              </p>
            </div>
          </div>

          <div className="bg-black/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-wett-gold mb-3">The 5-Second Rule</h3>
            <p className="text-gray-300 mb-3">
              People form an opinion about you in <strong>5 seconds</strong>. That's based on:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• How you're dressed</li>
              <li>• Your posture (standing tall vs. slouching)</li>
              <li>• Your facial expression (confident vs. unsure)</li>
              <li>• Your grooming</li>
            </ul>
            <p className="text-wett-gold font-bold mt-4">
              You can change their mind later—but why fight an uphill battle? Show up right the first time.
            </p>
          </div>
        </div>
      </div>

      {/* Non-Negotiable 3: The Digital Pause */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Non-Negotiable #3: The Digital Pause</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">The Rule</h3>
            <p className="text-gray-300 mb-4 text-xl">
              <strong>Put the phone down when you're with people.</strong>
            </p>
            <p className="text-gray-300">
              Nothing says "you don't matter" like scrolling through your phone while someone's talking to you. The digital pause means being <strong>fully present</strong> in the moment you're in.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">Why It Matters</h3>
            <p className="text-gray-300 mb-4">
              Attention is the new currency. Everyone's distracted. If you can give someone your full, undivided attention, you're already ahead of 90% of people.
            </p>
            <p className="text-wett-gold font-bold">The WETT Truth:</p>
            <p className="text-gray-300">
              If you can't be present, you can't build trust. And if you can't build trust, you can't build an empire.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Digital Etiquette Rules</h3>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">📵 In Meetings</p>
                <p className="text-white">Phone face down, on silent (not vibrate—that's still distracting). Or better yet, put it away completely.</p>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">🍽️ At Meals</p>
                <p className="text-white">Phone off the table. If you're expecting an emergency call, tell people upfront: "I might need to step away—my kid's home sick."</p>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">💬 In Conversation</p>
                <p className="text-white">Don't check your phone mid-conversation. If it's urgent, excuse yourself: "Give me one second, I need to handle this."</p>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">📸 Don't Over-Document</p>
                <p className="text-white">Taking one photo for the gram? Cool. Spending 10 minutes getting the perfect shot while everyone waits? Annoying.</p>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">🎧 Headphones = "Do Not Disturb"</p>
                <p className="text-white">If you're wearing headphones in a shared space, you're signaling "I'm not available." That's fine—but don't get mad if people don't engage.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Real Scenario #3: The Coffee Meeting</h3>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-white mb-3"><strong>Situation:</strong></p>
              <p className="text-gray-300 mb-4">
                You're meeting a potential mentor for coffee. They're giving you 30 minutes of their time to drop gems.
              </p>
              
              <p className="text-white mb-3"><strong>❌ Distracted:</strong></p>
              <p className="text-gray-300 mb-4">
                Your phone is on the table. It buzzes every 2 minutes. You glance at it. They notice. They wrap up early because you're clearly not fully there.
              </p>
              
              <p className="text-white mb-3"><strong>✅ Present:</strong></p>
              <p className="text-gray-300 mb-4">
                Phone in your pocket or bag. You're taking notes (with pen and paper or asking permission to use your phone for notes). You maintain eye contact. You ask follow-up questions. They give you an extra 15 minutes because you're actually listening.
              </p>
              
              <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
              <p className="text-gray-300">
                You showed respect for their time. People remember how you made them feel—and you made them feel valued. That's how you turn a 30-minute coffee into a long-term relationship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Homework */}
      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">📝 Homework: The Non-Negotiables Audit</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 1: Punctuality Check (This Week)</h3>
            <p className="text-gray-300 mb-4">
              Track every commitment you have this week. Mark whether you were early, on time, or late.
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-white font-bold mb-2">Template:</p>
              <ul className="text-gray-300 space-y-1">
                <li>Monday 9am - Team meeting → Arrived 8:55am ✓</li>
                <li>Tuesday 2pm - Lunch with friend → Arrived 2:10pm (texted at 1:55pm)</li>
                <li>Wednesday 6pm - Zoom call → Joined 6:02pm (tech issues)</li>
              </ul>
            </div>
            <p className="text-wett-gold font-bold mt-4">Goal: 100% on-time or early for professional, no more than 5 min late for social.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 2: Appearance Test (Right Now)</h3>
            <p className="text-gray-300 mb-4">
              Stand in front of a mirror and do an honest assessment. Check off what applies:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-white font-bold mb-2">Grooming Checklist:</p>
              <ul className="text-gray-300 space-y-2">
                <li>□ Hair clean and styled</li>
                <li>□ Nails clean and trimmed</li>
                <li>□ Clothes clean and wrinkle-free</li>
                <li>□ Shoes clean (not scuffed or dirty)</li>
                <li>□ Breath fresh (when was the last time you brushed?)</li>
                <li>□ Overall: Would I hire/date/trust this person based on appearance?</li>
              </ul>
            </div>
            <p className="text-wett-gold font-bold mt-4">Fix what you checked "no" on before your next important event.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 3: Digital Detox Challenge (Tomorrow)</h3>
            <p className="text-gray-300 mb-4">
              Pick one meal or meeting tomorrow. Leave your phone in your bag/pocket the entire time.
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-white font-bold mb-2">After, reflect:</p>
              <ul className="text-gray-300 space-y-2">
                <li>• How did it feel to be fully present?</li>
                <li>• Did the conversation go deeper?</li>
                <li>• Did you notice things you normally miss?</li>
                <li>• Was it hard to resist checking your phone?</li>
              </ul>
            </div>
            <p className="text-wett-gold font-bold mt-4">The goal: Make this your new default.</p>
          </div>
        </div>
      </div>

      {/* Quiz */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">📊 Lesson 2 Quiz</h2>
        <p className="text-gray-300 mb-6">Test your understanding. You need 90% to pass.</p>

        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">1. What does being "on time" mean for a professional meeting?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>a) Arriving exactly at the scheduled time</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>b) Arriving 10-15 minutes early</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>c) Arriving within 5 minutes of the scheduled time</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">2. What should you do if you know you'll be late?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>a) Show up when you can and apologize profusely</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>b) Don't say anything until you arrive</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>c) Text/call ASAP with a time estimate</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">3. What's the most important aspect of personal presence?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>a) Looking clean, intentional, and appropriate for the setting</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>b) Wearing designer brands</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>c) Showing maximum flash and jewelry</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">4. Where should your phone be during a business meal?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>a) On the table, face down on silent</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>b) Put away completely (pocket or bag)</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>c) On the table so you can check it occasionally</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">5. According to the WETT philosophy, why do these non-negotiables matter?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>a) To impress people</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>b) To follow social rules</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>c) They demonstrate you value yourself, which makes others value you ("Purse First, Ass Last")</span>
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
              You scored {quizScore}%. {quizScore >= 90 ? 'Lesson 2 complete!' : 'Review and try again. You need 90% to pass.'}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link href="/blueprint/etiquette-school/lesson-1" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition">
          ← Lesson 1
        </Link>
        <Link href="/blueprint/etiquette-school/lesson-3" className="bg-wett-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
          Continue to Lesson 3 →
        </Link>
      </div>
    </div>
  );
}
