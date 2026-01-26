'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { courseService } from '@/lib/courseProgress';

export default function WETTGirlsOnboarding() {
  const [applicationStatus, setApplicationStatus] = useState<'pending' | 'approved' | 'completed'>('pending');
  const [doctrineProgress, setDoctrineProgress] = useState(0);
  const [etiquetteProgress, setEtiquetteProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Check if user has completed courses
    const doctrineEnrolled = courseService.getCourseProgress('wett-doctrine');
    const etiquetteEnrolled = courseService.getCourseProgress('etiquette-school');
    
    if (etiquetteEnrolled) {
      const etiquettePercent = courseService.getCompletionPercentage('etiquette-school', 6);
      setEtiquetteProgress(etiquettePercent);
      
      if (etiquettePercent === 100) {
        setCurrentStep(4);
        setApplicationStatus('completed');
      } else {
        setCurrentStep(3);
      }
    } else if (doctrineEnrolled) {
      setCurrentStep(2);
      setApplicationStatus('approved');
    }
  }, []);

  const steps = [
    {
      number: 1,
      title: 'Application Submitted',
      description: 'Your application has been received and is under review.',
      status: 'completed',
      icon: '📝',
      action: null
    },
    {
      number: 2,
      title: 'Study The WETT Doctrine',
      description: 'Learn the foundational philosophy and principles of the sisterhood.',
      status: currentStep === 2 ? 'current' : currentStep > 2 ? 'completed' : 'locked',
      icon: '📜',
      action: currentStep >= 2 ? { label: 'Start Doctrine', href: '/blueprint/the-wett-doctrine' } : null
    },
    {
      number: 3,
      title: 'Complete Etiquette School',
      description: 'Master the 6 lessons of modern etiquette - from the block to the boardroom.',
      status: currentStep === 3 ? 'current' : currentStep > 3 ? 'completed' : 'locked',
      icon: '👔',
      progress: etiquetteProgress,
      action: currentStep >= 3 ? { label: 'Continue Course', href: '/blueprint/etiquette-school' } : null
    },
    {
      number: 4,
      title: 'Full Membership Activated',
      description: 'Welcome to the sisterhood! Access all benefits, WETT TIDES, and the private community.',
      status: currentStep === 4 ? 'completed' : 'locked',
      icon: '👑',
      action: currentStep === 4 ? { label: 'View Dashboard', href: '/dashboard' } : null
    }
  ];

  return (
    <div className="min-h-screen bg-deep-black text-clean-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-wett-gold mb-4">
            Your WETT Girls Journey
          </h1>
          <p className="text-xl text-gray-300">
            Track your progress from application to full sisterhood membership
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-gray-800 p-6 rounded-lg mb-8 border-2 border-wett-gold">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-wett-gold">Overall Progress</h2>
            <span className="text-3xl font-bold text-wett-gold">{Math.round((currentStep / 4) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-6">
            <div 
              className="bg-gradient-to-r from-wett-gold to-yellow-500 h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-3"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            >
              <span className="text-black font-bold text-sm">Step {currentStep} of 4</span>
            </div>
          </div>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const isCompleted = step.status === 'completed';
            const isCurrent = step.status === 'current';
            const isLocked = step.status === 'locked';

            return (
              <div 
                key={step.number}
                className={`relative bg-gray-800 p-6 rounded-lg border-2 transition-all ${
                  isCurrent ? 'border-wett-gold shadow-lg shadow-wett-gold/20' : 
                  isCompleted ? 'border-green-500' : 
                  'border-gray-700'
                }`}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className={`absolute left-[52px] top-[80px] w-0.5 h-[calc(100%+24px)] ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-700'
                  }`} />
                )}

                <div className="flex items-start gap-6">
                  {/* Step Number Circle */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 ${
                    isCompleted ? 'bg-green-500 border-green-400 text-white' :
                    isCurrent ? 'bg-wett-gold border-yellow-400 text-black' :
                    'bg-gray-700 border-gray-600 text-gray-400'
                  }`}>
                    {isCompleted ? '✓' : step.number}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">{step.icon}</span>
                          <h3 className={`text-2xl font-bold ${
                            isCurrent ? 'text-wett-gold' : 
                            isCompleted ? 'text-green-400' : 
                            'text-gray-400'
                          }`}>
                            {step.title}
                          </h3>
                        </div>
                        <p className={`text-sm ${isLocked ? 'text-gray-500' : 'text-gray-300'}`}>
                          {step.description}
                        </p>
                      </div>

                      {isLocked && (
                        <span className="text-gray-500 text-2xl">🔒</span>
                      )}
                    </div>

                    {/* Progress Bar for Etiquette School */}
                    {step.progress !== undefined && step.progress > 0 && (
                      <div className="mt-4 mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-400">Course Progress</span>
                          <span className="text-wett-gold font-bold">{step.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-wett-gold h-3 rounded-full transition-all duration-500"
                            style={{ width: `${step.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    {step.action && (
                      <Link 
                        href={step.action.href}
                        className={`inline-block mt-4 px-6 py-3 rounded-lg font-bold transition ${
                          isCurrent ? 'bg-wett-gold text-black hover:bg-yellow-400' :
                          'bg-gray-700 text-white hover:bg-gray-600'
                        }`}
                      >
                        {step.action.label} →
                      </Link>
                    )}

                    {/* Status Messages */}
                    {step.number === 1 && (
                      <div className="mt-4 bg-green-500/20 border border-green-500 rounded-lg p-4">
                        <p className="text-green-400 font-semibold">✓ Application received and under review</p>
                        <p className="text-sm text-gray-300 mt-1">You'll receive an email within 3-5 business days with next steps</p>
                      </div>
                    )}

                    {isLocked && step.number > currentStep && (
                      <div className="mt-4 bg-gray-700/50 rounded-lg p-4">
                        <p className="text-gray-400 text-sm">
                          🔒 This step will unlock after completing the previous step
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-gray-800 p-8 rounded-lg border-2 border-wett-gold">
          <h2 className="text-2xl font-bold text-wett-gold mb-4 text-center">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold text-white mb-2">Chat with Aura</h3>
              <p className="text-sm text-gray-300 mb-4">Get guidance from the WETT Matriarch</p>
              <Link href="/family/aura" className="inline-block bg-wett-gold text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition">
                Start Chat
              </Link>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-bold text-white mb-2">Email Support</h3>
              <p className="text-sm text-gray-300 mb-4">Questions about your application?</p>
              <a href="mailto:wettentertainmentllc@gmail.com?subject=WETT Girls Application Question" className="inline-block bg-wett-gold text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/family/wett-girls-collective" className="text-wett-gold hover:underline">
            ← Back to WETT Girls Collective
          </Link>
        </div>
      </div>
    </div>
  );
}
