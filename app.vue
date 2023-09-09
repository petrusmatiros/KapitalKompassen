<template>
  <div class="flex-col gap-full">
    <nav class="flex-row flex-center gap-half p1 border-radius navbar">
      <NuxtLink class="flex-row flex-center p1 w-full" to="/calc">Kalkylator</NuxtLink>
      <NuxtLink class="flex-row flex-center p1 w-full" to="/goal">Mål</NuxtLink>
    </nav>
    <div class="flex-row flex-center gap-half border-radius p1 link-copy">
      <div class="flex-row flex-center border-radius bg-white p1 link-copy-container">
        <img src="@/assets/images/link-01.svg" alt="link icon"/>
        <div class="vertical-bar"></div>
        <p>https://klimatkompassen.web.app/calc/</p>
      </div>
      <button class="button-square">Kopiera</button>
    </div>
    <div class="flex-col flex-center bg-main border-radius p2 gap-half total">
      <p>Totalvärde</p>
      <span>1 200 000 kr</span>
      <input type="range">
      <button class="button-round-2">Visa mer</button>
    </div>
    <div class="slider-wrapper">
      <label class="slider-label">Månadssparande</label>
      <div class="slider">
        <div class="slider-container">
          <div class="sliderElement">
            <div class="slider-handle">
              <div class="slider-handle-label-wrapper">
                <label class="slider-handle-text"><div class="slider-handle-text-bubble"></div></label>
                <span class="suffix"></span>
              </div>
            </div>
            <div class="slider-range"></div>
          </div>
        </div>
        <div class="slider-input-trigger">
          <!-- <img src="pencil.svg" alt="Ange anpassad input"/> -->
        </div>
      </div>
      <input oninput="" type="range" id="slider" name="slider" min="0" max="100" value="90" step="10" />
      <label for="slider">Slider</label>
    </div>
  </div>
</template>

<script lang="ts">

</script>