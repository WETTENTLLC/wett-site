'use client';

import { useState } from 'react';
import Link from 'next/link';
import { courseService } from '@/lib/courseProgress';

export default function Lesson6() {
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
      courseService.completeLesson('etiquette-school', 'lesson-6');
      alert('🎉 You scored ' + score + '%!\n\nCongratulations! You\'ve completed Etiquette School. You\'re officially ready to navigate any professional setting with confidence and grace.');
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

      <h1 className="text-5xl font-bold text-wett-gold mb-4">Lesson 6: Professional Edge</h1>
      <p className="text-2xl text-gray-300 mb-8">Email, Video Calls, and Digital Presence</p>

      {/* Introduction */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Why This Matters (WETT Style)</h2>
        <p className="text-lg text-gray-300 mb-4">
          The first impression isn't always in-person anymore. It's an email. It's a Zoom background. It's how fast you respond. Your digital presence is your <strong>professional calling card</strong>. Mess it up, and you won't get a second chance.
        </p>
        <div className="bg-black/50 p-6 rounded-lg">
          <p className="text-wett-gold text-xl font-bold mb-2">The WETT Connection:</p>
          <p className="text-gray-300">
            We Thrive Together means showing up polished—whether that's in person or online. Professionalism opens doors. Sloppiness closes them. You can't afford to lose opportunities because of a sloppy email or a messy background.
          </p>
        </div>
      </div>

      {/* Email Etiquette */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Email Etiquette: Write Like a Pro</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">The Email Formula</h3>
            <p className="text-gray-300 mb-4">Every professional email follows this structure:</p>
            
            <div className="bg-gray-800 p-6 rounded space-y-4">
              <div>
                <p className="text-wett-gold font-bold mb-2">1. Subject Line (Clear & Specific)</p>
                <p className="text-gray-300">❌ "Hey"</p>
                <p className="text-gray-300">❌ "Quick question"</p>
                <p className="text-green-400">✅ "Meeting Follow-Up: Next Steps for WETT Partnership"</p>
              </div>

              <div>
                <p className="text-wett-gold font-bold mb-2">2. Greeting (Respectful & Appropriate)</p>
                <p className="text-gray-300">❌ "Yo"</p>
                <p className="text-gray-300">❌ No greeting at all</p>
                <p className="text-green-400">✅ "Hi [Name]," or "Good morning, [Name],"</p>
                <p className="text-gray-400 text-sm mt-1">*Use "Dear [Name]" for very formal situations</p>
              </div>

              <div>
                <p className="text-wett-gold font-bold mb-2">3. Opening Line (Context)</p>
                <p className="text-gray-300">Start with WHY you're emailing:</p>
                <p className="text-green-400 mt-2">"I hope this email finds you well. I'm reaching out regarding..."</p>
                <p className="text-green-400">"Thank you for meeting with me yesterday. I wanted to follow up on..."</p>
              </div>

              <div>
                <p className="text-wett-gold font-bold mb-2">4. Body (Short & Scannable)</p>
                <p className="text-gray-300 mb-2">• Keep it under 5 sentences if possible</p>
                <p className="text-gray-300 mb-2">• Use bullet points for clarity</p>
                <p className="text-gray-300 mb-2">• Get to the point quickly</p>
                <p className="text-gray-300">• Include a clear call-to-action</p>
              </div>

              <div>
                <p className="text-wett-gold font-bold mb-2">5. Closing (Professional & Consistent)</p>
                <p className="text-gray-300">❌ "Later"</p>
                <p className="text-gray-300">❌ "Peace"</p>
                <p className="text-green-400">✅ "Best regards,"</p>
                <p className="text-green-400">✅ "Thank you,"</p>
                <p className="text-green-400">✅ "Looking forward to connecting,"</p>
              </div>

              <div>
                <p className="text-wett-gold font-bold mb-2">6. Signature (Complete Contact Info)</p>
                <div className="bg-gray-700 p-4 rounded text-gray-300 text-sm">
                  <p>Your Name</p>
                  <p>Your Title</p>
                  <p>WETT Entertainment</p>
                  <p>Email: yourname@wett.com</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Email Response Times</h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-4 rounded">
                <p className="text-wett-gold font-bold">Urgent: Within 2 hours</p>
                <p className="text-gray-300 text-sm">Time-sensitive requests, client issues, urgent follow-ups</p>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <p className="text-wett-gold font-bold">Normal: Within 24 hours</p>
                <p className="text-gray-300 text-sm">General business correspondence, meeting requests</p>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <p className="text-wett-gold font-bold">Low Priority: Within 48 hours</p>
                <p className="text-gray-300 text-sm">Newsletters, FYI emails, non-urgent updates</p>
              </div>
            </div>
            <p className="text-gray-300 mt-4 italic">
              If you can't respond fully right away, send a quick reply: "Got your email. I'll send a detailed response by [day/time]."
            </p>
          </div>
        </div>
      </div>

      {/* Email Templates */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Email Templates You'll Actually Use</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">Template 1: Thank You Email (After Meeting)</h3>
            <div className="bg-gray-800 p-4 rounded text-gray-300 text-sm space-y-2">
              <p><strong>Subject:</strong> Thank You for Your Time Today</p>
              <p className="mt-3">Hi [Name],</p>
              <p>Thank you for taking the time to meet with me today. I really appreciated learning more about [specific topic discussed].</p>
              <p>As we discussed, I'll [specific next step you committed to]. Please let me know if you need anything from me in the meantime.</p>
              <p>Looking forward to staying connected.</p>
              <p className="mt-3">Best regards,<br />[Your Name]</p>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">Template 2: Professional Request</h3>
            <div className="bg-gray-800 p-4 rounded text-gray-300 text-sm space-y-2">
              <p><strong>Subject:</strong> Request: [Specific Ask]</p>
              <p className="mt-3">Hi [Name],</p>
              <p>I hope this email finds you well. I'm reaching out to request [specific thing you need].</p>
              <p>[One sentence explaining why/context].</p>
              <p>Would you be available for a brief call this week to discuss? I'm flexible with timing.</p>
              <p className="mt-3">Thank you,<br />[Your Name]</p>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">Template 3: Follow-Up Email</h3>
            <div className="bg-gray-800 p-4 rounded text-gray-300 text-sm space-y-2">
              <p><strong>Subject:</strong> Following Up: [Original Subject]</p>
              <p className="mt-3">Hi [Name],</p>
              <p>I wanted to follow up on my previous email regarding [topic]. I know you're busy, but I wanted to make sure this didn't slip through the cracks.</p>
              <p>Please let me know if you need any additional information from me.</p>
              <p className="mt-3">Best regards,<br />[Your Name]</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Call Etiquette */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Video Call Etiquette</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Before the Call: Setup</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">📷 Camera Position</p>
                <p className="text-gray-300">• Eye level (not looking up your nose or down at you)</p>
                <p className="text-gray-300">• Centered in frame</p>
                <p className="text-gray-300">• Show shoulders and head (not just your face)</p>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">💡 Lighting</p>
                <p className="text-gray-300">• Face a window or lamp (light in front of you, not behind)</p>
                <p className="text-gray-300">• No harsh shadows</p>
                <p className="text-gray-300">• Test your lighting before the call</p>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">🖼️ Background</p>
                <p className="text-gray-300">• Clean, uncluttered space</p>
                <p className="text-gray-300">• No messy rooms, unmade beds, or laundry piles</p>
                <p className="text-gray-300">• If necessary, use a professional virtual background (but real is better)</p>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">🎧 Audio</p>
                <p className="text-gray-300">• Test your mic and speakers/headphones</p>
                <p className="text-gray-300">• Use headphones if possible (prevents echo)</p>
                <p className="text-gray-300">• Find a quiet spot (no barking dogs, sirens, roommates yelling)</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">During the Call: Professional Presence</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <p className="text-wett-gold font-bold mb-2">✅ Do:</p>
                <p className="text-gray-300">• Join 2-3 minutes early</p>
                <p className="text-gray-300">• Look at the camera (not your own face)</p>
                <p className="text-gray-300">• Mute yourself when not speaking</p>
                <p className="text-gray-300">• Sit still (no fidgeting, spinning in chair, eating)</p>
                <p className="text-gray-300">• Dress professionally (at least from the waist up)</p>
                <p className="text-gray-300">• Nod and give visual cues you're listening</p>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <p className="text-red-400 font-bold mb-2">❌ Don't:</p>
                <p className="text-gray-300">• Show up in pajamas or a bonnet</p>
                <p className="text-gray-300">• Multitask (checking phone, typing, eating)</p>
                <p className="text-gray-300">• Have people walking behind you</p>
                <p className="text-gray-300">• Forget to unmute when speaking</p>
                <p className="text-gray-300">• Stare at yourself the whole time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenarios */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Real Scenarios</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">Scenario 1: The Email Typo</h3>
            <p className="text-gray-300 mb-3">
              You send an email to a potential client. You realize after sending that you misspelled their name.
            </p>
            
            <p className="text-white mb-2"><strong>❌ Wrong Move:</strong></p>
            <p className="text-gray-300 mb-3 italic">
              You ignore it and hope they don't notice. Or you send 3 apology emails making it worse.
            </p>
            
            <p className="text-white mb-2"><strong>✅ WETT Move:</strong></p>
            <p className="text-gray-300 mb-3 italic">
              You send a brief, professional follow-up: "My apologies—I realized I misspelled your name in my previous email. That was careless of me. [Original message]."
            </p>
            
            <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
            <p className="text-gray-300">
              You acknowledged it quickly and moved on. Shows attention to detail and accountability.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">Scenario 2: Zoom Background Disaster</h3>
            <p className="text-gray-300 mb-3">
              You join a video call. Your roommate starts vacuuming behind you mid-meeting.
            </p>
            
            <p className="text-white mb-2"><strong>❌ Wrong Move:</strong></p>
            <p className="text-gray-300 mb-3 italic">
              You try to ignore it while everyone hears the vacuum and watches chaos unfold behind you.
            </p>
            
            <p className="text-white mb-2"><strong>✅ WETT Move:</strong></p>
            <p className="text-gray-300 mb-3 italic">
              You mute yourself, calmly say "Excuse me one moment," turn off your camera if needed, handle it quickly, and rejoin: "Apologies for that interruption."
            </p>
            
            <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
            <p className="text-gray-300">
              Life happens. You handled it with grace and didn't let it derail the meeting.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">Scenario 3: The Late Reply</h3>
            <p className="text-gray-300 mb-3">
              You forgot to reply to an important email for 3 days.
            </p>
            
            <p className="text-white mb-2"><strong>❌ Wrong Move:</strong></p>
            <p className="text-gray-300 mb-3 italic">
              You ghost them or make up an elaborate excuse about why you didn't respond.
            </p>
            
            <p className="text-white mb-2"><strong>✅ WETT Move:</strong></p>
            <p className="text-gray-300 mb-3 italic">
              "My apologies for the delay in getting back to you. [Then answer their question/request directly]."
            </p>
            
            <p className="text-wett-gold font-bold mb-2">Why It Works:</p>
            <p className="text-gray-300">
              A brief acknowledgment is enough. Then move forward. No long excuses needed.
            </p>
          </div>
        </div>
      </div>

      {/* Homework */}
      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">📝 Homework: Digital Audit</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 1: Review Your Emails</h3>
            <p className="text-gray-300 mb-4">
              Go through your last 10 sent emails. For each one, ask:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <ul className="text-gray-300 space-y-2">
                <li>• Was the subject line clear?</li>
                <li>• Did I use a professional greeting and closing?</li>
                <li>• Was it concise (under 5-7 sentences)?</li>
                <li>• Did I proofread for typos?</li>
                <li>• Would I be proud if my boss saw this?</li>
              </ul>
            </div>
            <p className="text-wett-gold font-bold mt-4">Identify 3 things you can improve.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 2: Draft 3 Professional Emails</h3>
            <p className="text-gray-300 mb-4">
              Using the templates provided, write:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <ul className="text-gray-300 space-y-2">
                <li>1. A thank-you email (after a hypothetical meeting)</li>
                <li>2. A professional request email (asking for something)</li>
                <li>3. A follow-up email (checking in on something)</li>
              </ul>
            </div>
            <p className="text-gray-300 mt-4">Don't send them—just practice writing them correctly.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 3: Video Call Setup Test</h3>
            <p className="text-gray-300 mb-4">
              Set up for a video call and test:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <ul className="text-gray-300 space-y-2">
                <li>• Camera angle (eye level?)</li>
                <li>• Lighting (can you see your face clearly?)</li>
                <li>• Background (clean and professional?)</li>
                <li>• Audio (can you hear clearly? Any echo?)</li>
              </ul>
            </div>
            <p className="text-wett-gold font-bold mt-4">Take a screenshot. This is your professional setup. Memorize it.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Part 4: Email Signature</h3>
            <p className="text-gray-300 mb-4">
              Create a professional email signature with:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <ul className="text-gray-300 space-y-2">
                <li>• Your full name</li>
                <li>• Your title/role</li>
                <li>• Organization (WETT or relevant affiliation)</li>
                <li>• Contact info (email, phone)</li>
                <li>• Optional: LinkedIn or professional website link</li>
              </ul>
            </div>
            <p className="text-gray-300 mt-4">Set it up in your email client so it auto-populates.</p>
          </div>
        </div>
      </div>

      {/* Quiz */}
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">📊 Final Quiz</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">1. What is the ideal email response time for normal business correspondence?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>a) Within 1 week</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>b) Within 24 hours</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q1" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q1: e.target.value})} />
                <span>c) Immediately</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">2. Which email greeting is MOST professional?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>a) "Yo,"</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>b) No greeting</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q2" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q2: e.target.value})} />
                <span>c) "Hi [Name]," or "Good morning, [Name],"</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">3. For video calls, where should your camera be positioned?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>a) Eye level, centered in frame</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>b) Looking up at you from below</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q3" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q3: e.target.value})} />
                <span>c) Doesn't matter</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">4. When should you join a video call?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>a) Exactly on time</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>b) 2-3 minutes early</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q4" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q4: e.target.value})} />
                <span>c) A few minutes late is fine</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-white font-bold mb-3">5. Why does digital professionalism matter in the WETT philosophy?</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="a" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>a) To impress people with fancy words</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="b" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>b) To seem smarter than you are</span>
              </label>
              <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                <input type="radio" name="q5" value="c" onChange={(e) => setQuizAnswers({...quizAnswers, q5: e.target.value})} />
                <span>c) Your digital presence is your calling card - professionalism opens doors, sloppiness closes them</span>
              </label>
            </div>
          </div>
        </div>

        <button 
          onClick={handleQuizSubmit}
          className="mt-8 bg-wett-gold text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition text-lg"
        >
          Submit Final Quiz
        </button>

        {quizScore !== null && (
          <div className={`mt-6 p-6 rounded-lg ${quizScore >= 90 ? 'bg-green-600' : 'bg-red-600'}`}>
            <p className="text-white text-xl font-bold">
              {quizScore >= 90 ? '🎉 Congratulations!' : '📚 Keep Studying'}
            </p>
            <p className="text-white mt-2">
              You scored {quizScore}%. {quizScore >= 90 ? 'You\'ve completed Etiquette School! You\'re ready to navigate any professional setting with confidence.' : 'Review the material and try again.'}
            </p>
          </div>
        )}
      </div>

      {/* Completion Message */}
      <div className="bg-gradient-to-br from-wett-gold to-yellow-600 p-8 rounded-lg mb-8 text-black">
        <h2 className="text-3xl font-bold mb-4">🏆 You've Reached the Professional Edge</h2>
        <p className="text-lg mb-4">
          From table manners to email etiquette, you now have the tools to navigate any professional setting with confidence and grace.
        </p>
        <p className="font-bold text-xl">
          Remember: Etiquette isn't about being fake. It's about showing respect, being intentional, and making others feel valued. That's the WETT way.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link href="/blueprint/etiquette-school/lesson-5" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition">
          ← Lesson 5
        </Link>
        <Link href="/blueprint/etiquette-school" className="bg-wett-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
          Return to Etiquette School →
        </Link>
      </div>
    </div>
  );
}
