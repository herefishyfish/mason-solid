export default function Neon() {
  return (
    <>
      <actionbar title="Neon / Cyberpunk" />
      <div style={{ 'background-color': '#0a0a1a', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* Hero */}
        <div style={{ 'background-color': '#0a0a1a', 'border-radius': '16', padding: '20', 'margin-bottom': '16', 'box-shadow': '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.05)', 'border': '1 solid rgba(0, 255, 255, 0.4)' }}>
          <p style={{ 'font-size': '22', 'font-weight': 'bold', color: '#00ffff' }}>NEON CITY</p>
          <p style={{ 'font-size': '12', color: 'rgba(0, 255, 255, 0.6)', 'margin-top': '4' }}>Welcome to the grid, runner</p>
          <div style={{ display: 'flex', 'flex-direction': 'row', gap: '10', 'margin-top': '16' }}>
            <div style={{ 'flex-grow': '1', height: '40', 'border-radius': '6', 'background-color': 'transparent', 'border': '1 solid #ff00ff', 'box-shadow': '0 0 10px rgba(255, 0, 255, 0.5), inset 0 0 10px rgba(255, 0, 255, 0.1)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ 'font-size': '11', color: '#ff00ff', 'font-weight': 'bold' }}>HACK</p>
            </div>
            <div style={{ 'flex-grow': '1', height: '40', 'border-radius': '6', 'background-color': 'transparent', 'border': '1 solid #00ff41', 'box-shadow': '0 0 10px rgba(0, 255, 65, 0.5), inset 0 0 10px rgba(0, 255, 65, 0.1)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ 'font-size': '11', color: '#00ff41', 'font-weight': 'bold' }}>BREACH</p>
            </div>
            <div style={{ 'flex-grow': '1', height: '40', 'border-radius': '6', 'background-color': 'transparent', 'border': '1 solid #ffff00', 'box-shadow': '0 0 10px rgba(255, 255, 0, 0.5), inset 0 0 10px rgba(255, 255, 0, 0.1)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ 'font-size': '11', color: '#ffff00', 'font-weight': 'bold' }}>SCAN</p>
            </div>
          </div>
        </div>

        {/* Status card */}
        <div style={{ 'background-color': '#0d0d2b', 'border-radius': '14', padding: '18', 'margin-bottom': '16', 'border-left': '3 solid #ff00ff', 'box-shadow': '0 0 16px rgba(255, 0, 255, 0.2)' }}>
          <div style={{ display: 'flex', 'flex-direction': 'row', 'align-items': 'center', gap: '14' }}>
            <div style={{ width: '48', height: '48', 'border-radius': '24', 'background-color': 'rgba(255, 0, 255, 0.15)', 'border': '1 solid rgba(255, 0, 255, 0.5)', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ 'font-size': '20', color: '#ff00ff' }}>⚡</p>
            </div>
            <div style={{ 'flex-grow': '1' }}>
              <p style={{ 'font-size': '14', 'font-weight': 'bold', color: '#ff00ff' }}>SYSTEM ONLINE</p>
              <p style={{ 'font-size': '11', color: 'rgba(255, 0, 255, 0.5)' }}>Neural link active • Latency 2ms</p>
            </div>
          </div>
          <div style={{ height: '4', 'border-radius': '2', 'background-color': 'rgba(255, 0, 255, 0.15)', 'margin-top': '14' }}>
            <div style={{ width: '78%', height: '4', 'border-radius': '2', 'background-color': '#ff00ff', 'box-shadow': '0 0 10px rgba(255, 0, 255, 0.8)' }}></div>
          </div>
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '8', 'margin-bottom': '16' }}>
          <div style={{ 'flex-grow': '1', 'background-color': '#0a0a1a', 'border-radius': '10', padding: '14', 'border': '1 solid rgba(0, 255, 255, 0.3)', 'box-shadow': '0 0 12px rgba(0, 255, 255, 0.15)', display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
            <p style={{ 'font-size': '22', 'font-weight': 'bold', color: '#00ffff' }}>99</p>
            <p style={{ 'font-size': '9', color: 'rgba(0, 255, 255, 0.5)', 'margin-top': '2' }}>CREDITS</p>
          </div>
          <div style={{ 'flex-grow': '1', 'background-color': '#0a0a1a', 'border-radius': '10', padding: '14', 'border': '1 solid rgba(0, 255, 65, 0.3)', 'box-shadow': '0 0 12px rgba(0, 255, 65, 0.15)', display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
            <p style={{ 'font-size': '22', 'font-weight': 'bold', color: '#00ff41' }}>A+</p>
            <p style={{ 'font-size': '9', color: 'rgba(0, 255, 65, 0.5)', 'margin-top': '2' }}>RANK</p>
          </div>
          <div style={{ 'flex-grow': '1', 'background-color': '#0a0a1a', 'border-radius': '10', padding: '14', 'border': '1 solid rgba(255, 255, 0, 0.3)', 'box-shadow': '0 0 12px rgba(255, 255, 0, 0.15)', display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
            <p style={{ 'font-size': '22', 'font-weight': 'bold', color: '#ffff00' }}>7d</p>
            <p style={{ 'font-size': '9', color: 'rgba(255, 255, 0, 0.5)', 'margin-top': '2' }}>UPTIME</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
