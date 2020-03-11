function hexToAscii(str){
    hexString = str;
    strOut = '';
        for (x = 0; x < hexString.length; x += 2) {
            strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
        }
    return strOut;    
}

module.exports = { hexToAscii };