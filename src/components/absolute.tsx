export default function Absolute() {
  return (
    <>
      <actionbar title="Absolute Layout" />
      <div style={{ 'background-color': '#fafafa', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* Basic absolute positioning */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>Absolute Positioning</p>
        <div style={{ position: 'relative', height: '200', 'background-color': 'white', 'border-radius': '14', 'margin-bottom': '20', 'box-shadow': '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ position: 'absolute', top: '10', left: '10', width: '60', height: '60', 'background-color': '#0984E3', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '11' }}>TL</p>
          </div>
          <div style={{ position: 'absolute', top: '10', right: '10', width: '60', height: '60', 'background-color': '#6C5CE7', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '11' }}>TR</p>
          </div>
          <div style={{ position: 'absolute', bottom: '10', left: '10', width: '60', height: '60', 'background-color': '#E84393', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '11' }}>BL</p>
          </div>
          <div style={{ position: 'absolute', bottom: '10', right: '10', width: '60', height: '60', 'background-color': '#00B894', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '11' }}>BR</p>
          </div>
          <div style={{ position: 'absolute', top: '70', left: '50%', 'margin-left': '-40', width: '80', height: '60', 'background-color': '#FDCB6E', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: '#333', 'font-size': '11' }}>Center</p>
          </div>
        </div>

        {/* Overlapping cards */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>Overlapping Elements</p>
        <div style={{ position: 'relative', height: '180', 'margin-bottom': '20' }}>
          <div style={{ position: 'absolute', top: '0', left: '0', width: '200', height: '120', 'background-color': '#0984E3', 'border-radius': '14', padding: '16', 'box-shadow': '0 4px 16px rgba(9, 132, 227, 0.3)' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>Back layer</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', 'font-size': '11' }}>z-index: auto</p>
          </div>
          <div style={{ position: 'absolute', top: '30', left: '40', width: '200', height: '120', 'background-color': '#6C5CE7', 'border-radius': '14', padding: '16', 'box-shadow': '0 4px 16px rgba(108, 92, 231, 0.3)' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>Middle layer</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', 'font-size': '11' }}>Overlaps back</p>
          </div>
          <div style={{ position: 'absolute', top: '60', left: '80', width: '200', height: '120', 'background-color': '#E84393', 'border-radius': '14', padding: '16', 'box-shadow': '0 4px 16px rgba(232, 67, 147, 0.3)' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>Front layer</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', 'font-size': '11' }}>Overlaps middle</p>
          </div>
        </div>

        {/* Badge-style overlay */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>Badge Overlay</p>
        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '20', 'margin-bottom': '20' }}>
          <div style={{ position: 'relative', width: '80', height: '80' }}>
            <div style={{ width: '80', height: '80', 'background-color': '#1a1a2e', 'border-radius': '16', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ color: 'white', 'font-size': '28' }}>M</p>
            </div>
            <div style={{ position: 'absolute', top: '-6', right: '-6', width: '24', height: '24', 'background-color': '#FF6B6B', 'border-radius': '12', display: 'flex', 'align-items': 'center', 'justify-content': 'center', 'box-shadow': '0 2px 6px rgba(255, 107, 107, 0.5)' }}>
              <p style={{ color: 'white', 'font-size': '11', 'font-weight': 'bold' }}>3</p>
            </div>
          </div>

          <div style={{ position: 'relative', width: '80', height: '80' }}>
            <div style={{ width: '80', height: '80', 'background-color': '#0984E3', 'border-radius': '16', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ color: 'white', 'font-size': '28' }}>N</p>
            </div>
            <div style={{ position: 'absolute', top: '-6', right: '-6', width: '24', height: '24', 'background-color': '#00B894', 'border-radius': '12', display: 'flex', 'align-items': 'center', 'justify-content': 'center', 'box-shadow': '0 2px 6px rgba(0, 184, 148, 0.5)' }}>
              <p style={{ color: 'white', 'font-size': '11', 'font-weight': 'bold' }}>✓</p>
            </div>
          </div>

          <div style={{ position: 'relative', width: '80', height: '80' }}>
            <div style={{ width: '80', height: '80', 'background-color': '#6C5CE7', 'border-radius': '16', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ color: 'white', 'font-size': '28' }}>S</p>
            </div>
            <div style={{ position: 'absolute', bottom: '-6', right: '-6', width: '24', height: '24', 'background-color': '#FDCB6E', 'border-radius': '12', display: 'flex', 'align-items': 'center', 'justify-content': 'center', 'box-shadow': '0 2px 6px rgba(253, 203, 110, 0.5)' }}>
              <p style={{ color: '#333', 'font-size': '11', 'font-weight': 'bold' }}>★</p>
            </div>
          </div>
        </div>

        {/* Sticky footer pattern */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>Card with Absolute Footer</p>
        <div style={{ position: 'relative', height: '160', 'background-color': 'white', 'border-radius': '14', 'margin-bottom': '20', 'box-shadow': '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div style={{ padding: '16' }}>
            <p style={{ 'font-size': '17', 'font-weight': 'bold', color: '#1a1a2e' }}>Positioned Content</p>
            <p style={{ 'font-size': '12', color: '#888', 'margin-top': '4' }}>The footer is absolutely positioned at the bottom of this card.</p>
          </div>
          <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', 'background-color': '#1a1a2e', 'border-bottom-left-radius': '14', 'border-bottom-right-radius': '14', padding: '12', display: 'flex', 'flex-direction': 'row', 'justify-content': 'space-between', 'align-items': 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', 'font-size': '12' }}>Absolute footer</p>
            <p style={{ color: '#00B894', 'font-size': '12', 'font-weight': 'bold' }}>View →</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
