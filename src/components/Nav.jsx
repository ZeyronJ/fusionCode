import React, { useState } from 'react';
import { handleMenuClick } from '../utils/domUtils';
import { Menu, X } from 'lucide-react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section) => {
    handleMenuClick(section);
    setIsOpen(false);
  };

  return (
    <nav className='w-full border-b border-b-slate-950 fixed bg-slate-950/50 backdrop-filter backdrop-blur-sm z-10 shadow-md'>
      <div className='container flex items-center justify-between sm:justify-center py-2 px-4 mx-auto text-white'>
        <img src='logo.webp' alt='logo' width={40} className='mr-4' />

        {/* Mobile menu button */}
        <div className='flex sm:hidden'>
          <a
            href='https://wa.me/56956109988' // Cambia 1234567890 por el número de teléfono real
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-white hover:text-neutral-200'
          >
            <img
              src='wtsp.webp' // Asegúrate de tener un ícono de WhatsApp
              alt='WhatsApp'
              width={40}
              className='mr-2'
            />
          </a>
          <button onClick={toggleMenu} className=''>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className='hidden sm:flex items-center font-semibold text-xl'>
          <li className='mr-4 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('home')}>Inicio</button>
          </li>
          <li className='mr-4 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('services')}>
              Servicios
            </button>
          </li>
          <li className='mr-4 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('benefits')}>
              Beneficios
            </button>
          </li>
          <li className='mr-4 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('team')}>Equipo</button>
          </li>
          <li className='mr-4 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('contact')}>Contacto</button>
          </li>
          {/* Botón de WhatsApp */}
          <li className='ml-4'>
            <a
              href='https://wa.me/56956109988' // Cambia 1234567890 por el número de teléfono real
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center hover:text-neutral-200'
            >
              <img
                src='wtsp.webp' // Asegúrate de tener un ícono de WhatsApp
                alt='WhatsApp'
                width={40}
                className='mr-2'
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden transition-all duration-300 ease-in-out text-white`}
      >
        <ul className='flex flex-col font-semibold text-xl p-4'>
          <li className='py-2 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('home')}>Inicio</button>
          </li>
          <li className='py-2 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('services')}>
              Servicios
            </button>
          </li>
          <li className='py-2 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('benefits')}>
              Beneficios
            </button>
          </li>
          <li className='py-2 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('team')}>Equipo</button>
          </li>
          <li className='py-2 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('contact')}>Contacto</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
