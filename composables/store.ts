import moment from 'moment';
import * as moment_fa from "moment-jalaali";
// import * as  moment from 'moment-jalaali'


export function money(input: any) {
    try {
        return input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } catch (e) {
        return input;
    }
}

export function datetime(input: string, format?: string, def?: string) {
    try {
        if (input == null || input.length <= 0) return def;

        if (format == null) format = 'jYYYY/jMM/jDD';
        if (format == 'time') format = 'jYYYY/jMM/jDD  ساعت  hh:mm'
        moment_fa.loadPersian();
        return moment_fa.utc(input).format(format);

    } catch (e) {
        return def;
    }
}


function jalalian(input: any) {
    try {
        let moment = require('moment-jalaali');
        let date = moment(input, 'jYYYY/jMM/jDD HH:mm:ss.SSS');
        return date.format('jYYYY/jM/jD');
    } catch (e) {
        return input;
    }
}

export function persian(input: any) {
    try {
        if (input === undefined) return '';
        let str1 = input.toString().trim();
        if (str1 === '') return '';
        str1 = str1.replace(/0/img, '۰');
        str1 = str1.replace(/1/img, '۱');
        str1 = str1.replace(/2/img, '۲');
        str1 = str1.replace(/3/img, '۳');
        str1 = str1.replace(/4/img, '۴');
        str1 = str1.replace(/5/img, '۵');
        str1 = str1.replace(/6/img, '۶');
        str1 = str1.replace(/7/img, '۷');
        str1 = str1.replace(/8/img, '۸');
        str1 = str1.replace(/9/img, '۹');
        return str1;
    } catch (e) {
        return input;
    }
}


export function getTime(input: string) {
    try {
        let time = input.split(" ")[1].split(":");
        return time[0] + ":" + time[1];
    } catch (e) {
        return input;
    }
}

export function fa(input: any) {
    try {
        if (input === undefined) return '';
        let str1 = input.toString().trim();
        if (str1 === '') return '';
        str1 = str1.replace(/0/img, '۰');
        str1 = str1.replace(/1/img, '۱');
        str1 = str1.replace(/2/img, '۲');
        str1 = str1.replace(/3/img, '۳');
        str1 = str1.replace(/4/img, '۴');
        str1 = str1.replace(/5/img, '۵');
        str1 = str1.replace(/6/img, '۶');
        str1 = str1.replace(/7/img, '۷');
        str1 = str1.replace(/8/img, '۸');
        str1 = str1.replace(/9/img, '۹');
        return str1;
    } catch (e) {
        return input;
    }
}