export const getTime = date => {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let time = hours >= 12 ? 'AM' : 'PM';

    // convert to 12-hour time 
    hours = ((hours + 11) % 12 + 1)

    // add 0 to minutes under 10
    if(minutes < 10) minutes = `0${minutes}`

    return `${hours}:${minutes} ${time}`
}

export const getDate = timestamp => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let month = timestamp.getMonth();
    let date = timestamp.getDate();
    let year = timestamp.getFullYear();

    return `${months[month]} ${date}, ${year}`
}