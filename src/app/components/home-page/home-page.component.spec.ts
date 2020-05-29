import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePageComponent } from './home-page.component';


describe('HomePageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      declarations: [
        HomePageComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'U Business'`, async(() => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('U Business');
  }));
  it('should render title in a header className', async(() => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.header').textContent).toContain('U Business');
  }));
});
