const COSTS = {
  road: { brick: 1, lumber: 1 },
  settlement: { brick: 1, lumber: 1, grain: 1, wool: 1 },
  city: { grain: 2, ore: 3 }
};

export { COSTS };

function checkResources(player, type) {
  switch (type) {
    case "road":
      if (
        player.resources.brick >= COSTS.road.brick &&
        player.resources.lumber >= COSTS.road.lumber
      ) {
        return true;
      }
      return false;
    case "settlement":
      if (
        player.resources.brick >= COSTS.settlement.brick &&
        player.resources.lumber >= COSTS.settlement.lumber &&
        player.resources.grain >= COSTS.settlement.grain &&
        player.resources.wool >= COSTS.settlement.wool
      ) {
        return true;
      }
      return false;
    case "city":
      if (
        player.resources.grain >= COSTS.city.grain &&
        player.resources.ore >= COSTS.city.ore
      ) {
        return true;
      }
      return false;
    default:
      return false;
  }
}

export { checkResources };
