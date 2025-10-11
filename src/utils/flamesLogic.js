export function getFlamesResult(name1, name2) {
  let n1 = name1.replace(/\s+/g, "").toLowerCase();
  let n2 = name2.replace(/\s+/g, "").toLowerCase();

  let steps = [];

  // Step 1: Remove common letters
  let common = [];
  for (let i = 0; i < n1.length; i++) {
    const char = n1[i];
    if (n2.includes(char)) {
      common.push(char);
      n1 = n1.replace(char, "");
      n2 = n2.replace(char, "");
      i--;
    }
  }

  const totalCount = n1.length + n2.length;
  steps.push(
    `Removed common letters (${common.join(", ") || "none"}) → remaining letters = ${totalCount}`
  );

  // Step 2: Eliminate through FLAMES
  const flames = ["F", "L", "A", "M", "E", "S"];
  let eliminationSteps = [];
  let index = 0;

  while (flames.length > 1) {
    index = (index + totalCount - 1) % flames.length;
    const removed = flames.splice(index, 1)[0];
    eliminationSteps.push(`Removed '${removed}', remaining: ${flames.join("")}`);
  }

  steps.push(...eliminationSteps);

  const resultMap = {
    F: "Friends",
    L: "Lovers",
    A: "Affection",
    M: "Marriage",
    E: "Enemies",
    S: "Siblings",
  };

  return {
    result: resultMap[flames[0]],
    steps,
    count: totalCount,
    common,
  };
}
