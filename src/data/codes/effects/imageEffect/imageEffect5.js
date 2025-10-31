export default `<template>
  <div class="min-h-screen flex items-center justify-center">
    <figure
      class="group relative overflow-hidden min-w-[320px] max-w-[480px] max-h-[360px] w-full bg-[#42b078] text-center cursor-pointer"
    >
      <img
        src="https://vida-laboral.netlify.app/img/habita.webp"
        alt="img13"
        class="relative block min-h-full max-w-none w-[calc(100%+20px)] opacity-80 -translate-x-[10px] transition-all duration-[350ms] group-hover:opacity-40 group-hover:translate-x-0"
      />
      <figcaption
        class="absolute top-0 left-0 w-full h-full p-8 text-white uppercase text-xl text-left"
      >
        <h2
          class="relative overflow-hidden py-2 m-0 font-light word-spacing-tight"
        >
          JBORTWEB <span class="font-extrabold">Frontend developer</span>
          <span class="h2-underline"></span>
        </h2>
        <p
          class="py-4 m-0 tracking-wide text-[0.685rem] opacity-0 translate-x-full transition-all duration-[350ms] group-hover:opacity-100 group-hover:translate-x-0"
        >
          Realizado con Vue y Tailwind.
        </p>
        <a
          href="#"
          class="absolute top-0 left-0 w-full h-full z-[1000] opacity-0 text-[0] whitespace-nowrap indent-[200%]"
        ></a>
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
</script>

<style scoped>
.word-spacing-tight {
  word-spacing: -0.15em;
}

.h2-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #fff;
  content: "";
  transform: translate3d(-100%, 0, 0);
  transition: transform 0.35s;
}

.group:hover .h2-underline {
  transform: translate3d(0, 0, 0);
}
</style>
`
