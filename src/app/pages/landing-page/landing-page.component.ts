import {Component, OnInit} from '@angular/core';
import {
  AmazonLoginProvider,
  FacebookLoginProvider,
  GoogleLoginProvider, MicrosoftLoginProvider,
  SocialAuthService,
  SocialUser, VKLoginProvider
} from "angularx-social-login";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public user: SocialUser | any;
  public GoogleLoginProvider = GoogleLoginProvider;

  constructor(
    private readonly _authService: SocialAuthService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    // this._authService.authState.subscribe((user) => {
    //   this.user = user;
    //   if (this.user.provider) {
    //     localStorage.setItem('GOOGLE_USER', JSON.stringify(user));
    //     this._router.navigateByUrl('home').then();
    //   } else if (this.user['first_name']){
    //     localStorage.setItem('FACEBOOK_USER', JSON.stringify(user));
    //     this._router.navigateByUrl('home').then();
    //   } else {
    //     this._matSnackBar.open('Something went wrong! Please try again!');
    //   }
    // }, error => {
    //   console.log(error);
    //   this._matSnackBar.open('Login failed! Please try again!');
    // });
  }

  signInWithFB(): void {
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
      localStorage.setItem('FACEBOOK_USER', JSON.stringify(user));
      localStorage.removeItem('GOOGLE_USER');
      this._router.navigateByUrl('home').then();
    });
  }

  signInWithGoogle(): void {
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      localStorage.setItem('GOOGLE_USER', JSON.stringify(user));
      localStorage.removeItem('FACEBOOK_USER');
      this._router.navigateByUrl('home').then();
    });
  }

  signInWithAmazon(): void {
    this._authService.signIn(AmazonLoginProvider.PROVIDER_ID).then(() => {
      // Do something after login is successful.
    });
  }

  signInWithVK(): void {
    this._authService.signIn(VKLoginProvider.PROVIDER_ID).then(() => {
      // Do something after login is successful.
    });
  }

  signInWithMicrosoft(): void {
    this._authService.signIn(MicrosoftLoginProvider.PROVIDER_ID).then(() => {
      // Do something after login is successful.
    });
  }

  signOut(): void {
    this._authService.signOut().then(() => {
      // Do something after login is successful.
    });
  }

  refreshGoogleToken(): void {
    this._authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID).then(() => {
      // Do something after login is successful.
    });
  }

}
