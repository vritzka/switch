<?php
print_r($_POST);

$curl = curl_init(); 
curl_setopt($curl, CURLOPT_URL, "https://api.particle.io/v1/devices?access_token=291312c80025780cf4b6b7ec3ccea214e33c089d");
//curl_setopt($curl, CURLOPT_VERBOSE, 0); 
curl_setopt($curl, CURLOPT_POST, 0);
//curl_setopt($curl, CURLOPT_POSTFIELDS, $dstring);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//curl_setopt($curl, CURLOPT_HTTPHEADER, array(
//    'Content-Type: ' . sprintf('application/json')
//));

$tuData = curl_exec($curl); 

print_r($tuData);

curl_close($curl); 
//270044000347343233323032

?>