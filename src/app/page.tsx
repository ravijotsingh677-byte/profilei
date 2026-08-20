'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, Clapperboard, Instagram, Linkedin, Menu, MoveUpRight, Sparkles, X, Youtube } from 'lucide-react';

const images = {
  hero: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2200&q=88',
  viral: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=88',
  kyoto: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1000&q=88',
  neon: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=88',
  luxury: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=88',
  motion: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=88',
  social: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=88',
  ravijot: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=88',
  lakshay: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=88'
};

const projects = [
  { title: 'The Viral Documentary', category: 'DOCUMENTARY / EDITING', image: images.viral, size: 'feature' },
  { title: 'Kyoto Mist Series', category: 'TRAVEL / COLOR', image: images.kyoto, size: 'portrait' },
  { title: 'Neon City Nights', category: 'SHORT FILM / VFX', image: images.neon, size: 'standard' },
  { title: 'Luxury Brand Spot', category: 'COMMERCIAL / FILM', image: images.luxury, size: 'standard' },
  { title: 'Motion Graphics Reel', category: 'MOTION / DESIGN', image: images.motion, size: 'wide' },
  { title: 'Social Media Cuts', category: 'SOCIAL / CAMPAIGN', image: images.social, size: 'standard' }
];
const services = [
  ['01', 'Reel Editing', 'Fast, story-led cuts built for attention.'], ['02', 'YouTube Editing', 'Long-form rhythm that keeps audiences watching.'], ['03', 'Commercial Ads', 'Cinematic films with a clear point of view.'], ['04', 'AI Video Production', 'New tools, human taste, original outcomes.'], ['05', 'Motion Graphics', 'Movement that gives your message a pulse.'], ['06', 'Color Grading', 'A considered visual world for every frame.'], ['07', 'Social Media Management', 'A consistent creative engine for your channels.'], ['08', 'Meta Ads Production', 'Performance creative made to move metrics.']
];
const tools = ['DaVinci Resolve', 'Photoshop', 'Google Flow', 'Higgsfield', 'After Effects', 'Premiere Pro', 'CapCut', 'Runway', 'N8N', 'Final Cut Pro'];

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const element = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    if (element.current) observer.observe(element.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={element} className={`${visible ? 'reveal visible' : 'reveal'} ${className}`}>{children}</div>;
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['WORK', 'work'], ['SERVICES', 'services'], ['ABOUT', 'about'], ['COPYRIGHT', 'copyright']];
  return <header className="nav"><a href="#top" className="brand" aria-label="Vivid Frame Studio home"><span>VIVID</span><i>frame</i></a><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</nav><a className="nav-cta" href="#contact">HIRE ME <ArrowUpRight size={14} /></a><button className="menu-button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></header>;
}

function Stats() {
  return <div className="stats">{[['20+', 'YEARS EXPERIENCE'], ['200+', 'PROJECTS DELIVERED'], ['20+', 'AWARDS & SHORTLISTS'], ['20+', 'GLOBAL CLIENTS']].map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>;
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return <article className={`project-card ${project.size}`}><img src={project.image} alt={project.title} /><div className="project-shade" /><div className="project-copy"><span>{project.category}</span><h3>{project.title}</h3><MoveUpRight size={18} /></div></article>;
}

export default function Home() {
  const [sent, setSent] = useState(false);
  return <main id="top"><Navbar /><section className="hero"><div className="hero-image" style={{ backgroundImage: `url(${images.hero})` }} /><div className="hero-grain" /><div className="hero-content"><p className="eyebrow">EDITING / PRODUCTION / DIRECTION</p><h1>Make it<br /><em>move.</em></h1><p className="hero-note">We shape raw ideas into work that stays with people.</p><a className="round-link" href="#work" aria-label="Explore work"><ArrowDownRight size={25} /></a></div><div className="hero-footer"><span>VIVID FRAME STUDIO / 2024</span><span>SCROLL TO EXPLORE <ArrowDownRight size={14} /></span></div></section>
    <section className="intro section-pad"><SectionLabel number="00">A LITTLE ABOUT US</SectionLabel><div className="intro-grid"><Reveal><h2>Ideas are<br /><em>everywhere.</em></h2></Reveal><Reveal><p className="lead">The difference is in how you make them felt. Vivid Frame is a creative studio for brands, creators and people with something worth saying.</p><a className="text-link" href="#about">MEET THE STUDIO <ArrowUpRight size={16} /></a></Reveal></div><Stats /></section>
    <section id="work" className="work section-pad"><SectionLabel number="01">SELECTED PROJECTS</SectionLabel><div className="section-heading"><Reveal><h2>CHARTED<br /><em>FRAMES</em></h2></Reveal><p>A selection of stories, campaigns and visual worlds we&apos;ve helped bring to life. No two frames are ever the same.</p></div><div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div><a className="outlined-link" href="#contact">VIEW ALL 200+ PROJECTS <ArrowUpRight size={16} /></a></section>
    <section id="services" className="services section-pad"><SectionLabel number="02">THE OFFER</SectionLabel><div className="section-heading service-heading"><Reveal><h2>WHAT I DO<br /><em>CREATIVE SUITE</em></h2></Reveal><p>From the first spark to the final export, a full creative partner for the moving image.</p></div><div className="service-list">{services.map(([number, title, description]) => <a className="service-item" href="#contact" key={title}><span className="service-number">{number}</span><Clapperboard size={19} /><div><h3>{title}</h3><p>{description}</p></div><span className="explore">EXPLORE <ArrowUpRight size={15} /></span></a>)}</div></section>
    <section id="about" className="about section-pad"><SectionLabel number="03">THE PEOPLE</SectionLabel><div className="section-heading"><Reveal><h2>GOOD WORK<br /><em>TAKES A TEAM</em></h2></Reveal><p>Small enough to care about every detail. Big enough to make a little noise.</p></div><div className="team-grid"><article className="team-card"><img src={images.ravijot} alt="Ravijot Singh" /><div><span>01 / FOUNDING EDITOR</span><h3>Ravijot Singh</h3><p>Fitness enthusiast, visual storyteller and the steady hand behind the cut.</p></div></article><article className="team-card"><img src={images.lakshay} alt="Lakshay Kalra" /><div><span>02 / VIDEO EDITOR</span><h3>Lakshay Kalra</h3><p>Editor, image-maker and collector of the tiny moments that make a film sing.</p></div></article></div><div className="capabilities"><div><h3>CORE SKILLS</h3>{[['Video Editing', '96%'], ['Color Grading', '88%'], ['Creative Direction', '84%']].map(([label, value]) => <div className="skill" key={label}><div><span>{label}</span><span>{value}</span></div><i><b style={{ width: value }} /></i></div>)}</div><div><h3>TOOLS & SOFTWARE</h3><div className="tools">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div></div></section>
    <section id="contact" className="contact section-pad"><SectionLabel number="04">MAKE SOMETHING</SectionLabel><div className="contact-grid"><div className="contact-copy"><Reveal><h2>LET&apos;S CREATE<br /><em>SOMETHING VIRAL.</em></h2></Reveal><p>Have a film in mind, a brand to build or a story that refuses to sit still? Tell us everything.</p><div className="contact-details"><span>GET IN TOUCH</span><a href="mailto:hello@vividframe.studio">hello@vividframe.studio</a><a href="tel:+919876543210">+91 98765 43210</a></div><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Instagram size={16} /></a><a href="https://youtube.com" aria-label="YouTube"><Youtube size={16} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={16} /></a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>YOUR NAME<input required name="name" placeholder="Your full name" /></label><label>EMAIL<input required type="email" name="email" placeholder="you@company.com" /></label><label>COMPANY / BRAND<input name="company" placeholder="Your company or brand name" /></label><label>SERVICE / SERVICES<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Video Editing</option><option>Commercial Ads</option><option>Motion Graphics</option><option>AI Video Production</option></select></label><label>PROJECT BRIEF<textarea required name="brief" rows={4} placeholder="Tell us about your project, goals, timeline..." /></label><button className="submit-button" type="submit">{sent ? <><Check size={17} /> BRIEF RECEIVED</> : <>SEND PROJECT BRIEF <ArrowUpRight size={17} /></>}</button></form></div></section>
    <section id="copyright" className="copyright section-pad"><SectionLabel number="05">THE SMALL PRINT</SectionLabel><div className="copyright-content"><Sparkles size={25} /><h2>YOUR STORY.<br /><em>YOUR RIGHTS.</em></h2><p>Every frame we make together belongs to the story it serves. All work remains the property of its respective clients unless otherwise agreed in writing.</p></div></section>
    <footer className="footer"><div className="brand"><span>VIVID</span><i>frame</i></div><div className="footer-links">{['WORK', 'SERVICES', 'ABOUT', 'COPYRIGHT', 'CONTACT'].map((link) => <a href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}</div><div className="footer-bottom"><span>© 2024 VIVID FRAME STUDIO</span><span>BUILT FOR THE MOVING IMAGE</span><div><a href="https://instagram.com">Instagram</a><a href="https://youtube.com">YouTube</a><a href="https://linkedin.com">LinkedIn</a></div></div></footer>
  </main>;
}
