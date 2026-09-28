import { Reveal } from './Reveal'

export function TrustStrip() {
  return (
    <Reveal className={"bg-surface-container-high py-space-sm"}>
      <div className={"max-w-7xl mx-auto px-gutter flex flex-wrap items-center justify-between gap-space-md font-label-md text-label-md text-brand-purple-deep"}>
        <div className={"flex items-center gap-space-xs"}>
          <span className={"material-symbols-outlined text-primary text-title-md"} aria-hidden={"true"}>
            {"verified"}
          </span>
          <span>
            {"100% Authentic Brands (LEGO, Barbie, VTech)"}
          </span>
        </div>
        <div className={"flex items-center gap-space-xs"}>
          <span className={"material-symbols-outlined text-secondary-container text-title-md"} aria-hidden={"true"}>
            {"local_shipping"}
          </span>
          <span>
            {"Fast Delivery Across Lagos & Nationwide Nigeria"}
          </span>
        </div>
        <div className={"flex items-center gap-space-xs"}>
          <span className={"material-symbols-outlined text-success-mint text-title-md"} aria-hidden={"true"}>
            {"psychology"}
          </span>
          <span>
            {"Age-Tailored Developmental Learning"}
          </span>
        </div>
        <div className={"flex items-center gap-space-xs"}>
          <span className={"material-symbols-outlined text-primary text-title-md"} aria-hidden={"true"}>
            {"shield"}
          </span>
          <span>
            {"Verified Safe & Non-Toxic Certified"}
          </span>
        </div>
      </div>
    </Reveal>
  )
}

export function Hero() {
  return (
    <Reveal className={"relative overflow-hidden py-space-xl lg:py-24 bg-linear-to-br from-brand-purple-surface via-canvas-cream to-brand-yellow-soft/30"}>
      <div className={"max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10"}>
        <div className={"lg:col-span-7 flex flex-col gap-space-md"}>
          <div className={"inline-flex items-center gap-space-xs bg-brand-orange-light text-on-secondary-container px-space-md py-space-xs rounded-full w-max shadow-sm"}>
            <span className={"material-symbols-outlined text-secondary-container text-title-md"} aria-hidden={"true"}>
              {"rocket_launch"}
            </span>
            <span className={"font-label-md text-label-md uppercase tracking-wider"}>
              {"Empowering Nigerian Kids to Build & Lead"}
            </span>
          </div>
          <h1 className={"font-display-lg text-display-lg text-on-surface tracking-tight"}>
            {"Prepare Young Minds For The"}
            <span className={"text-primary underline decoration-secondary-container decoration-wavy decoration-2"}>
              {"Future"}
            </span>
          </h1>
          <p className={"font-body-lg text-body-lg text-on-surface-variant max-w-xl"}>
            {"Discover STEM kits, coding toys, LEGO sets, robotics, and educational games carefully curated to inspire curiosity, critical thinking, and lifelong creativity."}
          </p>
          <div className={"flex flex-wrap items-center gap-space-md pt-space-sm"}>
            <a href={"#new-arrivals"} className={"bg-secondary-container hover:bg-secondary text-on-primary font-headline-sm text-title-md px-space-xl py-space-md rounded-full shadow-[0_4px_0_#EA580C] hover:translate-y-0.5 transition-all flex items-center gap-space-xs"}>
              <span>
                {"Explore New Arrivals"}
              </span>
              <span className={"material-symbols-outlined text-title-lg"} aria-hidden={"true"}>
                {"arrow_forward"}
              </span>
            </a>
            <a href={"#shop-by-age"} className={"bg-surface-container-lowest hover:bg-surface-container text-primary font-title-lg text-title-md px-space-lg py-space-md rounded-full shadow-md transition-all flex items-center gap-space-xs"}>
              <span className={"material-symbols-outlined text-title-md"} aria-hidden={"true"}>
                {"toys"}
              </span>
              <span>
                {"Shop by Age"}
              </span>
            </a>
          </div>
          <div className={"flex items-center gap-space-lg pt-space-md border-primary/10"}>
            <div className={"flex flex-col"}>
              <span className={"font-display-lg text-headline-lg text-primary font-extrabold leading-none"}>
                {"10,000+"}
              </span>
              <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                {"Smiles Delivered"}
              </span>
            </div>
            <div className={"w-px h-10 bg-outline-variant"}>

            </div>
            <div className={"flex flex-col"}>
              <span className={"font-display-lg text-headline-lg text-secondary-container font-extrabold leading-none"}>
                {"1,200+"}
              </span>
              <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                {"Curated Toys"}
              </span>
            </div>
            <div className={"w-px h-10 bg-outline-variant"}>

            </div>
            <div className={"flex flex-col"}>
              <span className={"font-display-lg text-headline-lg text-tertiary-container font-extrabold leading-none"}>
                {"4.9 ★"}
              </span>
              <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                {"Parent Rating"}
              </span>
            </div>
          </div>
        </div>
        <div className={"lg:col-span-5 relative"}>
          <div className={"relative bg-surface-container-lowest p-space-md rounded-xl shadow-xl overflow-hidden group"}>
            <div className={"relative w-full h-[400px] rounded-lg overflow-hidden bg-brand-purple-light"}>
              <img src={"https://lh3.googleusercontent.com/aida-public/AB6AXuCIAel0qyrGcGqXtwJy6YSSZktolWHQOv8uHp7f6RN-LY_x92PGdyzyq59mL15QRiHqwGG62CAqwKOHmIe8N1OO5_wzKhrt_FhEc0Fo7miwugtrUHyMEdYHvuhu5VZ8fMCWVVF7E_KisVikikqOyNoAqXqZ5vlBRGymjDx3esDLEjdrQKpgLKZhFcVlQchiVKUpYWG73hVhpLobFeMr6CMnt0ITUYGNszgoy3SxVwMoyenQit82bcmNxA"} className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} alt={"Joyful young Nigerian school boy and girl enthusiastically assembling a colorful robotic STEM project with LEGO components and circuit blocks on a clean wooden table with warm sunlight pouring in"} loading={"eager"} decoding={"async"} />
              <div className={"absolute inset-0 bg-linear-to-t from-brand-purple-deep/70 via-transparent to-transparent flex flex-col justify-end p-space-md text-on-primary"}>
                <span className={"bg-secondary-container text-on-primary text-label-sm font-label-sm uppercase px-space-sm py-space-xs rounded-full w-max mb-space-xs"}>
                  {"Hands-On STEM Hub"}
                </span>
                <p className={"font-headline-sm text-headline-sm text-on-primary"}>
                  {"Building Tomorrows Engineers"}
                </p>
                <p className={"font-body-md text-body-md text-brand-purple-light"}>
                  {"From first gears to Python robotics sets"}
                </p>
              </div>
            </div>
            <div className={"absolute -bottom-3 -right-3 bg-brand-yellow-soft p-space-md rounded-xl shadow-lg flex items-center gap-space-sm max-w-xs"}>
              <div className={"w-10 h-10 rounded-full bg-secondary-container text-on-primary flex items-center justify-center shrink-0"}>
                <span className={"material-symbols-outlined text-headline-sm"} aria-hidden={"true"}>
                  {"military_tech"}
                </span>
              </div>
              <div>
                <p className={"font-title-md text-title-md text-on-surface leading-tight"}>
                  {"Accredited STEM"}
                </p>
                <p className={"font-label-sm text-label-sm text-on-surface-variant"}>
                  {"Recommended by Lagos teachers"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export function BrandStrip() {
  return (
    <Reveal id={"brands"} className={"py-space-md bg-surface-container-lowest shadow-sm"}>
      <div className={"max-w-7xl mx-auto px-gutter"}>
        <div className={"flex items-center justify-between mb-space-xs"}>
          <span className={"font-label-sm text-label-sm uppercase tracking-wider text-outline"}>
            {"Featured Global Toy Brands"}
          </span>
          <span className={"font-label-sm text-label-sm text-primary hover:underline cursor-pointer"}>
            {"Explore All 25+ Brands →"}
          </span>
        </div>
        <div className={"flex items-center justify-between gap-space-lg overflow-x-auto py-space-xs opacity-80 hover:opacity-100 transition-opacity"}>
          <span className={"font-headline-md text-headline-md tracking-tighter text-on-surface hover:text-primary transition-colors cursor-pointer"}>
            {"LEGO®"}
          </span>
          <span className={"font-headline-md text-headline-md tracking-tighter text-on-surface hover:text-primary transition-colors cursor-pointer"}>
            {"VTech"}
          </span>
          <span className={"font-headline-md text-headline-md tracking-tighter text-on-surface hover:text-primary transition-colors cursor-pointer"}>
            {"Barbie"}
          </span>
          <span className={"font-headline-md text-headline-md tracking-tighter text-on-surface hover:text-primary transition-colors cursor-pointer"}>
            {"Baby Alive"}
          </span>
          <span className={"font-headline-md text-headline-md tracking-tighter text-on-surface hover:text-primary transition-colors cursor-pointer"}>
            {"Hot Wheels"}
          </span>
          <span className={"font-headline-md text-headline-md tracking-tighter text-on-surface hover:text-primary transition-colors cursor-pointer"}>
            {"Ravensburger"}
          </span>
          <span className={"font-headline-md text-headline-md tracking-tighter text-on-surface hover:text-primary transition-colors cursor-pointer"}>
            {"LeapFrog"}
          </span>
          <span className={"font-headline-md text-headline-md tracking-tighter text-on-surface hover:text-primary transition-colors cursor-pointer"}>
            {"Smiggle"}
          </span>
          <span className={"font-headline-md text-headline-md tracking-tighter text-on-surface hover:text-primary transition-colors cursor-pointer"}>
            {"Fisher-Price"}
          </span>
        </div>
      </div>
    </Reveal>
  )
}

export function PromoBanner() {
  return (
    <Reveal className={"max-w-7xl mx-auto px-gutter pt-space-lg"}>
      <div className={"w-full rounded-xl overflow-hidden shadow-md bg-brand-purple-deep"}>
        <img alt={"The Master Kids Store Promotional Banner"} src={"https://lh3.googleusercontent.com/aida/AEtjO1XaAmC5vROvVfvpLKk-ntw6EeX0WWfUTzGMvEeMhVOz3zXX8UT0vmi7ToSR2y3oAq1XMkly3-qe8JxDRGHnY2_DkBVY7AEO8sN1p-pGtUsbFdorWZXtIIfhG9GXLaKwpRhUAJKLcbKKj2IBVMMSK2VOeOB79xQXpzganeGVSoptF7kdfhrrzQWqaSfnjgeRuqXqePtkxXCeDy6EkZRDogKTEjdp7Yc2mCiEuermRBi_jQf5NhYtm7C7pvg"} className={"w-full h-auto object-cover max-h-36"} loading={"lazy"} decoding={"async"} />
      </div>
    </Reveal>
  )
}

export function ShopByAge() {
  return (
    <Reveal id={"shop-by-age"} className={"py-space-xl"}>
      <div className={"max-w-7xl mx-auto px-gutter"}>
        <div className={"text-center max-w-2xl mx-auto mb-space-lg"}>
          <span className={"font-label-md text-label-md uppercase tracking-widest text-secondary-container"}>
            {"Find the Perfect Toy"}
          </span>
          <h2 className={"font-headline-lg text-headline-lg text-on-surface mt-space-xs"}>
            {"Shop by Age Milestone"}
          </h2>
          <p className={"font-body-md text-body-md text-on-surface-variant mt-space-xs"}>
            {"Carefully structured developmental toys tailored specifically to your child’s cognitive, sensory, and motor milestones."}
          </p>
        </div>
        <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-md"}>
          <a href={"#shop-by-age"} className={"group relative bg-brand-purple-light hover:bg-brand-purple-surface p-space-md rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col items-center text-center"}>
            <div className={"w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center text-3xl shadow-sm mb-space-sm group-hover:scale-110 transition-transform"}>
              {"🍼"}
            </div>
            <span className={"font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary"}>
              {"0 – 2 Years"}
            </span>
            <h3 className={"font-title-lg text-title-lg text-on-surface mt-space-xs"}>
              {"Newborn & Infant"}
            </h3>
            <p className={"font-body-md text-label-sm text-on-surface-variant mt-space-xs"}>
              {"Sensory, teethers, soft plush & motor rattles"}
            </p>
            <div className={"mt-space-md inline-flex items-center gap-space-xs text-primary font-label-md text-label-md group-hover:text-secondary-container"}>
              <span>
                {"Explore Stage"}
              </span>
              <span className={"material-symbols-outlined text-title-md"} aria-hidden={"true"}>
                {"arrow_forward"}
              </span>
            </div>
          </a>
          <a href={"#shop-by-age"} className={"group relative bg-brand-yellow-soft hover:bg-tertiary-fixed p-space-md rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col items-center text-center"}>
            <div className={"w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center text-3xl shadow-sm mb-space-sm group-hover:scale-110 transition-transform"}>
              {"🧸"}
            </div>
            <span className={"font-label-sm text-label-sm font-bold uppercase tracking-wider text-tertiary"}>
              {"2 – 4 Years"}
            </span>
            <h3 className={"font-title-lg text-title-lg text-on-surface mt-space-xs"}>
              {"Toddler Explorers"}
            </h3>
            <p className={"font-body-md text-label-sm text-on-surface-variant mt-space-xs"}>
              {"First words, chunky Duplo, sounds & sorting"}
            </p>
            <div className={"mt-space-md inline-flex items-center gap-space-xs text-tertiary font-label-md text-label-md group-hover:text-secondary-container"}>
              <span>
                {"Explore Stage"}
              </span>
              <span className={"material-symbols-outlined text-title-md"} aria-hidden={"true"}>
                {"arrow_forward"}
              </span>
            </div>
          </a>
          <a href={"#shop-by-age"} className={"group relative bg-brand-orange-light hover:bg-secondary-fixed p-space-md rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col items-center text-center"}>
            <div className={"w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center text-3xl shadow-sm mb-space-sm group-hover:scale-110 transition-transform"}>
              {"🎨"}
            </div>
            <span className={"font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary"}>
              {"5 – 8 Years"}
            </span>
            <h3 className={"font-title-lg text-title-lg text-on-surface mt-space-xs"}>
              {"Little Creators"}
            </h3>
            <p className={"font-body-md text-label-sm text-on-surface-variant mt-space-xs"}>
              {"Creative play, beginner LEGO, crafts & dolls"}
            </p>
            <div className={"mt-space-md inline-flex items-center gap-space-xs text-secondary font-label-md text-label-md group-hover:text-primary"}>
              <span>
                {"Explore Stage"}
              </span>
              <span className={"material-symbols-outlined text-title-md"} aria-hidden={"true"}>
                {"arrow_forward"}
              </span>
            </div>
          </a>
          <a href={"#shop-by-age"} className={"group relative bg-surface-container-high hover:bg-surface-container-highest p-space-md rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col items-center text-center"}>
            <div className={"w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center text-3xl shadow-sm mb-space-sm group-hover:scale-110 transition-transform"}>
              {"🚀"}
            </div>
            <span className={"font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary"}>
              {"9 – 12 Years"}
            </span>
            <h3 className={"font-title-lg text-title-lg text-on-surface mt-space-xs"}>
              {"Big Kids STEM"}
            </h3>
            <p className={"font-body-md text-label-sm text-on-surface-variant mt-space-xs"}>
              {"Robotics, coding sets, board games & strategy"}
            </p>
            <div className={"mt-space-md inline-flex items-center gap-space-xs text-primary font-label-md text-label-md group-hover:text-secondary-container"}>
              <span>
                {"Explore Stage"}
              </span>
              <span className={"material-symbols-outlined text-title-md"} aria-hidden={"true"}>
                {"arrow_forward"}
              </span>
            </div>
          </a>
          <a href={"#shop-by-age"} className={"group relative bg-brand-purple-surface hover:bg-surface-container p-space-md rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col items-center text-center col-span-2 md:col-span-1"}>
            <div className={"w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center text-3xl shadow-sm mb-space-sm group-hover:scale-110 transition-transform"}>
              {"🎮"}
            </div>
            <span className={"font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface-variant"}>
              {"13+ Years"}
            </span>
            <h3 className={"font-title-lg text-title-lg text-on-surface mt-space-xs"}>
              {"Teens & Builders"}
            </h3>
            <p className={"font-body-md text-label-sm text-on-surface-variant mt-space-xs"}>
              {"LEGO Technic, architecture, precision hobbies"}
            </p>
            <div className={"mt-space-md inline-flex items-center gap-space-xs text-primary font-label-md text-label-md group-hover:text-secondary-container"}>
              <span>
                {"Explore Stage"}
              </span>
              <span className={"material-symbols-outlined text-title-md"} aria-hidden={"true"}>
                {"arrow_forward"}
              </span>
            </div>
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export function ShopByCategory() {
  return (
    <Reveal id={"categories"} className={"py-space-lg bg-surface-container-low"}>
      <div className={"max-w-7xl mx-auto px-gutter"}>
        <div className={"flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm"}>
          <div>
            <span className={"font-label-md text-label-md uppercase tracking-widest text-primary"}>
              {"Browse by Category"}
            </span>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface mt-space-xs"}>
              {"Favourite Toy Universes"}
            </h2>
          </div>
          <p className={"font-body-md text-body-md text-on-surface-variant max-w-md"}>
            {"Explore our most cherished collections, lovingly curated with non-toxic, original toys for every passion."}
          </p>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md"}>
          <a href={"#new-arrivals"} className={"group relative h-80 rounded-xl overflow-hidden shadow-md flex flex-col justify-end p-space-md bg-canvas-neutral"}>
            <div data-alt={"Dynamic photo of realistic Monster truck and remote control buggy cars racing over an exciting indoor obstacle track for children with vibrant energetic lighting"} style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBy4vpAIUBBh55FpLy4taSlI81nisZ0UyLP6pdyFmbhN48LPs3JDXfsENzL5uWPRfbG7JWHEv1vkqW_xf3yVkTWGg79UCLHv6BgdCxC9R67h3l5HywK0gXccMpoLSHjfKzROiwcvjUSOiMFtNg-8aQ-DuV3VTSND0aXkX02xujDEKs3toEBASWIDz60YcdelIJz2Svbj2M1OkKnbnL7yzNwvVkddp3wDKVdFmgKZrO7OY9BFe7zbO3BQ')"}} className={"absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"}>

            </div>
            <div className={"absolute inset-0 bg-linear-to-t from-brand-purple-deep/90 via-brand-purple-deep/30 to-transparent"}>

            </div>
            <div className={"relative z-10 flex flex-col"}>
              <span className={"bg-secondary-container text-on-primary text-label-sm font-label-sm px-space-sm py-space-xs rounded-full w-max mb-space-xs uppercase font-bold"}>
                {"Zoom & Vroom"}
              </span>
              <h3 className={"font-headline-sm text-headline-sm text-on-primary"}>
                {"Action Toys & Vehicles"}
              </h3>
              <p className={"font-body-md text-body-md text-brand-purple-light mt-space-xs"}>
                {"Remote Control, Hot Wheels, Dinos"}
              </p>
              <span className={"mt-space-sm text-tertiary-fixed font-title-md text-body-md flex items-center gap-space-xs group-hover:translate-x-1 transition-transform"}>
                {"Shop Vehicles →"}
              </span>
            </div>
          </a>
          <a href={"#new-arrivals"} className={"group relative h-80 rounded-xl overflow-hidden shadow-md flex flex-col justify-end p-space-md bg-canvas-neutral"}>
            <div data-alt={"Glamorous assortment of modern diverse Barbie dolls and Baby Alive nurture playsets arranged neatly in a pastel dreamhouse setting with soft studio lights"} style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSoRVkS6k6P3CvERRVmIFM4y5Lna_FhJQTfpfzLOHHyiRGEagZjBrUD8v3N9RoJ6ZXcyMWEmlpyi5-8pSGtsZBc5LvgGID5boIlWLyXutkNE4O5HNAzvTU6DHXENUi7sX6FsN6skIw8BY7tO8CeJeIyInOMpyNRKX-l7HQTBI32Kfut5wiWz0hwd5nRtz1eEUlEEq8_aVLj0plgBRUtexpaUcyrTpzNRxFdOEpEO4WeI7cWz1N-16BBQ')"}} className={"absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"}>

            </div>
            <div className={"absolute inset-0 bg-linear-to-t from-brand-purple-deep/90 via-brand-purple-deep/30 to-transparent"}>

            </div>
            <div className={"relative z-10 flex flex-col"}>
              <span className={"bg-primary text-on-primary text-label-sm font-label-sm px-space-sm py-space-xs rounded-full w-max mb-space-xs uppercase font-bold"}>
                {"Imaginative Play"}
              </span>
              <h3 className={"font-headline-sm text-headline-sm text-on-primary"}>
                {"Dolls & Pretend Play"}
              </h3>
              <p className={"font-body-md text-body-md text-brand-purple-light mt-space-xs"}>
                {"Barbie, Baby Alive, Hair Styling"}
              </p>
              <span className={"mt-space-sm text-tertiary-fixed font-title-md text-body-md flex items-center gap-space-xs group-hover:translate-x-1 transition-transform"}>
                {"Shop Dolls →"}
              </span>
            </div>
          </a>
          <a href={"#new-arrivals"} className={"group relative h-80 rounded-xl overflow-hidden shadow-md flex flex-col justify-end p-space-md bg-canvas-neutral"}>
            <div data-alt={"Colourful detailed LEGO construction set with intricate architectural buildings and playful mini-figures captured in bright creative tabletop play setup"} style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_I8hXXIzLKPIsbfSCM2G0LTPubcxbKacfc9wbza-OM_VQR3BrITyDEFTs6ikhyzud5mf0p0whmnDYaaxEWSwZrLAbaFjuOb-Qsi4GPzDnIP_TA4Yix5k61sjYbnlXojufpiGlRb_92D4ogbOvYg7_9fjrQquenOcaNvQgyXZoY0DQb3mnEKmtKECCMbr_YS0Lizz9OfGDALRwM1dLtnCsQQEvEBvp4bIkpEahTyOoQX50171lioNl4Q')"}} className={"absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"}>

            </div>
            <div className={"absolute inset-0 bg-linear-to-t from-brand-purple-deep/90 via-brand-purple-deep/30 to-transparent"}>

            </div>
            <div className={"relative z-10 flex flex-col"}>
              <span className={"bg-secondary-container text-on-primary text-label-sm font-label-sm px-space-sm py-space-xs rounded-full w-max mb-space-xs uppercase font-bold"}>
                {"Build & Discover"}
              </span>
              <h3 className={"font-headline-sm text-headline-sm text-on-primary"}>
                {"LEGO® & Construction"}
              </h3>
              <p className={"font-body-md text-body-md text-brand-purple-light mt-space-xs"}>
                {"Technic, Classic, Marvel & Duplo"}
              </p>
              <span className={"mt-space-sm text-tertiary-fixed font-title-md text-body-md flex items-center gap-space-xs group-hover:translate-x-1 transition-transform"}>
                {"Shop LEGO →"}
              </span>
            </div>
          </a>
          <a href={"#new-arrivals"} className={"group relative h-80 rounded-xl overflow-hidden shadow-md flex flex-col justify-end p-space-md bg-canvas-neutral"}>
            <div data-alt={"Smiling little girl working focused on wooden developmental puzzles and early reading coding blocks with tactile numbers and vibrant geometric shapes"} style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkzfucc54mD4n2kArcgpbVizE7trz2nLuh29E_bBAfvLu44Y4gNvDe8pKUPEcKixDmYTwOr2FNSAVSV_dm27VzJI6odUqQ5rra9zLOsdJw-78DjxvboCTFkBVqunY7lW927Hs46cyTK35n7bf9kD7QCZlQ5lxPE5vPhoZWxgT9HeXTgpClelJOH6yp1m-UqqzlL4cpjNTG7A7jVLZxVU3SwJBgVyJ126bOyeH6359-2nYwnoCQ0aoTvA')"}} className={"absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"}>

            </div>
            <div className={"absolute inset-0 bg-linear-to-t from-brand-purple-deep/90 via-brand-purple-deep/30 to-transparent"}>

            </div>
            <div className={"relative z-10 flex flex-col"}>
              <span className={"bg-success-mint text-on-primary text-label-sm font-label-sm px-space-sm py-space-xs rounded-full w-max mb-space-xs uppercase font-bold"}>
                {"Cognitive Growth"}
              </span>
              <h3 className={"font-headline-sm text-headline-sm text-on-primary"}>
                {"STEM & Early Learning"}
              </h3>
              <p className={"font-body-md text-body-md text-brand-purple-light mt-space-xs"}>
                {"Maths, Science Kits & Puzzles"}
              </p>
              <span className={"mt-space-sm text-tertiary-fixed font-title-md text-body-md flex items-center gap-space-xs group-hover:translate-x-1 transition-transform"}>
                {"Shop STEM →"}
              </span>
            </div>
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export function SchoolBanner() {
  return (
    <Reveal id={"back-to-school"} className={"py-space-xl bg-linear-to-r from-brand-purple-deep via-primary to-brand-purple-vivid text-on-primary"}>
      <div className={"max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"}>
        <div className={"lg:col-span-7 flex flex-col gap-space-md"}>
          <div className={"inline-flex items-center gap-space-xs bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md px-space-md py-space-xs rounded-full w-max font-bold"}>
            <span className={"material-symbols-outlined text-title-md"} aria-hidden={"true"}>
              {"backpack"}
            </span>
            {"Back to School 2026"}
          </div>
          <h2 className={"font-display-lg text-display-lg font-extrabold leading-tight text-on-primary"}>
            {"New Term, New Adventures!"}
          </h2>
          <p className={"font-body-lg text-body-lg text-brand-purple-light max-w-xl"}>
            {"School bags, trolley backpacks, lunch gear, learning aids and brain-boosting toys — everything your kids need to start the new term curious, confident, and ready to thrive."}
          </p>
          <div className={"flex flex-wrap items-center gap-space-md pt-space-xs"}>
            <a href={"#hot-deals"} className={"bg-secondary-container hover:bg-secondary text-on-primary font-title-lg text-title-md px-space-xl py-space-md rounded-full shadow-[0_4px_0_#EA580C] hover:translate-y-0.5 transition-all"}>
              {"Shop Back to School Gear"}
            </a>
            <div className={"flex items-center gap-space-xs text-brand-yellow-soft font-title-md text-body-md"}>
              <span className={"material-symbols-outlined"} aria-hidden={"true"}>
                {"high_res"}
              </span>
              <span>
                {"Bundles up to 35% OFF"}
              </span>
            </div>
          </div>
        </div>
        <div className={"lg:col-span-5 grid grid-cols-2 gap-space-md"}>
          <div className={"bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl flex flex-col items-center text-center shadow-lg"}>
            <img src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDjF6OhuZSQsQK1w4zeRPxCFsED69ayIbJ0uPhPww-wAmBswPlGlph3dI2diSaRdixoUQwjlp2CDSb8Aa2pidObN9drEBw9KKsO4hFYJ8aK_eCpyWkmBsi8SFmjs94zJmljeEAu4w6lS-rfpIuUIqaIqne-khW772OtJNKPswxI_w8cnWIEXXIEv_WZBrX4d6GWqoEGKAhIZf7ESj77kV6g83yEUwd54vKVvzKOnR1Y_3fxmqPLvwmx6Q"} className={"h-36 object-contain mb-space-xs"} alt={"Deluxe pink ergonomic wheeled Barbie school trolley backpack for girls with multi-compartment organizers and heavy-duty wheels"} loading={"lazy"} decoding={"async"} />
            <span className={"font-title-md text-title-md text-on-primary font-bold"}>
              {"Trolley Backpacks"}
            </span>
            <span className={"font-label-sm text-label-sm text-tertiary-fixed"}>
              {"From ₦45,000.00"}
            </span>
          </div>
          <div className={"bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl flex flex-col items-center text-center shadow-lg"}>
            <img src={"https://lh3.googleusercontent.com/aida-public/AB6AXuB_vo6fT8Ft1Rw2Jtj66YibwRiCoQDQ8d20TTs8cZVGIjTdD9K6dfh-RGjoF2kOEiOKeYhv6s7FujWAXzokgz3nkeUsur1DzM2z8XY4s7ekNkmPmH1WlJ3acT2XzfKRVjt1E2pnBHVe8zYQuns6p6WdfZw2Jm43rrg12DPHAns4nC5sKFSNjov91VWMb12nPrkmN2nCzfDqZ7glGNHfemIO7FwjhWzTylU-19swt_tkAAPP_pEyCtOvQQ"} className={"h-36 object-contain mb-space-xs"} alt={"Blue Smiggle style transparent high-grade school backpack with bright colored zippers and water bottle pocket"} loading={"lazy"} decoding={"async"} />
            <span className={"font-title-md text-title-md text-on-primary font-bold"}>
              {"Clear School Bags"}
            </span>
            <span className={"font-label-sm text-label-sm text-tertiary-fixed"}>
              {"From ₦18,500.00"}
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export function WhyChooseUs() {
  return (
    <Reveal className={"py-space-xl bg-surface-container-low"}>
      <div className={"max-w-7xl mx-auto px-gutter"}>
        <div className={"text-center max-w-xl mx-auto mb-space-xl"}>
          <span className={"font-label-md text-label-md uppercase tracking-wider text-primary font-bold"}>
            {"The Master Kids Difference"}
          </span>
          <h2 className={"font-headline-lg text-headline-lg text-on-surface mt-space-xs"}>
            {"Why Parents & Schools Trust Us"}
          </h2>
          <p className={"font-body-md text-body-md text-on-surface-variant mt-space-xs"}>
            {"We don't just sell toys — we curate tools that shape active, curious thinkers."}
          </p>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg"}>
          <div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"}>
            <div className={"w-14 h-14 rounded-full bg-brand-purple-light flex items-center justify-center text-primary mb-space-md shadow-sm"}>
              <span className={"material-symbols-outlined text-headline-md"} aria-hidden={"true"}>
                {"psychology_alt"}
              </span>
            </div>
            <h3 className={"font-title-lg text-title-lg text-on-surface"}>
              {"Curated Learning Impact"}
            </h3>
            <p className={"font-body-md text-body-md text-on-surface-variant mt-space-xs"}>
              {"Every toy is screened for developmental merit, spatial reasoning, creativity, and hand-eye coordination."}
            </p>
          </div>
          <div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"}>
            <div className={"w-14 h-14 rounded-full bg-brand-orange-light flex items-center justify-center text-secondary mb-space-md shadow-sm"}>
              <span className={"material-symbols-outlined text-headline-md"} aria-hidden={"true"}>
                {"local_shipping"}
              </span>
            </div>
            <h3 className={"font-title-lg text-title-lg text-on-surface"}>
              {"Nationwide Safe Dispatch"}
            </h3>
            <p className={"font-body-md text-body-md text-on-surface-variant mt-space-xs"}>
              {"Prompt delivery within Lagos (Same/Next Day) and tracked courier logistics across all 36 Nigerian states."}
            </p>
          </div>
          <div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"}>
            <div className={"w-14 h-14 rounded-full bg-brand-yellow-soft flex items-center justify-center text-tertiary mb-space-md shadow-sm"}>
              <span className={"material-symbols-outlined text-headline-md"} aria-hidden={"true"}>
                {"verified_user"}
              </span>
            </div>
            <h3 className={"font-title-lg text-title-lg text-on-surface"}>
              {"100% Genuine Guarantee"}
            </h3>
            <p className={"font-body-md text-body-md text-on-surface-variant mt-space-xs"}>
              {"Direct partnerships with official manufacturers. Zero knockoffs, 100% genuine non-toxic, child-safe plastics."}
            </p>
          </div>
          <div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"}>
            <div className={"w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-space-md shadow-sm"}>
              <span className={"material-symbols-outlined text-headline-md"} aria-hidden={"true"}>
                {"support_agent"}
              </span>
            </div>
            <h3 className={"font-title-lg text-title-lg text-on-surface"}>
              {"Direct WhatsApp Support"}
            </h3>
            <p className={"font-body-md text-body-md text-on-surface-variant mt-space-xs"}>
              {"Need birthday gift advice or STEM recommendations? Call or WhatsApp our friendly play advisors at 09134549603."}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export function Testimonials() {
  return (
    <Reveal className={"py-space-xl bg-surface-container-lowest overflow-hidden"}>
      <div className={"max-w-7xl mx-auto px-gutter"}>
        <div className={"flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md"}>
          <div>
            <span className={"font-label-md text-label-md text-secondary-container uppercase tracking-wider font-bold"}>
              {"@themasterkidsng Community"}
            </span>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface mt-space-xs"}>
              {"Loved by 10,000+ Nigerian Parents"}
            </h2>
          </div>
          <a href={"https://www.instagram.com/themasterkidsng/"} target={"_blank"} className={"inline-flex items-center gap-space-xs text-primary font-title-md text-body-md hover:underline"} rel={"noopener noreferrer"}>
            <span className={"material-symbols-outlined"} aria-hidden={"true"}>
              {"photo_camera"}
            </span>
            <span>
              {"Follow Us on Instagram"}
            </span>
          </a>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-space-lg"}>
          <div className={"bg-canvas-cream p-space-lg rounded-xl shadow-sm flex flex-col justify-between"}>
            <div>
              <div className={"flex items-center gap-1 text-tertiary-fixed-dim mb-space-sm"}>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
              </div>
              <p className={"font-body-md text-body-md text-on-surface italic"}>
                {"\"Finding authentic Baby Alive and original LEGO in Lekki used to be so stressful. The Master Kids delivered next morning, packaged beautifully for my daughter's 5th birthday!\""}
              </p>
            </div>
            <div className={"flex items-center gap-space-sm mt-space-md pt-space-sm border-t border-outline-variant/30"}>
              <div className={"w-10 h-10 rounded-full bg-brand-purple-light flex items-center justify-center text-primary font-bold"}>
                {"AO"}
              </div>
              <div>
                <p className={"font-title-md text-body-md text-on-surface font-bold"}>
                  {"Amina O. — Lekki Phase 1"}
                </p>
                <p className={"font-label-sm text-label-sm text-outline"}>
                  {"Verified Buyer • Baby Alive Bubbly Tea"}
                </p>
              </div>
            </div>
          </div>
          <div className={"bg-canvas-cream p-space-lg rounded-xl shadow-sm flex flex-col justify-between"}>
            <div>
              <div className={"flex items-center gap-1 text-tertiary-fixed-dim mb-space-sm"}>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
              </div>
              <p className={"font-body-md text-body-md text-on-surface italic"}>
                {"\"The STEM robotics kit we bought for our 9-year-old kept him engaged for hours without a tablet screen! Worth every Naira. Fast delivery to Abuja too.\""}
              </p>
            </div>
            <div className={"flex items-center gap-space-sm mt-space-md pt-space-sm border-t border-outline-variant/30"}>
              <div className={"w-10 h-10 rounded-full bg-brand-yellow-soft flex items-center justify-center text-tertiary font-bold"}>
                {"CE"}
              </div>
              <div>
                <p className={"font-title-md text-body-md text-on-surface font-bold"}>
                  {"Dr. Chinedu E. — Abuja FCT"}
                </p>
                <p className={"font-label-sm text-label-sm text-outline"}>
                  {"Verified Buyer • STEM Coding Kit"}
                </p>
              </div>
            </div>
          </div>
          <div className={"bg-canvas-cream p-space-lg rounded-xl shadow-sm flex flex-col justify-between"}>
            <div>
              <div className={"flex items-center gap-1 text-tertiary-fixed-dim mb-space-sm"}>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
                <span className={"material-symbols-outlined text-body-lg"} aria-hidden={"true"}>
                  {"star"}
                </span>
              </div>
              <p className={"font-body-md text-body-md text-on-surface italic"}>
                {"\"Customer support on WhatsApp was so patient when answering questions about trolley school bags. Genuine quality, heavy zippers, our kid is super proud.\""}
              </p>
            </div>
            <div className={"flex items-center gap-space-sm mt-space-md pt-space-sm border-t border-outline-variant/30"}>
              <div className={"w-10 h-10 rounded-full bg-brand-orange-light flex items-center justify-center text-secondary font-bold"}>
                {"FB"}
              </div>
              <div>
                <p className={"font-title-md text-body-md text-on-surface font-bold"}>
                  {"Folashade B. — Ikeja, Lagos"}
                </p>
                <p className={"font-label-sm text-label-sm text-outline"}>
                  {"Verified Buyer • Barbie Trolley Bag"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export function VisitStore() {
  return (
    <Reveal id={"visit-store"} className={"py-space-xl bg-surface-container-high"}>
      <div className={"max-w-7xl mx-auto px-gutter"}>
        <div className={"bg-surface-container-lowest rounded-xl p-space-xl shadow-md grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center"}>
          <div className={"lg:col-span-8 flex flex-col gap-space-xs"}>
            <div className={"inline-flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase font-bold"}>
              <span className={"material-symbols-outlined text-title-md"} aria-hidden={"true"}>
                {"storefront"}
              </span>
              {"Experience The Joy In Person"}
            </div>
            <h3 className={"font-headline-lg text-headline-lg text-on-surface"}>
              {"Visit The Master Kids Store in Lagos"}
            </h3>
            <p className={"font-body-lg text-body-lg text-on-surface-variant max-w-xl"}>
              {"Bring your children to test out demonstration playsets, explore the LEGO building bar, and meet our early childhood play advisors."}
            </p>
            <div className={"flex flex-wrap items-center gap-space-md pt-space-sm font-body-md text-body-md text-on-surface-variant"}>
              <div className={"flex items-center gap-space-xs"}>
                <span className={"material-symbols-outlined text-secondary-container"} aria-hidden={"true"}>
                  {"schedule"}
                </span>
                <span>
                  {"Mon - Sat: 9:00am - 6:00pm | Sun: 1:00pm - 5:00pm"}
                </span>
              </div>
              <div className={"flex items-center gap-space-xs"}>
                <span className={"material-symbols-outlined text-primary"} aria-hidden={"true"}>
                  {"call"}
                </span>
                <span>
                  {"Direct Hotline: 09134549603"}
                </span>
              </div>
            </div>
          </div>
          <div className={"lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-center"}>
            <a href={"https://wa.me/2349134549603"} target={"_blank"} className={"bg-success-mint hover:bg-emerald-600 text-on-primary font-headline-sm text-title-md px-space-lg py-space-md rounded-full shadow-md text-center flex items-center justify-center gap-space-xs"} rel={"noopener noreferrer"}>
              <span className={"material-symbols-outlined"} aria-hidden={"true"}>
                {"chat"}
              </span>
              <span>
                {"Chat on WhatsApp"}
              </span>
            </a>
            <a href={"https://www.google.com/maps/search/?api=1&query=The+Master+Kids+Lagos"} className={"bg-surface-container-low hover:bg-surface-container text-primary font-title-lg text-title-md px-space-lg py-space-md rounded-full text-center flex items-center justify-center gap-space-xs"} target={"_blank"} rel={"noopener noreferrer"}>
              <span className={"material-symbols-outlined"} aria-hidden={"true"}>
                {"directions"}
              </span>
              <span>
                {"Get Directions"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
