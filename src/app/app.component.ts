import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private file: File = null;
  constructor(private http: HttpClient) {}
  handleFileInput(files: FileList) {
    this.file = files.item(0)
  }
  uploadFile() {
    const formData: FormData = new FormData();
    formData.append('file', this.file, this.file.name);
    this.http.post("https://upload-service-ess.herokuapp.com/api/uploadImage", formData).subscribe((result) => {
      alert(JSON.stringify(result))
    }, error => {
      alert(JSON.stringify(error))
    })
  }
}
