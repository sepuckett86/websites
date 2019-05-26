function filterSymposia(symposia, filter) {
    const lowerCaseFilter = filter.text.toLowerCase();
    return symposia.filter(symposium => {
        const lowerCaseTitle = symposium.TITLE.toLowerCase();
        const hasTitle = lowerCaseTitle.includes(lowerCaseFilter);
        const lowerCaseChair = symposium.CHAIR.toLowerCase();
        const hasChair = lowerCaseChair.includes(lowerCaseFilter);
        const hasYear = symposium.YEAR.toString().includes(lowerCaseFilter);
        return hasTitle || hasChair || hasYear;
    });
}

export default filterSymposia;