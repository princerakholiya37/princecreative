import React, { useRef, useState } from 'react'
import profileImage from './assets/profile.png'
import socialReelOne from './reels/reels-1.mp4'
import socialReelTwo from './reels/reels-2.mp4'
import socialReelThree from './reels/reels-3.mp4'
import motionReelOne from './reels/motion-reels-1.mp4'
import motionReelTwo from './reels/motion-reels-2.mp4'
import motionReelThree from './reels/motion-reels-3.mp4'

function ReelPlayer({ src, poster, label }) {
  const videoRef = useRef(null)
  const backdropVideoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [preview, setPreview] = useState({ active: false, position: 0, time: 0, image: '' })
  const previewVideoRef = useRef(null)
  const previewCanvasRef = useRef(null)
  const previewRequestRef = useRef(0)
  const lastPreviewTimeRef = useRef(-1)

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      const backdrop = backdropVideoRef.current
      if (backdrop) backdrop.currentTime = video.currentTime
      try {
        await video.play()
        if (backdrop) await backdrop.play()
      } catch (_) { /* Playback waits for user interaction. */ }
    } else {
      video.pause()
      backdropVideoRef.current?.pause()
    }
  }

  const toggleMute = (event) => {
    event.stopPropagation()
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const seek = (event) => {
    event.stopPropagation()
    const video = videoRef.current
    if (video?.duration) {
      const time = (Number(event.target.value) / 100) * video.duration
      video.currentTime = time
      if (backdropVideoRef.current) backdropVideoRef.current.currentTime = time
    }
  }

  const formatTime = (seconds) => {
    const safeSeconds = Math.max(0, Math.floor(seconds || 0))
    return `${Math.floor(safeSeconds / 60)}:${String(safeSeconds % 60).padStart(2, '0')}`
  }

  const capturePreview = (time) => {
    const previewVideo = previewVideoRef.current
    const canvas = previewCanvasRef.current
    if (!previewVideo || !canvas || !duration || !Number.isFinite(time)) return

    const requestId = ++previewRequestRef.current
    const drawFrame = () => {
      if (requestId !== previewRequestRef.current || !previewVideo.videoWidth || !previewVideo.videoHeight) return
      const previewWidth = 192
      canvas.width = previewWidth
      canvas.height = Math.round((previewVideo.videoHeight / previewVideo.videoWidth) * previewWidth)
      const context = canvas.getContext('2d')
      context.drawImage(previewVideo, 0, 0, canvas.width, canvas.height)
      setPreview((current) => ({ ...current, image: canvas.toDataURL('image/jpeg', 0.82) }))
    }

    previewVideo.addEventListener('seeked', drawFrame, { once: true })
    previewVideo.currentTime = Math.min(Math.max(time, 0), Math.max(duration - 0.05, 0))
  }

  const updateTimelinePreview = (event) => {
    const timeline = event.currentTarget
    const bounds = timeline.getBoundingClientRect()
    const pointerX = event.touches?.[0]?.clientX ?? event.clientX
    const position = Math.min(100, Math.max(0, ((pointerX - bounds.left) / bounds.width) * 100))
    const time = (position / 100) * duration
    setPreview((current) => ({ ...current, active: true, position, time }))

    if (Math.abs(time - lastPreviewTimeRef.current) > 0.12) {
      lastPreviewTimeRef.current = time
      capturePreview(time)
    }
  }

  const changeVolume = (event) => {
    event.stopPropagation()
    const video = videoRef.current
    if (!video) return
    video.volume = Number(event.target.value)
    video.muted = video.volume === 0
    setIsMuted(video.muted)
  }

  return (
    <div className="group/player relative h-full w-full" onClick={togglePlay}>
      <video ref={backdropVideoRef} className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-2xl" src={src} muted playsInline preload="metadata" aria-hidden="true" />
      <video ref={videoRef} className="relative z-10 h-full w-full cursor-pointer object-contain" poster={poster} muted={isMuted} playsInline preload="metadata" aria-label={label} onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)} onPlay={() => setIsPlaying(true)} onPause={() => { setIsPlaying(false); backdropVideoRef.current?.pause() }} onEnded={() => setIsPlaying(false)} onTimeUpdate={(event) => { const { currentTime, duration: videoDuration } = event.currentTarget; setProgress(videoDuration ? (currentTime / videoDuration) * 100 : 0) }}>
        <source src={src} type="video/mp4" />
      </video>
      <video ref={previewVideoRef} className="pointer-events-none absolute h-px w-px opacity-0" src={src} muted playsInline preload="auto" aria-hidden="true" />
      <canvas ref={previewCanvasRef} className="hidden" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#08090d]/75 via-transparent to-transparent" aria-hidden="true" />
      <button type="button" onClick={(event) => { event.stopPropagation(); togglePlay() }} className={`absolute left-1/2 top-1/2 z-30 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#111111]/75 text-white backdrop-blur-sm transition hover:scale-110 ${isPlaying ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}`} aria-label={isPlaying ? 'Pause reel' : 'Play reel'}>
        {isPlaying ? <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zm6 0h4v14h-4z" /></svg> : <svg className="ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72L19 12 8 5.14Z" /></svg>}
      </button>
      <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-30 flex items-end gap-3 opacity-0 transition group-hover/player:pointer-events-auto group-hover/player:opacity-100" onClick={(event) => event.stopPropagation()}>
        <div className="relative w-full">
          {preview.active && (
            <div className="pointer-events-none absolute bottom-5 z-20 -translate-x-1/2" style={{ left: `${preview.position}%` }}>
              <div className="w-40 overflow-hidden rounded-md border border-white/25 bg-[#111111] shadow-xl">
                {preview.image ? <img src={preview.image} alt="" className="aspect-video w-full object-cover" /> : <div className="aspect-video w-full animate-pulse bg-white/15" />}
                <span className="block px-2 py-1 text-center font-poppins text-xs font-semibold text-white">{formatTime(preview.time)}</span>
              </div>
            </div>
          )}
          <input type="range" min="0" max="100" value={progress} onChange={seek} onMouseEnter={updateTimelinePreview} onMouseMove={updateTimelinePreview} onMouseLeave={() => setPreview((current) => ({ ...current, active: false }))} onTouchStart={updateTimelinePreview} onTouchMove={updateTimelinePreview} className="reel-timeline h-1.5 w-full cursor-pointer" style={{ background: `linear-gradient(to right, #ffffff 0%, #ffffff ${progress}%, rgba(255, 255, 255, 0.4) ${progress}%, rgba(255, 255, 255, 0.4) 100%)` }} aria-label="Reel timeline" />
        </div>
        <div className="relative flex h-32 w-8 shrink-0 flex-col items-center justify-end gap-3">
          <input type="range" min="0" max="1" step="0.05" defaultValue="1" onChange={changeVolume} className="reel-volume absolute bottom-9 h-24 w-1.5 cursor-pointer accent-white" aria-label="Volume" />
          <button type="button" onClick={toggleMute} className="grid h-8 w-8 place-items-center rounded-full bg-[#111111]/60 text-white backdrop-blur-sm" aria-label={isMuted ? 'Unmute reel' : 'Mute reel'}>{isMuted ? <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Z" /><path d="m19 9-4 4m0-4 4 4" /></svg> : <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7m2.5-10a9 9 0 0 1 0 13" /></svg>}</button>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section className="no-tracking relative w-full overflow-hidden bg-[#111111] text-[#f7f5f2]" aria-labelledby="about-title">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#e46f70]/15 blur-3xl motion-safe:animate-pulse" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#8f3f4b]/20 blur-3xl motion-safe:animate-[pulse_9s_ease-in-out_infinite]" />
        <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e46f70]/10 bg-[conic-gradient(from_90deg,transparent,#e46f70/10,transparent_35%)] blur-2xl motion-safe:animate-[spin_32s_linear_infinite]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(112deg,transparent_0_7px,rgba(255,255,255,0.025)_8px_9px)]" />
      </div>
      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-5 py-[clamp(4rem,4vw,9rem)] sm:px-10 lg:grid-cols-[2fr_3fr] lg:gap-14 lg:px-[4vw]">
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
            <span className="absolute bottom-8 right-8 font-poppins text-[0.68rem] font-medium uppercase tracking-wide">Edit with intention</span>
          </div>
        </div>

        <div className="max-w-[47rem] self-center">
          <h2 id="about-title" className="m-0 text-[clamp(2.5rem,5vw,5.5rem)] font-extrabold leading-[0.94] font-bricolage"><span className="text-[clamp(1.5rem,3.1vw,3.2rem)]">Hello, I&apos;m</span>{' '}<strong className="font-bold text-[#e46f70]">Prince<br className="max-sm:hidden" /> Rakholiya</strong></h2>
          <p className="m-0 mt-[clamp(1rem,1vw,2rem)] max-w-[45rem] text-[clamp(0.9rem,1vw,1.05rem)] leading-[1.5] text-[#ffffff] tracking-wider">
        Creative Video Editor passionate about turning raw footage into engaging visual stories. I create high-impact reels, social media content, commercials, and branded videos with precise timing, smooth transitions, motion graphics, and a strong eye for detail. I focus on combining creativity and storytelling to make every frame feel intentional, engaging, and impactful.
          </p>

          <div className="mt-[clamp(1rem,1vw,3rem)] flex flex-wrap gap-5 sm:gap-10" aria-label="Experience statistics">
            <div className="flex flex-col border-l-[0.28rem] border-[#e46f70] pl-[0.7rem]">
              <span className="text-[clamp(1rem,1.5vw,1.30rem)] font-normal text-[#e46f70] tracking-wide">6+ months</span>
              <p className="text-[clamp(0.95rem,1.25vw,1.15rem)] text-[#f7f5f2] tracking-wider">Experience</p>
            </div>
            <div className="flex flex-col border-l-[0.28rem] border-[#e46f70] pl-[0.7rem]">
              <span className="text-[clamp(1rem,1.5vw,1.30rem)] font-normal text-[#e46f70] tracking-wide">400+ videos</span>
              <span className="text-[clamp(0.95rem,1.25vw,1.15rem)] text-[#f7f5f2] tracking-wider">Completed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-12 border-t border-[#f7f5f2]/20 px-5 py-[clamp(3rem,3vw,6rem)] sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[clamp(3rem,7vw,8rem)] lg:px-[4vw]">
        <div className="relative">
          <h2 className="m-0 text-[clamp(2.25rem,3.5vw,4.75rem)] font-extrabold leading-[0.92] font-bricolage">Education</h2>
          <div className="mt-7 space-y-8">
            <div className="border-l-4 border-[#e46f70] pl-5">
              <p className="m-0 font-poppins text-sm font-bold tracking-wide text-[#e46f70]">2020 - 2021</p>
              <p className="m-0 mt-1 text-[15px] font-normal tracking-wider">SSC (10th) Hariom Vidhyalaya</p>
            </div>
            <div className="border-l-4 border-[#e46f70] pl-5">
              <p className="m-0 font-poppins text-sm font-bold text-[#e46f70] tracking-wide">2022 - 2023</p>
              <p className="m-0 mt-1 text-[15px] font-normal tracking-wider">HSC (12th) Nalanda Vidhyalaya</p>
            </div>
            <div className="border-l-4 border-[#e46f70] pl-5">
              <p className="m-0 font-poppins text-sm font-bold text-[#e46f70] tracking-wide">2023 - 2026</p>
              <p className="m-0 mt-1 text-[15px] font-normal tracking-wider">BCA (Completed)</p>
               <p className="m-0 mt-1 text-[15px] font-normal tracking-wider">Sutex Bank College of Computer Application and Science</p>
            </div>
          </div>

          <div className="education-motion-art absolute bottom-0 left-0 right-0 hidden h-[5.5rem] overflow-hidden rounded-[1rem] border border-[#f7f5f2]/15 bg-[#f7f5f2]/[0.025] md:block" aria-hidden="true">
            <div className="absolute -left-5 -top-12 h-28 w-28 rounded-full border border-[#e46f70]/35" />
            <div className="education-orbit absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e46f70]/55" />
            <div className="education-orbit-reverse absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f7f5f2]/20" />
            <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e46f70] shadow-[0_0_22px_#e46f70]" />
            <span className="education-particle absolute left-[22%] top-[30%] h-2 w-2 rounded-full bg-[#f7f5f2]" />
            <span className="education-particle education-particle--delay absolute bottom-[26%] right-[20%] h-1.5 w-1.5 rounded-full bg-[#e46f70]" />
            <div className="absolute left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#e46f70]/70 to-transparent" />
          </div>
        </div>

        <div>
          <h2 className="m-0 text-[clamp(2.25rem,3.5vw,4.75rem)] font-extrabold leading-[0.92]">Work Experience</h2>
          <div className="mt-7 space-y-8">
            <article className="border-b border-[#f7f5f2]/30 pb-4">
              <p className="m-0 text-base tracking-wide">Video Editing / Social Media Manager 2025 - 2026</p>
              <h3 className="m-0 mt-1 text-lg font-bold text-[#e46f70]">Let's Automation</h3>
              <p className="m-0 mt-1 max-w-2xl text-[14px] leading-relaxed text-[#f7f5f2]/85 tracking-wider">Created social-media-ready video content with a focus on clean editing, smooth transitions, sound synchronization, captions, and visual effects. Worked on promotional and engaging video projects while maintaining a professional and consistent visual style.</p>
            </article>
            <article className="pb-1">
              <p className="m-0 text-base tracking-wide">Video Editing 2025 - 2026</p>
              <h3 className="m-0 mt-1 text-lg font-bold text-[#e46f70]">Jaherat Box</h3>
              <p className="m-0 mt-1 max-w-2xl text-[14px] leading-relaxed text-[#f7f5f2]/85 tracking-wider">I am Currently working as a Video Editor and Motion Graphics Designer, creating engaging and professional video content for various projects. Responsible for video editing, motion graphics, visual effects, transitions, text animations, sound design, and color enhancement. Focused on delivering clean, creative, and high-quality visuals that effectively communicate the purpose of each project.</p>
            </article>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1500px] border-t border-[#f7f5f2]/20 px-5 py-[clamp(3rem,3vw,6rem)] sm:px-10 lg:px-[4vw]">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="m-0 mb-4 font-poppins text-[0.75rem] font-medium uppercase tracking-wider text-[#e46f70]">What I bring to every frame</p>
            <h2 className="m-0 max-w-3xl text-[clamp(2rem,3.8vw,5rem)] font-extrabold leading-[0.9]">Expertise<span className="text-[#e46f70]">.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group flex items-center gap-4 border border-[#f7f5f2]/15 bg-[#f7f5f2]/[0.03] p-5 transition hover:border-[#e46f70]/70 hover:bg-[#e46f70]/10">
            <span className="flex h-3 w-3 shrink-0 rounded-full bg-[#e46f70] shadow-[0_0_18px_#e46f70]" />
            <span className="text-base tracking-wide font-semibold">Video Editing</span>
          </div>
          <div className="group flex items-center gap-4 border border-[#f7f5f2]/15 bg-[#f7f5f2]/[0.03] p-5 transition hover:border-[#e46f70]/70 hover:bg-[#e46f70]/10">
            <span className="flex h-3 w-3 shrink-0 rounded-full bg-[#e46f70] shadow-[0_0_18px_#e46f70]" />
            <span className="text-base tracking-wide font-semibold">Motion Graphics</span>
          </div>
          <div className="group flex items-center gap-4 border border-[#f7f5f2]/15 bg-[#f7f5f2]/[0.03] p-5 transition hover:border-[#e46f70]/70 hover:bg-[#e46f70]/10">
            <span className="flex h-3 w-3 shrink-0 rounded-full bg-[#e46f70] shadow-[0_0_18px_#e46f70]" />
            <span className="text-base tracking-wide   font-semibold">Social Media Content</span>
          </div>
          <div className="group flex items-center gap-4 border border-[#f7f5f2]/15 bg-[#f7f5f2]/[0.03] p-5 transition hover:border-[#e46f70]/70 hover:bg-[#e46f70]/10">
            <span className="flex h-3 w-3 shrink-0 rounded-full bg-[#e46f70] shadow-[0_0_18px_#e46f70]" />
            <span className="text-base tracking-wide font-semibold">Creative Storytelling</span>
          </div>
          <div className="group flex items-center gap-4 border border-[#f7f5f2]/15 bg-[#f7f5f2]/[0.03] p-5 transition hover:border-[#e46f70]/70 hover:bg-[#e46f70]/10">
            <span className="flex h-3 w-3 shrink-0 rounded-full bg-[#e46f70] shadow-[0_0_18px_#e46f70]" />
            <span className="text-base tracking-wide font-semibold">Brand Content</span>
          </div>
          <div className="group flex items-center gap-4 border border-[#f7f5f2]/15 bg-[#f7f5f2]/[0.03] p-5 transition hover:border-[#e46f70]/70 hover:bg-[#e46f70]/10">
            <span className="flex h-3 w-3 shrink-0 rounded-full bg-[#e46f70] shadow-[0_0_18px_#e46f70]" />
            <span className="text-base tracking-wide font-semibold">Reels &amp; Commercials</span>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="m-0 text-[clamp(2rem,3.7vw,3.8rem)] font-extrabold leading-none">Software Proficiency<span className="text-[#e46f70]">.</span></h2>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="mb-3 flex justify-between text-lg"><span className='tracking-wide'>Adobe After Effects</span><span className="font-poppins text-sm text-[#e46f70]">80%</span></div>
              <div className="h-2 rounded-full bg-[#f7f5f2]/20"><div className="h-full w-[90%] rounded-full bg-[#e46f70] shadow-[0_0_14px_rgba(228,111,112,0.55)]" /></div>
            </div>
            <div>
              <div className="mb-3 flex justify-between text-lg"><span className='tracking-wide'>Adobe Premiere Pro</span><span className="font-poppins text-sm text-[#e46f70]">92%</span></div>
              <div className="h-2 rounded-full bg-[#f7f5f2]/20"><div className="h-full w-[92%] rounded-full bg-[#e46f70] shadow-[0_0_14px_rgba(228,111,112,0.55)]" /></div>
            </div>
            <div>
              <div className="mb-3 flex justify-between text-lg"><span className='tracking-wide'>CapCut</span><span className="font-poppins text-sm text-[#e46f70]">88%</span></div>
              <div className="h-2 rounded-full bg-[#f7f5f2]/20"><div className="h-full w-[88%] rounded-full bg-[#e46f70] shadow-[0_0_14px_rgba(228,111,112,0.55)]" /></div>
            </div>
            {/* <div>
              <div className="mb-3 flex justify-between text-lg"><span className='tracking-wide'>Adobe Photoshop</span><span className="font-poppins text-sm text-[#e46f70]">86%</span></div>
              <div className="h-2 rounded-full bg-[#f7f5f2]/20"><div className="h-full w-[86%] rounded-full bg-[#e46f70] shadow-[0_0_14px_rgba(228,111,112,0.55)]" /></div>
            </div>
            <div>
              <div className="mb-3 flex justify-between text-lg"><span className='tracking-wide'>Illustrator</span><span className="font-poppins text-sm text-[#e46f70]">84%</span></div>
              <div className="h-2 rounded-full bg-[#f7f5f2]/20"><div className="h-full w-[84%] rounded-full bg-[#e46f70] shadow-[0_0_14px_rgba(228,111,112,0.55)]" /></div>
            </div> */}
            <div>
              <div className="mb-3 flex justify-between text-lg"><span className='tracking-wide'>DaVinci Resolve</span><span className="font-poppins text-sm text-[#e46f70]">76%</span></div>
              <div className="h-2 rounded-full bg-[#f7f5f2]/20"><div className="h-full w-[76%] rounded-full bg-[#e46f70] shadow-[0_0_14px_rgba(228,111,112,0.55)]" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1500px] border-t border-[#f7f5f2]/20 px-5 py-[clamp(3rem,3vw,6rem)] sm:px-10 lg:px-[4vw]">
        <div className="mb-7 flex items-end justify-between gap-5">
          <div>
            <h2 className="m-0 text-[clamp(2.3rem,3.8vw,5rem)] font-extrabold leading-[0.9]">Contents<span className="text-[#e46f70]">.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <article className="group relative min-h-[15rem] overflow-hidden rounded-[1.25rem] border border-[#f7f5f2]/20 bg-gradient-to-br from-[#9b5556] via-[#4a2b30] to-[#171516] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#e46f70] sm:p-10">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[3rem] border-[#e46f70]/20 blur-sm transition duration-700 group-hover:scale-125" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between gap-12">
              <span className="font-poppins text-sm font-medium tracking-wider text-[#f7f5f2]/70">01 / CONTENT TYPE</span>
              <div>
                <h3 className="m-0 max-w-md text-[clamp(1.65rem,3.2vw,3rem)] font-extrabold leading-none">Social Media Reels</h3>
                <p className="m-0 mt-4 max-w-sm text-sm leading-relaxed text-[#f7f5f2]/70 tracking-wider">Fast, engaging edits built to stop the scroll and keep the story moving.</p>
              </div>
            </div>
          </article>

          <article className="group relative min-h-[15rem] overflow-hidden rounded-[1.25rem] border border-[#f7f5f2]/20 bg-[#f7f5f2] p-7 text-[#201b1b] transition duration-500 hover:-translate-y-2 hover:border-[#e46f70] sm:p-10">
            <div className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full border-[3rem] border-[#e46f70]/20 blur-sm transition duration-700 group-hover:scale-125" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between gap-12">
              <span className="font-poppins text-sm font-medium tracking-wider text-[#9e4b4e]">02 / CONTENT TYPE</span>
              <div>
                <h3 className="m-0 max-w-md text-[clamp(1.65rem,3.2vw,3rem)] font-extrabold leading-none">Motion Graphics</h3>
                <p className="m-0 mt-4 max-w-sm text-sm leading-relaxed text-[#201b1b]/65 tracking-wider">Bold movement, clean design, and visual energy that gives every frame a voice.</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 py-[clamp(3rem,3vw,6rem)] sm:px-10 lg:px-[7vw]">
        <div className="mb-7 flex flex-col items-center gap-4 text-center">
          <div>
            <h2 className="m-0 text-[clamp(2.3rem,3.8vw,5rem)] font-extrabold uppercase leading-[0.9]">Social Media <span className="text-[#e46f70]">Reels</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="group overflow-hidden rounded-[1.25rem] border border-[#f7f5f2]/20 bg-[#0b0b0b]">
            <div className="relative aspect-[9/16] overflow-hidden bg-[#0b0b0b]">
              <ReelPlayer src={socialReelOne} label="Social media reel one" />
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#111111]/75 px-3 py-1 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-[#f7f5f2]">01 / Reel</span>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[1.25rem] border border-[#f7f5f2]/20 bg-[#0b0b0b]">
            <div className="relative aspect-[9/16] overflow-hidden bg-[#0b0b0b]">
              <ReelPlayer src={socialReelTwo} label="Social media reel two" />
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#111111]/75 px-3 py-1 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-[#f7f5f2]">02 / Reel</span>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[1.25rem] border border-[#f7f5f2]/20 bg-[#0b0b0b]">
            <div className="relative aspect-[9/16] overflow-hidden bg-[#0b0b0b]">
              <ReelPlayer src={socialReelThree} label="Social media reel three" />
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#111111]/75 px-3 py-1 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-[#f7f5f2]">03 / Reel</span>
            </div>
          </article>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1500px] border-t border-[#f7f5f2]/20 px-5 py-[clamp(3rem,3vw,6rem)] sm:px-10 lg:px-[7vw]">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <div>
            <h2 className="m-0 text-[clamp(2.3rem,3.8vw,5rem)] font-extrabold uppercase leading-[0.9]">Motion <span className="text-[#e46f70]">Graphics</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="group overflow-hidden rounded-[1.25rem] border border-[#e46f70]/40 bg-[#211719]">
            <div className="relative aspect-[9/16] overflow-hidden bg-[#302022]">
              <ReelPlayer src={motionReelOne} label="Motion graphics video one" />
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#111111]/75 px-3 py-1 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-[#f7f5f2]">01 / Motion</span>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[1.25rem] border border-[#e46f70]/40 bg-[#211719]">
            <div className="relative aspect-[9/16] overflow-hidden bg-[#302022]">
              <ReelPlayer src={motionReelTwo} label="Motion graphics video two" />
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#111111]/75 px-3 py-1 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-[#f7f5f2]">02 / Motion</span>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[1.25rem] border border-[#e46f70]/40 bg-[#211719]">
            <div className="relative aspect-[9/16] overflow-hidden bg-[#302022]">
              <ReelPlayer src={motionReelThree} label="Motion graphics video three" />
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#111111]/75 px-3 py-1 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-[#f7f5f2]">03 / Motion</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
