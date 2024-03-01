// Import paket request-ip
const requestIp = require('request-ip');

// Fungsi middleware untuk mendapatkan alamat IP
const getIpAddress = (req, res, next) => {
    // Mendapatkan alamat IP dari request
    const clientIp = requestIp.getClientIp(req);
    
    // Menyimpan alamat IP dalam properti request
    req.clientIp = clientIp;
    
    // Lanjutkan ke middleware atau handler berikutnya
    next();
};

// Contoh penggunaan middleware
app.use(getIpAddress);

// Handler untuk rute tertentu
app.get('/getIpAddress', (req, res) => {
    // Mengirimkan alamat IP sebagai respons
    res.send('Alamat IP Anda: ' + req.clientIp);
});
