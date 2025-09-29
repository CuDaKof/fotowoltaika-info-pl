export interface Kategoria {
  slug: string;
  nazwa: string;
  nazwaWPliku: string; // Nazwa używana w artykuly.ts
  ikona: string;
  opis: string;
  longDesc: string;
}

export const KATEGORIE: Kategoria[] = [
  {
    slug: 'podstawy',
    nazwa: 'Podstawy fotowoltaiki',
    nazwaWPliku: 'Podstawy',
    ikona: '📚',
    opis: 'Jak działa fotowoltaika',
    longDesc: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Fotowoltaika to technologia przekształcania energii słonecznej w energię elektryczną. W tej sekcji znajdziesz wszystko, co musisz wiedzieć na start: od podstawowych zasad działania instalacji PV, przez komponenty systemu, aż po różnice między systemami on-grid i off-grid.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Dowiesz się, jak panele fotowoltaiczne wytwarzają prąd, jaką rolę pełni falownik, czym jest biiling i autokonsumpcja, oraz jak wygląda zwrot z inwestycji. Przeczytaj te artykuły, zanim podejmiesz decyzję o montażu instalacji — zaoszczędzisz czas i unikniesz błędów.
      </p>
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
        <h3 class="font-bold text-lg mb-3 text-blue-900">💡 Dla kogo są te artykuły?</h3>
        <ul class="space-y-2 text-gray-800">
          <li>✓ Osoby rozważające instalację fotowoltaiki</li>
          <li>✓ Właściciele domów jednorodzinnych</li>
          <li>✓ Przedsiębiorcy planujący inwestycję w OZE</li>
          <li>✓ Wszyscy, którzy chcą zrozumieć zasady działania PV</li>
        </ul>
      </div>
    `
  },
  {
    slug: 'wybor-instalacji',
    nazwa: 'Wybór instalacji PV',
    nazwaWPliku: 'Wybór instalacji',
    ikona: '🔍',
    opis: 'Moc, panele, falowniki',
    longDesc: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Dobór odpowiedniej instalacji fotowoltaicznej to kluczowy krok do maksymalizacji oszczędności. W tej sekcji dowiesz się, jak obliczyć optymalną moc instalacji dla Twojego domu lub firmy, jakie panele wybrać (moc, sprawność, producent), oraz jaki falownik będzie najlepszy dla Twojego profilu zużycia energii.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Przeczytasz także o tym, jak kąt nachylenia dachu i orientacja wpływają na produkcję energii, jakie są różnice między instalacjami 5 kWp, 10 kWp i większymi, oraz jak uniknąć przewymiarowania lub niedowymiarowania systemu. Praktyczne kalkulatory i przykłady pomogą Ci podjąć świadomą decyzję.
      </p>
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
        <h3 class="font-bold text-lg mb-3 text-blue-900">⚡ Kluczowe pytania, na które odpowiadamy:</h3>
        <ul class="space-y-2 text-gray-800">
          <li>✓ Jaka moc instalacji PV jest optymalna dla mojego zużycia?</li>
          <li>✓ Jakie panele wybrać: PERC, TOPCon, HJT?</li>
          <li>✓ Jaki falownik: stringowy czy mikrofalowniki?</li>
          <li>✓ Czy mój dach nadaje się do fotowoltaiki?</li>
        </ul>
      </div>
    `
  },
  {
    slug: 'magazyny-energii',
    nazwa: 'Magazyny energii',
    nazwaWPliku: 'Magazyny energii',
    ikona: '🔋',
    opis: 'Baterie i autokonsumpcja',
    longDesc: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Magazyny energii (baterie) to naturalne rozszerzenie instalacji fotowoltaicznej, które pozwala zwiększyć autokonsumpcję z 30-40% do nawet 80-90%. W tej sekcji dowiesz się, kiedy magazyn energii się opłaca, jak dobrać pojemność (kWh) do Twojego profilu zużycia, oraz jakie są różnice między systemami AC-coupled i DC-coupled.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Przeczytasz także o funkcji EPS/backup (zasilanie awaryjne), o różnicach między bateriami litowymi (LFP, NMC), oraz o tym, jak magazyn energii wpływa na zwrot z inwestycji. Praktyczne przykłady ROI i case studies pomogą Ci podjąć decyzję, czy magazyn jest dla Ciebie.
      </p>
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
        <h3 class="font-bold text-lg mb-3 text-blue-900">🔋 Magazyn energii — dla kogo?</h3>
        <ul class="space-y-2 text-gray-800">
          <li>✓ Osoby z dużym zużyciem energii wieczorem/nocą</li>
          <li>✓ Domy z pompami ciepła i klimatyzacją</li>
          <li>✓ Firmy chcące obniżyć szczyty mocy (peak shaving)</li>
          <li>✓ Wszyscy, którzy chcą niezależności energetycznej</li>
        </ul>
      </div>
    `
  },
  {
    slug: 'doplaty',
    nazwa: 'Dopłaty do fotowoltaiki',
    nazwaWPliku: 'Dopłaty',
    ikona: '💰',
    opis: 'Programy wsparcia 2025',
    longDesc: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Programy dopłat do fotowoltaiki w 2025 roku obejmują zarówno dotacje krajowe (np. programy gminne, NFOŚiGW), jak i ulgi podatkowe. W tej sekcji znajdziesz aktualne informacje o dostępnych źródłach finansowania, wymaganiach formalnych, wysokości dofinansowania, oraz terminach składania wniosków.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Dowiesz się także, jak ubiegać się o dotację krok po kroku, jakie dokumenty są wymagane, oraz jakie pułapki unikać (np. wymóg audytu energetycznego, termin realizacji, rozliczenie końcowe). Praktyczne porady i linki do aktualnych programów pomogą Ci zmaksymalizować wsparcie finansowe.
      </p>
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
        <h3 class="font-bold text-lg mb-3 text-blue-900">💰 Dostępne programy 2025:</h3>
        <ul class="space-y-2 text-gray-800">
          <li>✓ Programy gminne: do 10 000 zł (zależnie od gminy)</li>
          <li>✓ Ulga termomodernizacyjna: do 53 000 zł</li>
          <li>✓ Dofinansowanie dla firm (NFOŚiGW, RPO)</li>
          <li>✓ Leasing i pożyczki preferencyjne</li>
        </ul>
      </div>
    `
  },
  {
    slug: 'montaz',
    nazwa: 'Montaż instalacji PV',
    nazwaWPliku: 'Montaż',
    ikona: '🛠️',
    opis: 'Przygotowanie i realizacja',
    longDesc: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Montaż instalacji fotowoltaicznej to kluczowy etap, który decyduje o wydajności i bezpieczeństwie systemu na lata. W tej sekcji dowiesz się, jak przygotować dach do montażu paneli, jakie są wymagania dotyczące konstrukcji wsporczej, oraz jak przebiega typowy proces realizacji (od audytu, przez montaż, po odbiór).
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Przeczytasz także o tym, jak wybrać dobrego instalatora (na co zwrócić uwagę w umowie, jakie uprawnienia są wymagane), jakie są najczęstsze błędy montażowe, oraz jak uniknąć problemów z odbiorem przez OSD. Praktyczne checklista i porady pomogą Ci kontrolować jakość prac.
      </p>
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
        <h3 class="font-bold text-lg mb-3 text-blue-900">🛠️ Etapy montażu instalacji PV:</h3>
        <ul class="space-y-2 text-gray-800">
          <li>✓ Audyt na miejscu (pomiar dachu, analiza zacienienia)</li>
          <li>✓ Projekt techniczny i zgłoszenie do OSD</li>
          <li>✓ Montaż konstrukcji, paneli i falownika (1-3 dni)</li>
          <li>✓ Odbiór przez OSD i uruchomienie systemu</li>
        </ul>
      </div>
    `
  },
  {
    slug: 'dla-firm',
    nazwa: 'Fotowoltaika dla firm',
    nazwaWPliku: 'Dla firm',
    ikona: '🏭',
    opis: 'Kompensacja, peak shaving',
    longDesc: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Fotowoltaika dla firm to inwestycja, która może obniżyć koszty energii o 40-70% i zapewnić przewidywalne wydatki na lata. W tej sekcji dowiesz się, jak obliczyć ROI dla instalacji biznesowej, jakie są specyficzne rozwiązania dla firm (kompensacja mocy biernej, peak shaving, magazyny energii), oraz jak fotowoltaika wpływa na bilans finansowy przedsiębiorstwa.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Przeczytasz także o audytach energetycznych dla firm, o różnicach między instalacjami na dachach hal a gruntowymi farmami PV, oraz o opcjach finansowania (leasing, forfaiting, PPA). Case studies z realnych wdrożeń pokażą, jakie oszczędności są możliwe w różnych branżach.
      </p>
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
        <h3 class="font-bold text-lg mb-3 text-blue-900">🏭 Fotowoltaika dla firm — kluczowe korzyści:</h3>
        <ul class="space-y-2 text-gray-800">
          <li>✓ Obniżenie kosztów energii o 40-70%</li>
          <li>✓ Amortyzacja 100% w 1. roku (dla firm)</li>
          <li>✓ Kompensacja mocy biernej (oszczędność 10-30 tys. zł/rok)</li>
          <li>✓ Peak shaving — obniżenie opłat za moc zamówioną</li>
        </ul>
      </div>
    `
  },
  {
    slug: 'serwis',
    nazwa: 'Serwis i utrzymanie',
    nazwaWPliku: 'Serwis',
    ikona: '⚙️',
    opis: 'Utrzymanie i monitoring',
    longDesc: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Instalacja fotowoltaiczna wymaga minimalnego serwisu, ale regularne przeglądy i czyszczenie mogą zwiększyć produkcję energii o 5-15%. W tej sekcji dowiesz się, jakie czynności serwisowe są zalecane (przeglądy, czyszczenie paneli, kontrola połączeń), jak często powinny być wykonywane, oraz ile kosztuje profesjonalny serwis.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Przeczytasz także o monitoringu instalacji (systemy online, alerty o awariach), o typowych usterek i jak je rozpoznać, oraz o gwarancjach (co obejmuje gwarancja producenta vs. instalatora). Praktyczne porady pomogą Ci utrzymać instalację w optymalnej kondycji przez lata.
      </p>
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
        <h3 class="font-bold text-lg mb-3 text-blue-900">⚙️ Zalecany harmonogram serwisu:</h3>
        <ul class="space-y-2 text-gray-800">
          <li>✓ Monitoring online: codziennie (automatyczny)</li>
          <li>✓ Czyszczenie paneli: 1-2 razy w roku</li>
          <li>✓ Przegląd techniczny: co 2-3 lata</li>
          <li>✓ Wymiana falownika: po 10-15 latach</li>
        </ul>
      </div>
    `
  },
  {
    slug: 'technologie',
    nazwa: 'Technologie i innowacje',
    nazwaWPliku: 'Technologie',
    ikona: '🚀',
    opis: 'Nowinki i trendy',
    longDesc: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Rynek fotowoltaiki ewoluuje błyskawicznie — nowe technologie paneli (TOPCon, HJT, perovskite), inteligentne systemy zarządzania energią, integracje z pompami ciepła i samochodami elektrycznymi. W tej sekcji znajdziesz przegląd najnowszych rozwiązań, które wkrótce staną się standardem.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Dowiesz się, czym różnią się panele PERC, TOPCon i HJT (sprawność, cena, trwałość), jak działają bifacial panels (dwustronne panele), oraz jakie są prognozy rozwoju technologii na najbliższe lata. Jeśli planujesz inwestycję na 25-30 lat, warto wiedzieć, co przyniesie przyszłość.
      </p>
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
        <h3 class="font-bold text-lg mb-3 text-blue-900">🚀 Trendy 2025:</h3>
        <ul class="space-y-2 text-gray-800">
          <li>✓ TOPCon wypiera PERC (większa sprawność, lepsza trwałość)</li>
          <li>✓ Magazyny energii LFP (bezpieczniejsze, tańsze)</li>
          <li>✓ Integracje PV + pompa ciepła + EV (smart home)</li>
          <li>✓ Panele bifacial (produkcja z obu stron)</li>
        </ul>
      </div>
    `
  }
];
