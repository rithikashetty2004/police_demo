import React from 'react';

function AboutUs() {
  const departments = [
    {
      name: 'Traffic Department',
      description: 'Responsible for enforcing traffic laws and managing road safety across the region.',
      phone: '+91 011-23456789',
      email: 'traffic@indianpolice.gov.in',
    },
    {
      name: 'Criminal Investigation Department',
      description: 'Handles investigations of serious crimes, ensuring justice is served.',
      phone: '+91 011-23456780',
      email: 'cid@indianpolice.gov.in',
    },
    {
      name: 'Patrol Department',
      description: 'Provides round-the-clock patrolling to ensure public safety.',
      phone: '+91 011-23456781',
      email: 'patrol@indianpolice.gov.in',
    },
    {
      name: 'Community Relations Department',
      description: 'Focuses on building trust and strong relationships between the police and the community.',
      phone: '+91 011-23456782',
      email: 'community@indianpolice.gov.in',
    },
    {
      name: 'Cyber Crime Department',
      description: 'Specializes in combating cybercrime, protecting citizens from online threats.',
      phone: '+91 011-23456783',
      email: 'cybercrime@indianpolice.gov.in',
    },
  ];

  const stats = [
    { label: 'Crimes Solved', value: 85, color: 'bg-gradient-to-r from-blue-800 to-blue-600' },
    { label: 'Patrol Hours', value: 92, color: 'bg-gradient-to-r from-blue-800 to-blue-600' },
    { label: 'Traffic Violations Managed', value: 78, color: 'bg-gradient-to-r from-blue-800 to-blue-600' },
    { label: 'Community Events Held', value: 65, color: 'bg-gradient-to-r from-blue-800 to-blue-600' },
    { label: 'Cyber Crimes Resolved', value: 88, color: 'bg-gradient-to-r from-blue-800 to-blue-600' },
  ];

  return (
    <div className="min-h-screen bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        <p className="text-center mb-12">
          Welcome to the Indian Police Service. We are committed to maintaining law and order, protecting citizens, and providing justice. Learn more about our departments and the statistics that highlight our efforts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white text-navy p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">{dept.name}</h2>
              <p className="mb-4">{dept.description}</p>
              <p className="font-semibold">Contact Information:</p>
              <p>Phone: <a href={`tel:${dept.phone}`} className="text-navy">{dept.phone}</a></p>
              <p>Email: <a href={`mailto:${dept.email}`} className="text-navy">{dept.email}</a></p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white text-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">{stat.label}</h3>
              <div className="relative w-full bg-gray-300 rounded-full h-8 border border-gray-300">
                <div className={`${stat.color} absolute inset-0 h-full rounded-full text-center text-white flex items-center justify-center transition-all duration-500`} style={{ width: `${stat.value}%` }}>
                  <span className="font-semibold">{stat.value}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
