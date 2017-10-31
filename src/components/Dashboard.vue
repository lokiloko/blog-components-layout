<template lang="html">

</template>

<script>
export default {
  props: ['loggedInStatus'],
  methods: {
    checkAuth () {
      if (!this.loggedInStatus) {
        this.$router.push('/')
      }
    }
  },
  created: function () {
    this.checkAuth()
  },
  watch: {
    loggedInStatus (watched) {
      this.checkAuth()
    }
  }
}
</script>

<style lang="css">
</style>
