export default function GradientMesh() {
  return (
    <>
      <actionbar title="Gradient Mesh" />
      <div style={{ 'background-color': '#fafafa', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* Aurora card */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '10' }}>Aurora</p>

        <div style={{ 'border-radius': '20', height: '140', 'margin-bottom': '16', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%), radial-gradient(circle at 50% 50%, #43e97b 0%, transparent 40%), radial-gradient(circle at 20% 90%, #4facfe 0%, transparent 50%), radial-gradient(circle at 80% 10%, #f093fb 0%, transparent 50%)', 'box-shadow': '0 10px 30px rgba(102, 126, 234, 0.4)', padding: '24' }}>
          <p style={{ 'font-size': '22', 'font-weight': 'bold', color: 'white' }}>Aurora</p>
          <p style={{ 'font-size': '12', color: 'rgba(255,255,255,0.8)', 'margin-top': '4' }}>Layered radial gradients</p>
        </div>

        {/* Card row */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '10' }}>Blends</p>

        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '12', 'margin-bottom': '16' }}>
          <div style={{ 'flex-grow': '1', height: '100', 'border-radius': '16', background: 'linear-gradient(135deg, #fa709a 0%, #f5576c 100%), radial-gradient(circle at 90% 90%, #fee140 0%, transparent 50%)', 'box-shadow': '0 8px 24px rgba(250, 112, 154, 0.35)', padding: '14' }}>
            <p style={{ 'font-size': '16', 'font-weight': 'bold', color: 'white' }}>Sunset</p>
            <p style={{ 'font-size': '10', color: 'rgba(255,255,255,0.7)', 'margin-top': '2' }}>Warm blend</p>
          </div>
          <div style={{ 'flex-grow': '1', height: '100', 'border-radius': '16', background: 'linear-gradient(135deg, #a18cd1 0%, #667eea 100%), radial-gradient(circle at 10% 10%, #fbc2eb 0%, transparent 50%)', 'box-shadow': '0 8px 24px rgba(161, 140, 209, 0.35)', padding: '14' }}>
            <p style={{ 'font-size': '16', 'font-weight': 'bold', color: 'white' }}>Lilac</p>
            <p style={{ 'font-size': '10', color: 'rgba(255,255,255,0.7)', 'margin-top': '2' }}>Soft violet</p>
          </div>
        </div>

        {/* Ocean card */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '10' }}>Ocean</p>

        <div style={{ 'border-radius': '20', height: '120', 'margin-bottom': '16', background: 'linear-gradient(160deg, #4facfe 0%, #00f2fe 100%), radial-gradient(circle at 70% 80%, #0984E3 0%, transparent 40%), radial-gradient(circle at 30% 20%, #00f2fe 0%, transparent 40%)', 'box-shadow': '0 8px 24px rgba(79, 172, 254, 0.35)', padding: '20' }}>
          <p style={{ 'font-size': '20', 'font-weight': 'bold', color: 'white' }}>Deep Blue</p>
          <p style={{ 'font-size': '11', color: 'rgba(255,255,255,0.7)', 'margin-top': '4' }}>Overlapping cyan radials</p>
        </div>

        {/* Fire card */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '10' }}>Fire</p>

        <div style={{ 'border-radius': '20', height: '120', 'margin-bottom': '16', background: 'linear-gradient(135deg, #E17055 0%, #fa709a 100%), radial-gradient(circle at 80% 20%, #fee140 0%, transparent 45%), radial-gradient(circle at 20% 80%, #f5576c 0%, transparent 45%)', 'box-shadow': '0 8px 24px rgba(225, 112, 85, 0.35)', padding: '20' }}>
          <p style={{ 'font-size': '20', 'font-weight': 'bold', color: 'white' }}>Ember</p>
          <p style={{ 'font-size': '11', color: 'rgba(255,255,255,0.7)', 'margin-top': '4' }}>Warm radial mesh</p>
        </div>

        {/* Forest card */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '10' }}>Forest</p>

        <div style={{ 'border-radius': '20', height: '120', 'margin-bottom': '16', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%), radial-gradient(circle at 25% 75%, #00B894 0%, transparent 40%), radial-gradient(circle at 75% 25%, #38f9d7 0%, transparent 40%)', 'box-shadow': '0 8px 24px rgba(67, 233, 123, 0.3)', padding: '20' }}>
          <p style={{ 'font-size': '20', 'font-weight': 'bold', color: 'white' }}>Canopy</p>
          <p style={{ 'font-size': '11', color: 'rgba(255,255,255,0.7)', 'margin-top': '4' }}>Green teal layers</p>
        </div>

        {/* Debug: position test */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '10' }}>Debug — Position Test</p>
        <p style={{ 'font-size': '11', color: '#666', 'margin-bottom': '12' }}>If positions work, the bright spot should be in different corners</p>

        <p style={{ 'font-size': '12', color: '#999', 'margin-bottom': '4' }}>circle at 0% 0% (top-left)</p>
        <div style={{ 'border-radius': '12', height: '80', 'margin-bottom': '8', background: 'radial-gradient(circle at left top, #ff0000 0%, #333333 70%)' }}></div>

        <p style={{ 'font-size': '12', color: '#999', 'margin-bottom': '4' }}>circle at 100% 0% (top-right)</p>
        <div style={{ 'border-radius': '12', height: '80', 'margin-bottom': '8', background: 'radial-gradient(circle at 100% 0%, #00ff00 0%, #333333 70%)' }}></div>

        <p style={{ 'font-size': '12', color: '#999', 'margin-bottom': '4' }}>circle at 0% 100% (bottom-left)</p>
        <div style={{ 'border-radius': '12', height: '80', 'margin-bottom': '8', background: 'radial-gradient(circle at 0% 100%, #0000ff 0%, #333333 70%)' }}></div>

        <p style={{ 'font-size': '12', color: '#999', 'margin-bottom': '4' }}>circle at 100% 100% (bottom-right)</p>
        <div style={{ 'border-radius': '12', height: '80', 'margin-bottom': '8', background: 'radial-gradient(circle at 100% 100%, #ffff00 0%, #333333 70%)' }}></div>

        <p style={{ 'font-size': '12', color: '#999', 'margin-bottom': '4' }}>circle at 50% 50% (center — control)</p>
        <div style={{ 'border-radius': '12', height: '80', 'margin-bottom': '8', background: 'radial-gradient(circle at 50% 50%, #ff00ff 0%, #333333 70%)' }}></div>

        <p style={{ 'font-size': '12', color: '#999', 'margin-bottom': '4' }}>All 4 corners + base combined</p>
        <div style={{ 'border-radius': '12', height: '80', 'margin-bottom': '16', background: '#333333, radial-gradient(0% 0%, #ff0000 0%, transparent 40%), radial-gradient(circle at 100% 0%, #00ff00 0%, transparent 40%), radial-gradient(circle at 0% 100%, #0000ff 0%, transparent 40%), radial-gradient(circle at 100% 100%, #ffff00 0%, transparent 40%)' }}></div>

        {/* Palette strip */}
        <p style={{ 'font-size': '18', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '10' }}>Palette</p>

        <div style={{ display: 'flex', 'flex-direction': 'row', height: '60', 'border-radius': '14', overflow: 'hidden', 'box-shadow': '0 6px 20px rgba(0, 0, 0, 0.12)' }}>
          <div style={{ 'flex-grow': '1', background: 'radial-gradient(circle at 80% 20%, #f093fb 0%, #f5576c 100%)' }}></div>
          <div style={{ 'flex-grow': '1', background: 'radial-gradient(circle at 20% 80%, #00f2fe 0%, #4facfe 100%)' }}></div>
          <div style={{ 'flex-grow': '1', background: 'radial-gradient(circle at 50% 20%, #38f9d7 0%, #43e97b 100%)' }}></div>
          <div style={{ 'flex-grow': '1', background: 'radial-gradient(circle at 80% 80%, #fee140 0%, #fa709a 100%)' }}></div>
          <div style={{ 'flex-grow': '1', background: 'radial-gradient(circle at 20% 20%, #764ba2 0%, #667eea 100%)' }}></div>
        </div>

        </div>
      </div>
    </>
  )
}
