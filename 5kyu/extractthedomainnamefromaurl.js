function domainName(url) {
  url = url.replace(/^https?:\/\//, "");
  url = url.replace(/^www\./, "");
  return url.split(".")[0].split("/")[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"));

// smart
// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };
