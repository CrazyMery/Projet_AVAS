import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      id: 'budget',
      title: 'Budget Annuel',
      value: '+200K'
    },
    {
      id: 'projects',
      title: 'Projets Menés',
      value: '+20'
    },
    {
      id: 'participants',
      title: 'Participants Formés',
      value: '108'
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      {/* 2025 en chiffres */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-bold mb-6 md:mb-10">2025 EN CHIFFRES</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 text-white">
          <div className="bg-blue-600 w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-center px-3 md:px-4 text-xs md:text-sm">
            <div>
              <p>10 collaborateurs</p>
              <p>8 ETP</p>
              <p>Équipe mixte</p>
              <p>50% femmes</p>
              <p>50% hommes</p>
            </div>
          </div>
          <div className="bg-red-400 md:-mx-5 w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-center px-3 md:px-4 text-xs md:text-sm">
            <div>
              <p>+260 familles adhérentes</p>
              <p>+80 bénévoles actifs</p>
              <p>3 pôles structurants</p>
            </div>
          </div>
          <div className="bg-yellow-400 text-black w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-center px-3 md:px-4 text-xs md:text-sm">
            <div>
              <p>Équipe d’administrateurs</p>
              <p>intergénérationnelle</p>
              <p>6 membres du bureau</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;