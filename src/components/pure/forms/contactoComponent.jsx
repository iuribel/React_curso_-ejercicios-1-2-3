import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contacto.class';


const ContactoComponent = ({contacto}) => {
    return (
        <div>
        <h3>
            Nombre: {contacto.name}
        </h3>
        <h3>
            Apellido: {contacto.lastname}
        </h3>
        <h3>
            Email: {contacto.email}
        </h3>
        <h3>
            Estado: {contacto.connected ? 'Contacto En Linea':'Conatcto No Disponible'}
        </h3>
            
        </div>
    );
};


ContactoComponent.propTypes = {

    contacto: PropTypes.instanceOf(Contacto)

};


export default ContactoComponent;
