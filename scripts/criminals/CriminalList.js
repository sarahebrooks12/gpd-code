import { Criminal } from "./CriminalCard.js";
import { useCriminals, getCriminals } from "./CriminalProvider.js";

const contentTarget = document.querySelector(".criminals")

export const CriminalList = () => {
  getCriminals()
  .then(() => {

    let criminalsArray = useCriminals();

    let criminalHTML = "";

    criminalsArray.forEach((singleCriminal) => {

        criminalHTML += Criminal(singleCriminal);

    });

    contentTarget.innerHTML = criminalHTML

  });
};