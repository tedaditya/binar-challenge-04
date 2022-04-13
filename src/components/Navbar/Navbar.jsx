import React from 'react';
import Logo from '../../assets/img/logo.png';

export default function Navbar() {
    return (
        <>
            <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-#F1F3FF main-nav pt-3">
                <div class="container">
                    <a class="navbar-brand" href="#top"><img src={Logo} alt="Logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto py-1">
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#our services"><b>Our Services</b></a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link " href="#why us"><b>Why Us</b></a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link " href="#testimonial"><b>Testimonial</b></a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link " href="#faq"><b>FAQ</b></a>
                            </li>
                            <button type="button" class="btn btn-register mx-3 d-flex align-items-center align-content-center">Register
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
