'use client'

import Link from 'next/link'
import { useId, useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, Download, Heart, LockKeyhole, Pause, Play, Sparkles } from 'lucide-react'
import Cat, { type CatAccessory, type CatCoat } from '@/components/buntini/Cat'
import ScrollEngraving from '@/components/site/ScrollEngraving'
import { useBackdropMotion } from '@/components/site/SiteBackdrop'
import { buntini } from '@/lib/buntini'
import './buntini.css'

const coats: { id: CatCoat; name: string; color: string }[] = [
  { id: 'white', name: 'Snowbell', color: '#fffdf8' },
  { id: 'gray', name: 'Silver', color: '#a9b1be' },
  { id: 'tuxedo', name: 'Tuxedo', color: '#39343e' },
  { id: 'calico', name: 'Calico', color: 'linear-gradient(135deg, #fff8e9 35%, #efa65d 35% 65%, #39343e 65%)' },
]
const accessories: { id: CatAccessory; name: string }[] = [
  { id: 'bell', name: 'Bell' }, { id: 'bow', name: 'Bow' },
  { id: 'flowers', name: 'Flowers' }, { id: 'none', name: 'Just me' },
]
const scenes = [
  { label: 'A little focus', prompt: 'Set a timer for 25 minutes.', answer: 'A little room to focus. Your timer is set for 25 minutes.', detail: 'Focus timer', value: '25:00', footer: 'Timers persist in the app, even after a restart.' },
  { label: 'A little clarity', prompt: 'Give me the gist of this page.', answer: 'Here’s the short version: start small, take a proper break, and leave yourself a clear next step.', detail: 'Page summary', value: 'Less scrolling. More understanding.', footer: 'Buntini can read browser context when you allow it.' },
  { label: 'A little help', prompt: 'Remind me to water the plants tomorrow at 9.', answer: 'A small favor for your future self. Shall I add this reminder?', detail: 'Water the plants', value: 'Tomorrow · 9:00 AM', footer: 'Review the details before a reminder is created.' },
]
const brains = [
  { name: 'Apple Intelligence', tag: 'On your Mac', title: 'A brain that feels at home.', body: 'Use Apple Intelligence on a supported Mac with macOS 26 and Apple Intelligence enabled. Your companion’s reasoning runs on your device.', note: 'macOS 26 · Apple Intelligence enabled' },
  { name: 'Local models', tag: 'On your Mac', title: 'Keep your company local.', body: 'Use a Qwen or Gemma model through MLX. Buntini recommends a model for your Mac’s chip and memory and guides you through setup.', note: 'Model setup required · hardware dependent' },
  { name: 'Cloud models', tag: 'Your choice', title: 'Bring your favorite brain.', body: 'Choose Anthropic, OpenAI, or Gemini with your API key and a spending cap, or sign in with your own ChatGPT plan. Local data sharing starts switched off.', note: 'Provider account or API key required' },
]

export default function BuntiniProduct() {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '')
  const [coat, setCoat] = useState<CatCoat>('white')
  const [accessory, setAccessory] = useState<CatAccessory>('bell')
  const [pets, setPets] = useState(0)
  const [motion, setMotion] = useState(true)
  const [scene, setScene] = useState(0)
  const [approved, setApproved] = useState(false)
  const [brain, setBrain] = useState(0)
  const { paused } = useBackdropMotion()
  const selectedScene = scenes[scene]

  return (
    <div className={`theme-page buntini-page ${motion ? '' : 'buntini-still'}`}>
      <section className="bun-hero engraving-scene engraving-scene-page" aria-labelledby="bun-title">
        <ScrollEngraving variant="contact" className="product-etching" />
        <div className="bun-intro">
          <Link href="/projects" className="bun-kicker">02 / BUNTINI <span>DESKTOP COMPANION</span></Link>
          <h1 id="bun-title">A little company.<br /><em>A little superpower.</em></h1>
          <p className="bun-lede">Meet Buntini. A little cat that lives on your Mac, keeps you company, and lends a paw with everyday things. Private by default. Powered by the AI you choose.</p>
          <div className="bun-actions">
            <a className="bun-button bun-button-dark" href={buntini.downloadUrl}><Download size={17} /> Get Buntini for Mac</a>
            <a className="bun-text-link" href="#walkthrough"><Play size={15} /> Watch the 30-second film</a>
          </div>
          <p className="bun-requirements">Apple silicon · macOS 13+ <span>Open source. Made with care.</span></p>
        </div>

        <div id="playground" className="bun-playground">
          <div className="bun-stage-top">
            <span><i /> A SMALL FRIEND FOR YOUR DESKTOP</span>
            <button
              type="button"
              onClick={() => setMotion(!motion)}
              disabled={paused}
              aria-pressed={paused || !motion}
              aria-label={paused ? 'Character animation paused' : motion ? 'Pause character animation' : 'Resume character animation'}
            >
              {paused || !motion ? <Play size={14} aria-hidden /> : <Pause size={14} aria-hidden />}
            </button>
          </div>
          <div className="bun-stage">
            <span className="bun-star bun-star-one" aria-hidden="true">✳</span><span className="bun-star bun-star-two" aria-hidden="true">✦</span>
            <p className="bun-speech" aria-live="polite">{pets === 0 ? 'Oh, hi. I saved you a little space.' : ['Prrr. An excellent use of your time.', 'More of that, please.', 'Officially your desk buddy.'][((pets - 1) % 3)]}<Heart size={15} /></p>
            <button className="bun-cat-button" type="button" onClick={() => setPets(pets + 1)} aria-label="Pet Buntini">
              <span className="bun-cat-art" key={pets}><Cat id={`hero${id}`} alive={false} look={{ coat, accessory, eyes: 'green', motion: 'calm', accent: '#8c79ab' }} /></span>
              <span className="bun-pet-hint">{pets ? 'A happy little purr. Pet again?' : 'Go on, give me a pet.'} <Heart size={12} /></span>
            </button>
            <div className="bun-desktop-dock" aria-hidden="true"><span>✉</span><span>♫</span><span>✓</span><span>▤</span><span><img src="/buntini/icon.svg" alt="" width="40" height="40" /></span></div>
          </div>
          <div className="bun-customize">
            <fieldset><legend>Pick a coat</legend><div className="bun-swatches">{coats.map(item => <button type="button" key={item.id} title={item.name} aria-label={`${item.name} coat`} aria-pressed={coat === item.id} onClick={() => setCoat(item.id)} style={{ background: item.color }}>{coat === item.id && <Check size={15} />}</button>)}</div></fieldset>
            <fieldset><legend>A finishing touch</legend><div className="bun-accessories">{accessories.map(item => <button type="button" key={item.id} aria-pressed={accessory === item.id} onClick={() => setAccessory(item.id)}>{item.name}</button>)}</div></fieldset>
          </div>
        </div>
      </section>

      <div className="bun-values" aria-label="Buntini at a glance"><span><Heart size={16} /> A companion with character</span><span><LockKeyhole size={16} /> Private by default</span><span><Sparkles size={16} /> Your choice of AI</span></div>

      <section id="everyday" className="bun-everyday" aria-labelledby="everyday-title">
        <div className="bun-section-intro"><span className="bun-kicker">01 / SMALL THINGS, NICELY DONE</span><h2 id="everyday-title">Your day, with<br /><em>a little less friction.</em></h2><p>A song, a quick summary, a reminder you would have forgotten. Buntini brings a conversational helping hand to the apps already on your Mac.</p><div className="bun-scene-tabs" aria-label="Example conversations">{scenes.map((item, index) => <button type="button" key={item.label} aria-pressed={scene === index} onClick={() => { setScene(index); setApproved(false) }}>{item.label}<ArrowRight size={15} /></button>)}</div></div>
        <div className="bun-conversation">
          <div className="bun-conversation-bar"><img src="/buntini/icon.svg" alt="" width="32" height="32" /><strong>Buntini</strong><span>INTERACTIVE PREVIEW</span></div>
          <div className="bun-messages" key={scene}>
            <p className="bun-user-message">{selectedScene.prompt}</p>
            <div className="bun-reply"><span>b.</span><p>{selectedScene.answer}</p></div>
            <div className={`bun-result ${scene === 0 ? 'bun-timer' : ''}`}><span>{selectedScene.detail}</span><strong>{selectedScene.value}</strong>{scene === 2 && <button type="button" className="bun-button bun-button-dark" onClick={() => setApproved(!approved)}>{approved ? <><Check size={14} /> Preview approved · reset</> : 'Try the approval step'}</button>}</div>
            <p className="bun-preview-note">{selectedScene.footer}</p>
          </div>
          <div className="bun-demo-caption">Illustrative conversations. This preview doesn’t access your apps or run AI.</div>
        </div>
      </section>

      <section id="walkthrough" className="bun-walkthrough" aria-labelledby="walkthrough-title">
        <div className="bun-walkthrough-heading"><div><span className="bun-kicker">02 / OUT IN THE WILD</span><h2 id="walkthrough-title">Small cat. <em>Actual app.</em></h2></div><span className="bun-film-length">A little introduction · 30 seconds</span></div>
        <div className="bun-film">
          <video controls playsInline preload="metadata" width="3840" height="2160" aria-labelledby="walkthrough-title">
            <source src="/buntini/walkthrough.webm" type="video/webm" />
            Your browser doesn’t support this video. <a href="/buntini/walkthrough.webm">Download the Buntini film</a> to watch it.
          </video>
        </div>
      </section>

      <section className="bun-brain-section" aria-labelledby="brain-title">
        <div className="bun-section-intro"><span className="bun-kicker">03 / SAME CAT. DIFFERENT BRAINS.</span><h2 id="brain-title">Good company.<br /><em>Your choice of AI.</em></h2><p>Keep reasoning on your Mac, or bring a cloud model you already like. Switch brains in the app without changing your companion.</p></div>
        <div className="bun-brain-picker"><div className="bun-brain-tabs" aria-label="AI model options">{brains.map((item, index) => <button type="button" key={item.name} aria-pressed={brain === index} onClick={() => setBrain(index)}>{item.name}</button>)}</div><div className="bun-brain-detail" aria-live="polite"><span className="bun-pill"><i />{brains[brain].tag}</span><h3>{brains[brain].title}</h3><p>{brains[brain].body}</p><span className="bun-brain-note">{brains[brain].note}</span></div></div>
      </section>

      <section className="bun-privacy" aria-labelledby="privacy-title"><div className="bun-privacy-symbol" aria-hidden="true"><LockKeyhole size={30} /><span>YOURS, FIRST.</span></div><div><span className="bun-kicker">04 / A FRIEND WITH BOUNDARIES</span><h2 id="privacy-title">Close company.<br /><em>Clear permissions.</em></h2><p>Conversations and memories stay on your Mac. Keys stay in the macOS Keychain. Cloud models receive local context only when you switch that sharing on.</p><p>Allow apps individually, review proposed reminders, events, notes, and drafts before they run, and keep direct commands simple. Buntini has no analytics or telemetry.</p><a href={buntini.privacyUrl} className="bun-text-link" target="_blank" rel="noopener noreferrer">Read the privacy policy <ArrowUpRight size={15} /></a></div></section>

      <section id="download" className="bun-download" aria-labelledby="download-title"><div className="bun-download-copy"><span className="bun-kicker">05 / MAKE YOURSELF AT HOME</span><h2 id="download-title">Your desktop could<br />use <em>a little Buntini.</em></h2><p>A little more company. A little help with the everyday. A cat that’s very happy you’re here.</p><a className="bun-button bun-button-dark" href={buntini.downloadUrl}><Download size={18} /> Download for macOS <ArrowUpRight size={16} /></a><p className="bun-download-meta">Apple silicon · macOS 13+ · .dmg installer</p></div><div className="bun-install"><img src="/buntini/icon.svg" alt="Buntini app icon" width="88" height="88" /><ol><li><span>01</span><p><strong>Download & open</strong>Open the macOS disk image.</p></li><li><span>02</span><p><strong>Make room in Applications</strong>Drag Buntini into your Applications folder.</p></li><li><span>03</span><p><strong>Say your first hello</strong>Open Buntini and follow the short setup.</p></li></ol><span className="bun-install-note">Apple Intelligence requires macOS 26. Other brains have their own setup requirements.</span></div></section>

      <div className="bun-bottom-links"><Link href="/projects/buntini">Behind the companion <ArrowRight size={15} /></Link><a href={buntini.repository} target="_blank" rel="noopener noreferrer">Explore the source <ArrowUpRight size={15} /></a><a href={buntini.releasesUrl} target="_blank" rel="noopener noreferrer">Release notes <ArrowUpRight size={15} /></a><span>Made by Sagar Das. With a soft spot for cats.</span></div>
    </div>
  )
}
