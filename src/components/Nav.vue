<template>
  <div>
    <Nav 
        :navLinks="navLinks" 
        :navConfig="navConfig" 
        :btnConfig="btnConfig"
    />
  </div>
</template>

<script>
import Nav from "vue-nav-ui";

export default {
  components: {
    Nav,
  },
  data(){
        return {
            navLinks: [
                {
                    name: "Home",
                    path: "/",
                },
                {
                    name: "About",
                    path: "/about",
                },
                {
                    name: "Archived Posts",
                    path: "/faqs",
                }
            ],
            navConfig: {
                whitespace: false, /* GIVES PADDING TO YOUR NAV, IF SET TO FALSE, REMOVES PADDING */
                navBg: "#001b3b", /* BACKGROUND COLOR OF YOUR NAV  */
                // navBorderRadius: "30px", /* BORDER RADIUS OF YOUR NAV */
                linkFont: "Avenir", /* FONT FAMILY OF YOUR NAV */
                linkColor: "white", /* FONT COLOR OF YOUR NAV */
                responsivePosition: "top", /* FOR CHANGING THE POSITION OF YOUR NAV WHEN RESPONSIVE. BOTTOM or TOP | The only two options */
            },
            btnConfig: {
                btnLink: false, /* FOR INITIALIZING NAV BUTTON USAGE, IF SET TO FALSE, REMOVES THE NAV BUTTON  */
                btnUrl: "https://dhaniel.disha.page", /* LINK URL OF YOUR NAV BUTTON */
                btnText: "Click Me", /* NAV BUTTON TEXT */
                btnBg: "#40269E", /* BACKGROUND COLOR OF YOUR NAV BUTTON  */
                btnTextColor: "white", /* FONT COLOR OF YOUR NAV BUTTON*/
                btnBorderWidth: "0", /* BORDER WIDTH OF YOUR NAV BUTTON */
                btnBorderColor: "black", /* BORDER COLOR OF YOUR NAV BUTTON */
                btnBorderRadius: "20px", /* BORDER RADIUS OF YOUR NAV BUTTON */
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
