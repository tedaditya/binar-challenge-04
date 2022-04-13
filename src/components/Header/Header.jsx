import React from 'react';
import Mobil from '../../assets/img/img_carmobil.png';

export default function Header() {
    return (
        <>
            <section class="hero" id="hero"  >
                <div class="container d-flex">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 mt-4 py-5">
                            <h1 class=" py-2">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                            <h6 class=" py-3">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik
                                dengan harga
                                terjangkau.
                                Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h6>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="hero-img">
                                <img class="img-fluid" src={Mobil} alt="hero images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}