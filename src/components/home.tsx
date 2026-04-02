import { navigate } from '../navigation'

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
]

export default function Home() {

  return (
    <>
      <actionbar title="Mason Layouts" />
      <div style={{ 'background-color': '#fafafa', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* Hero */}
        <div style={{ 'background-color': '#1a1a2e', 'border-radius': '20', padding: '30', 'margin-bottom': '24', 'box-shadow': '0 12px 40px rgba(26, 26, 46, 0.4)' }}>
          <p style={{ 'font-size': '28', 'font-weight': 'bold', color: 'white' }}>Mason Layouts</p>
          <p style={{ 'font-size': '14', color: 'rgba(255,255,255,0.7)', 'margin-top': '4' }}>Explore CSS layout demos for NativeScript</p>
        </div>

        {/* Page Grid */}
        <div style={{ display: 'grid', 'grid-template-columns': '1fr 1fr', gap: '14' }}>
          {pages.map((page) => (
            <div
              on:tap={() => navigate(page.name)}
              style={{ 'background-color': 'white', 'border-radius': '16', padding: '20', 'box-shadow': '0 4px 16px rgba(0,0,0,0.08)', 'border-top': `4px solid ${page.color}` }}
            >
              <p style={{ 'font-size': '28', 'margin-bottom': '8' }}>{page.icon}</p>
              <p style={{ 'font-size': '17', 'font-weight': 'bold', color: page.color }}>{page.name}</p>
              <p style={{ 'font-size': '12', color: '#888', 'margin-top': '4' }}>{page.desc}</p>
            </div>
          ))}
        </div>

        </div>
      </div>
    </>
  )
}
