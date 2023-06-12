import { BadRequestException, Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ImpotService } from './impot.service';
import { importDTO } from './dto/impoDto';
import { Response } from 'express';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import * as fs from 'fs';



@Controller('jsontoexcel')
export class ImpotController {
    
constructor(private readonly impoService:ImpotService){}

@Post('/add')
@ApiOperation({ summary: 'Insert a json' })
addJson(@Body() impoDto:importDTO){
     return this.impoService.importJson(impoDto)
 }

//     @Get()
//      // Decorator @Res is provided by Nest to describe Response, not @Response.
//      async getExcel(@Res() res) {

//     let rows = []

//     let data = [{name: "shelly", surname: "shelly"}, {name: "shelly1", surname: "shelly1"},]

//     // Array was called as a function. It has method 'forEach' to iterate.
//     data.forEach(doc => {
//       rows.push(Object.values(doc))
//     })

//     let book = new Workbook();
//     let sheet = book.addWorksheet(`sheet1`);
//     rows.unshift(Object.keys(data[0]));
//     sheet.addRows(rows)


//     let File = await new Promise((resolve,reject) =>{
//       tmp.file({discardDescriptor: true, prefix: `ExcelSheet`, postfix:`.xlsx`, mode: parseInt(`0600`,8)}, async (err, file) =>{
//         if(err)
//           throw new BadRequestException(err);

//         book.xlsx.writeFile(file).then(_ =>{
//           resolve(file)
//         }).catch(err => {
//           throw new BadRequestException(err)
//         })
//       })
//     })


//     res.download(`${File}`)
//   }
    





@Get('export')
async exportData() {
  return await this.impoService.exportData();
}




















// @Get('export') 
// async exportData(@Res() res: Response): Promise<void> {
//   try {
//     const jsonData = [
//       { name: 'John Doe', age: 30, email: 'johndoe@example.com' },
//       { name: 'Jane Smith', age: 25, email: 'janesmith@example.com' },
//     ];

//     const filePath = 'data.xlsx'; // Removed the dot in the file path
//     this.impoService.convertJsonToExcel(jsonData, filePath);

//     res.sendFile(filePath, { root: '.' }, (err) => {
//       if (err) {
//         throw err;
//       }
//       fs.unlinkSync(filePath); // Delete the file after sending
//     });
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// }
   


}
