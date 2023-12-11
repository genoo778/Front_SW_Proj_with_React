// Navbarr.jsx

import React from 'react';
import './nav.css';

function Navbarr() {
  return (
    <section id="navbar">
    <nav class="navbar navbar-expand-lg   bg-white " id="navbar-example">
      <div class="container px-5">
        <a class="navbar-brand text-uppercase logo text-black" href="/">Documentation system </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-5 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-black "  href="/">SDLC</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active text-black " href="/alll">All Files</a>
            </li>
            
  
          </ul>
  
        </div>
      </div>
    </nav>
  </section>
  );
}

export default Navbarr;
