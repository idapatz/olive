'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
          {/* Blob Hero Background */}
          <Image
            src="/blob hero.png"
            alt="Blob Background"
            fill
            className="object-cover z-0"
            priority
          />

          <div className="container relative z-10 mx-auto px-24 md:px-48 lg:px-64 xl:px-80 2xl:px-96">
            <div className="flex flex-col justify-center max-w-4xl">
              <h1 className="font-questrial text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-8 leading-tight">
                WISSEN, WAS<br />WIRKLICH DRIN IST
              </h1>
              <h2 className="font-inter text-white text-xl md:text-2xl lg:text-3xl">
                Nährstoffe, Schadstoffe, leere Versprechen?<br />
                Wir lassen Produkte im Labor testen
              </h2>
            </div>
          </div>
        </section>

        {/* Warum es uns gibt */}
        <section className="py-24 bg-gradient-to-br from-sage-50 via-white to-vocavo-50 relative overflow-hidden" id="why">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-vocavo-200 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage-200 rounded-full opacity-15 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          {/* Add decorative circles */}
          <Image
            src="/Kreis orange.png"
            alt="Decorative Orange Circle"
            width={600}
            height={600}
            className="absolute -top-40 -right-20 opacity-60 animate-float z-0"
          />
          <Image
            src="/Kreis grün.png"
            alt="Decorative Green Circle"
            width={500}
            height={500}
            className="absolute -bottom-40 -left-20 opacity-50 animate-float-delayed z-0"
          />

          <div className="container mx-auto px-6 relative z-10">
            {/* Icon-Grid mit Beispielen */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                {/* Top row with two boxes side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  {/* Pestizide in Obst */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-vocavo-400 to-vocavo-600 rounded-md blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative text-center p-2 bg-white rounded-md shadow-sm border border-sage-100 transform group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-500">
                      <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-br from-vocavo-500 to-vocavo-600 rounded-md flex items-center justify-center shadow-sm transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium mb-1 text-sage-900">Pestizide in Obst</h4>
                      <p className="text-xs text-sage-700 font-light leading-relaxed">Welche Chemikalien esse ich mit?</p>
                    </div>
                  </div>

                  {/* Vitamin-Gehalt */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-vocavo-400 to-vocavo-600 rounded-md blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative text-center p-2 bg-white rounded-md shadow-sm border border-sage-100 transform group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-500">
                      <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-br from-vocavo-500 to-vocavo-600 rounded-md flex items-center justify-center shadow-sm transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium mb-1 text-sage-900">Vitamin-Gehalt</h4>
                      <p className="text-xs text-sage-700 font-light leading-relaxed">Wie viel Vitamine sind in meiner Paprika?</p>
                    </div>
                  </div>
                </div>

                {/* Bottom row with full-width box */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-vocavo-400 to-vocavo-600 rounded-md blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative text-center p-2 bg-white rounded-md shadow-sm border border-sage-100 transform group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-500">
                    <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-br from-vocavo-500 to-vocavo-600 rounded-md flex items-center justify-center shadow-sm transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-medium mb-1 text-sage-900">Fundierte Entscheidung</h4>
                    <p className="text-xs text-sage-700 font-light leading-relaxed">Wie soll ich das beste Lebensmittel wählen, wenn ich nicht weiß, was wirklich drin ist?</p>
                  </div>
                </div>
              </div>

              {/* Text content on the right side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-normal text-sage-900 mb-6">
                  Was steckt in unserem Essen?
                </h3>
                <p className="text-lg text-sage-700 font-light mb-6">
                  Es fehlen oft belastbare, unabhängige Informationen. Verpackungen versprechen viel, sagen aber wenig.
                </p>
                <p className="text-lg text-sage-700 font-light">
                  <span className="text-vocavo-600 font-medium">Genau das ändern wir – mit fundierten Labortests und klaren Ergebnissen für dich.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Unsere Idee / Vision */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Add decorative circles */}
          <Image
            src="/Kreis orange.png"
            alt="Decorative Orange Circle"
            width={600}
            height={600}
            className="absolute -top-40 -right-20 opacity-60 animate-float z-0"
          />
          <Image
            src="/Kreis grün.png"
            alt="Decorative Green Circle"
            width={500}
            height={500}
            className="absolute -bottom-40 -left-20 opacity-50 animate-float-delayed z-0"
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="inline-block py-1 px-3 text-vocavo-600 text-sm mb-6 font-light border-b border-vocavo-200">VISION</span>
              <h2 className="text-3xl md:text-4xl font-normal text-center text-sage-900 mb-8 tracking-tight">
                <span className="text-vocavo-600">Transparenz</span> über alles, was drin ist.
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-10">
                <div className="max-w-lg mx-auto">
                  <p className="text-xl text-sage-800 font-light mb-4">Was wir tun:</p>
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-4 h-4 border border-vocavo-400"></div>
                    </div>
                    <p className="ml-6 text-xl text-sage-700 font-light">Analyse von Inhaltsstoffen</p>
                  </div>
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-4 h-4 border border-vocavo-400"></div>
                    </div>
                    <p className="ml-6 text-xl text-sage-700 font-light">Test auf Pestizide und Schadstoffe</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-4 h-4 border border-vocavo-400"></div>
                    </div>
                    <p className="ml-6 text-xl text-sage-700 font-light">Unabhängig, wissenschaftlich, nachvollziehbar</p>
                  </div>
                </div>
                <div className="text-xl text-sage-800 mt-16 pt-10 border-t border-sage-100">
                  <p className="font-light text-center">
                    Damit bewusste Entscheidungen möglich werden.<br />
                    Für mehr Gesundheit. Für mehr Lebensqualität.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Olivenöl Section */}
        <section className="py-24 bg-gray-50 relative" id="olive-oil">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-start gap-16 max-w-5xl mx-auto">
              <div className="md:w-1/2">
                <span className="inline-block py-1 px-3 text-vocavo-600 text-sm mb-6 font-light border-b border-vocavo-200">UNSER STARTPUNKT</span>
                <h2 className="text-3xl md:text-4xl font-normal text-sage-900 mb-10 tracking-tight">
                  Warum wir mit <span className="text-vocavo-600">Olivenöl</span> starten
                </h2>
                <p className="text-lg text-sage-700 mb-8 font-light">
                  Olivenöl ist mehr als nur ein Lebensmittel – es ist ein echtes Schlüsselprodukt für Gesundheit und Langlebigkeit.
                </p>
                <p className="text-lg text-sage-700 mb-8 font-light">
                  Zahlreiche Studien zeigen: Hochwertiges Olivenöl kann chronische Entzündungen im Körper senken, das Herz schützen und sogar das Risiko altersbedingter Erkrankungen reduzieren. In der Diskussion um Longevity spielt es eine zentrale Rolle.
                </p>
              </div>
              <div className="md:w-1/2 border-t md:border-l md:border-t-0 border-sage-200 pt-10 md:pt-0 md:pl-16">
                <p className="text-lg text-sage-800 mb-10 font-light">
                  Doch trotz seines Potenzials ist der Markt kaum durchschaubar: Die Unterschiede in Qualität und Wirkung sind gewaltig – und für Verbraucher*innen kaum zu erkennen.
                </p>
                <p className="text-xl text-sage-700 font-light">
                  Deshalb starten wir genau hier.<br />
                  Mit einem Produkt, das viele täglich nutzen – aber kaum jemand wirklich beurteilen kann.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Crowdfunding Section */}
        <section className="py-20 bg-gradient-to-br from-sage-50 to-sage-100 relative overflow-hidden" id="crowdfunding">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-vocavo-200 rounded-full opacity-30 blur-xl transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-vocavo-300 rounded-full opacity-20 blur-xl transform translate-y-1/2"></div>
          <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-vocavo-100 text-vocavo-700 text-sm font-medium mb-4">WERDE TEIL</span>
            <h2 className="text-3xl md:text-5xl font-normal text-sage-900 mb-6">
              Unser <span className="text-vocavo-600">Ziel</span>
            </h2>
            <p className="text-xl text-sage-700 mb-8">
              Wir wollen ein neues Level an Verbraucherinformation schaffen.<br />
              Für Lebensmittel. Für Supplements. Für mehr Klarheit, Gesundheit und Verantwortung.
            </p>
            <p className="text-xl text-sage-700 mb-8 font-medium">
              Denn nur wer wirklich weiß, was drinsteckt, kann Entscheidungen treffen, die langfristig guttun.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-10 transform hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg text-sage-800 mb-6 font-medium">
                Mit deiner Unterstützung können wir:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 border border-vocavo-200 rounded-lg bg-white hover:bg-vocavo-50 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-md">
                  <div className="font-bold text-vocavo-600 text-2xl mb-2">1</div>
                  <p className="font-medium">Professionelle Laboranalysen durchführen</p>
                </div>
                <div className="p-4 border border-vocavo-200 rounded-lg bg-white hover:bg-vocavo-50 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-md">
                  <div className="font-bold text-vocavo-600 text-2xl mb-2">2</div>
                  <p className="font-medium">Ergebnisse zu fairen, bezahlbaren Preisen anbieten</p>
                </div>
                <div className="p-4 border border-vocavo-200 rounded-lg bg-white hover:bg-vocavo-50 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-md">
                  <div className="font-bold text-vocavo-600 text-2xl mb-2">3</div>
                  <p className="font-medium">Eine nachhaltige Testplattform aufbauen</p>
                </div>
              </div>
            </div>
            <Link 
              href="#"
              className="inline-block bg-vocavo-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-vocavo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Jetzt unterstützen
            </Link>
            <p className="text-sage-600 mt-4 font-medium">
              Gemeinsam schaffen wir echte Transparenz. Deine Unterstützung zählt.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white" id="about">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-normal text-center text-sage-900 mb-12">
                About
              </h2>
              <div className="mb-12 bg-sage-50 p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full bg-sage-200 flex items-center justify-center">
                      <svg className="w-16 h-16 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-normal mb-2 text-sage-900">Ida Patzelt</h3>
                    <p className="text-sage-700 mb-4">
                      Bildungswissenschaftlerin mit Fokus auf Gesundheit & Transparenz
                    </p>
                    <p className="text-sage-800">
                      "Ich glaube, dass jeder ein Recht auf qualitativ hochwertige Produkte und transparente Informationen hat. Mit diesem Projekt möchte ich die Lücke zwischen wissenschaftlicher Analyse und verbraucherfreundlicher Information schließen."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-sage-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-normal mb-4 text-center text-sage-900">Kontakt</h3>
                <div className="flex justify-center space-x-4 mb-6">
                  <a href="#" className="text-sage-600 hover:text-sage-800">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-sage-600 hover:text-sage-800">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-sage-600 hover:text-sage-800">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
                <form className="max-w-md mx-auto">
                  <div className="mb-4">
                    <input type="email" placeholder="Deine E-Mail" className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vocavo-600 focus:border-transparent" />
                  </div>
                  <div className="mb-4">
                    <textarea rows={4} placeholder="Deine Nachricht" className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vocavo-600 focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-vocavo-600 text-white py-2 rounded-lg hover:bg-vocavo-700 transition-colors">
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-sage-900 text-white py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="font-bold text-xl mb-2">vocavo</div>
                <p className="text-sage-300 text-sm">© 2023 vocavo. Alle Rechte vorbehalten.</p>
              </div>
              <div className="flex space-x-6">
                <Link href="#" className="text-sage-300 hover:text-white">
                  Impressum
                </Link>
                <Link href="#" className="text-sage-300 hover:text-white">
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Scroll- und Animations-Skripte */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Scroll-Trigger-Animation für Elemente
          document.addEventListener('DOMContentLoaded', function() {
            const scrollTriggerItems = document.querySelectorAll('.scroll-trigger-item');
            
            // Initial alle Elemente prüfen
            checkScroll();
            
            // Scroll-Event
            window.addEventListener('scroll', function() {
              checkScroll();
              moveParallaxElements();
            });
            
            // Parallax-Elemente bewegen
            function moveParallaxElements() {
              const parallaxElements = document.querySelectorAll('.parallax');
              
              parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.2;
                const yPos = -(window.scrollY * speed);
                element.style.transform = 'translateY(' + yPos + 'px)';
              });
            }
            
            // Prüfen, welche Elemente sichtbar sind
            function checkScroll() {
              scrollTriggerItems.forEach(item => {
                const triggerPoint = (window.innerHeight / 1.2);
                const itemTop = item.getBoundingClientRect().top;
                
                if(itemTop < triggerPoint) {
                  item.classList.add('is-visible');
                }
              });
            }
            
            // Für Hover-Effekte auf Touch-Geräten
            const cards = document.querySelectorAll('.hover-lift, .hover-grow');
            cards.forEach(card => {
              card.addEventListener('touchstart', function() {
                this.classList.add('active');
              }, {passive: true});
              
              card.addEventListener('touchend', function() {
                this.classList.remove('active');
              }, {passive: true});
            });
          });
        `
      }} />
    </>
  );
} 