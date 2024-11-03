const data = {
  cities: [
    {
      section: "cupertino",
      label: "Cupertino",
    },
    {
      section: "new-york-city",
      label: "New York City",
    },
    {
      section: "london",
      label: "London",
    },
    {
      section: "amsterdam",
      label: "Amsterdam",
    },
    {
      section: "tokyo",
      label: "Tokyo",
    },
    {
      section: "hong-kong",
      label: "Hong Kong",
    },
    {
      section: "sydney",
      label: "Sydney",
    },
  ],
};

document.addEventListener("DOMContentLoaded", async () => {
  const navBar = document.querySelector(".tab-bar");
  const underLine = document.querySelector(".underline");

  const makeTabActive = (tab) => {
    tab.classList.add("active");
    underLine.style.width = `${tab.offsetWidth}px`;
    underLine.style.left = `${tab.offsetLeft}px`;
  };

  data.cities.forEach((city, index) => {
    // make tab
    const tab = document.createElement("button");
    tab.classList.add("tab");
    tab.textContent = city.label;

    tab.addEventListener("click", () => {
      // get rid of exisiting active tab
      document
        .querySelectorAll(".tab")
        .forEach((t) => t.classList.remove("active"));

      makeTabActive(tab);
    });

    navBar.appendChild(tab);

    // make first tab active by default
    if (index === 0) {
      makeTabActive(tab);
    }
  });
});
