import React, { useEffect, useState } from 'react';

const Clock = () => {
    const defaultState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [estado, setEstado] = useState(defaultState);

    //tick()
    const actualiza = ()=>{
        setEstado((prevEstado)=>{
            return {
                ...prevEstado,
                fecha: new Date(),
                edad: prevEstado.edad + 1
            }
        }            
        );
    }

    useEffect(() => {
        //componentDidMount
        const timerID = setInterval(()=>{
            actualiza()},
            1000
        );

        //componentWillUnmount
        return (() => {
            clearInterval(timerID);
            console.log("Unmounted");
        });
    }, []);

    //render()
    return (
        <div>
            <h2>
                Hora Actual:
                {estado.fecha.toLocaleTimeString()}
            </h2>
            <h3>{estado.nombre} {estado.apellidos}</h3>
            <h1>Edad: {estado.edad}</h1>
        </div>
    )
}

export default Clock;