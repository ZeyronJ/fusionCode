import React from 'react';
import { Code, Users, Headphones } from 'lucide-react';

export const Services = () => {
  return (
    <section id='services' className='py-10'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-10 text-center text-white'>
          Nuestros Servicios de Outsourcing
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
          <div className='bg-slate-900 text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <Code size={48} className='text-blue-500 mb-4' />
            <h3 className='text-xl font-semibold mb-4'>
              Outsourcing de Desarrolladores
            </h3>
            <p>
              Provisión de talento especializado para tus proyectos de
              desarrollo.
            </p>
          </div>
          <div className='bg-slate-900 text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <Users size={48} className='text-blue-500 mb-4' />
            <h3 className='text-xl font-semibold mb-4'>
              Outsourcing de Equipos Completos
            </h3>
            <p>
              Equipos multidisciplinarios para proyectos de gran envergadura.
            </p>
          </div>
          <div className='bg-slate-900 text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <Headphones size={48} className='text-blue-500 mb-4' />
            <h3 className='text-xl font-semibold mb-4'>
              Consultoría Técnica y Soporte
            </h3>
            <p>
              Mantenimiento y mejoras continuas para tus sistemas y
              aplicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
