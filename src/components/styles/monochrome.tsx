import './monochrome.css'

export default function Monochrome() {
  return (
    <>
      <actionbar title="Monochrome" />
      <div class="mono-scroll">
        <div class="page-content">

        {/* Hero */}
        <div class="mono-hero">
          <p class="mono-hero-title">Monochrome</p>
          <p class="mono-hero-subtitle">Single hue, infinite depth</p>
        </div>

        {/* Grayscale cards */}
        <p class="mono-title">Grayscale Cards</p>
        <div class="mono-cards">
          <div class="mono-stat-card mono-stat-white">
            <p class="mono-stat-value-1">100</p>
            <p class="mono-stat-label mono-stat-label-1">Commits</p>
          </div>
          <div class="mono-stat-card mono-stat-light">
            <p class="mono-stat-value-2">42</p>
            <p class="mono-stat-label mono-stat-label-2">PRs</p>
          </div>
          <div class="mono-stat-card mono-stat-gray">
            <p class="mono-stat-value-3">7</p>
            <p class="mono-stat-label mono-stat-label-3">Stars</p>
          </div>
        </div>

        {/* Shade scale */}
        <p class="mono-title">Shade Scale</p>
        <div class="mono-shade-scale">
          <div class="mono-shade mono-shade-0"></div>
          <div class="mono-shade mono-shade-1"></div>
          <div class="mono-shade mono-shade-2"></div>
          <div class="mono-shade mono-shade-3"></div>
          <div class="mono-shade mono-shade-4"></div>
          <div class="mono-shade mono-shade-5"></div>
          <div class="mono-shade mono-shade-6"></div>
          <div class="mono-shade mono-shade-7"></div>
          <div class="mono-shade mono-shade-8"></div>
          <div class="mono-shade mono-shade-9"></div>
        </div>

        {/* Profile card */}
        <p class="mono-title">Profile</p>
        <div class="mono-profile">
          <div class="mono-profile-header">
            <div class="mono-profile-avatar">
              <p class="mono-profile-avatar-text">M</p>
            </div>
            <div class="mono-profile-info">
              <p class="mono-profile-name">Mono User</p>
              <p class="mono-profile-handle">@monochrome</p>
            </div>
          </div>
          <div class="mono-profile-body">
            <p class="mono-profile-text">Less is more. A single hue palette strips away distraction and lets form speak for itself.</p>
          </div>
        </div>

        {/* Buttons */}
        <p class="mono-title">Buttons</p>
        <div class="mono-buttons">
          <div class="mono-btn mono-btn-primary"><p class="mono-btn-primary-text">Primary</p></div>
          <div class="mono-btn mono-btn-secondary"><p class="mono-btn-secondary-text">Secondary</p></div>
          <div class="mono-btn mono-btn-outline"><p class="mono-btn-outline-text">Outline</p></div>
        </div>

        {/* Notifications */}
        <p class="mono-title">Notifications</p>
        <div class="mono-notif-list">
          <div class="mono-notif mono-notif-dark">
            <div class="mono-notif-body">
              <p class="mono-notif-title">New message</p>
              <p class="mono-notif-subtitle">From design team</p>
            </div>
            <p class="mono-notif-time">2m</p>
          </div>
          <div class="mono-notif mono-notif-mid">
            <div class="mono-notif-body">
              <p class="mono-notif-title">Build complete</p>
              <p class="mono-notif-subtitle">All checks passed</p>
            </div>
            <p class="mono-notif-time">5m</p>
          </div>
          <div class="mono-notif mono-notif-light">
            <div class="mono-notif-body">
              <p class="mono-notif-title">Reminder</p>
              <p class="mono-notif-subtitle">Stand-up in 10 min</p>
            </div>
            <p class="mono-notif-time">10m</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
