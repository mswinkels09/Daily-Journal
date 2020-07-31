import { saveEntry } from "./JournalDataProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entry__form")

eventHub.addEventListener("click", clickEvent => {

    if(clickEvent.target.id === "saveEntry") {
        const entryDate = document.querySelector("#newJournalDate")
        const entryTitle = document.querySelector("#newJournalTitle")
        const journalEntry = document.querySelector("#newJournalEntry")
        const entryMood = document.querySelector("#newJournalMood")

        const newEntry = {
            date: entryDate.value,
            concept: entryTitle.value,
            entry: journalEntry.value,
            mood: entryMood.value
        }
        saveEntry(newEntry)
    }
})

const render = () => {

    contentTarget.innerHTML = `
    <section class="entryForm">
            <input type="date" id="newJournalDate" placeholder="Journal Entry Date" />
            <input type="text" id="newJournalTitle" placeholder="Enter Journal Entry Title" />
            <textarea type="text" id="newJournalEntry" placeholder="Just start writing..."></textarea>
            <select id="newJournalMood" placeholder="Select Mood">
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Angry">Angry</option>
            </select>
        <input type="submit" value="Save Entry" id="saveEntry" class="button__submit">
    </section>
    `
}

export const EntryForm = () => {
    render()
}