import './claymorphism.css'

export default function Claymorphism() {
  return (
    <>
      <actionbar title="Claymorphism" />
      <div class="clay-scroll">
        <div class="page-content">

        {/* Design studio card */}
        <p class="clay-title">Card</p>
        <div class="clay-card">
          <div class="clay-card-row">
            <div class="clay-card-icon">
              <p class="clay-card-icon-text">🎨</p>
            </div>
            <div class="clay-card-body">
              <p class="clay-card-title">Design Studio</p>
              <p class="clay-card-subtitle">Create something beautiful</p>
            </div>
          </div>
        </div>

        {/* Stat bubbles */}
        <p class="clay-title">Stats</p>
        <div class="clay-stats">
          <div class="clay-stat clay-stat-pink">
            <p class="clay-stat-value-pink">♥</p>
            <p class="clay-stat-label-pink">Likes</p>
          </div>
          <div class="clay-stat clay-stat-green">
            <p class="clay-stat-value-green">✦</p>
            <p class="clay-stat-label-green">Stars</p>
          </div>
          <div class="clay-stat clay-stat-blue">
            <p class="clay-stat-value-blue">◆</p>
            <p class="clay-stat-label-blue">Gems</p>
          </div>
        </div>

        {/* Buttons */}
        <p class="clay-title">Buttons</p>
        <div class="clay-buttons">
          <div class="clay-btn clay-btn-warm"><p class="clay-btn-warm-text">Warm</p></div>
          <div class="clay-btn clay-btn-cool"><p class="clay-btn-cool-text">Cool</p></div>
          <div class="clay-btn clay-btn-soft"><p class="clay-btn-soft-text">Soft</p></div>
        </div>

        </div>
      </div>
    </>
  )
}
