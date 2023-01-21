const { log } = require("console")

const types = ["Bludgeon", "Hack & Slash", "Cut & Thrust", "Piercing"]

const sizes = ["Tiny", "Small", "Medium", "Large", "Polearm"]

const weights = ["Light", "Medium", "Heavy"]

const balances = ["Nimble", "Balanced", "Weighted"]

function generateWeaponsList() {
  const allWeaponOptions = []
  for (const type of types) {
    allWeaponOptions.push(generateWeaponsListByType({name: "TBD", type}));
  }
  log(JSON.stringify(allWeaponOptions.flat(), null, 2))
  log(allWeaponOptions.flat().length)
}

function generateWeaponsListByType(item) {
  const allWeaponOptions = []
  for (const size of sizes) {
    allWeaponOptions.push(generateWeaponsListBySize({...item, size}));
  }
  return allWeaponOptions.flat();
}

function generateWeaponsListBySize(item) {
  const allWeaponOptions = []
  for (const weight of weights) {
    allWeaponOptions.push(generateWeaponsListByWeight({...item, weight}));
  }
  return allWeaponOptions.flat();
}

function generateWeaponsListByWeight(item) {
  const allWeaponOptions = []
  for (const balance of balances) {
    allWeaponOptions.push(generateWeaponsListByBalance({...item, balance}));
  }
  return allWeaponOptions.flat();
}

function generateWeaponsListByBalance(item) {
  const hands = ["One Handed", "Hand & a Half", "Two Handed"]
  const allWeaponOptions = []

  if (item.size === "Tiny" || item.size === "Small") {
    allWeaponOptions.push({...item, handed: hands[0]})
  };

  if (item.size === "Medium") {
    for (const handed of hands) {
      allWeaponOptions.push({...item, handed})
   }
  }

  if (item.size === "Large") {
    for (const handed of hands.slice(1)) {
      allWeaponOptions.push({...item, handed})
   }
  }

  if (item.size === "Polearm") {
    allWeaponOptions.push({...item, handed: hands[2]})
  }

  return allWeaponOptions;
}

generateWeaponsList();
