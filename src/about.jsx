import React from 'react'
import profileImage from './assets/profile.png'

export default function About() {
  return (
    <section className="no-tracking relative w-full overflow-hidden bg-[#111111] text-[#f7f5f2]" aria-labelledby="about-title">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#e46f70]/15 blur-3xl motion-safe:animate-pulse" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#8f3f4b]/20 blur-3xl motion-safe:animate-[pulse_9s_ease-in-out_infinite]" />
        <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e46f70]/10 bg-[conic-gradient(from_90deg,transparent,#e46f70/10,transparent_35%)] blur-2xl motion-safe:animate-[spin_32s_linear_infinite]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(112deg,transparent_0_7px,rgba(255,255,255,0.025)_8px_9px)]" />
      </div>
      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-5 py-[clamp(4.5rem,10vw,9rem)] sm:px-10 lg:grid-cols-[2fr_3fr] lg:gap-6 lg:px-[4vw]">
        <div className="group relative mx-auto min-h-[22rem] w-full max-w-[25rem] self-center overflow-hidden rounded-[1.4rem] border-2 border-[#f7f5f2] bg-[#2b2928] sm:min-h-[30rem] lg:max-w-none lg:min-h-[clamp(22rem,38vw,35rem)]" aria-label="Prince Rakholiya creative editor">
          <div className="absolute inset-[1.3rem] border border-[#f7f5f2]/20" aria-hidden="true" />
          <div className="absolute inset-x-[1.3rem] top-1/2 border-t border-[#f7f5f2]/20" aria-hidden="true" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(228,111,112,0.88),transparent_0.5rem),radial-gradient(ellipse_at_50%_46%,#393032_0%,#191819_50%,#0e0e0e_100%)]">
            <img
              src={profileImage}
              alt="Prince Rakholiya"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-95 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/75 via-transparent to-[#0e0e0e]/10" aria-hidden="true" />
            <span className="absolute left-8 top-8 font-poppins text-[0.68rem] font-bold uppercase tracking-[0.16em]">PR / 001</span>
            <span className="absolute bottom-8 right-8 font-poppins text-[0.68rem] font-bold uppercase tracking-[0.16em]">Edit with intention</span>
          </div>
        </div>

        <div className="max-w-[47rem] self-center">
          <h2 id="about-title" className="m-0 text-[clamp(3rem,6.3vw,7rem)] font-extrabold leading-[0.94] font-bricolage"><span className="text-[clamp(1.8rem,3.8vw,4rem)]">Hello, I&apos;m</span>{' '}<strong className="font-bold text-[#e46f70]">Prince<br className="max-sm:hidden" /> Rakholiya</strong></h2>
          <p className="m-0 mt-[clamp(1rem,1vw,2rem)] max-w-[45rem] text-[clamp(0.9rem,1vw,1.2rem)] leading-[1.65] text-[#ffffff]">
            Creative Video Editor passionate about turning raw footage into engaging visual stories. I create high-impact reels, social media content, commercials, and branded videos with precise timing, smooth transitions, dynamic motion, and a strong eye for detail. My goal is simple to make every frame look intentional, feel engaging, and leave a lasting impression.
          </p>

          <div className="mt-[clamp(1rem,1vw,3rem)] flex flex-wrap gap-5 sm:gap-10" aria-label="Experience statistics">
            <div className="flex flex-col border-l-[0.28rem] border-[#e46f70] pl-[1rem]">
              <span className="text-[clamp(1.15rem,2vw,1.75rem)] font-normal text-[#e46f70]">6+ months</span>
              <span className="text-[clamp(1rem,1.5vw,1.35rem)] text-[#f7f5f2]">Experience</span>
            </div>
            <div className="flex flex-col border-l-[0.28rem] border-[#e46f70] pl-[1rem]">
              <span className="text-[clamp(1.15rem,2vw,1.75rem)] font-normal text-[#e46f70]">200+ videos</span>
              <span className="text-[clamp(1rem,1.5vw,1.35rem)] text-[#f7f5f2]">Completed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-12 border-t border-[#f7f5f2]/20 px-5 py-[clamp(4rem,8vw,7rem)] sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[clamp(3rem,7vw,8rem)] lg:px-[7vw]">
        <div>
          <h2 className="m-0 text-[clamp(2.8rem,5.5vw,6rem)] font-extrabold leading-[0.92] font-bricolage">Education</h2>
          <div className="mt-10 space-y-8">
            <div className="border-l-4 border-[#e46f70] pl-5">
              <p className="m-0 font-poppins text-sm font-bold text-[#e46f70]">2020 - 2021</p>
              <p className="m-0 mt-2 text-xl font-bold">SSC (10th) Sadbhavna Vidhyalaya</p>
            </div>
            <div className="border-l-4 border-[#e46f70] pl-5">
              <p className="m-0 font-poppins text-sm font-bold text-[#e46f70]">2022- 2023</p>
              <p className="m-0 mt-2 text-xl font-bold">HSC (12th) Nalanda Vidhyalaya</p>
            </div>
            <div className="border-l-4 border-[#e46f70] pl-5">
              <p className="m-0 font-poppins text-sm font-bold text-[#e46f70]">2023 - 2026</p>
              <p className="m-0 mt-2 text-xl font-bold">BCA (Completed)</p>
               <p className="m-0 mt-2 text-xl font-bold">Sutex Bank College of Computer Application and Science</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="m-0 text-[clamp(2.8rem,5.5vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.04em]">Work Experience</h2>
          <div className="mt-10 space-y-8">
            <article className="border-b border-[#f7f5f2]/30 pb-7">
              <p className="m-0 text-lg">Video Editing / Social Media Manager 2025 - 2026</p>
              <h3 className="m-0 mt-2 text-2xl font-bold text-[#e46f70]">Let's Automation</h3>
              <p className="m-0 mt-3 max-w-2xl text-base leading-relaxed text-[#f7f5f2]/75">Created social-media-ready video content with a focus on clean editing, smooth transitions, sound synchronization, captions, and visual effects. Worked on promotional and engaging video projects while maintaining a professional and consistent visual style.</p>
            </article>
            <article className="border-b border-[#f7f5f2]/30 pb-7">
              <p className="m-0 text-lg">Video Editing 2025 - 2026</p>
              <h3 className="m-0 mt-2 text-2xl font-bold text-[#e46f70]">Digital Dukan</h3>
              <p className="m-0 mt-3 max-w-2xl text-base leading-relaxed text-[#f7f5f2]/75">I am Currently working as a Video Editor and Motion Graphics Designer, creating engaging and professional video content for various projects. Responsible for video editing, motion graphics, visual effects, transitions, text animations, sound design, and color enhancement. Focused on delivering clean, creative, and high-quality visuals that effectively communicate the purpose of each project..</p>
            </article>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1500px] border-t border-[#f7f5f2]/20 px-5 py-[clamp(4rem,8vw,7rem)] sm:px-10 lg:px-[7vw]">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="m-0 mb-4 font-poppins text-[0.75rem] font-bold uppercase tracking-[0.18em] text-[#e46f70]">What I bring to every frame</p>
            <h2 className="m-0 max-w-3xl text-[clamp(2.8rem,6vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.05em]">Expertise<span className="text-[#e46f70]">.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group flex items-center gap-4 border border-[#f7f5f2]/15 bg-[#f7f5f2]/[0.03] p-5 transition hover:border-[#e46f70]/70 hover:bg-[#e46f70]/10">
            <span className="flex h-3 w-3 shrink-0 rounded-full bg-[#e46f70] shadow-[0_0_18px_#e46f70]" />
            <span className="text-lg font-semibold">Video Editing</span>
          </div>
          <div className="group flex items-center gap-4 border border-[#f7f5f2]/15 bg-[#f7f5f2]/[0.03] p-5 transition hover:border-[#e46f70]/70 hover:bg-[#e46f70]/10">
            <span className="flex h-3 w-3 shrink-0 rounded-full bg-[#e46f70] shadow-[0_0_18px_#e46f70]" />
            <span className="text-lg font-semibold">Motion Graphics</span>
          </div>
          <div className="group flex items-center gap-4 border border-[#f7f5f2]/15 bg-[#f7f5f2]/[0.03] p-5 transition hover:border-[#e46f70]/70 hover:bg-[#e46f70]/10">
            <span className="flex h-3 w-3 shrink-0 rounded-full bg-[#e46f70] shadow-[0_0_18px_#e46f70]" />
            <span className="text-lg font-semibold">Social Media Content</span>
          </div>
          <div className="group flex items-center gap-4 border border-[#f7f5f2]/15 bg-[#f7f5f2]/[0.03] p-5 transition hover:border-[#e46f70]/70 hover:bg-[#e46f70]/10">
            <span className="flex h-3 w-3 shrink-0 rounded-full bg-[#e46f70] shadow-[0_0_18px_#e46f70]" />
            <span className="text-lg font-semibold">Creative Storytelling</span>
          </div>
          <div className="group flex items-center gap-4 border border-[#f7f5f2]/15 bg-[#f7f5f2]/[0.03] p-5 transition hover:border-[#e46f70]/70 hover:bg-[#e46f70]/10">
            <span className="flex h-3 w-3 shrink-0 rounded-full bg-[#e46f70] shadow-[0_0_18px_#e46f70]" />
            <span className="text-lg font-semibold">Brand Content</span>
          </div>
          <div className="group flex items-center gap-4 border border-[#f7f5f2]/15 bg-[#f7f5f2]/[0.03] p-5 transition hover:border-[#e46f70]/70 hover:bg-[#e46f70]/10">
            <span className="flex h-3 w-3 shrink-0 rounded-full bg-[#e46f70] shadow-[0_0_18px_#e46f70]" />
            <span className="text-lg font-semibold">Reels &amp; Commercials</span>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="m-0 text-[clamp(2.2rem,4.5vw,4.5rem)] font-extrabold leading-none tracking-[-0.04em]">Software Proficiency<span className="text-[#e46f70]">.</span></h2>
            <span className="hidden font-poppins text-xs uppercase tracking-[0.16em] text-[#f7f5f2]/50 sm:block">Current toolkit / 2026</span>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="mb-3 flex justify-between text-lg"><span>Adobe After Effects</span><span className="font-poppins text-sm text-[#e46f70]">80%</span></div>
              <div className="h-2 rounded-full bg-[#f7f5f2]/20"><div className="h-full w-[90%] rounded-full bg-[#e46f70] shadow-[0_0_14px_rgba(228,111,112,0.55)]" /></div>
            </div>
            <div>
              <div className="mb-3 flex justify-between text-lg"><span>Adobe Premiere Pro</span><span className="font-poppins text-sm text-[#e46f70]">92%</span></div>
              <div className="h-2 rounded-full bg-[#f7f5f2]/20"><div className="h-full w-[92%] rounded-full bg-[#e46f70] shadow-[0_0_14px_rgba(228,111,112,0.55)]" /></div>
            </div>
            <div>
              <div className="mb-3 flex justify-between text-lg"><span>CapCut</span><span className="font-poppins text-sm text-[#e46f70]">88%</span></div>
              <div className="h-2 rounded-full bg-[#f7f5f2]/20"><div className="h-full w-[88%] rounded-full bg-[#e46f70] shadow-[0_0_14px_rgba(228,111,112,0.55)]" /></div>
            </div>
            {/* <div>
              <div className="mb-3 flex justify-between text-lg"><span>Adobe Photoshop</span><span className="font-poppins text-sm text-[#e46f70]">86%</span></div>
              <div className="h-2 rounded-full bg-[#f7f5f2]/20"><div className="h-full w-[86%] rounded-full bg-[#e46f70] shadow-[0_0_14px_rgba(228,111,112,0.55)]" /></div>
            </div>
            <div>
              <div className="mb-3 flex justify-between text-lg"><span>Illustrator</span><span className="font-poppins text-sm text-[#e46f70]">84%</span></div>
              <div className="h-2 rounded-full bg-[#f7f5f2]/20"><div className="h-full w-[84%] rounded-full bg-[#e46f70] shadow-[0_0_14px_rgba(228,111,112,0.55)]" /></div>
            </div> */}
            <div>
              <div className="mb-3 flex justify-between text-lg"><span>DaVinci Resolve</span><span className="font-poppins text-sm text-[#e46f70]">76%</span></div>
              <div className="h-2 rounded-full bg-[#f7f5f2]/20"><div className="h-full w-[76%] rounded-full bg-[#e46f70] shadow-[0_0_14px_rgba(228,111,112,0.55)]" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1500px] border-t border-[#f7f5f2]/20 px-5 py-[clamp(4rem,8vw,7rem)] sm:px-10 lg:px-[7vw]">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <h2 className="m-0 text-[clamp(2.8rem,6vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.05em]">Contents<span className="text-[#e46f70]">.</span></h2>
          </div>
          <span className="hidden font-poppins text-xs uppercase tracking-[0.16em] text-[#f7f5f2]/50 sm:block">Two ways to tell a story</span>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <article className="group relative min-h-[15rem] overflow-hidden rounded-[1.25rem] border border-[#f7f5f2]/20 bg-gradient-to-br from-[#9b5556] via-[#4a2b30] to-[#171516] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#e46f70] sm:p-10">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[3rem] border-[#e46f70]/20 blur-sm transition duration-700 group-hover:scale-125" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between gap-12">
              <span className="font-poppins text-sm font-semibold tracking-[0.16em] text-[#f7f5f2]/70">01 / CONTENT TYPE</span>
              <div>
                <h3 className="m-0 max-w-md text-[clamp(2rem,4vw,4rem)] font-extrabold leading-none tracking-[-0.04em]">Social Media Reels</h3>
                <p className="m-0 mt-4 max-w-sm text-sm leading-relaxed text-[#f7f5f2]/70">Fast, engaging edits built to stop the scroll and keep the story moving.</p>
              </div>
            </div>
          </article>

          <article className="group relative min-h-[15rem] overflow-hidden rounded-[1.25rem] border border-[#f7f5f2]/20 bg-[#f7f5f2] p-7 text-[#201b1b] transition duration-500 hover:-translate-y-2 hover:border-[#e46f70] sm:p-10">
            <div className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full border-[3rem] border-[#e46f70]/20 blur-sm transition duration-700 group-hover:scale-125" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between gap-12">
              <span className="font-poppins text-sm font-semibold tracking-[0.16em] text-[#9e4b4e]">02 / CONTENT TYPE</span>
              <div>
                <h3 className="m-0 max-w-md text-[clamp(2rem,4vw,4rem)] font-extrabold leading-none tracking-[-0.04em]">Motion Graphics</h3>
                <p className="m-0 mt-4 max-w-sm text-sm leading-relaxed text-[#201b1b]/65">Bold movement, clean design, and visual energy that gives every frame a voice.</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1500px] border-t border-[#f7f5f2]/20 px-5 py-[clamp(4rem,8vw,7rem)] sm:px-10 lg:px-[7vw]">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="m-0 mb-4 font-poppins text-[0.75rem] font-bold uppercase tracking-[0.18em] text-[#e46f70]">Selected work / 01</p>
            <h2 className="m-0 text-[clamp(2.8rem,6vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em]">Social Media <span className="text-[#e46f70]">Reels</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="group overflow-hidden rounded-[1.25rem] border border-[#f7f5f2]/20 bg-[#0b0b0b] transition duration-500 hover:-translate-y-2 hover:border-[#e46f70]">
            <div className="relative aspect-[9/14] overflow-hidden bg-[#252020]">
              <video className="h-full w-full object-cover" controls playsInline preload="metadata" aria-label="Social media reel one">
                <source src="/videos/reel-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#111111]/75 px-3 py-1 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-[#f7f5f2]">01 / Reel</span>
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <h3 className="m-0 text-lg font-bold">Social Story</h3>
              <span className="font-poppins text-xs uppercase tracking-[0.14em] text-[#e46f70]">Play / Sound</span>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[1.25rem] border border-[#f7f5f2]/20 bg-[#0b0b0b] transition duration-500 hover:-translate-y-2 hover:border-[#e46f70]">
            <div className="relative aspect-[9/14] overflow-hidden bg-[#252020]">
              <video className="h-full w-full object-cover" controls playsInline preload="metadata" aria-label="Social media reel two">
                <source src="/videos/reel-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#111111]/75 px-3 py-1 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-[#f7f5f2]">02 / Reel</span>
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <h3 className="m-0 text-lg font-bold">Brand Motion</h3>
              <span className="font-poppins text-xs uppercase tracking-[0.14em] text-[#e46f70]">Play / Sound</span>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[1.25rem] border border-[#f7f5f2]/20 bg-[#0b0b0b] transition duration-500 hover:-translate-y-2 hover:border-[#e46f70]">
            <div className="relative aspect-[9/14] overflow-hidden bg-[#252020]">
              <video className="h-full w-full object-cover" controls playsInline preload="metadata" aria-label="Social media reel three">
                <source src="/videos/reel-3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#111111]/75 px-3 py-1 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-[#f7f5f2]">03 / Reel</span>
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <h3 className="m-0 text-lg font-bold">Campaign Cut</h3>
              <span className="font-poppins text-xs uppercase tracking-[0.14em] text-[#e46f70]">Play / Sound</span>
            </div>
          </article>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1500px] border-t border-[#f7f5f2]/20 px-5 py-[clamp(4rem,8vw,7rem)] sm:px-10 lg:px-[7vw]">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="m-0 mb-4 font-poppins text-[0.75rem] font-bold uppercase tracking-[0.18em] text-[#e46f70]">Selected work / 02</p>
            <h2 className="m-0 text-[clamp(2.8rem,6vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em]">Motion <span className="text-[#e46f70]">Graphics</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="group overflow-hidden rounded-[1.25rem] border border-[#e46f70]/40 bg-[#211719] transition duration-500 hover:-translate-y-2 hover:border-[#e46f70]">
            <div className="relative aspect-video overflow-hidden bg-[#302022]">
              <video className="h-full w-full object-cover" controls playsInline preload="metadata" aria-label="Motion graphics video one">
                <source src="/videos/motion-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#111111]/75 px-3 py-1 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-[#f7f5f2]">01 / Motion</span>
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4"><h3 className="m-0 text-lg font-bold">Title Animation</h3><span className="font-poppins text-xs uppercase tracking-[0.14em] text-[#e46f70]">Play / Sound</span></div>
          </article>

          <article className="group overflow-hidden rounded-[1.25rem] border border-[#e46f70]/40 bg-[#211719] transition duration-500 hover:-translate-y-2 hover:border-[#e46f70]">
            <div className="relative aspect-video overflow-hidden bg-[#302022]">
              <video className="h-full w-full object-cover" controls playsInline preload="metadata" aria-label="Motion graphics video two">
                <source src="/videos/motion-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#111111]/75 px-3 py-1 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-[#f7f5f2]">02 / Motion</span>
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4"><h3 className="m-0 text-lg font-bold">Brand Intro</h3><span className="font-poppins text-xs uppercase tracking-[0.14em] text-[#e46f70]">Play / Sound</span></div>
          </article>

          <article className="group overflow-hidden rounded-[1.25rem] border border-[#e46f70]/40 bg-[#211719] transition duration-500 hover:-translate-y-2 hover:border-[#e46f70]">
            <div className="relative aspect-video overflow-hidden bg-[#302022]">
              <video className="h-full w-full object-cover" controls playsInline preload="metadata" aria-label="Motion graphics video three">
                <source src="/videos/motion-3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#111111]/75 px-3 py-1 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-[#f7f5f2]">03 / Motion</span>
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4"><h3 className="m-0 text-lg font-bold">Visual Story</h3><span className="font-poppins text-xs uppercase tracking-[0.14em] text-[#e46f70]">Play / Sound</span></div>
          </article>
        </div>
      </div>
    </section>
  )
}
