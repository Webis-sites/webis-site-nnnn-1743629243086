import React from 'react';
import { FaDumbbell, FaUsers, FaAppleAlt, FaRunning, FaHeartbeat, FaChartLine } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-primary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="text-secondary text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaDumbbell />,
      title: "אימון אישי",
      description: "תוכנית אימונים מותאמת אישית עם מאמן מקצועי שיעזור לך להשיג את היעדים שלך."
    },
    {
      icon: <FaUsers />,
      title: "אימוני קבוצות",
      description: "מגוון רחב של שיעורים קבוצתיים מאתגרים ומהנים בהדרכת מדריכים מוסמכים."
    },
    {
      icon: <FaAppleAlt />,
      title: "ייעוץ תזונתי",
      description: "תוכניות תזונה מותאמות אישית שיעזרו לך להשיג את היעדים הבריאותיים והגופניים שלך."
    },
    {
      icon: <FaRunning />,
      title: "אימוני כושר פונקציונלי",
      description: "אימונים המתמקדים בשיפור היכולות היומיומיות שלך ומחזקים את הגוף בצורה מאוזנת."
    },
    {
      icon: <FaHeartbeat />,
      title: "אימוני קרדיו",
      description: "מגוון אימוני קרדיו לשיפור סיבולת לב-ריאה ושריפת קלוריות יעילה."
    },
    {
      icon: <FaChartLine />,
      title: "מעקב התקדמות",
      description: "מערכת מעקב מתקדמת שמאפשרת לך לראות את ההתקדמות שלך ולהתאים את התוכנית בהתאם."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dir-rtl" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">השירותים שלנו</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון רחב של שירותי כושר מקצועיים המותאמים לכל רמה וצורך, כדי לעזור לך להשיג את המטרות האישיות שלך
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;