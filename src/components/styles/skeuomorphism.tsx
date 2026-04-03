import './skeuomorphism.css'

export default function Skeuomorphism() {
  return (
    <>
      <actionbar title="Skeuomorphism" />
      <div class="page-scroll">
        <div class="page-content">

        {/* Volume knobs */}
        <p class="section-title">Knobs</p>
        <div class="skeu-knob-row">
          <div class="skeu-knob-outer skeu-knob-gray">
            <div class="skeu-knob-gray-inner">
              <div class="skeu-knob-indicator"></div>
            </div>
          </div>
          <div class="skeu-knob-outer skeu-knob-red">
            <div class="skeu-knob-red-inner">
              <p class="skeu-knob-red-text">●</p>
            </div>
          </div>
          <div class="skeu-knob-outer skeu-knob-dark">
            <div class="skeu-knob-dark-inner">
              <p class="skeu-knob-dark-text">👊</p>
            </div>
          </div>
        </div>

        {/* Toggle switch */}
        <p class="section-title">Toggle</p>
        <div class="skeu-toggle">
          <div class="skeu-toggle-thumb"></div>
        </div>

        {/* Weather card */}
        <p class="section-title">Weather Card</p>
        <div class="skeu-weather">
          <div class="skeu-weather-header">
            <div class="skeu-weather-icon">
              <p class="skeu-weather-icon-text">☀</p>
            </div>
            <div class="skeu-weather-info">
              <p class="skeu-weather-title">Weather</p>
              <p class="skeu-weather-location">San Francisco, CA</p>
            </div>
            <p class="skeu-weather-temp">72°</p>
          </div>
          <div class="skeu-weather-divider"></div>
          <div class="skeu-weather-forecast">
            <div class="skeu-weather-day">
              <p class="skeu-weather-day-label">Mon</p>
              <p class="skeu-weather-day-icon">🌤</p>
              <p class="skeu-weather-day-temp">68°</p>
            </div>
            <div class="skeu-weather-day">
              <p class="skeu-weather-day-label">Tue</p>
              <p class="skeu-weather-day-icon">☁</p>
              <p class="skeu-weather-day-temp">65°</p>
            </div>
            <div class="skeu-weather-day">
              <p class="skeu-weather-day-label">Wed</p>
              <p class="skeu-weather-day-icon">☀</p>
              <p class="skeu-weather-day-temp">74°</p>
            </div>
            <div class="skeu-weather-day">
              <p class="skeu-weather-day-label">Thu</p>
              <p class="skeu-weather-day-icon">🌧</p>
              <p class="skeu-weather-day-temp">61°</p>
            </div>
            <div class="skeu-weather-day">
              <p class="skeu-weather-day-label">Fri</p>
              <p class="skeu-weather-day-icon">☀</p>
              <p class="skeu-weather-day-temp">70°</p>
            </div>
          </div>
        </div>

        {/* Raised pill buttons */}
        <p class="section-title">Pill Buttons</p>
        <div class="skeu-pills">
          <div class="skeu-pill skeu-pill-green"><p class="skeu-pill-text">Accept</p></div>
          <div class="skeu-pill skeu-pill-red"><p class="skeu-pill-text">Decline</p></div>
          <div class="skeu-pill skeu-pill-yellow"><p class="skeu-pill-text">Maybe</p></div>
        </div>

        </div>
      </div>
    </>
  )
}
