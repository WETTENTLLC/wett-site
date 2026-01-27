'use client';

import { useState } from 'react';
import Link from 'next/link';
import { courseService } from '@/lib/courseProgress';

export default function Lesson5() {
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
      courseService.completeLesson('etiquette-school', 'lesson-5');
      alert('🎉 Perfect! You scored ' + score + '%\n\nLesson 5 complete. One more to go!');
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

      <h1 className="text-5xl font-bold text-wett-gold mb-4">Lesson 5: Dining Etiquette</h1>
      <p className="text-2xl text-gray-300 mb-8">From Casual Lunch to the Boardroom Table</p>

      {/* Introduction */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Why This Matters (WETT Style)</h2>
        <p className="text-lg text-gray-300 mb-4">
          More deals are closed over dinner than in boardrooms. Dining etiquette shows you can navigate any setting—from the block to a 5-star restaurant. It's not about fancy food—it's about <strong>showing respect</strong> and <strong>not embarrassing yourself</strong> (or your team).
        </p>
        <div className="bg-black/50 p-6 rounded-lg">
          <p className="text-wett-gold text-xl font-bold mb-2">The WETT Connection:</p>
          <p className="text-gray-300">
            Business happens at the table. Master this, and you'll never lose an opportunity because you didn't know which fork to use.
          </p>
        </div>
      </div>

      {/* BMW Rule */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">The BMW Rule: Your Table Setup</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">B.M.W. = Bread, Meal, Water</h3>
            <p className="text-gray-300 mb-4 text-lg">
              Imagine you're sitting in a BMW car. The driver's position tells you where everything goes:
            </p>
            <div className="bg-gray-800 p-6 rounded text-center">
              <p className="text-wett-gold font-bold text-xl mb-4">Your Place Setting:</p>
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-wett-gold font-bold text-lg">B</p>
                  <p className="text-white">Bread Plate</p>
                  <p className="text-gray-300 text-sm">LEFT side</p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-wett-gold font-bold text-lg">M</p>
                  <p className="text-white">Meal</p>
                  <p className="text-gray-300 text-sm">CENTER</p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-wett-gold font-bold text-lg">W</p>
                  <p className="text-white">Water/Drinks</p>
                  <p className="text-gray-300 text-sm">RIGHT side</p>
                </div>
              </div>
            </div>
            <p className="text-wett-gold font-bold mt-4">Memory Trick:</p>
            <p className="text-gray-300">Make an "okay" sign with both hands (👌). Your left hand makes a "b" (bread), your right makes a "d" (drinks).</p>
          </div>
        </div>
      </div>

      {/* The 4:20 Signal */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">The 4:20 Signal: How to Show You're Done</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Utensil Positioning</h3>
            <p className="text-gray-300 mb-4">
              Your fork and knife position tells the server whether you're still eating or finished.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-4 rounded">
                <p className="text-wett-gold font-bold text-lg mb-3">🍽️ Still Eating</p>
                <p className="text-white mb-2">Fork and knife in an "X" or "V" shape on the plate</p>
                <p className="text-gray-300 text-sm">Signals: "I'm taking a break, but I'm not done yet. Don't take my plate."</p>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <p className="text-wett-gold font-bold text-lg mb-3">✅ Finished</p>
                <p className="text-white mb-2">Fork and knife together at 4:20 position (pointing to 4 and 8 on a clock)</p>
                <p className="text-gray-300 text-sm">Signals: "I'm done. You can clear my plate."</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">Other Signals</h3>
            <div className="space-y-3 text-gray-300">
              <p><strong>Napkin on lap:</strong> You're eating</p>
              <p><strong>Napkin on chair:</strong> You're temporarily leaving (restroom) but coming back</p>
              <p><strong>Napkin on table (left of plate):</strong> You're finished and leaving</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table Manners */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Essential Table Manners</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded">
            <p className="text-wett-gold font-bold mb-2">✓ Start with the Outside, Work In</p>
            <p className="text-gray-300">Multiple forks/spoons? Start with the outermost utensil and work your way toward the plate with each course.</p>
          </div>

          <div className="bg-gray-700 p-4 rounded">
            <p className="text-wett-gold font-bold mb-2">✓ Chew with Your Mouth Closed</p>
            <p className="text-gray-300">Non-negotiable. Nobody wants to see your food. Also, don't talk with food in your mouth—finish chewing first.</p>
          </div>

          <div className="bg-gray-700 p-4 rounded">
            <p className="text-wett-gold font-bold mb-2">✓ Elbows Off the Table (While Eating)</p>
            <p className="text-gray-300">Resting elbows is fine between courses, but when food is in front of you, hands and wrists only.</p>
          </div>

          <div className="bg-gray-700 p-4 rounded">
            <p className="text-wett-gold font-bold mb-2">✓ Pass to the Right</p>
            <p className="text-gray-300">When someone asks for salt, bread, etc., pass it to the right. Always offer both salt AND pepper together (they're a pair).</p>
          </div>

          <div className="bg-gray-700 p-4 rounded">
            <p className="text-wett-gold font-bold mb-2">✓ Wait for Everyone Before Starting</p>
            <p className="text-gray-300">Don't start eating until everyone at the table has been served. Exception: host says "Please, start while it's hot."</p>
          </div>

          <div className="bg-gray-700 p-4 rounded">
            <p className="text-wett-gold font-bold mb-2">✓ Pace Yourself</p>
            <p className="text-gray-300">Match the speed of others. Don't finish way before everyone else or eat so slow they're waiting on you.</p>
          </div>
        </div>
      </div>

      {/* Scenarios */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Real Scenarios</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">Scenario 1: The Client Dinner</h3>
            <p className="text-gray-300 mb-3">
              You're at a business dinner with a potential client. There are 3 forks, 2 knives, and 2 glasses.
            </p>
            
            <p className="text-white mb-2"><strong>❌ Wrong Move:</strong></p>
            <p className="text-gray-300 mb-3 italic">
              You panic, grab the biggest fork, and hope for the best. You drink from the wrong glass. You talk with your mouth full.
            </p>
            
            <p className="text-white mb-2"><strong>✅ WETT Move:</strong></p>
            <p className="text-gray-300 mb-3 italic">
              You remember BMW (drinks on right). You start with the outside fork. You finish chewing before speaking. You place utensils at 4:20 when done.
            </p>
            
            <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
            <p className="text-gray-300">
              You navigated it smoothly. The client didn't notice anything awkward—because there was nothing awkward. That's the point. Etiquette is invisible when done right.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">Scenario 2: The Spill</h3>
            <p className="text-gray-300 mb-3">
              You knock over your water glass. It spills across the table.
            </p>
            
            <p className="text-white mb-2"><strong>❌ Wrong Move:</strong></p>
            <p className="text-gray-300 mb-3 italic">
              You panic, make a huge scene, start profusely apologizing for 5 minutes straight.
            </p>
            
            <p className="text-white mb-2"><strong>✅ WETT Move:</strong></p>
            <p className="text-gray-300 mb-3 italic">
              You calmly say "My apologies," signal the server, and help clean with your napkin. You don't dwell on it.
            </p>
            
            <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
            <p className="text-gray-300">
              Accidents happen. How you handle it shows grace under pressure. You stayed calm, addressed it, and moved on.
            </p>
          </div>
        </div>
      </div>

      {/* Homework */}
      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">📝 Homework: Table Practice</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 1: Set a Proper Place Setting</h3>
            <p className="text-gray-300 mb-4">
              At home, practice setting a formal place setting using the BMW rule:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <ul className="text-gray-300 space-y-2">
                <li>• Plate in center</li>
                <li>• Fork(s) on left</li>
                <li>• Knife and spoon on right (knife blade facing plate)</li>
                <li>• Bread plate upper left</li>
                <li>• Water glass upper right</li>
                <li>• Napkin on lap or to left of forks</li>
              </ul>
            </div>
            <p className="text-wett-gold font-bold mt-4">Take a photo. This burns it into memory.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 2: Practice the 4:20 Signal</h3>
            <p className="text-gray-300 mb-4">
              At your next meal (any meal), consciously practice:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <ul className="text-gray-300 space-y-2">
                <li>• Placing utensils in "still eating" position when pausing</li>
                <li>• Placing utensils at 4:20 when finished</li>
                <li>• Using your napkin correctly (lap, chair, table)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 3: Go to a Restaurant</h3>
            <p className="text-gray-300 mb-4">
              Visit a sit-down restaurant (doesn't have to be fancy). Practice everything:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <ul className="text-gray-300 space-y-2">
                <li>• BMW rule (identify your bread plate and water glass)</li>
                <li>• Napkin on lap immediately</li>
                <li>• Order politely ("I'll have..." not "Give me...")</li>
                <li>• Chew with mouth closed</li>
                <li>• Use 4:20 signal when done</li>
                <li>• Thank the server</li>
              </ul>
            </div>
            <p className="text-wett-gold font-bold mt-4">Reflect: What felt natural? What needs more practice?</p>
          </div>
        </div>
      </div>

      {/* Quiz */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">📊 Lesson 5 Quiz</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">1. What does the BMW rule stand for?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>a) Before Meal Wash-up</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>b) Bread (left), Meal (center), Water (right)</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>c) Best Meal Wishes</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">2. Where should you place your napkin when temporarily leaving the table?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>a) On the table</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>b) In your pocket</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>c) On your chair</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">3. What does the 4:20 utensil position signal?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>a) You're finished eating</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>b) You're still eating</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>c) You need the server</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">4. When should you start eating?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>a) As soon as your food arrives</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>b) After everyone has been served (unless host says to start)</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>c) Whenever you feel like it</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">5. Why does dining etiquette matter in the WETT philosophy?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>a) To show off fancy knowledge</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>b) To impress rich people</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>c) More deals are closed over dinner than in boardrooms - it opens doors to opportunities</span>
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
              You scored {quizScore}%. {quizScore >= 90 ? 'Lesson 5 complete! One more to go!' : 'Review and try again.'}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link href="/blueprint/etiquette-school/lesson-4" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition">
          ← Lesson 4
        </Link>
        <Link href="/blueprint/etiquette-school/lesson-6" className="bg-wett-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
          Final Lesson: Professional Edge →
        </Link>
      </div>
    </div>
  );
}
