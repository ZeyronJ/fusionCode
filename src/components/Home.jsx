import React from 'react';
import { handleMenuClick } from '../utils/domUtils';

export default function TaskForceTI() {
  return (
    <section id='home' className='py-20 bg-gray-900 text-white mt-14'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-4'>
          Soluciones de Outsourcing Tecnológico a tu Alcance
        </h2>
        <p className='mb-8 text-xl'>
          Ofrecemos servicios de outsourcing de desarrolladores, equipos
          completos y consultoría técnica para impulsar tu negocio.
        </p>
        <button
          className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => handleMenuClick('contact')}
        >
          Solicita tu equipo especializado
        </button>
      </div>
    </section>
  );
}
