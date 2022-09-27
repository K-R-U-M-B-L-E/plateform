export default function inlightBuilder(array) {

     var i = 0;
     var len = array.length
     var inlight = []

     while (i < 4 && i < len )
     {
        inlight.push(array[i])
        i++
     }

     return inlight;
}