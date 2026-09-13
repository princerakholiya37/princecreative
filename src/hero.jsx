import React from 'react'

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#e8f2f7] text-[#062747]">
              <div className="hero-marquee relative z-10 -mx-5 overflow-hidden border-y border-[#062747]/15 bg-[#062747] py-3 sm:-mx-10 lg:-mx-[7vw]" aria-label="Creative services">
          <div className="hero-marquee__track flex w-max items-center">
            <div className="hero-marquee__group flex shrink-0 items-center" aria-hidden="true">
              <span>Video Editing</span><i>✦</i>
              <span>Motion Design</span><i>✦</i>
              <span>Visual Effects</span><i>✦</i>
              <span>Reels</span><i>✦</i>
              <span>Commercials</span><i>✦</i>
              <span>Social Media Content</span><i>✦</i>
              <span>Creative Storytelling</span><i>✦</i>
            </div>
            <div className="hero-marquee__group flex shrink-0 items-center" aria-hidden="true">
              <span>Video Editing</span><i>✦</i>
              <span>Motion Design</span><i>✦</i>
              <span>Visual Effects</span><i>✦</i>
              <span>Reels</span><i>✦</i>
              <span>Commercials</span><i>✦</i>
              <span>Social Media Content</span><i>✦</i>
              <span>Creative Storytelling</span><i>✦</i>
            </div>
          </div>
        </div>

      <section
        className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_83%_18%,rgba(13,91,132,0.35),transparent_26%),linear-gradient(118deg,#f5fafc_0%,#e1eef4_48%,#c7dce7_100%)] px-5 py-7 sm:px-10 sm:py-10 lg:px-[7vw] lg:py-12"
        aria-labelledby="hero-title"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[repeating-linear-gradient(5deg,transparent_0_5px,rgba(6,39,71,0.04)_6px_7px),repeating-linear-gradient(93deg,transparent_0_8px,rgba(255,255,255,0.3)_9px_10px)] opacity-30 mix-blend-multiply"
          aria-hidden="true"
        />

        <header className="relative z-10 flex items-center justify-between gap-4">
          <p className="m-0 min-w-0 text-[clamp(0.65rem,1vw,0.92rem)] font-semibold uppercase tracking-[0.03em] text-[#3d6176]">Video Editor</p>
          <p className="m-0 min-w-0 text-right text-[clamp(0.65rem,1vw,0.92rem)] font-semibold uppercase tracking-[0.03em] text-[#3d6176]">
            Portfolio <span className="ml-2 inline-block h-[0.42rem] w-[0.42rem] rounded-full bg-[#0d5b84]" />
          </p>
        </header>

        <div className="relative flex min-h-[58vh] flex-1 items-center justify-center overflow-hidden text-center sm:min-h-[68vh]">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[28vw] font-extrabold uppercase leading-[0.8] tracking-[-0.08em] text-transparent opacity-50 [-webkit-text-stroke:2px_rgba(6,39,71,0.12)] sm:text-[22vw] lg:text-[clamp(6rem,22vw,22rem)]"
            aria-hidden="true"
          >
            Prince
          </div>
          <h1
            id="hero-title"
            className="hero-title relative z-10 flex w-full max-w-full flex-col items-center text-[clamp(2.9rem,15.5vw,6.8rem)] font-montserrat font-extrabold uppercase leading-none tracking-[-0.02em] sm:text-[clamp(3.7rem,13.4vw,13.5rem)]"
          >
            <p className="inline-block bg-gradient-to-r from-[#0d5b84] via-[#062747] to-[#021723] bg-clip-text py-[0.07em] font-anton font-normal leading-[1.05] tracking-[0.01em] text-transparent">Portfolio</p>
          </h1>
          <p className="hero-signature absolute bottom-5 z-20 m-0 font-kaushan text-[clamp(1.2rem,2.7vw,2.35rem)] tracking-[0.01em] text-[#062747] drop-shadow-[0_2px_1px_rgba(255,255,255,0.45)] sm:bottom-14">Prince Rakholiya</p>
        </div>

        <footer className="relative z-10 flex items-end justify-between gap-4 text-[clamp(0.55rem,0.8vw,0.74rem)] font-semibold uppercase tracking-[0.09em] text-[#3d6176]">
          <span className="max-w-[48%]">Creative direction</span>
          <span className="max-w-[48%] text-right">Scroll to explore <b className="ml-1 text-[1.1rem] text-[#0d5b84]">↓</b></span>
        </footer>
      </section>
    </main>
  )
}
