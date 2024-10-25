/**
 * Handle ajax/async functions on set state:
 * Reference: https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
 */
function MakeCancelable(promise) {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (val) => (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)),
      (error) => (hasCanceled_ ? reject({ isCanceled: true }) : reject(error))
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
}

export { MakeCancelable };
