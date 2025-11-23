class SoundManager {
  constructor() {
    this.sounds = {
      click: new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"), // Pop sound
      success: new Audio("https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3"), // Success chime
      fail: new Audio("https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3"), // Error buzz
      celebration: new Audio("https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3"), // Tada
    };

    // Preload sounds
    Object.values(this.sounds).forEach(sound => {
      sound.volume = 0.5;
      sound.load();
    });
  }

  play(soundName) {
    const sound = this.sounds[soundName];
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(e => console.log("Audio play failed:", e));
    }
  }
}

export default new SoundManager();
