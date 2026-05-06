/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon, 
  Info, 
  Stethoscope, 
  Mail, 
  Calendar, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Smile, 
  Sparkles, 
  Clock,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  Instagram,
  Facebook
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'about' | 'services' | 'contact';

// --- Shared Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setPage('home')}
        >
          <img 
            src="https://i.postimg.cc/9MzdQLpr/SEzee.jpg" 
            alt="Clinic Logo" 
            className="h-14 w-auto rounded-md shadow-sm"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 items-center">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`nav-link ${currentPage === link.id ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </button>
          ))}
          <button className="btn-primary ml-4">Book Appointment</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-outline-variant/20 px-4 py-6 flex flex-col gap-4 shadow-xl"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setPage(link.id);
                  setIsOpen(false);
                }}
                className={`text-left py-2 font-medium ${currentPage === link.id ? 'text-secondary' : 'text-primary/70'}`}
              >
                {link.label}
              </button>
            ))}
            <button className="btn-primary w-full text-center">Book Appointment</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
  <footer className="bg-surface-container-lowest border-t border-outline-variant/30 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-3 mb-6">
          <img 
            src="https://i.postimg.cc/9MzdQLpr/SEzee.jpg" 
            alt="Clinic Logo" 
            className="h-12 w-auto mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="text-primary/70 max-w-sm mb-4">
          Excellence in Modern Dentistry. Providing premium care with advanced technology and a patient-first philosophy.
        </p>
        <p className="text-xs text-primary/50">© 2026 DataZync. All Rights Reserved.</p>
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-6">Legal & Info</h4>
        <ul className="space-y-3">
          <li><button className="text-sm text-primary/70 hover:text-secondary transition-colors">Privacy Policy</button></li>
          <li><button className="text-sm text-primary/70 hover:text-secondary transition-colors">Terms of Service</button></li>
          <li><button className="text-sm text-primary/70 hover:text-secondary transition-colors">Patient Rights</button></li>
          <li><button className="text-sm text-primary/70 hover:text-secondary transition-colors">Insurance Partners</button></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-6">Contact</h4>
        <ul className="space-y-3 text-sm text-primary/70">
          <li className="flex items-start gap-2"><MapPin size={16} className="mt-1 shrink-0" /> 9, Perundurai Rd, Teachers Colony, Kumalan Kuttai, Erode, Tamil Nadu 638011</li>
          <li className="flex items-center gap-2"><Phone size={16} /> 070109 56291</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-6">Connect</h4>
        <div className="flex gap-4">
          <a 
            href="https://www.instagram.com/smileezeedentistry/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-secondary/10 text-secondary rounded-full hover:bg-secondary hover:text-white transition-all shadow-sm"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://www.facebook.com/smileezeedentistry/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-secondary/10 text-secondary rounded-full hover:bg-secondary hover:text-white transition-all shadow-sm"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Page Components ---

const HomePage = ({ setPage, setIsBookingOpen }: { setPage: (p: Page) => void, setIsBookingOpen: (o: boolean) => void }) => (
  <>
    {/* Hero */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row items-center gap-16">
      <motion.div 
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">Your Smile,<br />Our Priority</h1>
        <p className="text-lg text-primary/70 max-w-lg">
          Experience premium, anxiety-free dental care in a state-of-the-art environment. 
          We combine clinical excellence with modern wellness to deliver the smile you deserve.
        </p>
        <div className="flex gap-4">
          <button className="btn-primary" onClick={() => setIsBookingOpen(true)}>Book Appointment</button>
          <button className="btn-outline" onClick={() => setPage('contact')}>Contact Us</button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex-1 w-full rounded-2xl overflow-hidden shadow-2xl"
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp-lmJ34oGCE2dTdRbuI3BRryqs9tria5LW1URB607yj0J3WTmPdZ-OuzXCuokVJmxlhrzCLOtjwHWAlWUe1gYX9pFHq9xTxuhThw6c7c1gfLDIaIlhRLZqrq6H29YBfMcNxVFv0Tya8knB0B32jJindto7E-Apy-yvCtChwEare6GCnk0pWbxEPT6H8j1kxoJQpzDug19imr2spSj6x-rnxRwWmTYz3bn6c_dMHqoyeGhmT4ox6vmAgCTwjMziI_13Q5gDTGvOSgc" 
          alt="Modern Dental Care" 
          className="w-full h-full object-cover aspect-[4/3]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>

    {/* Modern Care Showcase */}
    <section className="bg-surface-container-lowest py-20 border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience Modern Care</h2>
          <p className="text-primary/60">Discover our cutting-edge facilities and commitment to patient comfort.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 h-72 rounded-xl overflow-hidden group relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZGbjVqHRB_o9McXnLjI-BIpTFELmjirCc-iIhUWn-Ws15OsHyf_LjuxjseFyvj_43w_CoWjQiit8x2KdiQDQKGcEaD8h8Mr9C7TL-l7-TT7Ik-Vfo2N5OcBxVoMkpNy5mBVVucwkEQJH0Dl5YICEZB85ZOphSjI6EjLOthu0za9G1u9Nq8O2q-5N8HttilgX0GAHtlJbraDFRjtfhjElGinRkwpo5F5zqxTdeuaNaXdLs0CmX7FqmkL55ilIOlFZ909As_nEWZFDY" 
              alt="Clinic Interior" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="h-72 rounded-xl overflow-hidden group relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0OqPg3HyEguIZTPzKfWAiGVdcHC3-RvXfZIBuXatTbqLgHAtjo86CMkLzvqxs0WVvYUTiw-sUcOL9-tAlde3AFrFFQz2kpUbLiHKl6qjllbF1WdaF7QMRdRQpOHzku1z07W6O4sR290HJNMtze2VbSWAhSNbF4R5GewDuYz-ezonU_DhTl8m4oCunZ5XNl4xWeJkcRv2kGUCzDMGpeD8-SW5Kkuh4j-HF2sCyZ6nqJ-8uZxzblFfi7xdKWnRlFqx2Cj3VpMOEwqUX" 
              alt="Technology" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Services Highlights */}
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Comprehensive Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "General Dentistry", description: "Routine check-ups, cleanings, and preventive care to maintain optimal oral health.", icon: <ShieldCheck className="text-secondary" /> },
          { title: "Cosmetic Enhancements", description: "Professional whitening, veneers, and aesthetic treatments for a radiant smile.", icon: <Sparkles className="text-secondary" /> },
          { title: "Restorative Care", description: "Implants, crowns, and bridges utilizing durable, natural-looking materials.", icon: <Smile className="text-secondary" /> }
        ].map((service, i) => (
          <div key={i} className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-primary/70">{service.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-surface-container py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Patient Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              quote: "The team at Lumina transformed my approach to dental visits. The environment is so calming, and the care is incredibly precise.",
              author: "SARAH JENKINS",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5OVsPtsUKrETN_rBBuZ3h7ZLH7JcDSSlCtLColqz25FB4Bh51fLHmZqPUuNEjXRHbF57rCi5w_5W8Bx6ZT434wwKv9xq3DEwCJjDcv-gTQIURflyYphm1lxnk8iMqIPf3HQ4VUvgUrclVkNE0Ge5UtwyR9MvBPda-i1VE00CMjUcKmjRc_8VGSeewZUv3_2y7FzX991qSZ5z_VAL--MA_xWBmEL-lF-8ypTtZhoEW7X2D1GHM7Ol8insZGcYFqSClHRpMG8XCeHSL"
            },
            { 
              quote: "State-of-the-art facility with a genuinely human touch. I've never felt more comfortable in a dentist's chair.",
              author: "MICHAEL CHANG",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrkByxX9sub6NFdD2jDQd3ten1ImfrNbSpDvTvWs89hbPXi1Sc9XSqj8MnPOOcLtYDz4HdtKl_tyf62ykzgLYb3h9Me8o6omNLOc9ESSOrSg7M_06_VNm62bJ0PG5W6g9iA7wo9sKZu5BspdqewJ_mgK9T2bn74OfpUH1liyX-4yCqzzmwwc1z4DkVHDMjpGXfYmxzPQcrCl6S4NHX_zgk-ayBwBHWdn1EGCNme0IoEf1wWGZ42FWRHEI1tYfoW6YfPSjrm9Z8Jrxj"
            }
          ].map((item, i) => (
            <div key={i} className="glass-card p-10 rounded-2xl flex gap-6 items-start">
              <img src={item.img} alt={item.author} className="w-16 h-16 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <p className="text-lg italic text-primary mb-4 leading-relaxed">"{item.quote}"</p>
                <div className="text-xs font-bold text-primary/40 uppercase tracking-widest">{item.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const AboutPage = () => (
  <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold leading-tight">Redefining the Dental Experience.</h1>
        <p className="text-lg text-primary/70 leading-relaxed">
          Founded on the principles of clinical excellence and compassionate care, Lumina Dental Clinic brings a new standard of oral health to our community. 
          We believe a trip to the dentist should be serene, transparent, and built on a foundation of absolute trust.
        </p>
        <p className="text-primary/60">
          Since our inception, our philosophy has remained unwavering: combine state-of-the-art medical technology with a profoundly human touch. 
          We take the anxiety out of dentistry by prioritizing patient education, comfort, and precise, predictable outcomes.
        </p>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-2xl">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzYig2icxCPeOklB7TK-VqcJ4VAilIgStCtyZK5lZDyv7m9lcOhJ-RmOCYeIiuSFLx59V70f6j1inANziEaFFm3HlTAYOwhRdB8Kh03S8igsrbBjJciuVKb2sCL3PYtQrlQRD8dyYXND4fJCJnbZrTpLQFe69Iz4LuVEYEZcMQTiFKwILk5RvrhDIR8HC826zxJjT35wBeIJ2j-tctQmaiqFviIadBtjrircdLmBfJw0gWVdM0j7yy7pZfOtHQ4rY1tn1WMSMrxV3T" 
          alt="Our Clinic" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>

    {/* Mission & Vision */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
      {[
        { title: "Our Mission", icon: <Calendar className="text-secondary" />, text: "To deliver unparalleled dental care through advanced technology and minimally invasive techniques, ensuring every patient achieves optimal oral health in a comfortable environment." },
        { title: "Our Vision", icon: <Info className="text-secondary" />, text: "To be the premier destination for comprehensive dentistry, recognized for our clinical precision, aesthetic mastery, and unwavering commitment to holistic wellness." }
      ].map((box, i) => (
        <div key={i} className="glass-card p-10 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary" />
          <div className="mb-6">{box.icon}</div>
          <h3 className="text-3xl font-bold mb-4">{box.title}</h3>
          <p className="text-primary/70 leading-relaxed">{box.text}</p>
        </div>
      ))}
    </div>

    {/* Specialists */}
    <div className="mb-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Meet Our Specialists</h2>
        <p className="text-primary/60">Dedicated specialists with world-class education and clinical expertise.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Dr. Sarah Jenkins", role: "Lead Prosthodontist", text: "Specializing in complex restorative dentistry and full-mouth rehabilitation. 15+ years of clinical excellence.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEc8xW5QTXvyyjvruuEK4KLHBhJJbvlR1jAV_YMaiyirDlUUPtSB_ibMxR4DxpNJi3jK2yQA0lESa6CaPpkRgv7gusHDSHMklxizmzRmmkNfS0beshQyvCGw4RuNgcCj-Jy49hVFbjoUHtClYAGHeteGFDRyXi_CBIxAkaCV65fkF5uRmwU_7mFBvVe5CVYMS1Nhy3C0RlgCXVvudlabJDN-bNGMsTPg-708YkYlQux--id9_kHXaJePNB_a_s125B1HtbB3ywFpsP" },
          { name: "Dr. Marcus Chen", role: "Oral Surgeon", text: "Expert in implantology and corrective jaw surgery using 3D imaging for precise clinical outcomes.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN82KeB_WfoBrSoFpRny_Mtlx4PP10ElbYkbNhWco4Wqwasq-3gSp4X-O_r-istINmcnn1gQ3OUkXASAy-0O05I64g1xW25pjXxGzP9RL-1nBVHSroJADYoTN0iDdhSuRghQGhGjoHIJ1Mol22pNpbcj6_YaVklXfnrBfrTZLs9EcS61-ndsI2O4R1Gcc-a5UevYyT2tA5DuJxWeXJDPjAwdMEMnYwmQHpzIGgZIjZLNGWmu9sT3aDefh5tf4USk__904RpGAc5wL-" },
          { name: "Dr. Elena Rodriguez", role: "Orthodontist", text: "Dedicated to invisible aligner technology and low-friction systems for perfect functional aesthetics.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXZ_7-VFMkDN_S05qvJosVoYWJ4vPALUcWUTXPPbJnxTAs807sR5tu33yKmXhpzLTZwmTa5inevG8hEDwGwPwMPeZl_8IZEhuplehCXsnTsXoSbUkHU97QbYPvtskBuJotQNgsSEM7cnEo1spHufOPKviFUHJdQLhtRs5f7Nv0CnB7E4MVWMRJP3c16uHVaddgYEadwOVDCCGDItQCa9O1Ar4wdplEc7QPC0bGvZJKn3O2FhNlXy55DXSJURhqYlsA-cMC-gtyi2eN" }
        ].map((doc, i) => (
          <div key={i} className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
            <img src={doc.img} alt={doc.name} className="w-full h-72 object-cover" referrerPolicy="no-referrer" />
            <div className="p-8 space-y-2 flex-grow">
              <h3 className="text-2xl font-bold">{doc.name}</h3>
              <div className="text-secondary text-xs font-bold uppercase tracking-widest">{doc.role}</div>
              <p className="text-sm text-primary/70 pt-4 leading-relaxed">{doc.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ServicesPage = ({ setIsBookingOpen }: { setIsBookingOpen: (o: boolean) => void }) => (
  <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
      <h1 className="text-5xl font-bold text-primary">Our Dental Services</h1>
      <p className="text-lg text-primary/60">
        Experience world-class dental care with our comprehensive range of services. 
        We combine advanced technology with a compassionate approach.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        "Root Canal Treatment", "Dentures & Implants", "Dental Implants",
        "Dental Veneers", "Dental Crowns and Bridges", "Special Pedodontic Care",
        "Orthodontics", "Invisalign", "Braces"
      ].map((service, i) => (
        <div key={i} className="glass-card p-8 rounded-xl group hover:-translate-y-2">
          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
            <Stethoscope size={20} />
          </div>
          <h3 className="text-xl font-bold mb-4">{service}</h3>
          <p className="text-primary/70 mb-6 text-sm">
            Advanced specialized treatments using durable, natural-looking materials and precision technology.
          </p>
          <button className="text-secondary font-bold text-sm flex items-center gap-2">
            Learn More <ArrowRight size={14} />
          </button>
        </div>
      ))}
    </div>

    <div className="mt-24 bg-primary-container rounded-3xl p-16 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95')] bg-cover bg-center" />
      <div className="relative z-10 space-y-6">
        <h2 className="text-4xl font-bold">Ready for a Brighter Smile?</h2>
        <p className="text-on-primary-container text-lg max-w-xl mx-auto">
          Schedule a consultation today and let our expert team design a personalized treatment plan for you.
        </p>
        <button className="btn-primary" onClick={() => setIsBookingOpen(true)}>Book Your Visit</button>
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Contact Message*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918072117912?text=${text}`, '_blank');
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl font-bold text-primary mb-6">We're here to help you smile.</h1>
        <p className="text-lg text-primary/70">
          Whether you have a question about our services, need to schedule a consultation, 
          or require immediate assistance, our team is ready to provide exceptional care.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 glass-card p-6 md:p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
          <form className="space-y-6" onSubmit={handleContactSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/50">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 outline-none focus:border-secondary transition-colors"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/50">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="070109 56291" 
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 outline-none focus:border-secondary transition-colors"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary/50">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com" 
                className="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 outline-none focus:border-secondary transition-colors"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary/50">How can we help?</label>
              <textarea 
                required
                rows={5} 
                placeholder="Please describe your needs..." 
                className="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 outline-none focus:border-secondary transition-colors resize-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <div className="pt-4">
              <button type="submit" className="btn-primary w-full md:w-auto flex items-center gap-2 justify-center">
                Send Message <MessageCircle size={18} />
              </button>
            </div>
          </form>
        </div>

      <div className="lg:col-span-5 space-y-6">
        <div className="glass-card p-8 rounded-2xl space-y-8">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <h3 className="font-bold mb-1">Clinic Location</h3>
              <p className="text-sm text-primary/70 leading-relaxed">9, Perundurai Rd, Teachers Colony,<br />Kumalan Kuttai, Erode, Tamil Nadu 638011</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <h3 className="font-bold mb-1">Direct Line</h3>
              <p className="text-lg font-bold text-secondary">070109 56291</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h3 className="font-bold mb-6 flex items-center gap-2"><Clock size={18} /> Working Hours</h3>
          <ul className="space-y-4">
            <li className="flex justify-between text-sm">
              <span className="text-primary/70">Monday - Saturday</span>
              <span className="font-bold">9:30 AM - 8:00 PM</span>
            </li>
            <li className="flex justify-between text-sm">
              <span className="text-primary/70">Sunday</span>
              <span className="text-red-500 font-bold">Closed</span>
            </li>
          </ul>
        </div>

        <div className="h-48 rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 filter grayscale opacity-70">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAUDzaRPVOjOTOhYq7TfhkknR6cIEiu26sIEmywQOOZRl2CcLAW1OzyCfIoNbm6j8khXI9GH-ltJalsPtELjezs5M1HT6fxW7vUKe_QX9DzrjZHrJogj8s5CQwqdMOyllTNDL09OkPsnjaTKEqmZCzlq0bcTBfd7zGp99rt7YpKQNuyJXw-PPmA_bWn7FMZMkpqHMFLK49nnZ0_pXclYff9giBZE4VpAJM3wStxcPzKmkg-dhx_vthYPpBA--ZEwidUg9JlwNp3TF1" alt="Map" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  </div>
);
};

// --- Main App ---

const BookingModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    secondaryPhone: '',
    address: '',
    date: '',
    slot: '',
    issue: ''
  });

  const slots = [
    '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM',
    '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
    '07:00 PM', '07:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*New Booking Request*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Secondary:* ${formData.secondaryPhone || 'N/A'}%0A*Date:* ${formData.date}%0A*Slot:* ${formData.slot}%0A*Address:* ${formData.address}%0A*Issue:* ${formData.issue}`;
    
    window.open(`https://wa.me/918072117912?text=${message}`, '_blank');
    
    onClose();
    setStep(1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl overflow-y-auto glass-card !bg-white/95"
          >
            <div className="p-6 md:p-10">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-primary">Book Appointment</h2>
                  <p className="text-primary/60 text-sm mt-1">Please fill in your details below</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-surface rounded-full transition-colors">
                  <X />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/50">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-xl p-4 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/50">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="070109 56291" 
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-xl p-4 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/50">Secondary Phone</label>
                    <input 
                      type="tel" 
                      placeholder="Optional" 
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-xl p-4 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                      value={formData.secondaryPhone}
                      onChange={e => setFormData({...formData, secondaryPhone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/50">Preferred Date</label>
                    <input 
                      required
                      type="date" 
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-xl p-4 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/50">Select Time Slot</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-40 overflow-y-auto p-1 scrollbar-thin">
                    {slots.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setFormData({...formData, slot: s})}
                        className={`py-2 px-1 text-[10px] font-bold rounded-lg border transition-all ${
                          formData.slot === s 
                          ? 'bg-secondary text-white border-secondary shadow-md' 
                          : 'bg-surface border-outline-variant/20 text-primary/70 hover:border-secondary/50'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/50">Address</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Your complete address" 
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-xl p-4 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/50">Comments/Issue Description</label>
                  <textarea 
                    rows={3} 
                    placeholder="Briefly describe your concern..." 
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-xl p-4 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                    value={formData.issue}
                    onChange={e => setFormData({...formData, issue: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={!formData.slot}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                    formData.slot 
                    ? 'bg-secondary text-white shadow-xl hover:shadow-2xl active:scale-95' 
                    : 'bg-surface-dim text-primary/40 cursor-not-allowed'
                  }`}
                >
                  Confirm Booking <Calendar size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Chatbot Component ---

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [chatData, setChatData] = useState({
    name: '',
    purpose: '',
    issue: '',
    date: '',
    slot: ''
  });

  const slots = [
    '09:30 AM', '11:00 AM', '02:30 PM', '05:00 PM', '07:30 PM'
  ];

  const steps = [
    { 
      question: "Hello! Welcome to Smile Ezee Dentistry. May I know your name please?",
      field: 'name',
      type: 'text',
      placeholder: 'Enter your name'
    },
    {
      question: "Great to meet you! What is the purpose of your visit? (e.g. Checkup, Cleaning, Treatment)",
      field: 'purpose',
      type: 'text',
      placeholder: 'Purpose of visit'
    },
    {
      question: "Are you experiencing any specific issues or pain?",
      field: 'issue',
      type: 'textarea',
      placeholder: 'Describe your issue...'
    },
    {
      question: "When would you like to visit us?",
      field: 'date',
      type: 'date'
    },
    {
      question: "Please select a preferred time slot:",
      field: 'slot',
      type: 'select',
      options: slots
    }
  ];

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const handleWhatsApp = () => {
    const text = `*Chatbot Enquiry*%0A*Name:* ${chatData.name}%0A*Purpose:* ${chatData.purpose}%0A*Issue:* ${chatData.issue}%0A*Date:* ${chatData.date}%0A*Slot:* ${chatData.slot}`;
    window.open(`https://wa.me/918072117912?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 left-8 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 md:w-96 glass-card !bg-white/95 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-secondary p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-bold text-sm">Smile Ezee Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-thin">
              {/* Previous Messages History simulation */}
              {steps.slice(0, step + 1).map((s, i) => (
                <div key={i} className="space-y-4">
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="bg-surface-container p-3 rounded-lg rounded-tl-none text-sm text-primary max-w-[85%]"
                  >
                    {s.question}
                  </motion.div>
                  
                  {i < step && (
                    <motion.div 
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="bg-secondary text-white p-3 rounded-lg rounded-tr-none text-sm self-end ml-auto max-w-[85%]"
                    >
                      {(chatData as any)[s.field]}
                    </motion.div>
                  )}
                </div>
              ))}

              {step === steps.length && (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-green-50 border border-green-200 p-4 rounded-lg space-y-2"
                >
                  <p className="text-sm font-bold text-green-800">Enquiry Summary:</p>
                  <div className="text-xs text-green-700 space-y-1">
                    <p>• {chatData.name}</p>
                    <p>• {chatData.purpose}</p>
                    <p>• {chatData.date} at {chatData.slot}</p>
                  </div>
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-bold mt-2 hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Send to WhatsApp <MessageCircle size={16} />
                  </button>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            {step < steps.length && (
              <div className="p-4 border-t border-outline-variant/20 bg-surface">
                {steps[step].type === 'text' && (
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      placeholder={steps[step].placeholder}
                      className="flex-grow p-2 text-sm bg-white border border-outline-variant/30 rounded-lg outline-none focus:border-secondary"
                      value={(chatData as any)[steps[step].field]}
                      onChange={(e) => setChatData({...chatData, [steps[step].field]: e.target.value})}
                      onKeyPress={(e) => e.key === 'Enter' && (chatData as any)[steps[step].field] && handleNext()}
                    />
                    <button 
                      onClick={handleNext}
                      disabled={!(chatData as any)[steps[step].field]}
                      className="p-2 bg-secondary text-white rounded-lg disabled:opacity-50"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                )}

                {steps[step].type === 'textarea' && (
                  <div className="space-y-2">
                    <textarea 
                      placeholder={steps[step].placeholder}
                      className="w-full p-2 text-sm bg-white border border-outline-variant/30 rounded-lg outline-none focus:border-secondary resize-none"
                      rows={2}
                      value={(chatData as any)[steps[step].field]}
                      onChange={(e) => setChatData({...chatData, [steps[step].field]: e.target.value})}
                    />
                    <button 
                      onClick={handleNext}
                      disabled={!(chatData as any)[steps[step].field]}
                      className="w-full bg-secondary text-white p-2 rounded-lg text-sm font-bold"
                    >
                      Continue
                    </button>
                  </div>
                )}

                {steps[step].type === 'date' && (
                  <div className="space-y-2">
                    <input 
                      type="date"
                      className="w-full p-2 text-sm bg-white border border-outline-variant/30 rounded-lg outline-none focus:border-secondary"
                      value={(chatData as any)[steps[step].field]}
                      onChange={(e) => setChatData({...chatData, [steps[step].field]: e.target.value})}
                    />
                    <button 
                      onClick={handleNext}
                      disabled={!(chatData as any)[steps[step].field]}
                      className="w-full bg-secondary text-white p-2 rounded-lg text-sm font-bold"
                    >
                      Next
                    </button>
                  </div>
                )}

                {steps[step].type === 'select' && (
                  <div className="grid grid-cols-2 gap-2">
                    {steps[step].options?.map(opt => (
                      <button
                        key={opt}
                        onClick={() => {
                          setChatData({...chatData, slot: opt});
                          setStep(step + 1);
                        }}
                        className="p-2 text-xs font-bold border border-secondary/30 rounded-lg hover:bg-secondary/5 text-secondary"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-secondary text-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all relative"
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage setPage={setPage} setIsBookingOpen={setIsBookingOpen} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage setIsBookingOpen={setIsBookingOpen} />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setPage('home')}
          >
            <img 
              src="https://i.postimg.cc/9MzdQLpr/SEzee.jpg" 
              alt="Clinic Logo" 
              className="h-14 w-auto mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="hidden md:flex gap-4 items-center">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'services', label: 'Services' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => setPage(link.id as Page)}
                className={`nav-link ${page === link.id ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => setIsBookingOpen(true)} className="btn-primary ml-4">Book Appointment</button>
          </div>

          <button className="md:hidden text-primary" onClick={() => setIsBookingOpen(true)}>
             <Menu />
          </button>
        </div>
      </nav>
      
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setPage} />

      <Chatbot />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      {/* FAB */}
      <button 
        onClick={() => setIsBookingOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-secondary text-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40"
      >
        <Calendar size={24} />
      </button>
    </div>
  );
}
