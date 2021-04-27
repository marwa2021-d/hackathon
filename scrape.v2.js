const puppeteer = require('puppeteer');
const express = require('express');

const scrape = async (url) => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    const data = await page.evaluate(() => {

        let result = {};

        result.title = document.querySelector('h1').innerText;

        result.description = document.querySelector('article').children[1].children[1].innerText;
        
        return result;
    })
    console.log(data);

    await browser.close();
    
    return data;
};

module.exports = {
    scrape: scrape,
}

