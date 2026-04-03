import './neon.css'

export default function Neon() {
  return (
    <>
      <actionbar title="Neon / Cyberpunk" />
      <div class="neon-scroll">
        <div class="page-content">

        {/* Hero */}
        <div class="neon-hero">
          <p class="neon-hero-title">NEON CITY</p>
          <p class="neon-hero-subtitle">Welcome to the grid, runner</p>
          <div class="neon-hero-actions">
            <div class="neon-btn neon-btn-magenta"><p class="neon-btn-magenta-text">HACK</p></div>
            <div class="neon-btn neon-btn-green"><p class="neon-btn-green-text">BREACH</p></div>
            <div class="neon-btn neon-btn-yellow"><p class="neon-btn-yellow-text">SCAN</p></div>
          </div>
        </div>

        {/* Status card */}
        <div class="neon-status">
          <div class="neon-status-row">
            <div class="neon-status-icon">
              <p class="neon-status-icon-text">⚡</p>
            </div>
            <div class="neon-status-body">
              <p class="neon-status-title">SYSTEM ONLINE</p>
              <p class="neon-status-subtitle">Neural link active • Latency 2ms</p>
            </div>
          </div>
          <div class="neon-progress-track">
            <div class="neon-progress-fill"></div>
          </div>
        </div>

        {/* Badges */}
        <div class="neon-badges">
          <div class="neon-badge neon-badge-cyan">
            <p class="neon-badge-value-cyan">99</p>
            <p class="neon-badge-label-cyan">CREDITS</p>
          </div>
          <div class="neon-badge neon-badge-green">
            <p class="neon-badge-value-green">A+</p>
            <p class="neon-badge-label-green">RANK</p>
          </div>
          <div class="neon-badge neon-badge-yellow">
            <p class="neon-badge-value-yellow">7d</p>
            <p class="neon-badge-label-yellow">UPTIME</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
