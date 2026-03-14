//input fields
let role = document.querySelector(".role");
let periodOfExperience = document.querySelector(".period-of-experience");
let shareYourExperience = document.querySelector(".share-your-experience");
let conceptsYouPrepared = document.querySelector(".concepts-you-prepared");
let modelQuestions = document.querySelector(".provide-some-model-questions");

//submit button
let submitButton = document.querySelector(".submit-button");

//input field spans
let roleError = document.querySelector(".role-input-span");
let periodOfExperienceError = document.querySelector(
    ".period-of-experience-span",
);
let shareYourExperienceError = document.querySelector(
    ".share-your-experience-span",
);
let conceptsYouPreparedError = document.querySelector(
    ".concepts-you-prepared-span",
);
let modelQuestionsError = document.querySelector(
    ".provide-some-model-questions-span",
);
let journeyData = [];
function validateJourneyForm(event) {
    event.preventDefault();

    let isRole = validateRole();
    let isPeriodOfExperience = validatePeriodOfExperience();
    let isShareYourExperience = validateShareYourExperience();
    let isConceptsYouPrepared = validateConceptsYouPrepared();
    let isModelQuestions = validateModelQuestions();

    let isValid =
        isRole &&
        isPeriodOfExperience &&
        isShareYourExperience &&
        isConceptsYouPrepared &&
        isModelQuestions;

    if (isValid) {
        let formData = {
            role: role.value,
            period: periodOfExperience.value,
            experience: shareYourExperience.value,
            concepts: conceptsYouPrepared.value,
            modelQuestions: modelQuestions.value,
        };
        journeyData.push(formData);
        console.log(journeyData);
        role.value = "";
        periodOfExperience.value = "";
        shareYourExperience.value = "";
        conceptsYouPrepared.value = "";
        modelQuestions.value = "";
        displayPopup();
        return false;
    } else {
        return false;
    }
}

function validateRole() {
    if (role.value === "") {
        roleError.textContent = "Please enter Role";
        return false;
    } else {
        if (role.value.trim().length > 3) {
            roleError.textContent = "";
            return true;
        } else {
            roleError.textContent = "Role Name must be 4 characters at least";
            return false;
        }
    }
}

function validatePeriodOfExperience() {
    if (periodOfExperience.value === "") {
        periodOfExperienceError.textContent = "Please select period of experience";
        return false;
    } else {
        periodOfExperienceError.textContent = "";
        return true;
    }
}

function validateShareYourExperience() {
    if (shareYourExperience.value === "") {
        shareYourExperienceError.textContent = "Please share your experience";
        return false;
    } else {
        if (shareYourExperience.value.trim().length > 5) {
            shareYourExperienceError.textContent = "";
            return true;
        } else {
            shareYourExperienceError.textContent =
                "Your experience should be 6 characters length atleast";
            return false;
        }
    }
}

function validateConceptsYouPrepared() {
    if (conceptsYouPrepared.value === "") {
        conceptsYouPreparedError.textContent =
            "Concepts you prepared can't be empty";
        return false;
    } else {
        if (conceptsYouPrepared.value.trim().length > 5) {
            conceptsYouPreparedError.textContent = "";
            return true;
        } else {
            conceptsYouPreparedError.textContent =
                "concepts you prapared should be 6 characters atleast";
            return false;
        }
    }
}

function validateModelQuestions() {
    if (modelQuestions.value === "") {
        modelQuestionsError.textContent = "Model questions can't be empty";
        return false;
    } else {
        if (modelQuestions.value.trim().length > 5) {
            modelQuestionsError.textContent = "";
            return true;
        } else {
            modelQuestionsError.textContent =
                "Model questions should atleast 6 characters lenght";
            return false;
        }
    }
}

function displayPopup() {
    let popupContainer = document.createElement("div");
    let icon = document.createElement("img");
    icon.src = "./img/formSuccess.png";
    icon.style.width = "30px";
    icon.style.height = "30px";
    icon.style.objectFit = "cover";
    let messsage = document.createElement("h3");
    messsage.textContent = "Your Experience Submitted Successfully";
    let doneButton = document.createElement("button");
    doneButton.innerText = "Done";
    doneButton.addEventListener("click", function () {
        popupContainer.remove();
    });
    doneButton.style.padding = "0.5em 1em";
    doneButton.style.backgroundColor = "#0a66c2";
    doneButton.style.borderRadius = "0.2em";
    doneButton.style.border = "none";
    doneButton.style.color = "#ffffffff";
    popupContainer.appendChild(icon);
    popupContainer.appendChild(messsage);
    popupContainer.appendChild(doneButton);
    popupContainer.style.backgroundColor = "rgba(228, 228, 228, 0.6)";
    popupContainer.style.zIndex = "1000";
    popupContainer.style.height = "250px";
    popupContainer.style.width = "500px";
    popupContainer.style.position = "fixed";
    popupContainer.style.top = "50%";
    popupContainer.style.left = "50%";
    popupContainer.style.transform = "translate(-50%, -50%)";
    popupContainer.style.borderRadius = "8px";
    popupContainer.style.display = "flex";
    popupContainer.style.flexDirection = "column";
    popupContainer.style.gap = "15px";
    popupContainer.style.alignItems = "center";
    popupContainer.style.justifyContent = "center";
    document.body.appendChild(popupContainer);
}
