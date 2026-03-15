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
roleError.classList = "role-error";

let periodOfExperienceError = document.querySelector(
    ".period-of-experience-span",
);
periodOfExperienceError.classList = "period-of-experience-error";

let shareYourExperienceError = document.querySelector(
    ".share-your-experience-span",
);
shareYourExperienceError.classList = "share-your-experience-error";

let conceptsYouPreparedError = document.querySelector(
    ".concepts-you-prepared-span",
);
conceptsYouPreparedError.classList = "concepts-you-prepared-error";

let modelQuestionsError = document.querySelector(
    ".provide-some-model-questions-span",
);
modelQuestionsError.classList = "model-questions-error";

let journeyForm = document.querySelector(".journey-form");
journeyForm.addEventListener("submit", validateJourneyForm);
let journeyData = [];

//btns
const addJourneyBtn = document.querySelector('.add-journey-btn');

const formOverlay = document.querySelector('.journey-form-overlay');
const formContainer = document.querySelector('.form-container');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-journey-btn')) {
        formContainer.style.display = 'flex';
        formOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});

formOverlay.addEventListener('click', hideJourneyForm);

function hideJourneyForm() {
    formContainer.style.display = 'none';
    formOverlay.style.display = 'none';
    document.body.style.overflow = 'unset';
}
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
            dayOneExperience: shareYourExperience.value,
            conceptsYouPrepared: conceptsYouPrepared.value,
            modelQuestions: modelQuestions.value,
        };
        employeesReviews.push(formData);
        document.querySelector(".journey-form").reset();
        displayPopup();
        renderReviewCards();
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
    popupContainer.classList = "successContainer";

    let icon = document.createElement("img");
    icon.classList = "successIcon";
    icon.src = "./img/formSuccess.png";

    let message = document.createElement("h3");
    message.classList = "successMessage";
    message.textContent = "Your Experience Submitted Successfully";

    let doneButton = document.createElement("button");
    doneButton.innerText = "Done";
    doneButton.classList = "successButton";
    doneButton.addEventListener("click", function () {
        popupContainer.remove();
        hideJourneyForm();
    });

    popupContainer.appendChild(icon);
    popupContainer.appendChild(message);
    popupContainer.appendChild(doneButton);
    document.body.appendChild(popupContainer);
}
