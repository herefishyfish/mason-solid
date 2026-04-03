import './showcase.css'

export default function Showcase() {
  return (
    <>
      <actionbar title="Showcase" />
      <div class="showcase-scroll">
        <div class="page-content">

        {/* Hero Card */}
        <div class="showcase-hero">
          <p class="showcase-hero-title">Mason</p>
          <p class="showcase-hero-subtitle">CSS Layout Engine for NativeScript</p>
          <div class="showcase-hero-tags">
            <div class="showcase-tag"><p class="showcase-tag-text">Flexbox</p></div>
            <div class="showcase-tag"><p class="showcase-tag-text">Grid</p></div>
            <div class="showcase-tag"><p class="showcase-tag-text">Shadows</p></div>
            <div class="showcase-tag"><p class="showcase-tag-text">Transforms</p></div>
          </div>
        </div>

        {/* Stat Cards Row */}
        <div class="showcase-stats-row">
          <div class="showcase-stat-card showcase-stat-blue">
            <p class="showcase-stat-value-blue">184</p>
            <p class="showcase-stat-label">CSS Properties</p>
          </div>
          <div class="showcase-stat-card showcase-stat-green">
            <p class="showcase-stat-value-green">3</p>
            <p class="showcase-stat-label">Platforms</p>
          </div>
          <div class="showcase-stat-card showcase-stat-pink">
            <p class="showcase-stat-value-pink">Rust</p>
            <p class="showcase-stat-label">Powered</p>
          </div>
        </div>

        {/* Profile Card */}
        <div class="showcase-profile">
          <div class="showcase-profile-header">
            <div class="showcase-profile-avatar">
              <p class="showcase-profile-avatar-text">M</p>
            </div>
            <div class="showcase-profile-info">
              <p class="showcase-profile-name">Mason Layout Engine</p>
              <p class="showcase-profile-role">Shared-buffer CSS for native apps</p>
            </div>
          </div>
          <div class="showcase-profile-body">
            <p class="showcase-profile-desc">Full CSS layout support including Flexbox, Grid, Box Shadows, Transforms, Typography, and more. Built on Taffy with a high-performance shared-buffer architecture.</p>
          </div>
          <div class="showcase-profile-footer">
            <div class="showcase-lang">
              <p class="showcase-lang-js">JS</p>
              <p class="showcase-lang-label">TypeScript</p>
            </div>
            <div class="showcase-lang">
              <p class="showcase-lang-kt">Kt</p>
              <p class="showcase-lang-label">Kotlin</p>
            </div>
            <div class="showcase-lang">
              <p class="showcase-lang-sw">Sw</p>
              <p class="showcase-lang-label">Swift</p>
            </div>
            <div class="showcase-lang">
              <p class="showcase-lang-rs">Rs</p>
              <p class="showcase-lang-label">Rust</p>
            </div>
          </div>
        </div>

        {/* Notification Stack */}
        <p class="showcase-glow-label">Activity</p>
        <div class="showcase-notif-list">
          <div class="showcase-notif showcase-notif-green">
            <div class="showcase-notif-body">
              <p class="showcase-notif-title">Build Succeeded</p>
              <p class="showcase-notif-subtitle">All 42 tests passed</p>
            </div>
            <p class="showcase-notif-time">2m ago</p>
          </div>
          <div class="showcase-notif showcase-notif-yellow">
            <div class="showcase-notif-body">
              <p class="showcase-notif-title">Layout Recomputed</p>
              <p class="showcase-notif-subtitle">3 dirty nodes invalidated</p>
            </div>
            <p class="showcase-notif-time">5m ago</p>
          </div>
          <div class="showcase-notif showcase-notif-blue">
            <div class="showcase-notif-body">
              <p class="showcase-notif-title">Style Synced</p>
              <p class="showcase-notif-subtitle">Buffer updated: 560 bytes</p>
            </div>
            <p class="showcase-notif-time">8m ago</p>
          </div>
        </div>

        {/* Color Palette */}
        <p class="showcase-glow-label">Palette</p>
        <div class="showcase-palette">
          <div class="showcase-palette-swatch bg-red"></div>
          <div class="showcase-palette-swatch bg-pink"></div>
          <div class="showcase-palette-swatch bg-purple"></div>
          <div class="showcase-palette-swatch bg-blue"></div>
          <div class="showcase-palette-swatch bg-green"></div>
          <div class="showcase-palette-swatch bg-yellow"></div>
          <div class="showcase-palette-swatch bg-orange"></div>
        </div>

        {/* Layered Shadows */}
        <p class="showcase-glow-label">Layered Shadows</p>
        <div class="showcase-glow-row">
          <div class="showcase-glow-card showcase-glow-purple">
            <p class="showcase-glow-title">Pro</p>
            <p class="showcase-glow-subtitle">Purple glow</p>
          </div>
          <div class="showcase-glow-card showcase-glow-blue">
            <p class="showcase-glow-title">Plus</p>
            <p class="showcase-glow-subtitle">Blue glow</p>
          </div>
          <div class="showcase-glow-card showcase-glow-green">
            <p class="showcase-glow-title">Go</p>
            <p class="showcase-glow-subtitle">Green glow</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
