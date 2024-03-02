import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";

@Injectable({ providedIn: 'root'})
export class enrolmentsService {
    constructor(private http: HttpClient) {

    }

    getEnrolments() {
        return this.http.get(`${environment.apiUrl}/enrolments?_embed=student&_embed=course`)
    }
}