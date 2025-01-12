import { Component } from '@angular/core';
import { SingleColumnComponent } from '@app/shared';
import { MarkdownModule } from 'ngx-markdown';
import { AdditionalResources, BasicContent, TipsContent, ThirdPartyLibsContent, AngularAnimationsContent } from '@app/core';
import { ContentCardComponent } from './content-card/content-card.component';
import { CommonModule } from '@angular/common';

@Component({
    imports: [CommonModule, SingleColumnComponent, MarkdownModule, ContentCardComponent],
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

  basicContent = BasicContent;
  angularAnimationsContent = AngularAnimationsContent;
  thirdPartyLibsContent = ThirdPartyLibsContent;
  tipsContent = TipsContent;
  additionalResources = AdditionalResources;
}