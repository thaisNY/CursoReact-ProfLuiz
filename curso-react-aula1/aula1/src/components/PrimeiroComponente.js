import React from 'react'

const PrimeiroComponente = () => {
    const nome = "Thais Rodrigues"
    const aluno ={
        nome: "Thais Rodrigues",
        curso: "React",
    }

  return (
    <div>
        <h1>Primeiro Componente</h1>
        <p>Ola {nome}, seja Bem Vinda</p>
        <p>Esta matriculada em {aluno.curso}</p>
        <p>{4 + 4}</p>
        <p>{console.log("Ola Mundo")}</p>
        <img src="./image.jpg" alt="" />
    </div>
  )
}

export default PrimeiroComponente