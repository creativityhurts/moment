
/**************************************************
  Dutch
 *************************************************/

module("lang:nl");

test("format", 18, function() {
    moment.lang('nl');
    var a = [
            ['dddd, MMMM Do YYYY, HH:mm:ss',       'zondag, februari 14de 2010, 15:25:50'],
            ['ddd, HH',                            'zo., 15'],
            ['M Mo MM MMMM MMM',                   '2 2de 02 februari feb.'],
            ['YYYY YY',                            '2010 10'],
            ['D Do DD',                            '14 14de 14'],
            ['d do dddd ddd',                      '0 0de zondag zo.'],
            ['DDD DDDo DDDD',                      '45 45ste 045'],
            ['w wo ww',                            '8 8ste 08'],
            ['h hh',                               '3 03'],
            ['H HH',                               '15 15'],
            ['m mm',                               '25 25'],
            ['s ss',                               '50 50'],
            ['a A',                                'pm PM'],
            ['t\\he DDDo \\d\\ay of t\\he ye\\ar', 'the 45ste day of the year'],
            ['L',                                  '14-02-2010'],
            ['LL',                                 'februari 14 2010'],
            ['LLL',                                'februari 14 2010 15:25'],
            ['LLLL',                               'zondag, 14 februari 2010 15:25']
        ],
        b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
        i;
    for (i = 0; i < a.length; i++) {
        equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
    }
});

test("format YY", 1, function() {
    var b = moment(new Date(2009, 1, 14, 15, 25, 50, 125));
    equal(b.format('YY'), '09', 'YY ---> 09');
});

test("format timezone", 2, function() {
    var b = moment(new Date(2010, 1, 14, 15, 25, 50, 125));
    ok(b.format('z').match(/^[A-Z]{3,4}$/), 'z ---> Something like "PST"');
    ok(b.format('zz').match(/^[A-Z]{3,4}$/), 'zz ---> Something like "PST"');
});

test("format ordinal", 31, function() {
    moment.lang('nl');
    equal(moment([2011, 0, 1]).format('DDDo'), '1ste', '1ste');
    equal(moment([2011, 0, 2]).format('DDDo'), '2de', '2de');
    equal(moment([2011, 0, 3]).format('DDDo'), '3de', '3de');
    equal(moment([2011, 0, 4]).format('DDDo'), '4de', '4de');
    equal(moment([2011, 0, 5]).format('DDDo'), '5de', '5de');
    equal(moment([2011, 0, 6]).format('DDDo'), '6de', '6de');
    equal(moment([2011, 0, 7]).format('DDDo'), '7de', '7de');
    equal(moment([2011, 0, 8]).format('DDDo'), '8ste', '8ste');
    equal(moment([2011, 0, 9]).format('DDDo'), '9de', '9de');
    equal(moment([2011, 0, 10]).format('DDDo'), '10de', '10de');

    equal(moment([2011, 0, 11]).format('DDDo'), '11de', '11de');
    equal(moment([2011, 0, 12]).format('DDDo'), '12de', '12de');
    equal(moment([2011, 0, 13]).format('DDDo'), '13de', '13de');
    equal(moment([2011, 0, 14]).format('DDDo'), '14de', '14de');
    equal(moment([2011, 0, 15]).format('DDDo'), '15de', '15de');
    equal(moment([2011, 0, 16]).format('DDDo'), '16de', '16de');
    equal(moment([2011, 0, 17]).format('DDDo'), '17de', '17de');
    equal(moment([2011, 0, 18]).format('DDDo'), '18de', '18de');
    equal(moment([2011, 0, 19]).format('DDDo'), '19de', '19de');
    equal(moment([2011, 0, 20]).format('DDDo'), '20ste', '20ste');

    equal(moment([2011, 0, 21]).format('DDDo'), '21ste', '21ste');
    equal(moment([2011, 0, 22]).format('DDDo'), '22ste', '22ste');
    equal(moment([2011, 0, 23]).format('DDDo'), '23ste', '23ste');
    equal(moment([2011, 0, 24]).format('DDDo'), '24ste', '24ste');
    equal(moment([2011, 0, 25]).format('DDDo'), '25ste', '25ste');
    equal(moment([2011, 0, 26]).format('DDDo'), '26ste', '26ste');
    equal(moment([2011, 0, 27]).format('DDDo'), '27ste', '27ste');
    equal(moment([2011, 0, 28]).format('DDDo'), '28ste', '28ste');
    equal(moment([2011, 0, 29]).format('DDDo'), '29ste', '29ste');
    equal(moment([2011, 0, 30]).format('DDDo'), '30ste', '30ste');

    equal(moment([2011, 0, 31]).format('DDDo'), '31ste', '31ste');
});

test("format month", 12, function() {
    moment.lang('nl');
    var expected = 'januari jan._februari feb._maart mar._april apr._mei mei._juni jun._juli jul._augustus aug._september sep._oktober okt._november nov._december dec.'.split("_");
    var i;
    for (i = 0; i < expected.length; i++) {
        equal(moment([2011, i, 0]).format('MMMM MMM'), expected[i], expected[i]);
    }
});

test("format week", 7, function() {
    moment.lang('nl');
    var expected = 'zondag zo._maandag ma._dinsdag di._woensdag wo._donderdag do._vrijdag vr._zaterdag za.'.split("_");
    var i;
    for (i = 0; i < expected.length; i++) {
        equal(moment([2011, 0, 2 + i]).format('dddd ddd'), expected[i], expected[i]);
    }
});

test("from", 30, function() {
    moment.lang('nl');
    var start = moment([2007, 1, 28]);
    equal(start.from(moment([2007, 1, 28]).add({s:44}), true),  "een paar seconden", "44 seconds = a few seconds");
    equal(start.from(moment([2007, 1, 28]).add({s:45}), true),  "één minuutje",      "45 seconds = a minute");
    equal(start.from(moment([2007, 1, 28]).add({s:89}), true),  "één minuutje",      "89 seconds = a minute");
    equal(start.from(moment([2007, 1, 28]).add({s:90}), true),  "2 minuten",     "90 seconds = 2 minutes");
    equal(start.from(moment([2007, 1, 28]).add({m:44}), true),  "44 minuten",    "44 minutes = 44 minutes");
    equal(start.from(moment([2007, 1, 28]).add({m:45}), true),  "één uur",       "45 minutes = an hour");
    equal(start.from(moment([2007, 1, 28]).add({m:89}), true),  "één uur",       "89 minutes = an hour");
    equal(start.from(moment([2007, 1, 28]).add({m:90}), true),  "2 uren",       "90 minutes = 2 hours");
    equal(start.from(moment([2007, 1, 28]).add({h:5}), true),   "5 uren",       "5 hours = 5 hours");
    equal(start.from(moment([2007, 1, 28]).add({h:21}), true),  "21 uren",      "21 hours = 21 hours");
    equal(start.from(moment([2007, 1, 28]).add({h:22}), true),  "één dag",         "22 hours = a day");
    equal(start.from(moment([2007, 1, 28]).add({h:35}), true),  "één dag",         "35 hours = a day");
    equal(start.from(moment([2007, 1, 28]).add({h:36}), true),  "2 dagen",        "36 hours = 2 days");
    equal(start.from(moment([2007, 1, 28]).add({d:1}), true),   "één dag",         "1 day = a day");
    equal(start.from(moment([2007, 1, 28]).add({d:5}), true),   "5 dagen",        "5 days = 5 days");
    equal(start.from(moment([2007, 1, 28]).add({d:25}), true),  "25 dagen",       "25 days = 25 days");
    equal(start.from(moment([2007, 1, 28]).add({d:26}), true),  "één maand",       "26 days = a month");
    equal(start.from(moment([2007, 1, 28]).add({d:30}), true),  "één maand",       "30 days = a month");
    equal(start.from(moment([2007, 1, 28]).add({d:45}), true),  "één maand",       "45 days = a month");
    equal(start.from(moment([2007, 1, 28]).add({d:46}), true),  "2 maanden",      "46 days = 2 months");
    equal(start.from(moment([2007, 1, 28]).add({d:74}), true),  "2 maanden",      "75 days = 2 months");
    equal(start.from(moment([2007, 1, 28]).add({d:76}), true),  "3 maanden",      "76 days = 3 months");
    equal(start.from(moment([2007, 1, 28]).add({M:1}), true),   "één maand",       "1 month = a month");
    equal(start.from(moment([2007, 1, 28]).add({M:5}), true),   "5 maanden",      "5 months = 5 months");
    equal(start.from(moment([2007, 1, 28]).add({d:344}), true), "11 maanden",     "344 days = 11 months");
    equal(start.from(moment([2007, 1, 28]).add({d:345}), true), "één jaar",        "345 days = a year");
    equal(start.from(moment([2007, 1, 28]).add({d:547}), true), "één jaar",        "547 days = a year");
    equal(start.from(moment([2007, 1, 28]).add({d:548}), true), "2 jaren",       "548 days = 2 years");
    equal(start.from(moment([2007, 1, 28]).add({y:1}), true),   "één jaar",        "1 year = a year");
    equal(start.from(moment([2007, 1, 28]).add({y:5}), true),   "5 jaren",       "5 years = 5 years");
});

test("suffix", 2, function() {
    moment.lang('nl');
    equal(moment(30000).from(0), "over een paar seconden",  "prefix");
    equal(moment(0).from(30000), "een paar seconden geleden", "suffix");
});


test("now from now", 1, function() {
    moment.lang('nl');
    equal(moment().fromNow(), "een paar seconden geleden",  "now from now should display as in the past");
});


test("fromNow", 2, function() {
    moment.lang('nl');
    equal(moment().add({s:30}).fromNow(), "over een paar seconden", "in a few seconds");
    equal(moment().add({d:5}).fromNow(), "over 5 dagen", "in 5 days");
});

