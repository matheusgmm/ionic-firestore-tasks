import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FacebookAuthProvider, UserCredential, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthOptions, AuthProvider, User } from './auth.types';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<any>;


  constructor(private afAuth: AngularFireAuth) { 
    this.authState$ = this.afAuth.authState;
  }

  get isAuthenticated(): Observable<boolean> {
    return this.authState$.pipe(map(user => user !== null));
  }


  authenticate({ isSignIn, provider, user }: AuthOptions) {
    let operation;

    if (provider !== AuthProvider.Email) {
      operation = this.signInWithPopup(provider);

    } else {
      operation = isSignIn ? this.signInWithEmail(user) : this.signUpWithEmail(user);
    }

    return operation;
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }


  private signInWithEmail({ email, password }: User) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  private signUpWithEmail({email, password, name}: User ) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(credentials => 
        credentials.user
          ?.updateProfile({ displayName: name, photoURL: null})
          .then(() => credentials)
        );
  }


  private signInWithPopup(provider: AuthProvider) {
    let signInProvider = null;

    switch(provider) {
      case AuthProvider.Facebook:
        signInProvider = new FacebookAuthProvider();
        break;
    }
    return this.afAuth.signInWithPopup(signInProvider as any);
  }

}
