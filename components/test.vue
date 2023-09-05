<template>
  <div class="slider-wrapper">
    <label class="slider-label">Månadssparande</label>

    <div
      class="slider large"
      data-aza-sweet-slider=""
      data-on-change=""
      data-on-every-change="vm.onMonthlyAmountSliderChange(value)"
      data-on-slide-start=""
      data-min="0"
      data-max="15000"
      data-step="100"
      data-debounce="400"
      data-value="vm.state.monthlyAmount"
      data-animation-speed="0"
      data-should-disable-slide=""
      data-maximum-allowed-value=""
      data-is-input-triggered=""
      data-save-input-on-click=""
    >
      <div class="sliderContainer">
        <div
          class="sliderElement ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
        >
        
          <div
            class="ui-slider-handle ui-state-default ui-corner-all"
            style="left: 8%"
          ></div>
          <div
            class="ui-slider-handle-label"
            data-label="Skriv eget belopp"
            style="top: -20.4px; left: -12px"
          >
            <label>
              <input
                class="input"
                type="text"
                maxlength="6"
                name="value"
                autocomplete="off"
                auto-resize=""
                readonly="readonly"
                style="width: 44px"
              />
              <div
                style="
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  visibility: hidden;
                  height: 0px;
                  white-space: pre;
                  font-size: 17px;
                  font-family: Roboto, arial, sans-serif;
                  font-weight: 400;
                  font-style: normal;
                  letter-spacing: 0px;
                "
              >
                1&nbsp;200
              </div>
            </label>

            <span class="suffix">kr</span>
          </div>
          <div
            class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-max"
            style="width: 92%"
          ></div>
        </div>
      </div>
      <div class="sliderInputTrigger">
        <img src="/frontend/image/pencil-gray-icon.svg" alt="Ändra slider" />
      </div>
    </div>
  </div>
</template>
