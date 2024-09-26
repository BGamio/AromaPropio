import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../model/profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl: 'https://xxxxxxxxxxx/api/v1/profiles';

  constructor(private http: HttpClient) { }

  getProfileId(profileId: string) {
    return this.http.get<Profile>(`${this.baseUrl}/${profileId}`);
  }
}
