function openTab(service) {
  const content = {
    screen: "We replace Android & iOS screens. Select your device brand & model for quick repair.",
    charging: "Charging port repair and replacement for all smartphones.",
    battery: "Battery replacement with genuine parts and 3 months warranty.",
    software: "Fix MIUI stuck logo, Android/iOS software issues, reinstallation.",
    door: "Home service within 30 km. Call us & we will come to you.",
    accessories: "Enter the accessory name you need. We will order & deliver."
  };

  document.getElementById("tabContent").innerHTML = `<p>${content[service]}</p>`;
}
