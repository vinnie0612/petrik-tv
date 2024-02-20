<script>
  export let text = '';
</script>

<div class="marquee">
  <p class="marquee-text">{text}</p>
</div>

<style>
  .marquee {
    width: 100%;
    overflow: hidden;
  }

  .marquee-text {
    display: inline-block;
    white-space: nowrap;
    animation: marquee 10s linear infinite;
  }

  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
</style>
