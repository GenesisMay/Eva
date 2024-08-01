import React, { useState } from 'react'

export const Numeros = () => {
    const [pares, setPares] = useState <number[]>([]);
    const [impares, setImpares] = useState<number[]>([]);

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const clasificacionNum = () => {
        let numPares: number[] = [];
        let numImpares: number[] =[];
        
        numeros.forEach(numero => { 
        if (numero % 2 === 0) {
        numPares.push(numero);
        } else {
        numImpares.push(numero);
        }
    });
    
    setPares(numPares);
    setImpares(numImpares);
};

    return (
    <div>
        <h1>BIENVENIDO</h1>
        <p>Vector: {numeros.join(', ')}</p>
        <button 
        onClick={clasificacionNum}
        >Clasificar
        </button>
        <p>Pares: {pares.join(', ')}</p>
        <p>Impares: {impares.join(', ')}</p>
    </div>
    )
}