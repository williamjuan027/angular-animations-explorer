import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import * as popmotion from 'popmotion';

@Component({
  selector: 'app-mockup',
  templateUrl: './app-mockup.component.html',
  styleUrls: ['./app-mockup.component.scss'],
})
export class AppMockupComponent implements AfterViewInit {
  @ViewChild('appMockupSvg') appMockupSvg: ElementRef;
  private timeline;
  private elements;
  private circles;

  // TODO: add elements falling when clicking on the power off button

  ngAfterViewInit(): void {
    const objElm = this.appMockupSvg.nativeElement as HTMLObjectElement;
    try {
      this.setupElements(objElm);
      this.animate();
    } catch (e) {
      // if failed, it means elements haven't loaded yet,
      // hook into the onload event and try again
      objElm.onload = () => {
        this.setupElements(objElm);
        this.animate();
      };
    }
  }

  private setupElements(objElm: HTMLObjectElement): void {
    this.elements = objElm.querySelectorAll('path');
    this.circles = objElm.querySelectorAll('circle');

    // hide everything prior to animating
    this.elements.forEach((element) => (element.opacity = 0));
    this.circles.forEach((element) => (element.opacity = 0));

    // display container after all the children are hidden
    this.appMockupSvg.nativeElement.style.opacity = 1;
  }

  animateReverse(): void {
    if (this.timeline) {
      this.timeline.reverse();
    }
  }

  animate() {
    this.timeline = gsap
      .timeline({
        onComplete: () => console.log('animation completed'),
        onStart: () => console.log('animation started'),
      })
      // TODO: clean this up and add names to each element

      // device frame
      .fromTo(
        this.elements[0],
        { opacity: 0 },
        { duration: 0.5, opacity: 1 },
        '0'
      )
      .fromTo(
        this.elements[1],
        { opacity: 0 },
        { duration: 0.5, opacity: 1 },
        '0'
      )

      // contents
      .fromTo(
        this.elements[2],
        { scale: 0, opacity: 0 },
        { duration: 0.4, scale: 1, opacity: 1 },
        '1.1'
      )
      // dark frames
      .fromTo(
        this.elements[3],
        { scale: 0, opacity: 0 },
        { duration: 0.4, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1'
      )
      .fromTo(
        this.elements[4],
        { scale: 0, opacity: 0 },
        { duration: 0.3, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.1'
      )
      .fromTo(
        this.elements[5],
        { scale: 0, opacity: 0 },
        { duration: 0.3, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.2'
      )
      .fromTo(
        this.elements[6],
        { scale: 0, opacity: 0 },
        { duration: 0.3, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.3'
      )

      .fromTo(
        this.circles[0],
        { scaleY: 0, opacity: 0 },
        { duration: 0.3, scaleY: 1, opacity: 1, ease: popmotion.backOut }
      )
      .fromTo(
        this.circles[1],
        { scaleY: 0, opacity: 0 },
        { duration: 0.3, scaleY: 1, opacity: 1, ease: popmotion.backOut }
      )

      .fromTo(
        this.elements[15],
        { scale: 0, opacity: 0 },
        { duration: 0.3, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.3'
      )

      .fromTo(
        this.elements[7],
        { scale: 0, opacity: 0 },
        { duration: 0.3, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.5'
      )
      .fromTo(
        this.elements[8],
        { scale: 0, opacity: 0 },
        { duration: 0.3, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.6'
      )
      .fromTo(
        this.elements[9],
        { scale: 0, opacity: 0 },
        { duration: 0.3, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.6'
      )

      //   gray lines
      .fromTo(
        this.elements[10],
        { scale: 0, opacity: 0 },
        { duration: 0.3, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.5'
      )
      .fromTo(
        this.elements[11],
        { scale: 0, opacity: 0 },
        { duration: 0.3, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.6'
      )

      //   blue lines top
      .fromTo(
        this.elements[12],
        { scale: 0, opacity: 0 },
        { duration: 0.3, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.8'
      )
      .fromTo(
        this.elements[13],
        { scaleY: 0, opacity: 0 },
        { duration: 0.4, scaleY: 1, opacity: 1, ease: popmotion.backOut },
        '1.3'
      )

      .fromTo(
        this.elements[14],
        { scaleY: 0, opacity: 0 },
        { duration: 0.4, scaleY: 1, opacity: 1, ease: popmotion.backOut },
        '1.4'
      )
      .fromTo(
        this.elements[16],
        { scale: 0, opacity: 0 },
        { duration: 0.3, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.5'
      )

      //   bottom left gray box
      .fromTo(
        this.elements[17],
        { scale: 0, opacity: 0 },
        { duration: 0.4, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.6'
      )
      .fromTo(
        this.elements[18],
        { scale: 0, opacity: 0 },
        { duration: 0.3, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.7'
      )
      .fromTo(
        this.elements[19],
        { scale: 0, opacity: 0 },
        { duration: 0.4, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.8'
      )

      // bottom right gray box
      .fromTo(
        this.elements[20],
        { scale: 0, opacity: 0 },
        { duration: 0.4, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.75'
      )
      .fromTo(
        this.elements[21],
        { scale: 0, opacity: 0 },
        { duration: 0.4, scale: 1, opacity: 1, ease: popmotion.backOut },
        '1.85'
      );
  }
}
