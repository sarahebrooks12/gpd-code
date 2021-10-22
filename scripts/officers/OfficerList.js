import { Officer } from "./OfficerCard.js";
import { getOfficers, useOfficers } from "./OfficerProvider.js";

const contentTarget = document.querySelector("#container")

export const OfficerList = () => {
  getOfficers()
  .then(() => {

    let officersArray = useOfficers();

    let officerHTML = "";

    officersArray.forEach((singleOfficerObj) => {

      officerHTML += Officer(singleOfficerObj);

    });

    contentTarget.innerHTML = officerHTML

  });
};