export default function Grid() {
  return (
    <>
      <actionbar title="Grid Layout" />
      <div style={{ 'background-color': '#fafafa', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* 2-column grid */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>2-Column Grid</p>
        <div style={{ display: 'grid', 'grid-template-columns': '1fr 1fr', gap: '10', 'margin-bottom': '20' }}>
          <div style={{ height: '80', 'background-color': '#0984E3', 'border-radius': '12', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>1</p>
          </div>
          <div style={{ height: '80', 'background-color': '#6C5CE7', 'border-radius': '12', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>2</p>
          </div>
          <div style={{ height: '80', 'background-color': '#E84393', 'border-radius': '12', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>3</p>
          </div>
          <div style={{ height: '80', 'background-color': '#00B894', 'border-radius': '12', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>4</p>
          </div>
        </div>

        {/* 3-column grid */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>3-Column Grid</p>
        <div style={{ display: 'grid', 'grid-template-columns': '1fr 1fr 1fr', gap: '10', 'margin-bottom': '20' }}>
          <div style={{ height: '70', 'background-color': '#FF6B6B', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>A</p>
          </div>
          <div style={{ height: '70', 'background-color': '#FDCB6E', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: '#333', 'font-size': '12' }}>B</p>
          </div>
          <div style={{ height: '70', 'background-color': '#E17055', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>C</p>
          </div>
          <div style={{ height: '70', 'background-color': '#00B894', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>D</p>
          </div>
          <div style={{ height: '70', 'background-color': '#0984E3', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>E</p>
          </div>
          <div style={{ height: '70', 'background-color': '#6C5CE7', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>F</p>
          </div>
        </div>

        {/* Mixed column widths */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>Mixed Columns (1fr 2fr 1fr)</p>
        <div style={{ display: 'grid', 'grid-template-columns': '1fr 2fr 1fr', gap: '10', 'margin-bottom': '20' }}>
          <div style={{ height: '70', 'background-color': '#E84393', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '11' }}>1fr</p>
          </div>
          <div style={{ height: '70', 'background-color': '#1a1a2e', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '11' }}>2fr</p>
          </div>
          <div style={{ height: '70', 'background-color': '#E84393', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '11' }}>1fr</p>
          </div>
        </div>

        {/* Grid with spanning */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>Grid Column Span</p>
        <div style={{ display: 'grid', 'grid-template-columns': '1fr 1fr 1fr', gap: '10', 'margin-bottom': '20' }}>
          <div style={{ 'grid-column': 'span 2', height: '70', 'background-color': '#0984E3', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>span 2</p>
          </div>
          <div style={{ height: '70', 'background-color': '#6C5CE7', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>1</p>
          </div>
          <div style={{ height: '70', 'background-color': '#00B894', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>1</p>
          </div>
          <div style={{ 'grid-column': 'span 2', height: '70', 'background-color': '#FF6B6B', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>span 2</p>
          </div>
        </div>

        {/* Auto rows */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>Grid Auto Rows</p>
        <div style={{ display: 'grid', 'grid-template-columns': '1fr 1fr', 'grid-auto-rows': '60px', gap: '10', 'margin-bottom': '20' }}>
          <div style={{ 'background-color': '#FDCB6E', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: '#333', 'font-size': '12' }}>Auto</p>
          </div>
          <div style={{ 'background-color': '#E17055', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>Auto</p>
          </div>
          <div style={{ 'background-color': '#00B894', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>Auto</p>
          </div>
          <div style={{ 'background-color': '#0984E3', 'border-radius': '10', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>Auto</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
