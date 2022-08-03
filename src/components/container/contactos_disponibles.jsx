import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/forms/contactoComponent';




const ContactosDisponibles = () => {
    const defaultContact = new Contacto('Nathalia','Uribe','email@aol.com',true);
    return (
        <div>
            <div>
                <h1>
                    Disponibilidad de contactos:
                </h1>                
            </div>

            {/* TO DO: aplicar un for o un map para renderizar una lista de tarea  */}
            <ContactoComponent contacto={defaultContact}></ContactoComponent>       
        </div>
    );
};

export default ContactosDisponibles;
