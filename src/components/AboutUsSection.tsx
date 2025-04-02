import React from 'react';
import Image from 'next/image';
import { FaDumbbell, FaUsers, FaAward, FaHeart } from 'react-icons/fa';

interface AboutUsSectionProps {
  className?: string;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ className = '' }) => {
  return (
    <section dir="rtl" className={`py-16 bg-primary-light ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">אודותינו</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/gym-interior.jpg"
              alt="מכון כושר nnnn - אימון איכותי"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-secondary bg-opacity-20"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-secondary">ברוכים הבאים ל-nnnn</h3>
            <p className="text-lg leading-relaxed">
              כבר למעלה מ-10 שנים שאנחנו ב-nnnn מובילים את תעשיית הכושר בישראל, עם מחויבות בלתי מתפשרת למצוינות ושירות מקצועי.
              הוקמנו בשנת 2013 מתוך אהבה אמיתית לכושר ורצון לספק סביבת אימון מתקדמת, תומכת ומקצועית לכל אחד ואחת.
            </p>
            
            <div className="border-r-4 border-secondary pr-4 my-6">
              <p className="text-lg italic">
                "המשימה שלנו היא להעניק לכל מתאמן את הכלים, הידע והתמיכה להשיג את יעדי הכושר והבריאות שלו, תוך שמירה על סטנדרטים גבוהים של מקצועיות ושירות."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-secondary text-white p-3 rounded-full">
                  <FaDumbbell className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">מקצועיות</h4>
                  <p>צוות מדריכים מוסמך ומנוסה המתמחה בתחומי אימון מגוונים</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-secondary text-white p-3 rounded-full">
                  <FaUsers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">קהילתיות</h4>
                  <p>יצירת סביבה תומכת ומעודדת לכל המתאמנים שלנו</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-secondary text-white p-3 rounded-full">
                  <FaAward className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">איכות</h4>
                  <p>ציוד מתקדם וחדשני בסביבה נקייה ומזמינה</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-secondary text-white p-3 rounded-full">
                  <FaHeart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">התאמה אישית</h4>
                  <p>תוכניות אימון מותאמות אישית לכל מתאמן ומתאמנת</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-secondary">הצוות שלנו</h3>
            <p className="text-lg mt-2">המדריכים המקצועיים שילוו אתכם להצלחה</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((trainer) => (
              <div key={trainer} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={`/images/trainer-${trainer}.jpg`}
                    alt={`מאמן ${trainer}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-xl text-secondary">שם המאמן {trainer}</h4>
                  <p className="text-gray-600">מומחה באימוני {trainer % 2 === 0 ? 'כוח' : 'סיבולת'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;