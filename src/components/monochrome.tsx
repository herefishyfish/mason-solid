export default function Monochrome() {
  return (
    <>
      <actionbar title="Monochrome" />
      <div style={{ 'background-color': '#f7f7f7', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* Hero */}
        <div style={{ 'background-color': '#1a1a1a', 'border-radius': '20', padding: '30', 'margin-bottom': '20', 'box-shadow': '0 12px 40px rgba(0, 0, 0, 0.25)' }}>
          <p style={{ 'font-size': '28', 'font-weight': 'bold', color: '#ffffff' }}>Monochrome</p>
          <p style={{ 'font-size': '13', color: 'rgba(255,255,255,0.5)', 'margin-top': '4' }}>Single hue, infinite depth</p>
        </div>

        {/* Grayscale cards */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a1a', 'margin-bottom': '10' }}>Grayscale Cards</p>

        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '10', 'margin-bottom': '20' }}>
          <div style={{ 'flex-grow': '1', 'background-color': '#ffffff', 'border-radius': '14', padding: '16', 'box-shadow': '0 4px 16px rgba(0, 0, 0, 0.06)', 'border': '1 solid #e8e8e8' }}>
            <p style={{ 'font-size': '24', 'font-weight': 'bold', color: '#1a1a1a' }}>100</p>
            <p style={{ 'font-size': '10', color: '#999', 'margin-top': '2' }}>Commits</p>
          </div>
          <div style={{ 'flex-grow': '1', 'background-color': '#f0f0f0', 'border-radius': '14', padding: '16', 'box-shadow': '0 4px 16px rgba(0, 0, 0, 0.06)', 'border': '1 solid #e0e0e0' }}>
            <p style={{ 'font-size': '24', 'font-weight': 'bold', color: '#333333' }}>42</p>
            <p style={{ 'font-size': '10', color: '#888', 'margin-top': '2' }}>PRs</p>
          </div>
          <div style={{ 'flex-grow': '1', 'background-color': '#e0e0e0', 'border-radius': '14', padding: '16', 'box-shadow': '0 4px 16px rgba(0, 0, 0, 0.06)', 'border': '1 solid #ccc' }}>
            <p style={{ 'font-size': '24', 'font-weight': 'bold', color: '#444444' }}>7</p>
            <p style={{ 'font-size': '10', color: '#777', 'margin-top': '2' }}>Stars</p>
          </div>
        </div>

        {/* Shade scale */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a1a', 'margin-bottom': '10' }}>Shade Scale</p>

        <div style={{ display: 'flex', 'flex-direction': 'row', height: '50', 'border-radius': '12', overflow: 'hidden', 'margin-bottom': '20' }}>
          <div style={{ 'flex-grow': '1', 'background-color': '#000000' }}></div>
          <div style={{ 'flex-grow': '1', 'background-color': '#1a1a1a' }}></div>
          <div style={{ 'flex-grow': '1', 'background-color': '#333333' }}></div>
          <div style={{ 'flex-grow': '1', 'background-color': '#555555' }}></div>
          <div style={{ 'flex-grow': '1', 'background-color': '#777777' }}></div>
          <div style={{ 'flex-grow': '1', 'background-color': '#999999' }}></div>
          <div style={{ 'flex-grow': '1', 'background-color': '#bbbbbb' }}></div>
          <div style={{ 'flex-grow': '1', 'background-color': '#dddddd' }}></div>
          <div style={{ 'flex-grow': '1', 'background-color': '#f0f0f0' }}></div>
          <div style={{ 'flex-grow': '1', 'background-color': '#ffffff' }}></div>
        </div>

        {/* Profile card */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a1a', 'margin-bottom': '10' }}>Profile</p>

        <div style={{ 'background-color': '#ffffff', 'border-radius': '16', 'margin-bottom': '20', 'box-shadow': '0 2px 12px rgba(0, 0, 0, 0.06)', 'border': '1 solid #eee' }}>
          <div style={{ display: 'flex', 'flex-direction': 'row', 'align-items': 'center', gap: '14', padding: '18', 'border-bottom': '1 solid #f0f0f0' }}>
            <div style={{ width: '48', height: '48', 'border-radius': '24', 'background-color': '#333', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ 'font-size': '20', color: '#fff', 'font-weight': 'bold' }}>M</p>
            </div>
            <div style={{ 'flex-grow': '1' }}>
              <p style={{ 'font-size': '15', 'font-weight': 'bold', color: '#1a1a1a' }}>Mono User</p>
              <p style={{ 'font-size': '11', color: '#aaa' }}>@monochrome</p>
            </div>
          </div>
          <div style={{ padding: '18' }}>
            <p style={{ 'font-size': '13', color: '#666' }}>Less is more. A single hue palette strips away distraction and lets form speak for itself.</p>
          </div>
        </div>

        {/* Buttons */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a1a', 'margin-bottom': '10' }}>Buttons</p>

        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '10', 'margin-bottom': '20' }}>
          <div style={{ 'flex-grow': '1', height: '44', 'border-radius': '10', 'background-color': '#1a1a1a', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ 'font-size': '13', color: '#ffffff', 'font-weight': 'bold' }}>Primary</p>
          </div>
          <div style={{ 'flex-grow': '1', height: '44', 'border-radius': '10', 'background-color': '#e0e0e0', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ 'font-size': '13', color: '#333', 'font-weight': 'bold' }}>Secondary</p>
          </div>
          <div style={{ 'flex-grow': '1', height: '44', 'border-radius': '10', 'background-color': 'transparent', 'border': '2 solid #1a1a1a', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ 'font-size': '13', color: '#1a1a1a', 'font-weight': 'bold' }}>Outline</p>
          </div>
        </div>

        {/* Notifications */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a1a', 'margin-bottom': '10' }}>Notifications</p>

        <div style={{ display: 'flex', 'flex-direction': 'column', gap: '8' }}>
          <div style={{ display: 'flex', 'flex-direction': 'row', 'align-items': 'center', gap: '12', 'background-color': '#ffffff', 'border-radius': '12', padding: '14', 'border': '1 solid #eee', 'border-left': '4 solid #1a1a1a' }}>
            <div style={{ 'flex-grow': '1' }}>
              <p style={{ 'font-size': '13', 'font-weight': 'bold', color: '#1a1a1a' }}>New message</p>
              <p style={{ 'font-size': '11', color: '#999' }}>From design team</p>
            </div>
            <p style={{ 'font-size': '10', color: '#ccc' }}>2m</p>
          </div>
          <div style={{ display: 'flex', 'flex-direction': 'row', 'align-items': 'center', gap: '12', 'background-color': '#ffffff', 'border-radius': '12', padding: '14', 'border': '1 solid #eee', 'border-left': '4 solid #888' }}>
            <div style={{ 'flex-grow': '1' }}>
              <p style={{ 'font-size': '13', 'font-weight': 'bold', color: '#1a1a1a' }}>Build complete</p>
              <p style={{ 'font-size': '11', color: '#999' }}>All checks passed</p>
            </div>
            <p style={{ 'font-size': '10', color: '#ccc' }}>5m</p>
          </div>
          <div style={{ display: 'flex', 'flex-direction': 'row', 'align-items': 'center', gap: '12', 'background-color': '#ffffff', 'border-radius': '12', padding: '14', 'border': '1 solid #eee', 'border-left': '4 solid #ddd' }}>
            <div style={{ 'flex-grow': '1' }}>
              <p style={{ 'font-size': '13', 'font-weight': 'bold', color: '#1a1a1a' }}>Reminder</p>
              <p style={{ 'font-size': '11', color: '#999' }}>Stand-up in 10 min</p>
            </div>
            <p style={{ 'font-size': '10', color: '#ccc' }}>10m</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
