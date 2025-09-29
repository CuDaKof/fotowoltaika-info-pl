export interface Artykul {
  slug: string;
  kategoria: string;
  tytul: string;
  lead: string;
  data: string;
  autor: string;
  obrazek?: string;
  tresc: {
    wstep: string;
    sekcje: {
      naglowek: string;
      tresc: string;
      lista?: string[];
    }[];
    podsumowanie: string;
  };
  faq?: {
    pytanie: string;
    odpowiedz: string;
  }[];
  cta: {
    tytul: string;
    opis: string;
    link: string;
    tekstPrzycisku: string;
  };
}

export const ARTYKULY: Artykul[] = [
  {
    slug: 'jak-dziala-fotowoltaika',
    kategoria: 'Podstawy',
    tytul: 'Jak działa fotowoltaika? Kompletny przewodnik 2025',
    lead: 'Wszystko co musisz wiedzieć o panelach PV, falownikach i produkcji energii. Od podstaw do zaawansowanych zagadnień.',
    data: '15.03.2025',
    autor: 'Zespół fotowoltaika.info.pl',
    tresc: {
      wstep: 'Fotowoltaika to technologia przekształcania energii słonecznej w energię elektryczną. W Polsce coraz więcej właścicieli domów i firm decyduje się na instalację paneli fotowoltaicznych, by uniezależnić się od rosnących cen prądu. Ten kompleksowy przewodnik wyjaśni krok po kroku, jak działa instalacja PV, jakie są jej komponenty i dlaczego warto w nią zainwestować.',
      sekcje: [
        {
          naglowek: 'Podstawy efektu fotowoltaicznego',
          tresc: 'Efekt fotowoltaiczny to zjawisko fizyczne odkryte w 1839 roku przez francuskiego fizyka Edmond Becquerela. Polega na przekształcaniu energii fotonów światła słonecznego w energię elektryczną. Gdy fotony uderzają w półprzewodnikowe materiały panelu (zazwyczaj krzem), wybijają z nich elektrony, które zaczynają się poruszać, tworząc prąd elektryczny.',
          lista: [
            'Panel PV składa się z wielu ogniw fotowoltaicznych połączonych szeregowo',
            'Każde ogniwo wytwarza napięcie ~0,5-0,6V',
            'Typowy panel ma 60-72 ogniw, generując 30-40V prądu stałego (DC)',
            'Moc jednego panelu: 350-550W (w 2025 roku)'
          ]
        },
        {
          naglowek: 'Komponenty instalacji fotowoltaicznej',
          tresc: 'Kompletna instalacja fotowoltaiczna składa się z kilku kluczowych elementów. Każdy z nich pełni istotną rolę w procesie produkcji i wykorzystania energii słonecznej.',
          lista: [
            'Panele fotowoltaiczne — zamieniają światło w prąd stały',
            'Falownik (inwerter) — przekształca prąd stały na prąd zmienny 230V/400V',
            'Konstrukcja montażowa — mocuje panele do dachu lub gruntu',
            'Okablowanie DC i AC — łączy komponenty',
            'Zabezpieczenia — wyłączniki DC, SPD (ochrona przepięciowa), AC',
            'Licznik dwukierunkowy — rejestruje pobór i oddanie energii do sieci',
            'Magazyn energii (opcjonalnie) — gromadzi nadwyżki energii'
          ]
        },
        {
          naglowek: 'Proces produkcji energii — krok po kroku',
          tresc: 'Poranek, pierwsze promienie słońca padają na Twój dach. Oto co się dzieje:\n\n1. Fotony światła uderzają w panele fotowoltaiczne\n2. Efekt fotowoltaiczny wyzwala przepływ elektronów w ogniwach\n3. Panele generują prąd stały (DC) o napięciu 300-600V\n4. Prąd DC trafia przez okablowanie do falownika\n5. Falownik przekształca DC na AC 230V/400V (częstotliwość 50Hz)\n6. Prąd AC trafia do rozdzielni domowej\n7. Urządzenia w domu zużywają energię bezpośrednio\n8. Nadwyżka trafia do sieci lub do magazynu energii\n9. Licznik dwukierunkowy rejestruje bilans energii'
        },
        {
          naglowek: 'Wydajność i produkcja energii w Polsce',
          tresc: 'Polska leży w strefie nasłonecznienia 950-1250 kWh/m²/rok. To oznacza, że instalacja 1 kWp wyprodukuje rocznie około 900-1100 kWh energii elektrycznej (zależnie od regionu, orientacji i kąta nachylenia).',
          lista: [
            'Najlepsze nasłonecznienie: Lubelskie, Podkarpackie (1100-1200 kWh/kWp)',
            'Śląsk, Małopolska: 950-1050 kWh/kWp',
            'Północna Polska: 900-1000 kWh/kWp',
            'Optymalna orientacja: południe (180°)',
            'Optymalny kąt nachylenia: 30-40° (dla Polski)',
            'Strata wydajności: orientacja wschód/zachód -15%, płaski dach -10%'
          ]
        },
        {
          naglowek: 'Różnice między systemami on-grid i off-grid',
          tresc: 'W Polsce dominują instalacje on-grid (przyłączone do sieci). System off-grid to rozwiązanie dla miejsc bez dostępu do sieci energetycznej.',
        },
        {
          naglowek: 'Net-billing — jak działa rozliczenie z OSD',
          tresc: 'Od 1 lipca 2022 roku w Polsce obowiązuje system net-billing (dla nowych instalacji). Oznacza to, że energia oddana do sieci jest rozliczana w złotówkach, a nie jak wcześniej w kWh (prosument).\n\nZasady net-billing:\n• Otrzymujesz 80% wartości rynkowej energii oddanej do sieci (cena hurtowa ~0,40-0,60 zł/kWh)\n• Zwrot pojawia się jako depozyt prosumencki na koncie\n• Depozyt możesz wykorzystać w ciągu 12 miesięcy\n• Po roku niewykorzystany depozyt przepada\n\nPrzykład: Oddałeś 1000 kWh do sieci (cena hurtowa 0,50 zł/kWh). Otrzymujesz: 1000 × 0,50 × 0,80 = 400 zł depozytu.\n\nDlatego tak ważna jest autokonsumpcja — bezpośrednie zużycie wyprodukowanej energii.'
        }
      ],
      podsumowanie: 'Fotowoltaika to sprawdzona, bezobsługowa technologia przekształcania energii słonecznej w prąd elektryczny. Rozumiejąc zasady jej działania, łatwiej podejmiesz decyzję o inwestycji i będziesz świadomie korzystać z instalacji. Pamiętaj: najważniejsza jest autokonsumpcja — im więcej energii zużyjesz bezpośrednio, tym większe oszczędności.'
    },
    cta: {
      tytul: 'Chcesz dowiedzieć się, ile energii wyprodukuje instalacja na Twoim dachu?',
      opis: 'Umów bezpłatny audyt. Obliczymy dokładną produkcję, moc instalacji i oszczędności.',
      link: '/kontakt',
      tekstPrzycisku: 'Umów audyt 0 zł'
    }
  },
  {
    slug: 'jaka-moc-instalacji-pv',
    kategoria: 'Wybór instalacji',
    tytul: 'Jaka moc instalacji PV dla Twojego domu?',
    lead: 'Jak obliczyć optymalną moc instalacji fotowoltaicznej? Kalkulator i przykłady dla różnych profili zużycia.',
    data: '12.03.2025',
    autor: 'Zespół fotowoltaika.info.pl',
    tresc: {
      wstep: 'Dobór mocy instalacji fotowoltaicznej to najważniejsza decyzja przed inwestycją. Za mała moc = niewystarczające pokrycie zużycia. Za duża moc = przepłacisz i nie wykorzystasz potencjału. Ten przewodnik pomoże Ci precyzyjnie obliczyć, ile kWp potrzebujesz dla swojego domu.',
      sekcje: [
        {
          naglowek: 'Podstawowa zasada doboru mocy',
          tresc: 'Moc instalacji PV dobieramy na podstawie rocznego zużycia energii elektrycznej. Podstawowa formuła:\n\nMoc instalacji (kWp) = Roczne zużycie (kWh) ÷ 1000\n\nDlaczego dzielimy przez 1000? Bo 1 kWp w Polsce produkuje rocznie średnio 950-1100 kWh (przyjmujemy 1000 kWh dla uproszczenia).',
          lista: [
            'Zużycie 3000 kWh/rok → instalacja 3-4 kWp',
            'Zużycie 4500 kWh/rok → instalacja 4-5 kWp',
            'Zużycie 6000 kWh/rok → instalacja 6-7 kWp',
            'Zużycie 9000 kWh/rok → instalacja 9-10 kWp'
          ]
        },
        {
          naglowek: 'Gdzie znaleźć informacje o swoim zużyciu?',
          tresc: 'Roczne zużycie energii znajdziesz na:\n\n1. Fakturach za prąd — suma z 12 miesięcy\n2. E-licznik lub aplikacja OSD (Tauron eLicznik, Enea Operator, PGE Dystrybucja)\n3. Licznik elektroniczny — odczyt bezpośredni\n\nJeśli nie masz dostępu do historii, szacuj na podstawie miesięcznego zużycia × 12.\n\nŚrednie zużycie w Polsce:\n• Mieszkanie 50 m² (2 osoby): 1500-2500 kWh/rok\n• Dom 100 m² (3-4 osoby): 3000-4500 kWh/rok\n• Dom 150 m² (4-5 osób): 5000-7000 kWh/rok\n• Dom 200 m² + pompa ciepła: 8000-12000 kWh/rok'
        },
        {
          naglowek: 'Profil zużycia — dlaczego jest ważny?',
          tresc: 'Nie wystarczy znać roczne zużycie. Kluczowy jest profil dobowy — kiedy zużywasz najwięcej energii.\n\nProfil dzienny (praca zdalna, emeryt):\n• 60-70% zużycia w godzinach 8:00-16:00\n• Wysoka autokonsumpcja bez magazynu (40-50%)\n• Optymalna moc: równa zużyciu rocznemu ÷ 1000\n\nProfil wieczorny (praca poza domem):\n• 70-80% zużycia w godzinach 17:00-23:00\n• Niska autokonsumpcja bez magazynu (25-35%)\n• Zalecany magazyn energii lub mniejsza moc instalacji',
          lista: [
            'Bez magazynu: autokonsumpcja 30-40%',
            'Z magazynem 10 kWh: autokonsumpcja 70-80%',
            'Dla profilu wieczornego: magazyn jest kluczowy'
          ]
        },
        {
          naglowek: 'Przykład 1: Dom 100 m², 3500 kWh/rok, profil dzienny',
          tresc: 'Rodzina 2+2, jedno z rodziców pracuje zdalnie. Pralka, zmywarka i inne urządzenia działają w ciągu dnia.\n\nObliczenia:\n• Roczne zużycie: 3500 kWh\n• Zalecana moc: 3500 ÷ 1000 = 3,5 kWp → **4-5 kWp**\n• Liczba paneli: 12 × 400W = 4,8 kWp\n• Bez magazynu: autokonsumpcja 45% (1575 kWh)\n• Z magazynem 5 kWh: autokonsumpcja 75% (2625 kWh)\n\n**Oszczędności roczne (bez magazynu):** ~3100 zł\n**Oszczędności roczne (z magazynem):** ~4800 zł\n**Koszt instalacji:** 22 000 zł (bez magazynu), 35 000 zł (z magazynem)\n**ROI:** 7 lat (bez magazynu), 9 lat (z magazynem)'
        },
        {
          naglowek: 'Przykład 2: Dom 150 m², 6000 kWh/rok, profil wieczorny + pompa ciepła',
          tresc: 'Rodzina pracująca, pompa ciepła do c.o. i c.w.u. Duże zużycie wieczorem i w nocy.\n\nObliczenia:\n• Roczne zużycie: 6000 kWh\n• Zalecana moc: 6000 ÷ 1000 = 6 kWp → **7-8 kWp**\n• Liczba paneli: 20 × 400W = 8 kWp\n• Bez magazynu: autokonsumpcja 30% (1800 kWh) — NIE OPŁACA SIĘ!\n• Z magazynem 10 kWh: autokonsumpcja 75% (4500 kWh)\n\n**Wniosek:** Dla profilu wieczornego magazyn jest NIEZBĘDNY. Bez niego przepalasz 70% energii oddając ją do sieci za 80% wartości.\n\n**Oszczędności roczne (z magazynem 10 kWh):** ~7200 zł\n**Koszt instalacji:** 45 000 zł\n**ROI:** 9-10 lat'
        },
        {
          naglowek: 'Nadwyżka mocy — czy warto przewymiarować?',
          tresc: 'Niektórzy instalatorzy proponują instalację o mocy większej niż zużycie. Czy to ma sens?\n\n**Przewymiarowanie +20-30% ma sens, jeśli:**\n• Planujesz kupno samochodu elektrycznego\n• Rozważasz wymianę pieca na pompę ciepła\n• Budżet Ci na to pozwala\n• Masz magazyn energii (większa nadwyżka = więcej ładowania baterii)\n\n**Nie ma sensu, jeśli:**\n• Nie planujesz wzrostu zużycia\n• Nie masz magazynu energii (nadwyżka idzie do sieci za grosze)\n• Budżet jest ograniczony\n\n**Przykład:** Dom zużywa 5000 kWh/rok. Instalujesz 7 kWp zamiast 5 kWp "na zapas".\n• Nadprodukcja: ~2000 kWh/rok\n• Wartość oddana do sieci: 2000 × 0,40 zł (80% ceny hurtowej) = 800 zł\n• To jedynie 800 zł rocznie zwrotu — niewielka korzyść przy wyższym koszcie instalacji.'
        },
        {
          naglowek: 'Ograniczenia mocy dla prosumentów',
          tresc: 'W Polsce obowiązują limity mocy dla instalacji prosumenckich:\n\n**Mikroinstalacja prosumencka:** do 50 kWp\n• Uproszczone zgłoszenie do OSD\n• Net-billing (rozliczenie w złotówkach)\n• Brak podatku VAT (dla domów)\n• Możliwość montażu bez pozwolenia na budowę\n\n**Powyżej 50 kWp:**\n• Wymóg koncesji lub zgłoszenia działalności gospodarczej\n• Podatek VAT\n• Bardziej skomplikowane procedury\n\nDla domów zalecamy maksymalnie 10-15 kWp — wystarczy dla większości gospodarstw domowych.'
        }
      ],
      podsumowanie: 'Dobór mocy instalacji to balans między zużyciem energii, profilem dobowym, budżetem i planami na przyszłość. Kluczowe pytania: Ile zużywasz rocznie? Kiedy zużywasz najwięcej? Czy planujesz magazyn energii? Odpowiedzi na te pytania wskażą optymalną moc instalacji PV dla Twojego domu.'
    },
    cta: {
      tytul: 'Nie jesteś pewien, jaką moc wybrać?',
      opis: 'Umów bezpłatny audyt. Przeanalizujemy Twoje faktury, profil zużycia i dobierzemy optymalną moc instalacji.',
      link: '/kontakt',
      tekstPrzycisku: 'Umów audyt 0 zł'
    }
  },
  {
    slug: 'magazyn-energii-kiedy-sie-oplaca',
    kategoria: 'Magazyny energii',
    tytul: 'Magazyn energii — kiedy się opłaca?',
    lead: 'Analiza kosztów, zwrotu inwestycji i korzyści z baterii domowych. Dobór pojemności krok po kroku.',
    data: '08.03.2025',
    autor: 'Zespół fotowoltaika.info.pl',
    tresc: {
      wstep: 'Magazyn energii (bateria domowa) to jedno z najgorętszych rozwiązań w fotowoltaice 2025. Czy jednak każdy powinien w niego inwestować? Odpowiedź: to zależy. Ten przewodnik pomoże Ci podjąć świadomą decyzję, opierając się na faktach i liczbach, a nie marketingowych obietnicach.',
      sekcje: [
        {
          naglowek: 'Czym jest magazyn energii i jak działa?',
          tresc: 'Magazyn energii to system baterii litowych (najczęściej LFP - litowo-żelazowo-fosforanowych), który gromadzi nadwyżki energii wyprodukowanej przez panele fotowoltaiczne w ciągu dnia i oddaje ją wieczorem/nocą.\n\nProces działania:\n1. Dzień: Panele produkują więcej energii niż dom zużywa\n2. Nadwyżka trafia do magazynu (ładowanie)\n3. Wieczór/noc: Panele nie pracują, dom czerpie energię z magazynu\n4. Gdy magazyn się wyczerpie, dom pobiera prąd z sieci\n5. Magazyn ładuje się ponownie następnego dnia',
          lista: [
            'Pojemność użyteczna: 90-95% pojemności nominalnej (DoD - Depth of Discharge)',
            'Cykle życia: 6000+ dla baterii LFP (15-20 lat)',
            'Moc ładowania/rozładowania: 3-10 kW (zależnie od modelu)',
            'Sprawność: 92-96% (kilka procent energii tracimy przy konwersji)',
            'Czas ładowania: 2-4 godziny (z pełnej produkcji PV)'
          ]
        },
        {
          naglowek: 'Kiedy magazyn się opłaca? — 4 scenariusze',
          tresc: '**Scenariusz 1: Profil wieczorny (praca poza domem)**\n\nRodzina pracująca, dzieci w szkole. Dom jest pusty w godzinach 7:00-17:00.\n\n• Bez magazynu: autokonsumpcja 25-35%\n• Z magazynem: autokonsumpcja 70-80%\n• **Magazyn ZDECYDOWANIE się opłaca**\n\n**Przykład:** Instalacja 8 kWp, zużycie 6000 kWh/rok\n• Produkcja roczna: 8000 kWh\n• Bez magazynu: autokonsumpcja 30% = 1800 kWh bezpośrednio + 6200 kWh do sieci\n• Z magazynem 10 kWh: autokonsumpcja 75% = 4500 kWh bezpośrednio + 3500 kWh do sieci\n• Różnica w oszczędnościach: ~3200 zł rocznie\n• Koszt magazynu: 22 000 zł → ROI 7 lat\n\n---\n\n**Scenariusz 2: Profil dzienny (praca zdalna, emeryt)**\n\nOsoby pracujące w domu, urządzenia działają w ciągu dnia.\n\n• Bez magazynu: autokonsumpcja 50-60%\n• Z magazynem: autokonsumpcja 75-85%\n• **Magazyn się opłaca umiarkowanie**\n\n**Przykład:** Instalacja 5 kWp, zużycie 4000 kWh/rok\n• Bez magazynu: autokonsumpcja 55% = 2200 kWh\n• Z magazynem 5 kWh: autokonsumpcja 80% = 3200 kWh\n• Różnica: 1000 kWh × 0,80 zł = 800 zł rocznie\n• Koszt magazynu: 12 500 zł → ROI 15 lat (długo!)\n\n---\n\n**Scenariusz 3: Dom z pompą ciepła**\n\nPompa ciepła pracuje 24/7, szczególnie zimą w nocy.\n\n• Duże zużycie nocne (pompa ciepła)\n• Bez magazynu: autokonsumpcja 30-40%\n• Z magazynem: autokonsumpcja 65-75%\n• **Magazyn ZDECYDOWANIE się opłaca**\n\n---\n\n**Scenariusz 4: Backup / zasilanie awaryjne**\n\nChcesz mieć prąd przy awarii sieci (burze, przerwy w dostawie).\n\n• Magazyn z funkcją EPS/Backup zapewnia autonomię 4-12 godzin (zależnie od pojemności)\n• To dodatkowa korzyść niematerialna (spokój, komfort)\n• Jeśli mieszkasz w obszarze z częstymi awariami — magazyn ma sens'
        },
        {
          naglowek: 'Matematyka opłacalności — szczegółowe obliczenia',
          tresc: 'Opłacalność magazynu zależy od 4 parametrów:\n\n1. **Cena energii z sieci** (im wyższa, tym lepiej dla magazynu)\n2. **Cena sprzedaży energii do sieci** (80% ceny hurtowej ~0,40 zł/kWh)\n3. **Pojemność magazynu vs. nocne zużycie**\n4. **Koszt magazynu (zł/kWh pojemności)**\n\n**Formuła opłacalności:**\n\nOszczędność roczna = (Autokonsumpcja z magazynem - Autokonsumpcja bez) × (Cena energii - Cena sprzedaży)\n\nROI = Koszt magazynu ÷ Oszczędność roczna\n\n**Przykład realistyczny:**\n\n• Instalacja: 8 kWp (produkcja 8000 kWh/rok)\n• Zużycie: 6000 kWh/rok\n• Profil: wieczorny (75% zużycia po 17:00)\n• Cena energii z sieci: 0,80 zł/kWh\n• Cena sprzedaży do sieci: 0,40 zł/kWh (80% × 0,50 zł)\n\n**Bez magazynu:**\n• Autokonsumpcja: 30% × 6000 = 1800 kWh\n• Do sieci: 8000 - 1800 = 6200 kWh\n• Przychód: 6200 × 0,40 = 2480 zł\n• Oszczędność: 1800 × 0,80 + 2480 = 3920 zł/rok\n\n**Z magazynem 10 kWh:**\n• Autokonsumpcja: 75% × 6000 = 4500 kWh\n• Do sieci: 8000 - 4500 = 3500 kWh\n• Przychód: 3500 × 0,40 = 1400 zł\n• Oszczędność: 4500 × 0,80 + 1400 = 5000 zł/rok\n\n**Dodatkowa oszczędność z magazynem:** 5000 - 3920 = **1080 zł/rok**\n**Koszt magazynu:** 22 000 zł\n**ROI:** 22 000 ÷ 1080 = **20 lat** (!)\n\n**Wniosek:** W tym scenariuszu magazyn nie jest opłacalny ekonomicznie. Zmienia się to, jeśli ceny energii wzrosną do 1,00-1,20 zł/kWh.'
        },
        {
          naglowek: 'Ile kosztuje magazyn energii w 2025?',
          tresc: 'Ceny magazynów energii (baterii LFP + falownik hybrydowy) w Polsce:\n\n• 5 kWh: 12 000 - 15 000 zł (2400-3000 zł/kWh)\n• 10 kWh: 20 000 - 25 000 zł (2000-2500 zł/kWh)\n• 15 kWh: 30 000 - 37 000 zł (2000-2467 zł/kWh)\n• 20 kWh: 38 000 - 48 000 zł (1900-2400 zł/kWh)\n\nIm większa pojemność, tym niższa cena za 1 kWh (ekonomia skali).\n\n**Dodatkowe koszty:**\n• Wymiana falownika na hybrydowy: 3000-6000 zł (jeśli masz już instalację PV)\n• Montaż i konfiguracja: 1000-2000 zł\n• Rozbudowa baterii w przyszłości: 2000-2500 zł/kWh',
          lista: [
            'Najpopularniejsze marki: Deye, Sofar, Pylontech, Huawei',
            'Baterie LFP (LiFePO₄) — najtrwalsze i najbezpieczniejsze',
            'Gwarancja: 10 lat lub 6000 cykli',
            'Żywotność realna: 15-20 lat'
          ]
        },
        {
          naglowek: 'Jak dobrać pojemność magazynu?',
          tresc: 'Zasada doboru pojemności magazynu:\n\n**Pojemność magazynu (kWh) = Nocne zużycie energii × 1,2**\n\nCzemu × 1,2? Bo bateria nie powinna być rozładowywana do 0% — to skraca jej żywotność.\n\n**Krok po kroku:**\n\n1. **Sprawdź nocne zużycie**\n   Przeanalizuj faktury lub e-licznik za godziny 20:00-8:00.\n   Średnie nocne zużycie: 30-40% dziennego zużycia.\n\n2. **Oblicz pojemność**\n   Przykład: dzienny zużycie 20 kWh → nocne 8 kWh\n   Pojemność magazynu: 8 × 1,2 = **10 kWh**\n\n3. **Uwzględnij sezonowość**\n   Zimą zużycie nocne jest wyższe (oświetlenie, ogrzewanie).\n   Latem — niższe.\n   Dobierz pojemność pod zimę.',
          lista: [
            'Dom 100 m² bez pompy ciepła: 5-7 kWh',
            'Dom 150 m² bez pompy ciepła: 8-10 kWh',
            'Dom 150 m² z pompą ciepła: 12-15 kWh',
            'Dom 200 m²+ z pompą ciepła: 15-20 kWh'
          ]
        }
      ],
      podsumowanie: 'Magazyn energii opłaca się przede wszystkim dla profilu wieczornego (praca poza domem) i domów z pompą ciepła. Dla profilu dziennego (praca zdalna) opłacalność jest wątpliwa — długi ROI 12-15 lat. Nie patrz tylko na marketing "niezależność energetyczna" — liczby muszą się zgadzać. Jeśli jednak priorytetem jest backup przy awariach sieci lub komfort, magazyn może być dobrym wyborem mimo dłuższego ROI.'
    },
    cta: {
      tytul: 'Chcesz wiedzieć, czy magazyn się dla Ciebie opłaca?',
      opis: 'Umów audyt. Przeanalizujemy Twój profil zużycia i obliczymy realny ROI magazynu energii.',
      link: '/kontakt',
      tekstPrzycisku: 'Umów audyt 0 zł'
    }
  },
  {
    slug: 'doplaty-fotowoltaika-2025',
    kategoria: 'Dopłaty',
    tytul: 'Dopłaty do fotowoltaiki 2025 — aktualny przewodnik',
    lead: 'Programy gminne, NFOŚiGW, ulga termomodernizacyjna. Jak ubiegać się o dotacje i co przygotować?',
    data: '05.03.2025',
    autor: 'Zespół fotowoltaika.info.pl',
    tresc: {
      wstep: 'Fotowoltaika to duża inwestycja — 22 000-60 000 zł dla domu, 100 000-500 000 zł dla firmy. Na szczęście w Polsce dostępne są programy dofinansowania, które mogą zmniejszyć koszty o 5 000-30 000 zł. Ten przewodnik krok po kroku wyjaśni, jakie dopłaty są dostępne w 2025 roku, jak się o nie ubiegać i jakie dokumenty przygotować.',
      sekcje: [
        {
          naglowek: 'Programy dla domów jednorodzinnych',
          tresc: '**1. Programy gminne i powiatowe (5 000 – 10 000 zł)**\n\nTo najpopularniejsza forma dofinansowania w 2025 roku. Wiele gmin na Śląsku i w całej Polsce oferuje dotacje na instalacje fotowoltaiczne z magazynem energii.\n\n**Miasta i gminy z aktywnymi programami (stan na marzec 2025):**\n• Katowice: 7 000 zł (PV + magazyn min. 5 kWh)\n• Gliwice: 8 000 zł (PV + magazyn + pompa ciepła)\n• Tychy: 6 000 zł (PV + magazyn)\n• Powiat bieruńsko-lędziński: 5 000 zł\n• Sosnowiec: 5 500 zł (tylko dla gospodarstw o niskich dochodach)\n• Dąbrowa Górnicza: w przygotowaniu (start: kwiecień 2025)\n\n**Warunki typowe:**\n• Moc instalacji: 3-10 kWp\n• Magazyn energii: minimum 5 kWh\n• Dotacja: max 30-40% kosztów kwalifikowanych\n• Limit: 5 000 - 10 000 zł\n• Montaż: do 12 miesięcy od otrzymania dotacji\n\n**Jak się ubiegać?**\n1. Sprawdź nabór na stronie gminy/miasta\n2. Zbierz dokumenty (wniosek, oferty, zgoda współwłaścicieli)\n3. Złóż wniosek online lub osobiście w urzędzie\n4. Po pozytywnej decyzji: podpisz umowę\n5. Zamontuj instalację\n6. Rozlicz dotację (faktury, protokół odbioru, zdjęcia)\n7. Otrzymaj przelew',
          lista: [
            'Termin naboru: zazwyczaj kwiecień-czerwiec (ograniczony budżet)',
            'Rozpatrywanie: 1-3 miesiące',
            'Wypłata: po zamontowaniu i rozliczeniu (2-4 miesiące)',
            'Uwaga: nie wszystkie gminy mają program co roku!'
          ]
        },
        {
          naglowek: 'Ulga termomodernizacyjna (do 53 000 zł odliczenia)',
          tresc: 'Ulga termomodernizacyjna to odliczenie od podatku PIT kosztów termomodernizacji budynku mieszkalnego.\n\n**Czym jest?**\n• Możesz odliczyć 53 000 zł od podatku (nie od dochodu!)\n• Odliczenie rozłożone na 6 lat (maksymalnie)\n• Dotyczy inwestycji wykonanych po 1 stycznia 2019 roku\n\n**Co można odliczyć?**\n• Fotowoltaika\n• Magazyn energii\n• Pompa ciepła\n• Ocieplenie budynku\n• Wymiana okien\n• Kolektory słoneczne\n\n**Warunki:**\n• Budynek musi być starszy niż 3 lata (licząc od końca roku, w którym zakończono budowę)\n• Musisz być właścicielem lub współwłaścicielem\n• Inwestycja musi poprawić efektywność energetyczną\n• Potrzebujesz audytu energetycznego (przed i po inwestycji)\n\n**Przykład:**\n\nKoszty termomodernizacji:\n• Fotowoltaika 8 kWp + magazyn 10 kWh: 45 000 zł\n• Ocieplenie dachu: 20 000 zł\n• Wymiana okien: 15 000 zł\n**Suma: 80 000 zł**\n\nMożesz odliczyć maksymalnie 53 000 zł.\n\nTwój podatek roczny: 12 000 zł\n• Rok 1: odliczasz 12 000 zł (pozostało 41 000 zł)\n• Rok 2: odliczasz 12 000 zł (pozostało 29 000 zł)\n• Rok 3: odliczasz 12 000 zł (pozostało 17 000 zł)\n• Rok 4: odliczasz 12 000 zł (pozostało 5 000 zł)\n• Rok 5: odliczasz 5 000 zł\n\n**Korzyść: 53 000 zł mniej podatku przez 5 lat!**',
          lista: [
            'Audyt energetyczny: 500-1500 zł (koszt)',
            'Rozliczenie: w PIT-36 lub PIT-37',
            'Termin: w rozliczeniu za rok, w którym poniosłeś koszty',
            'Ważne: zachowaj faktury i protokół audytu!'
          ]
        },
        {
          naglowek: 'Program "Mój Prąd" — status w 2025',
          tresc: '**Stan na marzec 2025:** Program "Mój Prąd" (dotacja 5000 zł) jest **zawieszony**.\n\nNFOŚiGW nie ogłosił nowej edycji programu. Istnieje szansa na powrót w 2026 roku, ale nie ma oficjalnych informacji.\n\n**Dlaczego program został zawieszony?**\n• Wyczerpanie budżetu\n• Zmiana strategii NFOŚiGW (focus na pompy ciepła i termomodernizację)\n• Duża popularność fotowoltaiki — rynek nie potrzebuje już dotacji?\n\n**Co zamiast "Mój Prąd"?**\n\nNFOŚiGW kieruje środki na:\n• Program "Czyste Powietrze" (pompy ciepła, ocieplenie)\n• Programy dla firm (patrz sekcja niżej)\n\n**Rekomendacja:** Skup się na programach gminnych i uldze termomodernizacyjnej.'
        },
        {
          naglowek: 'Programy dla firm',
          tresc: '**1. NFOŚiGW — programy regionalne (dotacja do 30%)**\n\nNarodowy Fundusz Ochrony Środowiska i Gospodarki Wodnej oferuje dotacje dla małych i średnich firm.\n\n**Warunki:**\n• MŚP (mikro, małe, średnie przedsiębiorstwa)\n• Działalność minimum 1 rok\n• Brak zaległości w ZUS/US\n• Instalacja PV: minimum 20 kWp\n\n**Dotacja:**\n• Do 30% kosztów kwalifikowanych\n• Maksymalnie 300 000 - 1 000 000 zł (zależnie od programu)\n\n**Programy aktywne w 2025:**\n• "Energia dla firm" — dotacje na PV, magazyny, kompensację mocy\n• Programy regionalne WFOŚiGW (Wojewódzkie Fundusze)\n\n**Jak się ubiegać?**\n1. Sprawdź nabór na stronie NFOŚiGW lub WFOŚiGW\n2. Przygotuj biznesplan i dokumenty firmy\n3. Złóż wniosek online\n4. Po pozytywnej decyzji: podpisz umowę\n5. Zrealizuj inwestycję\n6. Rozlicz projekt\n\n**Ważne:** Proces trwa 6-12 miesięcy. Planuj z wyprzedzeniem!',
          lista: [
            'Termin naboru: zazwyczaj 1-2 razy w roku',
            'Konkurencja: duża — dobrze przygotowany wniosek jest kluczowy',
            'Konsultant: warto zatrudnić firmę do przygotowania wniosku (koszt: 3000-8000 zł)'
          ]
        },
        {
          naglowek: 'Jak przygotować wniosek o dotację?',
          tresc: '**Dokumenty potrzebne (programy gminne):**\n\n1. **Wniosek** (formularz z urzędu)\n2. **Oferta** lub faktura proforma (szczegółowa wycena instalacji)\n3. **Dokumenty własności** (akt notarialny, wypis z księgi wieczystej)\n4. **Zgoda współwłaścicieli** (jeśli dotyczy)\n5. **Oświadczenia RODO** i inne formularze\n6. **Zaświadczenie o dochodach** (dla programów z kryterium dochodowym)\n\n**Dokumenty potrzebne (ulga termomodernizacyjna):**\n\n1. **Audyt energetyczny** (przed inwestycją)\n2. **Faktury VAT** za wykonane prace\n3. **Protokół odbioru** instalacji\n4. **Audyt energetyczny końcowy** (po inwestycji)\n5. **Deklaracja PIT** z odliczeniem\n\n**Dokumenty potrzebne (NFOŚiGW — firmy):**\n\n1. **Biznesplan** (analiza finansowa, ROI, oszczędności)\n2. **Dokumenty rejestrowe firmy** (KRS, CEIDG)\n3. **Sprawozdania finansowe** (bilans, rachunek zysków i strat)\n4. **Oferta** lub faktura proforma\n5. **Pozwolenia** (jeśli wymagane)\n6. **Oświadczenia o pomocy publicznej**',
          lista: [
            'Przygotowanie dokumentów: 1-2 tygodnie',
            'Audyt energetyczny: 500-1500 zł (dom), 2000-5000 zł (firma)',
            'Uwaga: wszystkie dokumenty muszą być aktualne (nie starsze niż 3 miesiące)'
          ]
        },
        {
          naglowek: 'Błędy, których unikać',
          tresc: '**Błąd 1: Montaż przed otrzymaniem dotacji**\n\nWiele programów wymaga, żebyś najpierw dostał dotację, a potem montował instalację. Jeśli zrobisz odwrotnie — stracisz prawo do dotacji!\n\n**Błąd 2: Niekompletne dokumenty**\n\nBrak jednego podpisu = odrzucony wniosek. Sprawdź listę dokumentów dokładnie.\n\n**Błąd 3: Zbyt późne złożenie wniosku**\n\nNabory mają ograniczony budżet. Jeśli złożysz wniosek tydzień przed końcem naboru, może już nie być środków.\n\n**Błąd 4: Nieprawidłowy audyt energetyczny**\n\nAudyt musi być wykonany przez uprawnioną osobę. Sprawdź certyfikaty auditora!\n\n**Błąd 5: Instalacja niezgodna z wymogami programu**\n\nPrzyk: Program wymaga magazynu min. 5 kWh, a Ty zainstalowałeś 3 kWh. Dotacja odrzucona.',
          lista: [
            'Zawsze czytaj regulamin programu!',
            'Zachowaj wszystkie dokumenty (faktury, protokoły, zdjęcia)',
            'Rozlicz dotację w terminie (zazwyczaj 30-60 dni po montażu)'
          ]
        }
      ],
      podsumowanie: 'Dopłaty do fotowoltaiki w 2025 roku są dostępne głównie przez programy gminne (5-10 tys. zł) i ulgę termomodernizacyjną (do 53 tys. zł odliczenia). Program "Mój Prąd" jest zawieszony. Dla firm dostępne są dotacje NFOŚiGW do 30% kosztów. Kluczowe zasady: montuj DOPIERO po otrzymaniu dotacji, zbierz wszystkie dokumenty, złóż wniosek na początku naboru. Pomożemy Ci przygotować dokumenty i ubiegać się o dotacje — skontaktuj się z nami!'
    },
    cta: {
      tytul: 'Potrzebujesz pomocy w uzyskaniu dotacji?',
      opis: 'Przygotujemy dokumenty, audyt i złożymy wniosek. Zwiększamy szanse na pozytywną decyzję.',
      link: '/kontakt',
      tekstPrzycisku: 'Skontaktuj się'
    }
  },
  {
    slug: 'przygotowanie-dachu-do-pv',
    kategoria: 'Montaż',
    tytul: 'Jak przygotować dach do instalacji PV?',
    lead: 'Stan dachu, orientacja, kąt nachylenia, obciążenia. Sprawdź co jest ważne przed montażem paneli.',
    data: '01.03.2025',
    autor: 'Zespół fotowoltaika.info.pl',
    tresc: {
      wstep: 'Dach to fundament każdej instalacji fotowoltaicznej. Przed montażem paneli PV warto sprawdzić jego stan techniczny, orientację i kąt nachylenia. Źle przygotowany dach = problemy podczas montażu, mniejsza produkcja energii, ryzyko nieszczelności. Ten przewodnik pomoże Ci przygotować dach do instalacji PV i uniknąć kosztownych błędów.',
      sekcje: [
        {
          naglowek: 'Stan techniczny dachu — co sprawdzić?',
          tresc: 'Przed montażem paneli fotowoltaicznych musisz upewnić się, że dach jest w dobrym stanie technicznym i wytrzyma dodatkowe obciążenie przez 25+ lat.\n\n**1. Wiek dachu**\n\nJeśli dach ma powyżej 15 lat, rozważ jego remont PRZED montażem PV. Dlaczego?\n• Panele PV pracują 25-30 lat\n• Jeśli za 5 lat będziesz musiał wymieniać pokrycie, będziesz musiał zdemontować panele (koszt 3000-8000 zł)\n• Lepiej wymienić dach teraz i zamontować panele na nowym pokryciu\n\n**2. Rodzaj pokrycia — który jest najlepszy?**',
          lista: [
            'Blacha trapezowa — IDEALNY (lekka, wytrzymała, łatwy montaż)',
            'Dachówka ceramiczna — DOBRY (wytrzymała, ale ciężka i montaż droższy)',
            'Blachodachówka — DOBRY (lekka, łatwy montaż)',
            'Papa — MOŻLIWY (ale wymaga dodatkowej konstrukcji)',
            'Eternit / azbest — WYMIANA OBOWIĄZKOWA (zakaz montażu PV na azbeście)'
          ]
        },
        {
          naglowek: 'Orientacja dachu — gdzie najlepsza produkcja?',
          tresc: '**Optymalna orientacja w Polsce: POŁUDNIE (180°)**\n\nProdukcja energii w zależności od orientacji:\n• Południe (180°): 100% mocy (bazowa)\n• Południowy wschód (135°): 95%\n• Południowy zachód (225°): 95%\n• Wschód (90°): 85%\n• Zachód (270°): 85%\n• Północny wschód / północny zachód: 75%\n• Północ (0°): 60% (NIE ZALECANE)\n\n**Co jeśli mój dach nie jest skierowany na południe?**\n\nNic się nie dzieje! Straty 5-15% to nie tragedia. Warto też rozważyć montaż paneli na dwóch połaciach dachu (wschód + zachód) — stabilniejsza produkcja przez cały dzień.',
          lista: [
            'Wschód: produkcja rano (7:00-12:00)',
            'Zachód: produkcja popołudniu (13:00-19:00)',
            'Wschód + Zachód = bardziej równomierna produkcja przez cały dzień'
          ]
        },
        {
          naglowek: 'Kąt nachylenia — jaki jest optymalny?',
          tresc: '**Optymalny kąt nachylenia w Polsce: 30-40°**\n\nProdukcja w zależności od kąta:\n• 30-40°: 100% (optymalne)\n• 20-30°: 98%\n• 40-50°: 97%\n• 15-20°: 95%\n• Płaski dach (0-10°): 90% (panele montuje się pod kątem 10-15°)\n• Powyżej 60°: 85% (zbyt stromy)\n\n**Dlaczego 30-40° jest optymalne?**\n\n• Maksymalizuje produkcję roczną (letnia i zimowa produkcja zrównoważona)\n• Samooczyszczanie paneli (deszcz zmywa brud)\n• Śnieg łatwiej schodzi zimą\n\n**Co jeśli mam płaski dach?**\n\nMontujemy panele na konstrukcjach balastowych pod kątem 10-15°. Produkcja spada o 5-10%, ale nadal się opłaca.',
          lista: [
            'Konstrukcja balastowa: obciążniki betonowe (bez wiercenia dachu)',
            'Koszt dodatkowy: 500-1000 zł/kWp',
            'Wymaga wzmocnionej konstrukcji dachu (sprawdzamy nośność)'
          ]
        },
        {
          naglowek: 'Obciążenie dachu — czy dach wytrzyma panele?',
          tresc: 'Panele fotowoltaiczne + konstrukcja montażowa to dodatkowe obciążenie 15-25 kg/m².\n\n**Typowe obciążenia:**\n• Panel PV 400W: ~20 kg\n• Konstrukcja montażowa: 3-5 kg/m²\n• Łącznie: ~20-25 kg/m² (zależnie od układu)\n\n**Czy dach wytrzyma?**\n\nPolskie normy wymagają, by dach wytrzymywał obciążenie:\n• Śnieg: 100-200 kg/m² (zależnie od strefy)\n• Wiatr: 50-100 kg/m²\n• Użytkowanie: 50-75 kg/m²\n\n**Wniosek:** Typowy dach w Polsce wytrzymuje 200-300 kg/m² obciążenia całkowitego. Panele PV (20-25 kg/m²) to tylko 10% tej wartości.\n\n**Kiedy potrzebna jest ekspertyza statyczna?**\n• Dach starszy niż 30 lat\n• Widoczne pęknięcia, przecieki\n• Płaski dach na starym budynku (lata 70-80)\n• Obciążenie śniegiem + panele > 150 kg/m²',
          lista: [
            'Ekspertyza statyczna: 800-2000 zł',
            'Wzmocnienie konstrukcji (jeśli konieczne): 5000-15000 zł',
            'Większość domów jednorodzinnych NIE wymaga ekspertyzy'
          ]
        },
        {
          naglowek: 'Zacienienie — wróg fotowoltaiki',
          tresc: '**Zacienienie to największy wróg produkcji energii.** Nawet częściowe zacienienie jednego panelu może obniżyć produkcję całej instalacji o 20-50%!\n\n**Źródła zacienienia:**\n• Drzewa (liściaste, iglaste)\n• Sąsiednie budynki\n• Kominy, anteny satelitarne\n• Okna dachowe, lukarne\n\n**Jak sprawdzić zacienienie?**\n\n1. **Obserwacja w różnych porach roku**\n   Latem słońce jest wysoko (70°), zimą nisko (25°). Drzewo, które latem nie zacienia, zimą może blokować 50% dachu.\n\n2. **Aplikacje do analizy zacienienia**\n   • Solargis (analiza online)\n   • PV*SOL (profesjonalne oprogramowanie)\n   • Google Sunroof (jeśli dostępne w Twojej lokalizacji)\n\n3. **Wizyta instalatora**\n   Doświadczony instalator oceni zacienienie podczas audytu.\n\n**Co jeśli mam zacienienie?**\n\n• Optymalizatory mocy (SolarEdge, Tigo) — każdy panel pracuje niezależnie\n• Mikroinwertery (Enphase, APsystems) — każdy panel ma własny inwerter\n• Przycięcie drzew (jeśli możliwe)\n• Montaż paneli na innej połaci dachu',
          lista: [
            'Zacienienie 10% powierzchni panelu = strata produkcji 20-30%',
            'Optymalizatory mocy: koszt dodatkowy 300-500 zł/panel',
            'Mikroinwertery: koszt dodatkowy 400-600 zł/panel'
          ]
        },
        {
          naglowek: 'Powierzchnia dachu — ile potrzebujesz?',
          tresc: '**Ile m² dachu potrzebujesz na instalację PV?**\n\nZasada: **1 kWp = 5-6 m²**\n\n**Przykłady:**\n• 3 kWp (8 paneli): 15-18 m²\n• 5 kWp (12 paneli): 25-30 m²\n• 8 kWp (20 paneli): 40-48 m²\n• 10 kWp (25 paneli): 50-60 m²\n\n**Uwagi:**\n• Panele montuje się z odstępami (3-5 cm między panelami)\n• Trzeba zostawić margines od krawędzi dachu (30-50 cm)\n• Nie montujemy na okapach, wokół kominów\n\n**Co jeśli mam za mały dach?**\n\n1. **Użyj paneli o wyższej mocy**\n   • Zamiast paneli 400W użyj 500-550W\n   • Ta sama powierzchnia, więcej mocy\n\n2. **Montaż na dwóch połaciach**\n   • Np. 3 kWp na południu + 2 kWp na wschodzie\n\n3. **Montaż naziemny**\n   • Jeśli masz działkę, rozważ montaż naziemny\n   • Optymalna orientacja i kąt\n   • Łatwiejszy serwis'
        }
      ],
      podsumowanie: 'Przygotowanie dachu do montażu paneli PV to kluczowy etap inwestycji. Sprawdź stan techniczny (wiek, pokrycie), orientację (najlepsza: południe), kąt nachylenia (30-40°) i zacienienie. Większość domów jednorodzinnych nie wymaga wzmocnienia konstrukcji ani ekspertyzy statycznej. Podczas bezpłatnego audytu ocenimy Twój dach i dobierzemy optymalne rozwiązanie.'
    },
    cta: {
      tytul: 'Chcesz wiedzieć, czy Twój dach nadaje się do PV?',
      opis: 'Umów bezpłatny audyt. Ocenimy stan dachu, orientację, zacienienie i dobierzemy rozwiązanie.',
      link: '/kontakt',
      tekstPrzycisku: 'Umów audyt 0 zł'
    }
  },
  {
    slug: 'kompensacja-mocy-biernej-przewodnik',
    kategoria: 'Dla firm',
    tytul: 'Kompensacja mocy biernej — co to i jak działa?',
    lead: 'Wszystko o współczynniku mocy, karach za energię bierną i doborze baterii kondensatorów dla firm.',
    data: '25.02.2025',
    autor: 'Zespół fotowoltaika.info.pl',
    tresc: {
      wstep: 'Jeśli prowadzisz firmę i płacisz kary za przekroczenie współczynnika tg φ > 0,4, ten artykuł jest dla Ciebie. Kompensacja mocy biernej to proste rozwiązanie, które może obniżyć Twoje koszty energii o 5-15% rocznie. Wyjaśnimy krok po kroku, czym jest moc bierna, dlaczego operator Ci każe, i jak zainstalować kompensację.',
      sekcje: [
        {
          naglowek: 'Czym jest moc bierna?',
          tresc: 'W instalacji elektrycznej występują trzy rodzaje mocy:\n\n**1. Moc czynna (P) — wyrażona w kW**\nTo moc, która wykonuje pracę użyteczną: napędza silniki, świeci żarówki, grzeje. Za nią płacisz w fakturze (zł/kWh).\n\n**2. Moc bierna (Q) — wyrażona w kvar**\nTo moc, która NIE wykonuje pracy użytecznej. Jest potrzebna do wytworzenia pola magnetycznego w silnikach, transformatorach, spawarkach. Krąży między urządzeniem a siecią, obciążając przewody i transformatory.\n\n**3. Moc pozorna (S) — wyrażona w kVA**\nTo suma wektorowa mocy czynnej i biernej:\nS = √(P² + Q²)\n\n**Dlaczego moc bierna jest problemem?**\n\n• Obciąża przewody i transformatory (większe straty, wyższe koszty dla OSD)\n• Operator nalicza kary, jeśli przekroczysz współczynnik tg φ > 0,4\n• Zwiększa straty mocy w Twojej instalacji (wyższe rachunki)',
          lista: [
            'Typowe źródła mocy biernej: silniki elektryczne, spawarki, oświetlenie fluorescencyjne',
            'Urządzenia indukcyjne (cewki) pobierają moc bierną indukcyjną',
            'Urządzenia pojemnościowe (np. kondensatory) pobierają moc bierną pojemnościową'
          ]
        },
        {
          naglowek: 'Współczynnik mocy (cos φ) i tg φ',
          tresc: '**Współczynnik mocy cos φ** to stosunek mocy czynnej do mocy pozornej:\n\ncos φ = P / S\n\n• cos φ = 1,0 → idealna instalacja (brak mocy biernej)\n• cos φ = 0,9 → dobra instalacja (niewielka moc bierna)\n• cos φ = 0,7 → zła instalacja (duża moc bierna)\n\nOperatorzy sieci dystrybucyjnej (OSD) wymagają:\n\n**tg φ ≤ 0,4**\n\nCo to znaczy?\n\ntg φ = Q / P (stosunek mocy biernej do czynnej)\n\nJeśli tg φ > 0,4 → KARA za energię bierną!\n\n**Przykład:**\n\nTwoja firma pobiera:\n• Moc czynna P = 100 kW\n• Moc bierna Q = 80 kvar\n\ntg φ = 80 / 100 = 0,8 > 0,4 ❌\n\nOperator naliczy karę za nadmiarową energię bierną (powyżej tg φ = 0,4).\n\nEnergia bierna do kary: Q_kara = P × 0,4 = 40 kvar\nNadmiar: 80 - 40 = 40 kvar\n\nKara: 40 kvar × liczba godzin × stawka (np. 0,05 zł/kvarh) = **kilka tysięcy złotych miesięcznie**.',
          lista: [
            'tg φ = 0,4 ↔ cos φ = 0,93',
            'Większość zakładów ma tg φ = 0,5-0,8 (BEZ kompensacji)',
            'Po kompensacji: tg φ = 0,2-0,3 (BRAK kar)'
          ]
        },
        {
          naglowek: 'Jak działa kompensacja mocy biernej?',
          tresc: 'Kompensacja mocy biernej polega na instalacji baterii kondensatorów lub dławików, które wytwarzają moc bierną pojemnościową (kondensatory) lub indukcyjną (dławiki) na miejscu.\n\n**Zasada:**\n\nUrządzenia indukcyjne (silniki) pobierają moc bierną indukcyjną (+Q).\nKondensatory generują moc bierną pojemnościową (-Q).\nKompensują się wzajemnie → zmniejszenie poboru mocy biernej z sieci.\n\n**Rodzaje kompensacji:**\n\n**1. Kompensacja indywidualna**\n• Kondensator przy każdym urządzeniu (np. silniku)\n• Dla dużych, stale pracujących maszyn\n• Prosty montaż, ale mniej elastyczny\n\n**2. Kompensacja grupowa** (najczęstsza)\n• Szafa kompensacyjna z baterią kondensatorów\n• Automat kompensacyjny steruje przełączaniem stopni mocy\n• Elastyczne, dopasowuje się do zmiennego obciążenia\n\n**3. Kompensacja centralna**\n• Jedna szafa kompensacyjna dla całego zakładu\n• Montowana przy rozdzielni głównej',
          lista: [
            'Automat kompensacyjny mierzy cos φ w czasie rzeczywistym',
            'Włącza/wyłącza stopnie kondensatorów (np. 5, 10, 15, 20 kvar)',
            'Cel: utrzymanie tg φ < 0,4 przez cały czas'
          ]
        },
        {
          naglowek: 'Korzyści z kompensacji mocy biernej',
          tresc: '**1. Eliminacja kar za energię bierną**\n\nNajwiększa korzyść! Kary za tg φ > 0,4 mogą wynosić 3 000 - 15 000 zł/miesiąc dla średnich zakładów. Po kompensacji: 0 zł.\n\n**2. Zmniejszenie strat mocy w instalacji**\n\nMoc bierna powoduje straty mocy w przewodach i transformatorach (I²R). Zmniejszenie mocy biernej = mniejsze straty = niższe rachunki.\n\nSzacunkowe oszczędności: 3-8% rocznych kosztów energii.\n\n**3. Odciążenie transformatorów i rozdzielnic**\n\nMniejsze obciążenie transformatorów → dłuższa żywotność, mniejsze ryzyko awarii.\n\n**4. Możliwość zwiększenia mocy zamówionej**\n\nJeśli Twoja rozdzielnia jest na limicie mocy, kompensacja może uwolnić 10-20% rezerwy (bez podnoszenia mocy zamówionej).\n\n**5. Stabilniejsze napięcie**\n\nPoprawa współczynnika mocy stabilizuje napięcie w sieci → lepsze warunki pracy urządzeń.',
          lista: [
            'ROI kompensacji: zazwyczaj 6-18 miesięcy',
            'Baterie kondensatorów są bezobsługowe przez 10-15 lat',
            'Coroczny przegląd: 500-1000 zł'
          ]
        },
        {
          naglowek: 'Dobór mocy baterii kondensatorów',
          tresc: '**Krok 1: Sprawdź faktury za energię**\n\nNa fakturze znajdziesz:\n• Energię czynną (kWh)\n• Energię bierną (kvarh)\n• Opłaty za przekroczenie tg φ\n\n**Krok 2: Oblicz średni tg φ**\n\ntg φ = Energia bierna / Energia czynna\n\nPrzykład:\n• Energia czynna (miesiąc): 50 000 kWh\n• Energia bierna (miesiąc): 40 000 kvarh\n\ntg φ = 40 000 / 50 000 = 0,8\n\n**Krok 3: Oblicz wymaganą moc kompensacji**\n\nFormuła:\n\nQ_kompensacji = P_średnia × (tg φ_obecne - tg φ_docelowe)\n\nPrzykład:\n• P_średnia = 200 kW (średnie obciążenie)\n• tg φ_obecne = 0,8\n• tg φ_docelowe = 0,3 (zapas poniżej 0,4)\n\nQ_kompensacji = 200 × (0,8 - 0,3) = 200 × 0,5 = **100 kvar**\n\nPotrzebujesz baterii kondensatorów o mocy 100 kvar.\n\n**Krok 4: Dobór szafy kompensacyjnej**\n\nSzafa kompensacyjna o mocy 100 kvar z automatem (10 stopni × 10 kvar) + rezystory rozładowujące.',
          lista: [
            'Koszt szafy 100 kvar: 20 000 - 30 000 zł',
            'Montaż i uruchomienie: 2 000 - 4 000 zł',
            'Łączny koszt: 22 000 - 34 000 zł'
          ]
        }
      ],
      podsumowanie: 'Kompensacja mocy biernej to inwestycja o krótkim ROI (6-18 miesięcy), która eliminuje kary za energię bierną i zmniejsza koszty energii o 5-15% rocznie. Jeśli płacisz kary za tg φ > 0,4, kompensacja to must-have. Oferujemy audyt sieci elektrycznej, dobór baterii kondensatorów, montaż i pomiary poinstalacyjne. Skontaktuj się z nami — obliczymy potencjał oszczędności dla Twojej firmy.'
    },
    cta: {
      tytul: 'Płacisz kary za energię bierną?',
      opis: 'Umów audyt sieci. Obliczymy oszczędności i dobierzemy optymalne rozwiązanie.',
      link: '/kontakt',
      tekstPrzycisku: 'Umów audyt'
    }
  },
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
  }
];
