import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, ArrowUpRight, Code2, Monitor, ShoppingBag, GraduationCap,
  Layers3, Smartphone, Menu, X, CheckCircle2, Mail, MessageCircle,
  Globe2, Sparkles, ChevronRight
} from "lucide-react";
import "./style.css";

const services = [
  { icon: Monitor, title: "Business Websites", text: "Professional websites that explain what you do, build trust and help customers reach you." },
  { icon: ShoppingBag, title: "E-commerce Websites", text: "Online storefronts that help you present products and make it easier for customers to enquire or order." },
  { icon: GraduationCap, title: "School Portals", text: "Organised school websites and portal experiences for students, staff and parents." },
  { icon: Layers3, title: "Custom Web Applications", text: "Purpose-built dashboards, booking systems and digital tools for your workflow." },
  { icon: Smartphone, title: "Portfolio Websites", text: "A polished online presence that showcases your work, skills and achievements." },
  { icon: Code2, title: "Redesign & Maintenance", text: "Improve an existing website's appearance, usability, responsiveness and content." }
];

const projects = [
  { type: "Business", title: "House of Imperial Wears", desc: "A fashion brand website concept for showcasing collections and helping customers make enquiries.", tag: "Fashion / Retail", mark: "HI", tone: "lavender" },
  { type: "Education", title: "AYFU Student Portal", desc: "A university portal concept with a clear student-focused layout and organised information.", tag: "Education", mark: "AY", tone: "blue" },
  { type: "Business", title: "Local Business Website", desc: "A clean business website concept designed to introduce services and generate enquiries.", tag: "Business", mark: "LB", tone: "mint" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", type: "Business website", budget: "", details: "" });

  const visibleProjects = projects.filter(p => filter === "All" || p.type === filter);
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    const subject = encodeURIComponent("Website project enquiry from " + form.name);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\nProject type: ${form.type}\nBudget: ${form.budget}\n\nProject details:\n${form.details}`
    );
    window.location.href = `mailto:hello@amirwebstudio.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">AY</span>
          <span><b>AMIR YUSUF</b><small>WEB DEVELOPMENT STUDIO</small></span>
        </a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          {["Home", "About", "Services", "Portfolio", "Contact"].map(item =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a project <ArrowUpRight size={16}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"></span> WEB DEVELOPMENT & DIGITAL SOLUTIONS</div>
            <h1>We build websites that move <em>your business</em> forward.</h1>
            <p className="hero-lead">Thoughtful, professional websites and web applications for businesses, schools, entrepreneurs and individuals ready to grow online.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Discuss your project <ArrowRight size={17}/></a>
              <a className="button secondary" href="#portfolio">Explore our work</a>
            </div>
            <div className="hero-note"><CheckCircle2 size={16}/> Clear communication. Practical solutions. Built around your goals.</div>
          </div>
          <div className="hero-art">
            <div className="art-glow"></div>
            <div className="browser-card">
              <div className="browser-top"><span></span><span></span><span></span><div>yourbusiness.com</div></div>
              <div className="browser-content">
                <div className="mock-nav"><b>YOUR BRAND</b><span>Home&nbsp;&nbsp; About&nbsp;&nbsp; Services</span><i></i></div>
                <div className="mock-main"><div className="mock-label">A BETTER DIGITAL PRESENCE</div><div className="mock-title">Make your next<br/>move count.</div><div className="mock-lines"><i></i><i></i></div><div className="mock-button">Get started <ArrowRight size={12}/></div></div>
                <div className="mock-bottom"><div></div><div></div><div></div></div>
              </div>
            </div>
            <div className="floating-chip chip-one"><Code2 size={17}/><span><b>Clean code</b><small>Built with care</small></span></div>
            <div className="floating-chip chip-two"><Smartphone size={17}/><span><b>Responsive</b><small>Every screen</small></span></div>
            <div className="hero-orbit"></div>
          </div>
        </section>

        <section className="trust-strip">
          <span>WE CREATE DIGITAL EXPERIENCES FOR</span>
          <div><b>BUSINESSES</b><b>EDUCATION</b><b>ENTREPRENEURS</b><b>INDIVIDUALS</b></div>
        </section>

        <section className="section intro" id="about">
          <div className="section-kicker">A PRACTICAL APPROACH TO THE WEB</div>
          <div className="intro-grid">
            <h2>Good websites do more than look good. <span>They make things happen.</span></h2>
            <div><p>I'm Amir Yusuf, a web developer focused on creating useful, modern and accessible digital experiences. I work with people and organisations to turn ideas into websites that communicate clearly and support real goals.</p><a className="text-link" href="#contact">Let's talk about your idea <ArrowUpRight size={17}/></a></div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div><div className="section-kicker">WHAT I CAN HELP WITH</div><h2>Digital solutions for <span>your next step.</span></h2></div>
            <p>From a first business website to a custom platform, choose the support that fits your project.</p>
          </div>
          <div className="service-grid">
            {services.map(({icon: Icon, title, text}, i) => <article className="service-card" key={title}>
              <div className="service-icon"><Icon size={22}/></div><div className="service-number">0{i+1}</div>
              <h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Enquire about ${title}`}><ArrowUpRight size={18}/></a>
            </article>)}
          </div>
        </section>

        <section className="section portfolio-section" id="portfolio">
          <div className="section-heading">
            <div><div className="section-kicker">SELECTED WORK & CONCEPTS</div><h2>Ideas made <span>visible.</span></h2></div>
            <p>A few examples of the types of digital experiences I can create. Concept projects are labelled transparently.</p>
          </div>
          <div className="filters">{["All", "Business", "Education"].map(f => <button className={filter===f?"active":""} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div>
          <div className="project-grid">
            {visibleProjects.map((p, i) => <article className="project-card" key={p.title}>
              <div className={`project-preview ${p.tone}`}>
                <div className="preview-window"><div className="preview-bar"><i></i><i></i><i></i></div><div className="preview-layout"><div className="preview-logo">{p.mark}</div><div className="preview-heading"></div><div className="preview-line"></div><div className="preview-line short"></div><div className="preview-blocks"><i></i><i></i><i></i></div></div></div>
                <span className="concept-label">DEMO CONCEPT</span>
              </div>
              <div className="project-info"><div className="project-tag">{p.tag}</div><h3>{p.title}</h3><p>{p.desc}</p><a href="#contact">Discuss a similar project <ArrowUpRight size={16}/></a></div>
            </article>)}
          </div>
        </section>

        <section className="process-band">
          <div className="section process-inner">
            <div><div className="section-kicker light">A CLEAR, COLLABORATIVE PROCESS</div><h2>From first idea to <span>launch day.</span></h2><p>You'll know what we're building, why we're building it and what comes next.</p></div>
            <div className="steps">
              {["Discover your goals", "Plan the right solution", "Design and develop", "Review, refine and launch"].map((s,i)=><div className="step" key={s}><b>0{i+1}</b><span>{s}</span><ChevronRight size={17}/></div>)}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy"><div className="section-kicker">HAVE A PROJECT IN MIND?</div><h2>Let's build something <span>worth sharing.</span></h2><p>Tell me a little about what you need. I'll review your enquiry and get back to you to discuss the next steps.</p>
            <div className="contact-detail"><span><Mail size={18}/></span><div><small>EMAIL</small><b>hello@amirwebstudio.com</b><em>Replace with your preferred email before publishing.</em></div></div>
            <div className="contact-detail"><span><Globe2 size={18}/></span><div><small>WORKING WITH</small><b>Businesses, schools and individuals</b></div></div>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-title"><Sparkles size={18}/> Project enquiry</div>
            <div className="form-row"><label>Your name<input required name="name" value={form.name} onChange={update} placeholder="Full name"/></label><label>Email address<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com"/></label></div>
            <label>Business or organisation<input name="business" value={form.business} onChange={update} placeholder="Business name (optional)"/></label>
            <div className="form-row"><label>What do you need?<select name="type" value={form.type} onChange={update}><option>Business website</option><option>E-commerce website</option><option>School portal</option><option>Portfolio website</option><option>Custom web application</option><option>Website redesign</option><option>Other</option></select></label><label>Estimated budget<input name="budget" value={form.budget} onChange={update} placeholder="e.g. ₦100,000"/></label></div>
            <label>Tell me about your project<textarea required name="details" value={form.details} onChange={update} rows="4" placeholder="What are you hoping to build?"></textarea></label>
            <button className="button primary submit" type="submit">Prepare enquiry <ArrowRight size={17}/></button>
            <p className="form-note">{sent ? "Your email app should open with your enquiry details." : "This starter form opens your email app. Database submission will be connected in a later stage."}</p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">AY</span><span><b>AMIR YUSUF</b><small>WEB DEVELOPMENT STUDIO</small></span></a>
        <p>Building Digital Experiences That Grow Businesses.</p>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Amir Yusuf Web Development Studio.</span><a href="#home">Back to top ↑</a><span>Designed with purpose.</span></div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
