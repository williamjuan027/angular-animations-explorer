import {
  AfterViewInit,
  Component,
  ElementRef,
  EmbeddedViewRef,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-animate-style-demo',
  templateUrl: './animate-style.demo.component.html',
  styleUrls: ['./animate-style.demo.component.scss'],
})
export class AnimateStyleDemoComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  @ViewChild('cardContainer') cardContainer: ElementRef;
  @ViewChild('template', { read: TemplateRef }) template: TemplateRef<null>;

  cardIsDisplayed = true;
  isAnimating = false;

  private viewRef: EmbeddedViewRef<any> | null = null;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._addCardToView();
    });
  }

  toggleCard(): void {
    this.cardIsDisplayed = !this.cardIsDisplayed;
    if (this.cardIsDisplayed) {
      this._showCard();
    } else {
      this._hideCard();
    }
  }

  bounceCard(): void {
    this._animate('bounce').catch((e) => {
      console.error('Error animating element:', e);
    });
  }

  wobbleCard(): void {
    this._animate('wobble').catch((e) => {
      console.error('Error animating element:', e);
    });
  }

  private _showCard(): void {
    this._addCardToView().then(() => {
      this._animate('zoomInDown').catch((e) => {
        console.error('Error animating element:', e);
      });
    });
  }

  private _hideCard(): void {
    this._animate('fadeOut', true)
      .then(() => {
        this._removeCardFromView();
      })
      .catch((e) => {
        console.error('Error animating element:', e);
      });
  }

  private _animate(animationName: string, persistClass = false): Promise<void> {
    if (!this.cardContainer || !this.cardContainer.nativeElement) {
      return Promise.reject('element not defined');
    }

    if (this.isAnimating) {
      return Promise.reject('element is animating');
    }
    return new Promise((resolve) => {
      this.isAnimating = true;

      // listen to animationend to allow additional logic to be run
      // after the animation from animate.style is done executing
      this.cardContainer.nativeElement.addEventListener(
        'animationend',
        (event) => {
          if (event.animationName === animationName) {
            this.isAnimating = false;
            if (!persistClass) {
              this.cardContainer.nativeElement.classList = '';
            }
            resolve();
          }
        },
        { once: true }
      );
      this.cardContainer.nativeElement.classList = `animate__animated animate__${animationName}`;
    });
  }

  private _addCardToView(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.viewRef) {
        this.container.clear();

        // add element to container
        this.viewRef = this.container.createEmbeddedView(this.template);

        // wrap in settimeout because it tries to animate before
        // view is loaded
        setTimeout(() => {
          if (this.cardContainer && this.cardContainer.nativeElement) {
            // set opacity to 1 to make element visible before starting enter animation
            this.renderer.setStyle(
              this.cardContainer.nativeElement,
              'opacity',
              1
            );
          }
          resolve();
        });
      } else {
        resolve();
      }
    });
  }

  private _removeCardFromView(): void {
    this.container.clear();
    if (this.viewRef) {
      this.viewRef.destroy();
      this.viewRef = null;
    }
  }
}
