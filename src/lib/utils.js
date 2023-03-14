import dynamic from "next/dynamic";

export async function getComponentMap(sections) {
  return new Promise(async (resolve) => {
    const map = {};
    for (let i = 0; i < sections.length; i++) {
      const template = sections[i].template.doc;
      map["section" + i] = import(
        `../components/plugins/richjava-my-plugin/templates/${template.category}/${template.slug}/${template.slug}.tsx`
      );
    }
    resolve(map);
  });
}

export function getComponents(sections) {
  return new Promise((resolve) => {
    getComponentMap(sections).then((map) => {
      let comps = [];
      for (const key of Object.keys(map)) {
        let comp = dynamic(() => map[key], {
          suspense: false,
        });
        comps.push(comp);
      }
      resolve(comps);
    });
  });
}