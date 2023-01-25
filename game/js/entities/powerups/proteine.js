class Proteine extends Powerup {
	constructor({
		width = 10,
		height = 10,
		position,
		name,
		worth,
		weight,
		fragility,
		timer
	}) {
		super({ width: width, height: height, position: position, name: name, worth: worth, weight: weight, fragility: fragility, timer: timer })
	}

	use() {
		super.use()
		this.player.strengthBoost = 1.5
	}

	stop() {
		super.stop()
		this.player.strengthBoost = 1
	}
}