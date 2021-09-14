import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JengalYazilim';

  data1 = { name: "Ramirez Marsh", picture: "https://picsum.photos/900/600", company: "EXOSIS", balance: "$3,200.43" }
  data2 = { name: "Burch Frank", picture: "https://picsum.photos/900/600", company: "RETROTEX", balance: "$3,875.32" }
  data3 = { name: "Dora Burt", picture: "https://picsum.photos/900/600", company: "MAXIMIND", balance: "$3,945.66" }
  data4 = { name: "Katheryn Ryan", picture: "https://picsum.photos/900/600", company: "MAGNEATO", balance: "$2,555.41" }
  data5 = { name: "Wilma Mercado", picture: "https://picsum.photos/900/600", company: "ZAGGLES", balance: "$$2,094.95" }
  data6 = { name: "Carrillo Pennington", picture: "https://picsum.photos/900/600", company: "TALAE", balance: "$3,440.09" }
  data7 = { name: "Liz Gonzales", picture: "https://picsum.photos/900/600", company: "QUILM", balance: "$3,379.80" }

  jengaldata = [this.data1, this.data2, this.data3, this.data4, this.data5, this.data6, this.data7]
}
