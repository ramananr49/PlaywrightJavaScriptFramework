// const {Excel} = require('exceljs')
import Excel from 'exceljs'



async function readExcel(worksheet, searchTxt)
{
    let output = {row: -1, column: -1}
    // const workbook = new Excel.Workbook()
    // await workbook.xlsx.readFile(filepath)
    // const worksheet = await workbook.getWorksheet('Sheet1')
    worksheet.eachRow((row, rowNumber) =>
    {
        row.eachCell((cell, colNumber) =>
        {
            if(cell.value === searchTxt)
            {
                output.row = rowNumber
                output.column = colNumber
            }
        })
    })
    return output
}

async function writeExcel(filepath, searchText, replaceText, change)
{
    const workbook = new Excel.Workbook()
    await workbook.xlsx.readFile(filepath)
    const worksheet = await workbook.getWorksheet('Sheet1')
    const output = await readExcel(worksheet, searchText)
    console.log(output)
    const cell = worksheet.getCell(output.row, output.column+change.columchange)
    cell.value = replaceText
    await workbook.xlsx.writeFile(filepath)
}

const filepath = "C:\\Users\\Ramanan\\Downloads\\download.xlsx"
writeExcel(filepath, "Banana", "100", {rowchange: 0, columchange: 2})
