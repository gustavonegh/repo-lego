import { Link } from 'react-router-dom'; 
import { HamburguerMenu } from './HamburguerMenu';
import { MapPin } from 'lucide-react';


export const Navbar = () => {
   
    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">  
            <section className='max-w-7xl mx-auto h-20 flex items-center justify-between px-4'>
                <div>
                    <p
                        className='cursor-pointer'
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    > 
                        Juzgado De Paz Lego N°3
                    </p>
                </div>
                
                <div className='flex items-center'>
                    <ul className='hidden md:flex space-x-4 md:space-x-8 text-p-desktop text-dark-gray items-center'>
                        <li>
                            <Link
                                to='/'
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium pb-1 after:absolute after:block after:content-[''] after:h-0.5 after:bg-gray-900 after:w-0 hover:after:w-full after:left-0 after:bottom-0 after:transition-all after:duration-300"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#servicios"
                                className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium pb-1 after:absolute after:block after:content-[''] after:h-0.5 after:bg-gray-900 after:w-0 hover:after:w-full after:left-0 after:bottom-0 after:transition-all after:duration-300"
                            >
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a
                                href="#integrantes"
                                className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium pb-1 after:absolute after:block after:content-[''] after:h-0.5 after:bg-gray-900 after:w-0 hover:after:w-full after:left-0 after:bottom-0 after:transition-all after:duration-300"
                            >
                                Integrantes
                            </a>
                        </li>
                        <li>
                            <a
                                href="#ubicacion"
                                className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium pb-1 after:absolute after:block after:content-[''] after:h-0.5 after:bg-gray-900 after:w-0 hover:after:w-full after:left-0 after:bottom-0 after:transition-all after:duration-300"
                            >
                                Ubicación
                            </a>
                        </li>
                        <li>
                            <a
                                href="#consultas"
                                className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium pb-1 after:absolute after:block after:content-[''] after:h-0.5 after:bg-gray-900 after:w-0 hover:after:w-full after:left-0 after:bottom-0 after:transition-all after:duration-300"
                            >
                                Consultas
                            </a>
                        </li>
                        
                        <li className="flex items-center gap-2 text-gray-700 font-medium ml-4" >
                            <div 
                                className="group flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-gray-800 font-medium transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer" 
                                onClick={() => window.location.href = '#ubicacion'}
                            >
                                <MapPin className="w-5 h-5 text-purple-700 transition-transform duration-200 group-hover:-translate-y-0.5" />
                                <span className="whitespace-nowrap tracking-wide">Ortiz de Ocampo 2247</span>
                            </div>
                        </li>
                    </ul>
                    <div className='flex items-center space-x-3 md:space-x-4'>
                        <HamburguerMenu />
                    </div>
                </div>
            </section>
        </nav>
    );
};
