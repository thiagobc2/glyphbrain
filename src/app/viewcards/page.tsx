'use client';
import Card from '@/components/Card';
import React, { useState } from 'react';

interface VocabularioItem {
  palavra: string;
  pronuncia: string;
  traducao: string;
}

export default function ViewCards() {
  const [vocabulary] = useState<VocabularioItem[]>(
    [
      { palavra: "ἄγγελος", pronuncia: "ánguelos", traducao: "anjo, mensageiro" },
      { palavra: "βιβλίον", pronuncia: "vivlíon", traducao: "livro, escrito, carta" },
      { palavra: "δῶρον", pronuncia: "dóron", traducao: "dom, presente, oferta" },
      { palavra: "ἔργον", pronuncia: "érgon", traducao: "trabalho, obra" },
      { palavra: "θάνατος", pronuncia: "thánatos", traducao: "morte" },
      { palavra: "θρόνος", pronuncia: "thronos", traducao: "trono" },
      { palavra: "ἱερόν", pronuncia: "ierón", traducao: "templo, santuário" },
      { palavra: "λίθος", pronuncia: "líthos", traducao: "pedra" },
      { palavra: "ὁδός", pronuncia: "odós", traducao: "caminho" },
      { palavra: "οἶκος", pronuncia: "íkos", traducao: "casa, lar, família" },
      { palavra: "οὐρανός", pronuncia: "uranós", traducao: "céu" },
      { palavra: "ὄχλος", pronuncia: "óclos", traducao: "multidão, povo" },
      { palavra: "πρόσωπον", pronuncia: "prósopon", traducao: "rosto, face" },
      { palavra: "σάββατον", pronuncia: "sávaton", traducao: "sábado" },
      { palavra: "τέκνον", pronuncia: "téknon", traducao: "criança, filho" },
      { palavra: "τόπος", pronuncia: "tópos", traducao: "lugar" },
      { palavra: "υἱός", pronuncia: "iôs", traducao: "filho" },
      { palavra: "χρόνος", pronuncia: "chrónos", traducao: "tempo" }
    ]
  )

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {vocabulary.map((item, index) => (
        <Card
          key={index}
          palavra={item.palavra}
          pronuncia={item.pronuncia}
          traducao={item.traducao}
        />
      ))}
    </div>
  )
}
