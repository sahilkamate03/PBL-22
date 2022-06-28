var token;
var element = {};

function getParameters() {
    let urlString =
        window.location.href;
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    for (let pair of queryString.entries()) {
        console.log("Key is:" + pair[0]);
        console.log("Value is:" + pair[1]);
        var key = pair[0]
        var value = pair[1]
        element[key] = value;
        // element.quantity = pair[1];
    }
}

var qrcode = undefined;
function generateQRCode(value) {
    console.log("running")
    if (qrcode === undefined) {
        qrcode = new QRCode(document.getElementById('qrcode'), value);
        console.log('if')
    } else {
        qrcode.clear();
        qrcode.makeCode(value);
        console.log('else')
    }
}

getParameters()
console.log(element)

if (element['type']=='scan'){
    generateQRCode(`http://127.0.0.1:5500/files/qr/qr_data.html?token=${element['token']}&type=data`)
}

var print_btn = document.getElementById('print_btn')

print_btn.addEventListener('click',()=>{window.print()})
// generateQRCode('sahil')