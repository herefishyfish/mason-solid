import './pseudo-states.css'

export default function PseudoStates() {
  return (
    <>
      <actionbar title="Pseudo States" />
      <div class="pseudo-scroll">
        <div class="page-content">

        {/* Header */}
        <div class="pseudo-header">
          <p class="pseudo-header-title">Pseudo States</p>
          <p class="pseudo-header-subtitle">Testing :active, :focus, :blur, :disabled</p>
        </div>

        {/* Active State */}
        <p class="pseudo-section-label">:active (tap & hold)</p>
        <div class="pseudo-section">
          <button class="pseudo-btn-blue">Tap me — I change color on :active</button>
          <button class="pseudo-btn-green">Tap me — I scale on :active</button>
          <button class="pseudo-btn-yellow">Tap me — yellow to orange on :active</button>
        </div>

        {/* Focus State */}
        <p class="pseudo-section-label">:focus (tap to focus)</p>
        <div class="pseudo-section">
          <input hint="Tap to focus — border turns blue" class="pseudo-input-blue" />
          <input hint="Tap to focus — bg turns purple" class="pseudo-input-purple" />
          <input hint="Tap to focus — green highlight" class="pseudo-input-green" />
        </div>

        {/* Blur State */}
        <p class="pseudo-section-label">:blur (focus then tap away)</p>
        <div class="pseudo-section">
          <input hint="Focus then blur — reverts style" class="pseudo-input-blur-orange" />
          <input hint="Focus then blur — gray border" class="pseudo-input-blur-green" />
        </div>

        {/* Disabled State */}
        <p class="pseudo-section-label">:disabled</p>
        <div class="pseudo-section">
          <button isEnabled={false} class="pseudo-btn-disabled-blue">Disabled button — grayed out</button>
          <button isEnabled={false} class="pseudo-btn-disabled-orange">Disabled — no interaction</button>
          <input hint="Disabled text field" isEnabled={false} class="pseudo-input-disabled" />
        </div>

        {/* Combined States */}
        <p class="pseudo-section-label">Combined states</p>
        <div class="pseudo-section-last">
          <button class="pseudo-btn-combined">Active: color + scale</button>
          <input hint="Focus + blur transitions" class="pseudo-input-combined" />
        </div>

        {/* TextView / TextArea */}
        <p class="pseudo-section-label-top">TextView (textarea)</p>
        <div class="pseudo-section-last">
          <textarea hint="Focus this textarea — blue border" class="pseudo-textarea-blue" />
          <textarea hint="Focus this textarea — purple glow" class="pseudo-textarea-purple" />
          <textarea hint="Disabled textarea" isEnabled={false} class="pseudo-textarea-disabled" />
        </div>

        </div>
      </div>
    </>
  )
}
