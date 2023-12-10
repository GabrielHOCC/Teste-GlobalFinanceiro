import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarDadosApiService {
  private readonly url: string = 'https://hp-api.onrender.com/api/characters';
  private httpOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  public getAllCharacters(): Observable<
    [
      {
        id: string;
        name: string;
        alternate_names: [];
        species: string;
        gender: string;
        house: string;
        dateOfBirth: string;
        yearOfBirth: string;
        wizard: boolean;
        ancestry: string;
        eyeColour: string;
        hairColour: string;
        wand: {
          wood: string;
          core: string;
          length: number;
        };
        patronus: string;
        hogwartsStudent: boolean;
        hogwartsStaff: boolean;
        actor: string;
        alternate_actors: [];
        alive: boolean;
        image: string;
      }
    ]
  > {
    return this.http.get<
      [
        {
          id: string;
          name: string;
          alternate_names: [];
          species: string;
          gender: string;
          house: string;
          dateOfBirth: string;
          yearOfBirth: string;
          wizard: boolean;
          ancestry: string;
          eyeColour: string;
          hairColour: string;
          wand: {
            wood: string;
            core: string;
            length: number;
          };
          patronus: string;
          hogwartsStudent: boolean;
          hogwartsStaff: boolean;
          actor: string;
          alternate_actors: [];
          alive: boolean;
          image: string;
        }
      ]
    >(this.url);
  }
}
