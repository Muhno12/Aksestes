document.getElementById('unlock-button').addEventListener('click', function() {
    const menu = document.getElementById('locked-menu');
    const status = document.getElementById('status-message');

    // Dalam aplikasi nyata, di sini akan ada pengecekan kredensial (username/password) 
    // atau token sesi dari server.
    
    // DEMO: Anggap saja "kunci" berhasil dibuka.
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        status.textContent = '✅ Akses diberikan! Menu rahasia sekarang terlihat.';
        status.style.color = '#008000';
        this.textContent = 'Menu Sudah Terbuka';
        this.disabled = true; // Non-aktifkan tombol setelah terbuka
    }
});
