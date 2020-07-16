import {useJournalEntries} from "./JournalDataProvider.js"
import {JournalEntryComponent} from "./JournalEntry.js"

const entryLog = document.querySelector(".entries")

export const JournalList = () => {
    const entries = useJournalEntries()

    let entryHTMLRepresentations = ""
    for (const entry of entries) {
        entryHTMLRepresentations += JournalEntryComponent(entry)


        entryLog.innerHTML += 
        `<article class="entries">
            ${entryHTMLRepresentations}
        </article>`
    }
}