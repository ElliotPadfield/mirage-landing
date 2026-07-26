import {
  ArrowDown,
  ArrowRight,
  CheckCircle,
  DeviceMobile,
  GithubLogo,
  MapPin,
  NavigationArrow,
} from "@phosphor-icons/react/ssr";

const BASE_PATH = "/mirage-landing";
const SITE_URL = "https://elliotpadfield.github.io/mirage-landing";
const GITHUB_URL = "https://github.com/ElliotPadfield/mirage";
const DOWNLOAD_URL =
  "https://github.com/ElliotPadfield/mirage/releases/latest";

const steps = [
  {
    title: "Choose a place",
    description: "Search for a destination or click directly on the map.",
    icon: MapPin,
  },
  {
    title: "Connect your iPhone",
    description: "Plug in over USB and select your device in Mirage.",
    icon: DeviceMobile,
  },
  {
    title: "Set location",
    description: "Your iPhone starts using the location you selected.",
    icon: NavigationArrow,
  },
];

const requirements = [
  "macOS 12 or later",
  "Apple silicon Mac",
  "iPhone connected over USB",
  "Developer Mode enabled on iPhone",
];

const faqs = [
  {
    question: "What does Mirage do?",
    answer:
      "Mirage changes the GPS location reported by a connected iPhone. Choose a place on the Mac app's map, connect your iPhone, and start the location simulation.",
  },
  {
    question: "Does changing an iPhone GPS location require a jailbreak?",
    answer:
      "No. Mirage does not jailbreak or modify your iPhone. The iPhone must be unlocked, trusted by the Mac, connected over USB, and have Developer Mode enabled.",
  },
  {
    question: "Which Macs and iPhones work with Mirage?",
    answer:
      "The downloadable Mirage app requires an Apple silicon Mac running macOS 12 or later. It supports the legacy iPhone connection flow and the userspace tunnel used by iOS 17 and later.",
  },
  {
    question: "How do I restore my iPhone's real location?",
    answer:
      "Choose Stop in Mirage. The app clears the simulated GPS location and your iPhone returns to reporting its real location.",
  },
  {
    question: "Do I need an account or subscription?",
    answer:
      "No. Mirage is free to use, requires no account, and its source code is available under the GPL v3 license.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#creator`,
      name: "Elliot Padfield",
      url: "https://elliotpadfield.com",
      sameAs: ["https://github.com/ElliotPadfield"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Mirage",
      description:
        "A free, open-source iPhone GPS location changer for Apple silicon Macs.",
      inLanguage: "en-GB",
      creator: {
        "@id": `${SITE_URL}/#creator`,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "Mirage",
      url: `${SITE_URL}/`,
      description:
        "Change your iPhone's GPS location from your Mac without a jailbreak or account.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS 12 or later",
      downloadUrl: DOWNLOAD_URL,
      softwareRequirements:
        "Apple silicon Mac, iPhone connected over USB, and Developer Mode enabled on the iPhone.",
      isAccessibleForFree: true,
      license: "https://www.gnu.org/licenses/gpl-3.0.en.html",
      image: `${SITE_URL}/product/mirage-malibu.jpg`,
      screenshot: `${SITE_URL}/product/mirage-malibu.jpg`,
      sameAs: [GITHUB_URL],
      author: {
        "@id": `${SITE_URL}/#creator`,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: DOWNLOAD_URL,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <a className="skip-link" href="#content">
          Skip to content
        </a>

        <header className="site-header">
          <a className="brand" href="#top" aria-label="Mirage home">
            <img
              src={`${BASE_PATH}/brand/mirage-icon-128.png`}
              alt=""
              width="48"
              height="48"
            />
            <span>Mirage</span>
          </a>

          <nav aria-label="Primary navigation">
            <a href="#how-it-works">How it works</a>
            <a href="#product">Product</a>
            <a href="#faq">FAQ</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button button-small" href={DOWNLOAD_URL}>
              <ArrowDown aria-hidden="true" weight="bold" />
              Download for Mac
            </a>
          </nav>
        </header>

        <div id="content">
          <section className="hero" id="top">
            <img
              className="hero-wash"
              src={`${BASE_PATH}/product/mirage-malibu.jpg`}
              alt=""
              aria-hidden="true"
              width="1152"
              height="768"
              decoding="async"
            />

            <div className="hero-copy">
              <p className="eyebrow">
                Free iPhone GPS location changer for Mac
              </p>
              <h1>
                <span className="hero-line">Put your iPhone</span>
                <em>anywhere.</em>
              </h1>
              <p className="hero-description">
                Change your iPhone&apos;s GPS location from your Mac. No
                jailbreak. No account.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href={DOWNLOAD_URL}>
                  <ArrowDown aria-hidden="true" weight="bold" />
                  Download for Mac
                </a>
                <a
                  className="text-link"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubLogo aria-hidden="true" weight="fill" />
                  Free and open source
                </a>
              </div>
            </div>

            <div className="hero-product">
              <div className="product-window">
                <img
                  src={`${BASE_PATH}/product/mirage-malibu.jpg`}
                  alt="Mirage showing Malibu selected on the map, ready to change a connected iPhone's GPS location"
                  width="1152"
                  height="768"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </section>

          <section className="steps-section" id="how-it-works">
            <div className="section-heading compact-heading">
              <h2>How it works</h2>
            </div>

            <div className="steps">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article className="step" key={step.title}>
                    <span className="step-number">{index + 1}</span>
                    <Icon
                      className="step-icon"
                      aria-hidden="true"
                      weight="duotone"
                    />
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="product-story" id="product">
            <div className="story-copy">
              <p className="eyebrow">The map is the control</p>
              <h2>Change your iPhone GPS location from the map.</h2>
              <p>
                Search for any place, select it on the map, and send that
                location to your connected iPhone. Saved places keep the
                locations you use most close at hand.
              </p>
              <a className="text-link strong-link" href="#how-it-works">
                See the full flow
                <ArrowRight aria-hidden="true" weight="bold" />
              </a>
            </div>

            <div className="story-visual">
              <img
                src={`${BASE_PATH}/product/mirage-idle.jpg`}
                alt="Mirage for macOS open on the United Kingdom and ready to choose an iPhone GPS location"
                width="1152"
                height="768"
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>

          <section className="detail-strip" aria-label="Mirage controls">
            <div>
              <p className="detail-kicker">Search</p>
              <h3>Find a place by name.</h3>
            </div>
            <div>
              <p className="detail-kicker">Click</p>
              <h3>Drop the pin exactly where you want it.</h3>
            </div>
            <div>
              <p className="detail-kicker">Return</p>
              <h3>Stop the simulation whenever you are done.</h3>
            </div>
          </section>

          <section className="requirements-section">
            <div className="requirements-copy">
              <p className="eyebrow">Ready when your iPhone is</p>
              <h2>No jailbreak. No strange profiles. One USB cable.</h2>
              <p>
                Mirage supports the legacy iPhone connection flow and the
                userspace tunnel used by iOS 17 and later, all inside a focused
                Mac app.
              </p>
            </div>

            <ul className="requirements-list">
              {requirements.map((requirement) => (
                <li key={requirement}>
                  <CheckCircle aria-hidden="true" weight="fill" />
                  {requirement}
                </li>
              ))}
            </ul>
          </section>

          <section className="open-source-section">
            <GithubLogo aria-hidden="true" weight="fill" />
            <div>
              <p className="eyebrow">Open by design</p>
              <h2>Free to use. Open to inspect.</h2>
              <p>
                Mirage is released under GPL v3. Read the code, build it
                yourself, or download the latest signed release.
              </p>
            </div>
            <a
              className="button button-secondary"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
              <ArrowRight aria-hidden="true" weight="bold" />
            </a>
          </section>

          <section className="faq-section" id="faq">
            <div className="faq-heading">
              <p className="eyebrow">Before you connect</p>
              <h2>Questions about changing your iPhone location.</h2>
              <p>
                The practical requirements and limits of using Mirage as an
                iPhone GPS location changer for Mac.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="final-cta">
            <img
              className="final-wash"
              src={`${BASE_PATH}/product/mirage-malibu.jpg`}
              alt=""
              aria-hidden="true"
              width="1152"
              height="768"
              loading="lazy"
              decoding="async"
            />
            <div>
              <img
                className="final-icon"
                src={`${BASE_PATH}/brand/mirage-icon-128.png`}
                alt=""
                width="72"
                height="72"
                loading="lazy"
              />
              <p className="eyebrow">Mirage for macOS</p>
              <h2>Where should your iPhone be?</h2>
              <p>Download Mirage and choose the answer on the map.</p>
              <a className="button button-primary" href={DOWNLOAD_URL}>
                <ArrowDown aria-hidden="true" weight="bold" />
                Download for Mac
              </a>
              <span className="compatibility">
                Free · macOS 12+ · Apple silicon
              </span>
            </div>
          </section>
        </div>

        <footer>
          <a className="footer-brand" href="#top">
            <img
              src={`${BASE_PATH}/brand/mirage-icon-32.png`}
              alt=""
              width="32"
              height="32"
              loading="lazy"
            />
            Mirage
          </a>
          <p>
            Free iPhone GPS location changer for Mac, built by{" "}
            <a
              href="https://elliotpadfield.com"
              target="_blank"
              rel="noreferrer"
            >
              Elliot Padfield
            </a>
            .
          </p>
          <div>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href={`${GITHUB_URL}/issues`}
              target="_blank"
              rel="noreferrer"
            >
              Support
            </a>
            <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">
              GPL v3
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
