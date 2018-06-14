<template>
  <q-page padding class="">
    <q-card >
  <q-card-title>
    Already a user? Log In To SwapSteem!
  </q-card-title>
  <q-card-separator />
  <q-card-main>
      <q-field
        icon="mail"
        label="Email"
        label-width= 3
        @blur="$v.form.email.$touch"
        :error="$v.form.email.$error"
        helper="Enter your registered email address to Log in"
        error-label="Please type a valid email address"
        >
        <q-input
        type="email"
        v-model="form.email"
        />
      </q-field>
      <q-field
        icon="vpn_key"
        label="Password"
        label-width= 3
        helper="Enter your password"
        :error="$v.form.email.$error"
        error-label="Please type a valid password"
        >
        <q-input
        type="password"
        v-model="form.password"
        />
      </q-field>
  </q-card-main>
  <q-card-separator />
  <q-card-actions align="center">
    <q-btn color="primary" align="center" label="Log In" @click="submit" />
  </q-card-actions>
</q-card>
</q-page>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    submit () {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.')
      }
      this.$store.dispatch('user/login', {
        email: this.form.email,
        password: this.form.password,
        strategy: 'local'
      }).then(() => {
        this.$router.push('/secured')
      })
    }
  }
}
</script>

<style>
</style>
