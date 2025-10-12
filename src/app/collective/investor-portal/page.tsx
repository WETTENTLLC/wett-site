'use client'

import { useAuth } from '@/lib/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// Dummy data for demonstration
const investorData = {
  businessPlan: {
    title: 'WETT Lifestyle Expansion 2025',
    url: '#',
  },
  financialProjections: {
    revenue: '$5M',
    profit: '$1.2M',
    growth: '25%',
  },
  growthMetrics: {
    mau: '15,000',
    churnRate: '5%',
    ltv: '$500',
  },
};

export default function InvestorPortalPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return <p className="text-center py-12">Loading...</p>;
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-wett-gold text-center mb-8">Investor Portal</h1>
        <p className="text-lg text-gray-400 text-center mb-12">Access exclusive documents, metrics, and tools for The WETT Collective.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Business Plan Access */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Business Plan</h2>
            <p className="text-gray-300 mb-4">Review our comprehensive business plan and strategy for the upcoming fiscal year.</p>
            <a 
              href={investorData.businessPlan.url}
              className="inline-block bg-wett-gold text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Download &apos;{investorData.businessPlan.title}&apos;
            </a>
          </div>

          {/* Financial Projections */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Financial Projections</h2>
            <ul className="space-y-2 text-gray-300">
              <li><strong>Projected Revenue:</strong> {investorData.financialProjections.revenue}</li>
              <li><strong>Projected Profit:</strong> {investorData.financialProjections.profit}</li>
              <li><strong>YoY Growth:</strong> {investorData.financialProjections.growth}</li>
            </ul>
          </div>

          {/* Growth Metrics */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Live Growth Metrics</h2>
            <ul className="space-y-2 text-gray-300">
              <li><strong>Monthly Active Users (MAU):</strong> {investorData.growthMetrics.mau}</li>
              <li><strong>Churn Rate:</strong> {investorData.growthMetrics.churnRate}</li>
              <li><strong>Customer Lifetime Value (LTV):</strong> {investorData.growthMetrics.ltv}</li>
            </ul>
          </div>

          {/* ROI Calculator */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">ROI Calculator</h2>
            <p className="text-gray-300 mb-4">Calculate your potential return on investment with The WETT Collective.</p>
            <div className="flex gap-4">
                <input type="number" placeholder="Investment Amount" className="bg-gray-700 text-white p-2 rounded-lg w-full" />
                <button className="bg-wett-gold text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 whitespace-nowrap">
                    Calculate
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
