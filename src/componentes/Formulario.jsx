import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Formulario() {
    const [errors, setErrors] = useState({
        nombre: '',
        email: '',
        producto: false,
        comentario: false,
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: value.trim() === '',
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nombreInput = document.getElementById('nombre').value.trim();
        const emailInput = document.getElementById('exampleFormControlInput1').value.trim();

        const isValidNombre = /^[a-zA-Z\s]+$/.test(nombreInput);
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);

        let hasErrors = false;

        if (!isValidNombre) {
            hasErrors = true;
            setErrors((prevErrors) => ({
                ...prevErrors,
                nombre: 'El nombre solo debe contener letras',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                nombre: '',
            }));
        }

        if (!isValidEmail) {
            hasErrors = true;
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'El correo electrónico no es válido',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: '',
            }));
        }

        if (!hasErrors) {
            setSuccessMessage('Datos enviados correctamente. Nos comunicaremos contigo a la brevedad.');
            setTimeout(() => {
                setSuccessMessage('');
                document.getElementById('nombre').value = '';
                document.getElementById('exampleFormControlInput1').value = '';
                document.getElementById('producto').value = '';
                document.getElementById('exampleFormControlTextarea1').value = '';
                setErrors({
                    nombre: '',
                    email: '',
                    producto: false,
                    comentario: false,
                });
            }, 5000); // 5 seconds
        }
    };

    return (
        <form className="p-4 border rounded bg-light shadow-sm" style={{ maxWidth: '700px', margin: '0 auto' }} onSubmit={handleSubmit}>
            <div className="mb-3 d-flex align-items-center">
                <label htmlFor="nombre" className="form-label text-start me-3" style={{ minWidth: '100px' }}>Nombre:</label>
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    className={`form-control ${errors.nombre ? 'is-invalid' : ''}`} 
                    placeholder="Ingresa tu nombre" 
                    onBlur={handleBlur} 
                />
            </div>
            {errors.nombre && <label className="text-danger" style={{ fontSize: '0.875rem' }}>{errors.nombre}</label>}

            <div className="mb-3 d-flex align-items-center">
                <label htmlFor="exampleFormControlInput1" className="form-label text-start me-3" style={{ minWidth: '100px' }}>Email:</label>
                <input 
                    type="email" 
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                    id="exampleFormControlInput1" 
                    name="email" 
                    placeholder="tucorreo@ejemplo.com" 
                    onBlur={handleBlur} 
                />
            </div>
            {errors.email && <label className="text-danger" style={{ fontSize: '0.875rem' }}>{errors.email}</label>}

            <div className="mb-3 d-flex align-items-center">
                <label htmlFor="producto" className="form-label text-start me-3" style={{ minWidth: '100px' }}>Producto:</label>
                <input 
                    type="text" 
                    id="producto" 
                    name="producto" 
                    className={`form-control ${errors.producto ? 'is-invalid' : ''}`} 
                    placeholder="Ingresa el producto" 
                    onBlur={handleBlur} 
                />
            </div>

            <div className="mb-3 d-flex align-items-center">
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-start me-3" style={{ minWidth: '100px' }}>Comentario:</label>
                <textarea 
                    className={`form-control ${errors.comentario ? 'is-invalid' : ''}`} 
                    id="exampleFormControlTextarea1" 
                    name="comentario" 
                    rows="3" 
                    onBlur={handleBlur} 
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Enviar</button>
            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
        </form>
    );
}

export default Formulario;
