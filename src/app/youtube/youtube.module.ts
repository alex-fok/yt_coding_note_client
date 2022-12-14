import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { YtWrapperComponent } from './yt-wrapper/yt-wrapper.component';
import { YtVideoComponent } from './yt-video/yt-video.component';

@NgModule({
  declarations: [
    YtWrapperComponent,
    YtVideoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    YouTubePlayerModule
  ],
  exports: [
    YtWrapperComponent
  ]
})
export class YoutubeModule { }
