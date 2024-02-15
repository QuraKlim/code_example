import delve from "dlv";

// export async function checkRequiredData(block: any) {
//   return block;
// }

export async function getDataDependencies(json: object) {
  let components = delve(json, "components", []);
  components = await Promise.all(components.map((comp: object) => comp));
  return {
    ...json,
    components,
  };
}
