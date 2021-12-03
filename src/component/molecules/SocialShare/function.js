export const handleOnFacebookShare = (e) => {
  e.preventDefault();
  let width = 650,
    height = 450;
  let facebookWindow = window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" + document.URL,
    "facebook-popup",
    "height=450,width=650",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes"
  );

  if (facebookWindow.focus) {
    facebookWindow.focus();
  }

  return false;
};
export const handleOnTwitterShare = (e) => {
  let width = 650,
    height = 450;
  let twitterWindow = window.open(
    "https://twitter.com/share?url=" + document.URL,
    "twitter-popup",
    "height=350,width=600"
  );

  if (twitterWindow.focus) {
    twitterWindow.focus();
  }

  return false;
};
export const handleOnLinkedShare = (e) => {
  let width = 650,
    height = 450;
  e.preventDefault();
  let LinkedinWindow = window.open(
    "https://www.linkedin.com/sharer/sharer.php?u=" + document.URL,
    "linkedin-popup",
    "height=350,width=600"
  );

  if (LinkedinWindow.focus) {
    LinkedinWindow.focus();
  }

  return false;
};
