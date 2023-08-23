function findMatching(drivers, search_string) {
    const matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase().includes(search_string.toLowerCase())
    );
    return matchingDrivers;
}
function fuzzyMatch(drivers, query_string) {
    const matchingDrivers = drivers.filter(drivers =>
       drivers.toLowerCase().startsWith(query_string.toLowerCase())
       );
       return matchingDrivers;
}
function matchName(driverObjects, search_name) {
    const matchingDrivers = driverObjects.filter(driver =>
        driver.name.toLowerCase() === search_name.toLowerCase()
        );
        return matchingDrivers;
}