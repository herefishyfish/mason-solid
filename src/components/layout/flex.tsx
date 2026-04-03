import './flex.css'

export default function Flex() {
  return (
    <>
      <actionbar title="Flex Layout" />
      <div class="page-scroll">
        <div class="page-content">

        {/* Row direction */}
        <p class="section-title">flex-direction: row</p>
        <div class="flex-row-demo">
          <div class="flex-grow-h60 flex-item bg-blue">
            <p class="label-white">1</p>
          </div>
          <div class="flex-grow-h60 flex-item bg-green">
            <p class="label-white">2</p>
          </div>
          <div class="flex-grow-h60 flex-item bg-pink">
            <p class="label-white">3</p>
          </div>
        </div>

        {/* Column direction */}
        <p class="section-title">flex-direction: column</p>
        <div class="flex-col-demo">
          <div class="flex-h50 flex-item bg-purple">
            <p class="label-white">Item A</p>
          </div>
          <div class="flex-h50 flex-item bg-yellow">
            <p class="label-dark">Item B</p>
          </div>
          <div class="flex-h50 flex-item bg-red">
            <p class="label-white">Item C</p>
          </div>
        </div>

        {/* Flex wrap */}
        <p class="section-title">flex-wrap: wrap</p>
        <div class="flex-wrap-demo">
          <div class="flex-w100-h50 flex-item-sm bg-orange">
            <p class="label-white-sm">W:100</p>
          </div>
          <div class="flex-w100-h50 flex-item-sm bg-green">
            <p class="label-white-sm">W:100</p>
          </div>
          <div class="flex-w100-h50 flex-item-sm bg-blue">
            <p class="label-white-sm">W:100</p>
          </div>
          <div class="flex-w100-h50 flex-item-sm bg-purple">
            <p class="label-white-sm">W:100</p>
          </div>
          <div class="flex-w100-h50 flex-item-sm bg-pink">
            <p class="label-white-sm">W:100</p>
          </div>
        </div>

        {/* Justify content */}
        <p class="section-title">justify-content: space-between</p>
        <div class="flex-justify-demo">
          <div class="flex-w60-h60 flex-item bg-red">
            <p class="label-white">L</p>
          </div>
          <div class="flex-w60-h60 flex-item bg-yellow">
            <p class="label-dark">C</p>
          </div>
          <div class="flex-w60-h60 flex-item bg-green">
            <p class="label-white">R</p>
          </div>
        </div>

        {/* Align items */}
        <p class="section-title">align-items variations</p>
        <div class="flex-align-demo">
          <div class="flex-bar-1 bg-blue"></div>
          <div class="flex-bar-2 bg-purple"></div>
          <div class="flex-bar-3 bg-pink"></div>
          <div class="flex-bar-4 bg-green"></div>
        </div>

        {/* Flex grow ratios */}
        <p class="section-title">flex-grow ratios (1:2:1)</p>
        <div class="flex-grow-demo">
          <div class="flex-grow-1 bg-blue">
            <p class="label-white-sm">grow: 1</p>
          </div>
          <div class="flex-grow-2 bg-pink">
            <p class="label-white-sm">grow: 2</p>
          </div>
          <div class="flex-grow-1 bg-green">
            <p class="label-white-sm">grow: 1</p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
