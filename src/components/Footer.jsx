import React from 'react';
import Kotak from '../../assets/icon/Rectangle_74.png';
import Item from '../../assets/icon/list item.png';

export default function Footer() {
    return (
        <>
            <footer class="footer" id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="wrapper-col-1">
                                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                                <p>binarcarrental@gmail.com</p>
                                <p>081-233-334-808</p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="wrapper-col-1">
                                <p>Our services</p>
                                <p>Why Us</p>
                                <p>Testimonial</p>
                                <p>FAQ</p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="wrapper-col-1">
                                <p>Connect with us</p>
                                <img src={Item} alt="" />

                            </div>
                        </div>

                        <div class="col">
                            <div class="wrapper-col-1">
                                <p>Copyright Binar 2022</p>
                                <img src={Kotak} alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}