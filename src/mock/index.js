
const Mock = require('mockjs');
Mock.mock("/index/list",'get',require("./json/list.json"))