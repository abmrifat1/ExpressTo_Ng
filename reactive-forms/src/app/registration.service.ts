import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User, Sample } from "./user";
import { IResponse } from "./iresponse";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  _url = "http://localhost:3000/";
  constructor(private _http: HttpClient) {}

  register(userData: User) {
    return this._http.post<User>(this._url + "enroll", userData);
  }

  getList(): Observable<IResponse<Sample[]>> {
    return this._http.get<IResponse<Sample[]>>(this._url + "list");
  }
}
