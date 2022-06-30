/*
404 page
Show link to redirect to correct page and redirect.
*/
import {nonmatching_tickets} from "./redirect_rules.mjs"

var p = window.location.pathname

if (p.match('/trac/ticket/')) {
    var new_url = 'https://github.com/twisted/twisted/issues/'
    p = window.location.pathname
    var r = p.split('/')
    var trac_id = r[r.length - 1]

    if(trac_id == '') {
        trac_id = r[r.length - 2]
    }

    new_url = new_url + trac_to_github(parseInt(trac_id))

    $('#js-redirection a').text('GitHub issue')
    $('#js-redirection a').attr('href', new_url)
    $('#js-redirection').removeClass('tw-hidden')

    window.location = new_url
}

// Method to convert the Trac ID to GitHub.
function trac_to_github(trac_id) {
    if (nonmatching_tickets.has(trac_id)) {
        return nonmatching_tickets.get(trac_id)
    }
    return trac_id
}
