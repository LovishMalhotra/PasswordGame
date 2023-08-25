const input = document.querySelector(".input-text");
const inputString = input.value;
const lengthCounter = document.querySelector(".password-length");
const inputLength = document.querySelector(".password-length").innerText.length;

const rule = document.querySelector(".rule");
const source = document.querySelector(".imageSource");
const rules = [
  {
    ruleType: "Rule 1",
    ruleDesc: "Your password must be at least 5 characters.",
  },
  {
    ruleType: "Rule 2",
    ruleDesc: "Your password must includes a number.",
  },
  {
    ruleType: "Rule 3",
    ruleDesc: "Your passord must include uppercase",
  },
  {
    ruleType: "Rule 4",
    ruleDesc: "Your password must include special character",
  },
  {
    ruleType: "Rule 5",
    ruleDesc: "The digits in your password must add up to 25.",
  },
  {
    ruleType: "Rule 6",
    ruleDesc: "Your password must include a month of the year",
  },
  {
    ruleType: "Rule 7",
    ruleDesc: "Your password must include roman number",
  },
  {
    ruleType: "Rule 8",
    ruleDesc: "Your password must include one of our sponsors:",
  },
  {
    ruleType: "Rule 9",
    ruleDesc: "Your password must include one of our sponsors:",
  },
  {
    ruleType: "Rule 10",
    ruleDesc: "Your password must include this CAPTCHA:",
  },
];

function createRuleElement(ruleObj, val) {
  const ruleDiv = document.createElement("div");
  ruleDiv.className = "rule";
  const ruleTop = document.createElement("span");
  ruleTop.className = "rule-top";
  const iconImg = document.createElement("img");

  iconImg.className = "imageSource";
  if (val == 0) {
    iconImg.src = "https://neal.fun/password-game/error.svg";
  } else {
    iconImg.src = "https://neal.fun/password-game/checkmark.svg";
  }

  iconImg.alt = "";

  ruleTop.appendChild(iconImg);
  ruleTop.appendChild(document.createTextNode(`  ${ruleObj.ruleType}`));
  const ruleDes = document.createElement("div");
  ruleDes.className = "rule-des";
  ruleDes.textContent = ruleObj.ruleDesc;
  ruleDiv.appendChild(ruleTop);
  ruleDiv.appendChild(ruleDes);

  return ruleDiv;
}

const container = document.getElementById("container");

function handleRule1() {
  container.innerHTML = "";
  if (input.value.length < 5) {
    const ruleError = createRuleElement(rules[0], 0);
    container.append(ruleError);
  } else {
    const ruleError = createRuleElement(rules[0], 1);
    container.append(ruleError);
  }
}

function handleRule2() {
  if (/\d/.test(input.value)) {
    const ruleError = createRuleElement(rules[1], 1);
    container.append(ruleError);
  } else {
    const ruleError = createRuleElement(rules[1], 0);
    container.append(ruleError);
  }
}

function handleRule3() {
  if (/[A-Z]/.test(input.value)) {
    const ruleError = createRuleElement(rules[2], 1);
    container.append(ruleError);
  } else {
    const ruleError = createRuleElement(rules[2], 0);
    container.append(ruleError);
  }
}

function handleRule4() {
  if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-]/.test(input.value)) {
    const ruleError = createRuleElement(rules[3], 1);
    container.append(ruleError);
  } else {
    const ruleError = createRuleElement(rules[3], 0);
    container.append(ruleError);
  }
}

function handleRule5() {
  let total = 0;
  for (let i = 0; i < input.value.length; i++) {
    const digit = parseInt(input.value[i]);

    if (!isNaN(digit)) {
      total += digit;
    }
  }

  if (total !== 25) {
    const ruleError = createRuleElement(rules[4], 0);
    container.append(ruleError);
  } else {
    const ruleError = createRuleElement(rules[4], 1);
    container.append(ruleError);
  }
}

function handleRule6() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const normalInput = input.value.toLowerCase(); // Normalize input for case-insensitive matching

  for (const month of monthNames) {
    console.log(normalInput.includes(month.toLowerCase()));
    if (normalInput.includes(month.toLowerCase())) {
      const ruleError = createRuleElement(rules[5], 1);
      container.append(ruleError);
    } else {
      const ruleError = createRuleElement(rules[5], 0);
      container.append(ruleError);
    }
  }
}

function handleRule7() {
  const romanNumeralPattern =
    /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

  for (let i = 0; i < input.value.length; i++) {
    const roman = input.value[i];

    if (romanNumeralPattern.test(roman)) {
      const ruleError = createRuleElement(rules[6], 1);
      container.append(ruleError);
    } else {
      const ruleError = createRuleElement(rules[6], 0);
      container.append(ruleError);
    }
  }
}

function handleRule8() {
  const normalizedInput = input.value.toLowerCase();
  if (
    normalizedInput.includes("starbucks") ||
    normalizedInput.includes("pepsi")
  ) {
    console.log(true);
    const ruleError = createRuleElement(rules[7], 1);
    container.append(ruleError);
  } else {
    console.log(false);
    const ruleError = createRuleElement(rules[7], 0);
    container.append(ruleError);
  }
}

function handleInput() {
  lengthCounter.innerText = input.value.length;
  handleRule1();
  handleRule2();
  handleRule3();
  handleRule4();
  handleRule5();
  handleRule6();
  handleRule7();
  handleRule8();
}
