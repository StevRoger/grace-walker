import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  AmazonLoginProvider,
  FacebookLoginProvider,
  GoogleLoginProvider, MicrosoftLoginProvider,
  SocialAuthService,
  SocialUser, VKLoginProvider
} from "angularx-social-login";
import {MatDialog} from "@angular/material/dialog";
import {Router, RouterLink} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  // @ts-ignore
  @ViewChild('siteCreditDialog') siteCreditDialog: TemplateRef<any>;
  public user: SocialUser | any;
  public GoogleLoginProvider = GoogleLoginProvider;

  constructor(
    private readonly _authService: SocialAuthService,
    public dialog: MatDialog,
    private _router: Router,
    private _matSnackBar: MatSnackBar
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

  openCredit(): void {
    this.dialog.open(this.siteCreditDialog, {autoFocus: false});
  }

  signInWithFB(): void {
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
      localStorage.setItem('FACEBOOK_USER', JSON.stringify(user));
      this._router.navigateByUrl('home').then();
    });
  }

  signInWithGoogle(): void {
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      localStorage.setItem('GOOGLE_USER', JSON.stringify(user));
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
