import {Observable, of} from 'rxjs'
import {delay, switchMap} from 'rxjs/operators'

let myObservable = of(
  of(1, 2).pipe(delay(1)),
  of(3, 4).pipe(delay(1)),
  of(5, 6).pipe(delay(1))
);

myObservable
  .pipe(
    switchMap(x => x)
  )
  .subscribe(
    val   => console.log(val),
    error    => console.error(error),
    () => console.log('completed')
  );