export default function Brutalism() {
  return (
    <>
      <actionbar title="Brutalism" />
      <div style={{ 'background-color': '#ffffff', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* Hero card */}
        <div style={{ 'background-color': '#ffde00', 'border-radius': '0', padding: '20', 'margin-bottom': '16', 'border': '4 solid #000000', 'box-shadow': '6px 6px 0 #000000' }}>
          <p style={{ 'font-size': '28', 'font-weight': 'bold', color: '#000000' }}>RAW DESIGN</p>
          <p style={{ 'font-size': '13', color: '#333', 'margin-top': '4' }}>No rounded corners. No subtlety. Just impact.</p>
          <div style={{ display: 'flex', 'flex-direction': 'row', gap: '10', 'margin-top': '14' }}>
            <div style={{ 'flex-grow': '1', height: '44', 'background-color': '#000000', 'border-radius': '0', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ 'font-size': '12', color: '#ffde00', 'font-weight': 'bold' }}>CLICK ME</p>
            </div>
            <div style={{ 'flex-grow': '1', height: '44', 'background-color': '#ffffff', 'border-radius': '0', 'border': '3 solid #000000', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ 'font-size': '12', color: '#000000', 'font-weight': 'bold' }}>OR NOT</p>
            </div>
          </div>
        </div>

        {/* Info cards */}
        <div style={{ display: 'flex', 'flex-direction': 'row', gap: '10', 'margin-bottom': '16' }}>
          <div style={{ 'flex-grow': '1', 'background-color': '#ff5555', 'border-radius': '0', padding: '16', 'border': '3 solid #000000', 'box-shadow': '4px 4px 0 #000000' }}>
            <p style={{ 'font-size': '30', 'font-weight': 'bold', color: '#000' }}>!</p>
            <p style={{ 'font-size': '10', color: '#000', 'font-weight': 'bold', 'margin-top': '4' }}>ERROR</p>
          </div>
          <div style={{ 'flex-grow': '1', 'background-color': '#50fa7b', 'border-radius': '0', padding: '16', 'border': '3 solid #000000', 'box-shadow': '4px 4px 0 #000000' }}>
            <p style={{ 'font-size': '30', 'font-weight': 'bold', color: '#000' }}>✓</p>
            <p style={{ 'font-size': '10', color: '#000', 'font-weight': 'bold', 'margin-top': '4' }}>DONE</p>
          </div>
          <div style={{ 'flex-grow': '1', 'background-color': '#8be9fd', 'border-radius': '0', padding: '16', 'border': '3 solid #000000', 'box-shadow': '4px 4px 0 #000000' }}>
            <p style={{ 'font-size': '30', 'font-weight': 'bold', color: '#000' }}>?</p>
            <p style={{ 'font-size': '10', color: '#000', 'font-weight': 'bold', 'margin-top': '4' }}>INFO</p>
          </div>
        </div>

        {/* List */}
        <div style={{ 'background-color': '#ffffff', 'border-radius': '0', 'border': '3 solid #000000', 'box-shadow': '5px 5px 0 #000000' }}>
          <div style={{ padding: '14', 'border-bottom': '2 solid #000000', display: 'flex', 'flex-direction': 'row', 'align-items': 'center', 'justify-content': 'space-between' }}>
            <p style={{ 'font-size': '13', 'font-weight': 'bold', color: '#000' }}>ITEM ONE</p>
            <p style={{ 'font-size': '12', color: '#000' }}>→</p>
          </div>
          <div style={{ padding: '14', 'border-bottom': '2 solid #000000', display: 'flex', 'flex-direction': 'row', 'align-items': 'center', 'justify-content': 'space-between' }}>
            <p style={{ 'font-size': '13', 'font-weight': 'bold', color: '#000' }}>ITEM TWO</p>
            <p style={{ 'font-size': '12', color: '#000' }}>→</p>
          </div>
          <div style={{ padding: '14', display: 'flex', 'flex-direction': 'row', 'align-items': 'center', 'justify-content': 'space-between' }}>
            <p style={{ 'font-size': '13', 'font-weight': 'bold', color: '#000' }}>ITEM THREE</p>
            <p style={{ 'font-size': '12', color: '#000' }}>→</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
