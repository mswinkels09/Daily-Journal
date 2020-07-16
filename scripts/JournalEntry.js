export const JournalEntryComponent = (entry) =>{
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="entry__date">${entry.date}</div>
            <div class="entry__concept">${entry.concept}</div>
            <div class="entry__concept">${entry.entry}</div>
            <div class="entry__concept">${entry.mood}</div>
        </section>`
}