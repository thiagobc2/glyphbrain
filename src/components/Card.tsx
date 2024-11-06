import React, { useState } from 'react';

// import { Container } from './styles';

// Interface do vocabulário
interface VocabularioItem {
  palavra: string;
  pronuncia: string;
  traducao: string;
}

const Card: React.FC<VocabularioItem> = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Função para alternar o lado do card
  const toggleCard = () => {
    setIsFlipped((prev) => !prev);
  };
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      flex: 1,
      minWidth: '200px',
      height: '150px',
      margin: '10px',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: isFlipped ? 'lightgreen' : '#fff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      cursor: 'pointer'
    }}
    >
      {/* Condicional para mostrar a frente ou o verso */}
      {isFlipped ? (
        <div>
          <h3 style={{
            fontSize: '15px',
          }}>Tradução:</h3>
          <p style={{
            fontSize: '20px',
            fontWeight: 'bold'
          }}>{props.traducao}</p>
        </div>
      ) : (
        <div>
          <h3 style={{
            fontSize: '25px',
            fontWeight: 'bold'
          }}>{props.palavra}</h3>
          <p style={{ fontSize: '15px' }}>({props.pronuncia})</p>
        </div>
      )}
      {/* Botão para alternar entre frente e verso */}
      <button onClick={toggleCard} style={{
        marginTop: '10px',
        border: '1px solid',
        padding: '5px 15px',
        borderRadius: '10px',
        backgroundColor: isFlipped ? '#fff' : 'lightgreen'
      }}>
        {isFlipped ? 'Mostrar Frente' : 'Mostrar Verso'}
      </button>
    </div>
  );
}

export default Card;