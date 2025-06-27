$(function() {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest("data/categories.json", buildAndShowHomeHTML, true);

  function buildAndShowHomeHTML(categories) {
    $ajaxUtils.sendGetRequest("snippets/home-snippet.html", function(homeSnippet) {
      var chosenCategoryShortName = chooseRandomCategory(categories).short_name;
      var homeHtmlToInsertIntoMainPage = insertProperty(homeSnippet, "randomCategoryShortName", "'" + chosenCategoryShortName + "'");
      insertHtml("#main-content", homeHtmlToInsertIntoMainPage);
    }, false);
  }

  function chooseRandomCategory(categories) {
    var randomArrayIndex = Math.floor(Math.random() * categories.length);
    return categories[randomArrayIndex];
  }
  
  dc.loadMenuCategories = function() {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest("data/categories.json", buildAndShowCategoriesHTML);
  };

  dc.loadMenuItems = function(categoryShort) {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest("data/menu_items.json", function(menuItems) {
      buildAndShowMenuItemsHTML(categoryShort, menuItems);
    }, true);
  };
});
