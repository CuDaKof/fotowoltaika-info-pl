export type Segment = 'b2c' | 'b2b' | 'both';
export interface Usluga { slug: string; name: string; segment: Segment; lead: string; bullets: string[]; cta?: string; }

export const USLUGI: Usluga[] = [
  { slug: 'fotowoltaika', name: 'Fotowoltaika', segment: 'both', lead: 'Kompleksowe instalacje PV – projekt, montaż, serwis i monitoring.', bullets: ['Dobór mocy kWp do zużycia', 'Falowniki Deye/Sofar/Huawei', 'Gwarancje i monitoring'] },
  { slug: 'magazyny-energii', name: 'Magazyny energii (baterie)', segment: 'both', lead: 'Większa autokonsumpcja i backup przy zaniku zasilania.', bullets: ['Dobór pojemności kWh', 'EPS/backup', 'Integracja z istniejącą PV'] },
  { slug: 'modernizacja-pv', name: 'Modernizacja istniejącej PV', segment: 'both', lead: 'Rozbudowa mocy, wymiana falownika, optymalizacja uzysków.', bullets: ['Diagnostyka i audyt', 'Wymiana podzespołów', 'Rozbudowa z magazynem'] },
  { slug: 'instalacje-elektryczne', name: 'Instalacje elektryczne', segment: 'both', lead: 'Kompleksowa elektryka w domach i firmach.', bullets: ['Rozdzielnice i zabezpieczenia', 'SPD i uziemienie', 'Pomiary i protokoły'] },
  { slug: 'pomiary-i-przeglady', name: 'Pomiary i przeglądy', segment: 'both', lead: 'Okresowe przeglądy i pomiary instalacji zgodnie z normami.', bullets: ['Rezystancja izolacji', 'Impedancja pętli zwarcia', 'Protokoły'] },
  { slug: 'kompensacja-mocy-biernej', name: 'Kompensacja mocy biernej', segment: 'b2b', lead: 'Redukcja opłat za energię bierną w firmach.', bullets: ['Baterie kondensatorów/dławiki', 'Automaty kompensacyjne', 'Dobór po audycie'] },
  { slug: 'peak-shaving', name: 'Magazyny energii / Peak shaving', segment: 'b2b', lead: 'Obniżenie pików mocy i kosztów mocy zamówionej.', bullets: ['Analiza profilu mocy', 'Sterowanie ładowaniem/rozładowaniem', 'Integracja z BMS/SCADA'] },
  { slug: 'stacje-ladowania-ev', name: 'Stacje ładowania EV', segment: 'both', lead: 'Dobór i montaż wallboxów oraz stacji AC/DC.', bullets: ['Wallboxy 7–22 kW', 'Autoryzacja RFID/aplikacja', 'Integracja z PV'] },
  { slug: 'smart-home', name: 'Smart Home (integracje)', segment: 'both', lead: 'Automatyka i zarządzanie energią w domu i biurze.', bullets: ['Sterowanie oświetleniem/gniazdami', 'Integracje PV+magazyn', 'Optymalizacja zużycia'] },
  { slug: 'termowizja', name: 'Termowizja i diagnostyka', segment: 'both', lead: 'Wykrywanie anomalii cieplnych instalacji i paneli.', bullets: ['Przeglądy termowizyjne PV', 'Raporty i rekomendacje', 'Prewencja awarii'] },
  { slug: 'ochrona-przepieciowa', name: 'Ochrona przepięciowa i LPS', segment: 'both', lead: 'SPD, uziemienie, instalacje odgromowe.', bullets: ['Dobór SPD typ 1/2/3', 'Uziomy i bednarka', 'Pomiary skuteczności'] },
  { slug: 'carport-pv', name: 'Carporty PV', segment: 'both', lead: 'Zadaszenie parkingu z generacją energii.', bullets: ['Konstrukcje stal/alu', 'Integracja z ładowarkami', 'Estetyka i funkcja'] },
  { slug: 'off-grid', name: 'Systemy off-grid', segment: 'both', lead: 'Zasilanie autonomiczne dla domków i obiektów mobilnych.', bullets: ['Falowniki hybrydowe/off-grid', 'Banki akumulatorów', 'Projekt pod zastosowanie'] },
  { slug: 'pompy-ciepla', name: 'Pompy ciepła', segment: 'both', lead: 'Dobór i montaż pomp ciepła z integracją PV.', bullets: ['Powietrze-woda', 'Sterowanie pogodowe', 'Bilans energetyczny domu'] },
];
