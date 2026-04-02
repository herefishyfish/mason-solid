export default function Neumorphism() {
  return (
    <>
      <actionbar title="Neumorphism" />
      <div style={{ 'background-color': '#e0e5ec', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* Music player card */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#4a4a4a', 'margin-bottom': '10' }}>Music Player</p>

        <div style={{ 'background-color': '#e0e5ec', 'border-radius': '20', padding: '24', 'margin-bottom': '16', 'box-shadow': '8px 8px 16px #b8bec7, -8px -8px 16px #ffffff' }}>
          <div style={{ display: 'flex', 'flex-direction': 'row', 'align-items': 'center', gap: '14' }}>
            <div style={{ width: '52', height: '52', 'border-radius': '26', 'background-color': '#e0e5ec', 'box-shadow': '4px 4px 8px #b8bec7, -4px -4px 8px #ffffff, inset 2px 2px 4px #b8bec7, inset -2px -2px 4px #ffffff', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ 'font-size': '22', color: '#6C5CE7' }}>♫</p>
            </div>
            <div style={{ 'flex-grow': '1' }}>
              <p style={{ 'font-size': '15', 'font-weight': 'bold', color: '#4a4a4a' }}>Now Playing</p>
              <p style={{ 'font-size': '11', color: '#8a8a8a' }}>Midnight City — M83</p>
            </div>
          </div>
          {/* Progress bar */}
          <div style={{ height: '6', 'border-radius': '3', 'background-color': '#e0e5ec', 'box-shadow': 'inset 2px 2px 4px #b8bec7, inset -2px -2px 4px #ffffff', 'margin-top': '18', 'margin-bottom': '14' }}>
            <div style={{ width: '60%', height: '6', 'border-radius': '3', 'background-color': '#6C5CE7', 'box-shadow': '0 0 8px rgba(108, 92, 231, 0.4)' }}></div>
          </div>
          {/* Controls */}
          <div style={{ display: 'flex', 'flex-direction': 'row', 'justify-content': 'center', 'align-items': 'center', gap: '20' }}>
            <div style={{ width: '40', height: '40', 'border-radius': '20', 'background-color': '#e0e5ec', 'box-shadow': '4px 4px 8px #b8bec7, -4px -4px 8px #ffffff', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ 'font-size': '14', color: '#666' }}>⏮</p>
            </div>
            <div style={{ width: '56', height: '56', 'border-radius': '28', 'background-color': '#e0e5ec', 'box-shadow': '6px 6px 12px #b8bec7, -6px -6px 12px #ffffff', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ 'font-size': '20', color: '#6C5CE7' }}>▶</p>
            </div>
            <div style={{ width: '40', height: '40', 'border-radius': '20', 'background-color': '#e0e5ec', 'box-shadow': '4px 4px 8px #b8bec7, -4px -4px 8px #ffffff', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ 'font-size': '14', color: '#666' }}>⏭</p>
            </div>
          </div>
        </div>

        {/* Stat row */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#4a4a4a', 'margin-bottom': '10' }}>Stats</p>

        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '12', 'margin-bottom': '16' }}>
          <div style={{ 'flex-grow': '1', 'background-color': '#e0e5ec', 'border-radius': '16', padding: '16', 'box-shadow': '6px 6px 12px #b8bec7, -6px -6px 12px #ffffff', display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
            <p style={{ 'font-size': '24', 'font-weight': 'bold', color: '#0984E3' }}>48</p>
            <p style={{ 'font-size': '10', color: '#8a8a8a', 'margin-top': '2' }}>Songs</p>
          </div>
          <div style={{ 'flex-grow': '1', 'background-color': '#e0e5ec', 'border-radius': '16', padding: '16', 'box-shadow': '6px 6px 12px #b8bec7, -6px -6px 12px #ffffff', display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
            <p style={{ 'font-size': '24', 'font-weight': 'bold', color: '#E84393' }}>12</p>
            <p style={{ 'font-size': '10', color: '#8a8a8a', 'margin-top': '2' }}>Albums</p>
          </div>
          <div style={{ 'flex-grow': '1', 'background-color': '#e0e5ec', 'border-radius': '16', padding: '16', 'box-shadow': '6px 6px 12px #b8bec7, -6px -6px 12px #ffffff', display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
            <p style={{ 'font-size': '24', 'font-weight': 'bold', color: '#00B894' }}>3h</p>
            <p style={{ 'font-size': '10', color: '#8a8a8a', 'margin-top': '2' }}>Listened</p>
          </div>
        </div>

        {/* Pressed / raised */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#4a4a4a', 'margin-bottom': '10' }}>Pressed vs Raised</p>

        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '12' }}>
          <div style={{ 'flex-grow': '1', height: '48', 'border-radius': '14', 'background-color': '#e0e5ec', 'box-shadow': 'inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ 'font-size': '12', color: '#6C5CE7', 'font-weight': 'bold' }}>Pressed</p>
          </div>
          <div style={{ 'flex-grow': '1', height: '48', 'border-radius': '14', 'background-color': '#e0e5ec', 'box-shadow': '4px 4px 8px #b8bec7, -4px -4px 8px #ffffff', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ 'font-size': '12', color: '#0984E3', 'font-weight': 'bold' }}>Raised</p>
          </div>
          <div style={{ 'flex-grow': '1', height: '48', 'border-radius': '14', 'background-color': '#e0e5ec', 'box-shadow': 'inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ 'font-size': '12', color: '#E84393', 'font-weight': 'bold' }}>Pressed</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
