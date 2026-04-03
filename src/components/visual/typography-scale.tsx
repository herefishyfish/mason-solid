import './typography-scale.css'

export default function TypographyScale() {
  return (
    <>
      <actionbar title="Typography Scale" />
      <div class="page-scroll">
        <div class="page-content">

        {/* Size ramp */}
        <p class="section-title">Size Ramp</p>
        <div class="typo-card">
          <p class="typo-ramp-label">10 — Caption</p>
          <p class="typo-ramp-10">The quick brown fox jumps over the lazy dog</p>
          <div class="typo-divider"></div>

          <p class="typo-ramp-label">12 — Small</p>
          <p class="typo-ramp-12">The quick brown fox jumps over the lazy dog</p>
          <div class="typo-divider"></div>

          <p class="typo-ramp-label">14 — Body</p>
          <p class="typo-ramp-14">The quick brown fox jumps over the lazy dog</p>
          <div class="typo-divider"></div>

          <p class="typo-ramp-label">18 — Subtitle</p>
          <p class="typo-ramp-18">The quick brown fox jumps</p>
          <div class="typo-divider"></div>

          <p class="typo-ramp-label">24 — Title</p>
          <p class="typo-ramp-24">The quick brown fox</p>
          <div class="typo-divider"></div>

          <p class="typo-ramp-label">32 — Heading</p>
          <p class="typo-ramp-32">Quick brown fox</p>
          <div class="typo-divider"></div>

          <p class="typo-ramp-label">42 — Display</p>
          <p class="typo-ramp-42">Brown fox</p>
        </div>

        {/* Weight variations */}
        <p class="section-title">Weight Variations</p>
        <div class="typo-card">
          <p class="typo-weight-100">Thin 100</p>
          <p class="typo-weight-300">Light 300</p>
          <p class="typo-weight-400">Regular 400</p>
          <p class="typo-weight-500">Medium 500</p>
          <p class="typo-weight-600">Semibold 600</p>
          <p class="typo-weight-700">Bold 700</p>
          <p class="typo-weight-900">Black 900</p>
        </div>

        {/* Heading Elements H1-H6 */}
        <p class="section-title">Heading Elements (H1–H6)</p>
        <div class="typo-card">
          <h1 class="typo-heading">H1 — Main Heading</h1>
          <div class="typo-heading-divider"></div>
          <h2 class="typo-heading">H2 — Section Heading</h2>
          <div class="typo-heading-divider"></div>
          <h3 class="typo-heading">H3 — Subsection Heading</h3>
          <div class="typo-heading-divider"></div>
          <h4 class="typo-heading">H4 — Group Heading</h4>
          <div class="typo-heading-divider"></div>
          <h5 class="typo-heading">H5 — Minor Heading</h5>
          <div class="typo-heading-divider"></div>
          <h6 class="typo-heading-last">H6 — Smallest Heading</h6>
        </div>

        {/* Text Elements */}
        <p class="section-title">Text Elements</p>
        <div class="typo-card">
          <p class="typo-element-label">{'<p>'} — Paragraph</p>
          <p class="typo-paragraph">The quick brown fox jumps over the lazy dog. This is a standard paragraph element used for body text and general content.</p>
          <div class="typo-text-divider-top"></div>

          <p class="typo-element-label">{'<span>'} — Inline text</p>
          <p class="typo-span-container">
            <span class="typo-span-default">This is a span element. </span>
            <span class="typo-span-purple">Spans can be styled differently </span>
            <span class="typo-span-orange">within the same line.</span>
          </p>
          <div class="typo-text-divider"></div>

          <p class="typo-element-label">{'<strong>'} — Strong emphasis</p>
          <strong class="typo-strong">This text uses the strong element for bold emphasis.</strong>
          <div class="typo-text-divider"></div>

          <p class="typo-element-label">{'<b>'} — Bold</p>
          <b class="typo-bold">This text uses the b element for bold styling.</b>
          <div class="typo-text-divider"></div>

          <p class="typo-element-label">{'<code>'} — Code / Monospace</p>
          <code class="typo-code-inline">const greeting = "Hello, World!";</code>
          <div class="typo-text-divider"></div>

          <p class="typo-element-label">{'<blockquote>'} — Blockquote</p>
          <blockquote class="typo-blockquote">"Good typography is invisible. Great typography is felt."</blockquote>
          <div class="typo-text-divider"></div>

          <p class="typo-element-label">{'<a>'} — Anchor / Link</p>
          <a class="typo-link">This is a link-style element using the a tag.</a>
          <div class="typo-text-divider"></div>

          <p class="typo-element-label">{'<li>'} — List item</p>
          <ul class="typo-list">
            <li class="typo-list-item">First list item</li>
            <li class="typo-list-item">Second list item</li>
            <li class="typo-list-item-last">Third list item</li>
          </ul>
          <div class="typo-text-divider"></div>

          <p class="typo-element-label">{'<button>'} — Button text</p>
          <button class="typo-button">Tap this button</button>
          <div class="typo-text-divider"></div>

          <p class="typo-element-label">Highlighted text (via span bg)</p>
          <p class="typo-highlight-text">This sentence has a <span class="typo-highlight-bg">highlighted word</span> inside it.</p>
        </div>

        {/* Code Block Examples */}
        <p class="section-title">Code Styles</p>
        <div class="typo-card">
          <p class="typo-code-label">Inline code</p>
          <p class="typo-paragraph-with-code">
            Use <code class="typo-code-inline-sm">npm install</code> to add packages.
          </p>

          <p class="typo-code-label">Dark code block</p>
          <div class="typo-code-dark">
            <code class="typo-code-dark-text">{'import { createSignal } from "solid-js";'}</code>
            <code class="typo-code-dark-text-mt">{'const [count, setCount] = createSignal(0);'}</code>
            <code class="typo-code-dark-text">{'setCount(count() + 1);'}</code>
          </div>

          <p class="typo-code-label">Light code block</p>
          <div class="typo-code-light">
            <code class="typo-code-light-text">{'<div style={{ display: "flex" }}>'}</code>
            <code class="typo-code-light-text">{'  <p>Hello World</p>'}</code>
            <code class="typo-code-light-text">{'</div>'}</code>
          </div>
        </div>

        {/* Letter spacing */}
        <p class="section-title">Letter Spacing</p>
        <div class="typo-card">
          <p class="typo-spacing-tight">Tight spacing (-0.5)</p>
          <p class="typo-spacing-normal">Normal spacing (0)</p>
          <p class="typo-spacing-wide">Wide spacing (1)</p>
          <p class="typo-spacing-wider">Wider spacing (3)</p>
          <p class="typo-spacing-widest">SPACED OUT (6)</p>
        </div>

        {/* Color contrast */}
        <p class="section-title">Color Contrast</p>
        <div class="typo-contrast-row">
          <div class="typo-contrast-card typo-contrast-dark">
            <p class="typo-contrast-white-lg">Aa</p>
            <p class="typo-contrast-sub-white">White on dark</p>
          </div>
          <div class="typo-contrast-card typo-contrast-light">
            <p class="typo-contrast-dark-lg">Aa</p>
            <p class="typo-contrast-sub-muted">Dark on white</p>
          </div>
          <div class="typo-contrast-card typo-contrast-accent">
            <p class="typo-contrast-white-lg">Aa</p>
            <p class="typo-contrast-sub-accent">On accent</p>
          </div>
        </div>

        {/* Article Preview */}
        <p class="section-title">Article Preview</p>
        <div class="typo-article-card">
          <p class="typo-article-tag">FEATURED</p>
          <p class="typo-article-title">The Art of Typography</p>
          <p class="typo-article-body">Good typography is invisible. Great typography is felt. The right pairing of size, weight, and spacing creates hierarchy that guides the eye naturally.</p>
          <div class="typo-article-divider"></div>
          <div class="typo-article-footer">
            <p class="typo-article-meta">5 min read</p>
            <div class="typo-article-btn">
              <p class="typo-article-btn-text">Read</p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
