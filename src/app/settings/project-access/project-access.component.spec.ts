import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAccessComponent } from './project-access.component';

describe('ProjectAccessComponent', () => {
  let component: ProjectAccessComponent;
  let fixture: ComponentFixture<ProjectAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectAccessComponent]
    });
    fixture = TestBed.createComponent(ProjectAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
