import { useEffect, useState } from "react";

export default function MainInfo() {
  const [settings, setSettings] = useState({});

  const fetchSettings = async () => {
    const resp = await fetch("https://battlefields-backend.onrender.com/settings");
    const data = await resp.json();
    setSettings(data);
    console.log(data);
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <div>
      <div className="rajdhani-medium uppercase flex flex-row items-center space-x-10 my-5">
        <div>
          <div>Players</div>
          <span className="rajdhani-semibold text-2xl">
            {settings.players}/64
          </span>
        </div>
        <div>
          <div>Ping</div>
          <span className="rajdhani-semibold text-2xl">{settings.ping} ms</span>
        </div>
        <div>
          <div>Tickrate</div>
          <span className="rajdhani-semibold text-2xl">
            {settings.tickrate} Hz
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px]">
        <div className="col-span-1">
          <div className="mb-2">Settings</div>
          {settings && settings.settings && (
            <div className="divide-y divide-gray-500">
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Region</div> <div>{settings.settings.region}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Punkbuster</div>{" "}
                <div>{settings.settings.punkbuster ? "ON" : "OFF"}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>FairFight</div>
                <div>{settings.settings.fairfight ? "ON" : "OFF"}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Password</div>{" "}
                <div>{settings.settings.password ? "ON" : "OFF"}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Preset</div> <div>{settings.settings.preset}</div>
              </div>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <div className="mb-2">Advanced</div>
          {settings && settings.advanced && (
            <div className="divide-y divide-gray-500">
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Minimap</div>{" "}
                <div>{settings.advanced.minimap ? "ON" : "OFF"}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Squad Leader Spawn</div>{" "}
                <div>
                  {settings.advanced.onlySquadLeaderSpawn ? "ON" : "OFF"}
                </div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Vehicles</div>{" "}
                <div>{settings.advanced.vehicles ? "ON" : "OFF"}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Team Balance</div>{" "}
                <div>{settings.advanced.teamBalance ? "ON" : "OFF"}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Minimap Spotting</div>{" "}
                <div>{settings.advanced.minimapSpotting ? "ON" : "OFF"}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>HUD</div> <div>{settings.advanced.hud ? "ON" : "OFF"}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>3P Vehicle Cam</div>{" "}
                <div>{settings.advanced.vehicleCam ? "ON" : "OFF"}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Regenerative Health</div>{" "}
                <div>{settings.advanced.regenerativeHealth ? "ON" : "OFF"}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Kill Cam</div>{" "}
                <div>{settings.advanced.killCam ? "ON" : "OFF"}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Friendly Fire</div>{" "}
                <div>{settings.advanced.friendlyFire ? "ON" : "OFF"}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>3D Spotting</div>{" "}
                <div>{settings.advanced.spotting3D ? "ON" : "OFF"}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Enemy Name Tags</div>{" "}
                <div>{settings.advanced.enemyNameTags ? "ON" : "OFF"}</div>
              </div>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <div className="mb-2">Rules</div>
          {settings && settings.rules && (
            <div className="divide-y divide-gray-500">
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Tickets</div>{" "}
                <div className="text-yellow-400">{settings.rules.tickets}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Vehicle Spawn Delay</div>{" "}
                <div className="text-yellow-400">
                  {settings.rules.vehicleSpawnDelay}
                </div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Bullet Damage</div>{" "}
                <div>{settings.rules.bulletDamage}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Kick After Team Kills</div>{" "}
                <div>{settings.rules.kickAfterTeamKills}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Player Health</div>{" "}
                <div>{settings.rules.playerHealth}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Player Respawn Time</div>{" "}
                <div>{settings.rules.playerRespawnTime}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Kick After Idle</div>{" "}
                <div>{settings.rules.kickAfterIdle}</div>
              </div>
              <div className="flex flex-row justify-between p-1 rajdhani-medium uppercase">
                <div>Ban After Kicks</div>{" "}
                <div>{settings.rules.banAfterKicks}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
