<template>
  <div class="flex-col gap-full" id="main">
    <nav class="flex-row flex-center gap-half p1 border-radius navbar">
      <NuxtLink class="flex-row flex-center p1 w-full" to="/calc"
        >Kalkylator</NuxtLink
      >
      <NuxtLink class="flex-row flex-center p1 w-full" to="/goal">Mål</NuxtLink>
    </nav>
    <div class="flex-row flex-center gap-half border-radius p1 link-copy">
      <div
        class="flex-row flex-center border-radius bg-white p1 link-copy-container"
      >
        <img
          src="./assets/images/link-01.svg"
          decoding="async"
          loading="lazy"
          alt="link icon"
        />
        <div class="vertical-bar"></div>
        <p>https://klimatkompassen.web.app/calc/</p>
      </div>
      <button class="button-square">Kopiera</button>
    </div>
    <div class="flex-col flex-center bg-main border-radius p1 gap-half total">
      <p>Totalvärde</p>
      <div id="follow">
        <input
          auto-resize
          autocomplete="off"
          type="number"
          id="follow-text"
          minlength="1"
          maxlength="6"
          readonly
        /><span> kr</span>
      </div>
      <label for="main-slider" id="total-value">0 kr</label>
      <input
        type="range"
        id="main-slider"
        name="main-slider"
        min="0"
        max="15000"
        value="1500"
        step="100"
        @input="updateValue"
      />
      <button class="button-round-2">Visa mer</button>
    </div>
    <div class="flex-col gap-full bg-main border-radius p2">
      <div class="slider-wrapper">
        <label class="slider-label">Månadssparande</label>
        <div class="slider">
          <div class="slider-container">
            <div class="sliderElement">
              <div class="slider-handle">
                <div class="slider-handle-label-wrapper">
                  <label class="slider-handle-text">
                    <div class="slider-handle-text-bubble"></div>
                  </label>
                  <span class="suffix">kr</span>
                </div>
              </div>
              <div class="slider-range"></div>
            </div>
          </div>
          <div class="slider-input-trigger">
            <!-- <img src="pencil.svg" alt="Ange anpassad input"/> -->
          </div>
        </div>
        <input
          oninput=""
          type="range"
          id="slider"
          name="slider"
          min="0"
          max="100"
          value="90"
          step="10"
        />
        <label for="slider">Slider</label>
      </div>
      <div>
        <p>Spartid</p>
        <input type="range" />
      </div>
      <div>
        <p>Avkastning</p>
        <input type="range" />
      </div>
    </div>
    <h1>Investeringsparametrar</h1>
    <div class="flex-col gap-full bg-main border-radius p2">
      <div>
        <h2>Allmänt</h2>
        <div>
          <p>Statslåneränta</p>
          <input type="range" />
        </div>
        <div>
          <p>Inflation</p>
          <input type="range" />
        </div>
      </div>
      <h2>Avgifter</h2>
      <div>
        <p>Avgift (fonder)</p>
        <input type="range" />
      </div>
      <div>
        <p>Courtage (aktier)</p>
        <input type="range" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: "Calc",
  components: {},
  data() {
    return {
      isDragging: false,
      mouseX: 0,
      sliderMargin: 35,
    };
  },
  mounted() {
    this.updateValue();
    this.setSliders();
    this.addEventListeners();
  },
  methods: {
    setSliders() {
      const slider = document.getElementById("main-slider") as HTMLInputElement;
      const follow = slider.parentElement?.children[1] as HTMLDivElement;
      const sliderRect = slider.getBoundingClientRect();
      const followRect = follow.getBoundingClientRect();
      console.log("set slider");
      if (slider && follow) {
        const factor = slider.value / slider.max;
        const pos = sliderRect.left + sliderRect.width * factor;
        follow.style.top = sliderRect.top - sliderRect.height + "px";
        follow.style.left = `${pos - followRect.width / 2}px`;
        slider.style.backgroundSize = `${factor * 100}% 100%`;
      }
    },
    addEventListeners() {
      const main = document.getElementById("main") as HTMLDivElement;
      if (main) {
        main.addEventListener("pointerdown", (event) => {
          this.isDragging = true;
          const slider = event.target;
          if (slider instanceof HTMLInputElement) {
            const follow = slider.parentElement?.children[1] as HTMLDivElement;
            const sliderRect = slider.getBoundingClientRect();
            if (follow) {
              follow.style.top = `${sliderRect.top - sliderRect.height - this.sliderMargin}px`;
              
            }
          }
        });
        main.addEventListener("pointerup", (event) => {
          this.isDragging = false;
          const slider = event.target;
          if (slider instanceof HTMLInputElement) {
            const follow = slider.parentElement?.children[1] as HTMLDivElement;
            const sliderRect = slider.getBoundingClientRect();
            if (follow) {
              follow.style.top = `${sliderRect.top - sliderRect.height}px`;
            }
          }
        });
        main.addEventListener("input", (event) => {
          const slider = event.target;
          if (slider instanceof HTMLInputElement) {
            const follow = slider.parentElement?.children[1] as HTMLDivElement;
            const sliderRect = slider.getBoundingClientRect();
            const followRect = follow.getBoundingClientRect();
            if (follow) {
              const factor = slider.value / slider.max;
              const pos = sliderRect.left + sliderRect.width * factor;
              follow.style.left = `${pos - followRect.width / 2}px`;
              slider.style.backgroundSize = `${factor * 100}% 100%`;


              
              // this.mouseX = pos;
              // follow.style.left = pos + followRect.width / 2 + "px";

              // if (
              //   this.mouseX > sliderRect.left &&
              //   this.mouseX < sliderRect.right
              // ) {
              //   follow.style.left = pos + followRect.width / 2 + "px";
              // } else if (followRect.left <= sliderRect.left) {
              //   follow.style.left = sliderRect.left + "px";
              // } else if (followRect.right >= sliderRect.right) {
              //   follow.style.left = sliderRect.right - followRect.width + "px";
              // }
            }
          }
        });
        main.addEventListener("pointermove", (event) => {
          const slider = event.target;
          if (slider instanceof HTMLInputElement) {
            const follow = slider.parentElement?.children[1] as HTMLDivElement;
            const sliderRect = slider.getBoundingClientRect();
            const followRect = follow.getBoundingClientRect();
            if (follow && this.isDragging) {
              this.mouseX = event.clientX;
              const factor = slider.value / slider.max;
              const pos = sliderRect.left + sliderRect.width * factor;
              follow.style.left = `${pos - followRect.width / 2}px`;
              slider.style.backgroundSize = `${factor * 100}% 100%`;
              console.log(factor)



              // if (followRect.left <= sliderRect.left && followRect.left !== pos) {
              //   follow.style.left = sliderRect.left + "px";
              // } else if (
              //   followRect.right >= sliderRect.right &&
              //   followRect.right !== pos
              //   ) {
              //     follow.style.left = sliderRect.right - followRect.width + "px";
              //   } else {
              //   }
            }
          }
        });
      }
    },
    updateValue() {
      const follow = document.getElementById("follow") as HTMLDivElement;
      const followText = document.getElementById(
        "follow-text"
      ) as HTMLInputElement;
      let isDragging = false;
      const slider = document.getElementById("main-slider") as HTMLInputElement;
      const totalValue = document.getElementById(
        "total-value"
      ) as HTMLSpanElement;
      if (slider && follow && followText && totalValue) {
        totalValue.textContent = slider.value + " kr";
        followText.value = slider.value;
      }
    },
  },
});
</script>
