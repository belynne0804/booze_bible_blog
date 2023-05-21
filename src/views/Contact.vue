<template>
    <div class="w3-container">
      <h1>How to Reach Me...</h1>
    </div>
</template>

<script>

var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default {
    name: 'Contact',
    data: function() {
      return {
      name: "Amy Johnson",
      email: {
        value: "amy.dixon@rocky.edu",
        valid: true
      },
      message: {
        text: `Dear Miss Amy ,\n...`,
        maxlength: 255
      },
      submitted: false
    };
    },
    methods: {
      //check for valid email
      isValidEmail: function(emailToTest) {
        return emailRegExp.test(emailToTest);
      }

    }, watch: {

    }
}

</script>

<style>

</style>