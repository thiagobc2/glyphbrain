import React, { useState, useEffect } from 'react';
import { FaEye, FaHeadSideVirus } from "react-icons/fa";

// Interface do vocabulário
interface VocabularioItem {
  palavra: string;
  pronuncia: string;
  traducao: string;
  views: number;
  remembers: number;
  onRemember: (remembered: boolean) => void; // Callback para "Lembrei" ou "Não lembrei"
}

const Card: React.FC<VocabularioItem> = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Função para alternar o lado do card
  const toggleCard = () => {
    setIsFlipped((prev) => !prev);
  };

  // Sempre que a palavra mudar, o card volta para a frente
  useEffect(() => {
    setIsFlipped(false);
  }, [props.palavra]);

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      minWidth: 'calc(100% - 40px)',
      minHeight: '400px',
      margin: '20px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: isFlipped ? 'lightgreen' : '#fff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      cursor: 'pointer',
    }}
    >
      {/* Condicional para mostrar a frente ou o verso */}
      {isFlipped ? (
        <div>
          <div>
            <h3 style={{ fontSize: '25px', fontWeight: 'bold' }}>{props.palavra}</h3>
            <p style={{ fontSize: '15px' }}>({props.pronuncia})</p>
          </div>
          <div style={{
            margin: '20px',
            borderBottom: '2px solid #444',

          }} />
          <h3 style={{ fontSize: '15px' }}>Tradução:</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{props.traducao}</p>
          <div style={{ marginTop: '20px' }}>
            <div style={{ margin: '10px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', borderRadius: '5px', border: '1px solid', background: '#e9e9e9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaEye />
                <strong>{props.views}</strong>
              </div>
              |
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaHeadSideVirus />
                <strong>{props.remembers}</strong>
              </div>
            </div>

            <button
              onClick={() => props.onRemember(false)} // Não lembrei
              style={{
                padding: '10px 20px',
                background: '#DC3545',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '10px',
              }}
            >
              Não Lembrei
            </button>
            <button
              onClick={() => props.onRemember(true)} // Lembrei!
              style={{
                padding: '10px 20px',

                background: '#28A745',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Lembrei!
            </button>
          </div>
        </div >
      ) : (
        <div>
          <h3 style={{ fontSize: '25px', fontWeight: 'bold' }}>{props.palavra}</h3>
          <p style={{ fontSize: '15px' }}>({props.pronuncia})</p>
        </div>
      )}
      {/* Botão para alternar entre frente e verso */}
      {!isFlipped &&
        <button
          onClick={toggleCard}
          style={{
            marginTop: '10px',
            border: '1px solid',
            padding: '5px 15px',
            borderRadius: '10px',
            backgroundColor: isFlipped ? '#fff' : 'lightgreen',
          }}
        >
          Mostrar Verso
        </button>
      }
    </div >
  );
};

export default Card;