import moment from 'moment-timezone'
import { convertDate } from 'Helper/localDate'

const Moment = (() => {
    // private member
    const formatDate = (date, format) => {
        if(format){
            return date.format(format)
        }else{
            return date.format("YYYY-M-D")
        }
    }

    // public member
    class MomentClass {
        constructor(){
            moment.tz.setDefault("Asia/Jakarta")
            moment.locale("id")
            /* hidding moment warning messages */
            moment.suppressDeprecationWarnings = true
        }

        convertDate(date, format = null) {
            const convertDateLocal = convertDate(date)
            return formatDate(moment(convertDateLocal), format)
        }

        format(date, format = null){
            return formatDate(moment(date), format)
        }

        addAFewMinutes(date,format = 'DD-MM-YYYY HH:mm:ss',minute=1){
            return formatDate(moment(date).add('minutes', minute), format)
        }

        timestamp(date, format = null){
            return formatDate(moment.unix(date), format)
        }

        now(format = null){
            return formatDate(moment(), format)
        }

        tomorrow(format = null){
            return formatDate(moment().add(1, "days"), format)
        }

        addTime(date = new Date(), format = null, type = 'minutes', time = 1){
            return formatDate(moment(date).add(time, type), format)
        }

        yesterday(format = null){
            return formatDate(moment().subtract(1, "days"), format)
        }

        last7days(format = null){
            return formatDate(moment().subtract(7, "days"), format)
        }

        last1month(format = null){
            return formatDate(moment().subtract(1, "month"), format)
        }

        currentDateAddOneDay(date, format = 'DD-MM-YYYY'){
            return formatDate(moment(date).add('days', 1), format)
        }

        last3month(format = null){
            return formatDate(moment().subtract(3, "month"), format)
        }

        fromNow(date, timestamp = false){
            if (timestamp) return moment.unix(date).fromNow()
            else return moment(date).fromNow()
        }

        isSame(selectedDate,ComparedByDate = null){
            return moment(selectedDate).isAfter(ComparedByDate?ComparedByDate:this.now());
        }

        isBefore(selectedDate,ComparedByDate = null){
            return moment(selectedDate).isBefore(ComparedByDate?ComparedByDate:this.now())
        }

        isAfter(selectedDate,ComparedByDate = null){
            let realDate;
            // Checking Selected Date Is String Or Not
            if(typeof selectedDate == 'string'){
                realDate = convertDate(selectedDate, "YYYY-MM-DD")
            }else{
                realDate = selectedDate
            }
            return moment(realDate).isAfter(ComparedByDate?ComparedByDate:this.now());
        }

        isAfterOrSame(selectedDate,ComparedByDate = null){
            return moment(selectedDate).isSameOrAfter(ComparedByDate?ComparedByDate:this.now());
        }

        isPass(date){
            const dateNow = this.now("YYYY-MM-DD"),
                  timeNow = this.now("HH:mm:ss"),
                  dateCompare = this.format(date, "YYYY-MM-DD"),
                  timeCompare = this.format(date, "HH:mm:ss")

            if(/* if date now and compare are same */ moment(dateCompare).isSame(dateNow)){
                /* checking hour minute and secon */
                if(timeNow.toString() <= timeCompare.toString()){
                    return false
                }
                return true
            }else{
                return moment(dateCompare).isBefore(dateNow)
            }
        }

        duration(time, compare) {
            return moment.duration(time, compare)
        }
    }

    return MomentClass

})()

export default new Moment()
