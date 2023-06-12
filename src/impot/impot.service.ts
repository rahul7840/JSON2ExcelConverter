import { Injectable } from '@nestjs/common';
import { importDTO } from './dto/impoDto';
// import * as xlsx from 'xlsx';
import * as xlsxStyle from 'xlsx-style';
import * as xlsx from 'xlsx-populate';
import * as json2xls from 'json2xls';
import * as fs from 'fs';

@Injectable()
export class ImpotService {

    async importJson(impoDto:importDTO){}

   async convertJsonToExcel(data, filePath: string) {
        const xls = json2xls(data);
        fs.writeFileSync(filePath, xls, 'binary');
}
//-----------------------------------------------------------------------------------------
async exportData() {
    try {
      const jsonData = [
        {
            "agent": "agent1",
            "donotcall": "1",
            "callmeletter": "2",
            "intrested": "3",
            "complaint": "4",
            "notPickedUp": "5",
            "disconnected": "6",
            "hangUp": "7"
        },
        {
            "agent": "ajent2",
            "complaint": "4",
            "notPickedUp": "5",
            "disconnected": "6",
            "hangUp": "7"
         
        },
        {
            "agent": "ajent3",
            "donotcall": "1",
            "callmeletter": "2",
            "intrested": "3",
            "hangUp": "7"
     
        },
        {
            "agent": "vinod",
            "donotcall": "1",
            "callmeletter": "2",
            "intrested": "3",
            "complaint": "4",
          
        }
      ];
  
      const workbook = await xlsx.fromBlankAsync();
      const sheet = workbook.sheet(0);
  
      // Define header style with bold font, border, and background color
      const headerStyle = {
        bold: true,
        border: true,
        fill: {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { rgb: 'FFFFE0' }, 
        },
      };
      
      const dataStyle = {
        border: true,
        fill:  'F0E68C'  
        
      };
  
      const headers = Object.keys(jsonData[0]);
      headers.forEach((header, index) => {
        sheet.cell(1, index + 1).value(header).style(headerStyle)
      });
  
      // Add data rows
    //   for (let i = 0; i < jsonData.length; i++) {
    //     const data = Object.values(jsonData[i]);
    //     for (let j = 0; j < data.length; j++) {
    //         const value = data[j] || ''
    //       sheet.cell(i + 2, j + 1).value(value).style(dataStyle);
    //     }
    //   }
    for (let i = 0; i < jsonData.length; i++) {
        for (let j = 0; j < headers.length; j++) {
          const value = jsonData[i][headers[j]] || ''; // Set empty string if key doesn't exist
          sheet.cell(i + 2, j + 1).value(value).style(dataStyle);
        }
      }
      
  
      // Auto-adjust column widths
      headers.forEach((_, index) => {
        sheet.column(index + 1).width(15);
      });
  
      const buffer = await workbook.outputAsync();
      fs.writeFileSync('sheetData.xlsx', buffer, 'binary');
  
      return { message: 'file is downloaded' };
    } catch (e) {
      console.log('Error in exportData:', e);
      throw e;
    }
  }
  
  








// async exportData(){
//     try{
//         const jsonData = [
//             {
//               "agent": "agent1",
//               "donotcall": "11",
//               "callmeletter": "10",
//             },
//             {
//               "agent": "agent2",
//               "donotcall": "1",
//               "callmeletter": "2",
//               "complaint": "55",
//               "notPickedUp": "32",
//               "disconnected": "2",
//               "hangUp": "19"
//             },
//             {
//               "agent": "agent3",
//               "donotcall": "11",
//               "callmeletter": "10",
//               "intrested": "5",
//               "disconnected": "3",
//               "hangUp": "10"
//             },
//             {
//               "agent": "agent4",
//               "donotcall": "1",
//               "intrested": "5",
//               "complaint": "55",
//               "disconnected": "2",
//               "hangUp": "19"
//             }
//           ];
          
//       const worksheet = xlsx.utils.json_to_sheet(jsonData);
// /*
// // // Define header style with bold font, border, and background color
// // const headerStyle = {
// //   font: { bold: true },
// //   border: {
// //     top: { style: 'thin' },
// //     bottom: { style: 'thin' },
// //     left: { style: 'thin' },
// //     right: { style: 'thin' },
// //   },
// //   fill: {
// //     type: 'pattern',
// //     pattern: 'solid',
// //     fgColor: { rgb: 'FFC0CB' }, // Pink color
// //   },
// // };

// // // Apply header style to each column header
// // const headers = Object.keys(jsonData[0]);
// // headers.forEach((header, index) => {
// //   const cellAddress = xlsx.utils.encode_cell({ r: 0, c: index });
// //   const cell = worksheet[cellAddress];
// //   cell.s = headerStyle;
// // });

// // // Auto-adjust column widths
// // const columnWidths = headers.map((header) => ({ wch: header.length + 2 }));
// // worksheet['!cols'] = columnWidths;
// // ;
// */
//      const workbook =xlsx.utils.book_new();   //our data is here
//      //we will append book upon sheet
//      xlsx.utils.book_append_sheet(workbook,worksheet,"sheetName")


//       //genrate buffer //or we can give book extention/type
//       const buffer =  xlsx.write(workbook,{bookType:'xlsx', type:"buffer"})
   

//       //const binaryString = xlsx.write(workbook,{bookType:'xlsx', type:"binary"})

//       xlsx.writeFile(workbook,"sheetData.xlsx")
//       return { message:"file is downloaded" };
// }
// catch(e)
// {console.log('Error in exportData =>',e)}
// }


}