function modTick() {
             return;
	var entitiesList = Entity.getAll();
	for(var i = 0; i < entitiesList.length; i++) {
		if (Player.isPlayer(entitiesList[i])) continue;
		Entity.remove(entitiesList[i]);
	}
}
