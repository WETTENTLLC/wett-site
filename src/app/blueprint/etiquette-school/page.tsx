'use client';

import { useState, useEffect } from 'react';
import PayWhatYouWant from '@/components/PayWhatYouWant';
import { courseService } from '@/lib/courseProgress';

export default function EtiquetteSchool() {
  const [enrolled, setEnrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const courseId = 'etiquette-school';
  const totalLessons = 6;

  useEffect(() => {
    const courseProgress = courseService.getCourseProgress(courseId);
    if (courseProgress) {
      setEnrolled(true);
      setProgress(courseService.getCompletionPercentage(courseId, totalLessons));
    }
  }, []);

  const handleEnrollment = () => {
    courseService.enrollInCourse(courseId);
    setEnrolled(true);
    alert('✅ Enrolled in The Bag Builder!\n\nYour course access has been activated.\nScroll down to start Lesson 1.\n\nComplete all lessons and quizzes to earn your certification.');
  };

  const markLessonComplete = (lessonId: string) => {
    courseService.completeLesson(courseId, lessonId);
    setProgress(courseService.getCompletionPercentage(courseId, totalLessons));
    alert('✅ Lesson Completed!\n\nGreat work! Continue to the next lesson.');
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-wett-gold mb-4 text-center">WETT Etiquette School</h1>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">The Bag Builder: A Masterclass in Modern Etiquette</h2>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-4xl mx-auto">The Guaranteed Path from the Block to the Boardroom</p>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Why You Need This (The Real Talk)</h2>
        <p className="text-lg text-gray-300 mb-6">
          This isn&apos;t your grandmother&apos;s etiquette class. This is the modern playbook for navigating any room—from the streets to the C-suite. Etiquette is your invisible armor. It opens doors, builds trust, and makes people want to invest in you.
        </p>
        <div className="bg-black/50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-wett-gold mb-4">THE GUARANTEE</h3>
          <p className="text-gray-300">
            This course is designed to be practice-based. If you complete every lesson, pass every test, and execute every piece of homework, you will not just know etiquette—you will live it. You will walk into any room, from the block to the boardroom, with unshakeable confidence. This is the investment that pays back every time.
          </p>
        </div>
      </div>

      {!enrolled && (
        <div className="bg-gray-800 p-8 rounded-lg mb-8">
          <h2 className="text-3xl font-bold text-wett-gold mb-6">📋 Course Overview</h2>
          <p className="text-gray-300 mb-6">This comprehensive 6-lesson masterclass covers everything from first impressions to professional excellence. Each lesson includes:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-wett-gold mb-2">✓ Detailed Instruction</h3>
              <p className="text-sm text-gray-300">Step-by-step guidance on every principle</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-wett-gold mb-2">✓ Real-World Scenarios</h3>
              <p className="text-sm text-gray-300">Practical examples you&apos;ll actually use</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-wett-gold mb-2">✓ Homework Assignments</h3>
              <p className="text-sm text-gray-300">Practice exercises with detailed instructions</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-wett-gold mb-2">✓ Mastery Quizzes</h3>
              <p className="text-sm text-gray-300">Test your knowledge after each lesson</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Lesson 1: The Three Pillars</h3>
              <p className="text-sm text-gray-300">Master Consideration, Respect, and Authenticity with real scenarios</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Lesson 2: The Non-Negotiables</h3>
              <p className="text-sm text-gray-300">Punctuality, Personal Presence, and Digital Etiquette</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Lesson 3: Making Introductions</h3>
              <p className="text-sm text-gray-300">The Status Rule, Perfect Handshakes, and Building Connections</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Lesson 4: Conversation & Listening</h3>
              <p className="text-sm text-gray-300">Active Listening, Conversational Courtesies, and Reading the Room</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Lesson 5: Dining Etiquette</h3>
              <p className="text-sm text-gray-300">The BMW Rule, Place Settings, and Meal Signals</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Lesson 6: Professional Edge</h3>
              <p className="text-sm text-gray-300">Email Etiquette, Meetings, and Digital Professionalism</p>
            </div>
          </div>
        </div>
      )}

      {enrolled && (
        <>
          <div className="bg-gray-800 p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold text-wett-gold mb-6">📚 Your Course Content</h2>
            <p className="text-gray-300 mb-6">All 6 lessons are now unlocked. Complete each lesson, do the homework, and mark it complete to track your progress.</p>
            
            <div className="bg-gray-700 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold text-wett-gold mb-4">🎯 Your Progress</h3>
              <div className="w-full bg-gray-600 rounded-full h-8 mb-4">
                <div 
                  className="bg-wett-gold h-8 rounded-full flex items-center justify-center font-bold text-black transition-all duration-500"
                  style={{ width: `${progress}%` }}
                >
                  {progress}%
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">Lesson 1: The Three Pillars</h3>
                  <button 
                    onClick={() => markLessonComplete('lesson-1')}
                    disabled={courseService.isLessonCompleted(courseId, 'lesson-1')}
                    className="bg-wett-gold text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {courseService.isLessonCompleted(courseId, 'lesson-1') ? '✅ Complete' : 'Mark Complete'}
                  </button>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p><strong>Topics:</strong> Consideration, Respect, Authenticity</p>
                  <p><strong>Scenarios:</strong> 5 real-world examples with solutions</p>
                  <p><strong>Homework:</strong> 3-day observation challenge with logging template</p>
                  <p className="text-sm italic">Full detailed content, scenarios, and homework instructions available in your course materials.</p>
                </div>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">Lesson 2: The Non-Negotiables</h3>
                  <button 
                    onClick={() => markLessonComplete('lesson-2')}
                    disabled={courseService.isLessonCompleted(courseId, 'lesson-2')}
                    className="bg-wett-gold text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {courseService.isLessonCompleted(courseId, 'lesson-2') ? '✅ Complete' : 'Mark Complete'}
                  </button>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p><strong>Topics:</strong> Punctuality, Personal Presence, Digital Pause</p>
                  <p><strong>Scenarios:</strong> Business meeting timing, dress code examples</p>
                  <p><strong>Homework:</strong> Digital audit + appearance test with checklist</p>
                </div>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">Lesson 3: Making Introductions</h3>
                  <button 
                    onClick={() => markLessonComplete('lesson-3')}
                    disabled={courseService.isLessonCompleted(courseId, 'lesson-3')}
                    className="bg-wett-gold text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {courseService.isLessonCompleted(courseId, 'lesson-3') ? '✅ Complete' : 'Mark Complete'}
                  </button>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p><strong>Topics:</strong> Status Rule, Perfect Handshake, Eye Contact</p>
                  <p><strong>Scenarios:</strong> Client introductions, networking events</p>
                  <p><strong>Homework:</strong> Practice 5 introductions + handshake drills</p>
                </div>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">Lesson 4: Conversation & Listening</h3>
                  <button 
                    onClick={() => markLessonComplete('lesson-4')}
                    disabled={courseService.isLessonCompleted(courseId, 'lesson-4')}
                    className="bg-wett-gold text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {courseService.isLessonCompleted(courseId, 'lesson-4') ? '✅ Complete' : 'Mark Complete'}
                  </button>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p><strong>Topics:</strong> Active Listening, Conversational Courtesies, Vibe Killers</p>
                  <p><strong>Scenarios:</strong> Client meetings, party conversations</p>
                  <p><strong>Homework:</strong> 10-minute listening audit + topic pivot practice</p>
                </div>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">Lesson 5: Dining Etiquette</h3>
                  <button 
                    onClick={() => markLessonComplete('lesson-5')}
                    disabled={courseService.isLessonCompleted(courseId, 'lesson-5')}
                    className="bg-wett-gold text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {courseService.isLessonCompleted(courseId, 'lesson-5') ? '✅ Complete' : 'Mark Complete'}
                  </button>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p><strong>Topics:</strong> BMW Rule, Place Settings, 4:20 Signal, Bathroom Etiquette</p>
                  <p><strong>Scenarios:</strong> 5-course formal dinner, business lunch</p>
                  <p><strong>Homework:</strong> Set proper place setting + practice signals at restaurant</p>
                </div>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">Lesson 6: Professional Edge</h3>
                  <button 
                    onClick={() => markLessonComplete('lesson-6')}
                    disabled={courseService.isLessonCompleted(courseId, 'lesson-6')}
                    className="bg-wett-gold text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {courseService.isLessonCompleted(courseId, 'lesson-6') ? '✅ Complete' : 'Mark Complete'}
                  </button>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p><strong>Topics:</strong> Email Etiquette, Video Calls, Meeting Presence</p>
                  <p><strong>Scenarios:</strong> Professional email examples, Zoom interview setup</p>
                  <p><strong>Homework:</strong> Draft professional email + prep video call environment</p>
                </div>
              </div>
            </div>

            {progress === 100 && (
              <div className="bg-wett-gold text-black p-6 rounded-lg mt-6 text-center">
                <h3 className="text-2xl font-bold mb-2">🎉 Congratulations!</h3>
                <p className="mb-4">You&apos;ve completed The Bag Builder Masterclass!</p>
                <a href="mailto:wettentertainmentllc@gmail.com?subject=Certificate Request - Etiquette School" className="inline-block bg-black text-wett-gold px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition">
                  Request Your Certificate
                </a>
              </div>
            )}
          </div>
        </>
      )}

      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-6 text-center">Course Completion & Certification</h2>
        <p className="text-xl text-gray-300 mb-6 text-center">
          Complete all lessons, pass all quizzes at 90% or higher, and submit all homework assignments to receive your official WETT Etiquette School certification.
        </p>
        
        {!enrolled ? (
          <div className="text-center">
            <div className="bg-gray-700 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold text-wett-gold mb-4">📋 How to Enroll</h3>
              <ol className="text-left text-gray-300 space-y-3 mb-6">
                <li><strong>1.</strong> Choose your payment amount below</li>
                <li><strong>2.</strong> Complete payment via PayPal</li>
                <li><strong>3.</strong> Course unlocks immediately</li>
                <li><strong>4.</strong> Complete all 6 lessons</li>
                <li><strong>5.</strong> Pass quizzes at 90%+</li>
                <li><strong>6.</strong> Earn your certification</li>
              </ol>
            </div>
            <PayWhatYouWant 
              title="The Bag Builder Masterclass"
              description="Suggested: $50 (basic access) | $150 (with certification) | $300+ (includes 1-on-1 coaching session). Pay what you can afford."
              suggestedAmounts={[50, 150, 300]}
              minAmount={25}
              onSuccess={handleEnrollment}
            />
          </div>
        ) : null}
      </div>

      <div className="bg-gray-800 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Go Build Your Bag</h2>
        <p className="text-xl text-gray-300 mb-6">
          This is your guaranteed path from the block to the boardroom. Master these skills, and watch every door open.
        </p>
        <p className="text-2xl text-wett-gold italic">&quot;Etiquette is your invisible armor&quot;</p>
      </div>
    </div>
  );
}
