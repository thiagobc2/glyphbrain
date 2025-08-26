
  'use client';
  // ...existing code...
  import React, { useState, useEffect } from 'react';
  import { FaEye, FaCheck, FaTimes } from 'react-icons/fa';

interface VocabularioItem {
  palavra: string;
  pronuncia: string;
  traducao: string;
  tags: string;
  views: number;
  remembers: number;
}

export default function ViewCards() {
  const [showFront, setShowFront] = useState(true);
  const [vocabulary, setVocabulary] = useState<VocabularioItem[]>(
    [
      { "palavra": "ἀδύνατος, -ον (ἐστιν)", "pronuncia": "adúnatos, -on (éstin)", "traducao": "(é) impossível; impotente, fraco", "tags": "10", "views": 0, "remembers": 0 },
      { "palavra": "ἀντίχριστος, ὁ", "pronuncia": "antíkhristos, ho", "traducao": "anticristo", "tags": "5", "views": 0, "remembers": 0 },
      { "palavra": "ἄρα", "pronuncia": "ára", "traducao": "pois; portanto; então", "tags": "49", "views": 0, "remembers": 0 },
      { "palavra": "δεῖ", "pronuncia": "deî", "traducao": "é necessário; deve-se", "tags": "101", "views": 0, "remembers": 0 },
      { "palavra": "διὰ (+inf.)", "pronuncia": "diá", "traducao": "por causa de; por; porque", "tags": "27", "views": 0, "remembers": 0 },
      { "palavra": "διό", "pronuncia": "dió", "traducao": "por isso; portanto", "tags": "53", "views": 0, "remembers": 0 },
      { "palavra": "εἰς (+inf.)", "pronuncia": "eís", "traducao": "para; para que; de maneira que", "tags": "63", "views": 0, "remembers": 0 },
      { "palavra": "ἐν (+inf.)", "pronuncia": "en", "traducao": "enquanto; quando; ao + inf.; depois de + inf.; por + inf.", "tags": "52", "views": 0, "remembers": 0 },
      { "palavra": "ἔξεστι(ν)", "pronuncia": "éxesti(n)", "traducao": "é lícito; é permitido; é possível", "tags": "32", "views": 0, "remembers": 0 },
      { "palavra": "μετὰ (+inf.)", "pronuncia": "metá", "traducao": "depois de + inf.", "tags": "15", "views": 0, "remembers": 0 },
      { "palavra": "πρίν (+inf.)", "pronuncia": "prín", "traducao": "antes; antes de", "tags": "13", "views": 0, "remembers": 0 },
      { "palavra": "πρὸ (+inf.)", "pronuncia": "pró", "traducao": "antes; antes de", "tags": "9", "views": 0, "remembers": 0 },
      { "palavra": "πρὸς (+inf.)", "pronuncia": "prós", "traducao": "para; a fim de; assim que; de modo que", "tags": "12", "views": 0, "remembers": 0 },
      { "palavra": "σήμερον", "pronuncia": "sḗmeron", "traducao": "hoje", "tags": "41", "views": 0, "remembers": 0 },
      { "palavra": "συμφέρει", "pronuncia": "symphérei", "traducao": "convém; é melhor; é proveitoso", "tags": "10", "views": 0, "remembers": 0 },
      { "palavra": "φοβέομαι", "pronuncia": "phobéomai", "traducao": "eu temo; estou com medo; reverencio; respeito", "tags": "95", "views": 0, "remembers": 0 },
      { "palavra": "ὧδε", "pronuncia": "hṓde", "traducao": "aqui; para cá", "tags": "61", "views": 0, "remembers": 0 },
      { "palavra": "ὥστε", "pronuncia": "hṓste", "traducao": "por isso; portanto; de modo que; a fim de que; para", "tags": "83", "views": 0, "remembers": 0 }
    ]

    // [
    //   { "palavra": "ἀλλήλων", "pronuncia": "allélon", "traducao": "uns aos outros, mutuamente", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "ἐμαυτοῦ, -ῆς", "pronuncia": "emautû, -ês", "traducao": "de mim mesmo", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "σεαυτοῦ, -ῆς", "pronuncia": "seautû, -ês", "traducao": "de ti mesmo", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "ἑαυτοῦ, -ῆς", "pronuncia": "heautû, -ês", "traducao": "de si mesmo", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "αἴρω", "pronuncia": "airō", "traducao": "eu levanto; carrego; levo; tiro", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "ἄξιος, -α, -ον", "pronuncia": "áxios, -a, -on", "traducao": "digno; merecedor", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "γαμέω", "pronuncia": "gaméō", "traducao": "eu (me) caso", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "δέω", "pronuncia": "déō", "traducao": "eu ato, amarro; prendo; proíbo", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "δεξιός, -ά, -όν", "pronuncia": "dexiós, -á, -ón", "traducao": "direito; destro", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "δίδωμι", "pronuncia": "dídōmi", "traducao": "eu dou; entrego; confio; devolvo", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "ἕκαστος, -η, -ον", "pronuncia": "hékastos, -ē, -on", "traducao": "cada; todo", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "ἐλπίζω", "pronuncia": "elpízō", "traducao": "eu espero, tenho esperança", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "θεάομαι", "pronuncia": "theáomai", "traducao": "eu contemplo, olho; vejo", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "κράζω", "pronuncia": "krázō", "traducao": "eu grito", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "ποῖος, -α, -ον", "pronuncia": "poíos, -a, -on", "traducao": "de que tipo? qual? que?", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "πόσος, -η, -ον", "pronuncia": "pósos, -ē, -on", "traducao": "quão grande? (pl.: quantos?)", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "τίθημι", "pronuncia": "títhēmi", "traducao": "eu ponho; coloco", "tags": "245", "views": 0, "remembers": 0 },
    //   { "palavra": "χαρίζομαι", "pronuncia": "charízomai", "traducao": "eu dou (livre e graciosamente); perdoo", "tags": "245", "views": 0, "remembers": 0 }
    // ]

    // [

    // { palavra: "ἀκήκοα", pronuncia: "akékóa", traducao: "eu ouvi (perf. de ἀκούω [ouvir - akoúo])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "ἀπέσταλκα", pronuncia: "apéstalka", traducao: "eu enviei (perf. de ἀποστέλλω [enviar - apostéllō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "γεγάμηκα", pronuncia: "guegámeka", traducao: "eu casei (perf. de γαμέω [casar - gaméō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "γεγέννηκα", pronuncia: "gueguénneka", traducao: "eu gerei (perf. de γεννάω [gerar - gennáō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "γέγονα", pronuncia: "gégona", traducao: "eu me tornei, fui (perf. de γίνομαι [tornar-se - gínomai])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "γέγραφα", pronuncia: "gégrafa", traducao: "eu escrevi (perf. de γράφω [escrever - gráphō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "δέδεκα", pronuncia: "dédéka", traducao: "eu amarrei, prendi (perf. de δέω [amarar - déō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "ἠγάπηκα", pronuncia: "egápeka", traducao: "eu amei (perf. de ἀγαπάω [amar - agapáō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "ἦρκα", pronuncia: "êrka", traducao: "eu levantei, tirei (perf. de αἴρω [levantar - airō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "ᾔτηκα", pronuncia: "éiteka", traducao: "eu pedi (perf. de αἰτέω [pedir - aitéō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "κεχάρισμαι", pronuncia: "kechárismai", traducao: "eu concedi graça, favoreci (perf. de χαρίζομαι [conceder graça - charízomai])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "λέλυκα", pronuncia: "lélika", traducao: "eu soltei, libertei (perf. de λύω [libertar - lýō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "μεμαρτύρηκα", pronuncia: "memartýreka", traducao: "eu testemunhei (perf. de μαρτυρέω [testemunhar - martyréō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "πεπίστευκα", pronuncia: "pepístevka", traducao: "eu criei, tive fé (perf. de πιστεύω [crer - pisteúō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "πεπλήρωκα", pronuncia: "peplíroka", traducao: "eu cumpri, enchi (perf. de πληρόω [cumprir - plēróō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "πεποίηκα", pronuncia: "pepoíika", traducao: "eu fiz (perf. de ποιέω [fazer - poiéō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "πεφίληκα", pronuncia: "pephílika", traducao: "eu amei (perf. de φιλέω [amar - philéō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "τεθέαμαι", pronuncia: "tethéamai", traducao: "eu contemplei, vi (perf. de θεάομαι [contemplar - theáomai])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "τετέλεκα", pronuncia: "tetéleka", traducao: "eu completei, terminei (perf. de τελέω [completar - teléō])", tags: "pág 255", views: 0, remembers: 0 },
    // { palavra: "τετήρηκα", pronuncia: "tetírika", traducao: "eu guardei, observei (perf. de τηρέω [guardar - tēréō])", tags: "pág 255", views: 0, remembers: 0 }
    // ]


    // [
    //   { palavra: "ἄγγελος", pronuncia: "ánguelos", traducao: "anjo, mensageiro", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "βιβλίον", pronuncia: "vivlíon", traducao: "livro, escrito, carta", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "δῶρον", pronuncia: "dóron", traducao: "dom, presente, oferta", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "ἔργον", pronuncia: "érgon", traducao: "trabalho, obra", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "θάνατος", pronuncia: "thánatos", traducao: "morte", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "θρόνος", pronuncia: "thronos", traducao: "trono", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "ἱερόν", pronuncia: "ierón", traducao: "templo, santuário", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "λίθος", pronuncia: "líthos", traducao: "pedra", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "ὁδός", pronuncia: "odós", traducao: "caminho", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "οἶκος", pronuncia: "íkos", traducao: "casa, lar, família", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "οὐρανός", pronuncia: "uranós", traducao: "céu", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "ὄχλος", pronuncia: "óclos", traducao: "multidão, povo", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "πρόσωπον", pronuncia: "prósopon", traducao: "rosto, face", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "σάββατον", pronuncia: "sávaton", traducao: "sábado", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "τέκνον", pronuncia: "téknon", traducao: "criança, filho", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "τόπος", pronuncia: "tópos", traducao: "lugar", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "υἱός", pronuncia: "iôs", traducao: "filho", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "χρόνος", pronuncia: "chrónos", traducao: "tempo", tags: "pág 79", views: 0, remembers: 0 },
    //   { palavra: "ἀγαπάω", pronuncia: "agapáo", traducao: "eu amo", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "αἰτέω", pronuncia: "aitéo", traducao: "eu peço, solicito; requeiro", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "γεννάω", pronuncia: "guennáo", traducao: "eu gero, dou à luz; voz passiva: nascer", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "ἐρωτάω", pronuncia: "erotáo", traducao: "eu pergunto; peço, solicito", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "ζάω", pronuncia: "záo", traducao: "eu vivo", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "ζητέω", pronuncia: "zitéo", traducao: "eu procuro, busco; examino, indago", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "λαλέω", pronuncia: "laléo", traducao: "eu falo", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "μαρτυρέω", pronuncia: "martiréo", traducao: "eu testemunho, testifico", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "ὁμολογέω", pronuncia: "omologéo", traducao: "eu admito, concordo; reconheço, confesso", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "ὁράω", pronuncia: "oráo", traducao: "eu vejo; percebo; contemplo", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "πληρόω", pronuncia: "pliróo", traducao: "eu completo, encho (a ponto de transbordar); cumpro", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "ποιέω", pronuncia: "poiéo", traducao: "eu faço", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "τηρέω", pronuncia: "tiréo", traducao: "eu guardo; observo", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "φανερόω", pronuncia: "faneróo", traducao: "eu manifesto, revelo, mostro, dou a conhecer", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "βαπτίζω", pronuncia: "baptízo", traducao: "eu batizo; imerjo, mergulho; lavo", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "μέλλω (+ inf.)", pronuncia: "méllo", traducao: "eu vou + inf., estou prestes a + inf.; devo + inf.", tags: "pág 59", views: 0, remembers: 0 },
    //   { palavra: "μένω", pronuncia: "méno", traducao: "eu permaneço, fico", tags: "pág 59", views: 0, remembers: 0 }
    // ]
  )

  const [filteredVocabulary, setFilteredVocabulary] = useState<VocabularioItem[]>(vocabulary);
  // Lista ordenada para exibição
  const sortedList = [...filteredVocabulary].sort((a, b) => {
    if (b.views !== a.views) return b.views - a.views;
    return a.remembers - b.remembers;
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shownCards, setShownCards] = useState<VocabularioItem[]>([]);
  // Histórico de acertos para cada card
  const [history, setHistory] = useState<Record<string, number[]>>({});
  // Carregar dados do localStorage ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem('vocabularyStats');
    const savedHistory = localStorage.getItem('vocabularyHistory');
    if (saved) {
      const stats = JSON.parse(saved);
      setVocabulary(prev => prev.map(item => {
        const key = item.palavra;
        if (stats[key]) {
          return { ...item, views: stats[key].views, remembers: stats[key].remembers };
        }
        return item;
      }));
    }
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
    setFilteredVocabulary(vocabulary);
  }, []);

  const handleNextCard = (remembered: boolean) => {
    if (filteredVocabulary.length === 0) return;

    // Atualizar stats do card atual
    const card = filteredVocabulary[currentIndex];
    const updatedVocabulary = vocabulary.map(item => {
      if (item.palavra === card.palavra) {
        return {
          ...item,
          views: item.views + 1,
          remembers: remembered ? item.remembers + 1 : item.remembers
        };
      }
      return item;
    });
    setVocabulary(updatedVocabulary);

    // Atualizar histórico de acertos
    setHistory(prev => {
      const prevArr = prev[card.palavra] || [];
      const newArr = [...prevArr, remembered ? 1 : 0].slice(-5);
      const newHistory = { ...prev, [card.palavra]: newArr };
      localStorage.setItem('vocabularyHistory', JSON.stringify(newHistory));
      return newHistory;
    });

    // Salvar stats no localStorage
    const stats: Record<string, { views: number; remembers: number }> = {};
    updatedVocabulary.forEach(item => {
      stats[item.palavra] = { views: item.views, remembers: item.remembers };
    });
    localStorage.setItem('vocabularyStats', JSON.stringify(stats));

    // Próximo card - algoritmo ponderado
    const remainingCards = filteredVocabulary.filter(
      item => !shownCards.includes(item) && item.palavra !== card.palavra
    );
    if (remainingCards.length === 0) return;

    // Score: mais vistos e menos lembrados = maior chance
    // Se decorado (5 acertos nas últimas 5), score é dividido por 10
    const scores = remainingCards.map(item => {
      const hist = history[item.palavra] || [];
      const isMemorized = hist.length === 5 && hist.every(v => v === 1);
      const baseScore = (item.views + 1) / (item.remembers + 1);
      return isMemorized ? baseScore / 10 : baseScore;
    });
    const totalScore = scores.reduce((a, b) => a + b, 0);
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
    setShowFront(true);
  };
  // Progresso de cards decorados
  const totalCards = filteredVocabulary.length;
  // Considera decorado se acertou 5 vezes nas últimas 5 visualizações
  const memorizedCards = filteredVocabulary.filter(item => {
    const hist = history[item.palavra] || [];
    return hist.length === 5 && hist.every(v => v === 1);
  }).length;
  const remainingCards = totalCards - memorizedCards;
  const progressPercent = totalCards > 0 ? Math.round((memorizedCards / totalCards) * 100) : 0;

  const currentCard = filteredVocabulary[currentIndex] || null;
  return (
  <div style={{ maxHeight: '100vh', minHeight: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 30, marginRight: 30 }}>
      {/* Card e gráfico */}
      <div style={{ width: '100%', maxWidth: 480 }}>
        {/* Gráfico de evolução */}
        <div style={{ maxWidth: 420, margin: '0 auto 4px auto', padding: '6px 0' }}>
          <div style={{ fontWeight: 500, marginBottom: 4, fontSize: 14 }}>Evolução dos cards</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <div style={{ color: '#0077cc', fontWeight: 500, fontSize: 12 }}>Total: {totalCards}</div>
            <div style={{ color: '#009900', fontWeight: 500, fontSize: 12 }}>Decoradas: {memorizedCards}</div>
            <div style={{ color: '#b00', fontWeight: 500, fontSize: 12 }}>Faltam: {remainingCards}</div>
          </div>
          <div style={{ height: 12, background: '#eee', borderRadius: 8, overflow: 'hidden', marginBottom: 2, boxShadow: '0 1px 4px #0001' }}>
            <div style={{ width: `${progressPercent}%`, background: 'linear-gradient(90deg,#0077cc 60%,#009900 100%)', height: '100%', transition: 'width 0.3s' }}></div>
          </div>
          <div style={{ fontSize: 11, color: '#555', textAlign: 'right' }}>{progressPercent}% concluído</div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '4px', color: '#222' }}>
          {currentCard ? (
            <div>
              <div style={{ margin: '1px auto 0 auto', maxWidth: 400, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #0002', padding: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{currentCard.palavra}</div>
                {/* Status de decorado */}
                {(() => {
                  const hist = history[currentCard.palavra] || [];
                  if (hist.length === 5 && hist.every(v => v === 1)) {
                    return <div style={{ color: '#009900', fontWeight: 500, marginBottom: 6, fontSize: 13 }}>✅ Decorado!</div>;
                  }
                  return null;
                })()}
                {showFront ? null : (
                  <>
                    <div style={{ fontSize: 13, color: '#555', marginBottom: 6 }}>{currentCard.pronuncia}</div>
                    <div style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>{currentCard.traducao}</div>
                  </>
                )}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginBottom: 10 }}>
                  <span title="Visualizações"><FaEye style={{ verticalAlign: 'middle', color: '#0077cc', fontSize: 13 }} /> {currentCard.views}</span>
                  <span title="Lembrei"><FaCheck style={{ verticalAlign: 'middle', color: '#009900', fontSize: 13 }} /> {currentCard.remembers}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 8 }}>
                  {showFront && (
                    <button
                      onClick={() => setShowFront(false)}
                      style={{ background: '#0077cc', color: '#fff', border: 'none', borderRadius: 5, padding: '7px 14px', fontSize: 13, cursor: 'pointer', fontWeight: 500 }}
                    >
                      Ver verso
                    </button>
                  )}
                </div>
                {!showFront && (
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
                    <button
                      onClick={() => handleNextCard(true)}
                      style={{ background: '#009900', color: '#fff', border: 'none', borderRadius: 5, padding: '7px 14px', fontSize: 13, cursor: 'pointer', fontWeight: 500 }}
                    >
                      <FaCheck style={{ marginRight: 6 }} /> Lembrei
                    </button>
                    <button
                      onClick={() => handleNextCard(false)}
                      style={{ background: '#b00', color: '#fff', border: 'none', borderRadius: 5, padding: '7px 14px', fontSize: 13, cursor: 'pointer', fontWeight: 500 }}
                    >
                      <FaTimes style={{ marginRight: 6 }} /> Não lembrei
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p style={{ color: '#b00' }}>Nenhum card encontrado.</p>
          )}
        </div>
      </div>
      {/* Lista compacta embaixo do card, oculta no verso */}
      {showFront && (
        <div style={{ width: '100%', maxWidth: 480, height: 'calc(100vh - 370px)', minHeight: 120, overflowY: 'auto', background: '#fafcff', borderRadius: 8, boxShadow: '0 1px 6px #0001', padding: '8px 0', marginTop: 8 }}>
          <div style={{ fontWeight: 500, marginBottom: 8, fontSize: 15, textAlign: 'center' }}>Lista de palavras</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {sortedList.map(item => (
              <li key={item.palavra} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '4px 10px', marginBottom: 2,
                background: currentCard && currentCard.palavra === item.palavra ? '#e6f7ff' : '#fff',
                borderRadius: 4, boxShadow: '0 1px 2px #0001', cursor: 'pointer',
                border: currentCard && currentCard.palavra === item.palavra ? '2px solid #0077cc' : '1px solid #eee',
                fontSize: 13
              }}
                onClick={() => setCurrentIndex(filteredVocabulary.indexOf(item))}
              >
                <span style={{ fontWeight: 500, color: '#222', fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>{item.palavra}</span>
                <span style={{ color: '#555', marginLeft: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FaEye style={{ verticalAlign: 'middle', color: '#0077cc', marginRight: 2, fontSize: 13 }} /> {item.views}
                  <FaCheck style={{ verticalAlign: 'middle', color: '#009900', marginRight: 2, fontSize: 13 }} /> {item.remembers}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
