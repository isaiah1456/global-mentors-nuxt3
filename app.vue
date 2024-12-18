<template>
  <main>
    <CookieControl locale="en" />
    <div>
      <ColorTypo />
      <VuetifyTest />
      <events />
    </div>
    <general-TotemSignature />
  </main>
</template>

<script lang="ts" setup>
// const { grantConsent } = useGtag()

const {
  cookiesEnabledIds,
} = useCookieControl()
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      (!previous?.includes('ga') &&
        current?.includes('ga'))
    ) {
      // TODO: Update package
      // grantConsent()
      // cookie with id `google-analytics` got added
      // placeholder for your custom change handler
    }
  },
  { deep: true }
)
if (cookiesEnabledIds.value !== undefined && cookiesEnabledIds.value.includes('ga')) {
  // grantConsent()
}

</script>
