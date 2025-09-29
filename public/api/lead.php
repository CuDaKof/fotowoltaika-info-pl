<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Funkcja do zapisu leadów do pliku jako backup
function saveLeadToFile($data) {
    $logFile = __DIR__ . '/leads.txt';
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "\n--- Lead z dnia $timestamp ---\n";
    $logEntry .= "Imię i nazwisko: {$data['name']}\n";
    $logEntry .= "Email: {$data['email']}\n";
    $logEntry .= "Telefon: {$data['phone']}\n";
    $logEntry .= "Wiadomość: {$data['message']}\n";
    $logEntry .= "----------------------------\n";
    
    file_put_contents($logFile, $logEntry, FILE_APPEND);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'cudakof@gmail.com';
    
    // Pobierz dane z formularza
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
    $phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';
    
    // Walidacja
    if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Proszę wypełnić wymagane pola']);
        exit;
    }
    
    // Zapisz lead do pliku jako backup (zawsze zadziała)
    saveLeadToFile([
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'message' => $message
    ]);
    
    // Przygotuj treść emaila
    $subject = "Nowe zapytanie z fotowoltaika.info.pl - $name";
    $body = "Nowe zapytanie z formularza kontaktowego:\n\n";
    $body .= "Imię i nazwisko: $name\n";
    $body .= "Email: $email\n";
    $body .= "Telefon: $phone\n";
    $body .= "Wiadomość:\n$message\n";
    
    $headers = "From: noreply@techno.pl\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Próbuj wysłać email (może nie działać na wszystkich serwerach)
    $mailSent = @mail($to, $subject, $body, $headers);
    
    // Zawsze zwróć sukces, bo dane są zapisane w pliku
    echo json_encode([
        'success' => true, 
        'message' => 'Wiadomość została zapisana. Skontaktujemy się wkrótce!',
        'debug' => [
            'mail_function_result' => $mailSent,
            'saved_to_file' => true
        ]
    ]);
    
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Metoda niedozwolona']);
}