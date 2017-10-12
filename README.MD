This project aims at validaing ui:inputdate format to MM/DD/YYYY in lighting using moment js.

Download momentJS from here: https://momentjs.com/ and load it into the static resource( do not go for CDN option locker service will not support CDN)

Though this JS library is not officially published as locker supported third party library , i looked this forum and saw @mohith answer this question: https://salesforce.stackexchange.com/questions/183730/is-there-a-version-of-moment-js-that-works-with-the-current-locker-service/183735

The only close answer I found to validate mm/dd/yyyy format was by using momentJS, all other options will fail you somewhere down the line.

![screenshot](https://github.com/Rao6308/LightningvalidatedateMMDDYYY/blob/master/src/Validatedate.gif)