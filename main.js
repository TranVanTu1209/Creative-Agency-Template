window.addEventListener("load", function () {
  const toggleNav = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");
  const linkItems = document.querySelectorAll(".navigation li a");
  const toggleNavigationHandler = () => {
    toggleNav.classList.toggle("show");
    navigation.classList.toggle("active");
  };
  toggleNav.addEventListener("click", toggleNavigationHandler);
  navigation.addEventListener("click", toggleNavigationHandler);
  // event listeners
  linkItems.forEach((item) => {
    item.addEventListener("click", () => {
      navigation.classList.remove("active");
      toggleNav.classList.remove("show");
    });
  });
});
