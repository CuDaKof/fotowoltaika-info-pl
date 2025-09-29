<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

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
    
    // Przygotuj treść emaila
    $subject = "Nowe zapytanie z fotowoltaika.info.pl - $name";
    $body = "Nowe zapytanie z formularza kontaktowego:\n\n";
    $body .= "Imię i nazwisko: $name\n";
    $body .= "Email: $email\n";
    $body .= "Telefon: $phone\n";
    $body .= "Wiadomość:\n$message\n";
    
    $headers = "From: noreply@fotowoltaika.info.pl\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Wyślij email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Wiadomość została wysłana']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Błąd podczas wysyłania wiadomości']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Metoda niedozwolona']);
}