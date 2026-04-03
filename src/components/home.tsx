import { navigate } from '../navigation'
import './home.css'

const pages = [
  { name: 'Flex', color: '#0984E3', icon: '⬛', desc: 'Flexbox layouts' },
  { name: 'Grid', color: '#6C5CE7', icon: '▦', desc: 'CSS Grid layouts' },
  { name: 'Float', color: '#00B894', icon: '◧', desc: 'Float positioning' },
  { name: 'Absolute', color: '#E84393', icon: '◫', desc: 'Absolute positioning' },
  { name: 'RTL', color: '#E17055', icon: '⇄', desc: 'Right-to-left layout' },
  { name: 'Showcase', color: '#1a1a2e', icon: '★', desc: 'Full showcase demo' },
  { name: 'Skeuomorphism', color: '#3498db', icon: '🎛', desc: 'Realistic 3D controls' },
  { name: 'Neumorphism', color: '#8395a7', icon: '◐', desc: 'Soft UI shadows' },
  { name: 'Neon', color: '#00ffff', icon: '⚡', desc: 'Cyberpunk glow effects' },
  { name: 'Claymorphism', color: '#a55eea', icon: '🎨', desc: 'Soft pastel 3D cards' },
  { name: 'Brutalism', color: '#000000', icon: '■', desc: 'Raw bold design' },
  { name: 'GradientMesh', color: '#667eea', icon: '🌈', desc: 'Layered color orbs' },
  { name: 'Monochrome', color: '#555555', icon: '◑', desc: 'Single-hue palette' },
  { name: 'TypographyScale', color: '#2d3436', icon: 'Aa', desc: 'Font size & weight ramp' },
  { name: 'PseudoStates', color: '#e84393', icon: '◉', desc: 'Active, focus, blur, disabled' },
]

export default function Home() {
  return (
    <>
      <actionbar title="Mason Layouts" />
      <div class="page-scroll">
        <div class="page-content" style="background: blue;">

        {/* Hero */}
        <div class="home-hero">
          <p class="home-hero-title">Mason Layouts</p>
          <p class="home-hero-subtitle">Explore CSS layout demos for NativeScript</p>
        </div>

        {/* Page Grid */}
        <div class="home-grid">
          {pages.map((page) => (
            <div
              class="home-card"
              on:tap={() => navigate(page.name)}
              style={{ 'border-top': `4px solid ${page.color}` }}
            >
              <p class="home-card-icon">{page.icon}</p>
              <p class="home-card-title" style={{ color: page.color }}>{page.name}</p>
              <p class="home-card-desc">{page.desc}</p>
            </div>
          ))}
        </div>

        </div>
      </div>
    </>
  )
}
