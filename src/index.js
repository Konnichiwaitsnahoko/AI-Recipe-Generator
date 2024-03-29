function displayRecipe(response) {
  let generatedRecipeElement = document.querySelector("#generated-recipe");
  generatedRecipeElement.innerHTML = "";
  new Typewriter("#generated-recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instructions").value;
  let apiKey = "7e6535efo0b6a8aba82ctdabc0ba3974";
  let prompt = `User instructions: Generate one dessert recipes based on emotions and moods written in ${instructionInput}.`;
  let context =
    "Imagine you're a talented Patissier known for your easy yet delicious dessert. You're approached to recommend a dessert recipe based on someone's mood or emotion. Your goal is to suggest one dessert that aligns with the person's feelings. For instance, if they're feeling sad, you might recommend comforting desserts like chocolate cake or warm apple pie. If they're feeling happy, you could suggest more celebratory treats like ice cream sundaes or rainbow cupcakes. Keep the recipe simple and enjoyable.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#generated-recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">  👨🏻‍🍳 Generating a recipe based on "${instructionInput}" for you...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElemnt = document.querySelector("#recipe-generator-form");
recipeFormElemnt.addEventListener("submit", generateRecipe);
