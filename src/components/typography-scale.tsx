export default function TypographyScale() {
  return (
    <>
      <actionbar title="Typography Scale" />
      <div style={{ 'background-color': '#fafafa', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* Size ramp */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '12' }}>Size Ramp</p>

        <div style={{ 'background-color': 'white', 'border-radius': '16', padding: '20', 'margin-bottom': '20', 'box-shadow': '0 2px 12px rgba(0,0,0,0.06)' }}>
          <p style={{ 'font-size': '10', color: '#999', 'margin-bottom': '4' }}>10 — Caption</p>
          <p style={{ 'font-size': '10', color: '#333' }}>The quick brown fox jumps over the lazy dog</p>
          <div style={{ height: '1', 'background-color': '#f0f0f0', 'margin-top': '10', 'margin-bottom': '10' }}></div>

          <p style={{ 'font-size': '10', color: '#999', 'margin-bottom': '4' }}>12 — Small</p>
          <p style={{ 'font-size': '12', color: '#333' }}>The quick brown fox jumps over the lazy dog</p>
          <div style={{ height: '1', 'background-color': '#f0f0f0', 'margin-top': '10', 'margin-bottom': '10' }}></div>

          <p style={{ 'font-size': '10', color: '#999', 'margin-bottom': '4' }}>14 — Body</p>
          <p style={{ 'font-size': '14', color: '#333' }}>The quick brown fox jumps over the lazy dog</p>
          <div style={{ height: '1', 'background-color': '#f0f0f0', 'margin-top': '10', 'margin-bottom': '10' }}></div>

          <p style={{ 'font-size': '10', color: '#999', 'margin-bottom': '4' }}>18 — Subtitle</p>
          <p style={{ 'font-size': '18', color: '#333' }}>The quick brown fox jumps</p>
          <div style={{ height: '1', 'background-color': '#f0f0f0', 'margin-top': '10', 'margin-bottom': '10' }}></div>

          <p style={{ 'font-size': '10', color: '#999', 'margin-bottom': '4' }}>24 — Title</p>
          <p style={{ 'font-size': '24', color: '#1a1a2e' }}>The quick brown fox</p>
          <div style={{ height: '1', 'background-color': '#f0f0f0', 'margin-top': '10', 'margin-bottom': '10' }}></div>

          <p style={{ 'font-size': '10', color: '#999', 'margin-bottom': '4' }}>32 — Heading</p>
          <p style={{ 'font-size': '32', 'font-weight': 'bold', color: '#1a1a2e' }}>Quick brown fox</p>
          <div style={{ height: '1', 'background-color': '#f0f0f0', 'margin-top': '10', 'margin-bottom': '10' }}></div>

          <p style={{ 'font-size': '10', color: '#999', 'margin-bottom': '4' }}>42 — Display</p>
          <p style={{ 'font-size': '42', 'font-weight': 'bold', color: '#1a1a2e' }}>Brown fox</p>
        </div>

        {/* Weight variations */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '12' }}>Weight Variations</p>

        <div style={{ 'background-color': 'white', 'border-radius': '16', padding: '20', 'margin-bottom': '20', 'box-shadow': '0 2px 12px rgba(0,0,0,0.06)' }}>
          <p style={{ 'font-size': '18', 'font-weight': '100', color: '#333', 'margin-bottom': '8' }}>Thin 100</p>
          <p style={{ 'font-size': '18', 'font-weight': '300', color: '#333', 'margin-bottom': '8' }}>Light 300</p>
          <p style={{ 'font-size': '18', 'font-weight': '400', color: '#333', 'margin-bottom': '8' }}>Regular 400</p>
          <p style={{ 'font-size': '18', 'font-weight': '500', color: '#333', 'margin-bottom': '8' }}>Medium 500</p>
          <p style={{ 'font-size': '18', 'font-weight': '600', color: '#333', 'margin-bottom': '8' }}>Semibold 600</p>
          <p style={{ 'font-size': '18', 'font-weight': '700', color: '#333', 'margin-bottom': '8' }}>Bold 700</p>
          <p style={{ 'font-size': '18', 'font-weight': '900', color: '#333' }}>Black 900</p>
        </div>

        {/* Letter spacing */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '12' }}>Letter Spacing</p>

        <div style={{ 'background-color': 'white', 'border-radius': '16', padding: '20', 'margin-bottom': '20', 'box-shadow': '0 2px 12px rgba(0,0,0,0.06)' }}>
          <p style={{ 'font-size': '14', 'letter-spacing': '-0.5', color: '#333', 'margin-bottom': '10' }}>Tight spacing (-0.5)</p>
          <p style={{ 'font-size': '14', 'letter-spacing': '0', color: '#333', 'margin-bottom': '10' }}>Normal spacing (0)</p>
          <p style={{ 'font-size': '14', 'letter-spacing': '1', color: '#333', 'margin-bottom': '10' }}>Wide spacing (1)</p>
          <p style={{ 'font-size': '14', 'letter-spacing': '3', color: '#333', 'margin-bottom': '10' }}>Wider spacing (3)</p>
          <p style={{ 'font-size': '12', 'letter-spacing': '6', color: '#999', 'font-weight': 'bold' }}>SPACED OUT (6)</p>
        </div>

        {/* Color contrast */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '12' }}>Color Contrast</p>

        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '10', 'margin-bottom': '20' }}>
          <div style={{ 'flex-grow': '1', 'background-color': '#1a1a2e', 'border-radius': '14', padding: '16' }}>
            <p style={{ 'font-size': '20', 'font-weight': 'bold', color: '#ffffff' }}>Aa</p>
            <p style={{ 'font-size': '10', color: 'rgba(255,255,255,0.5)', 'margin-top': '4' }}>White on dark</p>
          </div>
          <div style={{ 'flex-grow': '1', 'background-color': '#ffffff', 'border-radius': '14', padding: '16', 'border': '1 solid #eee' }}>
            <p style={{ 'font-size': '20', 'font-weight': 'bold', color: '#1a1a2e' }}>Aa</p>
            <p style={{ 'font-size': '10', color: '#999', 'margin-top': '4' }}>Dark on white</p>
          </div>
          <div style={{ 'flex-grow': '1', 'background-color': '#6C5CE7', 'border-radius': '14', padding: '16' }}>
            <p style={{ 'font-size': '20', 'font-weight': 'bold', color: '#ffffff' }}>Aa</p>
            <p style={{ 'font-size': '10', color: 'rgba(255,255,255,0.6)', 'margin-top': '4' }}>On accent</p>
          </div>
        </div>

        {/* Mixed showcase card */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '12' }}>Article Preview</p>

        <div style={{ 'background-color': 'white', 'border-radius': '16', padding: '20', 'box-shadow': '0 2px 12px rgba(0,0,0,0.06)' }}>
          <p style={{ 'font-size': '10', 'letter-spacing': '3', color: '#6C5CE7', 'font-weight': 'bold', 'margin-bottom': '8' }}>FEATURED</p>
          <p style={{ 'font-size': '22', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>The Art of Typography</p>
          <p style={{ 'font-size': '14', color: '#666', 'margin-bottom': '14' }}>Good typography is invisible. Great typography is felt. The right pairing of size, weight, and spacing creates hierarchy that guides the eye naturally.</p>
          <div style={{ height: '1', 'background-color': '#f0f0f0', 'margin-bottom': '12' }}></div>
          <div style={{ display: 'flex', 'flex-direction': 'row', 'justify-content': 'space-between', 'align-items': 'center' }}>
            <p style={{ 'font-size': '11', color: '#aaa' }}>5 min read</p>
            <div style={{ 'background-color': '#6C5CE7', 'border-radius': '12', 'padding-left': '12', 'padding-right': '12', 'padding-top': '5', 'padding-bottom': '5' }}>
              <p style={{ 'font-size': '11', color: 'white', 'font-weight': 'bold' }}>Read</p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
