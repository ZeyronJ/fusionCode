import React from 'react';

export const Team = () => {
  const teamMembers = [
    {
      name: 'Cristobal Troncoso',
      role: 'Ingeniero DevOps',
      image: 'foto.webp',
    },
    {
      name: 'Sebastian Ignacio',
      role: 'Desarrollador Backend',
      image: 'foto.webp',
    },
    {
      name: 'Marco Vargas',
      role: 'Diseñadora UX/UI',
      image: 'foto.webp',
    },
    {
      name: 'Javier Mamani',
      role: 'Desarrollador Backend',
      image: 'foto.webp',
    },
  ];

  return (
    <section id='team' className='py-10'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-10 text-center text-white'>
          Nuestro Equipo
        </h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 px-4'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className='relative group overflow-hidden rounded-lg' // Añadir 'overflow-hidden'
            >
              {/* Contenedor para controlar mejor la imagen */}
              <div className='overflow-hidden'>
                {/* Imagen con transición de escala */}
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full h-auto transform transition-transform duration-300 group-hover:scale-105'
                />
              </div>
              {/* Contenedor del texto con transición de opacidad */}
              <div className='absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-default'>
                <div className='text-white text-center'>
                  <p className='font-bold'>{member.name}</p>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
