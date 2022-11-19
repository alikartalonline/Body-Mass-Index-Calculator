import React from 'react';

function Header({ page }) {

    return (
        <header className='container mt-4'>

            <h1>Vücut Kitle Endeksi Hesaplama</h1>
            
            <p className='mt-3 col-8'>Aşağıdaki hesaplama aracında beden kitle endeksini öğrenmek istediğiniz kişinin <span>"cinsiyetini"</span> seçtikten sonra <span className=''>"cm"</span> boyu ile <span>"kg"</span> cinsinden ağırlığını giriniz ve "Calculate" butonuna basınız. </p>

            {
                page === false ?
                    <div class="alert alert-primary d-flex align-items-center" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" height={30} aria-label="Warning:">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <div>
                            Hesaplama ekranına geri dönmek isterseniz <span>"Reset"</span> butonuna basınız ve tekrardan aynı işlemleri tekrarlayabilirsiniz.
                        </div>
                    </div> : null
            }
        </header>
    )
}

export default Header;