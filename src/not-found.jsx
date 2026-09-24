import React from 'react'

export default function NotFound() {
  return (
    <main className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-page__aurora not-found-page__aurora--one" aria-hidden="true" />
      <div className="not-found-page__aurora not-found-page__aurora--two" aria-hidden="true" />
      <div className="not-found-page__grid" aria-hidden="true" />

      <section className="not-found-page__content">
        <p className="not-found-page__eyebrow"><span /> Error 404</p>
        <div className="not-found-page__number" aria-hidden="true">
          <span>4</span>
          <span className="not-found-page__zero">
            <i /><i /><i />
          </span>
          <span>4</span>
        </div>
        <h1 id="not-found-title">This frame is missing<span>.</span></h1>
        <p className="not-found-page__copy">The page you&apos;re looking for may have moved, been removed, or never existed.</p>
        <a className="not-found-page__button" href="/">
          Back to home
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </section>

      <p className="not-found-page__footer">PR — Creative Video Editor</p>
    </main>
  )
}
