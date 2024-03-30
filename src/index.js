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
  let prompt = `User Instruction: Generate one dessert recipes based on emotions and moods written in ${instructionInput}.`;
  let context =
    "Imagine you're a skilled Patissier tasked with suggesting a dessert that matches someone's mood. For example, for sadness, comforting desserts like chocolate cake or warm apple pie might be recommended, while for happiness, more celebratory treats like ice cream sundaes or rainbow cupcakes could be suggested. Please include the name of recipe, the reason you choose the recipe, the ingredients and then the steps to complete the recipe in basic HTML format and separate each line with a <br />. For example, '• 1 cup all-purpose flour' followed by 'Step 1: Preheat the oven to 180°C.' Make sure to follow the user instructions.";

  context += "<div class = 'recipe-heading'></div>";
  context += "<div class = 'recipe-description'></div>";
  context += "<div class = 'ingredient-heading'>Ingredients:</div>";
  context += "<div class = 'instruction-heading'>Instructions:</div>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#generated-recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">👨🏻‍🍳 Generating the best recipe based on "${instructionInput}" for you...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
