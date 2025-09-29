# 📦 Instrukcja wgrywania strony na serwer

## ✅ Folder `dist` jest gotowy do wgrania!

---

## 🚀 Jak wgrać na serwer (techno.pl/test3):

### **Metoda 1: Przez FileZilla lub ForkLift (ZALECANE)**

1. **Otwórz FileZilla/ForkLift**

2. **Połącz się z serwerem:**
   - Host: `techno.pl`
   - Login: `pawel@techno.pl`
   - Hasło: `aqq123AQQ.`
   - Port: `21` (FTP) lub `22` (SFTP)

3. **Przejdź do katalogu:**
   ```
   /public_html/test3/
   ```

4. **Usuń WSZYSTKIE pliki** z katalogu `test3/` na serwerze

5. **Wgraj CAŁĄ zawartość** folderu `dist/` do katalogu `test3/`
   - Zaznacz wszystko w folderze `dist/`
   - Przeciągnij na serwer do `/public_html/test3/`

6. **Sprawdź** czy struktura wygląda tak:
   ```
   /public_html/test3/
   ├── index.html
   ├── kontakt/
   ├── realizacje/
   ├── _astro/
   ├── api/
   │   └── lead.php
   └── ... (inne foldery)
   ```

---

### **Metoda 2: Przez panel hostingowy**

1. Zaloguj się do panelu hostingu
2. Przejdź do menedżera plików
3. Wejdź do `/public_html/test3/`
4. Usuń wszystkie pliki
5. Wgraj spakowany folder `dist.zip` (najpierw spakuj folder dist)
6. Rozpakuj na serwerze

---

## 🔍 Sprawdzenie czy działa:

Po wgraniu otwórz w przeglądarce:
- **Strona główna:** http://techno.pl/test3
- **Kontakt:** http://techno.pl/test3/kontakt
- **Realizacje:** http://techno.pl/test3/realizacje

**Jeśli widzisz starą wersję:**
- Wciśnij `Ctrl + Shift + R` (Windows) lub `Cmd + Shift + R` (Mac)
- Lub otwórz w trybie incognito

---

## ⚠️ WAŻNE:

1. **Nie wgrywaj folderu `dist`** - wgraj **zawartość** folderu dist
2. **Plik `lead.php`** musi być w katalogu `api/`
3. **Uprawnienia plików:**
   - Pliki `.html` → 644
   - Plik `lead.php` → 755
   - Foldery → 755

---

## 📧 Formularz kontaktowy:

- Email idzie na: **cudakof@gmail.com**
- Backup wszystkich zgłoszeń: `/test3/api/leads.txt`
- Nawet jeśli mail nie działa, zgłoszenia są zapisywane do pliku

---

## ✨ Co jest nowego:

- ✅ Efekty 3D na formularzach i kartach
- ✅ Czytelny tekst w polach formularza
- ✅ AJAX w formularzach (bez przeładowania strony)
- ✅ Niebieskie kolory przywrócone
- ✅ Zaokrąglone inputy z cieniami
- ✅ Hover efekty na wszystkich elementach

---

**Gotowe do wgrania!** 🚀
