<html>
<head>
  ...
  <!-- You need to bring your own Tone.js for the player, and tfjs for the model -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.7.58/Tone.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tensorflow/1.2.8/tf.min.js"></script>
  <!-- Core library, since we're going to use a player -->
  <script src="https://cdn.jsdelivr.net/npm/@magenta/music@^1.0.0/es6/core.js"></script>
  <!--Model we want to use -->
  <script src="https://cdn.jsdelivr.net/npm/@magenta/music@^1.0.0/es6/music_vae.js"></script>
</head>
<script>
  // Each bundle exports a global object with the name of the bundle.
  const player = new core.Player();
  //...
  const mvae = new music_vae.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_2bar_small');
  mvae.initialize().then(() => {
    mvae.sample(1).then((samples) => player.start(samples[0]));
  });
</script>
</html>
