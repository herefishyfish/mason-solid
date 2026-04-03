import './brutalism.css'

export default function Brutalism() {
  return (
    <>
      <actionbar title="Brutalism" />
      <div class="brutal-scroll">
        <div class="page-content">

        {/* Hero card */}
        <div class="brutal-hero">
          <p class="brutal-hero-title">RAW DESIGN</p>
          <p class="brutal-hero-subtitle">No rounded corners. No subtlety. Just impact.</p>
          <div class="brutal-hero-actions">
            <div class="brutal-btn-dark"><p class="brutal-btn-dark-text">CLICK ME</p></div>
            <div class="brutal-btn-outline"><p class="brutal-btn-outline-text">OR NOT</p></div>
          </div>
        </div>

        {/* Info cards */}
        <div class="brutal-cards">
          <div class="brutal-info-card brutal-info-red">
            <p class="brutal-info-icon">!</p>
            <p class="brutal-info-label">ERROR</p>
          </div>
          <div class="brutal-info-card brutal-info-green">
            <p class="brutal-info-icon">✓</p>
            <p class="brutal-info-label">DONE</p>
          </div>
          <div class="brutal-info-card brutal-info-cyan">
            <p class="brutal-info-icon">?</p>
            <p class="brutal-info-label">INFO</p>
          </div>
        </div>

        {/* List */}
        <div class="brutal-list">
          <div class="brutal-list-item">
            <p class="brutal-list-text">ITEM ONE</p>
            <p class="brutal-list-arrow">→</p>
          </div>
          <div class="brutal-list-item">
            <p class="brutal-list-text">ITEM TWO</p>
            <p class="brutal-list-arrow">→</p>
          </div>
          <div class="brutal-list-item-last">
            <p class="brutal-list-text">ITEM THREE</p>
            <p class="brutal-list-arrow">→</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
