
  'use client';
  import React, { useState, useEffect } from 'react';
  import Card from '@/components/Card';
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

  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [filteredVocabulary, setFilteredVocabulary] = useState<VocabularioItem[]>(vocabulary);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shownCards, setShownCards] = useState<VocabularioItem[]>([]);
  // Carregar dados do localStorage ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem('vocabularyStats');
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
  }, []);

  useEffect(() => {
    const uniqueTags = Array.from(
      new Set(vocabulary.flatMap(item => item.tags.split(',').map(tag => tag.trim())))
    );
    setTags(uniqueTags);
  }, [vocabulary]);

  useEffect(() => {
    const filtered = selectedTag
      ? vocabulary.filter(item =>
        item.tags.split(',').map(tag => tag.trim()).includes(selectedTag)
      )
      : vocabulary;

    setFilteredVocabulary(filtered);
    setShownCards([]);
  }, [selectedTag, vocabulary]);

  useEffect(() => {
    if (filteredVocabulary.length > 0 && shownCards.length === filteredVocabulary.length) {
      setShownCards([]);
    }
  }, [filteredVocabulary, shownCards]);

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

    // Salvar stats no localStorage
    const stats: Record<string, { views: number; remembers: number }> = {};
    updatedVocabulary.forEach(item => {
      stats[item.palavra] = { views: item.views, remembers: item.remembers };
    });
    localStorage.setItem('vocabularyStats', JSON.stringify(stats));

    // Próximo card
    const remainingCards = filteredVocabulary.filter(
      item => !shownCards.includes(item)
    );
    const nextCard =
      remainingCards.length > 0
        ? remainingCards[Math.floor(Math.random() * remainingCards.length)]
        : null;
    if (nextCard) {
      setCurrentIndex(filteredVocabulary.indexOf(nextCard));
      setShownCards([...shownCards, nextCard]);
      setShowFront(true);
    }
  };

  const currentCard = filteredVocabulary[currentIndex] || null;
  return (
    <div style={{ textAlign: 'center', marginTop: '20px', color: '#222' }}>
      <select
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
        style={{
          marginBottom: '20px',
          padding: '10px',
          width: '80%',
          border: '1px solid #ccc',
          borderRadius: '5px',
          color: '#222',
          background: '#fff',
        }}
      >
        <option value="">Todas as Tags</option>
        {tags.map(tag => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <br />
      Quantidade de cards: {filteredVocabulary.length}
      {currentCard ? (
        <>
          <div style={{ margin: '20px auto', maxWidth: 400, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #0002', padding: 24 }}>
            <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>{currentCard.palavra}</div>
            {showFront ? null : (
              <>
                <div style={{ fontSize: 16, color: '#555', marginBottom: 8 }}>{currentCard.pronuncia}</div>
                <div style={{ fontSize: 18, color: '#333', marginBottom: 16 }}>{currentCard.traducao}</div>
              </>
            )}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16 }}>
              <span title="Visualizações"><FaEye style={{ verticalAlign: 'middle', color: '#0077cc' }} /> {currentCard.views}</span>
              <span title="Lembrei"><FaCheck style={{ verticalAlign: 'middle', color: '#009900' }} /> {currentCard.remembers}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 12 }}>
              {showFront && (
                <button
                  onClick={() => setShowFront(false)}
                  style={{ background: '#0077cc', color: '#fff', border: 'none', borderRadius: 5, padding: '10px 18px', fontSize: 16, cursor: 'pointer', fontWeight: 500 }}
                >
                  Ver verso
                </button>
              )}
            </div>
            {!showFront && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
                <button
                  onClick={() => handleNextCard(true)}
                  style={{ background: '#009900', color: '#fff', border: 'none', borderRadius: 5, padding: '10px 18px', fontSize: 16, cursor: 'pointer', fontWeight: 500 }}
                >
                  <FaCheck style={{ marginRight: 8 }} /> Lembrei
                </button>
                <button
                  onClick={() => handleNextCard(false)}
                  style={{ background: '#b00', color: '#fff', border: 'none', borderRadius: 5, padding: '10px 18px', fontSize: 16, cursor: 'pointer', fontWeight: 500 }}
                >
                  <FaTimes style={{ marginRight: 8 }} /> Não lembrei
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <p style={{ color: '#b00' }}>Nenhum card encontrado para a tag: {selectedTag}</p>
      )}
    </div>
  )
}
