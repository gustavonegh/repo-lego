import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"; 
import { Button } from "./Button";
import { Link } from 'react-router-dom';

export const HamburguerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <nav>
           <Button onClick={toggleMenu} className="md:hidden p-2 ">
                <FontAwesomeIcon icon={faBars} className="text-black w-6 h-6"/> 
           </Button>
           {isOpen && (
                <>
                    {/* Fondo semitransparente */}
                    <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}/>
                    
                    {/* Menú hamburguesa */}
                    <section className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>    

                        <div className="flex flex-col items-start space-y-4 p-4 h-full">
                            {/* Botón de cierre */}
                            <FontAwesomeIcon icon={faXmark} className="text-black w-6 h-6 cursor-pointer" onClick={toggleMenu} />
                            <hr className="border-t border-gray-300 w-full " />
                            
                            <ul className="space-y-4 text-p-desktop">
                                <li>
                                    <Link
                                        to='/'
                                        onClick={() => {toggleMenu(); window.scrollTo({ top: 0, behavior: 'smooth' });}}
                                        className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium pb-1 after:absolute after:block after:content-[''] after:h-0.5 after:bg-gray-900 after:w-0 hover:after:w-full after:left-0 after:bottom-0 after:transition-all after:duration-300"
                                    >
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="#servicios"
                                        onClick={toggleMenu}
                                        className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium pb-1 after:absolute after:block after:content-[''] after:h-0.5 after:bg-gray-900 after:w-0 hover:after:w-full after:left-0 after:bottom-0 after:transition-all after:duration-300"
                                    >
                                        Servicios
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#integrantes"
                                        onClick={toggleMenu}
                                        className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium pb-1 after:absolute after:block after:content-[''] after:h-0.5 after:bg-gray-900 after:w-0 hover:after:w-full after:left-0 after:bottom-0 after:transition-all after:duration-300"
                                    >
                                        Integrantes
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#ubicacion"
                                        onClick={toggleMenu}
                                        className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium pb-1 after:absolute after:block after:content-[''] after:h-0.5 after:bg-gray-900 after:w-0 hover:after:w-full after:left-0 after:bottom-0 after:transition-all after:duration-300"
                                    >
                                        Ubicación
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#consultas"
                                        onClick={toggleMenu}
                                        className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium pb-1 after:absolute after:block after:content-[''] after:h-0.5 after:bg-gray-900 after:w-0 hover:after:w-full after:left-0 after:bottom-0 after:transition-all after:duration-300"
                                    >
                                        Consultas
                                    </a>
                                </li>
                                
                            </ul>                                        
                        </div>
                    </section>
                </>
           )}
        </nav>
    )
}

