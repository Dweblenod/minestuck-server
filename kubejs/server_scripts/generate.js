// priority: 50

// We try to call generateData() once under the assumption that multiple calls increases load times

ServerEvents.generateData('last', (event) => {
  generateMisc(event);
  generateWorldGen(event);
  //generateRecipes(event);
  //generateGateways(event);
  generateAmmo(event);
  //generateTemp(event);
  //generateWeapons(event);
  generateDialogue(event);
  generateCaptchas(event);
});