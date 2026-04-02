export default function RTL() {
  return (
    <>
      <actionbar title="RTL Layout" />
      <div style={{ 'background-color': '#fafafa', 'overflow-y': 'scroll' }}>
        <div style={{ padding: '24', 'padding-bottom': '80' }}>

        {/* LTR vs RTL comparison */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>LTR (Default)</p>
        <div style={{ direction: 'ltr', display: 'flex', 'flex-direction': 'row', gap: '8', 'margin-bottom': '16' }}>
          <div style={{ width: '60', height: '50', 'background-color': '#0984E3', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>1</p>
          </div>
          <div style={{ width: '60', height: '50', 'background-color': '#6C5CE7', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>2</p>
          </div>
          <div style={{ width: '60', height: '50', 'background-color': '#E84393', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>3</p>
          </div>
        </div>

        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>RTL (direction: rtl)</p>
        <div style={{ direction: 'rtl', display: 'flex', 'flex-direction': 'row', gap: '8', 'margin-bottom': '20' }}>
          <div style={{ width: '60', height: '50', 'background-color': '#0984E3', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>1</p>
          </div>
          <div style={{ width: '60', height: '50', 'background-color': '#6C5CE7', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>2</p>
          </div>
          <div style={{ width: '60', height: '50', 'background-color': '#E84393', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-weight': 'bold' }}>3</p>
          </div>
        </div>

        {/* RTL Card */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>RTL Card Layout</p>
        <div style={{ direction: 'rtl', 'background-color': 'white', 'border-radius': '14', padding: '16', 'margin-bottom': '20', 'box-shadow': '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', 'flex-direction': 'row', 'align-items': 'center', gap: '12' }}>
            <div style={{ width: '50', height: '50', 'background-color': '#E17055', 'border-radius': '12', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
              <p style={{ color: 'white', 'font-weight': 'bold' }}>ع</p>
            </div>
            <div style={{ 'flex-grow': '1' }}>
              <p style={{ 'font-size': '15', 'font-weight': 'bold', color: '#1a1a2e' }}>عنوان البطاقة</p>
              <p style={{ 'font-size': '12', color: '#888' }}>هذا نص تجريبي يظهر من اليمين لليسار</p>
            </div>
          </div>
        </div>

        {/* RTL Grid */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>RTL Grid</p>
        <div style={{ direction: 'rtl', display: 'grid', 'grid-template-columns': '1fr 1fr 1fr', gap: '8', 'margin-bottom': '20' }}>
          <div style={{ height: '60', 'background-color': '#FF6B6B', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>أول</p>
          </div>
          <div style={{ height: '60', 'background-color': '#FDCB6E', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: '#333', 'font-size': '12' }}>ثاني</p>
          </div>
          <div style={{ height: '60', 'background-color': '#00B894', 'border-radius': '8', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <p style={{ color: 'white', 'font-size': '12' }}>ثالث</p>
          </div>
        </div>

        {/* RTL Notification list */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>RTL Notifications</p>
        <div style={{ direction: 'rtl', display: 'flex', 'flex-direction': 'column', gap: '8', 'margin-bottom': '20' }}>
          <div style={{ display: 'flex', 'flex-direction': 'row', 'align-items': 'center', gap: '12', 'background-color': 'white', 'border-radius': '12', padding: '14', 'box-shadow': '0 2px 8px rgba(0,0,0,0.05)', 'border-right': '4 solid #00B894' }}>
            <div style={{ 'flex-grow': '1' }}>
              <p style={{ 'font-size': '13', 'font-weight': 'bold', color: '#333' }}>رسالة جديدة</p>
              <p style={{ 'font-size': '11', color: '#999' }}>لديك 3 رسائل غير مقروءة</p>
            </div>
            <p style={{ 'font-size': '10', color: '#ccc' }}>2 د</p>
          </div>
          <div style={{ display: 'flex', 'flex-direction': 'row', 'align-items': 'center', gap: '12', 'background-color': 'white', 'border-radius': '12', padding: '14', 'box-shadow': '0 2px 8px rgba(0,0,0,0.05)', 'border-right': '4 solid #0984E3' }}>
            <div style={{ 'flex-grow': '1' }}>
              <p style={{ 'font-size': '13', 'font-weight': 'bold', color: '#333' }}>تحديث النظام</p>
              <p style={{ 'font-size': '11', color: '#999' }}>تم تحديث التطبيق بنجاح</p>
            </div>
            <p style={{ 'font-size': '10', color: '#ccc' }}>5 د</p>
          </div>
        </div>

        {/* Mixed LTR/RTL */}
        <p style={{ 'font-size': '16', 'font-weight': 'bold', color: '#1a1a2e', 'margin-bottom': '8' }}>Mixed Direction</p>
        <div style={{ 'background-color': 'white', 'border-radius': '14', 'margin-bottom': '20', 'box-shadow': '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ direction: 'ltr', padding: '14', 'border-bottom': '1 solid #f0f0f0' }}>
            <p style={{ 'font-size': '14', 'font-weight': 'bold', color: '#0984E3' }}>English (LTR)</p>
            <p style={{ 'font-size': '12', color: '#666' }}>This text flows left to right</p>
          </div>
          <div style={{ direction: 'rtl', padding: '14', 'border-bottom': '1 solid #f0f0f0' }}>
            <p style={{ 'font-size': '14', 'font-weight': 'bold', color: '#E17055' }}>عربي (RTL)</p>
            <p style={{ 'font-size': '12', color: '#666' }}>هذا النص يتدفق من اليمين لليسار</p>
          </div>
          <div style={{ direction: 'ltr', padding: '14' }}>
            <p style={{ 'font-size': '14', 'font-weight': 'bold', color: '#00B894' }}>Back to LTR</p>
            <p style={{ 'font-size': '12', color: '#666' }}>Direction resets per container</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
