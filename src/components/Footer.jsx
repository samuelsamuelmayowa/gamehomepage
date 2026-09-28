import { Newsletter } from './Newsletter'

export function Footer() {
  return (
    <footer className={"w-full bg-brand-purple-deep text-on-primary pt-space-xl pb-space-lg"}>
      <div className={"max-w-7xl mx-auto px-gutter"}>
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl border-b border-primary/20"}>
          <div className={"lg:col-span-2 flex flex-col gap-space-md"}>
            <div className={"flex items-center gap-space-sm"}>
              <div className={"w-10 h-10 rounded-full bg-surface-container-lowest p-1 shadow-sm flex items-center justify-center"}>
                <span className={"material-symbols-outlined text-primary text-headline-sm"} aria-hidden={"true"}>
                  {"smart_toy"}
                </span>
              </div>
              <span className={"font-headline-sm text-headline-sm text-on-primary tracking-tight"}>
                {"The Master Kids"}
              </span>
            </div>
            <p className={"font-body-md text-body-md text-brand-purple-light max-w-sm"}>
              {"Unlocking imagination, one smile at a time. Nigeria's premier store for joyful learning, curated STEM kits, building sets, and imaginative play essentials."}
            </p>
            <div className={"flex flex-col gap-space-xs text-brand-purple-light font-body-md text-body-md"}>
              <div className={"flex items-center gap-space-xs"}>
                <span className={"material-symbols-outlined text-tertiary-fixed"} aria-hidden={"true"}>
                  {"schedule"}
                </span>
                <span>
                  {"Mon - Sat: 9:00am - 6:00pm"}
                </span>
              </div>
              <div className={"flex items-center gap-space-xs"}>
                <span className={"material-symbols-outlined text-tertiary-fixed"} aria-hidden={"true"}>
                  {"schedule"}
                </span>
                <span>
                  {"Sun: 1:00pm - 5:00pm"}
                </span>
              </div>
            </div>
            <div className={"flex items-center gap-space-md pt-space-xs"}>
              <a href={"https://www.instagram.com/themasterkidsng/"} className={"w-10 h-10 rounded-full bg-primary/40 hover:bg-secondary-container text-on-primary flex items-center justify-center transition-colors shadow-sm"} aria-label={"The Master Kids on Instagram"}>
                <span className={"material-symbols-outlined"} aria-hidden={"true"}>
                  {"photo_camera"}
                </span>
              </a>
              <a href={"https://wa.me/2349134549603"} className={"w-10 h-10 rounded-full bg-primary/40 hover:bg-secondary-container text-on-primary flex items-center justify-center transition-colors shadow-sm"} aria-label={"Contact The Master Kids on WhatsApp"}>
                <span className={"material-symbols-outlined"} aria-hidden={"true"}>
                  {"thumb_up"}
                </span>
              </a>
              <a href={"https://wa.me/2349134549603"} className={"w-10 h-10 rounded-full bg-primary/40 hover:bg-secondary-container text-on-primary flex items-center justify-center transition-colors shadow-sm"} aria-label={"Contact The Master Kids on WhatsApp"}>
                <span className={"material-symbols-outlined"} aria-hidden={"true"}>
                  {"chat"}
                </span>
              </a>
            </div>
          </div>
          <div className={"flex flex-col gap-space-sm"}>
            <h4 className={"font-title-lg text-title-lg text-tertiary-fixed mb-space-xs"}>
              {"Customer Care"}
            </h4>
            <ul className={"flex flex-col gap-space-xs font-body-md text-body-md text-brand-purple-light"}>
              <li className={"hover:text-on-primary transition-colors"}>
                <a data-path={"shipping-and-returns"} href={"mailto:contact@themasterkids.com"}>
                  {"Shipping & Returns"}
                </a>
              </li>
              <li className={"hover:text-on-primary transition-colors"}>
                <a data-path={"terms-and-conditions"} href={"mailto:contact@themasterkids.com"}>
                  {"Terms & Conditions"}
                </a>
              </li>
              <li className={"hover:text-on-primary transition-colors"}>
                <a data-path={"store-locator"} href={"#visit-store"}>
                  {"Store Locator"}
                </a>
              </li>
              <li className={"hover:text-on-primary transition-colors"}>
                <a data-path={"contact-us"} href={"mailto:contact@themasterkids.com"}>
                  {"Contact Us"}
                </a>
              </li>
              <li className={"hover:text-on-primary transition-colors"}>
                <a data-path={"track-order"} href={"mailto:contact@themasterkids.com"}>
                  {"Track My Order"}
                </a>
              </li>
            </ul>
          </div>
          <div className={"flex flex-col gap-space-sm"}>
            <h4 className={"font-title-lg text-title-lg text-tertiary-fixed mb-space-xs"}>
              {"Shop By Age"}
            </h4>
            <ul className={"flex flex-col gap-space-xs font-body-md text-body-md text-brand-purple-light"}>
              <li className={"hover:text-on-primary transition-colors"}>
                <a data-path={"baby-and-toddler"} href={"#new-arrivals"}>
                  {"Baby & Toddler (0 - 24M)"}
                </a>
              </li>
              <li className={"hover:text-on-primary transition-colors"}>
                <a data-path={"preschool-explorers"} href={"#hot-deals"}>
                  {"Preschool Explorers (3 - 5 Yrs)"}
                </a>
              </li>
              <li className={"hover:text-on-primary transition-colors"}>
                <a data-path={"early-learners"} href={"#new-arrivals"}>
                  {"Early Learners (6 - 8 Yrs)"}
                </a>
              </li>
              <li className={"hover:text-on-primary transition-colors"}>
                <a data-path={"tweens-and-teens"} href={"#new-arrivals"}>
                  {"Tweens & STEM (9+ Yrs)"}
                </a>
              </li>
              <li className={"hover:text-on-primary transition-colors"}>
                <a data-path={"gift-finder"} href={"#shop-by-age"}>
                  {"Gift Finder Quiz"}
                </a>
              </li>
            </ul>
          </div>
          <div className={"flex flex-col gap-space-sm"}>
            <h4 className={"font-title-lg text-title-lg text-tertiary-fixed mb-space-xs"}>
              {"Toy Club & Offers"}
            </h4>
            <p className={"font-body-md text-body-md text-brand-purple-light"}>
              {"Sign up for secret toy deals, birthday vouchers, and early access sales!"}
            </p>
            <Newsletter>

            </Newsletter>
          </div>
        </div>
        <div className={"pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-brand-purple-light"}>
          <p>
            {"© 2026 The Master Kids. All rights reserved. Registered toy retailer in Lagos, Nigeria."}
          </p>
          <div className={"flex items-center gap-space-md"}>
            <span className={"flex items-center gap-space-xs"}>
              <span className={"material-symbols-outlined text-success-mint"} aria-hidden={"true"}>
                {"verified_user"}
              </span>
              {"100% Safe Checkout"}
            </span>
            <span className={"opacity-40"}>
              {"•"}
            </span>
            <span>
              {"Secure Delivery Nationwide"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
