import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  name: string = '';
  imageFile!: File;
  imagePreview: string | ArrayBuffer | null = null;
  items: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getItems().subscribe(data => this.items = data);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;

      const reader = new FileReader();
      reader.onload = e => this.imagePreview = reader.result;
      reader.readAsDataURL(file);
    }
  }

  submit() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('image', this.imageFile);

    this.itemService.addItem(formData).subscribe(() => {
      this.name = '';
      this.imagePreview = null;
      this.loadItems();
    });
  }

  delete(id: number) {
    this.itemService.deleteItem(id).subscribe(() => this.loadItems());
  }
}
