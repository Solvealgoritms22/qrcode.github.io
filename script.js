function generateQRCode() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var qrData = `Nombre: ${name}, Email: ${email}, Teléfono: ${phone}`;

    // Utiliza una biblioteca de generación de códigos QR como qrcode.js
    // Puedes descargarla desde: https://davidshimjs.github.io/qrcodejs/
var canvas = document.createElement('canvas');
QRCode.toCanvas(canvas, qrData, function (error) {
  if (error) console.error(error);
  var dataUrl = canvas.toDataURL();
  document.getElementById('qrCode').innerHTML = `<img src="${dataUrl}"/>`;
});


}
