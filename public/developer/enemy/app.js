$(document).foundation();

class Enemy {
	constructor() {
		this.name = "";
		this.ruby = "";
		this.rank = 1;
		this.race = "";
		this.raceName = "";
		this.popularity = 0;
		this.popularityName = "";
		this.identification = "";
		this.type = "";
		this.typeName = "";
		this.throne = "";
		this.throneName = "";
		this.tribe = "";
		this.tags = Array(6).fill("");
		this.str = 0;
		this.dex = 0;
		this.pow = 0;
		this.int = 0;
		this.avoid = "";
		this.resist = "";
		this.physicalDefense = 0;
		this.magicalDefense = 0;
		this.hitpoint = 0;
		this.hate = 0;
		this.initiative = 0;
		this.move = 2;
		this.fate = 0;
		this.skills = Array.from({ length: 10 }, (_, i) => new Skill());
		this.drop = "";
		this.dropExpected = 0;
		this.explain = "";
	}
}
class Skill {
	constructor() {
		this.name = "";
		this.tags = Array(6).fill("");
		this.timing = "";
		this.roll = "";
		this.target = "";
		this.range = "";
		this.cost = "";
		this.limit = "";
		this.effect = "";
		this.command = "";
	}
}
class Ccforia {
	constructor() {
		this.clipboardData = new Object();
		this.clipboardData.kind = "character";
		this.clipboardData.data = new Object();
		this.clipboardData.data.name = "";
		this.clipboardData.data.memo = "";
		this.clipboardData.data.initiative = 0;
		this.clipboardData.data.externalUrl = "";
		this.clipboardData.data.status = [];
		this.clipboardData.data.params = [];
		this.clipboardData.data.secret = false;
		this.clipboardData.data.invisible = false;
		this.clipboardData.data.hideStatus = false;
		this.clipboardData.data.commands = "";
	}

	setName(value) {
		this.clipboardData.data.name = value;
		return this;
	}
	setMemo(value) {
		this.clipboardData.data.memo = value;
		return this;
	}
	setInitiative(value) {
		this.clipboardData.data.initiative = value;
		return this;
	}
	setExternalUrl(value) {
		this.clipboardData.data.externalUrl = value;
		return this;
	}
	appendStatus(label, value, max) {
		this.clipboardData.data.status.push({ label: label, value: value, max: max });
	}
	appendParams(label, value) {
		this.clipboardData.data.params.push({ label: label, value: value });
	}
	setCommands(value) {
		this.clipboardData.data.commands = value;
		return this;
	}

	getJson() {
		return JSON.stringify(this.clipboardData);
	}
}

const ui = new Object();
ui.name = document.getElementById("enemy-name");
ui.ruby = document.getElementById("enemy-ruby");
ui.rank = document.getElementById("enemy-rank");
ui.race = document.getElementById("enemy-race");
ui.popularity = document.getElementById("enemy-popularity");
ui.identification = document.getElementById("enemy-identification");
ui.type = document.getElementById("enemy-type");
ui.throne = document.getElementById("enemy-throne");
ui.tribe = document.getElementById("enemy-tribe");
ui.tags = Array.from(document.getElementById("enemy-tags").getElementsByTagName("input"));
ui.str = document.getElementById("enemy-str");
ui.dex = document.getElementById("enemy-dex");
ui.pow = document.getElementById("enemy-pow");
ui.int = document.getElementById("enemy-int");
ui.avoid = document.getElementById("enemy-avoid");
ui.resist = document.getElementById("enemy-resist");
ui.physicalDefense = document.getElementById("enemy-physical-defense");
ui.magicalDefense = document.getElementById("enemy-magical-defense");
ui.hitpoint = document.getElementById("enemy-hitpoint");
ui.hate = document.getElementById("enemy-hate");
ui.initiative = document.getElementById("enemy-initiative");
ui.move = document.getElementById("enemy-move");
ui.fate = document.getElementById("enemy-fate");
ui.skills = Array.from(document.getElementById("enemy-skills").getElementsByTagName("input"));
ui.drop = document.getElementById("enemy-drop");
ui.dropExpected = document.getElementById("enemy-drop-expected");
ui.drop = document.getElementById("enemy-drop");
ui.explain = document.getElementById("enemy-explain");
ui.skillEdit = new Object();
ui.skillEdit.name = document.getElementById("enemy-skill-name");
ui.skillEdit.tags = Array.from(document.getElementById("enemy-skill-tags").getElementsByTagName("input"));
ui.skillEdit.timing = document.getElementById("enemy-skill-timing");
ui.skillEdit.roll = document.getElementById("enemy-skill-roll");
ui.skillEdit.target = document.getElementById("enemy-skill-target");
ui.skillEdit.range = document.getElementById("enemy-skill-range");
ui.skillEdit.cost = document.getElementById("enemy-skill-cost");
ui.skillEdit.limit = document.getElementById("enemy-skill-limit");
ui.skillEdit.effect = document.getElementById("enemy-skill-effect");
ui.skillEdit.command = document.getElementById("enemy-skill-command");

[ui.name, ui.ruby, ui.rank, ui.race, ui.popularity, ui.type, ui.throne, ui.tribe, ui.str, ui.dex, ui.pow, ui.int, ui.avoid, ui.resist, ui.physicalDefense, ui.magicalDefense, ui.hitpoint, ui.hate, ui.initiative, ui.move, ui.fate, ui.drop, ui.explain].concat(ui.tags).forEach((e) => {
	e.addEventListener("change", (event) => {
		_enemy.name = ui.name.value;
		_enemy.ruby = ui.ruby.value;
		_enemy.rank = ui.rank.value;
		_enemy.race = ui.race.value;
		_enemy.raceName = ui.race.selectedOptions[0].innerText;
		_enemy.popularity = ui.popularity.value;
		_enemy.popularityName = ui.popularity.selectedOptions[0].innerText;
		_enemy.identification = ui.identification.value;
		_enemy.type = ui.type.value;
		_enemy.typeName = ui.type.selectedOptions[0].innerText;
		_enemy.throne = ui.throne.value;
		_enemy.throneName = ui.throne.selectedOptions[0].innerText;
		_enemy.tribe = ui.tribe.value;
		_enemy.str = parseInt(ui.str.value);
		_enemy.dex = parseInt(ui.dex.value);
		_enemy.pow = parseInt(ui.pow.value);
		_enemy.int = parseInt(ui.int.value);
		_enemy.avoid = ui.avoid.value;
		_enemy.resist = ui.resist.value;
		_enemy.physicalDefense = parseInt(ui.physicalDefense.value);
		_enemy.magicalDefense = parseInt(ui.magicalDefense.value);
		_enemy.hitpoint = parseInt(ui.hitpoint.value);
		_enemy.hate = parseInt(ui.hate.value);
		_enemy.initiative = parseInt(ui.initiative.value);
		_enemy.move = parseInt(ui.move.value);
		_enemy.fate = parseInt(ui.fate.value);
		for (let index = 0; index < ui.tags.length; index++) {
			_enemy.tags[index] = ui.tags[index].value;
		}
		_enemy.drop = ui.drop.value;
		_enemy.explain = ui.explain.value;
	});
});

[ui.rank, ui.popularity].forEach((e) => {
	e.addEventListener("change", (event) => {
		const popularity = parseInt(ui.popularity.value);
		const rank = parseInt(ui.rank.value);
		ui.identification.value = popularity == 0 ? "自動" : Math.floor((rank - 1) / 3 + 1 + popularity);
		ui.dropExpected.innerHTML = getDropExpected(rank);
	});
});
[ui.skillEdit.name, ui.skillEdit.timing, ui.skillEdit.roll, ui.skillEdit.target, ui.skillEdit.range, ui.skillEdit.cost, ui.skillEdit.limit, ui.skillEdit.effect, ui.skillEdit.command].concat(ui.skillEdit.tags).forEach((e) => {
	e.addEventListener("change", (event) => {
		if (!document.children[0].classList.contains("is-reveal-open")) return;
		const index = parseInt(document.children[0].getAttribute("data-editing-index"));
		const skill = _enemy.skills[index];
		skill.name = ui.skillEdit.name.value;
		skill.tags = ui.skillEdit.tags.map((t) => t.value);
		skill.timing = ui.skillEdit.timing.value;
		skill.roll = ui.skillEdit.roll.value;
		skill.target = ui.skillEdit.target.value;
		skill.range = ui.skillEdit.range.value;
		skill.cost = ui.skillEdit.cost.value;
		skill.limit = ui.skillEdit.limit.value;
		skill.effect = ui.skillEdit.effect.value;
		skill.command = ui.skillEdit.command.value;
		document.getElementById(`enemy-skill-${index}`).value = toSkillPlainText(skill);
	});
});

let _enemy = new Enemy();

function getDropExpected(rank) {
	if (rank == 1) {
		return 23;
	} else if (rank == 2) {
		return 28;
	} else if (rank == 3) {
		return 35;
	} else if (rank == 4) {
		return 42;
	} else if (rank == 5) {
		return 52;
	} else if (rank == 6) {
		return 63;
	} else if (rank == 7) {
		return 75;
	} else if (rank == 8) {
		return 89;
	} else if (rank == 9) {
		return 104;
	} else if (rank == 10) {
		return 120;
	} else if (rank == 11) {
		return 138;
	} else if (rank == 12) {
		return 158;
	} else if (rank == 13) {
		return 179;
	} else if (rank == 14) {
		return 201;
	} else if (rank == 15) {
		return 225;
	} else if (rank == 16) {
		return 250;
	} else if (rank == 17) {
		return 276;
	} else if (rank == 18) {
		return 305;
	} else if (rank == 19) {
		return 334;
	} else if (rank == 20) {
		return 365;
	} else if (rank == 21) {
		return 397;
	} else if (rank == 22) {
		return 431;
	} else if (rank == 23) {
		return 467;
	} else if (rank == 24) {
		return 503;
	} else if (rank == 25) {
		return 541;
	} else if (rank == 26) {
		return 581;
	} else if (rank == 27) {
		return 622;
	} else if (rank == 28) {
		return 665;
	} else if (rank == 29) {
		return 708;
	} else if (rank == 30) {
		return 754;
	} else return 0;
}
function initStatus() {
	_enemy.rank = parseInt(ui.rank.value);
	if (ui.type.value == "armorer") {
		const strBase = 7 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const dexBase = 3 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const powBase = 4 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const intBase = 2 + _enemy.rank + Math.floor(_enemy.rank / 10);
		_enemy.str = Math.floor(strBase / 3);
		_enemy.dex = Math.floor(dexBase / 3);
		_enemy.pow = Math.floor(powBase / 3);
		_enemy.int = Math.floor(intBase / 3);
		_enemy.avoid = Math.floor((4 + _enemy.rank + Math.floor(_enemy.rank / 5)) / 3) + "+2D";
		_enemy.resist = Math.floor((2 + _enemy.rank + Math.floor(_enemy.rank / 10)) / 3) + "+2D";
		_enemy.physicalDefense = 8 + _enemy.rank + Math.floor(_enemy.rank * 1.2);
		_enemy.magicalDefense = 2 + _enemy.rank + Math.floor(_enemy.rank * 0.7);
		_enemy.hitpoint = 48 + Math.floor(_enemy.rank * 8.5);
		_enemy.hate = 2 + Math.floor(_enemy.rank / 6);
		_enemy.initiative = Math.floor((strBase + intBase) / 3) - 2;
		_enemy.skills = Array.from({ length: 10 }, (_, i) => new Skill());
		const hit = Math.max(_enemy.str, _enemy.dex, _enemy.pow, _enemy.int) + 2;
		const damege = 9 + Math.floor(_enemy.rank * 3.5);
		const basicSkill = _enemy.skills[0];
		basicSkill.name = "基本攻撃手段";
		basicSkill.tags[0] = "白兵攻撃";
		basicSkill.timing = "メジャー";
		basicSkill.roll = `対決 (${hit}+2D / 回避)`;
		basicSkill.target = "単体";
		basicSkill.range = "至近";
		basicSkill.effect = `対象に[${damege}+2D]の物理ダメージを与える。`;
		basicSkill.command = `2LH+${hit} 基本攻撃手段 命中/回避\n2D+${damege} 基本攻撃手段 ダメージ/物理 ヘイト倍率x${_enemy.hate}`;
	} else if (ui.type.value == "fencer") {
		const strBase = 7 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const dexBase = 4 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const powBase = 2 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const intBase = 3 + _enemy.rank + Math.floor(_enemy.rank / 10);
		_enemy.str = Math.floor(strBase / 3);
		_enemy.dex = Math.floor(dexBase / 3);
		_enemy.pow = Math.floor(powBase / 3);
		_enemy.int = Math.floor(intBase / 3);
		_enemy.avoid = Math.floor((4 + _enemy.rank + Math.floor(_enemy.rank / 10)) / 3) + "+2D";
		_enemy.resist = Math.floor((2 + _enemy.rank + Math.floor(_enemy.rank / 10)) / 3) + "+2D";
		_enemy.physicalDefense = 5 + _enemy.rank + Math.floor(_enemy.rank * 0.7);
		_enemy.magicalDefense = 1 + _enemy.rank + Math.floor(_enemy.rank * 0.7);
		_enemy.hitpoint = 45 + Math.floor(_enemy.rank * 8.4);
		_enemy.hate = 1 + Math.floor(_enemy.rank / 6);
		_enemy.initiative = Math.floor((strBase + powBase) / 3) - 2;
		_enemy.skills = Array.from({ length: 10 }, (_, i) => new Skill());
		const hit = Math.max(_enemy.str, _enemy.dex, _enemy.pow, _enemy.int) + 2;
		const damege = 9 + Math.floor(_enemy.rank * 3.5);
		const basicSkill = _enemy.skills[0];
		basicSkill.name = "基本攻撃手段";
		basicSkill.tags[0] = "白兵攻撃";
		basicSkill.timing = "メジャー";
		basicSkill.roll = `対決 (${hit}+2D / 回避)`;
		basicSkill.target = "単体";
		basicSkill.range = "至近";
		basicSkill.effect = `対象に[${damege}+2D]の物理ダメージを与える。`;
		basicSkill.command = `2LH+${hit} 基本攻撃手段 命中/回避\n2D+${damege} 基本攻撃手段 ダメージ/物理 ヘイト倍率x${_enemy.hate}`;
	} else if (ui.type.value == "grappler") {
		const strBase = 6 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const dexBase = 4 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const powBase = 2 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const intBase = 3 + _enemy.rank + Math.floor(_enemy.rank / 10);
		_enemy.str = Math.floor(strBase / 3);
		_enemy.dex = Math.floor(dexBase / 3);
		_enemy.pow = Math.floor(powBase / 3);
		_enemy.int = Math.floor(intBase / 3);
		_enemy.avoid = Math.floor((2 + _enemy.rank + Math.floor(_enemy.rank / 10)) / 3) + "+3D";
		_enemy.resist = Math.floor((4 + _enemy.rank + Math.floor(_enemy.rank / 10)) / 3) + "+3D";
		_enemy.physicalDefense = 2 + _enemy.rank + Math.floor(_enemy.rank * -0.096);
		_enemy.magicalDefense = 3 + _enemy.rank + Math.floor(_enemy.rank * 0.3);
		_enemy.hitpoint = 45 + Math.floor(_enemy.rank * 7.5);
		_enemy.hate = 1 + Math.floor(_enemy.rank / 6);
		_enemy.initiative = Math.floor((strBase + intBase) / 3);
		_enemy.skills = Array.from({ length: 10 }, (_, i) => new Skill());
		const hit = Math.max(_enemy.str, _enemy.dex, _enemy.pow, _enemy.int) + 2;
		const damege = 9 + Math.floor(_enemy.rank * 3.5);
		const basicSkill = _enemy.skills[0];
		basicSkill.name = "基本攻撃手段";
		basicSkill.tags[0] = "白兵攻撃";
		basicSkill.timing = "メジャー";
		basicSkill.roll = `対決 (${hit}+2D / 回避)`;
		basicSkill.target = "単体";
		basicSkill.range = "至近";
		basicSkill.effect = `対象に[${damege}+2D]の物理ダメージを与える。`;
		basicSkill.command = `2LH+${hit} 基本攻撃手段 命中/回避\n2D+${damege} 基本攻撃手段 ダメージ/物理 ヘイト倍率x${_enemy.hate}`;
	} else if (ui.type.value == "supporter") {
		const strBase = 4 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const dexBase = 2 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const powBase = 7 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const intBase = 3 + _enemy.rank + Math.floor(_enemy.rank / 10);
		_enemy.str = Math.floor(strBase / 3);
		_enemy.dex = Math.floor(dexBase / 3);
		_enemy.pow = Math.floor(powBase / 3);
		_enemy.int = Math.floor(intBase / 3);
		_enemy.avoid = Math.floor((2 + _enemy.rank + Math.floor(_enemy.rank / 5)) / 3) + "+2D";
		_enemy.resist = Math.floor((7 + _enemy.rank + Math.floor(_enemy.rank / 10)) / 3) + "+2D";
		_enemy.physicalDefense = 3 + _enemy.rank + Math.floor(_enemy.rank * 0.5);
		_enemy.magicalDefense = 5 + _enemy.rank + Math.floor(_enemy.rank * 0.8);
		_enemy.hitpoint = 35 + Math.floor(_enemy.rank * 5);
		_enemy.hate = 1 + Math.floor(_enemy.rank / 6);
		_enemy.initiative = Math.floor((dexBase + powBase) / 3) + 2;
		_enemy.skills = Array.from({ length: 10 }, (_, i) => new Skill());
		const hit = Math.max(_enemy.str, _enemy.dex, _enemy.pow, _enemy.int) + 2;
		const damege = 1 + Math.floor(_enemy.rank * 3.5);
		const basicSkill = _enemy.skills[0];
		basicSkill.name = "基本攻撃手段";
		basicSkill.tags[0] = "魔法攻撃";
		basicSkill.timing = "メジャー";
		basicSkill.roll = `対決 (${hit}+2D / 抵抗)`;
		basicSkill.target = "単体";
		basicSkill.range = "4Sq";
		basicSkill.effect = `対象に[${damege}+2D]の魔法ダメージを与える。`;
		basicSkill.command = `2LH+${hit} 基本攻撃手段 命中/抵抗\n2D+${damege} 基本攻撃手段 ダメージ/魔法 ヘイト倍率x${_enemy.hate}`;
	} else if (ui.type.value == "healer") {
		const strBase = 3 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const dexBase = 2 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const powBase = 7 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const intBase = 4 + _enemy.rank + Math.floor(_enemy.rank / 10);
		_enemy.str = Math.floor(strBase / 3);
		_enemy.dex = Math.floor(dexBase / 3);
		_enemy.pow = Math.floor(powBase / 3);
		_enemy.int = Math.floor(intBase / 3);
		_enemy.avoid = Math.floor((2 + _enemy.rank + Math.floor(_enemy.rank / 5)) / 3) + "+2D";
		_enemy.resist = Math.floor((7 + _enemy.rank + Math.floor(_enemy.rank / 10)) / 3) + "+2D";
		_enemy.physicalDefense = 8 + _enemy.rank + Math.floor(_enemy.rank * 0.8);
		_enemy.magicalDefense = 1 + _enemy.rank + Math.floor(_enemy.rank * 0.7);
		_enemy.hitpoint = 30 + Math.floor(_enemy.rank * 6);
		_enemy.hate = 1 + Math.floor(_enemy.rank / 6);
		_enemy.initiative = Math.floor((dexBase + powBase) / 3) - 2;
		_enemy.skills = Array.from({ length: 10 }, (_, i) => new Skill());
		const hit = Math.max(_enemy.str, _enemy.dex, _enemy.pow, _enemy.int) + 2;
		const damege = 9 + Math.floor(_enemy.rank * 3.5);
		const basicSkill = _enemy.skills[0];
		basicSkill.name = "基本攻撃手段";
		basicSkill.tags[0] = "白兵攻撃";
		basicSkill.timing = "メジャー";
		basicSkill.roll = `対決 (${hit}+2D / 回避)`;
		basicSkill.target = "単体";
		basicSkill.range = "2Sq";
		basicSkill.effect = `対象に[${damege}+2D]の物理ダメージを与える。`;
		basicSkill.command = `2LH+${hit} 基本攻撃手段 命中/回避\n2D+${damege} 基本攻撃手段 ダメージ/物理 ヘイト倍率x${_enemy.hate}`;
	} else if (ui.type.value == "spear") {
		const strBase = 4 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const dexBase = 7 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const powBase = 2 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const intBase = 3 + _enemy.rank + Math.floor(_enemy.rank / 10);
		_enemy.str = Math.floor(strBase / 3);
		_enemy.dex = Math.floor(dexBase / 3);
		_enemy.pow = Math.floor(powBase / 3);
		_enemy.int = Math.floor(intBase / 3);
		_enemy.avoid = Math.floor((7 + _enemy.rank + Math.floor(_enemy.rank / 5)) / 3) + "+2D";
		_enemy.resist = Math.floor((2 + _enemy.rank + Math.floor(_enemy.rank / 10)) / 3) + "+2D";
		_enemy.physicalDefense = 5 + _enemy.rank + Math.floor(_enemy.rank * 0.7);
		_enemy.magicalDefense = 3 + _enemy.rank + Math.floor(_enemy.rank * 0.5);
		_enemy.hitpoint = 30 + Math.floor(_enemy.rank * 6);
		_enemy.hate = 2 + Math.floor(_enemy.rank / 6);
		_enemy.initiative = Math.floor((dexBase + powBase) / 3);
		_enemy.skills = Array.from({ length: 10 }, (_, i) => new Skill());
		const hit = Math.max(_enemy.str, _enemy.dex, _enemy.pow, _enemy.int) + 1;
		const damege = 19 + Math.floor(_enemy.rank * 6);
		const basicSkill = _enemy.skills[0];
		basicSkill.name = "基本攻撃手段";
		basicSkill.tags[0] = "白兵攻撃";
		basicSkill.timing = "メジャー";
		basicSkill.roll = `対決 (${hit}+3D / 回避)`;
		basicSkill.target = "単体";
		basicSkill.range = "至近";
		basicSkill.effect = `対象に[${damege}+2D]の物理ダメージを与える。`;
		basicSkill.command = `3LH+${hit} 基本攻撃手段 命中/回避\n2D+${damege} 基本攻撃手段 ダメージ/物理 ヘイト倍率x${_enemy.hate}`;
	} else if (ui.type.value == "archer") {
		const strBase = 3 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const dexBase = 4 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const powBase = 2 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const intBase = 7 + _enemy.rank + Math.floor(_enemy.rank / 10);
		_enemy.str = Math.floor(strBase / 3);
		_enemy.dex = Math.floor(dexBase / 3);
		_enemy.pow = Math.floor(powBase / 3);
		_enemy.int = Math.floor(intBase / 3);
		_enemy.avoid = Math.floor((4 + _enemy.rank + Math.floor(_enemy.rank / 10)) / 3) + "+2D";
		_enemy.resist = Math.floor((2 + _enemy.rank + Math.floor(_enemy.rank / 10)) / 3) + "+2D";
		_enemy.physicalDefense = 6 + _enemy.rank + Math.floor(_enemy.rank * 0.6);
		_enemy.magicalDefense = 5 + _enemy.rank + Math.floor(_enemy.rank * 0.9);
		_enemy.hitpoint = 26 + Math.floor(_enemy.rank * 5);
		_enemy.hate = 2 + Math.floor((_enemy.rank + 2) / 6);
		_enemy.initiative = Math.floor((powBase + intBase) / 3);
		_enemy.skills = Array.from({ length: 10 }, (_, i) => new Skill());
		const hit = Math.max(_enemy.str, _enemy.dex, _enemy.pow, _enemy.int);
		const damege = 19 + Math.floor(_enemy.rank * 6);
		const basicSkill = _enemy.skills[0];
		basicSkill.name = "基本攻撃手段";
		basicSkill.tags[0] = "射撃攻撃";
		basicSkill.timing = "メジャー";
		basicSkill.roll = `対決 (${hit}+3D / 回避)`;
		basicSkill.target = "単体";
		basicSkill.range = "3Sq";
		basicSkill.effect = `対象に[${damege}+2D]の物理ダメージを与える。`;
		basicSkill.command = `3LH+${hit} 基本攻撃手段 命中/回避\n2D+${damege} 基本攻撃手段 ダメージ/物理 ヘイト倍率x${_enemy.hate}`;
	} else if (ui.type.value == "shooter") {
		const strBase = 3 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const dexBase = 2 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const powBase = 5 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const intBase = 7 + _enemy.rank + Math.floor(_enemy.rank / 10);
		_enemy.str = Math.floor(strBase / 3);
		_enemy.dex = Math.floor(dexBase / 3);
		_enemy.pow = Math.floor(powBase / 3);
		_enemy.int = Math.floor(intBase / 3);
		_enemy.avoid = Math.floor((2 + _enemy.rank + Math.floor(_enemy.rank / 5)) / 3) + "+2D";
		_enemy.resist = Math.floor((5 + _enemy.rank + Math.floor(_enemy.rank / 10)) / 3) + "+2D";
		_enemy.physicalDefense = 3 + _enemy.rank + Math.floor(_enemy.rank * 0.3);
		_enemy.magicalDefense = 5 + _enemy.rank + Math.floor(_enemy.rank * 0.9);
		_enemy.hitpoint = 26 + Math.floor(_enemy.rank * 4);
		_enemy.hate = 2 + Math.floor((_enemy.rank + 2) / 6);
		_enemy.initiative = Math.floor((powBase + intBase) / 3);
		_enemy.skills = Array.from({ length: 10 }, (_, i) => new Skill());
		const hit = Math.max(_enemy.str, _enemy.dex, _enemy.pow, _enemy.int);
		const damege = 11 + Math.floor(_enemy.rank * 6);
		const basicSkill = _enemy.skills[0];
		basicSkill.name = "基本攻撃手段";
		basicSkill.tags[0] = "魔法攻撃";
		basicSkill.timing = "メジャー";
		basicSkill.roll = `対決 (${hit}+3D / 抵抗)`;
		basicSkill.target = "単体";
		basicSkill.range = "4Sq";
		basicSkill.effect = `対象に[${damege}+2D]の魔法ダメージを与える。`;
		basicSkill.command = `2LH+${hit} 基本攻撃手段 命中/抵抗\n2D+${damege} 基本攻撃手段 ダメージ/魔法 ヘイト倍率x${_enemy.hate}`;
	} else if (ui.type.value == "bomber") {
		const strBase = 3 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const dexBase = 2 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const powBase = 5 + _enemy.rank + Math.floor(_enemy.rank / 10);
		const intBase = 7 + _enemy.rank + Math.floor(_enemy.rank / 10);
		_enemy.str = Math.floor(strBase / 3);
		_enemy.dex = Math.floor(dexBase / 3);
		_enemy.pow = Math.floor(powBase / 3);
		_enemy.int = Math.floor(intBase / 3);
		_enemy.avoid = Math.floor((2 + _enemy.rank + Math.floor(_enemy.rank / 5)) / 3) + "+2D";
		_enemy.resist = Math.floor((5 + _enemy.rank + Math.floor(_enemy.rank / 10)) / 3) + "+2D";
		_enemy.physicalDefense = 3 + _enemy.rank + Math.floor(_enemy.rank * 0.3);
		_enemy.magicalDefense = 5 + _enemy.rank + Math.floor(_enemy.rank * 0.9);
		_enemy.hitpoint = 26 + Math.floor(_enemy.rank * 4);
		_enemy.hate = 2 + Math.floor((_enemy.rank + 2) / 6);
		_enemy.initiative = Math.floor((dexBase + intBase) / 3) - 2;
		_enemy.skills = Array.from({ length: 10 }, (_, i) => new Skill());
		const hit = Math.max(_enemy.str, _enemy.dex, _enemy.pow, _enemy.int);
		const damege = 11 + Math.floor(_enemy.rank * 6);
		const basicSkill = _enemy.skills[0];
		basicSkill.name = "基本攻撃手段";
		basicSkill.tags[0] = "魔法攻撃";
		basicSkill.timing = "メジャー";
		basicSkill.roll = `対決 (${hit}+3D / 抵抗)`;
		basicSkill.target = "範囲(選択)";
		basicSkill.range = "4Sq";
		basicSkill.effect = `対象に[${damege}+2D]の魔法ダメージを与える。`;
		basicSkill.command = `3LH+${hit} 基本攻撃手段 命中/抵抗\n2D+${damege} 基本攻撃手段 ダメージ/魔法 ヘイト倍率x${_enemy.hate}`;
	}
	if (ui.throne.value == "mob") {
		_enemy.hitpoint = Math.floor(_enemy.hitpoint / 2);
		_enemy.avoid = eval(_enemy.avoid.replace("D", "*3"));
		_enemy.resist = eval(_enemy.resist.replace("D", "*3"));
	} else if (ui.throne.value == "single-boss") {
		_enemy.hitpoint = _enemy.hitpoint * 4;
		_enemy.fate = 4;
	} else if (ui.throne.value == "multi-boss") {
		_enemy.hitpoint = _enemy.hitpoint * 2;
		_enemy.fate = 4;
	} else if (ui.throne.value == "single-raid-boss") {
		_enemy.hitpoint = _enemy.hitpoint * 10;
		_enemy.fate = 4;
	} else if (ui.throne.value == "multi-raid-boss") {
		_enemy.hitpoint = _enemy.hitpoint * 5;
		_enemy.fate = 4;
	}
	ui.str.value = _enemy.str;
	ui.dex.value = _enemy.dex;
	ui.pow.value = _enemy.pow;
	ui.int.value = _enemy.int;
	ui.avoid.value = _enemy.avoid;
	ui.resist.value = _enemy.resist;
	ui.physicalDefense.value = _enemy.physicalDefense;
	ui.magicalDefense.value = _enemy.magicalDefense;
	ui.hitpoint.value = _enemy.hitpoint;
	ui.hate.value = _enemy.hate;
	ui.initiative.value = _enemy.initiative;
	ui.move.value = _enemy.move;
	ui.fate.value = _enemy.fate;
	for (let index = 0; index < ui.skills.length; index++) {
		const element = ui.skills[index];
		element.value = toSkillPlainText(_enemy.skills[index]);
		element.title = element.value;
	}
}
function toSkillPlainText(skill) {
	if (skill.name.length == 0) {
		return "";
	}
	let result = `《${skill.name}》`;
	if (skill.tags.length > 0) {
		result +=
			"_" +
			skill.tags
				.filter((t) => t.length > 0)
				.map((t) => `[${t}]`)
				.join("");
	}
	if (skill.timing.length > 0) {
		result += "_" + skill.timing;
	}
	if (skill.roll.length > 0) {
		result += "_" + skill.roll;
	}
	if (skill.target.length > 0) {
		result += "_" + skill.target;
	}
	if (skill.range.length > 0) {
		result += "_" + skill.range;
	}
	if (skill.limit.length > 0) {
		result += "_" + skill.limit;
	}
	if (skill.effect.length > 0) {
		result += "_" + skill.effect;
	}
	return result;
}
function openEditSkill(index) {
	const skill = _enemy.skills[index];
	document.children[0].setAttribute("data-editing-index", index);

	const hitDice = ["spear", "archer", "shooter", "bomber"].includes(_enemy.type) ? 3 : 2;
	const hitMod = Math.max(_enemy.str, _enemy.dex, _enemy.pow, _enemy.int) + (["archer", "shooter", "bomber"].includes(_enemy.type) ? 0 : ["spear"].includes(_enemy.type) ? 1 : 2);
	document.getElementById("skill-roll-list-avoid").value = `対決 (${hitMod}+${hitDice}D / 回避)`;
	document.getElementById("skill-roll-list-resist").value = `対決 (${hitMod}+${hitDice}D / 抵抗)`;

	editSkill(skill);
}
function editSkill(skill) {
	ui.skillEdit.name.value = skill.name;
	for (let index = 0; index < ui.skillEdit.tags.length; index++) {
		ui.skillEdit.tags[index].value = skill.tags[index];
	}
	ui.skillEdit.timing.value = skill.timing;
	ui.skillEdit.roll.value = skill.roll;
	ui.skillEdit.target.value = skill.target;
	ui.skillEdit.range.value = skill.range;
	ui.skillEdit.cost.value = skill.cost;
	ui.skillEdit.limit.value = skill.limit;
	ui.skillEdit.effect.value = skill.effect;
	ui.skillEdit.command.value = skill.command;
}
function save() {
	const blob = new Blob([JSON.stringify(_enemy)], { type: "text/plain" });
	const a = document.createElement("a");
	document.body.appendChild(a);
	a.download = _enemy.name.length > 0 ? `${_enemy.name}.json` : "new_enemy.json";
	a.href = window.URL.createObjectURL(blob);
	a.click();
	a.remove();
}
function load() {
	const input = document.createElement("input");
	document.body.appendChild(input);
	input.type = "file";
	input.accept = ".json";
	input.addEventListener(
		"change",
		function (e) {
			const file = e.target.files[0];
			if (file) {
				const reader = new FileReader();
				reader.readAsText(file);
				reader.onload = function () {
					const set = function (select, value) {
						for (let index = 0; index < select.options.length; index++) {
							const e = select.options[index];
							e.selected = e.value == value;
						}
					};
					const text = reader.result;
					const enemy = JSON.parse(text);
					_enemy = enemy;
					ui.name.value = _enemy.name;
					ui.ruby.value = _enemy.ruby;
					set(ui.rank, _enemy.rank);
					set(ui.popularity, _enemy.popularity);
					ui.identification.value = _enemy.identification;
					set(ui.type, _enemy.type);
					set(ui.throne, _enemy.throne);
					ui.tribe.value = _enemy.tribe;
					for (let index = 0; index < ui.tags.length; index++) {
						ui.tags[index].value = _enemy.tags[index];
					}

					ui.str.value = _enemy.str;
					ui.dex.value = _enemy.dex;
					ui.pow.value = _enemy.pow;
					ui.int.value = _enemy.int;
					ui.avoid.value = _enemy.avoid;
					ui.resist.value = _enemy.resist;
					ui.physicalDefense.value = _enemy.physicalDefense;
					ui.magicalDefense.value = _enemy.magicalDefense;
					ui.hitpoint.value = _enemy.hitpoint;
					ui.hate.value = _enemy.hate;
					ui.initiative.value = _enemy.initiative;
					ui.move.value = _enemy.move;
					ui.fate.value = _enemy.fate;
					for (let index = 0; index < ui.skills.length; index++) {
						const element = ui.skills[index];
						element.value = toSkillPlainText(_enemy.skills[index]);
						element.title = element.value;
					}
					ui.drop.value = _enemy.drop;
					ui.explain.value = _enemy.explain;
				};
			}
		},
		false
	);
	input.click();
	input.remove();
}
function exportCcofolia() {
	const ccforia = new Ccforia();
	ccforia.setName(_enemy.name);
	let tags = _enemy.throne.includes("raid") ? "[レイド]" : _enemy.throne.includes("boss") ? "[ボス]" : "";
	tags += `[${_enemy.raceName}]`;
	tags += _enemy.tags
		.filter((t) => t.length > 0)
		.map((t) => `[${t}]`)
		.join("");
	ccforia.setMemo(`${_enemy.name}〈${_enemy.ruby}〉 ランク:${_enemy.rank}\nタグ:${tags}\n識別難易度:${_enemy.identification} 【行動力】${_enemy.initiative}`);
	ccforia.setInitiative(_enemy.initiative);

	ccforia.appendStatus("HP", _enemy.hitpoint, _enemy.hitpoint);
	ccforia.appendStatus("因果力", _enemy.fate, _enemy.fate);

	const defense = _enemy.physicalDefense > _enemy.magicalDefense ? "物理＞魔法" : _enemy.physicalDefense < _enemy.magicalDefense ? "物理＜魔法" : "物理＝魔法";
	let identifyData = `${_enemy.name}〈${_enemy.ruby}〉 ランク:${_enemy.rank}\nタグ:${tags} 防御:${defense} ヘイト倍率:x${_enemy.hate} 識別難易度:${_enemy.identification} \n【行動力】${_enemy.initiative}【移動力】${_enemy.move}\n`;
	identifyData += `[特技]\n${_enemy.skills
		.filter((skill) => skill.name.length > 0)
		.map((skill) => toSkillPlainText(skill))
		.join("\n")}`;
	ccforia.appendParams("識別後データ", identifyData);
	ccforia.appendParams("解説", _enemy.explain);

	let command = "";
	command += "▼判定";
	if (_enemy.avoid.includes("D")) {
		const result = _enemy.avoid.match(/^(?<mod>[0-9]+).*(?<dice>[0-9]+)D/);
		command += `\n${result.groups.dice}LH+${result.groups.mod} 回避値`;
	} else {
		command += `\n${parseInt(_enemy.avoid)}[固定] 回避値`;
	}
	if (_enemy.resist.includes("D")) {
		const result = _enemy.resist.match(/^(?<mod>[0-9]+).*(?<dice>[0-9]+)D/);
		command += `\n${result.groups.dice}LH+${result.groups.mod} 抵抗値`;
	} else {
		command += `\n${parseInt(_enemy.resist)}[固定] 抵抗値`;
	}
	if (_enemy.throne != "mob") {
		command += `\n2LH+${_enemy.str} 運動値`;
	} else {
		command += `\n${_enemy.str + 6}[固定] 運動値`;
	}
	command += `\n\n▼特技`;
	_enemy.skills
		.filter((skill) => skill.name.length > 0)
		.forEach((skill) => {
			command += `\n${toSkillPlainText(skill)}`;
			if (skill.command.length > 0) {
				command += `\n${skill.command}`;
			}
		});
	command += `\n\n▼ドロップ品`;
	if (_enemy.drop.length > 0) {
		command += `\n${_enemy.drop}`;
	}
	command += `\n\n▼ステータス`;
	command += `\n【STR】${_enemy.str} 【DEX】${_enemy.dex} 【POW】${_enemy.pow} 【INT】${_enemy.int}`;
	command += `\n【回避】${_enemy.avoid} 【抵抗】${_enemy.resist} 【物理防御力】${_enemy.physicalDefense} 【魔法防御力】${_enemy.magicalDefense}`;
	command += `\n【最大HP】${_enemy.hitpoint} 【ヘイト倍率】x${_enemy.hate} 【行動力】${_enemy.initiative} 【移動力】${_enemy.move} 【因果力】${_enemy.fate}`;

	ccforia.setCommands(command);
	if (navigator.clipboard) {
		try {
			navigator.clipboard.writeText(ccforia.getJson());
			showAlert("クリップボードにコピーしました。<br>ココフォリアにペーストすることでデータを取り込めます。", "green");
		} catch (err) {
			console.log(err);
			showAlert("クリップボードのコピーに失敗しました。", "red");
		}
	}
}

async function wait(timeout) {
	return new Promise((resolve) => setTimeout(resolve, timeout));
}
async function showAlert(content, color = "green") {
	const alertArea = document.getElementById("alert");
	const card = document.createElement("div");
	card.className = "card alert";
	card.style.backgroundColor = "whitesmoke";
	card.style.margin = "5px";
	card.style.borderRadius = "5px";
	card.style.opacity = 0;
	card.style.transform = `translate(300px, 0)`;
	card.style.width = "300px";
	const cardSection = document.createElement("div");
	cardSection.name = "card-section";
	const contentParagraph = document.createElement("p");
	contentParagraph.style.fontSize = "small";
	contentParagraph.innerHTML = content;
	const bar = document.createElement("div");
	bar.style.backgroundColor = color;
	bar.style.width = "100%";
	bar.style.height = "5px";
	alertArea.appendChild(card);
	card.appendChild(cardSection);
	cardSection.appendChild(contentParagraph);
	card.appendChild(bar);
	for (let frame = 0; frame < 90; frame++) {
		await wait(30);
		if (frame <= 5) {
			const rate = Math.sin((Math.PI * frame) / 10);
			card.style.transform = `translate(${(1 - rate) * 300}px, 0)`;
			card.style.opacity = rate;
		} else if (frame > 85) {
			const rate = Math.sin((Math.PI * (frame - 85)) / 10);
			card.style.opacity = 1 - rate;
		} else {
			const rate = 100 * (1 - (frame - 5) / 80);
			bar.style.width = `${Math.round(rate)}%`;
		}
	}
	card.remove();
}
