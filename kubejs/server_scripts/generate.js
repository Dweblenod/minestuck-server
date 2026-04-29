// priority: 50

// We try to call generateData() once under the assumption that multiple calls increases load times

ServerEvents.generateData('last', (event) => {
  generateDwebMisc(event);
  generateDwebGen(event);
  generateDwebRecipes(event);
  generateMedliTweaks(event);
  generateGateways(event);
  generateAmmo(event);
  generateTemp(event);
  generateWeapons(event);
  generateDwebDialogue(event);
  generateCaptchas(event);
});