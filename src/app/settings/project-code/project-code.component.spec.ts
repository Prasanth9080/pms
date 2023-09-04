import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCodeComponent } from './project-code.component';

describe('ProjectCodeComponent', () => {
  let component: ProjectCodeComponent;
  let fixture: ComponentFixture<ProjectCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCodeComponent]
    });
    fixture = TestBed.createComponent(ProjectCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
