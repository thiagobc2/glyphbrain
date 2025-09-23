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
  const initialVocabulary: VocabularioItem[] = React.useMemo(() => [
  { palavra: "ἀναβαίνω (82)", pronuncia: "anavéno", traducao: "eu subo", tags: "82", views: 0, remembers: 0 },
  { palavra: "γάρ (1042)", pronuncia: "gar", traducao: "pois, portanto (conj. causal, posposta)", tags: "1042", views: 0, remembers: 0 },
  { palavra: "γέ (28)", pronuncia: "ge", traducao: "partíc. enfática: na verdade, realmente, de fato, pelo menos", tags: "28", views: 0, remembers: 0 },
  { palavra: "ἐάν (351)", pronuncia: "ian", traducao: "se (c. o subj.)", tags: "351", views: 0, remembers: 0 },
  { palavra: "εἰ (507)", pronuncia: "i", traducao: "se (c. o ind.)", tags: "507", views: 0, remembers: 0 },
  { palavra: "ἐκεῖνος, -η, -ο (265)", pronuncia: "ekínos, -i, -o", traducao: "aquele, aquela, aquilo", tags: "265", views: 0, remembers: 0 },
  { palavra: "ἐντολή, -ῆς, ἡ (67)", pronuncia: "endolí", traducao: "mandamento, ordem", tags: "67", views: 0, remembers: 0 },
  { palavra: "ἐπιγινώσκω (44)", pronuncia: "epyinósko", traducao: "eu conheço (bem); entendo; reconheço", tags: "44", views: 0, remembers: 0 },
  { palavra: "καταβαίνω (82)", pronuncia: "katavéno", traducao: "eu desço", tags: "82", views: 0, remembers: 0 },
  { palavra: "μετανοέω (34)", pronuncia: "metanoéo", traducao: "eu mudo a mente; mudo a vida/comportamento; me converto; me arrependo", tags: "34", views: 0, remembers: 0 },
  { palavra: "ὅς, ἥ, ὅ (1365)", pronuncia: "os, i, o", traducao: "o qual, a qual; que (pron. relativo)", tags: "1365", views: 0, remembers: 0 },
  { palavra: "ὅστις, ἥτις, ὅ τι (148)", pronuncia: "óstis, ítis, ó ti", traducao: "quem quer que, qualquer que; que (freq. = ὅς, ἥ, ὅ)", tags: "148", views: 0, remembers: 0 },
  { palavra: "οὗτος, αὕτη, τοῦτο (1391)", pronuncia: "útos, aftí, túto", traducao: "este, esta, isto", tags: "1391", views: 0, remembers: 0 },
  { palavra: "παραλαμβάνω (50)", pronuncia: "paralambáno", traducao: "eu tomo, levo comigo; recebo; aceito", tags: "50", views: 0, remembers: 0 },
  { palavra: "πᾶς, πᾶσα, πᾶν (1244)", pronuncia: "pas, pasa, pan", traducao: "todo; cada; inteiro", tags: "1244", views: 0, remembers: 0 },
  { palavra: "προσφέρω (47)", pronuncia: "prosféro", traducao: "eu trago; ofereço", tags: "47", views: 0, remembers: 0 },
  { palavra: "τίς, τί (555)", pronuncia: "tis, ti", traducao: "quem? que? qual? que tipo de? (pron. interrogativo)", tags: "555", views: 0, remembers: 0 },
  { palavra: "τοιοῦτος, -αὕτη, -οῦτον (57)", pronuncia: "tióutos, afti, úton", traducao: "tal, desse tipo", tags: "57", views: 0, remembers: 0 },
  { palavra: "τις, τι (526)", pronuncia: "tis, ti", traducao: "qualquer um, algum; alguém; alguma coisa (pron. indefinido, enclítico)", tags: "526", views: 0, remembers: 0 }
], []);


//   const initialVocabulary: VocabularioItem[] = React.useMemo(() => [
//   { palavra: "εἰ (517)", pronuncia: "ei", traducao: "se (c. o ind.)", tags: "517", views: 0, remembers: 0 },
//   { palavra: "ἄν (167)", pronuncia: "án", traducao: "part. condicional/eventualidade (não traduzida)", tags: "167", views: 0, remembers: 0 },
//   { palavra: "ἐάν (351)", pronuncia: "eán", traducao: "se (c. o subj.)", tags: "351", views: 0, remembers: 0 },
//   { palavra: "ἀδικία, ἡ (25)", pronuncia: "adikía, he̱", traducao: "injustiça, maldade", tags: "25", views: 0, remembers: 0 },
//   { palavra: "ἄχρι / ἄχρις (49)", pronuncia: "áchri / áchris", traducao: "até; até que (c. gen.)", tags: "49", views: 0, remembers: 0 },
//   { palavra: "ἴδιος, -α, -ον (114)", pronuncia: "ídios, -a, -on", traducao: "próprio", tags: "114", views: 0, remembers: 0 },
//   { palavra: "καθαρίζω (31)", pronuncia: "katharízō", traducao: "eu limpo, purifico [catarse]", tags: "31", views: 0, remembers: 0 },
//   { palavra: "λοιπός, -ή, -όν (55)", pronuncia: "loipós, -ē, -on", traducao: "restante; outro; adv.: daqui para frente; finalmente", tags: "55", views: 0, remembers: 0 },
//   { palavra: "μέσος, -η, -ον (58)", pronuncia: "mésos, -e̱, -on", traducao: "(que está) no meio; do meio", tags: "58", views: 0, remembers: 0 },
//   { palavra: "μνημεῖον, τό (40)", pronuncia: "mnēmeîon, tó", traducao: "túmulo, tumba", tags: "40", views: 0, remembers: 0 },
//   { palavra: "οἶδα (318)", pronuncia: "oîda", traducao: "sei, conheço (perfeito com sentido presente)", tags: "318", views: 0, remembers: 0 },
//   { palavra: "ὅμοιος, -α, -ον (45)", pronuncia: "hómoios, -a, -on", traducao: "semelhante [homônimo]", tags: "45", views: 0, remembers: 0 },
//   { palavra: "ψεύδομαι (12)", pronuncia: "pseúdomai", traducao: "eu minto; sou falso", tags: "12", views: 0, remembers: 0 },
//   { palavra: "ψεύστης, ὁ (10)", pronuncia: "pseústēs, ho", traducao: "mentiroso", tags: "10", views: 0, remembers: 0 }
// ], []);

  // const initialVocabulary: VocabularioItem[] = React.useMemo(() => [
  //   { palavra: "δικαιόω (39)", pronuncia: "dikaióo̱", traducao: "eu justifico, declaro justo", tags: "39", views: 0, remembers: 0 },
  //   { palavra: "δουλόω (8)", pronuncia: "doulóo̱", traducao: "eu escravizo", tags: "8", views: 0, remembers: 0 },
  //   { palavra: "ἐλευθερόω (7)", pronuncia: "eleutheróo̱", traducao: "eu liberto", tags: "7", views: 0, remembers: 0 },
  //   { palavra: "εὐχαριστέω (38)", pronuncia: "eucharistéō", traducao: "eu agradeço, dou graças", tags: "38", views: 0, remembers: 0 },
  //   { palavra: "ζηλόω (11)", pronuncia: "zēlóo̱", traducao: "eu mostro zelo, procuro com zelo; estou com inveja [zelar]", tags: "11", views: 0, remembers: 0 },
  //   { palavra: "σιγάω (10)", pronuncia: "sigáo̱", traducao: "eu me calo, fico quieto", tags: "10", views: 0, remembers: 0 },
  //   { palavra: "τιμάω (21)", pronuncia: "timáo̱", traducao: "eu honro, estimo; avalio", tags: "21", views: 0, remembers: 0 },
  //   { palavra: "ὑψόω (20)", pronuncia: "hypsóo̱", traducao: "eu elevo, exalto", tags: "20", views: 0, remembers: 0 },
  //   { palavra: "φωνέω (42)", pronuncia: "phōnéō", traducao: "eu emito som; clamo; chamo", tags: "42", views: 0, remembers: 0 },
  //   { palavra: "καρπός, ὁ (66)", pronuncia: "karpós, ho", traducao: "fruto", tags: "66", views: 0, remembers: 0 },
  //   { palavra: "μέν (180)", pronuncia: "mén", traducao: "partícula usada correlativamente, pospositiva; geralmente não é traduzida", tags: "180", views: 0, remembers: 0 },
  //   { palavra: "πάλιν (141)", pronuncia: "pálin", traducao: "outra vez, de novo", tags: "141", views: 0, remembers: 0 },
  //   { palavra: "πάσχω (42)", pronuncia: "páscho̱", traducao: "eu sofro", tags: "42", views: 0, remembers: 0 },
  //   { palavra: "τέ (215)", pronuncia: "té", traducao: "part. encl.: τε…τε ou τε…καί, tanto…como, não somente… mas também", tags: "215", views: 0, remembers: 0 },
  //   { palavra: "χωρίς (41)", pronuncia: "chorís", traducao: "à parte, separadamente; c. gen.: sem, à parte de; fora", tags: "41", views: 0, remembers: 0 }
  // ], []);

  const [vocabulary, setVocabulary] = useState<VocabularioItem[]>(initialVocabulary);
  const [filteredVocabulary, setFilteredVocabulary] = useState<VocabularioItem[]>(initialVocabulary);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shownCards, setShownCards] = useState<VocabularioItem[]>([]);
  const [history, setHistory] = useState<Record<string, number[]>>({});
  const [feedback, setFeedback] = useState<{ idx: number; count: number; show: boolean; confetti: boolean }>({ idx: -1, count: 0, show: false, confetti: false });
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    setFilteredVocabulary(vocabulary);
  }, [vocabulary]);

  useEffect(() => {
    const savedStats = localStorage.getItem('vocabularyStats');
    const savedHistory = localStorage.getItem('vocabularyHistory');
    let historyObj: Record<string, number[]> = {};
    if (savedHistory) {
      historyObj = JSON.parse(savedHistory);
      setHistory(historyObj);
    }
    if (savedStats) {
      const stats = JSON.parse(savedStats);
      setVocabulary(prev => prev.map(item => {
        const key = item.palavra;
        let remembers = 0;
        if (historyObj[key]) {
          remembers = historyObj[key].filter((v: number) => v === 1).length;
        } else if (stats[key]) {
          remembers = stats[key].remembers;
        }
        return stats[key]
          ? { ...item, views: stats[key].views, remembers }
          : { ...item, remembers };
      }));
    }
  }, []);

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
    
    // Reset para frente do card
    setShowBack(false);
    
    // Atualiza views
    setVocabulary(vocabulary => vocabulary.map((item: VocabularioItem) => {
      if (item.palavra === card.palavra) {
        return {
          ...item,
          views: item.views + 1
        };
      }
      return item;
    }));
    // Atualiza histórico
    setHistory((prev: Record<string, number[]>) => {
      const prevArr = prev[card.palavra] || [];
      const newArr = [...prevArr, remembered ? 1 : 0].slice(-5);
      const newHistory: Record<string, number[]> = { ...prev, [card.palavra]: newArr };
      localStorage.setItem('vocabularyHistory', JSON.stringify(newHistory));
      // Recalcula remembers para todos os cards
      setVocabulary((vocabulary: VocabularioItem[]) => vocabulary.map((item: VocabularioItem) => {
        const hist = newHistory[item.palavra] || [];
        return {
          ...item,
          remembers: hist.filter((v: number) => v === 1).length
        };
      }));
  // ...removido: stats e updatedVocabulary...
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
              {showBack && (
                <>
                  <div style={{ color: '#555', fontSize: 14 }}>{item.pronuncia}</div>
                  <div style={{ color: '#333', fontSize: 14, marginBottom: 2 }}>{item.traducao}</div>
                </>
              )}
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
              <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                {!showBack ? (
                  <button
                    onClick={() => setShowBack(true)}
                    style={{ background: '#007acc', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 14px', fontSize: 14, cursor: 'pointer', fontWeight: 500 }}
                  >
                    <FaEye style={{ marginRight: 4 }} /> Ver verso
                  </button>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          );
        })()}
      </div>
      {/* Lista compacta das palavras abaixo do card - só aparece quando não está no verso */}
      {!showBack && (
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
              }} onClick={() => { setCurrentIndex(idx); setShowBack(false); }}>
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
      )}
    </div>
  );
}
