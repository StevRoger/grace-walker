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

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  // @ts-ignore
  @ViewChild('siteCreditDialog') siteCreditDialog: TemplateRef<any>;
  public user: SocialUser | undefined;
  public GoogleLoginProvider = GoogleLoginProvider;

  constructor(
    private readonly _authService: SocialAuthService,
    public dialog: MatDialog,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    this._authService.authState.subscribe((user) => {
      this.user = user;
      if (this.user.id) {
        localStorage.setItem('USER', JSON.stringify(user));
        this._Router.navigateByUrl('home').then();
      }
      console.log('subscribed user =>', this.user);
    }, error => {
      console.log(error);
    });
  }

  openCredit(): void {
    this.dialog.open(this.siteCreditDialog, {autoFocus: false});
  }

  signInWithFB(): void {
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
      // Do something after login is successful.
      console.log('Facebook user', user);
    });
  }

  signInWithGoogle(): void {
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      // Do something after login is successful.
      console.log('Google user:', user);
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
