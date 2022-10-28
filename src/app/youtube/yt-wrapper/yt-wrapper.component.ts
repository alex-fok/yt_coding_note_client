import { Component, OnInit } from '@angular/core';
import { TimeSegmentService } from 'src/app/services/time-segment.service';

@Component({
  selector: 'app-yt-wrapper',
  templateUrl: './yt-wrapper.component.html',
  styleUrls: ['./yt-wrapper.component.scss']
})
export class YtWrapperComponent implements OnInit {
  constructor(public timeSegmentService: TimeSegmentService) { }

  ngOnInit(): void { }
  updateCurrent(value: number) {
    this.timeSegmentService.update(value)
  }
}
