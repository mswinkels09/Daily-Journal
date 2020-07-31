import {useJournalEntries, getEntries} from "./JournalDataProvider.js"
import {JournalEntryComponent} from "./JournalEntry.js"

const entryLog = document.querySelector(".entries")
const eventHub = document.querySelector(".container")


export const JournalList = () => {

    getEntries()
    .then(() => {
        const allEntries = useJournalEntries()
        render(allEntries)
    })
}

const render = (entryArray) => {

    const entriesConvertedToStrings = entryArray.map(
        (currentEntry) => {
            return JournalEntryComponent(currentEntry)
        }
    ).join("")

    entryLog.innerHTML = entriesConvertedToStrings
}