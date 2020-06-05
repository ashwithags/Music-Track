import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GetTrackService } from './get-track.service';

describe('GetTrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 

  }));

  it('should be created', () => {
    const service: GetTrackService = TestBed.get(GetTrackService);
    expect(service).toBeTruthy();
  });
  
  it('sum should be 10',()=>{
    const a =10;
    const b= 0;
    const sum = a+b;
    expect(sum).toBe(10);
  })
});
