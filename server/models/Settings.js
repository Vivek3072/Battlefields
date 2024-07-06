const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
  players: Number,
  ping: Number,
  tickrate: Number,
  settings: {
    region: String,
    punkbuster: Boolean,
    fairfight: Boolean,
    password: Boolean,
    preset: String,
  },
  advanced: {
    minimap: Boolean,
    onlySquadLeaderSpawn: Boolean,
    vehicles: Boolean,
    teamBalance: Boolean,
    minimapSpotting: Boolean,
    hud: Boolean,
    vehicleCam: Boolean,
    regenerativeHealth: Boolean,
    killCam: Boolean,
    friendlyFire: Boolean,
    spotting3D: Boolean,
    enemyNameTags: Boolean,
  },
  rules: {
    tickets: Number,
    vehicleSpawnDelay: Number,
    bulletDamage: Number,
    kickAfterTeamKills: Number,
    playerHealth: Number,
    playerRespawnTime: Number,
    kickAfterIdle: Number,
    banAfterKicks: Number,
  },
});

const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;
