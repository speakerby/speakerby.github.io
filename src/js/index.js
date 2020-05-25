const SENDGRID_TOKEN = '';
const contactsForm = document.getElementById('contacts');
const submitButton = document.getElementById('submitButton');
const buttonSpinner = document.getElementById('button-spinner');
const buttonText = document.getElementById('button-text');
const contactSuccessMessage = document.getElementById('contact-success');
const contactFailureMessage = document.getElementById('contact-failure');

const formElements = [...contactsForm.elements]; 
const getValues = ({ elements }) => [...elements].reduce(
  (acc, el) => ['INPUT', 'TEXTAREA'].includes(el.tagName) 
  ? { ...acc, [el.name]: el.value } 
  : acc, 
  {});

const clearValues = ({ elements }) => [...elements].forEach(el => {
  el.value = "";
});

const enableLoading = () => {
  contactSuccessMessage.style.display = 'none';
  contactFailureMessage.style.display = 'none';
  submitButton.classList.add('loading');
  buttonSpinner.style.display = 'inline-block';
  buttonText.style.display = 'none';
  submitButton.disabled = true;
};

const disableLoading = () => {
  submitButton.classList.remove('loading');
  buttonText.style.display = 'inline';
  buttonSpinner.style.display = 'none';
  submitButton.disabled = false;
};

const sendSuccess = () => {
  submitButton.style.display = 'none';
  contactSuccessMessage.style.display = 'inline';
};

const sendFailure = () => {
  disableLoading();
  contactFailureMessage.style.display = 'inline';
};

contactsForm.addEventListener('submit', e => {
  e.preventDefault();
  const values = getValues(e.target);
  enableLoading();
  console.log(values);
  setTimeout(() => {
    sendSuccess();
    clearValues(e.target);
    // sendFailure();
  }, 1000);
});
