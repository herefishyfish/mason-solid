export default function Claymorphism() {
  return (
    <>
      <actionbar title="Claymorphism" />
      <div style={{ 'background-color': '#f5f0ff', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* Design studio card */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#5a3d8a', 'margin-bottom': '10' }}>Card</p>

        <div style={{ 'background-color': '#f0e6ff', 'border-radius': '24', padding: '22', 'margin-bottom': '16', 'box-shadow': '8px 8px 20px rgba(160, 120, 220, 0.25), inset 0 -4px 8px rgba(0, 0, 0, 0.06), inset 0 4px 8px rgba(255, 255, 255, 0.7)' }}>
          <div style={{ display: 'flex', 'flex-direction': 'row', 'align-items': 'center', gap: '14' }}>
            <div style={{ width: '56', height: '56', 'border-radius': '18', 'background-color': '#d4b8ff', 'box-shadow': '4px 4px 12px rgba(160, 120, 220, 0.3), inset 0 -3px 6px rgba(0, 0, 0, 0.08), inset 0 3px 6px rgba(255, 255, 255, 0.6)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ 'font-size': '24' }}>🎨</p>
            </div>
            <div style={{ 'flex-grow': '1' }}>
              <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#5a3d8a' }}>Design Studio</p>
              <p style={{ 'font-size': '11', color: '#8a6ebd' }}>Create something beautiful</p>
            </div>
          </div>
        </div>

        {/* Stat bubbles */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#5a3d8a', 'margin-bottom': '10' }}>Stats</p>

        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '12', 'margin-bottom': '16' }}>
          <div style={{ 'flex-grow': '1', 'background-color': '#ffd6e0', 'border-radius': '20', padding: '18', 'box-shadow': '6px 6px 16px rgba(220, 120, 150, 0.25), inset 0 -3px 6px rgba(0, 0, 0, 0.06), inset 0 3px 6px rgba(255, 255, 255, 0.6)', display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
            <p style={{ 'font-size': '26', 'font-weight': 'bold', color: '#c0506e' }}>♥</p>
            <p style={{ 'font-size': '10', color: '#c0506e', 'margin-top': '4' }}>Likes</p>
          </div>
          <div style={{ 'flex-grow': '1', 'background-color': '#d6f5e0', 'border-radius': '20', padding: '18', 'box-shadow': '6px 6px 16px rgba(100, 180, 130, 0.25), inset 0 -3px 6px rgba(0, 0, 0, 0.06), inset 0 3px 6px rgba(255, 255, 255, 0.6)', display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
            <p style={{ 'font-size': '26', 'font-weight': 'bold', color: '#3d8a5a' }}>✦</p>
            <p style={{ 'font-size': '10', color: '#3d8a5a', 'margin-top': '4' }}>Stars</p>
          </div>
          <div style={{ 'flex-grow': '1', 'background-color': '#d6ecff', 'border-radius': '20', padding: '18', 'box-shadow': '6px 6px 16px rgba(100, 150, 220, 0.25), inset 0 -3px 6px rgba(0, 0, 0, 0.06), inset 0 3px 6px rgba(255, 255, 255, 0.6)', display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
            <p style={{ 'font-size': '26', 'font-weight': 'bold', color: '#4070b0' }}>◆</p>
            <p style={{ 'font-size': '10', color: '#4070b0', 'margin-top': '4' }}>Gems</p>
          </div>
        </div>

        {/* Buttons */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#5a3d8a', 'margin-bottom': '10' }}>Buttons</p>

        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '10' }}>
          <div style={{ 'flex-grow': '1', height: '48', 'border-radius': '16', 'background-color': '#ffe0b2', 'box-shadow': '5px 5px 14px rgba(200, 150, 80, 0.3), inset 0 -3px 6px rgba(0, 0, 0, 0.06), inset 0 3px 6px rgba(255, 255, 255, 0.6)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ 'font-size': '13', color: '#a06830', 'font-weight': 'bold' }}>Warm</p>
          </div>
          <div style={{ 'flex-grow': '1', height: '48', 'border-radius': '16', 'background-color': '#b2f0e0', 'box-shadow': '5px 5px 14px rgba(80, 180, 160, 0.3), inset 0 -3px 6px rgba(0, 0, 0, 0.06), inset 0 3px 6px rgba(255, 255, 255, 0.6)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ 'font-size': '13', color: '#2a8a70', 'font-weight': 'bold' }}>Cool</p>
          </div>
          <div style={{ 'flex-grow': '1', height: '48', 'border-radius': '16', 'background-color': '#f0d6ff', 'box-shadow': '5px 5px 14px rgba(160, 120, 200, 0.3), inset 0 -3px 6px rgba(0, 0, 0, 0.06), inset 0 3px 6px rgba(255, 255, 255, 0.6)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ 'font-size': '13', color: '#7a4eaa', 'font-weight': 'bold' }}>Soft</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
