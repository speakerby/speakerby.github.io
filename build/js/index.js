const SENDGRID_TOKEN="",contactsForm=document.getElementById("contacts-form"),submitButton=document.getElementById("submitButton"),buttonSpinner=document.getElementById("button-spinner"),buttonText=document.getElementById("button-text"),contactSuccessMessage=document.getElementById("contact-success"),contactFailureMessage=document.getElementById("contact-failure"),formElements=[...contactsForm.elements],getValues=({elements:t})=>[...t].reduce((t,e)=>["INPUT","TEXTAREA"].includes(e.tagName)?{...t,[e.name]:e.value}:t,{}),clearValues=({elements:t})=>[...t].forEach(t=>{t.value=""}),enableLoading=()=>{contactSuccessMessage.style.display="none",contactFailureMessage.style.display="none",submitButton.classList.add("loading"),buttonSpinner.style.display="inline-block",buttonText.style.display="none",submitButton.disabled=!0},disableLoading=()=>{submitButton.classList.remove("loading"),buttonText.style.display="inline",buttonSpinner.style.display="none",submitButton.disabled=!1},sendSuccess=()=>{submitButton.style.display="none",contactSuccessMessage.style.display="inline"},sendFailure=()=>{submitButton.classList.remove("loading"),buttonText.style.display="inline",buttonSpinner.style.display="none",submitButton.disabled=!1,contactFailureMessage.style.display="inline"};contactsForm.addEventListener("submit",t=>{t.preventDefault();const e=getValues(t.target);contactSuccessMessage.style.display="none",contactFailureMessage.style.display="none",submitButton.classList.add("loading"),buttonSpinner.style.display="inline-block",buttonText.style.display="none",submitButton.disabled=!0,console.log(e),setTimeout(()=>{submitButton.style.display="none",contactSuccessMessage.style.display="inline",clearValues(t.target)},1e3)});