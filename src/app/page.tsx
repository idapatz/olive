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
        <section className="relative bg-white pt-32 pb-20 overflow-hidden">
          {/* Subtile Hintergrundelemente */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-olive-200 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-olive-300 rounded-full opacity-5 blur-3xl"></div>
          
          {/* Hauptinhalt */}
          <div className="container mx-auto px-6 relative z-20">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-2xl text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-sage-900 mb-24 relative tracking-tight leading-tight font-sans">
                  Detaillierte Analysen von Lebensmitteln & Supplements.
                </h1>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    href="#crowdfunding"
                    className="group inline-block bg-transparent border border-olive-600 text-olive-600 px-8 py-4 hover:bg-olive-600 hover:text-white text-lg font-light transition-all duration-300"
                  >
                    Unterstütze uns <span className="ml-1 group-hover:ml-3 transition-all duration-300">→</span>
                  </Link>
                  <Link 
                    href="#why"
                    className="inline-block text-sage-700 px-8 py-4 text-lg font-light hover:text-olive-600 transition-all duration-300"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Minimalistische Dekoration am unteren Rand */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-sage-100"></div>
        </section>

        {/* Warum das wichtig ist */}
        <section className="py-24 bg-white relative" id="why">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="inline-block py-1 px-3 text-olive-600 text-sm mb-6 font-light border-b border-olive-200">KLARHEIT</span>
              <h2 className="text-3xl md:text-4xl font-normal text-center text-sage-900 mb-8 tracking-tight">
                Was kommt wirklich auf den Teller – <span className="text-olive-600">und in den Körper?</span>
              </h2>
            </div>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto text-center mb-10 font-light">
              Ist im Supplement drin, was versprochen wird?
            </p>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto text-center mb-16 font-light">
              Und wie viele Nährstoffe liefert unser Gemüse noch?
            </p>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="text-center p-8 border-t border-sage-200 transform transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-olive-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light mb-4 text-sage-900">Fehlendes Wissen</h3>
                <p className="text-sage-700 font-light">Wirkstoffe und Qualitätskriterien sind für Konsumenten nur schwer verständlich</p>
              </div>
              <div className="text-center p-8 border-t border-sage-200 transform transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-olive-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light mb-4 text-sage-900">Intransparenz</h3>
                <p className="text-sage-700 font-light">Produktangaben sind oft irreführend oder unvollständig</p>
              </div>
              <div className="text-center p-8 border-t border-sage-200 transform transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-olive-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light mb-4 text-sage-900">Hohe Kosten</h3>
                <p className="text-sage-700 font-light">Qualitativ minderwertige Produkte zu überhöhten Preisen</p>
              </div>
            </div>
          </div>
        </section>

        {/* Unsere Idee / Vision */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="inline-block py-1 px-3 text-olive-600 text-sm mb-6 font-light border-b border-olive-200">VISION</span>
              <h2 className="text-3xl md:text-4xl font-normal text-center text-sage-900 mb-8 tracking-tight">
                <span className="text-olive-600">Transparenz</span> über alles, was drin ist.
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-10">
                <div className="max-w-lg mx-auto">
                  <p className="text-xl text-sage-800 font-light mb-4">Was wir tun:</p>
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-4 h-4 border border-olive-400"></div>
                    </div>
                    <p className="ml-6 text-xl text-sage-700 font-light">Analyse von Inhaltsstoffen</p>
                  </div>
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-4 h-4 border border-olive-400"></div>
                    </div>
                    <p className="ml-6 text-xl text-sage-700 font-light">Test auf Pestizide und Schadstoffe</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-4 h-4 border border-olive-400"></div>
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
                <span className="inline-block py-1 px-3 text-olive-600 text-sm mb-6 font-light border-b border-olive-200">UNSER STARTPUNKT</span>
                <h2 className="text-3xl md:text-4xl font-normal text-sage-900 mb-10 tracking-tight">
                  Warum wir mit <span className="text-olive-600">Olivenöl</span> starten
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
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-olive-200 rounded-full opacity-30 blur-xl transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-olive-300 rounded-full opacity-20 blur-xl transform translate-y-1/2"></div>
          <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-olive-100 text-olive-700 text-sm font-medium mb-4">WERDE TEIL</span>
            <h2 className="text-3xl md:text-5xl font-normal text-sage-900 mb-6">
              Unser <span className="text-olive-600">Ziel</span>
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
                <div className="p-4 border border-olive-200 rounded-lg bg-white hover:bg-olive-50 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-md">
                  <div className="font-bold text-olive-600 text-2xl mb-2">1</div>
                  <p className="font-medium">Professionelle Laboranalysen durchführen</p>
                </div>
                <div className="p-4 border border-olive-200 rounded-lg bg-white hover:bg-olive-50 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-md">
                  <div className="font-bold text-olive-600 text-2xl mb-2">2</div>
                  <p className="font-medium">Ergebnisse zu fairen, bezahlbaren Preisen anbieten</p>
                </div>
                <div className="p-4 border border-olive-200 rounded-lg bg-white hover:bg-olive-50 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-md">
                  <div className="font-bold text-olive-600 text-2xl mb-2">3</div>
                  <p className="font-medium">Eine nachhaltige Testplattform aufbauen</p>
                </div>
              </div>
            </div>
            <Link 
              href="#"
              className="inline-block bg-olive-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-olive-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
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
                    <input type="email" placeholder="Deine E-Mail" className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-600 focus:border-transparent" />
                  </div>
                  <div className="mb-4">
                    <textarea rows={4} placeholder="Deine Nachricht" className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-600 focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-olive-600 text-white py-2 rounded-lg hover:bg-olive-700 transition-colors">
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
                <div className="font-bold text-xl mb-2">Olive</div>
                <p className="text-sage-300 text-sm">© 2023 Olive. Alle Rechte vorbehalten.</p>
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