import React, { useState, useEffect } from 'react';
import './Clones-2.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import DeliverySection from './components/DeliverySection';
import InfoModal from './components/InfoModal';

const Clones2 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New State for InfoModal
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Helper to open info modal
  const showInfo = (message) => {
    setInfoMessage(message);
    setInfoModalOpen(true);
  };

  const closeInfoModal = () => {
    setInfoModalOpen(false);
    setInfoMessage('');
  };

  const cdnBase = "https://shainacardoza.github.io/Clones/";

  // Data for props-driven components
  const shopProducts = [
    { image: 'premix.png', label: 'INSTANT TEA', title: 'Premix', type: 'instant-tea' },
    { image: 'spiced.png', label: 'CHAI PATTI', title: 'Spiced', type: 'chai-patti' },
    { image: 'natural.png', label: 'SPICES', title: 'Natural', type: 'spices' },
    { image: 'chaitime.png', label: 'SNACKS', title: 'Chai-Time', type: 'snacks' },
    { image: 'flavourful.png', label: 'HERBAL TEA', title: 'Flavourful', type: 'herbal-tea' },
    { image: 'green tea.png', label: 'GREEN TEA', title: 'Green Tea', type: 'green-tea' },
    { image: 'tea bags.png', label: 'TEA BAGS', title: 'Pyramid', type: 'tea-bags' },
    { image: 'giftbox.png', label: 'GIFT BOXES', title: 'Gifting', type: 'gift-boxes' },
    { image: 'choose.png', label: 'POPULAR PRODUCT', title: 'Choose<br />Flavours', type: 'customise' },
  ];

  const bestsellers = [
    { image: 'masala.png', title: 'Instant Tea - Masala - Regular Sugar (36 Sachets)' },
    { image: 'make.png', title: 'Make Your Own Chai - 400g Pack', badge: { text: 'SALE', type: 'sale' } },
    { image: 'desi.png', title: 'Masala Chai' },
    { image: 'ginger.png', title: 'Instant Tea - Ginger Cardamom - Low Sugar (150ml)', badge: { text: 'SALE', type: 'sale' } },
    { image: 'aromatic.png', title: 'Chaayos Chai Masala - Aromatic Tea Masala Powder with 100% Natural Ingredients' },
  ];

  const newArrivals = [
    { image: 'saffron.png', title: 'Kashmiri Saffron (1g) - Pure A++ Grade Kesar' },
    { image: 'hibiscus.png', title: 'Hibiscus Mulethi Green Tea Bags', badge: { text: 'NEW', type: 'new' } },
    { image: 'sri.png', title: 'Sri Lankan Cinnamon Powder - 50g' },
    { image: 'kahwa.png', title: 'Chaayos Detox Green Tea - Desi Kahwa | Green Tea Bags | Desi Kahwa Green Tea | Green Tea for Digestion', badge: { text: 'DETOX KAHWA', type: 'new' } },
    { image: 'chamomile.png', title: 'Chamomile Green Tea Bags' },
  ];

  const testimonials = [
    {
      text: "I just happened to came across this product and ordered 1 set to check how it is. I must say, it is really good tasting desi Chai. Just feels like Home boiled Chai. Will keep buying more for my travel.",
      author: "Vishesh",
      location: "Gurgaon, Haryana",
      image: "vishesh.png"
    },
    {
      text: "I sent whole wheat cookies to my Mom!! She just loved it, now a big-time fan of the Chaayos whole wheat cookies.",
      author: "Bruno",
      location: "Mumbai, Maharashtra",
      image: "bruno.png"
    },
    {
      text: "Wasn't fond of Green Tea until heard of Chaayos Green Tea. The best green tea launched by Chaayos till now. It makes you feel so light, fresh and the ingredients in it also boost immunity. The interesting part is that it has whole leaf and not powder like other brands, that's something that speaks of the quality of the product.",
      author: "Chahat",
      location: "New Delhi",
      image: "chahat.png"
    },
    {
      text: "Chaayos has completely changed my tea game! The instant premix is a lifesaver during busy work days. Tastes just like homemade chai.",
      author: "Aditya",
      location: "Bangalore, Karnataka",
      image: "vishesh.png"
    },
    {
      text: "I love the variety of snacks available. The Bun Maska is my absolute favorite to pair with their Masala Chai. Highly recommended!",
      author: "Sneha",
      location: "Pune, Maharashtra",
      image: "bruno.png"
    },
    {
      text: "The delivery packaging is top-notch. The chai stays piping hot for a long time. Great service and amazing taste every single time.",
      author: "Raj",
      location: "Mumbai, Maharashtra",
      image: "chahat.png"
    },
    {
      text: "Best place to hang out with friends. The ambience is cozy and the staff is very friendly. And of course, the chai is delicious!",
      author: "Priya",
      location: "Delhi",
      image: "vishesh.png"
    },
    {
      text: "I gifted the premium tea box to my parents and they loved it. The quality of tea leaves is exceptional. Will definitely order again.",
      author: "Vikram",
      location: "Hyderabad, Telangana",
      image: "bruno.png"
    },
    {
      text: "Finally found a place that serves authentic Desi Chai. The customization options are great. You can make your chai exactly how you like it.",
      author: "Anjali",
      location: "Chennai, Tamil Nadu",
      image: "chahat.png"
    }
  ];

  return (
    <div className="clone-container">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} openModal={openModal} />

      <Hero cdnBase={cdnBase} onShowInfo={showInfo} />

      {/* Our Stores Section */}
      <section className="stores-section" id="stores">
        <div className="container">
          <h2 className="section-title">Our Stores</h2>
          <p className="section-subtitle">Every cafe is uniquely designed</p>
          <div className="stores-grid">
            <img src={`${cdnBase}store1.png`} alt="Store Interior 1" className="store-image" />
            <img src={`${cdnBase}store2.png`} alt="Store Interior 2" className="store-image" />
            <img src={`${cdnBase}store3.png`} alt="Store Interior 3" className="store-image" />
          </div>
          <button className="visit-btn" onClick={() => showInfo("Locating nearest store...")}>Visit Nearest Chaayos</button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section" id="menu">
        <div className="container">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">Relax with our wide range of Chai</p>
          <div className="menu-collage">
            <div className="menu-grid">
              <img src={`${cdnBase}menu_paper_cup.png`} alt="Paper Cup Chai" className="menu-img" />
              <img src={`${cdnBase}menu_glass_chai.png`} alt="Glass Chai" className="menu-img" />
              <div className="menu-img-large-container">
                <img src={`${cdnBase}menu_kettle_pouring.png`} alt="Kettle Pouring Chai" className="menu-img-large" />
                <div className="served-text-overlay">
                  <p>Served over</p>
                  <p className="crores">20 CRORES+</p>
                  <p>Chai till date</p>
                </div>
              </div>
              <img src={`${cdnBase}menu_kulhad_chai.png`} alt="Kulhad Chai" className="menu-img" />
              <img src={`${cdnBase}menu_iced_chai.png`} alt="Iced Chai" className="menu-img" />
            </div>
          </div>
        </div>
      </section>

      <DeliverySection cdnBase={cdnBase} onShowInfo={showInfo} />

      {/* Premium Gifting Banner */}
      <section className="premium-gifting-banner">
        <div className="container">
          <h2 className="section-title">Premium Gifting</h2>
          <p className="section-subtitle">Perfect Chai time for your loved ones</p>
          <div className="gifting-card">
            <div className="gifting-image-container">
              <img src={`${cdnBase}gifting_banner_img.png`} alt="Premium Gifting" className="gifting-product-img" />
            </div>
            <div className="premium-text">
              <span className="premium-title">PREMIUM GIFTING</span>
              <span className="premium-subtitle">for your<br /><span className="loved-ones">Loved ones</span></span>
              <button className="order-btn" onClick={() => showInfo("Redirecting to Order page...")}>Click to Order</button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Now Section */}
      <section className="shop-section" id="shop">
        <div className="container">
          <h2 className="section-title">Shop now</h2>
          <div className="product-grid">
            {shopProducts.map((product, index) => (
              <div key={index} className="product-card">
                <img src={`${cdnBase}${product.image}`} alt={product.title} className={`product-image ${product.type}`} />
                <div className="product-label">{product.label}</div>
                <h3 className="product-name" dangerouslySetInnerHTML={{ __html: product.title }}></h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="bestsellers-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Bestsellers</h2>
            <a href="#" className="view-all">View all</a>
          </div>
          <div className="bestsellers-grid">
            {bestsellers.map((item, index) => (
              <ProductCard
                key={index}
                image={item.image}
                title={item.title}
                badges={item.badge ? [item.badge] : null}
                cdnBase={cdnBase}
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">New Arrivals</h2>
            <a href="#" className="view-all">View all</a>
          </div>
          <div className="new-arrivals-grid">
            {newArrivals.map((item, index) => (
              <ProductCard
                key={index}
                image={item.image}
                title={item.title}
                badges={item.badge ? [item.badge] : null}
                cdnBase={cdnBase}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} cdnBase={cdnBase} />

      <Footer />

      <LoginModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Generic Info Modal */}
      <InfoModal
        isOpen={infoModalOpen}
        onClose={closeInfoModal}
        message={infoMessage}
      />
    </div>
  );
};

export default Clones2;
