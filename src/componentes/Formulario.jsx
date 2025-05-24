import React from 'react';

function Formulario() {
    return (
        <form className="p-4 border rounded bg-light shadow-sm" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label" text>Nombre:</label>
                <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Ingresa tu nombre" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Correo electrónico</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Ejemplo de textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>
    );
}

export default Formulario;
