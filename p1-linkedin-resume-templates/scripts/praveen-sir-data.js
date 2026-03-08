const userData = {
  fullName: "Praveen Gubbala",
  tagline: "Fullstack Consultant Trainer",
  place: "Hyderabad, Telangana, India",
  summary:
    "Dedicated training professional that strives to present cutting edge technology in a manner that neophytes and craftsmen can garner information. Committed to providingindividualized attention to meet pre-set criteria for completing the task at hand. An expert in performance based training that fosters the proper solution for the concern at hand.",
  experience: [
    {
      role: "Training Consultant",
      company: "ThoughtWorks",
      period: "Dec 2025 - Present",
    },
    { role: "Founder", company: "Edupoly", period: "Jan 2021 - Present" },
    {
      role: "Corporate Trainer",
      company: "upGrad",
      period: "May 2022 - Present",
    },
  ],
  contact: { phone: 7875381293, email: "praveengclasses@gmail.com" },
  skills: ['Leadership', 'React JS', 'Angular JS', 'JavaScript', 'MongoDB', 'Node JS', 'SQL'],
  languages: ['Telugu', 'English', 'Hindi']
};

let fullName = document.querySelector(".fullname-field-para");
let tagline = document.querySelector(".tagline-field-para");
let place = document.querySelector(".place-field-para");
let summary = document.querySelector(".summary-field-para");
let experience = document.querySelector(".experience-field-para");
let contact = document.querySelector(".contact-field-para");
// let education=document.querySelector(".")

function renderResumeData() {
  if (userData.fullName) {
    fullName.textContent = userData.fullName;
  } else {
    fullName.textContent = " - ";
  }
  if (userData.tagline) {
    tagline.textContent = userData.tagline;
  } else {
    tagline.textContent = " - ";
  }
  if (userData.place) {
    place.textContent = userData.place;
  } else {
    place.textContent = " - ";
  }
  if (userData.summary) {
    summary.textContent = userData.summary;
  } else {
    summary.textContent = " - ";
  }
  if (userData.experience) {
    let experienceContainer = document.createElement("div");
    var experienceList = userData.experience;
    experienceList.forEach((experienceItem) => {
      let experienceItemContainer = document.createElement("div");
      let role = document.createElement("p");
      role.textContent = experienceItem.role;

      let company = document.createElement("p");
      company.textContent = experienceItem.company;

      let period = document.createElement("p");
      period.textContent = experienceItem.period;

      experienceItemContainer.appendChild(role);
      experienceItemContainer.appendChild(company);
      experienceItemContainer.appendChild(period);
      experienceContainer.appendChild(experienceItemContainer);
    });
    experience.appendChild(experienceContainer);
  } else {
    experience.textContent = " - ";
  }
  if (userData.contact) {
    contact.textContent =
      userData.contact.phone + " | " + userData.contact.email;
  } else {
    contact.textContent = " - ";
  }
}

renderResumeData();
