# SSR SPA sample using Nuxt.js with TypeScript and Firebase Hosting & Cloud Functions
This is a sample App built by Nuxt. You can run this app on both localhost and Web.

If you want to run this app in the real world, use Firebase. All settings is included in this sample.

## Usage
Install dependencies in root directory and functions directory:

```
// in root directory
yarn

// in funcitons directory
yarn
```

Build app:

```
yarn build
```

Run app in localhost:

```
yarn serve:pro

// now, app is served in http://localhost:8080
```

If you want to use hot reloading, use `yarn dev`.

### deploy to Firebase
First, build this app.

Second, following instruction in [Firebase Official page](https://firebase.google.com), set up the environments.

If you create project and [install and set up firebase cli](https://firebase.google.com/docs/cli), you are ready to deploy.

```
yarn deploy
```

## References
I use these example project as references. 
Thanks!

- [Nuxt guide](https://nuxtjs.org)
- [nuxt typescript-template](https://github.com/nuxt-community/typescript-template)
- [nuxt-firebase-pwa](https://github.com/kamatte-me/nuxt-firebase-pwa)