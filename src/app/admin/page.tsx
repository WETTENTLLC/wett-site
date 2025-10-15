'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch('/api/admin/applications')
      .then(r => r.json())
      .then(data => setApplications(data.applications || []));
  }, []);

  const approveApplication = async (id: number, email: string, name: string) => {
    await fetch('/api/admin/approve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, email, name })
    });
    
    setApplications(applications.filter((app: any) => app.id !== id));
    alert('Application approved! User account created.');
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-wett-gold mb-8">Admin Dashboard</h1>
      
      <div className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Pending Applications ({applications.length})</h2>
        
        {applications.length === 0 ? (
          <p className="text-gray-400">No pending applications</p>
        ) : (
          <div className="space-y-6">
            {applications.map((app: any) => (
              <div key={app.id} className="bg-gray-700 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-wett-gold font-bold">Name:</p>
                    <p className="text-white">{app.full_name}</p>
                  </div>
                  <div>
                    <p className="text-wett-gold font-bold">Email:</p>
                    <p className="text-white">{app.email}</p>
                  </div>
                  <div>
                    <p className="text-wett-gold font-bold">Phone:</p>
                    <p className="text-white">{app.phone}</p>
                  </div>
                  <div>
                    <p className="text-wett-gold font-bold">Location:</p>
                    <p className="text-white">{app.location}</p>
                  </div>
                  <div>
                    <p className="text-wett-gold font-bold">Age:</p>
                    <p className="text-white">{app.age}</p>
                  </div>
                  <div>
                    <p className="text-wett-gold font-bold">Instagram:</p>
                    <p className="text-white">{app.instagram || 'N/A'}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-wett-gold font-bold mb-2">Experience:</p>
                  <p className="text-gray-300">{app.experience}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-wett-gold font-bold mb-2">Why Join:</p>
                  <p className="text-gray-300">{app.why}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-wett-gold font-bold mb-2">Goals:</p>
                  <p className="text-gray-300">{app.goals}</p>
                </div>
                
                <button
                  onClick={() => approveApplication(app.id, app.email, app.full_name)}
                  className="bg-wett-gold text-black px-6 py-3 rounded font-bold hover:bg-yellow-400 transition"
                >
                  Approve & Create Account
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
