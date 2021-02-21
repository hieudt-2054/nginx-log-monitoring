// const parser = require("../src/modules/NginxParser")(source);

import Parser from "../src/modules/NginxParser.js"
const accessLog = '- - - [29/Apr/2020:14:23:08 +0700] "GET /teams HTTP/1.1" 200 501 "http://example.com" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36"';
const errorLog = '- - - [29/Apr/2020:14:23:08 +0700] "GET /teams HTTP/1.1" 500 - "http://example.com" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36"'
const { statusCodeAndMessage } = require("../src/templates/analysisHttpStatusCode");
let accessParser = Parser(accessLog);
let errorParser = Parser(errorLog);


test("Valid datatype access log parser", () => {
    expect(typeof accessParser).toBe('object');
})

test("Valid datatype error log parser", () => {
    expect(typeof errorParser).toBe('object');
})

test("Expect status error code valid", () => {
    let isStatusValid = statusCodeAndMessage.filter(e => parseInt(e.code) == errorParser.status).length;
    expect(isStatusValid).toBe(1);
})
