import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-render-data-frames',
  standalone: true,
  imports: [],
  templateUrl: './render-data-frames.component.html',
  styleUrl: './render-data-frames.component.scss',
})
export class RenderDataFramesComponent {
  safeSrc: SafeResourceUrl;
  @Input() sourceURL: string = '';
  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) {
    console.log('sourceURL', this.sourceURL);
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      decodeURI(this.sourceURL) // 'https://www.youtube.com/embed/c9F5kMUfFKk'
    );
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log('params', params);
      this.sourceURL = params.get('value') || ''; // Retrieve the parameter
      this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
        decodeURI(this.sourceURL) // 'https://www.youtube.com/embed/c9F5kMUfFKk'
      );
    });
  }
}
