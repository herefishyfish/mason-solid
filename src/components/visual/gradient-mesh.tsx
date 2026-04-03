import './gradient-mesh.css'

export default function GradientMesh() {
  return (
    <>
      <actionbar title="Gradient Mesh" />
      <div class="page-scroll">
        <div class="page-content">

        {/* Aurora card */}
        <p class="section-title">Aurora</p>
        <div class="gradient-aurora">
          <p class="gradient-card-title">Aurora</p>
          <p class="gradient-card-subtitle">Layered radial gradients</p>
        </div>

        {/* Card row */}
        <p class="section-title">Blends</p>
        <div class="gradient-blends">
          <div class="gradient-blend-card gradient-sunset">
            <p class="gradient-blend-title">Sunset</p>
            <p class="gradient-blend-subtitle">Warm blend</p>
          </div>
          <div class="gradient-blend-card gradient-lilac">
            <p class="gradient-blend-title">Lilac</p>
            <p class="gradient-blend-subtitle">Soft violet</p>
          </div>
        </div>

        {/* Ocean card */}
        <p class="section-title">Ocean</p>
        <div class="gradient-ocean">
          <p class="gradient-section-title">Deep Blue</p>
          <p class="gradient-section-subtitle-white">Overlapping cyan radials</p>
        </div>

        {/* Fire card */}
        <p class="section-title">Fire</p>
        <div class="gradient-fire">
          <p class="gradient-section-title">Ember</p>
          <p class="gradient-section-subtitle">Warm radial mesh</p>
        </div>

        {/* Forest card */}
        <p class="section-title">Forest</p>
        <div class="gradient-forest">
          <p class="gradient-section-title">Canopy</p>
          <p class="gradient-section-subtitle">Green teal layers</p>
        </div>

        {/* Debug: position test */}
        <p class="section-title">Debug — Position Test</p>
        <p class="gradient-debug-label">If positions work, the bright spot should be in different corners</p>

        <p class="gradient-debug-pos-label">circle at 0% 0% (top-left)</p>
        <div class="gradient-debug-block gradient-debug-tl"></div>

        <p class="gradient-debug-pos-label">circle at 100% 0% (top-right)</p>
        <div class="gradient-debug-block gradient-debug-tr"></div>

        <p class="gradient-debug-pos-label">circle at 0% 100% (bottom-left)</p>
        <div class="gradient-debug-block gradient-debug-bl"></div>

        <p class="gradient-debug-pos-label">circle at 100% 100% (bottom-right)</p>
        <div class="gradient-debug-block gradient-debug-br"></div>

        <p class="gradient-debug-pos-label">circle at 50% 50% (center — control)</p>
        <div class="gradient-debug-block gradient-debug-center"></div>

        <p class="gradient-debug-pos-label">All 4 corners + base combined</p>
        <div class="gradient-debug-combined"></div>

        {/* Palette strip */}
        <p class="section-title">Palette</p>
        <div class="gradient-palette">
          <div class="gradient-palette-1"></div>
          <div class="gradient-palette-2"></div>
          <div class="gradient-palette-3"></div>
          <div class="gradient-palette-4"></div>
          <div class="gradient-palette-5"></div>
        </div>

        </div>
      </div>
    </>
  )
}
