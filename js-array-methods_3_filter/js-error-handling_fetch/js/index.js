console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  try {
    const response = await fetch(url);

    // Änderung im Code

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Enhanced error handling mit 'fetchUserData'-function : diese checkt nun ob die Antwort
    // in Ordnung ist und gibt einen Fehler mit dem Statuscode aus. Dadurch wird sichergestellt,
    // dass der Fehler abgefangen wird, wenn der Benutzer nicht existiert oder ein anderes Problem mit der API-Anfrage vorliegt.

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}

const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    const result = await fetchUserData(endpoint.url);

    if (result.error) {
      // Änderung im Code
      //  vorher :     errorElement.textContent = result.error;

      errorElement.textContent = `Error: ${result.error}`;

      // Wenn ein Fehler erkannt wird, wird die Fehlermeldung im Element <p class="error" data-js="error"></p> angezeigt.
      // Dieses erlaubt es eine  benutzerfreundliche Fehlermeldung mit Statuscode angezeigt zu bekommen, die deutlich macht,
      // warum die Anfrage fehlgeschlagen ist.

      userElement.innerHTML = "No user data available.";
    } else {
      const user = result.data;
      userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
      errorElement.textContent = "";
    }
  });
});
