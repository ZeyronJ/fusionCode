import React from 'react';
import { Shuffle, PiggyBank, Briefcase } from 'lucide-react';

export const Benefits = () => {
  return (
    <section id='benefits' className='py-10'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-10 text-center text-white'>
          Beneficios del Outsourcing
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
          <div className='bg-slate-900 text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <Shuffle size={48} className='text-blue-500 mb-4' />
            <h3 className='text-xl font-semibold mb-4'>Flexibilidad</h3>
            <p>
              Adapta rápidamente tu equipo según las necesidades de tu proyecto.
            </p>
          </div>
          <div className='bg-slate-900 text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <PiggyBank size={48} className='text-blue-500 mb-4' />
            <h3 className='text-xl font-semibold mb-4'>Ahorro de Costos</h3>
            <p>Reduce gastos operativos y de contratación a largo plazo.</p>
          </div>
          <div className='bg-slate-900 text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <Briefcase size={48} className='text-blue-500 mb-4' />
            <h3 className='text-xl font-semibold mb-4'>
              Acceso a Talento Especializado
            </h3>
            <p>
              Trabaja con expertos en las últimas tecnologías y metodologías.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
