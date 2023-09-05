<template>
  <div>
    <!-- <NuxtLink to="/about">About</NuxtLink> -->
    <nav>
      <ul>
        <li>
          <NuxtLink to="/calc">Kalkylator</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/goal">Mål</NuxtLink>
        </li>
      </ul>
    </nav>
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
      <input type="range" id="slider" name="slider" min="0" max="100" value="90" step="10" />
      <label for="slider">Slider</label>
    </div>
  </div>
</template>

<script lang="ts">


</script>