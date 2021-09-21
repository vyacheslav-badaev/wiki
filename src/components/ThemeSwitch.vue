<template>
  <button id="themeSwitch" @click="toggleTheme()" />
</template>
<script>
const sun  = '<svg xmlns="http:const moon = '<svg xmlns="http:export default {
  methods: {
    setTheme: () => {
      const body = document.querySelector('body')
      const themeSwitch = document.querySelector('#themeSwitch')
      if (process.isClient && localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', 'bright')
      } 
      if (process.isClient) {
        body.classList.add(localStorage.getItem('theme'))
        themeSwitch.innerHTML = (localStorage.getItem('theme') == 'bright' ? moon : sun )
      }
    },
    toggleTheme: () => {
      const body = document.querySelector('body')
      const themeSwitch = document.querySelector('#themeSwitch')
      if (process.isClient) {
        if (body.classList.contains('dark')) {
          localStorage.setItem('theme', 'bright');
          body.classList.remove('dark')
          body.classList.add('bright')
          themeSwitch.innerHTML = moon
        } else {
          localStorage.setItem('theme', 'dark');
          body.classList.remove('bright')
          body.classList.add('dark')
          themeSwitch.innerHTML = sun
        }
      }
    }
  },
  mounted () {
    this.setTheme()
  }
}
</script>
<style lang="scss" scoped>
button {
  background: none;
  border: 0;
  padding: 0;
  transition: color .15s ease-in-out;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  .dark & {
    color: $textDark;
  }
  .bright & {
    color: $textBright;
  }
}
</style>
