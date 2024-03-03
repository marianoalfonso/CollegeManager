import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { Enrolment, EnrolmentData, Student } from "../../../models";
import { concatMap } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class enrolmentsService {
    constructor(private http: HttpClient) {

    }

    getEnrolments() {
        return this.http.get<Enrolment[]>(`${environment.apiUrl}/enrolments?_embed=student&_embed=course`)
    }

    createEnrolment(payload: EnrolmentData) {
        return this.http.post<Enrolment>(`${environment.apiUrl}/enrolments`, payload);
    }
}