import { TestBed } from '@angular/core/testing';

import { TaskInfoService } from './task-info.service';

describe('TaskInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskInfoService = TestBed.get(TaskInfoService);
    expect(service).toBeTruthy();
  });
});
