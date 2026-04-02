export default function Skeuomorphism() {
  return (
    <>
      <actionbar title="Skeuomorphism" />
      <div style={{ 'background-color': '#fafafa', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* Volume knobs */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '10' }}>Knobs</p>

        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '20', 'align-items': 'center', 'margin-bottom': '20' }}>
          <div style={{ width: '80', height: '80', 'border-radius': '40', 'background-color': '#d4d4d4', 'box-shadow': '0 6px 12px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -2px 4px rgba(0,0,0,0.2)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <div style={{ width: '60', height: '60', 'border-radius': '30', 'background-color': '#e8e8e8', 'box-shadow': 'inset 0 3px 6px rgba(0,0,0,0.15), inset 0 -2px 4px rgba(255,255,255,0.9)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <div style={{ width: '4', height: '20', 'border-radius': '2', 'background-color': '#999' }}></div>
            </div>
          </div>

          <div style={{ width: '80', height: '80', 'border-radius': '40', 'background-color': '#c0392b', 'box-shadow': '0 6px 12px rgba(0,0,0,0.35), inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(0,0,0,0.3)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <div style={{ width: '50', height: '50', 'border-radius': '25', 'background-color': '#e74c3c', 'box-shadow': 'inset 0 3px 6px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.3)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ color: 'white', 'font-size': '18', 'font-weight': 'bold' }}>●</p>
            </div>
          </div>

          <div style={{ width: '80', height: '80', 'border-radius': '40', 'background-color': '#2c3e50', 'box-shadow': '0 6px 12px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.3)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <div style={{ width: '50', height: '50', 'border-radius': '25', 'background-color': '#34495e', 'box-shadow': 'inset 0 3px 6px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.4)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ color: '#1abc9c', 'font-size': '16', 'font-weight': 'bold' }}>👊</p>
            </div>
          </div>
        </div>

        {/* Toggle switch */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '10' }}>Toggle</p>

        <div style={{ 'background-color': '#dcdde1', 'border-radius': '20', width: '120', height: '44', 'box-shadow': 'inset 0 3px 8px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(255,255,255,0.5)', display: 'flex', 'align-items': 'center', 'padding-left': '4', 'margin-bottom': '20' }}>
          <div style={{ width: '36', height: '36', 'border-radius': '18', 'background-color': '#f5f6fa', 'box-shadow': '0 3px 8px rgba(0,0,0,0.25), inset 0 1px 2px rgba(255,255,255,0.9)' }}></div>
        </div>

        {/* Weather card */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '10' }}>Weather Card</p>

        <div style={{ 'background-color': '#ecf0f1', 'border-radius': '16', padding: '20', 'margin-bottom': '16', 'box-shadow': '0 8px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)', 'border-top': '1px solid rgba(255,255,255,0.9)', 'border-bottom': '1px solid rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', 'flex-direction': 'row', gap: '14', 'align-items': 'center', 'margin-bottom': '14' }}>
            <div style={{ width: '44', height: '44', 'border-radius': '10', 'background-color': '#3498db', 'box-shadow': '0 4px 8px rgba(52,152,219,0.4), inset 0 1px 2px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ color: 'white', 'font-size': '20', 'font-weight': 'bold' }}>☀</p>
            </div>
            <div style={{ 'flex-grow': '1' }}>
              <p style={{ 'font-size': '15', 'font-weight': 'bold', color: '#2c3e50' }}>Weather</p>
              <p style={{ 'font-size': '11', color: '#7f8c8d' }}>San Francisco, CA</p>
            </div>
            <p style={{ 'font-size': '28', 'font-weight': 'bold', color: '#2c3e50' }}>72°</p>
          </div>
          <div style={{ height: '1', 'background-color': 'rgba(0,0,0,0.08)', 'margin-bottom': '12' }}></div>
          <div style={{ display: 'flex', 'flex-direction': 'row', 'justify-content': 'space-between' }}>
            <div style={{ display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
              <p style={{ 'font-size': '10', color: '#95a5a6' }}>Mon</p>
              <p style={{ 'font-size': '14', 'margin-top': '4' }}>🌤</p>
              <p style={{ 'font-size': '12', color: '#2c3e50', 'font-weight': 'bold' }}>68°</p>
            </div>
            <div style={{ display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
              <p style={{ 'font-size': '10', color: '#95a5a6' }}>Tue</p>
              <p style={{ 'font-size': '14', 'margin-top': '4' }}>☁</p>
              <p style={{ 'font-size': '12', color: '#2c3e50', 'font-weight': 'bold' }}>65°</p>
            </div>
            <div style={{ display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
              <p style={{ 'font-size': '10', color: '#95a5a6' }}>Wed</p>
              <p style={{ 'font-size': '14', 'margin-top': '4' }}>☀</p>
              <p style={{ 'font-size': '12', color: '#2c3e50', 'font-weight': 'bold' }}>74°</p>
            </div>
            <div style={{ display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
              <p style={{ 'font-size': '10', color: '#95a5a6' }}>Thu</p>
              <p style={{ 'font-size': '14', 'margin-top': '4' }}>🌧</p>
              <p style={{ 'font-size': '12', color: '#2c3e50', 'font-weight': 'bold' }}>61°</p>
            </div>
            <div style={{ display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
              <p style={{ 'font-size': '10', color: '#95a5a6' }}>Fri</p>
              <p style={{ 'font-size': '14', 'margin-top': '4' }}>☀</p>
              <p style={{ 'font-size': '12', color: '#2c3e50', 'font-weight': 'bold' }}>70°</p>
            </div>
          </div>
        </div>

        {/* Raised pill buttons */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '10' }}>Pill Buttons</p>

        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '10' }}>
          <div style={{ 'flex-grow': '1', height: '44', 'border-radius': '22', 'background-color': '#27ae60', 'box-shadow': '0 4px 0 #1e8449, 0 6px 12px rgba(0,0,0,0.2)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '13', 'font-weight': 'bold' }}>Accept</p>
          </div>
          <div style={{ 'flex-grow': '1', height: '44', 'border-radius': '22', 'background-color': '#e74c3c', 'box-shadow': '0 4px 0 #c0392b, 0 6px 12px rgba(0,0,0,0.2)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '13', 'font-weight': 'bold' }}>Decline</p>
          </div>
          <div style={{ 'flex-grow': '1', height: '44', 'border-radius': '22', 'background-color': '#f39c12', 'box-shadow': '0 4px 0 #d68910, 0 6px 12px rgba(0,0,0,0.2)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '13', 'font-weight': 'bold' }}>Maybe</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
