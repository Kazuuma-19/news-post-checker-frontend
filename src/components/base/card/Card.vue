<template>
  <div class="overflow-hidden rounded shadow-lg">
    <slot name="card-img"></slot>

    <div class="px-8 py-6">
      <div class="mb-2 text-xl font-bold">
        <slot name="card-title"></slot>
      </div>

      <div>
        <slot name="card-sentence"></slot>
      </div>
    </div>
  </div>
</template>
