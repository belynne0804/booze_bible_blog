<template>
<form 
  @submit="submitForm"
>  
  <div class="contact">
    <h1 class="contact-header">Don't hesitate to get in touch.</h1>
    <label for="fname">First Name</label>
      <input v-model="form.fname" type="text" id="fname" name="firstname" placeholder="Your name..">

      <label for="lname">Last Name</label>
      <input v-model="form.lname" type="text" id="lname" name="lastname" placeholder="Your last name..">

      <label for="country">Country</label>
        <select v-model="form.country" id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

      <label for="subject">Subject</label>
      <textarea v-model="form.subject" id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

      <input type="submit" value="Submit">
  </div>
  </form>
</template>

<script>

export default {
    name: 'Contact',
    mounted() {
        console.log('Component mounted.')
    },
    data(){
        return{
            form: {
                fname: '',
                lname: '',
                country: '',
                subject: ''
            }
        }
    },
    methods:{
        submitForm(e) {
          e.preventDefault();
          let currentObj = this;
          this.axios.post('/Contact-Mailer.php', {
              fname: this.fname,
              lname: this.lname,
              country: this.country,
              subject: this.subject
          })
          .then(function (response) {
              currentObj.output = response.data;
          })
          .catch(function (error) {
              currentObj.output = error;
          });
      }
    }
}

</script>

<style>

  .contact-header {
    color: #ffff66; 
  }

  input[type=text], select, textarea {
    width: 100%; /* Full width */
    padding: 12px; /* Some padding */ 
    border: 1px solid #ccc; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
  }

  input[type=submit] {
    background-color: #04AA6D;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }

  .container {
    border-radius: 5px;
    padding: 20px;
  }
</style>