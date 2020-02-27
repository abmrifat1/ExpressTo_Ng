import { RegistrationService } from "./registration.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private _registrationService: RegistrationService) {}
  title = "reactive-forms";
  testData: any[] = [];

  getUserList = () => {
    this._registrationService.getList().subscribe(
      result => {
        console.log("res", result);
        this.testData = result.data;
      },
      err => console.log("Error!", err)
    );
  };

  ngOnInit() {
    this.getUserList();
  }
}
