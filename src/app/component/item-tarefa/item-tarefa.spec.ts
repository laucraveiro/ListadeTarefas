import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemTarefa } from './item-tarefa';

describe('ItemTarefa', () => {
  let component: ItemTarefa;
  let fixture: ComponentFixture<ItemTarefa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTarefa],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemTarefa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});