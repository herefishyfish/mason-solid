import './absolute.css'

export default function Absolute() {
  return (
    <>
      <actionbar title="Absolute Layout" />
      <div class="page-scroll">
        <div class="page-content">

        {/* Basic absolute positioning */}
        <p class="section-title">Absolute Positioning</p>
        <div class="abs-container">
          <div class="abs-box abs-top-left bg-blue"><p class="label-white-xs">TL</p></div>
          <div class="abs-box abs-top-right bg-purple"><p class="label-white-xs">TR</p></div>
          <div class="abs-box abs-bottom-left bg-pink"><p class="label-white-xs">BL</p></div>
          <div class="abs-box abs-bottom-right bg-green"><p class="label-white-xs">BR</p></div>
          <div class="abs-center-box bg-yellow"><p class="label-dark abs-center-label">Center</p></div>
        </div>

        {/* Overlapping cards */}
        <p class="section-title">Overlapping Elements</p>
        <div class="abs-overlap-container">
          <div class="abs-layer abs-layer-back">
            <p class="abs-layer-title">Back layer</p>
            <p class="abs-layer-sub">z-index: auto</p>
          </div>
          <div class="abs-layer abs-layer-mid">
            <p class="abs-layer-title">Middle layer</p>
            <p class="abs-layer-sub">Overlaps back</p>
          </div>
          <div class="abs-layer abs-layer-front">
            <p class="abs-layer-title">Front layer</p>
            <p class="abs-layer-sub">Overlaps middle</p>
          </div>
        </div>

        {/* Badge-style overlay */}
        <p class="section-title">Badge Overlay</p>
        <div class="abs-badge-row">
          <div class="abs-badge-wrap">
            <div class="abs-badge-icon bg-dark"><p class="abs-badge-icon-text">M</p></div>
            <div class="abs-badge abs-badge-top-right abs-badge-red"><p class="abs-badge-text">3</p></div>
          </div>
          <div class="abs-badge-wrap">
            <div class="abs-badge-icon bg-blue"><p class="abs-badge-icon-text">N</p></div>
            <div class="abs-badge abs-badge-top-right abs-badge-green"><p class="abs-badge-text">✓</p></div>
          </div>
          <div class="abs-badge-wrap">
            <div class="abs-badge-icon bg-purple"><p class="abs-badge-icon-text">S</p></div>
            <div class="abs-badge abs-badge-bottom-right abs-badge-yellow"><p class="abs-badge-text-dark">★</p></div>
          </div>
        </div>

        {/* Sticky footer pattern */}
        <p class="section-title">Card with Absolute Footer</p>
        <div class="abs-footer-card">
          <div class="abs-footer-body">
            <p class="abs-footer-title">Positioned Content</p>
            <p class="abs-footer-desc">The footer is absolutely positioned at the bottom of this card.</p>
          </div>
          <div class="abs-footer">
            <p class="abs-footer-label">Absolute footer</p>
            <p class="abs-footer-link">View →</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
