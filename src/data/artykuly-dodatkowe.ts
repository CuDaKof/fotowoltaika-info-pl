// Ostatnie 3 artykuły do dodania do artykuly.ts przed znakiem ];

export const ARTYKULY_DODATKOWE = `  ,
  {
    slug: 'peak-shaving-optymalizacja',
    kategoria: 'Dla firm',
    tytul: 'Peak shaving — optymalizacja szczytów mocy',
    lead: 'Jak magazyny energii mogą obniżyć koszty mocy zamówionej w firmie? Przykłady i obliczenia ROI.',
    data: '20.02.2025',
    autor: 'Zespół fotowoltaika.info.pl',
    tresc: {
      wstep: 'Peak shaving to strategia zarządzania energią, która polega na ograniczaniu szczytów mocy pobieranej z sieci dzięki magazynowi energii. Dla firm z dużymi szczytami mocy to może oznaczać oszczędności 20 000-100 000 zł rocznie. Ten artykuł wyjaśni krok po kroku, jak działa peak shaving, dla kogo się opłaca i jak obliczyć ROI.',
      sekcje: [
        {
          naglowek: 'Czym jest peak shaving?',
          tresc: 'Peak shaving (ścinanie szczytów) to technika polegająca na użyciu magazynu energii do zmniejszenia maksymalnej mocy pobieranej z sieci w godzinach szczytu zużycia.\\n\\n**Jak to działa?**\\n\\n1. Magazyn energii ładuje się w nocy lub gdy produkcja PV przewyższa zużycie\\n2. W godzinach szczytu (np. 14:00-16:00) zakład zużywa dużo energii\\n3. Magazyn automatycznie rozładowuje się, dostarczając brakującą moc\\n4. Szczyt mocy pobieranej z sieci jest niższy o moc magazynu\\n5. Operator naliczy opłaty za niższą moc zamówioną\\n\\n**Przykład:**\\n\\nBez magazynu:\\n• Szczyt mocy: 400 kW (godz. 14:00)\\n• Moc zamówiona: 400 kW\\n• Opłata za moc: 400 kW × 20 zł/kW/miesiąc = 8 000 zł/miesiąc\\n\\nZ magazynem 100 kW / 200 kWh:\\n• Szczyt mocy z sieci: 300 kW (magazyn dostarcza 100 kW)\\n• Moc zamówiona: 300 kW\\n• Opłata za moc: 300 kW × 20 zł/kW/miesiąc = 6 000 zł/miesiąc\\n\\n**Oszczędność: 2 000 zł/miesiąc = 24 000 zł/rok**',
          lista: [
            'Peak shaving ≠ backup (różne cele)',
            'Backup: zasilanie awaryjne przy zaniku prądu',
            'Peak shaving: obniżenie kosztów mocy zamówionej'
          ]
        },
        {
          naglowek: 'Koszty mocy zamówionej — o co chodzi?',
          tresc: 'W Polsce firmy płacą za dwie składowe energii elektrycznej:\\n\\n**1. Energia czynna (kWh)** — za zużycie energii\\nCena: 0,70-1,20 zł/kWh (zależnie od taryfy)\\n\\n**2. Moc zamówiona (kW)** — za maksymalny szczyt mocy w miesiącu\\nCena: 15-25 zł/kW/miesiąc (zależnie od operatora i poziomu napięcia)\\n\\n**Dlaczego moc zamówiona jest droga?**\\n\\nOperator sieci musi zapewnić Ci dostęp do mocy zamówionej przez 24/7/365. Nawet jeśli używasz szczytu mocy tylko 2 godziny dziennie, płacisz za cały miesiąc.\\n\\n**Przykład:**\\n\\nZakład produkcyjny:\\n• Moc zamówiona: 500 kW\\n• Szczyt mocy występuje tylko 2h/dzień (godz. 14:00-16:00)\\n• Reszta dnia: średnie obciążenie 200-250 kW\\n\\nOpłata za moc: 500 kW × 20 zł/kW = **10 000 zł/miesiąc**\\n\\nGdyby udało się obniżyć szczyt do 400 kW (peak shaving):\\nOpłata za moc: 400 kW × 20 zł/kW = 8 000 zł/miesiąc\\n\\n**Oszczędność: 2 000 zł/miesiąc = 24 000 zł/rok**',
          lista: [
            'Większość firm ma szczyt mocy tylko 1-3 godziny dziennie',
            'Peak shaving "wygładza" profil mocy',
            'Efekt: niższa moc zamówiona, mniejsze opłaty'
          ]
        },
        {
          naglowek: 'Dla kogo peak shaving się opłaca?',
          tresc: '**Peak shaving opłaca się dla firm, które:**\\n\\n1. **Mają wyraźne szczyty mocy**\\n   • Produkcja (uruchamianie maszyn jednocześnie)\\n   • Centra handlowe (klimatyzacja w upalne dni)\\n   • Chłodnie, magazyny mrożone\\n   • Stacje ładowania EV\\n\\n2. **Płacą dużo za moc zamówioną**\\n   • Moc zamówiona > 200 kW\\n   • Opłaty za moc > 5 000 zł/miesiąc\\n\\n3. **Mają regularny profil szczytów**\\n   • Szczyty występują codziennie w podobnych godzinach\\n   • Przewidywalny profil produkcji\\n\\n**Nie opłaca się, jeśli:**\\n• Szczyt mocy występuje cały dzień (brak możliwości "ścięcia")\\n• Moc zamówiona < 100 kW (zbyt małe oszczędności)\\n• Profil mocy chaotyczny (trudno przewidzieć szczyty)',
          lista: [
            'Najlepsze branże: produkcja, logistyka, chłodnie, centra handlowe',
            'ROI zazwyczaj 4-8 lat',
            'Wymaga analizy profilu mocy (15-minutowe odczyty z licznika)'
          ]
        },
        {
          naglowek: 'Dobór magazynu do peak shaving',
          tresc: '**Krok 1: Analiza profilu mocy**\\n\\nPotrzebujesz danych z licznika (15-minutowe odczyty mocy przez minimum 3 miesiące). Na ich podstawie:\\n• Identyfikujesz godziny szczytów\\n• Obliczasz średni szczyt mocy\\n• Określasz czas trwania szczytu\\n\\n**Krok 2: Oblicz moc i pojemność magazynu**\\n\\n**Moc magazynu (kW)** = Wysokość szczytu do "ścięcia"\\nPrzykład: Chcesz obniżyć szczyt z 400 kW do 300 kW → magazyn 100 kW\\n\\n**Pojemność magazynu (kWh)** = Moc × Czas trwania szczytu × 1,2\\nPrzykład: Szczyt trwa 2 godziny → pojemność 100 kW × 2h × 1,2 = 240 kWh\\n\\n**Krok 3: Uwzględnij fotowoltaikę**\\n\\nJeśli masz instalację PV, magazyn może ładować się z nadwyżek produkcji w ciągu dnia (zamiast w nocy z sieci). To zmniejsza koszty ładowania.\\n\\n**Krok 4: System sterowania**\\n\\nMagazyn do peak shaving wymaga inteligentnego systemu sterowania (EMS — Energy Management System), który:\\n• Monitoruje bieżące obciążenie\\n• Przewiduje szczyty na podstawie historii\\n• Automatycznie rozładowuje magazyn w odpowiednim momencie',
          lista: [
            'Typowa konfiguracja: 50-200 kW / 100-400 kWh',
            'Koszt: 150 000 - 600 000 zł (magazyn + EMS + montaż)',
            'Większe systemy: ekonomia skali (niższy koszt za 1 kWh)'
          ]
        },
        {
          naglowek: 'Przykład realnego wdrożenia',
          tresc: '**Zakład produkcyjny — Tychy**\\n\\n**Przed peak shaving:**\\n• Moc zamówiona: 450 kW\\n• Opłata za moc: 450 × 22 zł = 9 900 zł/miesiąc\\n• Szczyt mocy: 14:00-16:00 (uruchamianie prasy, spawarki)\\n• Średnie obciążenie: 250 kW\\n\\n**Rozwiązanie:**\\n• Magazyn energii: 100 kW / 200 kWh\\n• Koszt: 280 000 zł (z montażem i EMS)\\n\\n**Po peak shaving:**\\n• Moc zamówiona: 350 kW (obniżona o 100 kW)\\n• Opłata za moc: 350 × 22 zł = 7 700 zł/miesiąc\\n• **Oszczędność: 2 200 zł/miesiąc = 26 400 zł/rok**\\n\\n**Dodatkowe korzyści:**\\n• Magazyn ładuje się z nadwyżek PV (instalacja 150 kWp)\\n• Oszczędność na energii czynnej: dodatkowe 8 000 zł/rok\\n• Łączne oszczędności: **34 400 zł/rok**\\n\\n**ROI: 280 000 ÷ 34 400 = 8,1 lat**',
          lista: [
            'Po 8 latach: pełny zwrot inwestycji',
            'Żywotność magazynu: 15-20 lat → 7-12 lat czystych oszczędności',
            'Wartość niematerialna: stabilniejsza praca zakładu, mniejsze ryzyko przekroczenia mocy'
          ]
        }
      ],
      podsumowanie: 'Peak shaving to skuteczny sposób na obniżenie kosztów mocy zamówionej dla firm z wyraźnymi szczytami mocy. Opłaca się dla zakładów o mocy zamówionej > 200 kW i opłatach > 5 000 zł/miesiąc. ROI zazwyczaj 4-8 lat. Kluczowe: analiza profilu mocy i dobór magazynu o odpowiedniej mocy i pojemności. Oferujemy audyt energetyczny, analizę profilu mocy i wdrożenie systemu peak shaving. Skontaktuj się z nami — obliczymy potencjał oszczędności.'
    },
    cta: {
      tytul: 'Płacisz dużo za moc zamówioną?',
      opis: 'Umów audyt. Przeanalizujemy profil mocy i obliczymy oszczędności z peak shaving.',
      link: '/kontakt',
      tekstPrzycisku: 'Umów audyt'
    }
  },
  {
    slug: 'czyszczenie-paneli-fotowoltaicznych',
    kategoria: 'Serwis',
    tytul: 'Czyszczenie paneli fotowoltaicznych — czy warto?',
    lead: 'Wpływ brudu na wydajność, częstotliwość czyszczenia, metody i koszty. Kiedy czyszczenie się opłaca?',
    data: '15.02.2025',
    autor: 'Zespół fotowoltaika.info.pl',
    tresc: {
      wstep: 'Panele fotowoltaiczne pokryte kurzem, pyłem, ptasimi odchodami lub mchem produkują mniej energii. Czy jednak czyszczenie paneli się opłaca? Odpowiedź: to zależy. Ten artykuł wyjaśni, kiedy warto czyścić panele, jakie metody są bezpieczne, ile to kosztuje i kiedy lepiej zostawić panele w spokoju.',
      sekcje: [
        {
          naglowek: 'Jak brud wpływa na wydajność paneli?',
          tresc: 'Brud na panelach blokuje światło słoneczne, zmniejszając produkcję energii. Skala strat zależy od rodzaju i ilości brudu.\\n\\n**Typowe straty produkcji:**\\n• Lekki pył/kurz: -2-5%\\n• Średnie zabrudzenie (pył + pollen + smog): -5-10%\\n• Silne zabrudzenie (ptasie odchody + liście): -10-25%\\n• Mech i zarastanie: -20-40%\\n\\n**Dlaczego ptasie odchody są szczególnie szkodliwe?**\\n\\nPtasie odchody tworzą cienie na panelu, które mogą blokować całe ogniwa. Nawet mała plama (5% powierzchni) może obniżyć produkcję panelu o 20-30% (z powodu efektu dominacji najsłabszego ogniwa).\\n\\n**Czy deszcz wystarczy?**\\n\\nW większości przypadków TAK. Deszcz zmywa 70-90% brudu (pył, kurz, pollen). Ale nie zmyje:\\n• Ptasich odchodów (zasychają i twardnieją)\\n• Tłustych plam (smog, spaliny)\\n• Mchu i porostów\\n• Osadów mineralnych (trudna woda)',
          lista: [
            'Kąt nachylenia dachu: im bardziej stromy (>30°), tym lepsze samooczyszczanie',
            'Płaskie dachy (<10°): gorsze samooczyszczanie, częstsze czyszczenie',
            'Lokalizacja: miasto (smog) vs. wieś (pył z pól, ptaki)'
          ]
        },
        {
          naglowek: 'Kiedy warto czyścić panele?',
          tresc: '**Warto czyścić panele, jeśli:**\\n\\n1. **Widzisz wyraźne zabrudzenie**\\n   • Ptasie odchody\\n   • Liście, gałęzie\\n   • Mech (szczególnie na północnej krawędzi)\\n\\n2. **Produkcja spadła o >10% bez wyraźnej przyczyny**\\n   Sprawdź monitoring — jeśli produkcja spadła nagle i nie ma innych przyczyn (awaria, zacienienie), może być brud.\\n\\n3. **Mieszkasz w obszarze o dużym zabrudzeniu**\\n   • Blisko drogi (spaliny, kurz)\\n   • Blisko fabryki, cementowni\\n   • Obszar rolniczy (pył z pól, maszyny)\\n\\n4. **Masz płaski dach (<10°)**\\n   Deszcz nie spływa skutecznie — brud się kumuluje.\\n\\n**NIE warto czyścić, jeśli:**\\n• Panele są lekko zakurzone (deszcz zmyje)\\n• Produkcja jest w normie\\n• Kąt nachylenia >30° (samooczyszczanie działa)\\n• Koszty czyszczenia > oszczędności z większej produkcji',
          lista: [
            'Zalecana częstotliwość: 1-2 razy w roku (wiosna + jesień)',
            'Dom na wsi z płaskim dachem: 3-4 razy w roku',
            'Miasto, dach stromy: może nie wymagać czyszczenia przez lata'
          ]
        },
        {
          naglowek: 'Metody czyszczenia — co jest bezpieczne?',
          tresc: '**1. Woda + miękka szczotka (ZALECANE)**\\n\\nNajbezpieczniejsza metoda:\\n• Woda dejonizowana lub wodociągowa (bez detergentu)\\n• Miękka szczotka teleskopowa z włókna\\n• Delikatne ruchy (bez naciskania)\\n• Spłukanie czystą wodą\\n\\n**Zalety:** Bezpieczne dla paneli, skuteczne dla lekkiego brudu\\n**Wady:** Nie usuwa twardych osadów\\n\\n**2. Woda pod ciśnieniem (OSTROŻNIE)**\\n\\nMyjka ciśnieniowa:\\n• Ciśnienie MAX 100 bar (lepiej 50-80 bar)\\n• Odległość MIN 50 cm od paneli\\n• Kąt 45° (nigdy prostopadle)\\n• NIGDY bezpośrednio na złącza i kable\\n\\n**Zalety:** Skuteczne dla średniego brudu\\n**Wady:** Ryzyko uszkodzenia ogniw przy zbyt dużym ciśnieniu\\n\\n**3. Środki chemiczne (NIE ZALECANE)**\\n\\nDetergenty, mydło, alkohol — NIE!\\n• Mogą uszkodzić powłokę antyrefleksyjną panelu\\n• Pozostawiają osady, które przyciągają brud\\n• Mogą być szkodliwe dla środowiska (spływ do gruntu)\\n\\n**4. Automatyczne systemy czyszczenia (DLA DUŻYCH INSTALACJI)**\\n\\nRoboty czyszczące (np. Boson, Serbot):\\n• Autonomiczne czyszczenie\\n• Dla farm PV (>100 kWp)\\n• Koszt: 50 000-200 000 zł (dla dużych instalacji)',
          lista: [
            'NIGDY nie czyść paneli na sucho (rysy)!',
            'NIGDY nie używaj szczotek z twardym włosiem!',
            'NIGDY nie chodź po panelach (mikropęknięcia)!'
          ]
        },
        {
          naglowek: 'Koszty czyszczenia paneli',
          tresc: '**Czyszczenie przez firmę:**\\n\\nCeny (2025):\\n• Dom (do 10 kWp): 300-600 zł\\n• Dom (10-20 kWp): 600-1000 zł\\n• Firma (50 kWp): 1500-2500 zł\\n• Firma (100 kWp): 2500-4000 zł\\n\\nCena zależy od:\\n• Mocy instalacji (liczby paneli)\\n• Dostępności dachu (stromy, wysoko)\\n• Stopnia zabrudzenia\\n• Lokalizacji\\n\\n**Czyszczenie we własnym zakresie:**\\n\\nKoszty:\\n• Szczotka teleskopowa: 200-400 zł (jednorazowy zakup)\\n• Woda: ~50 zł\\n• Czas: 1-3 godziny\\n\\n**Czy warto czyścić samemu?**\\n\\nTAK, jeśli:\\n• Dach jest łatwo dostępny\\n• Kąt nachylenia <30° (bezpieczne wejście)\\n• Masz sprzęt (szczotka, wąż)\\n\\nNIE, jeśli:\\n• Dach jest stromy (>45°) — ryzyko upadku\\n• Panele są wysoko (>6m)\\n• Nie masz doświadczenia w pracy na wysokości',
          lista: [
            'Ubezpieczenie: sprawdź czy OC obejmuje prace na dachu',
            'Bezpieczeństwo: zawsze używaj lin asekuracyjnych na stromych dachach',
            'Gwarancja: sprawdź czy samodzielne czyszczenie nie narusza gwarancji'
          ]
        },
        {
          naglowek: 'Czy czyszczenie się opłaca? — matematyka',
          tresc: '**Przykład: Dom z instalacją 8 kWp**\\n\\n**Bez czyszczenia:**\\n• Zabrudzenie: -8% produkcji\\n• Produkcja roczna: 8000 kWh × 0,92 = 7360 kWh\\n• Wartość: 7360 × 0,80 zł = 5888 zł\\n\\n**Po czyszczeniu:**\\n• Produkcja roczna: 8000 kWh\\n• Wartość: 8000 × 0,80 zł = 6400 zł\\n\\n**Korzyść: 6400 - 5888 = 512 zł/rok**\\n**Koszt czyszczenia: 400 zł (1× rocznie)**\\n\\n**Wniosek:** Opłaca się (oszczędność 112 zł/rok).\\n\\n---\\n\\n**Przykład: Firma 100 kWp**\\n\\n**Bez czyszczenia:**\\n• Zabrudzenie: -10% produkcji\\n• Produkcja roczna: 100 000 kWh × 0,90 = 90 000 kWh\\n• Wartość: 90 000 × 0,95 zł = 85 500 zł\\n\\n**Po czyszczeniu (2× rocznie):**\\n• Produkcja roczna: 100 000 kWh\\n• Wartość: 100 000 × 0,95 zł = 95 000 zł\\n\\n**Korzyść: 95 000 - 85 500 = 9 500 zł/rok**\\n**Koszt czyszczenia: 3000 zł × 2 = 6 000 zł/rok**\\n\\n**Wniosek:** ZDECYDOWANIE się opłaca (oszczędność 3 500 zł/rok).',
          lista: [
            'Im większa instalacja, tym bardziej opłacalne czyszczenie',
            'Dla domów (<10 kWp): opłacalne tylko przy silnym zabrudzeniu',
            'Dla firm (>50 kWp): ZAWSZE opłacalne (minimum 1× rocznie)'
          ]
        }
      ],
      podsumowanie: 'Czyszczenie paneli fotowoltaicznych opłaca się przede wszystkim dla dużych instalacji firmowych (>50 kWp) i domów z płaskimi dachami lub w obszarach o dużym zabrudzeniu. Dla typowego domu z dachem stromym deszcz załatwia większość pracy. Zalecana częstotliwość: 1-2 razy w roku (wiosna + jesień). Metoda: woda + miękka szczotka. Oferujemy profesjonalne czyszczenie paneli z gwarancją bezpieczeństwa i skuteczności. Skontaktuj się z nami!'
    },
    cta: {
      tytul: 'Chcesz profesjonalnie wyczyścić panele?',
      opis: 'Umów czyszczenie. Bezpiecznie i skutecznie usuniemy brud, zwiększając produkcję energii.',
      link: '/kontakt',
      tekstPrzycisku: 'Umów czyszczenie'
    }
  },
  {
    slug: 'technologie-paneli-perc-topcon-hjt',
    kategoria: 'Technologie',
    tytul: 'PERC, TOPCon, HJT — jakie panele wybrać w 2025?',
    lead: 'Przegląd najnowszych technologii paneli fotowoltaicznych. Wydajność, cena, trwałość.',
    data: '10.02.2025',
    autor: 'Zespół fotowoltaika.info.pl',
    tresc: {
      wstep: 'Rynek paneli fotowoltaicznych ewoluuje błyskawicznie. Jeszcze 5 lat temu standard to były panele polikrystaliczne o mocy 270W. Dziś: monokrystaliczne PERC 400-450W. A w 2025? TOPCon i HJT wchodzą do mainstreamu. Ten przewodnik wyjaśni różnice między technologiami, ich zalety, wady i ceny, abyś mógł świadomie wybrać panele do swojej instalacji.',
      sekcje: [
        {
          naglowek: 'Podstawy: Czym różnią się technologie paneli?',
          tresc: 'Wszystkie panele fotowoltaiczne działają na tej samej zasadzie (efekt fotowoltaiczny w krzemie). Różnią się natomiast konstrukcją ogniwa i procesem produkcji, co wpływa na:\\n\\n• **Sprawność** (ile % energii słonecznej zamienia się w prąd)\\n• **Moc** (ile W produkuje panel o danej powierzchni)\\n• **Współczynnik temperaturowy** (jak bardzo moc spada przy wysokich temperaturach)\\n• **Degradację** (jak szybko panel traci moc w ciągu lat)\\n• **Cenę**\\n\\n**Ewolucja technologii:**\\n\\n2015: **Polikrystaliczne** (poly-Si) — sprawność 15-17%, 250-270W\\n2018: **Monokrystaliczne** (mono-Si) — sprawność 18-20%, 300-350W\\n2020: **PERC** (Passivated Emitter and Rear Cell) — sprawność 20-22%, 350-450W\\n2023: **TOPCon** (Tunnel Oxide Passivated Contact) — sprawność 22-24%, 450-550W\\n2024: **HJT** (Heterojunction Technology) — sprawność 23-25%, 500-600W\\n2025: **Perovskite** (jeszcze w fazie R&D, ale obiecująca przyszłość)',
          lista: [
            'Trend: większa moc, wyższa sprawność, lepsza trwałość',
            'Ceny spadają z roku na rok (ekonomia skali)',
            'W 2025: PERC wciąż dominuje, ale TOPCon szybko rośnie'
          ]
        },
        {
          naglowek: 'PERC — obecny standard',
          tresc: '**PERC (Passivated Emitter and Rear Cell)**\\n\\nTo obecnie najpopularniejsza technologia (80% rynku w 2025).\\n\\n**Jak działa?**\\n\\nOgniwo PERC ma dodatkową warstwę pasywacyjną na tylnej stronie, która:\\n• Odbija niewykorzystane fotony z powrotem do ogniwa\\n• Zmniejsza rekombinację elektronów (mniej strat)\\n• Zwiększa sprawność o 1-2% vs. tradycyjne mono-Si\\n\\n**Specyfikacja typowa (2025):**\\n• Sprawność: 20,5-22,5%\\n• Moc: 400-450W (panel 1,7 m²)\\n• Współczynnik temperaturowy: -0,35% / °C\\n• Degradacja rok 1: 2%\\n• Degradacja lata 2-25: 0,55%/rok\\n• Gwarancja mocy (rok 25): 84-85%\\n• Cena: 0,80-1,20 zł/W (panel 400W: 320-480 zł)\\n\\n**Zalety:**\\n• Sprawdzona technologia (miliony instalacji)\\n• Dobry stosunek ceny do wydajności\\n• Szeroka dostępność (wszystkie główne producenci)\\n• Dobra wydajność w słabym świetle\\n\\n**Wady:**\\n• Wyższy współczynnik temperaturowy niż TOPCon/HJT (większe straty latem)\\n• Degradacja ~0,55%/rok (szybsza niż TOPCon/HJT)\\n• LID (Light Induced Degradation) — niewielki spadek mocy w pierwszych tygodniach',
          lista: [
            'PERC to bezpieczny wybór na 2025 rok',
            'Najlepszy stosunek ceny do wydajności',
            'Polecane marki: JA Solar, Longi, Trina, Canadian Solar'
          ]
        },
        {
          naglowek: 'TOPCon — przyszłość mainstreamu',
          tresc: '**TOPCon (Tunnel Oxide Passivated Contact)**\\n\\nNowa generacja paneli, która szybko wypiera PERC. W 2025 roku udział rynkowy: ~30% (prognoza: 60% w 2027).\\n\\n**Jak działa?**\\n\\nOgniwo TOPCon ma:\\n• Ultracienką warstwę tlenku tunelowego (1-2 nm)\\n• Dodatkową warstwę polikrzemową na tylnej stronie\\n• Lepszą pasywację niż PERC → mniejsze straty elektronów\\n\\n**Specyfikacja typowa (2025):**\\n• Sprawność: 22-24,5%\\n• Moc: 450-550W (panel 1,7 m²)\\n• Współczynnik temperaturowy: -0,29% / °C (lepszy o 20% niż PERC!)\\n• Degradacja rok 1: 1%\\n• Degradacja lata 2-30: 0,4%/rok\\n• Gwarancja mocy (rok 30): 88-90%\\n• Cena: 1,00-1,50 zł/W (panel 500W: 500-750 zł)\\n\\n**Zalety:**\\n• Wyższa sprawność niż PERC (+10-15% mocy)\\n• Lepszy współczynnik temperaturowy (mniej strat latem)\\n• Wolniejsza degradacja (0,4% vs. 0,55% rocznie)\\n• Dłuższa gwarancja (30 lat vs. 25 lat)\\n• Mniejszy LID\\n• Lepsze zachowanie w słabym świetle i przy wysokich temperaturach\\n\\n**Wady:**\\n• Droższy niż PERC (+15-25%)\\n• Mniejsza dostępność (nie wszyscy producenci)\\n• Nowa technologia (krótsza historia)',
          lista: [
            'TOPCon to najlepszy wybór długoterminowy (30 lat gwarancji)',
            'Opłaca się szczególnie na stromych/płaskich dachach (wysokie temperatury latem)',
            'Polecane marki: Longi Hi-MO 7, JA Solar JAM54D41, Trina Vertex S+'
          ]
        },
        {
          naglowek: 'HJT — premium dla wymagających',
          tresc: '**HJT (Heterojunction Technology)**\\n\\nNajnowsza (i najdroższa) technologia dostępna komercyjnie w 2025.\\n\\n**Jak działa?**\\n\\nOgniwo HJT łączy:\\n• Monokrystaliczny krzem (c-Si) w środku\\n• Cienkie warstwy amorficznego krzemu (a-Si) po obu stronach\\n• Niższa temperatura produkcji niż PERC/TOPCon\\n\\n**Specyfikacja typowa (2025):**\\n• Sprawność: 23-25%\\n• Moc: 500-620W (panel 1,7 m²)\\n• Współczynnik temperaturowy: -0,24% / °C (najlepszy!)\\n• Degradacja rok 1: 0,5%\\n• Degradacja lata 2-30: 0,25%/rok (najwolniejsza!)\\n• Gwarancja mocy (rok 30): 92-94%\\n• Cena: 1,50-2,20 zł/W (panel 550W: 825-1210 zł)\\n\\n**Zalety:**\\n• Najwyższa sprawność na rynku\\n• Najlepszy współczynnik temperaturowy (idealne dla gorącego klimatu)\\n• Najwolniejsza degradacja (0,25%/rok!)\\n• Dwustronne ogniwa (bifacial) — produkcja z obu stron panelu\\n• Świetne zachowanie w słabym świetle\\n• Brak LID\\n• Niższa emisja CO₂ w produkcji\\n\\n**Wady:**\\n• Najdroższy (30-50% drożej niż PERC)\\n• Ograniczona dostępność\\n• Wymaga specjalistycznych narzędzi do montażu (delikatniejszy)\\n• Trudniej dostępny serwis',
          lista: [
            'HJT to wybór premium — najlepsza technologia, ale najwyższa cena',
            'Opłaca się dla małych dachów (więcej mocy na m²)',
            'Polecane marki: Meyer Burger, REC Alpha Pure-R, Panasonic Evervolt'
          ]
        },
        {
          naglowek: 'Która technologia dla Ciebie? — rekomendacje',
          tresc: '**PERC — dla typowego domu (best value)**\\n\\n✅ Wybierz PERC, jeśli:\\n• Masz standardowy budżet (4000-4500 zł/kWp)\\n• Dach ma dużą powierzchnię (brak problemu z miejscem)\\n• Orientacja optymalna (południe, kąt 30-40°)\\n• Zależy Ci na sprawdzonym rozwiązaniu\\n\\nPrzykład: Dom 150 m², instalacja 8 kWp\\n• 20 paneli PERC 400W\\n• Koszt: 33 600 zł\\n• Produkcja: 8000 kWh/rok\\n\\n---\\n\\n**TOPCon — dla długoterminowej inwestycji**\\n\\n✅ Wybierz TOPCon, jeśli:\\n• Planujesz instalację na 30 lat\\n• Zależy Ci na lepszej wydajności latem (wysokie temperatury)\\n• Masz budżet +15% vs. PERC\\n• Chcesz mniejszą degradację\\n\\nPrzykład: Dom 150 m², instalacja 8 kWp\\n• 18 paneli TOPCon 450W (mniej paneli, ta sama moc!)\\n• Koszt: 38 000 zł\\n• Produkcja: 8200 kWh/rok (lepsze zachowanie w upały)\\n\\n---\\n\\n**HJT — dla małych dachów i wymagających**\\n\\n✅ Wybierz HJT, jeśli:\\n• Masz mały dach (potrzebujesz maksymalnej mocy na m²)\\n• Mieszkasz w gorącym klimacie\\n• Zależy Ci na najlepszej technologii (bez względu na cenę)\\n• Planujesz instalację premium\\n\\nPrzykład: Dom 100 m², mały dach\\n• 10 paneli HJT 550W = 5,5 kWp (zamiast 12 paneli PERC = 4,8 kWp)\\n• Koszt: 30 000 zł\\n• Produkcja: 5700 kWh/rok',
          lista: [
            '90% domów: PERC wystarczy',
            '10% domów: TOPCon/HJT jeśli masz mały dach lub gorący klimat',
            'Firmy (>50 kWp): TOPCon — lepszy ROI długoterminowy'
          ]
        }
      ],
      podsumowanie: 'W 2025 roku masz wybór między trzema dojrzałymi technologiami: PERC (standard, best value), TOPCon (przyszłość mainstreamu, lepsza wydajność) i HJT (premium, maksymalna moc). Dla większości domów PERC wystarczy — sprawdzona technologia, dobra cena. TOPCon to dobry wybór długoterminowy (30 lat gwarancji, wolniejsza degradacja). HJT — tylko dla wymagających lub małych dachów. Pomożemy Ci wybrać optymalne panele do Twojej instalacji. Skontaktuj się z nami!'
    },
    cta: {
      tytul: 'Nie wiesz, jakie panele wybrać?',
      opis: 'Umów audyt. Dobierzemy technologię optymalną dla Twojego dachu i budżetu.',
      link: '/kontakt',
      tekstPrzycisku: 'Umów audyt 0 zł'
    }
  }`;
