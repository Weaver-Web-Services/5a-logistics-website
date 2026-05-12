/*
  5A Logistics Neo-Brutalist Industrial Logistics page file.
  Design reminder: dark graphite surfaces, hard-edged freight lanes, DOT-style compliance plates, Safety Orange CTA discipline, condensed display typography, and real stock truck imagery only. Every choice should reinforce old-school Georgia reliability with new-school execution.
*/
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Facebook,
  FileText,
  Gauge,
  Linkedin,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  Warehouse,
  X,
} from "lucide-react";

const ASSETS = {
  hero: "https://images.unsplash.com/photo-1736134869393-bb43683d5d28?auto=format&fit=crop&w=2400&q=80",
  highway: "https://images.unsplash.com/photo-1720127601642-7c3a7ba88f5f?auto=format&fit=crop&w=1800&q=80",
  warehouse: "https://images.pexels.com/photos/18468444/pexels-photo-18468444.jpeg?auto=compress&cs=tinysrgb&w=1800",
  dock: "https://images.pexels.com/photos/5876475/pexels-photo-5876475.jpeg?auto=compress&cs=tinysrgb&w=1800",
  trailer: "https://images.unsplash.com/photo-1717117915754-02f161b861e4?auto=format&fit=crop&w=1800&q=80",
  map: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/TgMMkdRNEc5uQAyfNqCxQC/5a-orange-route-map-Djo4F863H2JgPYaeuCq7RX.webp",
  steel: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/TgMMkdRNEc5uQAyfNqCxQC/5a-steel-panel-texture-LEHVH7SabsMSWVsViBBnuo.webp",
  dispatch: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/TgMMkdRNEc5uQAyfNqCxQC/5a-dispatch-dashboard-abstract-SCPDbhGaZVVm9BvTm6ZL58.webp",
};

const EMAIL_DESTINATION = "https://formsubmit.co/artemusturner1710.at@gmail.com";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Quote", href: "#quote" },
  { label: "Lanes", href: "#coverage" },
  { label: "Drivers", href: "#drivers" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Truck,
    title: "Dry Van FTL",
    text: "Reliable full truckload capacity for long-haul OTR freight requiring disciplined pickup and delivery windows.",
  },
  {
    icon: Warehouse,
    title: "LTL & Regional",
    text: "Less-than-truckload support and regional distribution across Georgia and nearby freight markets.",
  },
  {
    icon: MapPin,
    title: "Local Atlanta Delivery",
    text: "Metro Atlanta and surrounding county delivery for shippers who need responsive local execution.",
  },
  {
    icon: Gauge,
    title: "Long-Haul OTR",
    text: "Southeast to Midwest lanes managed with owner-level accountability and direct communication.",
  },
  {
    icon: CalendarDays,
    title: "Dedicated Lanes",
    text: "Consistent scheduled capacity for high-volume shippers with recurring corridor needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Power Only",
    text: "Flexible power solutions for shippers and brokers with their own dry van trailers ready to move.",
  },
];

const gallery = [
  { src: ASSETS.hero, title: "Night highway readiness", caption: "Late-model dry van equipment — GPS tracked" },
  { src: ASSETS.highway, title: "Interstate dry van routes", caption: "Late-model dry van equipment — GPS tracked" },
  { src: ASSETS.warehouse, title: "Warehouse coordination", caption: "Late-model dry van equipment — GPS tracked" },
  { src: ASSETS.dock, title: "Dock-to-lane execution", caption: "Late-model dry van equipment — GPS tracked" },
  { src: ASSETS.trailer, title: "Loading dock capacity", caption: "Late-model dry van equipment — GPS tracked" },
];

function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-label">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function CTAButton({ href, children, variant = "solid" }: { href: string; children: React.ReactNode; variant?: "solid" | "outline" }) {
  return (
    <a className={`cta-button ${variant === "outline" ? "cta-outline" : ""}`} href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={20} />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" aria-label="Site header">
      <a href="#top" className="brand-lockup" aria-label="5A Logistics home">
        <span className="brand-mark">5A</span>
        <span>
          <strong>5A Logistics</strong>
          <small>Douglasville, GA</small>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <a className="header-phone" href="tel:+14048577105"><Phone size={17} /> (404) 857-7105</a>
      <button className="mobile-menu-button" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={26} />
      </button>
      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu"><X size={26} /></button>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <CTAButton href="#quote">Request a Freight Quote</CTAButton>
        </div>
      )}
    </header>
  );
}

function TrustBar() {
  const items = [
    { icon: BadgeCheck, label: "USDOT #1040459", detail: "FMCSA Active" },
    { icon: ShieldCheck, label: "$1M Insured", detail: "Great West Casualty" },
    { icon: CalendarDays, label: "In Business Since 2002", detail: "23+ years in operation" },
    { icon: MapPin, label: "Douglasville, GA", detail: "Atlanta Metro" },
  ];

  return (
    <section className="trust-bar" aria-label="5A Logistics trust credentials">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article className="trust-item" key={item.label}>
            <Icon aria-hidden="true" />
            <div>
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </div>
          </article>
        );
      })}
    </section>
  );
}

function QuoteForm() {
  const [step, setStep] = useState(1);
  const progress = useMemo(() => `${Math.round((step / 3) * 100)}%`, [step]);

  return (
    <section className="quote-section" id="quote">
      <div className="quote-shell">
        <div className="quote-copy">
          <SectionLabel eyebrow="Freight Quote" title="Send the lane. We’ll take it from there." />
          <p>
            Submit the basics and 5A Logistics will review your origin, destination, freight requirements, and preferred pickup date. This static form uses FormSubmit for zero-backend delivery to ownership.
          </p>
          <div className="dispatch-panel" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.94), rgba(10,10,10,.68)), url(${ASSETS.dispatch})` }}>
            <strong>Mobile dispatch workflow</strong>
            <span>Step {step} / 3</span>
            <div className="progress-track"><i style={{ width: progress }} /></div>
          </div>
        </div>

        <form className="industrial-form quote-form" action={EMAIL_DESTINATION} method="POST">
          <input type="hidden" name="_subject" value="New Freight Quote Request — 5A Logistics Website" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_autoresponse" value="Thank you for requesting a freight quote from 5A Logistics LLC. We received your lane details and will review them as soon as possible." />
          <div className="form-progress" aria-label={`Quote request step ${step} of 3`}>
            {[1, 2, 3].map((item) => (
              <button key={item} type="button" className={step === item ? "active" : ""} onClick={() => setStep(item)}>Step {item}</button>
            ))}
          </div>

          {step === 1 && (
            <fieldset>
              <legend>Lane basics</legend>
              <label>Origin ZIP<input required name="Origin ZIP" inputMode="numeric" placeholder="30301" /></label>
              <label>Destination ZIP<input required name="Destination ZIP" inputMode="numeric" placeholder="60601" /></label>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset>
              <legend>Load details</legend>
              <label>Commodity type<input required name="Commodity Type" placeholder="Palletized freight, retail goods, packaged materials" /></label>
              <label>Estimated weight<input required name="Estimated Weight" placeholder="18,000 lbs" /></label>
              <label>Pickup date<input required name="Pickup Date" type="date" /></label>
              <label>Equipment needed<select required name="Equipment Needed" defaultValue=""><option value="" disabled>Select equipment</option><option>Dry Van</option><option>Box Truck</option><option>Cargo Van</option><option>Power Only</option></select></label>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset>
              <legend>Contact details</legend>
              <label>Company name<input required name="Company Name" placeholder="Your company" /></label>
              <label>Contact name<input required name="Contact Name" placeholder="First and last name" /></label>
              <label>Phone<input required name="Phone" type="tel" placeholder="(404) 000-0000" /></label>
              <label>Email<input required name="Email" type="email" placeholder="dispatch@example.com" /></label>
            </fieldset>
          )}

          <div className="form-actions">
            {step > 1 && <button type="button" className="secondary-action" onClick={() => setStep((s) => s - 1)}>Back</button>}
            {step < 3 ? (
              <button type="button" className="primary-action" onClick={() => setStep((s) => s + 1)}>Continue</button>
            ) : (
              <button type="submit" className="primary-action sticky-mobile-submit">Get My Quote</button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function DriverForm() {
  return (
    <form className="industrial-form compact-form" action={EMAIL_DESTINATION} method="POST">
      <input type="hidden" name="_subject" value="New Driver Application — 5A Logistics Website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <label>Full name<input required name="Driver Full Name" placeholder="Your name" /></label>
      <label>CDL class<input required name="CDL Class" placeholder="Class A" /></label>
      <label>Years of experience<input required name="Years of Experience" placeholder="5 years" /></label>
      <label>Phone<input required name="Driver Phone" type="tel" placeholder="(404) 000-0000" /></label>
      <label>Email<input required name="Driver Email" type="email" placeholder="driver@example.com" /></label>
      <button className="primary-action" type="submit">Submit Driver Application</button>
    </form>
  );
}

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <Header />
      <main>
        <section className="hero-section" aria-label="5A Logistics hero">
          <div className="hero-bg" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.94), rgba(0,0,0,.58), rgba(0,0,0,.82)), url(${ASSETS.hero})` }} />
          <div className="hero-content">
            <div className="compliance-strip"><span>USDOT #1040459</span><span>MC #1574527</span><span>Authorized For-Hire</span></div>
            <h1>5A Logistics — Two Decades of Georgia-Grown Reliability</h1>
            <p>On Time. Every Load. Atlanta to Anywhere.</p>
            <div className="hero-actions">
              <CTAButton href="#quote">Request a Freight Quote</CTAButton>
              <CTAButton href="#drivers" variant="outline">Driver Application</CTAButton>
            </div>
            <div className="hero-proof" aria-label="Carrier highlights">
              <strong>23+ Years</strong><span>Dry Van · Box Truck · Cargo Van</span><span>Southeast + Midwest corridors</span>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="services-section" id="services" style={{ backgroundImage: `linear-gradient(rgba(18,18,18,.95), rgba(18,18,18,.95)), url(${ASSETS.steel})` }}>
          <div className="container section-grid-heading">
            <SectionLabel eyebrow="Carrier Services" title="Capacity that moves like a lane plan, not a guessing game." />
            <p>5A Logistics focuses on authorized freight services that fit the company’s real operating profile. No hazmat, reefer, or flatbed claims — just disciplined dry van and regional execution.</p>
          </div>
          <div className="container service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <Icon aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="why-section" id="why">
          <div className="stats-block" aria-label="5A Logistics operating stats">
            {[['23+', 'Years in Operation'], ['$1M', 'Liability Coverage'], ['100%', 'FMCSA Compliant'], ['2', 'Power Units Ready to Roll']].map(([value, label]) => (
              <article key={label}><strong>{value}</strong><span>{label}</span></article>
            ))}
          </div>
          <div className="why-copy">
            <SectionLabel eyebrow="Why Choose 5A" title="Old-school Georgia reliability, new-school execution." />
            <p>
              Family-owned and Atlanta-based since 2002, 5A Logistics has built its reputation on showing up on time, every time. The company runs Southeast and Midwest corridors with the professionalism of a large carrier and the personal accountability of an owner-operator.
            </p>
            <div className="inline-credentials"><CheckCircle2 /> Active authority verified by FMCSA carrier records.</div>
          </div>
        </section>

        <QuoteForm />

        <section className="coverage-section" id="coverage">
          <div className="coverage-copy">
            <SectionLabel eyebrow="Coverage Map" title="Primary Operating Corridors — I-85 · I-75 · I-20" />
            <p>Centered in Douglasville within the Atlanta Metro, 5A Logistics is positioned for regional freight moves through the Southeast and Midwest, with practical access to major interstate corridors.</p>
            <div className="pin-list" aria-label="Primary lane callouts">
              {['Atlanta GA', 'Charlotte NC', 'Nashville TN', 'Memphis TN', 'Chicago IL', 'Dallas TX'].map((city) => <span key={city}><MapPin size={16} />{city}</span>)}
            </div>
          </div>
          <figure className="coverage-map">
            <img src={ASSETS.map} alt="Dark USA map with orange freight corridors emphasizing Atlanta, Southeast, and Midwest lanes" loading="lazy" />
          </figure>
        </section>

        <section className="fleet-section" id="fleet">
          <div className="container">
            <SectionLabel eyebrow="Fleet Gallery" title="Real freight imagery. Placeholder slots for owner-supplied equipment photos." />
            <div className="fleet-gallery" aria-label="Fleet gallery photos">
              {gallery.map((item) => (
                <figure key={item.title}>
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="drivers-section" id="drivers">
          <div className="driver-copy">
            <SectionLabel eyebrow="Driver Recruitment" title="Drive for 5A. Go Home More." />
            <p>For CDL drivers who value direct communication and well-maintained equipment, 5A Logistics offers a practical, ownership-led environment without middlemen.</p>
            <ul>
              <li><CheckCircle2 /> Competitive pay</li>
              <li><CheckCircle2 /> Home time priority</li>
              <li><CheckCircle2 /> Modern, well-maintained equipment</li>
              <li><CheckCircle2 /> Direct communication with ownership — no middlemen</li>
            </ul>
          </div>
          <DriverForm />
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-card">
            <SectionLabel eyebrow="Contact" title="Talk with 5A Logistics." />
            <a className="big-phone" href="tel:+14048577105"><Phone /> (404) 857-7105</a>
            <p><Clock size={18} /> Monday–Friday 7AM–6PM EST</p>
            <form className="industrial-form compact-form" action={EMAIL_DESTINATION} method="POST">
              <input type="hidden" name="_subject" value="New General Contact — 5A Logistics Website" />
              <input type="hidden" name="_captcha" value="false" />
              <label>Name<input required name="Contact Name" placeholder="Your name" /></label>
              <label>Phone<input required name="Contact Phone" type="tel" placeholder="(404) 000-0000" /></label>
              <label>Message<textarea required name="Message" placeholder="Tell us what you need moved or ask a question." /></label>
              <button className="primary-action" type="submit">Contact Us</button>
            </form>
          </div>
          <div className="map-embed" title="Google map centered on Douglasville, Georgia 30134">
            <iframe
              src="https://www.google.com/maps?q=Douglasville,%20GA%2030134&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Douglasville GA 30134 map"
            />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>5A Logistics LLC</strong>
          <span>USDOT #1040459 | MC #1574527</span>
          <span>Insured by Great West Casualty Co. — $1,000,000 Liability</span>
        </div>
        <div>
          <a href="tel:+14048577105"><Phone size={17} /> (404) 857-7105</a>
          <a href="https://safer.fmcsa.dot.gov/CompanySnapshot.aspx" target="_blank" rel="noreferrer"><FileText size={17} /> FMCSA SaferSys Carrier Lookup</a>
          <span className="socials"><a href="https://www.facebook.com/" aria-label="Facebook"><Facebook /></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin /></a></span>
        </div>
        <small>© 2026 5A Logistics LLC. All Rights Reserved.</small>
      </footer>
    </div>
  );
}
