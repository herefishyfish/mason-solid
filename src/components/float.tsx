export default function Float() {
  return (
    <>
      <actionbar title="Float Layout" />
      <div style={{ 'background-color': '#fafafa', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* Float left */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>float: left</p>
        <div style={{ 'background-color': 'white', 'border-radius': '12', padding: '16', 'margin-bottom': '20', 'box-shadow': '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ float: 'left', width: '80', height: '80', 'background-color': '#0984E3', 'border-radius': '10', 'margin-right': '12', 'margin-bottom': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>L</p>
          </div>
          <p style={{ 'font-size': '13', color: '#555' }}>This text wraps around the floated element on the left. Float is a classic CSS layout technique that allows content to flow around an element. It was widely used before Flexbox and Grid became available.</p>
        </div>

        {/* Float right */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>float: right</p>
        <div style={{ 'background-color': 'white', 'border-radius': '12', padding: '16', 'margin-bottom': '20', 'box-shadow': '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ float: 'right', width: '80', height: '80', 'background-color': '#E84393', 'border-radius': '10', 'margin-left': '12', 'margin-bottom': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>R</p>
          </div>
          <p style={{ 'font-size': '13', color: '#555' }}>This text wraps around the floated element on the right. Mason supports float layout natively, enabling classic document-flow patterns within NativeScript apps.</p>
        </div>

        {/* Multiple floats */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>Multiple Floats</p>
        <div style={{ 'background-color': 'white', 'border-radius': '12', padding: '16', 'margin-bottom': '20', 'box-shadow': '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ float: 'left', width: '60', height: '60', 'background-color': '#6C5CE7', 'border-radius': '8', 'margin-right': '8', 'margin-bottom': '8' }}></div>
          <div style={{ float: 'left', width: '60', height: '60', 'background-color': '#00B894', 'border-radius': '8', 'margin-right': '8', 'margin-bottom': '8' }}></div>
          <div style={{ float: 'left', width: '60', height: '60', 'background-color': '#FDCB6E', 'border-radius': '8', 'margin-right': '8', 'margin-bottom': '8' }}></div>
          <div style={{ float: 'left', width: '60', height: '60', 'background-color': '#FF6B6B', 'border-radius': '8', 'margin-right': '8', 'margin-bottom': '8' }}></div>
          <div style={{ float: 'left', width: '60', height: '60', 'background-color': '#E17055', 'border-radius': '8', 'margin-right': '8', 'margin-bottom': '8' }}></div>
          <p style={{ 'font-size': '13', color: '#555', clear: 'both' }}>Multiple floated elements create a gallery-like layout. Content below uses clear: both to start below.</p>
        </div>

        {/* Float with image-like blocks */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>Article Layout</p>
        <div style={{ 'background-color': 'white', 'border-radius': '12', padding: '16', 'margin-bottom': '20', 'box-shadow': '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ float: 'left', width: '100', height: '100', 'background-color': '#1a1a2e', 'border-radius': '12', 'margin-right': '14', 'margin-bottom': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '24' }}>M</p>
          </div>
          <p style={{ 'font-size': '15', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '4' }}>Mason Layout Engine</p>
          <p style={{ 'font-size': '12', color: '#888', 'margin-bottom': '8' }}>A CSS layout engine for native apps</p>
          <p style={{ 'font-size': '13', color: '#555' }}>Built on Rust-powered Taffy, Mason brings full CSS layout support to NativeScript including Flexbox, Grid, Float, and Absolute positioning. The shared-buffer architecture ensures high performance.</p>
        </div>

        {/* Mixed left/right */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>Left &amp; Right Floats</p>
        <div style={{ 'background-color': 'white', 'border-radius': '12', padding: '16', 'margin-bottom': '20', 'box-shadow': '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ float: 'left', width: '70', height: '70', 'background-color': '#0984E3', 'border-radius': '10', 'margin-right': '12', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>←</p>
          </div>
          <div style={{ float: 'right', width: '70', height: '70', 'background-color': '#E84393', 'border-radius': '10', 'margin-left': '12', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>→</p>
          </div>
          <p style={{ 'font-size': '13', color: '#555' }}>Content flows between left and right floated elements, demonstrating how text adapts to available space in float-based layouts.</p>
        </div>

        </div>
      </div>
    </>
  )
}
