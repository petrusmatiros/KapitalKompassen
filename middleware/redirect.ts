export default function ({ route, redirect }:any) {
    if (route.path !== '/calc') {
      return redirect('/calc')
    }
  }
  