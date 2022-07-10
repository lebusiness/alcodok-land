 <?php
$to = "lebusiness@mail.ru";
$tema = "Данные нового клиента"; 
$message = "Имя: ".$_POST['name']."<br>";
$message .= "E-mail: ".$_POST['tel']."<br>"; 
$headers  = 'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
mail($to, $tema, $message, $headers);
?>
if(isset($_POST["send"])) {
    $_SESSION["send"] = 'Сообщение отправлено!';
    exit('<meta http-equiv="refresh" content="0; url=index.html" />');
}