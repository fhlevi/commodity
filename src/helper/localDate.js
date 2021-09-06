const isEmpty = obj => {
    return obj.constructor === Object && Object.entries(obj).length === 0
}

const months = [
    { id: 1, regex: /^(jan(uar(i|y))?)$/gi, name: 'january' },
    { id: 2, regex: /^(feb(ruar(i|y))?)$/gi, name: 'february' },
    { id: 3, regex: /^(mar(et|ch)?)$/gi, name: 'march' },
    { id: 4, regex: /^(apr(il)?)$/gi, name: 'april' },
    { id: 5, regex: /^(m(ei|ay))$/gi, name: 'may' },
    { id: 6, regex: /^(jun(e|i)?)$/gi, name: 'june' },
    { id: 7, regex: /^(jul(i|y)?)$/gi, name: 'july' },
    { id: 8, regex: /^((Aug(ust)?)|(agu(stus)?))$/gi, name: 'august' },
    { id: 9, regex: /^(sep(tember)?)$/gi, name: 'september' },
    { id: 10, regex: /^((oct|okt)(ober)?)$/gi, name: 'october' },
    { id: 11, regex: /^((nov|nop)(ember)?)$/gi, name: 'november' },
    { id: 12, regex: /^((des|dec)(ember)?)$/gi, name: 'december' },
]

const monthConvert = (m) => {
    let data = {}
    for (let item of months) {
        let reg = new RegExp(item.regex, 'i')
        if(reg.test(m)){
            data = {...item}
            break
        }
    }
    return data
} 

const convertDate = (localDate) => {
    if(typeof localDate  == 'string') {
        const splitDate = localDate.split(' ')
        if (splitDate.length === 3) {
            const monthData = monthConvert(splitDate[1])
            if(!isEmpty(monthData)) {
                return `${splitDate[2]}-${monthData.id}-${splitDate[0]}`
            } else {
                throw new Error('FORMAT MONTH IS WRONG eg: "Jan" or "January"')        
            }
        } else {
            throw new Error('FORMAT DATE MUST BE dd mm yyyy eg: 03 Oktober 2019')    
        } 
    } else {
        throw new Error('ARGUMENT DATE MUST BE A STRING')
    }
}

export {
    convertDate,
    monthConvert
}