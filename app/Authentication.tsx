import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import UserPanel from "./Dashboard"; // Asegúrate de que la ruta sea correcta
import Carousel from "./Carousel";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const LandingPage = () => {
  const [user, setUser] = useState<User | null>(null); // Type user state as User | null

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // No more type errors
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Set the user after login
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null); // Clear the user on logout
    } catch (error) {
      console.error(error);
    }
  };

  return user ? (
    <UserPanel user={user} onLogout={handleLogout} />
  ) : (
 
  <div className="min-h-screen bg-gray-100">
  {/* Header */}
  <header className="bg-black text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">CryptoDay</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#features" className="hover:text-gray-300">Nosotros</a></li>
          <li><a href="#about" className="hover:text-gray-300">Proyecto</a></li>
          <li><a href="#contact" className="hover:text-gray-300"  onClick={handleLogin}>Login</a></li>
        </ul>
      </nav>
    </div>
  </header>

  {/* Hero Section */}
 
<Carousel/>
  {/* Features Section */}
  <section id="features" className="py-20 bg-black text-white">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10">Aprende Web3 y Blockchain como un Experto</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
        <img src='https://cdn.prod.website-files.com/5eb1c51b903700f456ce7a7e/62d1a09e18d2b622764e748f_Gu%C3%ADa%20Web3%20-%20Portada%20general.png' alt="Tecnología de Vanguardia" className="mb-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"/>
        <h3 className="text-3xl font-bold mb-4">Tecnología de Vanguardia</h3>
        <p>Accede a materiales actualizados y aprende sobre las últimas tendencias en blockchain, contratos inteligentes y criptomonedas.</p>
      </div>
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQ6zbvvpJMX5jxGaVLFiEFBBsxM9OgpoygA&s" alt="Aprende a tu Ritmo" className="mb-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"/>
        <h3 className="text-3xl font-bold mb-4">Aprende a tu Ritmo</h3>
        <p>Curso flexible que se adapta a tu tiempo, ideal para personas ocupadas que desean mejorar sus habilidades sin presiones.</p>
      </div>
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbiWKtAofYEY1NsXSwKEPagMWtjdc2wdt9A&s" alt="Comunidad y Soporte" className="mb-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"/>
        <h3 className="text-3xl font-bold mb-4">Comunidad y Soporte</h3>
        <p>Únete a una comunidad de aprendices y expertos dispuestos a compartir conocimientos y resolver tus dudas.</p>
      </div>
    </div>
  </div>
</section>


  {/* About Section */}
  <section id="about" className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10">Sobre CryptoDay</h2>
      <p className="text-2xl text-gray-300 mb-8">CryptoDay es la plataforma educativa ideal para quienes desean aprender sobre Web3, blockchain y las finanzas descentralizadas (DeFi). Con contenido accesible y práctico, puedes empezar desde cero o profundizar tus conocimientos en el ecosistema digital emergente.</p>
      {/* <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">Ver más</button> */}
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 bg-black text-white">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10">Estás a un paso de dominar Web3</h2>
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg transition duration-300"  onClick={handleLogin}>Ingresar</button>
        
    </div>
  </section>

  {/* Contact Section */}
  <section id="contact" className="py-20 bg-gray-800 text-white">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10">Contáctanos</h2>
      <p className="text-xl text-gray-300 mb-6">¿Tienes preguntas o dudas? Estamos aquí para ayudarte en tu proceso de aprendizaje.</p>
      <form className="max-w-lg mx-auto">
        <input className="w-full p-3 mb-4 border border-gray-700 rounded-lg" type="email" placeholder="Tu correo electrónico" />
        <textarea className="w-full p-3 mb-4 border border-gray-700 rounded-lg" placeholder="Tu mensaje"></textarea>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg">Enviar</button>
      </form>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-black text-white py-4">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 CryptoDay. Todos los derechos reservados.</p>
    </div>
  </footer>
</div>

  
    
  
  );
};

export default LandingPage;
