"use client";
import React, { useState, useEffect } from "react";
import { FaEye, FaCheck, FaTimes } from "react-icons/fa";

interface VocabularioItem {
  palavra: string;
  pronuncia: string;
  traducao: string;
  tags: string;
  views: number;
  remembers: number;
}

export default function ViewCards() {
  const initialVocabulary: VocabularioItem[] = [
  { palavra: "δικαιόω (39)", pronuncia: "dikaióo̱", traducao: "eu justifico, declaro justo", tags: "39", views: 0, remembers: 0 },
  { palavra: "δουλόω (8)", pronuncia: "doulóo̱", traducao: "eu escravizo", tags: "8", views: 0, remembers: 0 },
  { palavra: "ἐλευθερόω (7)", pronuncia: "eleutheróo̱", traducao: "eu liberto", tags: "7", views: 0, remembers: 0 },
  { palavra: "εὐχαριστέω (38)", pronuncia: "eucharistéō", traducao: "eu agradeço, dou graças", tags: "38", views: 0, remembers: 0 },
  { palavra: "ζηλόω (11)", pronuncia: "zēlóo̱", traducao: "eu mostro zelo, procuro com zelo; estou com inveja [zelar]", tags: "11", views: 0, remembers: 0 },
  { palavra: "σιγάω (10)", pronuncia: "sigáo̱", traducao: "eu me calo, fico quieto", tags: "10", views: 0, remembers: 0 },
  { palavra: "τιμάω (21)", pronuncia: "timáo̱", traducao: "eu honro, estimo; avalio", tags: "21", views: 0, remembers: 0 },
  { palavra: "ὑψόω (20)", pronuncia: "hypsóo̱", traducao: "eu elevo, exalto", tags: "20", views: 0, remembers: 0 },
  { palavra: "φωνέω (42)", pronuncia: "phōnéō", traducao: "eu emito som; clamo; chamo", tags: "42", views: 0, remembers: 0 },
  { palavra: "καρπός, ὁ (66)", pronuncia: "karpós, ho", traducao: "fruto", tags: "66", views: 0, remembers: 0 },
  { palavra: "μέν (180)", pronuncia: "mén", traducao: "partícula usada correlativamente, pospositiva; geralmente não é traduzida", tags: "180", views: 0, remembers: 0 },
  { palavra: "πάλιν (141)", pronuncia: "pálin", traducao: "outra vez, de novo", tags: "141", views: 0, remembers: 0 },
  { palavra: "πάσχω (42)", pronuncia: "páscho̱", traducao: "eu sofro", tags: "42", views: 0, remembers: 0 },
  { palavra: "τέ (215)", pronuncia: "té", traducao: "part. encl.: τε…τε ou τε…καί, tanto…como, não somente… mas também", tags: "215", views: 0, remembers: 0 },
  { palavra: "χωρίς (41)", pronuncia: "chorís", traducao: "à parte, separadamente; c. gen.: sem, à parte de; fora", tags: "41", views: 0, remembers: 0 }
];

  // const initialVocabulary: VocabularioItem[] = [
  //   { palavra: "ἀδύνατος, -ον (ἐστιν)", pronuncia: "adúnatos, -on (éstin)", traducao: "(é) impossível; impotente, fraco", tags: "10", views: 0, remembers: 0 },
  //   { palavra: "ἀντίχριστος, ὁ", pronuncia: "antíkhristos, ho", traducao: "anticristo", tags: "5", views: 0, remembers: 0 },
  //   { palavra: "ἄρα", pronuncia: "ára", traducao: "pois; portanto; então", tags: "49", views: 0, remembers: 0 },
  //   { palavra: "δεῖ", pronuncia: "deî", traducao: "é necessário; deve-se", tags: "101", views: 0, remembers: 0 },
  //   { palavra: "διὰ (+inf.)", pronuncia: "diá", traducao: "por causa de; por; porque", tags: "27", views: 0, remembers: 0 },
  //   { palavra: "διό", pronuncia: "dió", traducao: "por isso; portanto", tags: "53", views: 0, remembers: 0 },
  //   { palavra: "εἰς (+inf.)", pronuncia: "eís", traducao: "para; para que; de maneira que", tags: "63", views: 0, remembers: 0 },
  //   { palavra: "ἐν (+inf.)", pronuncia: "en", traducao: "enquanto; quando; ao + inf.; depois de + inf.; por + inf.", tags: "52", views: 0, remembers: 0 },
  //   { palavra: "ἔξεστι(ν)", pronuncia: "éxesti(n)", traducao: "é lícito; é permitido; é possível", tags: "32", views: 0, remembers: 0 },
  //   { palavra: "μετὰ (+inf.)", pronuncia: "metá", traducao: "depois de + inf.", tags: "15", views: 0, remembers: 0 },
  //   { palavra: "πρίν (+inf.)", pronuncia: "prín", traducao: "antes; antes de", tags: "13", views: 0, remembers: 0 },
  //   { palavra: "πρὸ (+inf.)", pronuncia: "pró", traducao: "antes; antes de", tags: "9", views: 0, remembers: 0 },
  //   { palavra: "πρὸς (+inf.)", pronuncia: "prós", traducao: "para; a fim de; assim que; de modo que", tags: "12", views: 0, remembers: 0 },
  //   { palavra: "σήμερον", pronuncia: "sḗmeron", traducao: "hoje", tags: "41", views: 0, remembers: 0 },
  //   { palavra: "συμφέρει", pronuncia: "symphérei", traducao: "convém; é melhor; é proveitoso", tags: "10", views: 0, remembers: 0 },
  //   { palavra: "φοβέομαι", pronuncia: "phobéomai", traducao: "eu temo; estou com medo; reverencio; respeito", tags: "95", views: 0, remembers: 0 },
  //   { palavra: "ὧδε", pronuncia: "hṓde", traducao: "aqui; para cá", tags: "61", views: 0, remembers: 0 },
  //   { palavra: "ὥστε", pronuncia: "hṓste", traducao: "por isso; portanto; de modo que; a fim de que; para", tags: "83", views: 0, remembers: 0 }
  // ];

  const [vocabulary, setVocabulary] = useState<VocabularioItem[]>(initialVocabulary);
  const [filteredVocabulary, setFilteredVocabulary] = useState<VocabularioItem[]>(initialVocabulary);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shownCards, setShownCards] = useState<VocabularioItem[]>([]);
  const [history, setHistory] = useState<Record<string, number[]>>({});
  const [feedback, setFeedback] = useState<{ idx: number; count: number; show: boolean; confetti: boolean }>({ idx: -1, count: 0, show: false, confetti: false });

  useEffect(() => {
    setFilteredVocabulary(vocabulary);
  }, [vocabulary]);

  useEffect(() => {
    setVocabulary(initialVocabulary);
    setFilteredVocabulary(initialVocabulary);
    setHistory({});
  }, [initialVocabulary]);

  // Cores para barra de acertos
  const getBarColor = (count: number) => {
    if (count >= 5) return '#d4f8e8'; // verde pastel
    if (count >= 2) return '#fff9c4'; // amarelo pastel
    if (count >= 1) return '#ffd6d6'; // vermelho pastel
    return '#f2f2f2'; // cinza claro
  };

  // Função para animar barra e feedback
  const handleCardFeedback = (idx: number, remembered: boolean) => {
    const item = filteredVocabulary[idx];
    const hist = history[item.palavra] || [];
    const prevArr = [...hist, remembered ? 1 : 0].slice(-5);
    const count = prevArr.reduce((a, b) => b === 1 ? a + 1 : 0, 0);
    setFeedback({ idx, count, show: true, confetti: count === 5 });
    setTimeout(() => setFeedback({ idx: -1, count: 0, show: false, confetti: false }), 1200);
  };

  // Confete visual (CSS)
  const Confetti = () => (
    <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, pointerEvents: 'none', zIndex: 10 }}>
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: 32, animation: 'confetti 1s linear' }}>🎉</span>
      </div>
      <style>{`@keyframes confetti { 0%{opacity:1;transform:scale(1);} 100%{opacity:0;transform:scale(2);} }`}</style>
    </div>
  );

  // Função para avançar o card e atualizar stats
  const handleNextCard = (remembered: boolean) => {
    if (filteredVocabulary.length === 0) return;
    const card = filteredVocabulary[currentIndex];
    // Atualiza views
    const updatedVocabulary = vocabulary.map((item: VocabularioItem) => {
      if (item.palavra === card.palavra) {
        return {
          ...item,
          views: item.views + 1
        };
      }
      return item;
    });
    // Atualiza histórico
    setHistory((prev: Record<string, number[]>) => {
      const prevArr = prev[card.palavra] || [];
      const newArr = [...prevArr, remembered ? 1 : 0].slice(-5);
      const newHistory: Record<string, number[]> = { ...prev, [card.palavra]: newArr };
      // Recalcula remembers para todos os cards
      setVocabulary((vocabulary: VocabularioItem[]) => vocabulary.map((item: VocabularioItem) => {
        const hist = newHistory[item.palavra] || [];
        return {
          ...item,
          remembers: hist.filter((v: number) => v === 1).length
        };
      }));
      // Próximo card
      const remainingCards = filteredVocabulary.filter((item: VocabularioItem) => !shownCards.includes(item) && item.palavra !== card.palavra);
      if (remainingCards.length === 0) return newHistory;
      // Score ponderado
      const scores = remainingCards.map((item: VocabularioItem) => {
        const hist = newHistory[item.palavra] || [];
        const isMemorized = hist.length === 5 && hist.every((v: number) => v === 1);
        const baseScore = (item.views + 1) / (hist.filter((v: number) => v === 1).length + 1);
        return isMemorized ? baseScore / 10 : baseScore;
      });
      const totalScore = scores.reduce((a: number, b: number) => a + b, 0);
      const rand = Math.random() * totalScore;
      let acc = 0;
      let nextIdx = 0;
      for (let i = 0; i < remainingCards.length; i++) {
        acc += scores[i];
        if (rand <= acc) {
          nextIdx = i;
          break;
        }
      }
      const nextCard = remainingCards[nextIdx];
      setCurrentIndex(filteredVocabulary.indexOf(nextCard));
      setShownCards([...shownCards, nextCard]);
      return newHistory;
    });
  };

  // Lista ordenada
  const sortedList = React.useMemo(() => {
    return [...filteredVocabulary].sort((a, b) => {
      if (b.views !== a.views) return b.views - a.views;
      return a.remembers - b.remembers;
    });
  }, [filteredVocabulary]);

  // Renderização principal
  return (
    <div style={{ width: '100%', maxWidth: 480, margin: '0 auto', marginTop: 24 }}>
      {/* Card principal */}
      <div style={{ position: 'relative', width: '100%', minHeight: 180, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #0002', marginBottom: 12, padding: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {filteredVocabulary.length > 0 && (() => {
          const item = filteredVocabulary[currentIndex];
          const hist = history[item.palavra] || [];
          let count = 0;
          for (let i = hist.length - 1; i >= 0 && hist[i] === 1; i--) count++;
          const barColor = getBarColor(count);
          return (
            <div style={{ width: '100%', textAlign: 'center' }}>
              <div style={{ fontWeight: 600, color: '#222', fontSize: 16, marginBottom: 2 }}>{item.palavra}</div>
              <div style={{ color: '#555', fontSize: 14 }}>{item.pronuncia}</div>
              <div style={{ color: '#333', fontSize: 14, marginBottom: 2 }}>{item.traducao}</div>
              <div style={{ display: 'flex', gap: 2, marginTop: 2 }}>
                {Array.from({ length: 5 }).map((_, i) => {
                  const val = hist[hist.length - 5 + i];
                  return (
                    <span key={i} style={{ fontSize: 14 }}>
                      {val === 1 ? '✅' : val === 0 ? '❌' : '⬜'}
                    </span>
                  );
                })}
              </div>
              {feedback.show && feedback.idx === currentIndex && (
                <div style={{ position: 'absolute', top: 4, left: 4, right: 4, fontSize: 13, color: barColor, fontWeight: 600, background: '#fff9', borderRadius: 4, padding: '2px 4px', zIndex: 2, pointerEvents: 'none' }}>
                  {feedback.confetti && <Confetti />}
                  {feedback.count}/5 acertos consecutivos!
                </div>
              )}
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <button
                  onClick={e => { e.stopPropagation(); handleNextCard(true); handleCardFeedback(currentIndex, true); }}
                  style={{ background: '#009900', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 14px', fontSize: 14, cursor: 'pointer', fontWeight: 500 }}
                >
                  <FaCheck style={{ marginRight: 4 }} /> Lembrei
                </button>
                <button
                  onClick={e => { e.stopPropagation(); handleNextCard(false); handleCardFeedback(currentIndex, false); }}
                  style={{ background: '#b00', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 14px', fontSize: 14, cursor: 'pointer', fontWeight: 500 }}
                >
                  <FaTimes style={{ marginRight: 4 }} /> Não lembrei
                </button>
              </div>
            </div>
          );
        })()}
      </div>
      {/* Lista compacta das palavras abaixo do card */}
      <div style={{ width: '100%', maxWidth: 420, margin: '0 auto', marginTop: 8, background: '#fafcff', borderRadius: 8, boxShadow: '0 1px 6px #0001', padding: '8px 0' }}>
        {filteredVocabulary.length > 0 && sortedList.map((item, idx) => {
          const hist = history[item.palavra] || [];
          let count = 0;
          for (let i = hist.length - 1; i >= 0 && hist[i] === 1; i--) count++;
          const barColor = getBarColor(count);
          return (
            <div key={item.palavra} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '6px 12px',
              borderBottom: '1px solid #eee',
              fontSize: 13,
              background: barColor,
              border: idx === currentIndex ? '2px solid #2196f3' : '2px solid transparent',
              cursor: 'pointer',
              transition: 'background 0.3s, border 0.2s'
            }} onClick={() => setCurrentIndex(idx)}>
              <span style={{ fontWeight: 600, color: '#222' }}>{item.palavra}</span>
              <span style={{ color: '#555', marginLeft: 8 }}>{item.pronuncia}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto', background: '#fff', borderRadius: 6, padding: '2px 8px', boxShadow: '0 1px 4px #0001' }}>
                <span style={{ display: 'flex', alignItems: 'center', fontSize: 13, color: '#0077cc' }}>
                  <FaEye style={{ marginRight: 3 }} />{item.views}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', fontSize: 13, color: '#009900' }}>
                  <FaCheck style={{ marginRight: 3 }} />{item.remembers}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
