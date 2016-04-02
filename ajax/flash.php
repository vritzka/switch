<?php


print_r($_POST);

/*
$file = fopen('../firmware/led3.ino', "rb");
$stat = fstat($file);
$size = $stat['size'];


$curl = curl_init(); 
curl_setopt($curl, CURLOPT_URL, "https://api.particle.io/v1/devices/270044000347343233323032?access_token=291312c80025780cf4b6b7ec3ccea214e33c089d");
//curl_setopt($curl, CURLOPT_URL, "http://requestb.in/p2hhtjp2");

curl_setopt($curl, CURLOPT_PUT, 1);
curl_setopt($curl, CURLOPT_INFILE, $file);
curl_setopt($curl, CURLOPT_INFILESIZE, $size);


//curl_setopt($curl, CURLOPT_POSTFIELDS, $dstring);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    'Content-Type: multipart/form-data; boundary=------------------------eb6b576d43456630',
    'User-Agent: curl/7.35.0'
));

$tuData = curl_exec($curl); 

print_r($tuData);

curl_close($curl); 
*/

echo system('curl -X PUT -F file=@../firmware/led.ino -F file1=@../firmware/led3.ino  https://api.particle.io/v1/devices/270044000347343233323032?access_token=291312c80025780cf4b6b7ec3ccea214e33c089d', $out);




?>