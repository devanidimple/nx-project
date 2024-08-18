import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderDataFramesComponent } from './render-data-frames.component';

describe('RenderDataFramesComponent', () => {
  let component: RenderDataFramesComponent;
  let fixture: ComponentFixture<RenderDataFramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderDataFramesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderDataFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
