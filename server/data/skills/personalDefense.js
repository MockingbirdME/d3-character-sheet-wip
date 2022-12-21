export default {
  name: 'Personal Defense',
  description: "",
  skillChecks: [
     
  ],
  isSkillTree: true,
  traits: [
    {name: "Armor Training", effect: {text: "Reduce the total restrictive value of all worn armor by 1."}, alwaysDisplay: true},
    {name: "Dodge", effect: {text: "Increase the ranged defense bonus granted by the dodge action by 1."}, alwaysDisplay: true},
    {name: "Expert Footwork", effect: {text: "Increase the melee defense bonus granted by the defensive stance action by 1."}, alwaysDisplay: true},
    {name: "Combat Awareness", effect: {text: "Gain +1 defense", attributeBoost: ["Defense"]}},
    {name: "Parry", cost: [2, 5, 13], effect: {text: "Increase the parry value of one of your equipped melee weapons by 1, a weapon's parry value can never exceed double its base value regardless of ranks in this trait."}, alwaysDisplay: true},
    {name: "Shield Expertise", cost: [3, 8], effect: {text: "Increase the block value of one of your equipped shields by 1, a shield's block value can never exceed double its base value regardless of ranks in this trait."}, alwaysDisplay: true},
    {name: "Seasoned Combatant", cost: [3, 8], effect: {text: "When an enemy is making an attack against you that you are aware of, you may spend a max defense to take a dodge or defensive stance action as a reaction, if you have two ranks in this trait, you may spend 2 current defense instead."}, alwaysDisplay: true}
  ],
};