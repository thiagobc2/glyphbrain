'use client';
import Card from '@/components/Card';
import React, { useState, useEffect } from 'react';

interface VocabularioItem {
  palavra: string;
  pronuncia: string;
  traducao: string;
  tags: string;
  views: number;
  remembers: number;
}

export default function ViewCards() {
  const [vocabulary] = useState<VocabularioItem[]>(
    [
      { palavra: "ἄγγελος", pronuncia: "ánguelos", traducao: "anjo, mensageiro", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "βιβλίον", pronuncia: "vivlíon", traducao: "livro, escrito, carta", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "δῶρον", pronuncia: "dóron", traducao: "dom, presente, oferta", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "ἔργον", pronuncia: "érgon", traducao: "trabalho, obra", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "θάνατος", pronuncia: "thánatos", traducao: "morte", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "θρόνος", pronuncia: "thronos", traducao: "trono", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "ἱερόν", pronuncia: "ierón", traducao: "templo, santuário", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "λίθος", pronuncia: "líthos", traducao: "pedra", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "ὁδός", pronuncia: "odós", traducao: "caminho", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "οἶκος", pronuncia: "íkos", traducao: "casa, lar, família", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "οὐρανός", pronuncia: "uranós", traducao: "céu", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "ὄχλος", pronuncia: "óclos", traducao: "multidão, povo", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "πρόσωπον", pronuncia: "prósopon", traducao: "rosto, face", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "σάββατον", pronuncia: "sávaton", traducao: "sábado", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "τέκνον", pronuncia: "téknon", traducao: "criança, filho", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "τόπος", pronuncia: "tópos", traducao: "lugar", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "υἱός", pronuncia: "iôs", traducao: "filho", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "χρόνος", pronuncia: "chrónos", traducao: "tempo", tags: "pág 79", views: 0, remembers: 0 },
      { palavra: "ἀγαπάω", pronuncia: "agapáo", traducao: "eu amo", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "αἰτέω", pronuncia: "aitéo", traducao: "eu peço, solicito; requeiro", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "γεννάω", pronuncia: "guennáo", traducao: "eu gero, dou à luz; voz passiva: nascer", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "ἐρωτάω", pronuncia: "erotáo", traducao: "eu pergunto; peço, solicito", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "ζάω", pronuncia: "záo", traducao: "eu vivo", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "ζητέω", pronuncia: "zitéo", traducao: "eu procuro, busco; examino, indago", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "λαλέω", pronuncia: "laléo", traducao: "eu falo", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "μαρτυρέω", pronuncia: "martiréo", traducao: "eu testemunho, testifico", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "ὁμολογέω", pronuncia: "omologéo", traducao: "eu admito, concordo; reconheço, confesso", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "ὁράω", pronuncia: "oráo", traducao: "eu vejo; percebo; contemplo", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "πληρόω", pronuncia: "pliróo", traducao: "eu completo, encho (a ponto de transbordar); cumpro", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "ποιέω", pronuncia: "poiéo", traducao: "eu faço", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "τηρέω", pronuncia: "tiréo", traducao: "eu guardo; observo", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "φανερόω", pronuncia: "faneróo", traducao: "eu manifesto, revelo, mostro, dou a conhecer", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "βαπτίζω", pronuncia: "baptízo", traducao: "eu batizo; imerjo, mergulho; lavo", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "μέλλω (+ inf.)", pronuncia: "méllo", traducao: "eu vou + inf., estou prestes a + inf.; devo + inf.", tags: "pág 59", views: 0, remembers: 0 },
      { palavra: "μένω", pronuncia: "méno", traducao: "eu permaneço, fico", tags: "pág 59", views: 0, remembers: 0 }
    ]
  )

  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [filteredVocabulary, setFilteredVocabulary] = useState<VocabularioItem[]>(vocabulary);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shownCards, setShownCards] = useState<VocabularioItem[]>([]);

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

      // Incrementar as visualizações
      nextCard.views += 1;

      // Incrementar os lembretes se necessário
      if (remembered) {
        nextCard.remembers += 1;
      }
    }
  };

  const currentCard = filteredVocabulary[currentIndex] || null;
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <select
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
        style={{
          marginBottom: '20px',
          padding: '10px',
          width: '80%',
          border: '1px solid #ccc',
          borderRadius: '5px',
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
          <Card
            palavra={currentCard.palavra}
            pronuncia={currentCard.pronuncia}
            traducao={currentCard.traducao}
            views={currentCard.views}
            remembers={currentCard.remembers}
            onRemember={(remembered) => handleNextCard(remembered)}
          />
        </>
      ) : (
        <p>Nenhum card encontrado para a tag: {selectedTag}</p>
      )}
    </div>
  )
}
