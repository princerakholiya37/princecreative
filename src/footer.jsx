import React from 'react'
import timelineImage from './assets/image/timeline.jpg'

export default function Footer() {
  return (
    <footer className="no-tracking relative isolate overflow-hidden bg-[#ffffff] px-5 py-20 text-[#201b1b] sm:px-10 sm:py-28 lg:px-[7vw]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <img
          src={timelineImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-white/50" />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#e46f70]/20 blur-3xl motion-safe:animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[conic-gradient(from_90deg,rgba(228,111,112,0.2),transparent_35%,rgba(158,75,78,0.12),transparent_70%)] blur-3xl motion-safe:animate-[spin_36s_linear_infinite]" />
        <div className="absolute right-1/4 top-1/2 h-40 w-40 rounded-full bg-[#f7b0a7]/20 blur-2xl motion-safe:animate-[bounce_10s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(228,111,112,0.1),transparent_38%),radial-gradient(circle_at_85%_85%,rgba(158,75,78,0.08),transparent_24%)]" />
      </div>
      <div className="relative mx-auto max-w-[1500px] text-center">
        <h2 className="m-0 mt-5 bg-gradient-to-r from-[#e46f70] via-[#9e4b4e] to-[#311d20] bg-clip-text font-anton text-[clamp(3rem,14vw,13rem)] uppercase leading-[0.9] tracking-[0.01em] text-transparent">Thank You</h2>
        <p className="mx-auto mt-8 max-w-2xl text-[clamp(0.95rem,1.4vw,1.2rem)] leading-relaxed text-[#000000]">Thank you for taking the time to explore my work. I look forward to creating impactful visuals and new creative opportunities together.</p>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 overflow-hidden rounded-[1.25rem] bg-[#e46f70] text-left shadow-[0_20px_60px_rgba(32,27,27,0.14)] md:grid-cols-[1fr_1fr_1.35fr]">
          <div className="p-6 sm:p-7">
            <p className="m-0 text-xl font-bold uppercase tracking-wide">Prince Rakholiya</p>
            <p className="m-0 mt-1 text-[18px] font-normal tracking-wide">Video Editor</p>
          </div>
          <a className="border-t border-[#201b1b]/25 p-6 no-underline transition hover:bg-[#d96063] md:border-l md:border-t-0 md:p-7" href="tel:+919512437598">
            <span className="block text-[18px] tracking-wide">Contact</span>
            <strong className="mt-1 block text-lg tracking-wide">+91 95124 37598</strong>
          </a>
          <a className="border-t border-[#201b1b]/25 p-6 no-underline transition hover:bg-[#d96063] md:border-l md:border-t-0 md:p-7" href="mailto:princerakholiya37@email.com">
            <span className="block text-[18px] tracking-wide">Email</span>
            <strong className="mt-1 block break-words text-[clamp(0.75rem,1.35vw,1.125rem)] tracking-wide">princerakholiya37@email.com</strong>
          </a>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 pt-6 text-[13px] font-medium uppercase tracking-wider text-[#201b1b]/60 sm:flex-row">
          <span>Prince Rakholiya</span>
          <div className="flex gap-5">
            <a className="transition hover:text-[#9e4b4e]" href="https://www.instagram.com/prince_rakholiya_official?stkn=MTZ6bXk2b2RnM3lxOA==">Instagram</a>
            <a className="transition hover:text-[#9e4b4e]" href="https://www.linkedin.com/in/prince-rakholiya-a921ba346?utm_source=share_via&utm_content=profile&utm_medium=member_android">LinkedIn</a>
            <a className="transition hover:text-[#9e4b4e]" href="https://www.facebook.com/share/1HqjmKGgKj/">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
