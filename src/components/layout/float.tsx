import './float.css'

export default function Float() {
  return (
    <>
      <actionbar title="Float Layout" />
      <div class="page-scroll">
        <div class="page-content">

        {/* Float left */}
        <p class="section-title">float: left</p>
        <div class="float-card">
          <div class="float-left-box">
            <p class="label-white">L</p>
          </div>
          <p class="float-text">This text wraps around the floated element on the left. Float is a classic CSS layout technique that allows content to flow around an element. It was widely used before Flexbox and Grid became available.</p>
        </div>

        {/* Float right */}
        <p class="section-title">float: right</p>
        <div class="float-card">
          <div class="float-right-box">
            <p class="label-white">R</p>
          </div>
          <p class="float-text">This text wraps around the floated element on the right. Mason supports float layout natively, enabling classic document-flow patterns within NativeScript apps.</p>
        </div>

        {/* Multiple floats */}
        <p class="section-title">Multiple Floats</p>
        <div class="float-card">
          <div class="float-gallery-item bg-purple"></div>
          <div class="float-gallery-item bg-green"></div>
          <div class="float-gallery-item bg-yellow"></div>
          <div class="float-gallery-item bg-red"></div>
          <div class="float-gallery-item bg-orange"></div>
          <p class="float-text-clear">Multiple floated elements create a gallery-like layout. Content below uses clear: both to start below.</p>
        </div>

        {/* Float with image-like blocks */}
        <p class="section-title">Article Layout</p>
        <div class="float-card">
          <div class="float-article-image">
            <p class="label-white float-article-icon">M</p>
          </div>
          <p class="float-article-title">Mason Layout Engine</p>
          <p class="float-article-subtitle">A CSS layout engine for native apps</p>
          <p class="float-text">Built on Rust-powered Taffy, Mason brings full CSS layout support to NativeScript including Flexbox, Grid, Float, and Absolute positioning. The shared-buffer architecture ensures high performance.</p>
        </div>

        {/* Mixed left/right */}
        <p class="section-title">Left &amp; Right Floats</p>
        <div class="float-card">
          <div class="float-left-icon">
            <p class="label-white">★</p>
          </div>
          <div class="float-right-icon">
            <p class="label-white">⚡</p>
          </div>
          <p class="float-text">Content flows between left and right floated elements, demonstrating how text adapts to available space in float-based layouts.</p>
        </div>

        </div>
      </div>
    </>
  )
}
