import './neumorphism.css'

export default function Neumorphism() {
  return (
    <>
      <actionbar title="Neumorphism" />
      <div class="neumorph-scroll">
        <div class="page-content">

        {/* Music player card */}
        <p class="neumorph-title">Music Player</p>
        <div class="neumorph-card">
          <div class="neumorph-player-header">
            <div class="neumorph-player-disc">
              <p class="neumorph-player-disc-text">♫</p>
            </div>
            <div class="neumorph-player-info">
              <p class="neumorph-player-title">Now Playing</p>
              <p class="neumorph-player-subtitle">Midnight City — M83</p>
            </div>
          </div>
          <div class="neumorph-progress">
            <div class="neumorph-progress-fill"></div>
          </div>
          <div class="neumorph-controls">
            <div class="neumorph-btn-sm"><p class="neumorph-btn-sm-text">⏮</p></div>
            <div class="neumorph-btn-lg"><p class="neumorph-btn-lg-text">▶</p></div>
            <div class="neumorph-btn-sm"><p class="neumorph-btn-sm-text">⏭</p></div>
          </div>
        </div>

        {/* Stat row */}
        <p class="neumorph-title">Stats</p>
        <div class="neumorph-stats">
          <div class="neumorph-stat">
            <p class="neumorph-stat-value-blue">48</p>
            <p class="neumorph-stat-label">Songs</p>
          </div>
          <div class="neumorph-stat">
            <p class="neumorph-stat-value-pink">12</p>
            <p class="neumorph-stat-label">Albums</p>
          </div>
          <div class="neumorph-stat">
            <p class="neumorph-stat-value-green">3h</p>
            <p class="neumorph-stat-label">Listened</p>
          </div>
        </div>

        {/* Pressed / raised */}
        <p class="neumorph-title">Pressed vs Raised</p>
        <div class="neumorph-toggle-row">
          <div class="neumorph-pressed"><p class="neumorph-label-purple">Pressed</p></div>
          <div class="neumorph-raised"><p class="neumorph-label-blue">Raised</p></div>
          <div class="neumorph-pressed"><p class="neumorph-label-pink">Pressed</p></div>
        </div>

        </div>
      </div>
    </>
  )
}
