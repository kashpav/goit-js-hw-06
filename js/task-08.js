const refs = {
  form: document.querySelector(".login-form"),
};

const handleSubmit = (e) => {
  e.preventDefault();
  const { email, password } = e.target.elements;
  const emailValue = email.value;
  const passwordValue = password.value;
  if (emailValue.length === 0) {
    console.log("Enter your Email");
  } else if (passwordValue.length === 0) {
    console.log("Enter your Password");
  } else {
    console.log({ Email: emailValue, Password: passwordValue });
    e.target.reset();
  }
};

refs.form.addEventListener("submit", handleSubmit);
