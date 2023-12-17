function generateQR() {
    var name = document.getElementById('Nombre').value;
    var phone = document.getElementById('Telefono').value;
    var email = document.getElementById('Correo').value;

    var qrData = `BEGIN:VCARD\nVERSION:3.0\nN:${name}\nTEL:${phone}\nEMAIL:${email}\nEND:VCARD`;
    var qrcode = new QRCode(document.getElementById("qrcode"), qrData);
}
