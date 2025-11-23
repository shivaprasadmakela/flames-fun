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

export function calculateLovePercentage(name1, name2) {
  const combined = (name1 + name2).toLowerCase();
  let sum = 0;
  for (let i = 0; i < combined.length; i++) {
    sum += combined.charCodeAt(i);
  }
  // Pseudo-random but deterministic based on names
  return (sum % 101);
}

export function getZodiacCompatibility(sign1, sign2) {
  // Simplified compatibility logic
  if (!sign1 || !sign2) return null;
  
  const compatibility = {
    "Aries": ["Leo", "Sagittarius", "Gemini", "Aquarius"],
    "Taurus": ["Virgo", "Capricorn", "Cancer", "Pisces"],
    "Gemini": ["Libra", "Aquarius", "Aries", "Leo"],
    "Cancer": ["Scorpio", "Pisces", "Taurus", "Virgo"],
    "Leo": ["Aries", "Sagittarius", "Gemini", "Libra"],
    "Virgo": ["Taurus", "Capricorn", "Cancer", "Scorpio"],
    "Libra": ["Gemini", "Aquarius", "Leo", "Sagittarius"],
    "Scorpio": ["Cancer", "Pisces", "Virgo", "Capricorn"],
    "Sagittarius": ["Aries", "Leo", "Libra", "Aquarius"],
    "Capricorn": ["Taurus", "Virgo", "Scorpio", "Pisces"],
    "Aquarius": ["Gemini", "Libra", "Aries", "Sagittarius"],
    "Pisces": ["Cancer", "Scorpio", "Taurus", "Capricorn"]
  };

  if (compatibility[sign1]?.includes(sign2)) return "High Compatibility! 🌟";
  if (sign1 === sign2) return "Good Match! ✨";
  return "Interesting Match! 🤔";
}
