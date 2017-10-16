import Expo from 'expo';

export const correctSoundFX = () => {
  const soundObj = new Expo.Audio.Sound();
  try {
    soundObj.loadAsync(require('./sounds/correct.mp3'))
      .then(() => soundObj.playAsync())
      .catch(error => console.log(error));

  } catch (error) {
    console.log('song could not play', error);
  }
}

export const wrongSoundFX = () => {
  const soundObj = new Expo.Audio.Sound();
   try {
      soundObj.loadAsync(require('./sounds/wrong.mp3'))
        .then(() => soundObj.playAsync())
        .catch(error => console.log('play error', error));
   } catch (error) {
      console.log('song could not play', error);
   }
}

