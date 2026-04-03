import './rtl.css'

export default function RTL() {
  return (
    <>
      <actionbar title="RTL Layout" />
      <div class="page-scroll">
        <div class="page-content">

        {/* LTR vs RTL comparison */}
        <p class="section-title">LTR (Default)</p>
        <div class="rtl-ltr-row">
          <div class="rtl-item bg-blue"><p class="label-white">1</p></div>
          <div class="rtl-item bg-purple"><p class="label-white">2</p></div>
          <div class="rtl-item bg-pink"><p class="label-white">3</p></div>
        </div>

        <p class="section-title">RTL (direction: rtl)</p>
        <div class="rtl-row">
          <div class="rtl-item bg-blue"><p class="label-white">1</p></div>
          <div class="rtl-item bg-purple"><p class="label-white">2</p></div>
          <div class="rtl-item bg-pink"><p class="label-white">3</p></div>
        </div>

        {/* RTL Card */}
        <p class="section-title">RTL Card Layout</p>
        <div class="rtl-card">
          <div class="rtl-card-row">
            <div class="rtl-card-avatar"><p class="label-white">ع</p></div>
            <div class="rtl-card-body">
              <p class="rtl-card-title">عنوان البطاقة</p>
              <p class="rtl-card-subtitle">هذا نص تجريبي يظهر من اليمين لليسار</p>
            </div>
          </div>
        </div>

        {/* RTL Grid */}
        <p class="section-title">RTL Grid</p>
        <div class="rtl-grid">
          <div class="rtl-grid-item bg-red"><p class="label-white-sm">أول</p></div>
          <div class="rtl-grid-item bg-yellow"><p class="label-dark-sm">ثاني</p></div>
          <div class="rtl-grid-item bg-green"><p class="label-white-sm">ثالث</p></div>
        </div>

        {/* RTL Notification list */}
        <p class="section-title">RTL Notifications</p>
        <div class="rtl-notif-list">
          <div class="rtl-notif rtl-notif-green">
            <div class="rtl-notif-body">
              <p class="rtl-notif-title">رسالة جديدة</p>
              <p class="rtl-notif-subtitle">لديك 3 رسائل غير مقروءة</p>
            </div>
            <p class="rtl-notif-time">2 د</p>
          </div>
          <div class="rtl-notif rtl-notif-blue">
            <div class="rtl-notif-body">
              <p class="rtl-notif-title">تحديث النظام</p>
              <p class="rtl-notif-subtitle">تم تحديث التطبيق بنجاح</p>
            </div>
            <p class="rtl-notif-time">5 د</p>
          </div>
        </div>

        {/* Mixed LTR/RTL */}
        <p class="section-title">Mixed Direction</p>
        <div class="rtl-mixed-card">
          <div class="rtl-mixed-ltr">
            <p class="rtl-mixed-title-blue">English (LTR)</p>
            <p class="rtl-mixed-text">This text flows left to right</p>
          </div>
          <div class="rtl-mixed-rtl">
            <p class="rtl-mixed-title-orange">عربي (RTL)</p>
            <p class="rtl-mixed-text">هذا النص يتدفق من اليمين لليسار</p>
          </div>
          <div class="rtl-mixed-ltr-last">
            <p class="rtl-mixed-title-green">Back to LTR</p>
            <p class="rtl-mixed-text">Direction resets per container</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
