import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivedemo';
  colors = ["red", "orange", "blue", "yellow", "cyan"];
  people =
    [
      {
        "id": 100, "name": "Shubham", "age": 28, "country": "UK"
      },
      {
        "id": 101, "name": "Ashutosh", "age": 30, "country": "Australia"
      },
      {
        "id": 102, "name": "Rahul", "age": 26, "country": "Dubai"
      },
      {
        "id": 103, "name": "Sherin", "age": 38, "country": "Israel"
      },
      {
        "id": 104, "name": "Bitcode", "age": 18, "country": "India"
      },
      {
        "id": 104, "name": "Shruti", "age": 25,
      }
    ];
  
  getColor(country: string | undefined): string
  {
    switch (country) {
      case "UK":
        return "red";
      case "Dubai":
        return "green";
      case "Israel":
        return "yellow";
      case "India":
        return "blue";
      default:
        return "cyan";
    }
  }
}
