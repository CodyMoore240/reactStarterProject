export default function() {
  //get a query string here
  const urlParams = new URLSearchParams(window.location.search)
      
  //check if the url has a mode param AND it is set to signIn
  if (urlParams.has('mode') && urlParams.get('mode') === `signIn`) {
    //the user got here from a magic link
    return true
  } else {// there was no url param or it did not have the right value
    return false
  }
}
