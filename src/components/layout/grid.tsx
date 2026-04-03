import './grid.css'

export default function Grid() {
  return (
    <>
      <actionbar title="Grid Layout" />
      <div class="page-scroll">
        <div class="page-content">

        {/* 2-column grid */}
        <p class="section-title">2-Column Grid</p>
        <div class="grid-2col">
          <div class="grid-item bg-blue"><p class="label-white">1</p></div>
          <div class="grid-item bg-purple"><p class="label-white">2</p></div>
          <div class="grid-item bg-pink"><p class="label-white">3</p></div>
          <div class="grid-item bg-green"><p class="label-white">4</p></div>
        </div>

        {/* 3-column grid */}
        <p class="section-title">3-Column Grid</p>
        <div class="grid-3col">
          <div class="grid-item-sm bg-red"><p class="label-white-sm">A</p></div>
          <div class="grid-item-sm bg-yellow"><p class="label-dark-sm">B</p></div>
          <div class="grid-item-sm bg-orange"><p class="label-white-sm">C</p></div>
          <div class="grid-item-sm bg-green"><p class="label-white-sm">D</p></div>
          <div class="grid-item-sm bg-blue"><p class="label-white-sm">E</p></div>
          <div class="grid-item-sm bg-purple"><p class="label-white-sm">F</p></div>
        </div>

        {/* Mixed column widths */}
        <p class="section-title">Mixed Columns (1fr 2fr 1fr)</p>
        <div class="grid-mixed">
          <div class="grid-item-sm bg-pink"><p class="label-white-xs">1fr</p></div>
          <div class="grid-item-sm bg-dark"><p class="label-white-xs">2fr</p></div>
          <div class="grid-item-sm bg-pink"><p class="label-white-xs">1fr</p></div>
        </div>

        {/* Grid with spanning */}
        <p class="section-title">Grid Column Span</p>
        <div class="grid-span">
          <div class="grid-item-sm grid-span-2 bg-blue"><p class="label-white-sm">span 2</p></div>
          <div class="grid-item-sm bg-purple"><p class="label-white-sm">1</p></div>
          <div class="grid-item-sm bg-green"><p class="label-white-sm">1</p></div>
          <div class="grid-item-sm grid-span-2 bg-red"><p class="label-white-sm">span 2</p></div>
        </div>

        {/* Auto rows */}
        <p class="section-title">Grid Auto Rows</p>
        <div class="grid-auto">
          <div class="grid-auto-item bg-yellow"><p class="label-dark-sm">Auto</p></div>
          <div class="grid-auto-item bg-orange"><p class="label-white-sm">Auto</p></div>
          <div class="grid-auto-item bg-green"><p class="label-white-sm">Auto</p></div>
          <div class="grid-auto-item bg-blue"><p class="label-white-sm">Auto</p></div>
        </div>

        </div>
      </div>
    </>
  )
}
