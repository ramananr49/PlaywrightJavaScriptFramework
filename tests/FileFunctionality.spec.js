const {test, expect} = require('@playwright/test')
import Excel from 'exceljs'

const datastr = JSON.stringify(require('../testData/FileHandiling_TestData.json'))
const dataset = JSON.parse(datastr)

for(const data of dataset)
{
    test(`Download and upload modified file for ${data.searchText}`, async ({page}) =>
        {
            const path = "C:\\Users\\Ramanan\\Downloads\\download.xlsx"
            await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html")
        
            const [download] = await Promise.all([
                page.waitForEvent('download'),
                page.locator("#downloadButton").click()
            ])
            await download.saveAs(path)
            await writeExcel(path, data.searchText, data.replaceText, {rowChange: 0, colChange: 2})
            // await page.locator("#fileinput").click()
            await page.locator("#fileinput").setInputFiles(path)
            const desiredRow = await page.getByRole('row', {name: data.searchText})
            await expect(desiredRow.locator("#cell-4-undefined")).toContainText(data.replaceText)
        })
}



async function writeExcel(filepath, searchText, replaceText, change)
{
    const workbook = new Excel.Workbook()
    await workbook.xlsx.readFile(filepath)
    const worksheet = workbook.getWorksheet('Sheet1')
    const output = await readExcel(worksheet, searchText)
    console.log(output)
    const cell = worksheet.getCell(output.row, output.column+change.colChange)
    cell.value = replaceText
    await workbook.xlsx.writeFile(filepath)
}

async function readExcel(worksheet, searchText) 
{
    let output = {row: -1, column: -1}
    worksheet.eachRow((row, rowNumber) =>
        {
            row.eachCell((cell, colNumber) =>
            {
                if(cell.value === searchText)
                {
                    output.row = rowNumber
                    output.column = colNumber
                }
            })
        })
    return output
}