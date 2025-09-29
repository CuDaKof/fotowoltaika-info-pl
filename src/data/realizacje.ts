export interface Realizacja {
  id: number;
  slug: string;
  typ: 'dom' | 'firma';
  lokalizacja: string;
  tytul: string;
  moc: string;
  szczegoly: string;
  oszczednosc: string;
  opis: string;
  gradient: string;
  // Szczegółowe dane dla pełnego case study
  dataRealizacji: string;
  czasRealizacji: string;
  wyzwanie: string;
  rozwiazanie: string;
  specyfikacjaTechniczna: {
    panele: string;
    falownik: string;
    magazyn?: string;
    dodatkowe?: string[];
  };
  procesRealizacji: string[];
  wyniki: {
    rocznaProdukcja: string;
    autokonsumpcja: string;
    redukcjaCO2: string;
    zwrotInwestycji: string;
  };
  cytat?: {
    tresc: string;
    autor: string;
  };
}

export const REALIZACJE: Realizacja[] = [
  {
    id: 1,
    slug: 'dom-150m2-magazyn',
    typ: 'dom',
    lokalizacja: 'Katowice, Piotrowice',
    tytul: 'Dom 150 m² + magazyn energii',
    moc: '8 kWp',
    szczegoly: '20 paneli JA Solar 400W, falownik hybrydowy Deye 8kW, magazyn 10 kWh',
    oszczednosc: '7 200 zł/rok',
    opis: 'Dom jednorodzinny z pompą ciepła. Instalacja z magazynem energii zapewnia 75% autokonsumpcji i zasilanie awaryjne.',
    gradient: 'from-orange-400 to-yellow-500',
    dataRealizacji: 'Sierpień 2024',
    czasRealizacji: '3 dni robocze',
    wyzwanie: 'Państwo Kowalskich planowali wymianę starego pieca gazowego na pompę ciepła, co wiązało się ze znacznym wzrostem zużycia energii elektrycznej. Rachunki za prąd miały wzrosnąć z 300 zł/miesiąc do około 900 zł/miesiąc. Dodatkowo dom znajduje się w terenie częstych awarii energetycznych, co było szczególnie problematyczne ze względu na pracę zdalną właściciela.',
    rozwiazanie: 'Zaprojektowaliśmy instalację hybrydową 8 kWp z magazynem energii 10 kWh, która nie tylko pokrywa zwiększone zapotrzebowanie po montażu pompy ciepła, ale także zapewnia funkcję zasilania awaryjnego (backup) podczas przerw w dostawie prądu. Dobór mocy i pojemności magazynu został zoptymalizowany pod profil zużycia pompą ciepła w okresie zimowym.',
    specyfikacjaTechniczna: {
      panele: '20× JA Solar JAM54D41 400Wp (moduły half-cut z technologią PERC, sprawność 20,8%)',
      falownik: 'Deye SUN-8K-SG04LP3-EU (falownik hybrydowy 8kW, 2×MPPT, możliwość pracy off-grid)',
      magazyn: 'Bateria litowo-jonowa LFP 10 kWh (10 000 cykli, głębokość rozładowania 90%)',
      dodatkowe: [
        'Konstrukcja montażowa Schletter na dach skośny (kąt nachylenia 38°, azymut 15° S-E)',
        'Licznik dwukierunkowy z komunikacją remote reading',
        'System monitoringu online z aplikacją mobilną',
        'Zabezpieczenie przeciwprzepięciowe klasy DC i AC',
        'Smart switch do automatycznego przełączania na zasilanie awaryjne'
      ]
    },
    procesRealizacji: [
      'Wizyta przedprojektowa: pomiary dachu, analiza konstrukcji, sprawdzenie instalacji elektrycznej, pomiar zacienienia, analiza rachunków za prąd i profilu zużycia',
      'Projekt indywidualny: dobór mocy i pojemności magazynu pod konkretny profil obciążenia, symulacje komputerowe PVSyst, zgłoszenie OSD',
      'Dostawa materiałów: wszystkie komponenty od sprawdzonych producentów, 2 tygodnie od zamówienia',
      'Montaż (dzień 1): montaż konstrukcji na dachu, instalacja 20 paneli fotowoltaicznych, prowadzenie okablowania DC',
      'Montaż (dzień 2): instalacja falownika hybrydowego i magazynu energii w pomieszczeniu technicznym, podłączenie AC, konfiguracja systemu backup',
      'Montaż (dzień 3): podłączenie do rozdzielnicy, montaż licznika, konfiguracja systemu monitoringu, testy i rozruch, przeszkolenie właściciela',
      'Odbiór: dokumentacja powykonawcza, certyfikaty, instrukcje obsługi, zgłoszenie do OSD, aktywacja net-billingu'
    ],
    wyniki: {
      rocznaProdukcja: '8 200 kWh/rok (średnia z symulacji i rzeczywistych pomiarów)',
      autokonsumpcja: '75% energii zużywanej bezpośrednio z instalacji i magazynu (6 150 kWh/rok)',
      redukcjaCO2: '5,2 tony CO2/rok (ekwiwalent 230 drzew)',
      zwrotInwestycji: '6,8 lat przy obecnych cenach energii'
    },
    cytat: {
      tresc: 'Po zamontowaniu fotowoltaiki z magazynem nasze rachunki za prąd spadły z 900 zł do zaledwie 200 zł miesięcznie, mimo grzania pompą ciepła. Dodatkowo mamy spokój podczas burz – awaryjne zasilanie włącza się automatycznie.',
      autor: 'Pani Anna Kowalska, właścicielka'
    }
  },
  {
    id: 2,
    slug: 'hala-produkcyjna-2000m2',
    typ: 'firma',
    lokalizacja: 'Gliwice, strefa przemysłowa',
    tytul: 'Hala produkcyjna 2000 m²',
    moc: '100 kWp',
    szczegoly: '250 paneli Longi 400W, falowniki Huawei 3×33kW, kompensacja mocy biernej',
    oszczednosc: '68 000 zł/rok',
    opis: 'Zakład produkcyjny z dużym zużyciem energii dziennym. Instalacja na dachu hali + kompensacja mocy biernej. ROI: 5,2 lat.',
    gradient: 'from-blue-400 to-blue-600',
    dataRealizacji: 'Maj 2024',
    czasRealizacji: '12 dni roboczych',
    wyzwanie: 'Firma zajmująca się obróbką metali miała rachunki za energię elektryczną przekraczające 20 000 zł miesięcznie, z czego znaczna część to opłaty za energię bierną (współczynnik mocy poniżej 0,92). Produkcja odbywała się w godzinach 6:00-22:00, co idealnie pokrywało się z produkcją fotowoltaiki. Zarząd szukał rozwiązania obniżającego koszty energii i poprawiającego wizerunek ekologiczny firmy.',
    rozwiazanie: 'Kompleksowe rozwiązanie energetyczne: instalacja PV 100 kWp na dachu hali produkcyjnej + bateria kondensatorów do kompensacji mocy biernej. Zaprojektowaliśmy system w konfiguracji trójfazowej z trzema falownikami sieciowymi po 33 kW, co zapewnia redundancję i optymalną pracę. Dodatkowo zainstalowano monitoring energetyczny z analizatorem sieci.',
    specyfikacjaTechniczna: {
      panele: '250× Longi LR5-72HBD-540M (monokrystaliczne Hi-MO 5, sprawność 20,9%, podwyższona odporność na PID)',
      falownik: '3× Huawei SUN2000-33KTL-A (falowniki sieciowe 33 kW, sprawność 98,65%, wbudowany monitoring)',
      magazyn: 'Bateria kondensatorów 120 kvar + sterownik automatyczny cosφ',
      dodatkowe: [
        'Konstrukcja balastowa na płaskim dachu hali (optymalizacja pod obciążenia wiatrem)',
        'System monitoringu Huawei FusionSolar z analizą jakości energii',
        'Zabezpieczenia DC i AC klasy II dla środowiska przemysłowego',
        'Wyłączniki awaryjne zgodne z przepisami BHP',
        'Analizator sieci Socomec Diris A40 do monitoringu mocy biernej'
      ]
    },
    procesRealizacji: [
      'Audyt energetyczny: analiza rachunków za 12 miesięcy, pomiary analizatorem sieci, identyfikacja odbiorników mocy biernej, ocena konstrukcji dachu przez rzeczoznawcę',
      'Projekt wykonawczy: projekt budowlano-wykonawczy, obliczenia konstrukcyjne, projekt elektryczny, analiza opłacalności, zgłoszenia formalne',
      'Pozwolenia: zgłoszenie OSD, zgłoszenie budowy do starostwa, uzgodnienia BHP',
      'Montaż konstrukcji (3 dni): transport materiałów dźwigiem, montaż 40 ton konstrukcji balastowej, instalacja systemów odgromowych',
      'Montaż paneli (4 dni): instalacja 250 modułów PV, okablowanie DC, instalacja stringboxów',
      'Montaż elektryczny (3 dni): instalacja 3 falowników w pomieszczeniu technicznym, prowadzenie tras kablowych AC, montaż zabezpieczeń i liczników',
      'Kompensacja mocy (1 dzień): instalacja baterii kondensatorów, podłączenie sterownika, konfiguracja automatyki',
      'Uruchomienie (1 dzień): testy elektryczne, konfiguracja falowników, uruchomienie monitoringu, synchronizacja z siecią, przeszkolenie personelu',
      'Odbiór: dokumentacja powykonawcza, protokoły pomiarowe, instrukcje BHP, aktywacja rozliczeń OSD'
    ],
    wyniki: {
      rocznaProdukcja: '103 500 kWh/rok (prognoza) / 105 200 kWh (rzeczywista po 8 miesiącach)',
      autokonsumpcja: '97% energii zużywanej bezpośrednio w zakładzie (brak nadwyżek do sprzedaży)',
      redukcjaCO2: '66 tony CO2/rok',
      zwrotInwestycji: '5,2 lat (uwzględniając oszczędności na energii biernej i czynnej)'
    },
    cytat: {
      tresc: 'Instalacja fotowoltaiczna plus kompensacja mocy biernej to najlepsza inwestycja jaką zrobiliśmy w ostatnich latach. Rachunki za prąd spadły o ponad 60%, a dodatkowo poprawił się nasz wizerunek wśród klientów z Europy Zachodniej, dla których ekologia ma ogromne znaczenie.',
      autor: 'Pan Krzysztof Nowak, Prezes Zarządu'
    }
  },
  {
    id: 3,
    slug: 'peak-shaving-carport',
    typ: 'firma',
    lokalizacja: 'Tychy, centrum logistyczne',
    tytul: 'Peak shaving + carport PV',
    moc: '50 kWp + magazyn 100 kWh',
    szczegoly: 'Magazyn Sofar 100kWh, system peak shaving, 6 stacji ładowania EV',
    oszczednosc: '45 000 zł/rok',
    opis: 'Centrum logistyczne z wysokimi szczytami mocy. Magazyn energii obniżył koszty mocy zamówionej o 30%. Carport PV z ładowarkami dla floty.',
    gradient: 'from-green-400 to-green-600',
    dataRealizacji: 'Wrzesień 2024',
    czasRealizacji: '15 dni roboczych',
    wyzwanie: 'Centrum logistyczne miało problem z wysokimi opłatami za moc zamówioną (100 kW przy średnim zużyciu 40 kW), ponieważ krótkotrwałe szczyty mocy występowały podczas ładowania floty samochodów dostawczych (10 pojazdów elektrycznych). Firma płaciła około 5 000 zł miesięcznie za moc, której przez 90% czasu nie wykorzystywała. Dodatkowo brakowało zadaszonych miejsc parkingowych dla floty.',
    rozwiazanie: 'Innowacyjne rozwiązanie: budowa carportu fotowoltaicznego dla 15 samochodów z instalacją 50 kWp + magazyn energii 100 kWh z funkcją peak shaving. System automatycznie "wypełnia" szczyty mocy z magazynu, co pozwoliło obniżyć moc zamówioną z 100 kW do 70 kW. Carport zapewnia zadaszenie dla floty i energię do ładowania pojazdów. Inteligentny system zarządzania ładowaniem (load management) rozdziela moc między pojazdy według priorytetów.',
    specyfikacjaTechniczna: {
      panele: '125× Canadian Solar BiHiKu7 CS7N-400MS (bifacjalne, sprawność 20,5%, dodatkowy zysk z odbicia od podłoża)',
      falownik: 'Sofar Solar HYD 50KTL-3PH (falownik hybrydowy 50 kW, 4×MPPT)',
      magazyn: 'Sofar AMASS HV 100 kWh (modułowy system HV, BMS, 6000 cykli DOD 80%)',
      dodatkowe: [
        'Konstrukcja carportowa stalowa ocynkowana na 15 miejsc parkingowych',
        '6× Wallbox Pulsar Plus 22 kW z RFID i system load management',
        'Sofar Smart Energy Manager do peak shaving',
        'Analizator sieci do monitorowania mocy chwilowej',
        'System rezerwacji miejsc parkingowych przez aplikację',
        'Oświetlenie LED carportu zasilane z instalacji PV'
      ]
    },
    procesRealizacji: [
      'Analiza przedprojektowa (2 dni): audyt energetyczny, analiza profilu mocy 15-minutowej z OSD, pomiary parkingu, analiza profilu ładowania floty',
      'Projekt (5 dni): projekt konstrukcyjny carportu, projekt elektryczny, projekt systemu zarządzania energią, symulacje peak shaving, uzyskanie pozwoleń',
      'Fundamenty (2 dni): wykonanie 12 fundamentów pod słupy carportu, wykopy pod kable',
      'Konstrukcja (3 dni): montaż stalowej konstrukcji carportu, instalacja paneli na dachu carportu',
      'Instalacja elektryczna (3 dni): prowadzenie instalacji DC i AC, montaż falownika i magazynu w kontenerze technicznym, instalacja ładowarek',
      'Automatyka (2 dni): konfiguracja Smart Energy Manager, programowanie algorytmu peak shaving, konfiguracja systemu load management dla ładowarek',
      'Uruchomienie i testy (1 dzień): testy symulacyjne peak shaving, kalibracja systemu, szkolenie dla zespołu logistyki',
      'Optymalizacja (ongoing): dostrajanie algorytmu przez pierwszy miesiąc pod rzeczywiste profile zużycia'
    ],
    wyniki: {
      rocznaProdukcja: '52 000 kWh/rok z carportu PV',
      autokonsumpcja: '100% energii wykorzystanej lokalnie (ładowanie floty + pokrycie zużycia obiektu)',
      redukcjaCO2: '33 tony CO2/rok',
      zwrotInwestycji: '7,2 lat (uwzględniając oszczędności na mocy zamówionej, energii i unikniętych kosztach paliwa)'
    },
    cytat: {
      tresc: 'System peak shaving obniżył nam opłatę za moc o 30%, co daje 18 000 zł oszczędności rocznie. Dodatkowo cała flota jest ładowana darmową energią słoneczną. Carport rozwiązał też problem braku zadaszeń – auta nie stoją już na słońcu latem i śniegu zimą.',
      autor: 'Pan Marcin Wiśniewski, Dyrektor Operacyjny'
    }
  },
  {
    id: 4,
    slug: 'dom-100m2-prosumencka',
    typ: 'dom',
    lokalizacja: 'Sosnowiec, Zagórze',
    tytul: 'Dom 100 m² — prosumencka',
    moc: '5 kWp',
    szczegoly: '12 paneli JA Solar 420W, falownik Sofar 5kW, system net-billing',
    oszczednosc: '4 500 zł/rok',
    opis: 'Podstawowa instalacja prosumencka bez magazynu. Pokrycie 65% zużycia energii w ciągu roku.',
    gradient: 'from-yellow-400 to-orange-500',
    dataRealizacji: 'Czerwiec 2024',
    czasRealizacji: '2 dni robocze',
    wyzwanie: 'Państwo Lewandowscy, młode małżeństwo z dwójką dzieci, chcieli uniezależnić się od rosnących cen prądu. Zużycie energii na poziomie 4 500 kWh rocznie (375 zł/miesiąc). Ograniczony budżet 22 000 zł. Dach dwuspadowy, południowo-wschodnia i południowo-zachodnia połać. Chcieli prostej, bezawaryjnej instalacji bez zbędnych komplikacji.',
    rozwiazanie: 'Zaprojektowaliśmy ekonomiczną instalację 5 kWp z 12 paneli rozmieszczonych na obu połaciach dachu (6+6). Klasyczna konfiguracja prosumencka net-billing bez magazynu energii – optymalny stosunek kosztu do efektu dla rodziny z równomiernym profilem zużycia. Dobór falownika Sofar ze zintegrowanym WiFi eliminuje koszt dodatkowego monitora. Prosty monitoring przez aplikację w telefonie.',
    specyfikacjaTechniczna: {
      panele: '12× JA Solar JAM72S30 420W (monokrystaliczne 72-cell, sprawność 21,1%)',
      falownik: 'Sofar Solar 5000TLM-G3 (falownik on-grid 5kW, 2×MPPT, WiFi)',
      dodatkowe: [
        'Konstrukcja K2 SingleRail na dach skośny ceramiczny',
        'Optymalizatory DC dla zabezpieczenia przed zacienieniem (kominami)',
        'Zabezpieczenia AC/DC, odłączniki',
        'Aplikacja mobilna Solarman do monitoringu',
        'Pełna dokumentacja i zgłoszenia OSD'
      ]
    },
    procesRealizacji: [
      'Konsultacja (1 wizyta): pomiar dachu, ocena konstrukcji, sprawdzenie przyłącza, analiza rachunków, wycena',
      'Projekt: projekt techniczny, dobór komponentów, zgłoszenie do OSD (Tauron)',
      'Montaż dzień 1: transport materiałów, montaż konstrukcji i paneli na obu połaciach dachu, okablowanie DC',
      'Montaż dzień 2: instalacja falownika w garażu, prowadzenie kabli AC, podłączenie do rozdzielnicy, konfiguracja WiFi i aplikacji, testy',
      'Odbiór: dokumentacja, instrukcje, zgłoszenie mikroinstalacji, aktywacja net-billing, przeszkolenie w zakresie obsługi aplikacji'
    ],
    wyniki: {
      rocznaProdukcja: '5 250 kWh/rok (rzeczywista po 6 miesiącach)',
      autokonsumpcja: '65% energii zużywanej bezpośrednio, 35% sprzedanej do sieci w ramach net-billing',
      redukcjaCO2: '3,3 tony CO2/rok',
      zwrotInwestycji: '4,9 lat przy obecnych cenach energii (trend wzrostowy skraca okres zwrotu)'
    },
    cytat: {
      tresc: 'Świetna inwestycja. Rachunki spadły z 375 zł do 130 zł miesięcznie. Wszystko zostało zrobione szybko i profesjonalnie – w dwa dni. Aplikacja pokazuje ile prądu produkujemy na żywo, dzieci są zachwycone!',
      autor: 'Pan Tomasz Lewandowski'
    }
  },
  {
    id: 5,
    slug: 'modernizacja-instalacji-magazyn',
    typ: 'firma',
    lokalizacja: 'Dąbrowa Górnicza, zakład',
    tytul: 'Modernizacja instalacji + magazyn',
    moc: '60 kWp + modernizacja',
    szczegoly: 'Rozbudowa z 30 do 60 kWp, dodanie magazynu 50kWh, wymiana falowników',
    oszczednosc: '52 000 zł/rok',
    opis: 'Modernizacja 8-letniej instalacji. Wymiana starych falowników string na nowe hybrydowe + dodanie magazynu energii.',
    gradient: 'from-purple-400 to-purple-600',
    dataRealizacji: 'Lipiec 2024',
    czasRealizacji: '8 dni roboczych',
    wyzwanie: 'Firma produkcyjna posiadała 8-letnią instalację fotowoltaiczną 30 kWp, która pokrywała 40% zapotrzebowania. W międzyczasie produkcja się rozrosła, zużycie energii wzrosło dwukrotnie. Dodatkowo 8-letnie falowniki string zaczęły wykazywać pierwsze usterki (2 wymienione na gwarancji). Firma chciała: zwiększyć moc instalacji, unowocześnić system i dodać magazyn energii dla pracy w drugiej zmianie (15:00-23:00).',
    rozwiazanie: 'Kompleksowa modernizacja i rozbudowa: wymiana wszystkich starych falowników string (6×5kW) na nowoczesne hybrydowe (2×30kW) z możliwością pracy z magazynem, dodanie 30 kWp nowych paneli na dotychczas niewykorzystanej połaci dachu, instalacja magazynu energii 50 kWh. Nowe panele i falowniki zapewniają 20% wyższą wydajność niż stare. Magazyn gromadzi nadwyżki z dnia dla pracy wieczornej.',
    specyfikacjaTechniczna: {
      panele: '75× Longi LR5-54HIH-410M (nowe, 30 kWp) + 75× paneli istniejących (30 kWp po czyszczeniu i przeglądzie)',
      falownik: '2× Huawei SUN2000-30KTL-M3 (nowe falowniki hybrydowe 30 kW zastępujące 6 starych stringów)',
      magazyn: 'Huawei LUNA2000-50-S0 (modułowy magazyn 50 kWh, integracja z falownikami Huawei)',
      dodatkowe: [
        'Nowa konstrukcja dla dodatkowych 75 paneli',
        'Wymiana wszystkich kabli DC (stare po 8 latach)',
        'Nowe zabezpieczenia DC/AC zgodne z aktualnymi normami',
        'System EMS (Energy Management System) do optymalizacji ładowania magazynu',
        'Przegląd i czyszczenie istniejących 75 paneli',
        'Nowy monitoring zintegrowany Huawei FusionSolar'
      ]
    },
    procesRealizacji: [
      'Audyt istniejącej instalacji (1 dzień): termowizja paneli, pomiary wydajności, ocena konstrukcji, analiza stanu okablowania',
      'Projekt rozbudowy: projekt 30 kWp dodatkowych, projekt wymiany falowników, projekt magazynu, aktualizacja zgłoszeń OSD',
      'Demontaż starych falowników (1 dzień): bezpieczne odłączenie 6 starych falowników, demontaż okablowania DC',
      'Montaż nowej części (3 dni): konstrukcja i montaż 75 nowych paneli, prowadzenie nowego okablowania DC',
      'Instalacja nowych falowników i magazynu (2 dni): montaż 2 falowników hybrydowych, instalacja magazynu LUNA, nowe okablowanie AC',
      'Integracja i konfiguracja (1 dzień): podłączenie starych paneli do nowych falowników, konfiguracja systemu hybrydowego, programowanie EMS',
      'Testy i uruchomienie (1 dzień): testy wszystkich sekcji, optymalizacja MPPT, kalibracja systemu zarządzania energią, szkolenie',
      'Dokumentacja: protokoły pomiarowe, aktualizacja dokumentacji, zgłoszenie zmian do OSD'
    ],
    wyniki: {
      rocznaProdukcja: '63 000 kWh/rok (nowa część 31 500 kWh + stara po modernizacji 31 500 kWh)',
      autokonsumpcja: '92% dzięki magazynowi energii (wzrost z 65% przed modernizacją)',
      redukcjaCO2: '40 ton CO2/rok',
      zwrotInwestycji: '5,8 lat dla inwestycji modernizacyjnej (przy uwzględnieniu unikniętych kosztów awarii starych falowników)'
    },
    cytat: {
      tresc: 'Modernizacja była strzałem w dziesiątkę. Nowe falowniki są o niebo lepsze od starych, a magazyn energii pozwala nam wykorzystać całą wyprodukowaną energię. Produkcja wzrosła o 100%, a rachunki spadły o 70%. Stara instalacja dostała drugie życie.',
      autor: 'Pani Joanna Zielińska, Główny Księgowy'
    }
  },
  {
    id: 6,
    slug: 'dom-200m2-autarkia',
    typ: 'dom',
    lokalizacja: 'Bielsko-Biała, Mikuszowice',
    tytul: 'Dom 200 m² — autarkia energetyczna',
    moc: '10 kWp + magazyn 15 kWh',
    szczegoly: '25 paneli Longi 400W, falownik Deye 10kW, baterie 15kWh, smart home',
    oszczednosc: '9 800 zł/rok',
    opis: 'Duży dom z basenem i klimatyzacją. Instalacja z dużym magazynem zapewnia 80% pokrycia rocznego zużycia energii.',
    gradient: 'from-indigo-400 to-indigo-600',
    dataRealizacji: 'Kwiecień 2024',
    czasRealizacji: '4 dni robocze',
    wyzwanie: 'Państwo Kamińscy zbudowali energooszczędny dom pasywny 200 m² z basenem, pompą ciepła i klimatyzacją. Pomimo energooszczędnej konstrukcji, zużycie energii wynosiło 12 000 kWh rocznie (basen 3 500 kWh, pompa ciepła 4 500 kWh, reszta 4 000 kWh), co generowało rachunki na poziomie 900 zł/miesiąc. Marzyli o maksymalnej niezależności energetycznej i integracji z systemem smart home (KNX). Budżet 55 000 zł.',
    rozwiazanie: 'Premium instalacja hybrydowa 10 kWp z magazynem 15 kWh i pełną integracją smart home. System zaprojektowano do maksymalizacji autokonsumpcji – inteligentne zarządzanie ładowaniem basenu (włączanie pompy w godzinach szczytowej produkcji słonecznej), optymalizacja pracy pompy ciepła pod kątem dostępności energii z PV, klimatyzacja priorytetowo zasilana z fotowoltaiki. Falownik Deye z funkcją backup zapewnia zasilanie awaryjne dla kluczowych obwodów. Integracja z systemem KNX przez Modbus.',
    specyfikacjaTechniczna: {
      panele: '25× Longi Hi-MO 5 LR5-54HTH-410M (monokrystaliczne, sprawność 21,2%, podwyższona wydajność w wysokich temperaturach)',
      falownik: 'Deye SUN-10K-SG04LP3-EU (falownik hybrydowy 10kW, funkcja UPS, integracja smart home)',
      magazyn: 'Pylontech US5000 3×5kWh = 15kWh (modułowy system LiFePO4, 6000 cykli)',
      dodatkowe: [
        'Konstrukcja zintegrowana architektonicznie na dachu skośnym (czarne panele, czarne ramy)',
        'Moduł komunikacyjny Modbus RTU do integracji z KNX',
        'Smart Energy Manager do zarządzania priorytetami obciążeń',
        'Przełącznik automatyczny STS dla zasilania awaryjnego',
        'Czujniki prądu dla 6 obwodów (basen, pompa ciepła, klimatyzacja, itp.)',
        'Zaawansowany monitoring przez aplikację + wizualizacja na panelu KNX',
        'Optymalizator podlewania ogrodu (włączanie w godzinach nadwyżki energii)'
      ]
    },
    procesRealizacji: [
      'Wizyta przedprojektowa i konsultacja architektoniczna (1 dzień): pomiary, dobór paneli pasujących do estetyki domu, analiza systemu smart home',
      'Projekt zaawansowany: projekt z symulacją godzinową PVSyst, projekt integracji z KNX, algorytmy zarządzania energią, zgłoszenia',
      'Dostawa: komponenty premium z rozszerzoną gwarancją producenta',
      'Montaż konstrukcji i paneli (1,5 dnia): 25 paneli black-on-black, estetyczne prowadzenie okablowania',
      'Instalacja elektryczna (1,5 dnia): falownik i baterie w pomieszczeniu technicznym, prowadzenie kabli AC, montaż czujników prądu na kluczowych obwodach',
      'Integracja smart home (1 dzień): podłączenie Modbus do systemu KNX, programowanie automatyki zarządzania energią, konfiguracja priorytetów',
      'Testy i optymalizacja: testy backup, testy smart home, programowanie scenariuszy, szkolenie właścicieli (2h)',
      'Dokumentacja premium: komplet dokumentacji, certyfikaty, instrukcje, dostęp do portalu producenta, przedłużone gwarancje'
    ],
    wyniki: {
      rocznaProdukcja: '10 500 kWh/rok',
      autokonsumpcja: '80% energii wykorzystanej lokalnie dzięki magazynowi i inteligentnemu zarządzaniu (9 600 kWh z 12 000 kWh rocznego zużycia)',
      redukcjaCO2: '6,7 tony CO2/rok',
      zwrotInwestycji: '5,6 lat + wzrost wartości nieruchomości o ~40 000 zł'
    },
    cytat: {
      tresc: 'To nie jest zwykła fotowoltaika – to kompleksowy system zarządzania energią w domu. Basen grzeje się tylko gdy świeci słońce, klimatyzacja priorytetowo korzysta z paneli, a w razie awarii prądu automatycznie przełącza się na baterie. Rachunki spadły z 900 zł do 180 zł miesięcznie. Jestem pod wrażeniem poziomu integracji z naszym smart home.',
      autor: 'Pan Piotr Kamiński, inwestor'
    }
  }
];
