'use client';

import { useState, useEffect } from 'react';
import PayWhatYouWant from '@/components/PayWhatYouWant';
import { courseService } from '@/lib/courseProgress';

export default function GroupEconomicsPage() {
  const [enrolled, setEnrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const courseId = 'group-economics';
  const totalWeeks = 16;

  useEffect(() => {
    const courseProgress = courseService.getCourseProgress(courseId);
    if (courseProgress) {
      setEnrolled(true);
      setProgress(courseService.getCompletionPercentage(courseId, totalWeeks));
    }
  }, []);

  const handleEnrollment = () => {
    courseService.enrollInCourse(courseId);
    setEnrolled(true);
    alert('✅ Enrolled in Group Economics Mastery!\n\nYour 16-week course has started.\nComplete each week\'s module to progress.\n\nWe thrive together!');
  };

  const markWeekComplete = (weekId: string) => {
    courseService.completeLesson(courseId, weekId);
    setProgress(courseService.getCompletionPercentage(courseId, totalWeeks));
    alert('✅ Week Completed!\n\nExcellent progress! Move on to the next week.');
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-wett-gold mb-8">Group Economics Mastery</h1>
      <p className="text-lg text-gray-300 mb-12">Access courses and financial templates to build collective wealth.</p>
      
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Mastery Class: Group Economics</h2>
        <p className="text-gray-300 mb-6">&quot;Many hands make light work&quot; - Learn to pool resources, build cooperative networks, and harness the power of the village approach.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-wett-gold mb-2">Week 1: Why Combine Forces?</h3>
            <p className="text-sm text-gray-300">Pooling resources, mutual aid, and the village model</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-wett-gold mb-2">Week 2-3: Mechanisms</h3>
            <p className="text-sm text-gray-300">Co-ops, lending circles, investment clubs</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-wett-gold mb-2">Week 4-5: Behavioral Economics</h3>
            <p className="text-sm text-gray-300">Trust, free-riders, and overcoming roadblocks</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-wett-gold mb-2">Week 6-8: Wealth Creation</h3>
            <p className="text-sm text-gray-300">Case studies on shared work and profits</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-wett-gold mb-2">Week 9-12: Practical Tools</h3>
            <p className="text-sm text-gray-300">Legal frameworks and decision-making</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-wett-gold mb-2">Week 13-16: Capstone</h3>
            <p className="text-sm text-gray-300">Launch your community project</p>
          </div>
        </div>
        
        <div className="bg-gray-900 p-4 rounded mb-4">
          <h3 className="font-bold text-white mb-3">Week 1 Assignment: Community Resource Map</h3>
          <p className="text-sm text-gray-300 mb-2">List and diagram all your personal and community networks where resources or support flow in both directions:</p>
          <ul className="text-sm text-gray-300 space-y-1 ml-4">
            <li>• Family networks</li>
            <li>• Faith groups</li>
            <li>• Clubs and organizations</li>
            <li>• Online communities</li>
            <li>• Business circles</li>
          </ul>
        </div>
        
        {!enrolled ? (
          <div className="bg-gray-900 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-bold text-wett-gold mb-4">📋 How to Enroll</h3>
            <ol className="text-gray-300 space-y-2 mb-6">
              <li><strong>1.</strong> Pay what you can afford below</li>
              <li><strong>2.</strong> Course unlocks all 16 weeks immediately</li>
              <li><strong>3.</strong> Complete weekly modules at your own pace</li>
              <li><strong>4.</strong> Finish capstone project</li>
              <li><strong>5.</strong> Earn your certificate</li>
            </ol>
            
            <h3 className="text-xl font-bold text-wett-gold mb-4">💰 Pay What You Want - We Thrive Together</h3>
            <p className="text-gray-300 mb-6">We believe learning about group economics should be accessible to everyone. Pay what you can afford. Those who pay more help subsidize those who pay less. This is group economics in action.</p>
            
            <PayWhatYouWant 
              title="Group Economics Mastery Course"
              description="Suggested: $10 (solidarity) | $50 (standard) | $100+ (supporter). Every contribution helps another learner."
              suggestedAmounts={[10, 50, 100]}
              minAmount={5}
              onSuccess={handleEnrollment}
            />
            
            <div className="bg-gray-800 p-4 rounded text-center mt-4">
              <p className="text-sm text-gray-400 mb-2">Need full scholarship? <a href="mailto:wettentertainmentllc@gmail.com?subject=Scholarship Request" className="text-wett-gold hover:underline">Email us</a> (no proof required)</p>
              <p className="text-xs text-gray-500">🎓 23 scholarships funded this month by our community</p>
            </div>
          </div>
        ) : (
          <div className="bg-gray-900 p-6 rounded-lg mt-6">
            <h3 className="text-2xl font-bold text-wett-gold mb-4">📊 Your Progress</h3>
            <div className="w-full bg-gray-700 rounded-full h-8 mb-6">
              <div 
                className="bg-wett-gold h-8 rounded-full flex items-center justify-center font-bold text-black transition-all duration-500"
                style={{ width: `${progress}%` }}
              >
                {progress}%
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {Array.from({ length: 16 }, (_, i) => {
                const weekId = `week-${i + 1}`;
                const completed = courseService.isLessonCompleted(courseId, weekId);
                return (
                  <button
                    key={weekId}
                    onClick={() => markWeekComplete(weekId)}
                    disabled={completed}
                    className={`p-3 rounded font-bold transition ${
                      completed 
                        ? 'bg-wett-gold text-black' 
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    } disabled:cursor-not-allowed`}
                  >
                    {completed ? '✅' : ''} Week {i + 1}
                  </button>
                );
              })}
            </div>
            
            {progress === 100 && (
              <div className="bg-wett-gold text-black p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-2">🎉 Course Complete!</h3>
                <p className="mb-4">You've mastered Group Economics!</p>
                <a href="mailto:wettentertainmentllc@gmail.com?subject=Certificate Request - Group Economics" className="inline-block bg-black text-wett-gold px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition">
                  Request Your Certificate
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">📋 Sample Lesson: Many Hands, One Village</h2>
        <p className="text-gray-300 mb-4">First session breakdown (90 minutes):</p>
        <div className="space-y-3">
          <div className="bg-gray-700 p-3 rounded">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-white text-sm">1. Welcome & Warm-Up</h4>
              <span className="text-wett-gold text-xs">10 min</span>
            </div>
            <p className="text-xs text-gray-300">Share: &quot;A time when working with others made a task easier&quot;</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-white text-sm">2. Mini Lecture: Group Economics in Everyday Life</h4>
              <span className="text-wett-gold text-xs">15 min</span>
            </div>
            <p className="text-xs text-gray-300">History, benefits, examples from diverse cultures</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-white text-sm">3. Activity: Community Resource Map</h4>
              <span className="text-wett-gold text-xs">20 min</span>
            </div>
            <p className="text-xs text-gray-300">Diagram your networks and resource flows</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-white text-sm">4. Simulation: Lending Circle</h4>
              <span className="text-wett-gold text-xs">15 min</span>
            </div>
            <p className="text-xs text-gray-300">Experience shared risk and trust-building</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-white text-sm">5. Discussion: Trust and Barriers</h4>
              <span className="text-wett-gold text-xs">10 min</span>
            </div>
            <p className="text-xs text-gray-300">What makes sharing resources hard? How to overcome?</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-white text-sm">6. Case Study & Reflection</h4>
              <span className="text-wett-gold text-xs">10 min</span>
            </div>
            <p className="text-xs text-gray-300">Success story: food co-op or investment club</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-white text-sm">7. Wrap-Up & Assignment</h4>
              <span className="text-wett-gold text-xs">10 min</span>
            </div>
            <p className="text-xs text-gray-300">Homework: Expand resource map, interview family member</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">🎯 Hands-On Exercises</h2>
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">1. Community Resource Mapping</h3>
            <p className="text-sm text-gray-300 mb-2">Draw your network: identify resource flows, informal economies, and support systems in your community.</p>
            <button className="text-wett-gold text-sm hover:underline">Download Template →</button>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">2. Lending Circle Simulation</h3>
            <p className="text-sm text-gray-300 mb-2">Experience shared risk and trust-building through group lending exercises.</p>
            <button className="text-wett-gold text-sm hover:underline">Start Simulation →</button>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">3. Collaborative Budgeting Challenge</h3>
            <p className="text-sm text-gray-300 mb-2">Negotiate and create shared budgets with your cohort ($1,000 community fund scenario).</p>
            <button className="text-wett-gold text-sm hover:underline">View Challenge →</button>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">4. Build-a-Coop Case Study</h3>
            <p className="text-sm text-gray-300 mb-2">Design a cooperative business: food co-op, artist collective, buying club, or investment group.</p>
            <button className="text-wett-gold text-sm hover:underline">Access Framework →</button>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">5. Mutual Aid in Action</h3>
            <p className="text-sm text-gray-300 mb-2">Weekly practice: give and receive non-monetary aid (skill share, meal swap, carpool, etc.).</p>
            <button className="text-wett-gold text-sm hover:underline">Log Your Actions →</button>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">📚 Required Reading & Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-white mb-3">Core Texts</h3>
            <div className="space-y-3">
              <div className="bg-gray-700 p-3 rounded">
                <p className="font-bold text-white text-sm">Collective Courage</p>
                <p className="text-xs text-gray-400">Jessica Gordon Nembhard</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <p className="font-bold text-white text-sm">The Art of Gathering</p>
                <p className="text-xs text-gray-400">Priya Parker</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <p className="font-bold text-white text-sm">Mutual Aid: A Factor of Evolution</p>
                <p className="text-xs text-gray-400">Peter Kropotkin (public domain)</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <p className="font-bold text-white text-sm">The Gift Economy</p>
                <p className="text-xs text-gray-400">Lewis Hyde (selected chapters)</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3">Articles & Documentaries</h3>
            <div className="space-y-3">
              <div className="bg-gray-700 p-3 rounded">
                <p className="font-bold text-white text-sm">&quot;The Case for Reparations&quot;</p>
                <p className="text-xs text-gray-400">Ta-Nehisi Coates, The Atlantic</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <p className="font-bold text-white text-sm">College Savings Circles</p>
                <p className="text-xs text-gray-400">NPR, 2020</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <p className="font-bold text-white text-sm">The Mondragon Corporation</p>
                <p className="text-xs text-gray-400">DW Documentary (YouTube)</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <p className="font-bold text-white text-sm">Modern U.S. Cooperatives</p>
                <p className="text-xs text-gray-400">PBS NewsHour</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-gray-700 p-4 rounded">
          <h3 className="font-bold text-white mb-2">Podcasts</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-600 px-3 py-1 rounded text-sm text-white">The Table Underground</span>
            <span className="bg-gray-600 px-3 py-1 rounded text-sm text-white">Pod Save the People</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-wett-gold mb-4">📚 Additional Courses</h2>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">The WETT Doctrine: Financial Strategy</h3>
              <p className="text-sm text-gray-300 mb-2">Deep dive into the financial strategies that power the WETT empire.</p>
              <span className="text-wett-gold text-sm">Duration: 6 Weeks</span>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Pooled Resources & Investment</h3>
              <p className="text-sm text-gray-300 mb-2">How to leverage collective capital for maximum returns.</p>
              <span className="text-wett-gold text-sm">Duration: 5 Weeks</span>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Village Banking Systems</h3>
              <p className="text-sm text-gray-300 mb-2">Traditional and modern approaches to community finance.</p>
              <span className="text-wett-gold text-sm">Duration: 4 Weeks</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-wett-gold mb-4">📊 Financial Templates</h2>
          <div className="space-y-3">
            <a href="#" className="block bg-gray-700 p-4 rounded hover:bg-gray-600 transition">
              <h3 className="font-bold text-white mb-1">Group Budget Planner</h3>
              <p className="text-sm text-gray-300">Excel template for collective financial planning</p>
            </a>
            <a href="#" className="block bg-gray-700 p-4 rounded hover:bg-gray-600 transition">
              <h3 className="font-bold text-white mb-1">Investment Pool Tracker</h3>
              <p className="text-sm text-gray-300">Track contributions and returns for group investments</p>
            </a>
            <a href="#" className="block bg-gray-700 p-4 rounded hover:bg-gray-600 transition">
              <h3 className="font-bold text-white mb-1">Revenue Sharing Calculator</h3>
              <p className="text-sm text-gray-300">Calculate fair distribution of collective earnings</p>
            </a>
            <a href="#" className="block bg-gray-700 p-4 rounded hover:bg-gray-600 transition">
              <h3 className="font-bold text-white mb-1">Business Plan Template</h3>
              <p className="text-sm text-gray-300">Comprehensive template for group ventures</p>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">🎓 Learning Path</h2>
        <p className="text-sm text-gray-300 mb-4">Each week integrates: real-world case study → practical exercise → reflection → connection to your networks</p>
        <div className="flex items-center gap-4 overflow-x-auto pb-4">
          <div className="min-w-[200px] bg-wett-gold text-black p-4 rounded text-center">
            <div className="font-bold mb-2">Week 1-4</div>
            <div className="text-sm">Foundations</div>
          </div>
          <div className="text-wett-gold text-2xl">→</div>
          <div className="min-w-[200px] bg-gray-700 p-4 rounded text-center">
            <div className="font-bold mb-2">Week 5-10</div>
            <div className="text-sm">Strategy</div>
          </div>
          <div className="text-wett-gold text-2xl">→</div>
          <div className="min-w-[200px] bg-gray-700 p-4 rounded text-center">
            <div className="font-bold mb-2">Week 11-16</div>
            <div className="text-sm">Implementation</div>
          </div>
          <div className="text-wett-gold text-2xl">→</div>
          <div className="min-w-[200px] bg-gray-700 p-4 rounded text-center">
            <div className="font-bold mb-2">Week 17+</div>
            <div className="text-sm">Mastery</div>
          </div>
        </div>
      </div>
    </div>
  );
}
