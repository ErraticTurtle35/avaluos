<script>
import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
export default {
  setup() {
    const validationSchema = object({
      email: string().required().email().label("Email address"),
      password: string().required().label("Password"),
    });

    const { handleSubmit, errors, setFieldValue } = useForm({
      validationSchema,
    });

    const { value: email } = useField("email");
    const { value: password } = useField("password");

    const submit = handleSubmit((values) => {
      console.log("submit", values);
    });

    return {
      email,
      password,
      submit,
      errors,
    };
  },
};
</script>

<template>
  <h1 class="text-purple-500">First Attempt</h1>
  <form @submit.prevent="submit">
    <div class="field">
      <InputText
        v-model="email"
        aria-describedby="email-help"
        :class="{ 'p-invalid': errors.email }"
      />
      <small id="email-help" class="p-error">{{ errors.email }}</small>
    </div>
    <div class="field">
      <Password
        v-model="password"
        aria-describedby="email-help"
        :class="{ 'p-invalid': errors.password }"
        :feedback="false"
      />
      <small id="password-help" class="p-error">{{ errors.password }}</small>
    </div>
    <div class="footer">
      <Button label="Login" type="submit" />
    </div>
  </form>
</template>

<style scoped></style>
