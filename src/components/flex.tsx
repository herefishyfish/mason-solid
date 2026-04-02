export default function Flex() {
  return (
    <>
      <actionbar title="Flex Layout" />
      <div style={{ 'background-color': '#fafafa', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* Row direction */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>flex-direction: row</p>
        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '8', 'margin-bottom': '20' }}>
          <div style={{ 'flex-grow': '1', height: '60', 'background-color': '#0984E3', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '13', 'font-weight': 'bold' }}>1</p>
          </div>
          <div style={{ 'flex-grow': '1', height: '60', 'background-color': '#00B894', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '13', 'font-weight': 'bold' }}>2</p>
          </div>
          <div style={{ 'flex-grow': '1', height: '60', 'background-color': '#E84393', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '13', 'font-weight': 'bold' }}>3</p>
          </div>
        </div>

        {/* Column direction */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>flex-direction: column</p>
        <div style={{ display: 'flex', 'flex-direction': 'column', gap: '8', 'margin-bottom': '20' }}>
          <div style={{ height: '50', 'background-color': '#6C5CE7', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '13', 'font-weight': 'bold' }}>Item A</p>
          </div>
          <div style={{ height: '50', 'background-color': '#FDCB6E', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: '#333', 'font-size': '13', 'font-weight': 'bold' }}>Item B</p>
          </div>
          <div style={{ height: '50', 'background-color': '#FF6B6B', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '13', 'font-weight': 'bold' }}>Item C</p>
          </div>
        </div>

        {/* Flex wrap */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>flex-wrap: wrap</p>
        <div style={{ display: 'flex', 'flex-direction': 'row', 'flex-wrap': 'wrap', gap: '8', 'margin-bottom': '20' }}>
          <div style={{ width: '100', height: '50', 'background-color': '#E17055', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>W:100</p>
          </div>
          <div style={{ width: '100', height: '50', 'background-color': '#00B894', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>W:100</p>
          </div>
          <div style={{ width: '100', height: '50', 'background-color': '#0984E3', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>W:100</p>
          </div>
          <div style={{ width: '100', height: '50', 'background-color': '#6C5CE7', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>W:100</p>
          </div>
          <div style={{ width: '100', height: '50', 'background-color': '#E84393', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>W:100</p>
          </div>
        </div>

        {/* Justify content */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>justify-content: space-between</p>
        <div style={{ display: 'flex', 'flex-direction': 'row', 'justify-content': 'space-between', 'margin-bottom': '20' }}>
          <div style={{ width: '60', height: '60', 'background-color': '#FF6B6B', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>L</p>
          </div>
          <div style={{ width: '60', height: '60', 'background-color': '#FDCB6E', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: '#333', 'font-weight': 'bold' }}>C</p>
          </div>
          <div style={{ width: '60', height: '60', 'background-color': '#00B894', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>R</p>
          </div>
        </div>

        {/* Align items */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>align-items variations</p>
        <div style={{ display: 'flex', 'flex-direction': 'row', 'align-items': 'flex-end', gap: '8', height: '120', 'background-color': 'white', 'border-radius': '12', padding: '12', 'margin-bottom': '20', 'box-shadow': '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ width: '50', height: '40', 'background-color': '#0984E3', 'border-radius': '8' }}></div>
          <div style={{ width: '50', height: '70', 'background-color': '#6C5CE7', 'border-radius': '8' }}></div>
          <div style={{ width: '50', height: '55', 'background-color': '#E84393', 'border-radius': '8' }}></div>
          <div style={{ width: '50', height: '90', 'background-color': '#00B894', 'border-radius': '8' }}></div>
        </div>

        {/* Flex grow ratios */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>flex-grow ratios (1:2:1)</p>
        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '8', 'margin-bottom': '20' }}>
          <div style={{ 'flex-grow': '1', height: '60', 'background-color': '#0984E3', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>grow: 1</p>
          </div>
          <div style={{ 'flex-grow': '2', height: '60', 'background-color': '#E84393', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>grow: 2</p>
          </div>
          <div style={{ 'flex-grow': '1', height: '60', 'background-color': '#00B894', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>grow: 1</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
