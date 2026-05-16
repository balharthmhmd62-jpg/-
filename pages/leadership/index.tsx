import React, { useEffect, useState } from 'react';
import LeadershipCard from '@/components/LeadershipCard';

const LeadershipPage: React.FC = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/leadership');
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error('Failed to fetch members:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-center">فريق القيادة</h1>
        <p className="text-gray-600 text-center mb-12 text-lg">
          التعرف على أعضاء فريق القيادة المتميزين
        </p>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">جاري التحميل...</p>
          </div>
        ) : members.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member: any) => (
              <LeadershipCard key={member.id} {...member} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">لا يوجد أعضاء فريق حالياً</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadershipPage;
