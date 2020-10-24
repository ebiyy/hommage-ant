const GLOSSARY = {
  food: 'food',
  crystal: 'crystal',
  soil: 'soil',
  fungus: 'fungus',
  wood: 'wood',
  save: 'save',
  ui: 'ui',
  credit: 'credit',
  setting: 'setting',
};

export const ROUTING_PATH = {
  root: '/',
  food: `/${GLOSSARY.food}`,
  crystal: `/${GLOSSARY.crystal}`,
  soil: `/${GLOSSARY.soil}`,
  fungus: `/${GLOSSARY.fungus}`,
  wood: `/${GLOSSARY.wood}`,
  setting: `/${GLOSSARY.setting}`,
  save: `/${GLOSSARY.setting}/${GLOSSARY.save}`,
  ui: `/${GLOSSARY.setting}/${GLOSSARY.ui}`,
  credit: `/${GLOSSARY.setting}/${GLOSSARY.credit}`,
};
